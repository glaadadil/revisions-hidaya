/* ============================================================
   MODÈLE de fichier de données — Les Révisions d'Hidaya
   ============================================================
   Copie ce fichier en js/data-<matiere>.js, remplis tes leçons,
   ajoute la ligne <script src="js/data-<matiere>.js"></script>
   dans index.html (AVANT js/app.js), puis mets ok: true dans le
   tableau MATIERES de js/app.js. C'est tout !

   ⚠️ Les identifiants (id) doivent être UNIQUES dans toute
   l'application : préfixe-les avec le nom de la matière.
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
{
  /* ---------- La leçon ---------- */
  id: "matiere-lecon1",          // UNIQUE dans toute l'app (ex : "anglaisu1")
  domaine: "anglais",            // doit correspondre à un domaine de la matière (js/app.js)
  unite: 1,                      // numéro d'ordre (affiché "Unité 1")
  theme: "Mon thème",            // regroupe les leçons sur la page du domaine
  texte: "Titre du texte/support", // optionnel (affiché dans la carte et l'en-tête)
  icone: "📘",                   // emoji de la leçon
  niveau: "1re année collège · Maroc",
  titre: "Titre de la leçon",
  duree: "4 h",                  // optionnel (affiché ⏱ dans l'en-tête)

  /* ---------- Objectifs (liste courte) ---------- */
  objectifs: [
    "savoir reconnaître…",
    "être capable de…"
  ],

  /* ---------- Le cours : liste de blocs ---------- */
  cours: [
    // Carte de section complète (HTML brut autorisé, donc KaTeX aussi : $x^2$)
    { t: "htmlcard", titre: "1. Titre de section", x: "<p>Contenu <strong>HTML</strong> libre.</p><ul><li>point</li></ul>" },

    // Ou blocs simples, un par un :
    { t: "h", x: "Titre de section (carte seule)" },          // titre h2 dans une carte
    { t: "p", x: "Un paragraphe avec du <strong>gras</strong>." },
    { t: "ul", items: ["élément 1", "élément 2"] },
    { t: "ol", items: ["étape 1", "étape 2"] },
    { t: "regle", x: "Le contenu de l'encadré « À retenir »" },
    { t: "astuce", x: "Le contenu de l'encadré « Astuce »" },
    { t: "attention", x: "Le contenu de l'encadré « Attention »" },
    { t: "exemple", x: "Le contenu de l'encadré « Exemple »" },
    { t: "table", head: ["Colonne A", "Colonne B"], rows: [["a1", "b1"], ["a2", "b2"]] }
  ],

  /* ---------- Les exercices : 4 types possibles ---------- */
  exercices: [
    // 1) QCM — corrigé automatiquement, explication cachée
    { type: "qcm", consigne: "Consigne affichée au-dessus", diff: "facile",   // facile | "" (moyen) | difficile
      q: "La question ?",
      options: ["réponse A", "réponse B", "réponse C"],
      rep: 1,                        // index de la bonne réponse (0 = première)
      expl: "Explication affichée dans la correction cachée." },

    // 2) Phrase à compléter — corrigé automatique ; variantes acceptées séparées par |
    //    Mettre strict: true si les ACCENTS comptent (homophones a/à, ou/où…)
    { type: "gap", consigne: "Complète :",
      q: "Elle [[mange|manger|mg]] une pomme. · Il [[fini]] son travail.",
      strict: false,
      expl: "Explication de la correction." },

    // 3) Remettre en ordre — corrigé automatique
    { type: "ordre", consigne: "Reconstruis la phrase :",
      mots: ["Les", "mots", "dans", "le", "bon", "ordre"],
      expl: "Explication." },

    // 4) Production libre — correction cachée (modèle) + auto-évaluation
    { type: "ouverte", consigne: "À toi d'écrire !", diff: "difficile",
      q: "La consigne de rédaction.",
      modele: "Le corrigé type (HTML autorisé), révélé par le bouton 👀.",
      criteres: ["critère vérifiable 1", "critère vérifiable 2"] }
  ],

  /* ---------- Le devoir (optionnel) ---------- */
  devoir: {
    titre: "Devoir — Leçon 1",
    consigne: "Énoncé du devoir (HTML autorisé).",
    etapes: ["1. Première étape", "2. Deuxième étape"],   // optionnel
    criteres: ["Grille d'auto-évaluation avant la correction"],
    modele: "Corrigé type caché du devoir."
  }
}
  /* Ajoute d'autres leçons en les séparant par une virgule :
     { id: "matiere-lecon2", ... },
     { id: "matiere-lecon3", ... } */
);
