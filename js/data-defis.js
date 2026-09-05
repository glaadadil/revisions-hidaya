/* ============================================================
   Base de données — DÉFIS & ÉVALUATIONS
   Évaluations blanches + dictées à trous (correction cachée)
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
{
  id: "e01", domaine: "defis", tag: "É1", icone: "🎯",
  titre: "Évaluation blanche n°1 (unités 1-10)",
  objectifs: ["vérifier ce que tu as retenu des unités 1 à 10", "relever tes points à retravailler"],
  cours: [
    { t: "p", x: "Cette évaluation reprend les leçons des <strong>unités 1 à 10</strong> (paragraphe, registres de langue, schéma narratif, imparfait/passé simple, antithèse, comparaison, énumération, métaphore, périphrase, personnification, phrases nominales, onomatopées, présent de vérité générale)." },
    { t: "astuce", x: "Fais-la <strong>sans relire le cours</strong> d’abord ! Note tes réponses, corrige-toi, puis revois les leçons des questions ratées. C’est la meilleure méthode de révision !" }
  ],
  exercices: [
    { type: "qcm", consigne: "Unité 1 — Type de phrase", diff: "",
      q: "« Aide ta sœur ! »",
      options: ["déclarative", "impérative", "exclamative", "interrogative"], rep: 1,
      expl: "Ordre au verbe à l’impératif : phrase impérative." },
    { type: "gap", consigne: "Unités 2-3 — Temps du récit", diff: "",
      q: "Le décor était paisible. Soudain, une tempête [[éclata]].",
      expl: "Action brève et unique → passé simple : éclata. (éclatait serait l’imparfait du décor)" },
    { type: "qcm", consigne: "Unité 4 — Figure de style", diff: "",
      q: "« Ses paroles étaient douces, mais ses yeux étaient durs. »",
      options: ["comparaison", "antithèse", "périphrase", "onomatopée"], rep: 1,
      expl: "douces/durs : contraires rapprochés → antithèse." },
    { type: "qcm", consigne: "Unité 5 — Figure de style", diff: "",
      q: "« Ses mains étaient froides comme la glace. »",
      options: ["métaphore", "comparaison", "personnification", "gradation"], rep: 1,
      expl: "Outil « comme » présent → comparaison." },
    { type: "qcm", consigne: "Unités 6-7 — Figures", diff: "",
      q: "« Ce buffet est un monstre plein de tiroirs. »",
      options: ["comparaison", "métaphore", "énumération", "antithèse"], rep: 1,
      expl: "Pas d’outil de comparaison : le buffet EST un monstre → métaphore." },
    { type: "gap", consigne: "Unités 8-9 — Vocabulaire des figures", diff: "",
      q: "« La Ville Lumière » désigne Paris : c’est une [[périphrase]]. · « Le vent pleure dans les arbres » : c’est une [[personnification]].",
      expl: "Groupe de mots qui remplace un nom = périphrase. Verbes humains donnés au vent = personnification." },
    { type: "qcm", consigne: "Unité 9 — Phrase", diff: "",
      q: "« Nuit glacée. Mer en furie. Personne. »",
      options: ["phrases verbales", "phrases nominales", "phrase complexe", "dialogue"], rep: 1,
      expl: "Pas de verbe conjugué : phrases nominales (effet de tableau)." },
    { type: "qcm", consigne: "Unité 10 — Valeur du présent", diff: "",
      q: "« Les astres brillent la nuit. »",
      options: ["présent d’énonciation", "présent de vérité générale", "présent historique", "présent d’habitude"], rep: 1,
      expl: "Fait toujours vrai → présent de vérité générale." },
    { type: "gap", consigne: "Unité 10 — Onomatopées", diff: "",
      q: "[[Boum|boum]] ! Le canon tonna. Les soldats, tétanisés, écoutèrent le silence qui suivit.",
      expl: "Boum imite le bruit de l’explosion : onomatopée." },
    { type: "ouverte", consigne: "Unité 3 — Production", diff: "difficile",
      q: "Rédige une introduction de récit (3 phrases) à la 3e personne : un enfant découvre une porte cachée.",
      modele: "Exemple : « Dans la vieille maison de ses grands-parents, Karim, dix ans, s’ennuyait ce dimanche pluvieux. Il errait de pièce en pièce, sans but. C’est alors que son doigt rencontra, derrière une bibliothèque, une poignée de fer cachée… »",
      criteres: ["3e personne", "Qui ? Où ? Quand ? présents", "Imparfait utilisé"] }
  ]
},
{
  id: "e02", domaine: "defis", tag: "É2", icone: "🏆",
  titre: "Évaluation blanche n°2 (unités 11-20)",
  objectifs: ["vérifier ce que tu as retenu des unités 11 à 20", "te préparer à une vraie évaluation"],
  cours: [
    { t: "p", x: "Cette évaluation reprend les leçons des <strong>unités 11 à 20</strong> (réflexions et souvenirs, pronom « on », succession de verbes, présent d’habitude, apposition, indices temps/lieu, deux-points, science-fiction, allégorie, comique, interrogation indirecte, théâtre, conditionnel, gradation, passé composé, plus-que-parfait, présent historique, passage explicatif)." }
  ],
  exercices: [
    { type: "gap", consigne: "Unité 11 — Le pronom « on »", diff: "",
      q: "On [[est]] arrivés à l’heure (nous).",
      expl: "« On » = nous ici ; l’accord de « arrivés » suit le sens, mais le verbe « être » reste au singulier : on est." },
    { type: "qcm", consigne: "Unités 12-13", diff: "",
      q: "« Chaque printemps, les villageois nettoient la source, réparent les canaux et fêtent l’eau. »",
      options: ["présent d’énonciation", "présent d’habitude + succession de verbes", "présent historique", "passé simple"], rep: 1,
      expl: "« Chaque printemps » (habitude) + trois verbes alignés (succession)." },
    { type: "qcm", consigne: "Unité 13 — Fonction", diff: "",
      q: "« Le cèdre, emblème du Liban, orne le drapeau. » — « emblème du Liban » est…",
      options: ["épithète", "apposition", "relative", "COD"], rep: 1,
      expl: "Groupe nominal détaché par des virgules, qui précise « le cèdre » : apposition." },
    { type: "qcm", consigne: "Unité 14 — Genre littéraire", diff: "",
      q: "Un récit qui imagine la Terre en 2200 avec des robots jardiniers appartient à…",
      options: ["la fable", "la science-fiction", "le théâtre", "la biographie"], rep: 1,
      expl: "Futur + technologies imaginaires : science-fiction." },
    { type: "qcm", consigne: "Unité 15 — Interrogation", diff: "",
      q: "« Dis-moi quand commence la représentation. »",
      options: ["interrogation directe", "interrogation indirecte", "phrase exclamative", "phrase nominale"], rep: 1,
      expl: "La question est rapportée sans point d’interrogation : interrogation indirecte." },
    { type: "qcm", consigne: "Unité 16 — Conditionnel", diff: "",
      q: "« D’après les rumeurs, le spectacle ______ retardé. »",
      options: ["sera", "serait", "est", "était"], rep: 1,
      expl: "« D’après les rumeurs » = information incertaine → conditionnel : serait." },
    { type: "gap", consigne: "Unité 17 — Passé composé", diff: "",
      q: "Les astronautes [[sont partis]] (masc. pl.) avant l’aube. Elle [[a regardé]] le ciel une dernière fois.",
      expl: "partir → être + accord : sont partis ; regarder → avoir, COD après : a regardé." },
    { type: "gap", consigne: "Unité 18 — Plus-que-parfait", diff: "",
      q: "Quand la tempête commença, l’équipage [[avait déjà amarré]] le bateau.",
      expl: "Action antérieure au passé simple « commença » → plus-que-parfait : avait déjà amarré." },
    { type: "qcm", consigne: "Unité 19 — Présent historique", diff: "",
      q: "« En 1922, Carter ouvre la tombe de Toutankhamon. »",
      options: ["présent d’énonciation", "présent historique", "présent d’habitude", "présent de vérité générale"], rep: 1,
      expl: "Événement daté du passé raconté au présent, comme en direct : présent historique." },
    { type: "ouverte", consigne: "Unité 20 — Production", diff: "difficile",
      q: "Écris 3 phrases explicatives (avec d’abord, ensuite, ainsi) : pourquoi faut-il dormir huit heures ?",
      modele: "Exemple : « Le sommeil est vital pour les enfants. D’abord, le cerveau range les apprentissages de la journée pendant la nuit. Ensuite, le corps grandit surtout quand on dort. Ainsi, bien dormir, c’est réviser sans effort ! »",
      criteres: ["3 connecteurs logiques", "Le présent de vérité générale", "Explication cohérente"] }
  ]
},
{
  id: "d01", domaine: "defis", tag: "Dictée 1", icone: "🖋️",
  titre: "Dictée à trous n°1 (homophones et accords)",
  objectifs: ["écouter la dictée d’un adulte (ou la lire)", "choisir les bons homophones"],
  cours: [
    { t: "p", x: "<strong>Comment faire une dictée à trous ?</strong> ① Demande à quelqu’un de te lire le texte à voix haute (le texte complet est caché dans la correction — ne triche pas 😉). ② Écris-le en choisissant les bons mots aux trous. ③ Clique sur « Voir la correction » pour vérifier." },
    { t: "regle", x: "Rappels : a = avait ; sont = étaient ; on = quelqu’un ; ou = ou bien ; où = lieu ; l’accord du verbe suit le sujet !" }
  ],
  exercices: [
    { type: "gap", strict: true, consigne: "Dictée à trous — complète correctement.", diff: "difficile",
      q: "Mes cousins [[sont]] arrivés [[à]] midi, [[et]] ils [[ont]] apporté un gâteau [[qu’]]ils [[ont]] préparé eux-mêmes. [[On]] dirait [[qu’|que]]ils sont content[[s]] (masc. pl.). Le soir, ils repartiront [[où]] la mer les attend.",
      expl: "Corrigé : « Mes cousins sont arrivés à midi, et ils ont apporté un gâteau qu’ils ont préparé eux-mêmes. On dirait qu’ils sont contents. Le soir, ils repartiront où la mer les attend. » — sont (étaient), à (préposition), et (choix), ont (avaient), On (quelqu’un), contents (masc. pl.), où (lieu)." }
  ],
  devoir: {
    titre: "Auto-dictée",
    consigne: "Réécris le texte entier de la dictée (corrigé) de mémoire, deux fois cette semaine, jusqu’à ne plus faire aucune faute.",
    criteres: ["Aucune faute d’homophones", "Accords corrects", "Ponctuation soignée"],
    modele: "Texte complet : « Mes cousins sont arrivés à midi, et ils ont apporté un gâteau qu’ils ont préparé eux-mêmes. On dirait qu’ils sont contents. Le soir, ils repartiront où la mer les attend. »" }
},
{
  id: "d02", domaine: "defis", tag: "Dictée 2", icone: "🖋️",
  titre: "Dictée à trous n°2 (temps du récit)",
  objectifs: ["utiliser imparfait, passé composé et plus-que-parfait", "réviser les accords du participe passé"],
  cours: [
    { t: "regle", x: "Rappels : imparfait = décor/habitude ; passé composé = actions achevées (être → accord avec le sujet) ; plus-que-parfait = action antérieure (avait/était + participe)." }
  ],
  exercices: [
    { type: "gap", consigne: "Dictée à trous — conjugue au temps qui convient.", diff: "difficile",
      q: "Ce matin-là, le ciel [[était]] bleu et la mer [[brillait]]. Quand nous [[sommes arrivés]] (masc. pl.) à la plage, mes cousines [[étaient déjà parties]] vers les rochers. Heureusement, elles [[avaient gardé]] une place pour moi !",
      expl: "Corrigé : « Ce matin-là, le ciel était bleu et la mer brillait. Quand nous sommes arrivés à la plage, mes cousines étaient déjà parties vers les rochers. Heureusement, elles avaient gardé une place pour moi ! » — imparfait (était, brillait) ; passé composé avec être accordé (sommes arrivés) ; plus-que-parfait avec être accordé (étaient parties) et avec avoir (avaient gardé)." }
  ],
  devoir: {
    titre: "Auto-dictée n°2",
    consigne: "Réécris la dictée corrigée de mémoire, puis invente une suite de 2 phrases (imparfait + passé composé).",
    criteres: ["Texte sans faute", "Suite avec imparfait et passé composé bien employés"],
    modele: "Texte complet : « Ce matin-là, le ciel était bleu et la mer brillait. Quand nous sommes arrivés à la plage, mes cousines étaient déjà parties vers les rochers. Heureusement, elles avaient gardé une place pour moi ! » Exemple de suite : « La journée était parfaite. Nous avons nagé jusqu’au coucher du soleil. »" }
}
);
