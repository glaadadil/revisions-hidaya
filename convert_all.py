# -*- coding: utf-8 -*-
"""
Importe les 9 documents de base-1ac-maroc (documents/0X-matiere.md)
vers les fichiers de données de la plateforme Révisions d'Hidaya.

Chaque leçon devient : objectifs + cartes de cours (explication, points clés,
erreurs fréquentes, résumé) + exercices avec corrigés cachés + devoir,
+ flashcards auto-extraites des tableaux de vocabulaire (2 colonnes).
"""
import io, os, re, json, sys

SRC = '../base-1ac-maroc/documents'
OUT = 'js'

# id matière app <- fichier source (maths déjà importé séparément)
DOCS = {
    '01-arabe.md':               ('arabe',       '🕌', 'ar'),
    '02-education-islamique.md': ('islamique',   '🕋', 'ar'),
    '03-francais.md':            ('francais1ac', '🇫🇷', 'fr'),
    '04-anglais.md':             ('anglais',     '🇬🇧', 'en'),
    '06-svt.md':                 ('svt',         '🌱', 'fr'),
    '07-physique-chimie.md':     ('pc',          '⚗️', 'fr'),
    '08-sciences-sociales.md':   ('ss',          '🌍', 'ar'),
    '09-informatique.md':        ('info',        '💻', 'fr'),
}

# ---------------------------------------------------------------- markdown -> html

def inline(s):
    s = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', s)          # liens -> texte
    s = re.sub(r'<a\s+id="[^"]*"></a>', '', s)               # ancres
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    s = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'(?<!\w)\*([^*\n]+)\*(?!\w)', r'<em>\1</em>', s)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    return s.strip()

def lignes_tableau(ls):
    rows = []
    for l in ls:
        cells = [c.strip() for c in l.strip().strip('|').split('|')]
        if all(re.fullmatch(r':?-{2,}:?', c) for c in cells if c):
            continue
        rows.append(cells)
    return rows

def table_html(rows):
    if not rows: return ''
    head, body = rows[0], rows[1:]
    out = ['<table><thead><tr>' + ''.join(f'<th>{inline(c)}</th>' for c in head) + '</tr></thead><tbody>']
    for r in body:
        out.append('<tr>' + ''.join(f'<td>{inline(c)}</td>' for c in r) + '</tr>')
    out.append('</tbody></table>')
    return ''.join(out)

def md2html(md):
    """Mini-convertisseur markdown -> HTML (titres, listes, tables, citations, gras)."""
    lines = md.split('\n')
    out, i = [], 0
    para = []
    def flush():
        if para:
            txt = inline(' '.join(para))
            if txt: out.append(f'<p>{txt}</p>')
            para.clear()
    while i < len(lines):
        l = lines[i]
        ls = l.strip()
        if not ls:
            flush(); i += 1; continue
        if ls.startswith('|'):
            flush()
            tbl = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                tbl.append(lines[i]); i += 1
            out.append(table_html(lignes_tableau(tbl)))
            continue
        m = re.match(r'^#{4,6}\s+(.*)$', ls)
        if m:
            flush(); out.append(f'<h4>{inline(m.group(1))}</h4>'); i += 1; continue
        if ls.startswith('>') and not ls.startswith('> **نسخ'):
            flush()
            quote = []
            while i < len(lines) and lines[i].strip().startswith('>'):
                quote.append(lines[i].strip().lstrip('>').strip()); i += 1
            inner = md2html('\n'.join(q for q in quote if q))
            out.append(f'<blockquote>{inner}</blockquote>')
            continue
        if re.match(r'^[-*•]\s+', ls):
            flush()
            items = []
            while i < len(lines) and re.match(r'^[-*•]\s+', lines[i].strip()):
                items.append(inline(re.sub(r'^[-*•]\s+', '', lines[i].strip()))); i += 1
            out.append('<ul>' + ''.join(f'<li>{it}</li>' for it in items) + '</ul>')
            continue
        if re.match(r'^\d+[.)]\s+', ls):
            flush()
            items = []
            while i < len(lines) and re.match(r'^\d+[.)]\s+', lines[i].strip()):
                items.append(inline(re.sub(r'^\d+[.)]\s+', '', lines[i].strip()))); i += 1
            out.append('<ol>' + ''.join(f'<li>{it}</li>' for it in items) + '</ol>')
            continue
        if re.fullmatch(r'-{3,}|_{3,}', ls):
            flush(); out.append('<hr>'); i += 1; continue
        para.append(ls); i += 1
    flush()
    return '\n'.join(out)

# ---------------------------------------------------------------- découpage leçons

RE_LECON = re.compile(r'^### ([A-Z]{2,4})(\d+)\s*[—-]\s*(.+)$', re.M)
RE_H4 = re.compile(r'^#### (.+)$', re.M)

def extraire_flash(md):
    """Tableaux de vocabulaire -> flashcards {recto, verso}.
       Gère : 2 colonnes (mot | sens) et 4 colonnes (EN | IPA | AR | FR)."""
    cartes = []
    lines = md.split('\n')
    i = 0
    while i < len(lines):
        if lines[i].strip().startswith('|'):
            contexte = next((lines[j].strip() for j in range(max(0, i - 3), i) if lines[j].strip()), '')
            tbl = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                tbl.append(lines[i]); i += 1
            rows = lignes_tableau(tbl)
            if len(rows) >= 2:
                tete = ' '.join(rows[0]).lower() + ' ' + contexte.lower()
                est_vocab = bool(re.search(r'word|meaning|mot|définition|definition|كلمة|الشرح|المصطلح|مفردات|term|terme|english|ipa|gloss|vocab', tete))
                if not est_vocab:
                    continue
                ncol = len(rows[0])
                if ncol == 4 and 'english' in tete:
                    for r in rows[1:]:
                        if len(r) != 4: continue
                        mot, ipa, ar, fr = (inline(x) for x in r)
                        if mot and (fr or ar):
                            verso = fr or ''
                            if ar: verso += (' — ' if verso else '') + ar
                            if ipa:
                                ipa_txt = ipa if ipa.startswith('/') else '/' + ipa
                                verso = f'<span dir="ltr" class="ipa">{ipa_txt}</span> ' + verso
                            if len(mot) < 60 and len(verso) < 200:
                                cartes.append({'r': mot, 'v': verso})
                elif ncol == 2:
                    for r in rows[1:]:
                        if len(r) != 2: continue
                        a, b = inline(r[0]), inline(r[1])
                        if a and b and len(a) < 80 and len(b) < 400:
                            cartes.append({'r': a, 'v': b})
            continue
        i += 1
    vus, uniq = set(), []
    for c in cartes:
        k = c['r']
        if k not in vus:
            vus.add(k); uniq.append(c)
    return uniq[:40]

def parser_exercices(md):
    """Bloc **Exercice N** — énoncé ; renvoie [(num, titre, html, diff)]."""
    exos = []
    parts = re.split(r'\n(?=\*\*(?:Exercice|تمرين|Exercise)\s*[\d٠-٩])', md)
    for part in parts[1:]:
        m = re.match(r'\*\*(?:Exercice|تمرين|Exercise)\s*\.?\s*(\d+)', part)
        if not m: continue
        num = int(m.group(1))
        titre = re.match(r'\*\*[^*]+\*\*\s*[—-]?\s*(.*)', part)
        corps = part[part.index('**', 2):] if '**' in part[2:] else part
        corps = re.sub(r'^\*\*[^*]+\*\*\s*[—-]?\s*', '', part).strip()
        exos.append({'num': num, 'html': md2html(corps), 'md': corps})
    return exos

def parser_corriges(md):
    corr = {}
    parts = re.split(r'\n(?=\*\*(?:Exercice|تمرين|Exercise)\s*\d)', md)
    for part in parts[1:]:
        m = re.match(r'\*\*(?:Exercice|تمرين|Exercise)\s*\.?\s*(\d+)', part)
        if not m: continue
        corps = re.sub(r'^\*\*[^*]+\*\*\s*[—-]?\s*', '', part).strip()
        corr[int(m.group(1))] = md2html(corps)
    return corr

NIVEAUX = [('1', 'facile'), ('3', 'difficile')]


def strip_tags(s):
    return re.sub(r'<[^>]+>', '', s).strip()

def extraire_carte(secs):
    """Construit la carte mentale de la leçon depuis Points clés (table) et Résumé (sections)."""
    branches = []
    for cle, corps in secs.items():
        if cle.startswith('points cl'):
            rows = lignes_tableau([l for l in corps.split('\n') if l.strip().startswith('|')])
            if rows and len(rows) > 1 and all(len(r) == 2 for r in rows):
                for r in rows[1:]:
                    a = strip_tags(inline(r[0])); b = strip_tags(inline(r[1]))
                    if a and b:
                        branches.append({'t': a[:60], 'f': [b[:170]]})
    for cle, corps in secs.items():
        if cle.startswith(('résume', 'resume')):
            cur = None
            for line in corps.split('\n'):
                ls = line.strip()
                m = re.match(r'^#{4,6}\s+(.*)$', ls)
                if m:
                    cur = {'t': strip_tags(inline(m.group(1)))[:60], 'f': []}
                    branches.append(cur)
                    continue
                if cur is not None:
                    mli = re.match(r'^[-*•]\s+(.*)$', ls) or re.match(r'^\d+[.)]\s+(.*)$', ls)
                    if mli and len(cur['f']) < 5:
                        txt = strip_tags(inline(mli.group(1)))
                        if txt and len(txt) > 3:
                            cur['f'].append(txt[:170])
    branches = [b for b in branches if b['t'] and b['f']]
    return {'b': branches[:8]} if branches else None


def extraire_texte(md):
    """Repère le texte de lecture (poème, versets, récit) dans le cours :
    une ligne-titre mentionnant « نص » ou « Texte », suivie d'un bloc citation."""
    lines = md.split('\n')
    for i, line in enumerate(lines):
        if re.search(r'\*\*(?:نص المقطع|النص القرائي|النص المسترسل|Texte support)', line):
            j = i + 1
            while j < len(lines) and not lines[j].strip() and j - i < 4:
                j += 1  # saute les lignes vides après le titre
            vers = []
            while j < len(lines) and lines[j].strip().startswith('>'):
                v = lines[j].strip().lstrip('>').strip()
                if v: vers.append(inline(v))
                j += 1
            if len(''.join(vers)) > 150:
                corps = '<br>'.join(vers)
                return f'<p class="texte-titre">{inline(line.strip())}</p><p class="texte-corps">{corps}</p>'
    return None

def convertir_doc(path, matiere_id, langue):
    s = io.open(path, encoding='utf-8').read()
    matches = list(RE_LECON.finditer(s))
    lecons = []
    for k, m in enumerate(matches):
        code, num, titre = m.group(1) + m.group(2), int(m.group(2)), m.group(3).strip()
        debut = m.end()
        fin = matches[k + 1].start() if k + 1 < len(matches) else len(s)
        bloc = s[debut:fin]
        # unité (thème) : dernier "## " avant la leçon
        unit = ''
        for hm in re.finditer(r'^## (.+)$', s[:m.start()], re.M):
            t = hm.group(1).strip()
            if t not in ('Sommaire',) and not t.startswith('0.') and 'Annexe' not in t:
                unit = t
        # métadonnées (durée, domaine)
        meta = bloc.split('\n', 2)[1] if '\n' in bloc.strip() else ''
        duree_m = re.search(r'\*\*(?:المدة|Durée)\*\*\s*:?\s*([^\n·]+)', bloc[:600])
        duree = duree_m.group(1).strip() if duree_m else ''
        dom_m = re.search(r'\*\*(?:المجال|Domaine)\*\*\s*:?\s*([^\n]+)', bloc[:600])
        # sections h4
        secs = {}
        parts = re.split(r'^#### (.+)$', bloc, flags=re.M)
        for j in range(1, len(parts), 2):
            nom = parts[j].strip()
            corps = parts[j + 1].strip() if j + 1 < len(parts) else ''
            cle = nom.split('—')[0].strip().lower()
            secs[cle] = corps
        # objectifs
        objets = []
        for cle, corps in secs.items():
            if cle.startswith('objectif'):
                for li in re.findall(r'^\d+[.)]\s+(.+)$', corps, re.M):
                    objets.append(inline(li))
                if not objets:
                    objets = [inline(x) for x in re.findall(r'^[-*]\s+(.+)$', corps, re.M)]
                break
        # cartes de cours
        cartes = []
        flash_md = ''
        for cle, corps in secs.items():
            if cle.startswith('explication'):
                cartes.append({'t': 'htmlcard', 'titre': '📘 Cours', 'x': md2html(corps)})
                flash_md += corps + '\n'
            elif cle.startswith('points cl'):
                cartes.append({'t': 'htmlcard', 'titre': '🎯 Points clés', 'x': md2html(corps)})
                flash_md += corps + '\n'
            elif cle.startswith('erreurs'):
                cartes.append({'t': 'htmlcard', 'titre': '⚠️ Erreurs fréquentes', 'x': md2html(corps)})
            elif cle.startswith('résume') or cle.startswith('resume'):
                cartes.append({'t': 'htmlcard', 'titre': '📌 Résumé', 'x': md2html(corps)})
        # exercices + corrigés
        exos, diffs = [], {}
        for cle, corps in secs.items():
            if cle.startswith('exercice'):
                for nv, d in NIVEAUX:
                    for mm in re.finditer(r'(?:المستوى|Niveau)\s*' + nv + r'[^\n]*\n', corps):
                        pass
                cur = ''
                pos = 0
                for mm in re.finditer(r'\*\*(?:المستوى|Niveau)\s*(\d)[^\n]*\*\*', corps):
                    pass
                # difficulté par balises niveau (approximatif : niveau mentionné avant l'exercice)
                lignes = corps.split('\n')
                cur_diff = ''
                md_exo = []
                for li in lignes:
                    mn = re.match(r'\*\*(?:المستوى|Niveau)\s*(\d)', li)
                    if mn:
                        cur_diff = dict(NIVEAUX).get(mn.group(1), '')
                        continue
                    md_exo.append((li, cur_diff))
                corps2 = '\n'.join(l for l, _ in md_exo)
                diffmap = {}
                n = 0
                for li, d in md_exo:
                    if re.match(r'\*\*(?:Exercice|تمرين|Exercise)', li):
                        n += 1
                        diffmap[n] = d
                exos_bruts = parser_exercices(corps2)
                for e in exos_bruts:
                    exos.append({'num': e['num'], 'html': e['html'], 'diff': diffmap.get(e['num'], '')})
        corr = {}
        for cle, corps in secs.items():
            if cle.startswith('corrige'):
                corr = parser_corriges(corps)
        exercices = []
        for e in exos:
            modele = corr.get(e['num'], '')
            exercices.append({
                'type': 'ouverte', 'badge': e['num'], 'diff': e['diff'],
                'consigne': 'Exercice ' + str(e['num']),
                'q': e['html'],
                'modele': modele if modele else '<em>Corrige avec ton manuel ou ton professeur.</em>',
                'criteres': ['Compare ta réponse avec la correction', 'Rédige sur ton cahier']
            })
        # devoir
        devoir = None
        for cle, corps in secs.items():
            if cle.startswith('devoir'):
                mc = re.search(r'\n\*\*(?:Corrigé|التصحيح)[^\n]*\*\*\n', corps)
                enonce = corps[:mc.start()].strip() if mc else corps.strip()
                corrige = corps[mc.end():].strip() if mc else ''
                devoir = {
                    'titre': '📝 Devoir',
                    'consigne': md2html(enonce),
                    'criteres': ['Respecte le barème', 'Montre toutes les étapes', 'Relis-toi avant de voir la correction'],
                    'modele': md2html(corrige) if corrige else '<em>Devoir à faire sur le cahier — correction avec le professeur.</em>'
                }
        # flashcards
        flash = extraire_flash(flash_md)
        lecon = {
            'id': matiere_id + '-' + code.lower(),
            'domaine': matiere_id,
            'unite': num, 'theme': unit or 'Leçons', 'tag': code,
            'langue': langue,
            'titre': inline(titre),
            'duree': duree,
            'niveau': '1re année collège · Maroc',
            'objectifs': objets[:6] or ['Réviser la leçon ' + code],
            'cours': cartes,
            'exercices': exercices
        }
        md_explication = next((c for k, c in secs.items() if k.startswith('explication')), '')
        texte_lu = extraire_texte(md_explication)
        carte = extraire_carte(secs)
        if carte:
            lecon['carte'] = carte
        if texte_lu:
            lecon['texteLu'] = texte_lu
        if flash:
            lecon['flash'] = flash
        if devoir:
            lecon['devoir'] = devoir
        lecons.append(lecon)
    return lecons

# ---------------------------------------------------------------- exécution

if __name__ == '__main__':
    total = 0
    for fich, (mid, icone, langue) in DOCS.items():
        path = os.path.join(SRC, fich)
        lecons = convertir_doc(path, mid, langue)
        sortie = os.path.join(OUT, 'data-' + mid + '.js')
        with io.open(sortie, 'w', encoding='utf-8') as f:
            f.write('/* ' + mid.upper() + ' — importé de base-1ac-maroc (' + fich + ') — généré par convert_all.py */\n')
            f.write('window.HIDAYA_DATA = window.HIDAYA_DATA || [];\n')
            f.write('window.HIDAYA_DATA.push(' + ',\n'.join(json.dumps(l, ensure_ascii=False, separators=(',', ':')) for l in lecons) + ');\n')
        n_ex = sum(len(l['exercices']) for l in lecons)
        n_fl = sum(len(l.get('flash', [])) for l in lecons)
        n_dv = sum(1 for l in lecons if l.get('devoir'))
        themes = sorted(set(l['theme'] for l in lecons))
        taille = os.path.getsize(sortie) // 1024
        print(f'{mid:12s} {len(lecons):3d} leçons · {n_ex:3d} exos · {n_fl:3d} flashcards · {n_dv:3d} devoirs · {len(themes)} unités · {taille} Ko')
        total += len(lecons)
    print(f'TOTAL : {total} nouvelles leçons')
