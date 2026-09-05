# -*- coding: utf-8 -*-
"""
Convertisseur générique : transforme une base de cours au format
« base-1ac-maroc » (docs/XX-matiere/<CHAP-slug>/{01-cours,02-resume,
03-exercices,04-corriges,05-devoir}.html) en fichier de leçons pour
l'application « Les Révisions d'Hidaya ».

Utilisation :
    python convert_base.py <dossier_chapitres> <id_domaine> <niveau> <fichier_sortie.js>

Exemple :
    python convert_base.py ../base-1ac-maroc/docs/01-arabe arabe "1re année collège · Maroc" js/data-arabe.js

Le code du chapitre est déduit du nom du dossier (ex. « A03-lecture » -> leçon A03).
Regroupe les leçons dans un seul domaine (modifiable ensuite dans js/app.js).
"""
import io, os, re, json, sys

# ---------------------------------------------------------------- utilitaires

def lire(p):
    s = io.open(p, encoding='utf-8').read()
    if '</aside>' in s: s = s.split('</aside>', 1)[1]
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    s = re.sub(r'\s*</div>\s*</body>\s*</html>\s*$', '', s)
    s = re.sub(r'<main>|</main>', '', s)
    s = re.sub(r'<div class="meta">.*?</div>', '', s, flags=re.S)
    s = re.sub(r'<div class="chips">.*?</div>', '', s, flags=re.S)
    s = re.sub(r'<h1[^>]*>.*?</h1>', '', s, flags=re.S)
    return s.strip()

def strip_tags(s):
    return re.sub(r'<[^>]+>', '', s).strip()

def sections_h2(s):
    parts = re.split(r'(<h2[^>]*>.*?</h2>)', s, flags=re.S)
    out, cur_t, cur_c = [], None, []
    for p in parts:
        if p.startswith('<h2'):
            if cur_t is not None: out.append((cur_t, ''.join(cur_c)))
            cur_t, cur_c = strip_tags(re.sub(r'<h2[^>]*>|</h2>', '', p)), []
        else:
            cur_c.append(p)
    if cur_t is not None: out.append((cur_t, ''.join(cur_c)))
    return [(t, c) for t, c in out if t and c.strip()]

def parse_exercices(chap_dir):
    p = os.path.join(chap_dir, '03-exercices.html')
    if not os.path.exists(p): return []
    s = lire(p)
    exos, diff, cur = [], '', None
    parts = re.split(r'(<h2[^>]*>.*?</h2>|<h3[^>]*>\s*Exercice\s+\d+.*?</h3>)', s, flags=re.S)
    for part in parts:
        if part.startswith('<h2'):
            t = strip_tags(re.sub(r'<h2[^>]*>|</h2>', '', part)).lower()
            diff = 'facile' if 'niveau 1' in t else ('difficile' if 'niveau 3' in t else '')
        elif part.startswith('<h3'):
            m = re.search(r'Exercice\s+(\d+)', part)
            if not m: continue
            num = int(m.group(1))
            titre = strip_tags(re.sub(r'<h3[^>]*>|</h3>', '', part))
            titre = re.sub(r'^Exercice\s+\d+\s*[—-]\s*', '', titre)
            cur = {'num': num, 'titre': titre, 'contenu': [], 'diff': diff}
            exos.append(cur)
        elif cur is not None:
            cur['contenu'].append(part)
    for e in exos:
        e['contenu'] = ''.join(e['contenu']).strip()
    return exos

PAT_CORR = (r'(<h2[^>]*>\s*Exercice\s+\d+\s*</h2>'
            r'|<h3[^>]*>\s*Corrigé\s*[—-]\s*Exercice\s+\d+\s*</h3>'
            r'|<h3[^>]*>\s*Exercice\s+\d+\s*(?:[—-]\s*corrigé)?\s*</h3>)')

def parse_corriges(chap_dir):
    p = os.path.join(chap_dir, '04-corriges.html')
    if not os.path.exists(p): return {}
    s = lire(p)
    corr, cur = {}, None
    for part in re.split(PAT_CORR, s, flags=re.S):
        m = re.match(r'<h[23][^>]*>\s*(?:Corrigé\s*[—-]\s*)?Exercice\s+(\d+)\s*(?:[—-]\s*corrigé)?\s*</h[23]>', part)
        if m:
            cur = int(m.group(1)); corr[cur] = []
        elif cur is not None and part.strip():
            if not re.match(r'<h2[^>]*>\s*Niveau', part):
                corr[cur].append(part)
    return {k: ''.join(v).strip() for k, v in corr.items()}

def parse_devoir(chap_dir):
    p = os.path.join(chap_dir, '05-devoir.html')
    if not os.path.exists(p): return None
    s = lire(p)
    m_corr = re.search(r'<h2[^>]*>\s*Corrigé\s*</h2>', s)
    enonce = s[:m_corr.start()].strip() if m_corr else s.strip()
    corrige = s[m_corr.end():].strip() if m_corr else ''
    return {'consigne': enonce or '<p>Voir l’énoncé sur ton cahier.</p>',
            'modele': corrige or '<em>Corrigé à compléter.</em>'}

def objectifs(chap_dir):
    p = os.path.join(chap_dir, '01-cours.html')
    if not os.path.exists(p): return []
    for t, c in sections_h2(lire(p)):
        if 'objectif' in t.lower():
            return [strip_tags(i) for i in re.findall(r'<li>(.*?)</li>', c, flags=re.S)]
    return []

# ---------------------------------------------------------------- conversion

def convertir(dossier, domaine, niveau):
    lecons = []
    chapitres = sorted(d for d in os.listdir(dossier) if os.path.isdir(os.path.join(dossier, d)))
    for chap in chapitres:
        m = re.match(r'^([A-Za-z]+)(\d+)', chap)
        code, num = (m.group(1).upper() + m.group(2).zfill(2)) if m else chap[:3].upper(), (int(m.group(2)) if m else 0)
        d = os.path.join(dossier, chap)
        raw01 = io.open(os.path.join(d, '01-cours.html'), encoding='utf-8').read() if os.path.exists(os.path.join(d, '01-cours.html')) else ''
        if not raw01:
            print('  !! pas de 01-cours.html dans ' + chap + ' — chapitre ignoré'); continue
        s01 = raw01.split('</aside>', 1)[1] if '</aside>' in raw01 else raw01
        hm = re.search(r'<h1[^>]*>(.*?)</h1>', s01)
        titre = re.sub(r'^\S+\s*[—-]\s*', '', strip_tags(hm.group(1))) if hm else chap
        cours_html = lire(os.path.join(d, '01-cours.html'))
        resume = lire(os.path.join(d, '02-resume.html')) if os.path.exists(os.path.join(d, '02-resume.html')) else ''
        blocs = [{'t': 'htmlcard', 'titre': t, 'x': c.strip()}
                 for t, c in sections_h2(cours_html) if 'objectif' not in t.lower()]
        if resume:
            blocs.append({'t': 'htmlcard', 'titre': '📌 Fiche résumé', 'x': resume.strip()})
        corr = parse_corriges(d)
        exos = []
        for e in parse_exercices(d):
            modele = corr.get(e['num'], '')
            exos.append({'type': 'ouverte', 'badge': e['num'], 'consigne': e['titre'], 'diff': e['diff'],
                         'q': e['contenu'],
                         'modele': modele or '<em>Corrigé à compléter.</em>',
                         'criteres': ['Compare chaque réponse ligne par ligne avec la correction',
                                      'Rédige sur ton cahier']})
        devoir = parse_devoir(d)
        lecon = {
            'id': domaine + code.lower(),   # identifiant unique : domaine + code du chapitre
            'domaine': domaine, 'unite': num, 'theme': 'Programme', 'tag': code,
            'icone': '📘', 'niveau': niveau, 'titre': titre,
            'objectifs': objectifs(d) or ['Réviser le chapitre ' + code],
            'cours': blocs, 'exercices': exos
        }
        if devoir:
            lecon['devoir'] = {
                'titre': 'Devoir — ' + code, 'consigne': devoir['consigne'],
                'criteres': ['Montre toutes les étapes', 'Respecte le barème', 'Relis-toi avant de voir la correction'],
                'modele': devoir['modele']
            }
        lecons.append(lecon)
    return lecons

def ecrire(lecons, path, domaine):
    with io.open(path, 'w', encoding='utf-8') as f:
        f.write('/* ============================================================\n')
        f.write('   Base de données — ' + domaine.upper() + '\n')
        f.write('   Générée automatiquement par convert_base.py — ne pas modifier à la main.\n')
        f.write('   ============================================================ */\n')
        f.write('window.HIDAYA_DATA = window.HIDAYA_DATA || [];\n\n')
        f.write('window.HIDAYA_DATA.push(\n')
        f.write(',\n\n'.join(json.dumps(l, ensure_ascii=False, indent=1) for l in lecons))
        f.write('\n);\n')

if __name__ == '__main__':
    if len(sys.argv) < 5:
        print(__doc__); sys.exit(1)
    dossier, domaine, niveau, sortie = sys.argv[1:5]
    lecons = convertir(dossier, domaine, niveau)
    ecrire(lecons, sortie, domaine)
    n_exos = sum(len(l['exercices']) for l in lecons)
    sans_corr = sum(1 for l in lecons for e in l['exercices'] if 'à compléter' in e['modele'])
    print(f'{len(lecons)} leçons ({domaine}) · {n_exos} exercices · corrigés manquants : {sans_corr} · devoirs : {sum(1 for l in lecons if l.get("devoir"))}')
    print(f'Écrit : {sortie}')
    print('N’oublie pas : ① ajouter <script src="…"> dans index.html  ② mettre ok: true dans MATIERES (js/app.js).')
