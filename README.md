# 📚 Les Révisions d'Hidaya

Aide scolaire interactive pour Hidaya (classe de **5e / EB7** — 11-12 ans).

> Quand Hidaya ouvre l'application, elle choisit sa matière, puis la leçon qu'elle a vue en classe
> (ou celle qui arrive) : elle trouve un **cours clair**, des **exercices interactifs** et un
> **devoir** — avec des **corrections cachées** qu'elle ne consulte que quand elle a terminé !

## 🚀 Utiliser l'application

**En ligne** (recommandé) : l'application est publiée sur GitHub Pages — ouvre simplement le lien du site
(`Settings → Pages` de ce dépôt, ou le lien épinglé).

**Hors ligne** : télécharge le projet (bouton *Code → Download ZIP*), décompresse-le, puis
**double-clique sur `index.html`**. Tout fonctionne sans connexion Internet. Aucune installation,
aucun compte, aucune publicité.

## 📚 Matières

### 🔢 Mathématiques — 1AC (Maroc)
**21 chapitres** du programme de 1re année collège, importés depuis la base
[`base-1ac-maroc`](https://github.com/glaadadil/base-1ac-maroc) : opérations, fractions,
relatifs, puissances, développement/factorisation, équations, géométrie (angles, triangle,
symétrie, parallélogramme, cercle, solides), proportionnalité, statistiques.
- Cours complet par chapitre + **fiche résumé**
- **375 exercices** par niveaux (application directe → raisonnement) avec **corrigés cachés**
- **Devoir par chapitre** avec barème et corrigé caché
- Formules rendues avec **KaTeX** (nécessite Internet ; hors-ligne les formules restent lisibles en notation texte)

### 📖 Français — 5e / EB7
La base est alignée sur la collection **« Le Français au Collège » 5e/EB7** (Kédémos Education,
méthode du Liban) — avec des contenus pédagogiques originaux :

| Domaine | Contenu |
|---|---|
| 📜 **Textes & Expression** | Les **20 unités** du manuel, thème par thème (Le paragraphe, Le récit, La comparaison, La métaphore, Le conte, Le théâtre, La science-fiction…) avec technique + grammaire + expression écrite |
| 🧩 **Grammaire** | 10 leçons : phrase simple/composée/complexe, types de phrases, classes grammaticales, fonctions (sujet, attribut, COD, COI, compléments circonstanciels…), relatives, registres de langue |
| ⏰ **Conjugaison** | 8 leçons avec tableaux : présent, imparfait, passé simple, passé composé, futur, plus-que-parfait, conditionnel, impératif |
| 🔤 **Orthographe & Vocabulaire** | 8 leçons : homophones (a/à, et/est, on/ont…), accords (verbe, adjectif, participe passé), pluriels, champ lexical, polysémie, préfixes/suffixes |
| 🎯 **Défis & Évaluations** | 2 évaluations blanches + 2 dictées à trous (avec auto-dictées) |

**252 exercices** de 4 types : QCM, phrases à compléter, remise en ordre, production écrite —
**22 devoirs** avec corrigés types, grilles d'auto-évaluation et méthodes pas-à-pas.

## ✨ Pédagogie

- **Méthode explicite** : chaque leçon suit *Objectifs → Je comprends (règles + tableaux) → Astuce → Exercices progressifs → Devoir → Auto-évaluation*.
- **Corrections cachées** : aucun corrigé visible avant le clic sur « Corriger » / « Voir la correction » ; les productions écrites sont auto-évaluées contre un modèle.
- **Motivation** : points ⭐, étoiles par leçon, badges (50/150/300/500 points…), confettis 🎉 — progression sauvegardée dans le navigateur (aucune donnée envoyée).
- **Accents disciplinés** : dans les leçons d'homophones (a/à, ou/où…), les accents comptent vraiment !

## 🛠️ Technique (pour les parents)

- Application **100 % statique** : HTML + CSS + JavaScript, **zéro dépendance**, zéro build.
- Les leçons vivent dans `js/data-*.js` (JS simple, format documenté ci-dessous). Les corrections et la progression sont stockées en `localStorage` (clé `hidaya_progress_v1`).
- Fonctionne sur ordinateur, tablette et téléphone.

### Ajouter une leçon

Dans un fichier `js/data-*.js` :

```js
window.HIDAYA_DATA = window.HIDAYA_DATA || [];
window.HIDAYA_DATA.push({
  id: "u21",                 // identifiant unique
  domaine: "textes",         // textes | grammaire | conjugaison | orthographe | defis
  unite: 21, theme: "Mon thème", texte: "Titre du texte", icone: "📝",
  titre: "Titre de la leçon",
  objectifs: ["apprendre à…", "savoir…"],
  cours: [
    { t: "h", x: "Un titre de section" },
    { t: "p", x: "Un paragraphe (HTML simple autorisé : <strong>…</strong>)" },
    { t: "regle", x: "Encadré « À retenir »" },
    { t: "astuce", x: "Encadré « Astuce »" },
    { t: "attention", x: "Encadré « Attention »" },
    { t: "exemple", x: "Encadré « Exemple »" },
    { t: "table", head: ["Col 1", "Col 2"], rows: [["a", "b"]] },
    { t: "ul", items: ["élément 1", "élément 2"] }
  ],
  exercices: [
    { type: "qcm", consigne: "…", q: "Question ?", options: ["a", "b"], rep: 0, expl: "Explication (correction cachée)" },
    { type: "gap", consigne: "…", q: "Il [[mange|manger]] une pomme.", expl: "…" },   // variantes acceptées séparées par |
    { type: "ordre", consigne: "…", mots: ["Mot1", "Mot2", "Mot3"], expl: "…" },
    { type: "ouverte", consigne: "…", q: "Écris…", modele: "Modèle caché", criteres: ["critère 1"] }
  ],
  devoir: { titre: "Devoir", consigne: "…", etapes: ["1. …"], criteres: ["…"], modele: "Corrigé type caché" }
});
```

Si un exercice `gap` doit distinguer les accents (a/à, ou/où), ajoute `strict: true`.

### Ajouter une matière

Dans `js/app.js`, passer `ok: true` dans le tableau `MATIERES`, puis créer les fichiers de données
avec les `domaine` correspondants (ajouter le domaine dans `DOMAINES` et `ORDRE_DOMAINES`).

## 🗺️ Feuille de route

- [x] Français — 5e/EB7 (20 unités + grammaire + conjugaison + orthographe + évaluations)
- [x] Mathématiques — 1AC Maroc (21 chapitres, 375 exercices)
- [ ] Arabe — 1AC Maroc
- [ ] Anglais — 1AC Maroc
- [ ] Éducation islamique — 1AC Maroc
- [ ] Mode « dictée lue par l'ordinateur » (synthèse vocale)

## 📄 Notes

- Contenus pédagogiques (cours, exercices, corrigés) **originaux**, rédigés pour ce projet et
  alignés sur le programme de la collection — aucun texte des manuels scannés n'est reproduit.
- Fait avec ❤️ pour Hidaya.
