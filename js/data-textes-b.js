/* ============================================================
   Base de données — TEXTES & EXPRESSION — Unités 11 à 20
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
/* ================= UNITÉ 11 ================= */
{
  id: "u11", domaine: "textes", unite: 11, theme: "Thème 5 · Passé et traditions…",
  texte: "Découverte de la tombe de Toutankhamon", icone: "🏺",
  titre: "Raconter avec réflexions et souvenirs · Le pronom « on »",
  objectifs: [
    "ponctuer un récit de réflexions et de souvenirs",
    "employer le pronom indéfini « on » et ses valeurs",
    "établir une chronologie"
  ],
  cours: [
    { t: "h", x: "1. Ponctuer un récit de réflexions et de souvenirs" },
    { t: "p", x: "Dans un récit, le narrateur peut s’arrêter pour <strong>réfléchir</strong> ou se <strong>souvenir</strong>. On écrit ces pensées entre <strong>parenthèses</strong>, avec des <strong>tirets</strong>, ou après <strong>deux-points</strong>." },
    { t: "exemple", x: "« Le chercheur souleva la pierre (son cœur battait à tout rompre). Que cachait cette chambre ? Des trésors, sans doute. <strong>— Comme c’est étrange…</strong>, murmura-t-il. »" },
    { t: "regle", x: "Les <strong>points de suspension…</strong> suggèrent une pensée inachevée, un mystère, une émotion qui déborde. Les <strong>parenthèses</strong> isolent une réflexion du narrateur." },
    { t: "h", x: "2. Le pronom indéfini « on »" },
    { t: "regle", x: "« <strong>On</strong> » est un pronom indéfini. Il remplace des personnes indéterminées (les gens, tout le monde, nous…). Il s’emploie avec un verbe à la <strong>3e personne du singulier</strong> : on dit, on voit, on part." },
    { t: "table", head: ["Valeur de « on »", "Exemple"], rows: [
      ["tout le monde (les gens)", "« Ici, on respecte les anciens. »"],
      ["quelqu’un (on ne sait pas qui)", "« On a frappé à la porte. »"],
      ["nous (langage courant)", "« On va à la plage cet après-midi ? »"],
      ["une personne précise mais cachée", "« On t’a téléphoné. »"]
    ] },
    { t: "attention", x: "L’accord de l’adjectif ou du participe suit le sens : « On est arrivés ! » (= nous, masculin pluriel) mais « On est arrivée » (= une fille qui dit je) !" },
    { t: "h", x: "3. Établir une chronologie" },
    { t: "p", x: "Pour raconter dans l’ordre, on utilise des <strong>indicateurs de temps</strong> : d’abord, ensuite, puis, après, enfin ; le lendemain, trois jours plus tard ; à ce moment-là, soudain." }
  ],
  exercices: [
    { type: "qcm", consigne: "Quelle valeur de « on » ?", diff: "",
      q: "« En Égypte antique, on croyait à la vie après la mort. »",
      options: ["nous", "quelqu’un de précis", "tout le monde / les gens", "tu"], rep: 2,
      expl: "Ici « on » = les gens, tout le monde (les Égyptiens en général)." },
    { type: "gap", consigne: "Conjugue le verbe avec « on ».", diff: "facile",
      q: "On [[va]] (aller) à la découverte du musée demain. · On [[a trouvé]] (trouver) une amphore ancienne hier.",
      expl: "« On » prend toujours le verbe à la 3e personne du singulier : on va, on a trouvé." },
    { type: "qcm", consigne: "Choisis la ponctuation qui convient.", diff: "",
      q: "La porte s’ouvrit lentement… ___ qui pouvait bien être là ?",
      options: [",", "!", ";", ":"], rep: 3,
      expl: "Les deux-points annoncent la réflexion (la question intérieure du narrateur)." },
    { type: "ordre", consigne: "Remets la chronologie en ordre.", diff: "",
      q: "Ordonne les indicateurs de temps d’un récit :",
      mots: ["D’abord,", "ensuite,", "puis,", "enfin,"],
      expl: "D’abord → ensuite → puis → enfin : les étapes d’une chronologie." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Écris <strong>3 phrases</strong> racontant une découverte imaginaire : utilise une parenthèse avec une réflexion et le pronom « on ».",
      modele: "Exemple : « Nous soulevâmes la dalle (mes jambes tremblaient). Dans la cachette brillait un coffre de cuivre. On se demanda tous comment il avait pu rester là pendant des siècles. »",
      criteres: ["Une réflexion entre parenthèses", "« on » bien employé (verbe 3e personne sing.)", "Récit au passé"] }
  ],
  devoir: {
    titre: "Devoir — Le récit de découverte",
    consigne: "Raconte (12 à 15 lignes) la <strong>découverte</strong> d’un objet ou d’un lieu ancien, comme un archéologue ou un explorateur.",
    etapes: [
      "Situe le moment et le lieu (imparfait).",
      "Raconte la découverte dans l’ordre avec des indicateurs de temps (d’abord, puis, enfin…).",
      "Insère une réflexion entre parenthèses et une phrase avec « on ».",
      "Termine par une question avec points de suspension (le mystère continue…)."
    ],
    criteres: ["Chronologie claire (indicateurs de temps)", "Une réflexion entre parenthèses", "« on » bien employé", "Temps du récit maîtrisés"],
    modele: "Exemple : « Cet été, dans la vieille maison de mon grand-père, nous avons fait une découverte incroyable. D’abord, on a remarqué une dalle bizarre sous l’escalier. Puis, armés d’une lampe, nous l’avons soulevée (mon cœur battait très fort !). Enfin, dans la petite cachette, nous avons trouvé une boîte pleine de photos anciennes et de pièces de monnaie. On se demande encore qui les avait cachées là… »" }
},

/* ================= UNITÉ 12 ================= */
{
  id: "u12", domaine: "textes", unite: 12, theme: "Thème 5 · Passé et traditions…",
  texte: "Les portefaix de Fès", icone: "🛍️",
  titre: "La succession de verbes · Le présent d’habitude",
  objectifs: [
    "utiliser la succession de verbes pour rendre un récit vivant",
    "employer le présent d’habitude",
    "parler d’une tradition"
  ],
  cours: [
    { t: "h", x: "1. La succession de verbes" },
    { t: "regle", x: "Pour montrer une suite d’actions rapide et enchaînée, on aligne des <strong>verbes conjugués sans mots de liaison lourds</strong>, séparés par des virgules : c’est la succession de verbes (on parle aussi de style rhythme)." },
    { t: "exemple", x: "« Le portefaix saisit le fardeau, le souleva, le hissa sur son dos, s’élança dans la ruelle et disparut au tournant. » → les actions défilent comme un film !" },
    { t: "astuce", x: "La succession de verbes <strong>accélère le récit</strong>. Au contraire, les descriptions longues le <strong>ralentissent</strong>. Le bon conteur varie les deux !" },
    { t: "h", x: "2. Le présent d’habitude" },
    { t: "regle", x: "Le <strong>présent d’habitude</strong> exprime une action répétée, une coutume. On le repère grâce aux marqueurs : <strong>chaque jour, tous les matins, le vendredi, d’habitude, souvent, toujours, ne… jamais</strong>." },
    { t: "exemple", x: "« Chaque matin, les portefaix se retrouvent sur la place, chargent leurs ballots et partent vers les souks. »" },
    { t: "attention", x: "Présent d’habitude ≠ présent d’énonciation : « Je mange une pomme » (maintenant) ≠ « Chaque midi, je mange une pomme » (habitude). Cherche le marqueur de fréquence !" },
    { t: "h", x: "3. Parler d’une tradition" },
    { t: "p", x: "Pour présenter une tradition (une fête, un métier ancien, une recette), on utilise le <strong>présent d’habitude</strong>, des indicateurs de temps et un vocabulaire précis du domaine." }
  ],
  exercices: [
    { type: "qcm", consigne: "Quelle valeur du présent ?", diff: "",
      q: "« Tous les vendredis, nous préparons le couscous en famille. »",
      options: ["présent d’énonciation", "présent d’habitude", "présent de vérité générale", "présent historique"], rep: 1,
      expl: "« Tous les vendredis » = marqueur de répétition → présent d’habitude." },
    { type: "gap", consigne: "Mets au présent d’habitude.", diff: "facile",
      q: "Chaque été, ma famille [[voyage]] au Liban-Nord. · Le samedi, Hidaya [[révise]] ses leçons et [[joue]] au parc.",
      expl: "Avec « chaque été », « le samedi » → présent d’habitude : voyage, révise, joue." },
    { type: "qcm", consigne: "Quel effet produit la succession de verbes ?", diff: "",
      q: "« Elle ouvrit la porte, traversa la pièce, attrapa son sac et courut dehors. »",
      options: ["elle ralentit le récit", "elle décrit un paysage", "elle accélère le récit, les actions s’enchaînent", "elle pose une question"], rep: 2,
      expl: "Les verbes alignés créent un rythme rapide : les actions défilent sans interruption." },
    { type: "gap", consigne: "Conjugue au passé simple pour créer une succession d’actions.", diff: "difficile",
      q: "Il [[attrapa]] son manteau, [[ouvrit]] la porte et [[disparut]] dans la nuit.",
      expl: "Au passé simple : attrapa, ouvrit, disparut — trois actions uniques et successives." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Décris une tradition de ta famille en <strong>3 phrases</strong> au présent d’habitude (avec au moins deux marqueurs de fréquence).",
      modele: "Exemple : « Chaque dimanche, toute la famille se réunit chez ma grand-mère. Nous préparons ensemble un grand déjeuner, et les enfants mettent la table. D’habitude, après le repas, ma grand-mère raconte des histoires de son village. »",
      criteres: ["Présent d’habitude correct", "Deux marqueurs de fréquence (chaque, toujours…)", "Le sujet est bien une tradition/coutume"] }
  ],
  devoir: {
    titre: "Devoir — Une tradition à raconter",
    consigne: "Présente une <strong>tradition</strong> de ta famille ou de ton pays (fête, plat, métier ancien, coutume) en 10 à 12 lignes.",
    etapes: [
      "Présente la tradition (de quoi s’agit-il ? qui ? où ?).",
      "Décris comment elle se déroule au présent d’habitude.",
      "Insère une succession de verbes pour une scène animée.",
      "Dis pourquoi cette tradition est importante pour toi."
    ],
    criteres: ["Présent d’habitude avec marqueurs", "Une succession d’au moins 3 verbes", "Vocabulaire précis du domaine", "Une phrase personnelle (ce que j’aime)"],
    modele: "Exemple : « Dans ma famille, chaque 1er mai, nous décorons la porte avec des fleurs sauvages. Tôt le matin, nous partons à la campagne, cueillons des coquelicots, tressons de petites couronnes et rentrons avant midi. Ensuite, nous les accrochons à la porte en chantant. Cette tradition est importante pour moi parce qu’elle réunit toute la famille et célèbre le printemps. »" }
},

/* ================= UNITÉ 13 ================= */
{
  id: "u13", domaine: "textes", unite: 13, theme: "Thème 6 · Protégeons la nature !",
  texte: "Le lion prisonnier", icone: "🦁",
  titre: "Le groupe mis en apposition · Les indices de temps et de lieu",
  objectifs: [
    "employer le groupe mis en apposition",
    "repérer et utiliser les indices de temps et de lieu",
    "établir une comparaison, exprimer une condition"
  ],
  cours: [
    { t: "h", x: "1. Le groupe mis en apposition" },
    { t: "regle", x: "La <strong>mise en apposition</strong> place un groupe nominal <strong>à côté d’un autre</strong> pour le préciser ou le mettre en relief. On le détache par des <strong>virgules</strong> (ou des tirets)." },
    { t: "exemple", x: "« Le lion, <strong>le roi de la savane</strong>, gémissait dans sa cage. » / « Beyrouth, <strong>capitale du Liban</strong>, s’étend au bord de la mer. » → « le roi de la savane » = apposition au lion." },
    { t: "astuce", x: "L’apposition sert à expliquer (Beyrouth, capitale…), à décrire (le lion, majestueux et las…) ou à mettre en valeur un élément important." },
    { t: "h", x: "2. Les indices de temps et de lieu" },
    { t: "regle", x: "Les <strong>indices (compléments circonstanciels) de temps</strong> répondent à « quand ? » : hier, à midi, en 1922, pendant trois heures, soudain. Les <strong>indices de lieu</strong> répondent à « où ? » : dans la savane, ici, près de la rivière, au fond." },
    { t: "exemple", x: "« <strong>À l’aube</strong> (quand ?), <strong>près du point d’eau</strong> (où ?), les animaux se rassemblaient. »" },
    { t: "attention", x: "On peut déplacer un indice de temps ou de lieu dans la phrase : « Hier, le lion dormait. » = « Le lion dormait hier. » C’est un bon test pour le reconnaître !" },
    { t: "h", x: "3. Comparaison et condition" },
    { t: "regle", x: "Pour <strong>établir une comparaison</strong> : comme, plus/moins/aussi… que, tel. Pour <strong>exprimer une condition</strong> : si, à condition que, pourvu que, au cas où. « <strong>Si</strong> nous protégeons les forêts, les animaux resteront libres. »" }
  ],
  exercices: [
    { type: "qcm", consigne: "Trouve l’apposition.", diff: "",
      q: "« L’éléphant, le plus grand mammifère terrestre, se nourrit de feuilles. »",
      options: ["L’éléphant", "le plus grand mammifère terrestre", "se nourrit", "de feuilles"], rep: 1,
      expl: "« Le plus grand mammifère terrestre » est détaché par des virgules et précise « l’éléphant » : c’est l’apposition." },
    { type: "gap", consigne: "Indice de temps ou de lieu ?", diff: "facile",
      q: "<strong>Chaque hiver</strong> → [[temps|T|t]]. · <strong>au fond de la grotte</strong> → [[lieu|L|l]]. · <strong>le lendemain matin</strong> → [[temps|T|t]]. · <strong>près de la cascade</strong> → [[lieu|L|l]].",
      expl: "« Quand ? » → temps (chaque hiver, le lendemain). « Où ? » → lieu (au fond de, près de)." },
    { type: "ordre", consigne: "Reconstruis la phrase avec son apposition.", diff: "",
      q: "Mets les groupes dans l’ordre :",
      mots: ["La tortue,", "symbole de patience,", "avance lentement."],
      expl: "Groupe nominal + apposition détachée par des virgules + verbe." },
    { type: "gap", consigne: "Complète avec « si » ou une expression de condition.", diff: "",
      q: "[[Si|si]] nous respectons la nature, elle nous offrira ses trésors. Les oiseaux resteront [[pourvu que|à condition que]] nous protégeons les forêts.",
      expl: "Les marqueurs de condition : si, pourvu que, à condition que, au cas où." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Écris <strong>2 phrases</strong> sur un animal menacé : une avec un groupe en apposition, une avec un indice de temps ET un indice de lieu.",
      modele: "Exemples : « Le panda, trésor des montagnes de Chine, risque de disparaître. » / « Chaque nuit, dans les forêts tropicales, de nombreuses espèces disparaissent en silence. »",
      criteres: ["Une apposition détachée par des virgules", "Un indice de temps + un indice de lieu"] }
  ],
  devoir: {
    titre: "Devoir — Plaidoyer pour la nature",
    consigne: "Écris un court <strong>plaidoyer</strong> (10 à 12 lignes) pour protéger un animal en danger.",
    etapes: [
      "Présente l’animal avec une apposition (nom + description détachée).",
      "Décris sa situation avec des indices de temps et de lieu.",
      "Explique les dangers (une phrase de condition : si nous ne faisons rien…).",
      "Termine par un appel à l’action (phrase impérative ou exclamative)."
    ],
    criteres: ["Une apposition", "Indices de temps et de lieu", "Une phrase de condition (si…)", "Un appel final marqué"],
    modele: "Exemple : « La tortue marine, voyageuse des océans, est en danger. Chaque été, sur les plages méditerranéennes, elle pond ses œufs dans le sable. Mais si nous laissons nos déchets sur la plage, les bébés tortues ne pourront pas survivre. Protégeons les nids, ramassons nos déchets, et laissons ces voyageuses reprendre la mer ! »" }
},

/* ================= UNITÉ 14 ================= */
{
  id: "u14", domaine: "textes", unite: 14, theme: "Thème 6 · Protégeons la nature !",
  texte: "Pandora", icone: "📦",
  titre: "La science-fiction et l’allégorie · La valeur des « deux points »",
  objectifs: [
    "reconnaître la science-fiction et l’allégorie",
    "employer les deux-points et leurs valeurs",
    "présenter un élément perturbateur"
  ],
  cours: [
    { t: "h", x: "1. La science-fiction" },
    { t: "regle", x: "La <strong>science-fiction</strong> est un genre qui imagine le futur, des technologies avancées, des mondes inconnus (espace, robots, voyages temporels) — à partir d’idées scientifiques." },
    { t: "ul", items: [
      "des <strong>lieux</strong> : autres planètes, vaisseaux, villes du futur",
      "des <strong>technologies</strong> : robots, machines intelligentes",
      "des <strong>questions</strong> sur l’homme : que deviendra la planète ? la science servira-t-elle l’homme ?"
    ] },
    { t: "h", x: "2. L’allégorie" },
    { t: "regle", x: "Une <strong>allégorie</strong> est une image qui représente une <strong>idée abstraite</strong> sous la forme d’un être ou d’une chose concrète : la colombe = la paix ; la balance = la justice ; la boîte de Pandora = les maux de l’humanité ; Mère Nature = la nature protectrice." },
    { t: "exemple", x: "« La Belle au bois dormant » peut être l’allégorie du printemps qui s’endort en hiver. Le « loup » dans certaines fables = le danger, la cupidité." },
    { t: "h", x: "3. La valeur des « deux points » ( : )" },
    { t: "table", head: ["Valeur", "Effet", "Exemple"], rows: [
      ["<strong>énumération</strong>", "annonce une liste", "« Il ne reste plus rien : ni eau, ni pain, ni espoir. »"],
      ["<strong>explication</strong>", "explique ce qui précède", "« La forêt disparaît : les hommes la brûlent. »"],
      ["<strong>conséquence</strong>", "résultat de ce qui précède", "« Il neigeait depuis des jours : les routes étaient bloquées. »"],
      ["<strong>discours direct</strong>", "annonce des paroles", "« Elle cria : “Attention !” »"]
    ] }
  ],
  exercices: [
    { type: "qcm", consigne: "Quelle valeur des deux-points ?", diff: "",
      q: "« La planète se réchauffe : les glaciers fondent. »",
      options: ["énumération", "explication/conséquence", "discours direct", "aucune"], rep: 1,
      expl: "Les deux-points introduisent l’explication (la preuve, la conséquence) : les glaciers fondent parce que la planète se réchauffe." },
    { type: "qcm", consigne: "Reconnais l’allégorie.", diff: "",
      q: "« La balance » comme symbole de la justice est…",
      options: ["une comparaison", "une métaphore filée", "une allégorie", "une périphrase"], rep: 2,
      expl: "La balance représente concrètement une idée abstraite (la justice qui pèse) : c’est une allégorie." },
    { type: "qcm", consigne: "Science-fiction ou pas ?", diff: "facile",
      q: "Quel récit appartient à la science-fiction ?",
      options: ["Un chevalier sauve une princesse.", "En 2140, des robots cultivent les dernières forêts de Mars.", "Un petit garçon perd son chien.", "Une fée transforme un crapaud en prince."], rep: 1,
      expl: "Futur, robots, autre planète : ce sont les ingrédients de la science-fiction." },
    { type: "gap", consigne: "Complète avec les deux-points bien placés (écris la fin logique).", diff: "",
      q: "« La fontaine était tarie : [[plus une goutte d’eau|plus rien|aucune eau|il n y avait plus d eau]] » (énumération).",
      expl: "Après les deux-points, on attend une liste : « plus une goutte d’eau, pas même une flaque »." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "difficile",
      q: "Invente une <strong>allégorie</strong> : choisis une idée abstraite (l’espoir, la peur, la liberté…) et représente-la par un objet ou un être concret. Écris 2 phrases.",
      modele: "Exemples : « L’espoir est une petite lampe qu’on garde allumée dans la tempête. » / « La peur est un escalier noir qui descend sans fin. »",
      criteres: ["Une idée abstraite représentée concrètement", "Deux phrases correctes"] }
  ],
  devoir: {
    titre: "Devoir — Un récit de science-fiction",
    consigne: "Écris le début d’un <strong>récit de science-fiction</strong> (10 à 12 lignes) sur le thème de la nature protégée (Terre du futur, planète à sauver, robot jardinier…).",
    etapes: [
      "Situe dans le futur (année, lieu).",
      "Présente l’élément perturbateur (problème écologique, machine étrange…).",
      "Utilise une phrase avec deux-points (explication ou énumération).",
      "Termine par une question ou une hypothèse."
    ],
    criteres: ["Un cadre futuriste crédible", "Un élément perturbateur clair", "Une phrase avec deux-points", "Inventions et vocabulaire de la science-fiction"],
    modele: "Exemple : « Année 2150. Sur la planète Verte-Deux, les dernières abeilles vivaient dans une immense serre de verre. Lila, robot-jardinière de la septième génération, veillait sur elles jour et nuit. Ce matin-là, une alerte rouge s’afficha : les abeilles refusaient de sortir. Pourquoi ? Était-ce le nouveau pollen artificiel, la chaleur, ou autre chose ? »" }
},

/* ================= UNITÉ 15 ================= */
{
  id: "u15", domaine: "textes", unite: 15, theme: "Thème 7 · Sport et santé…",
  texte: "Le poumon", icone: "🫁",
  titre: "Le comique · Les phrases interrogatives",
  objectifs: [
    "reconnaître les procédés du comique",
    "maîtriser les phrases interrogatives (directes et indirectes)",
    "exprimer une douleur, un malaise ; décrire un dégât"
  ],
  cours: [
    { t: "h", x: "1. Le comique" },
    { t: "p", x: "Le <strong>comique</strong> fait rire. Ses procédés principaux :" },
    { t: "ul", items: [
      "le comique de <strong>mots</strong> : jeux de mots, répétitions drôles, grossièretés de vocabulaire",
      "le comique de <strong>gestes</strong> : chutes, cascades, gaffes (comme Charlie Chaplin !)",
      "le comique de <strong>situation</strong> : quiproquos, malentendus, retournements",
      "le comique de <strong>caractère</strong> : un personnage ridiculisé par son défaut (l’avare, le distrait…)"
    ] },
    { t: "exemple", x: "Un professeur très sérieux glisse sur une peau de banane devant toute la classe : comique de situation + comique de caractère !" },
    { t: "h", x: "2. Les phrases interrogatives" },
    { t: "regle", x: "La phrase <strong>interrogative directe</strong> pose la question : « Où vas-tu ? » La phrase <strong>interrogative indirecte</strong> rapporte la question dans une phrase déclarative : « Je me demande <strong>où tu vas</strong>. » (pas de point d’interrogation !)" },
    { t: "table", head: ["Interrogation directe", "Interrogation indirecte"], rows: [
      ["« Qu’est-ce que tu lis ? »", "« Dis-moi <strong>ce que</strong> tu lis. »"],
      ["« Qui vient ? »", "« Je veux savoir <strong>qui</strong> vient. »"],
      ["« Où est le stade ? »", "« Il demande <strong>où</strong> est le stade. »"],
      ["« Viens-tu ? »", "« Il me demande <strong>si</strong> je viens. »"]
    ] },
    { t: "attention", x: "Oui/non disparaît à l’interrogation indirecte : il devient <strong>si</strong> ! « Tu viens ? » → « Demande-lui <strong>si</strong> elle vient. »" },
    { t: "h", x: "3. Exprimer une douleur, un malaise" },
    { t: "p", x: "« J’ai mal à la tête / au ventre. », « Je me sens fatigué(e), étourdi(e). », « Ça pique ! Ça brûle ! » — et pour un dégât : « Le vase s’est brisé, le pantalon est déchiré, tout est renversé ! »" }
  ],
  exercices: [
    { type: "qcm", consigne: "Quel type de comique ?", diff: "",
      q: "Un personnage prétentieux tombe dans une flaque devant tout le monde.",
      options: ["comique de mots", "comique de gestes/situation", "comique de caractère seulement", "pas comique"], rep: 1,
      expl: "La chute et la situation embarrassante = comique de gestes et de situation (avec une pointe de comique de caractère : le prétentieux puni !)." },
    { type: "gap", consigne: "Passe à l’interrogation indirecte.", diff: "",
      q: "« Où est la salle de sport ? » → Il demande où [[est|se trouve]] la salle de sport. · « Tu viens au match ? » → Elle me demande [[si]] je viens au match.",
      expl: "À l’interrogation indirecte : on garde le mot interrogatif (où, qui, ce que) ; oui/non devient « si »." },
    { type: "qcm", consigne: "Interrogation directe ou indirecte ?", diff: "facile",
      q: "« Je me demande quand commence le tournoi. »",
      options: ["interrogation directe", "interrogation indirecte", "phrase exclamative", "phrase impérative"], rep: 1,
      expl: "La question est rapportée dans une phrase déclarative (« Je me demande… »), sans point d’interrogation : interrogation indirecte." },
    { type: "gap", consigne: "Exprime le malaise avec la bonne expression.", diff: "",
      q: "J’ai mal [[aux]] dents. · J’ai mal [[à]] tête. · Je me sens [[étourdie]] (une fille qui a la tête qui tourne).",
      expl: "« J’ai mal aux dents » (pluriel), « j’ai mal à la tête » ; une fille dit « je me sens étourdie » (accord féminin)." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Écris une <strong>petite scène comique</strong> (3 à 4 phrases) : un personnage gaffeur fait une bêtise à la cantine ou au stade. Utilise une interrogation indirecte.",
      modele: "Exemple : « Karim voulait montrer à ses amis comme il maîtrisait le ballon. Il lança le ballon en l’air, s’env versa… et l’arrosa entièrement ! Le gardien demanda pourquoi il prenait une douche avec ses habits. Personne n’a encore réussi à dire la phrase sans rire. »",
      criteres: ["Une situation comique (situation, geste ou caractère)", "Une interrogation indirecte correcte", "3 à 4 phrases"] }
  ],
  devoir: {
    titre: "Devoir — Le récit comique",
    consigne: "Raconte une <strong>aventure sportive comique</strong> (12 à 15 lignes) : une partie qui tourne mal, une gaffe mémorable…",
    etapes: [
      "Situe (qui, où, quand) à l’imparfait.",
      "Lance l’action (passé simple ou passé composé) : la gaffe, l’accident drôle.",
      "Utilise au moins deux procédés comiques (geste, situation, mots, caractère).",
      "Insère une interrogation indirecte et une exclamation.",
      "Termine par la réaction des personnages (fous rires ?)."
    ],
    criteres: ["Récit structuré (début, péripétie, fin)", "Deux procédés comiques identifiables", "Une interrogation indirecte", "Une phrase exclamative"],
    modele: "Exemple : « Dimanche dernier, nous disputions le match de basket le plus important de l’année. Je voulais marquer le panier de la victoire ; je sautai, lançai le ballon de toutes mes forces… et arrosai le professeur d’arbitre d’un jet d’eau du vase d’à côté ! L’arbitre demanda très sérieusement si je jouais au basket ou à la piscine. Toute la salle se mit à rire, moi la première. On m’appelle encore « la fontaine »… »" }
},

/* ================= UNITÉ 16 ================= */
{
  id: "u16", domaine: "textes", unite: 16, theme: "Thème 7 · Sport et santé…",
  texte: "Knock et la dame en noir", icone: "🎭",
  titre: "Le théâtre · Le conditionnel présent (l’incertitude)",
  objectifs: [
    "reconnaître les caractéristiques du texte théâtral",
    "employer le conditionnel présent pour l’incertitude",
    "exprimer un besoin, un désir"
  ],
  cours: [
    { t: "h", x: "1. Le texte théâtral" },
    { t: "regle", x: "Le <strong>texte théâtral</strong> est écrit pour être joué. Il se compose de : le <strong>texte principal</strong> (les répliques des personnages), les <strong>didascalies</strong> (indications du dramaturge, en italique, entre parenthèses : décor, gestes, ton), et la liste des <strong>personnages</strong>." },
    { t: "exemple", x: "<em>(La salle à manger. La mère entre, lasse.)</em><br>LA MÈRE : « <strong>Encore</strong> une facture ! (elle soupire) Crois-tu que l’argent pousse sur les arbres ? »<br>LE PÈRE : « Évidemment que non… <strong>mais le fils en dépense comme si oui</strong> ! »" },
    { t: "astuce", x: "Pour lire du théâtre : je regarde d’abord les didascalies (elles peignent le décor et les émotions), puis je lis les répliques en imaginant les voix !" },
    { t: "h", x: "2. Le conditionnel présent : l’incertitude" },
    { t: "regle", x: "Le <strong>conditionnel présent</strong> s’emploie pour une information <strong>non confirmée</strong>, incertaine : « Le héros <strong>serait</strong> blessé. » (= la rumeur le dit, mais rien n’est sûr). Formation : <strong>infinitif + terminaisons de l’imparfait</strong> (je ferais, il parlerait…)." },
    { t: "exemple", x: "« Selon les journaux, le match <strong>aurait lieu</strong> samedi. » « Le nouveau maillot <strong>coûterait</strong> très cher. » → information à prendre avec prudence !" },
    { t: "h", x: "3. Exprimer un besoin, un désir" },
    { t: "ul", items: [
      "Besoin : « J’ai <strong>besoin de</strong> repos. », « Il <strong>faut</strong> que je parte. »",
      "Désir : « Je voudrais… », « J’aimerais… » (conditionnel de politesse/désir) !",
      "Souhait au conditionnel : « Nous <strong>ferions</strong> bien de nous entraîner. »"
    ] }
  ],
  exercices: [
    { type: "qcm", consigne: "Trouve les didascalies.", diff: "facile",
      q: "« <em>(Il regarde sa montre, nerveux.)</em> — Dépêche-toi, le train part ! »",
      options: ["« Dépêche-toi, le train part ! »", "(Il regarde sa montre, nerveux.)", "aucune des deux", "les deux"], rep: 1,
      expl: "Les didascalies sont les indications scéniques entre parenthèses et souvent en italique : gestes, ton, décor." },
    { type: "gap", consigne: "Mets au conditionnel présent (incertitude).", diff: "",
      q: "Selon la radio, le stade [[serait]] fermé demain. · Le nouveau maillot [[coûterait]] cent dollars. · Nos voisins [[déménageraient]] à l’étranger.",
      expl: "« Selon… » annonce une information incertaine → conditionnel présent : serait, coûterait, déménageraient." },
    { type: "qcm", consigne: "Choisis la bonne réplique.", diff: "",
      q: "Pour demander poliment quelque chose à ton entraîneur :",
      options: ["Donne-moi de l’eau !", "Je voudrais un peu d’eau, s’il vous plaît.", "Tu me donnes de l’eau ?", "Eau. Maintenant."], rep: 1,
      expl: "« Je voudrais » (conditionnel de politesse) est la forme adaptée pour exprimer un désir poliment." },
    { type: "gap", consigne: "Complète pour exprimer le besoin.", diff: "",
      q: "Il [[faut]] que je m’entraîne. · J’ai [[besoin]] de dormir huit heures.",
      expl: "« Il faut que + subjonctif » et « avoir besoin de » expriment le besoin." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "difficile",
      q: "Écris <strong>une réplique de théâtre</strong> avec une didascalie entre parenthèses : un personnage annonce une rumeur incertaine (conditionnel).",
      modele: "Exemple : « LÉA : <em>(entrant, essoufflée)</em> Dites donc… le tournoi serait reporté à la semaine prochaine ! Et le bus de retour, lui aussi, aurait un problème de moteur. »",
      criteres: ["Une didascalie entre parenthèses", "Une information au conditionnel (incertitude)", "Format de réplique théâtrale (NOM : …)"] }
  ],
  devoir: {
    titre: "Devoir — Écrire une scène de théâtre",
    consigne: "Écris une <strong>scène de théâtre</strong> (12 à 15 lignes) : deux personnages discutent d’une rumeur ou d’un projet de sortie sportive.",
    etapes: [
      "Titre + liste des personnages.",
      "Didascalies d’ouverture (décor, ambiance).",
      "6 à 8 répliques avec le format « NOM : … ».",
      "Utilise le conditionnel pour l’incertitude (« la sortie serait annulée… ») et une expression de désir (« je voudrais… »).",
      "Termine par une didascalie finale."
    ],
    criteres: ["Didascalies présentes (début et fin au moins)", "Format des répliques correct", "Conditionnel d’incertitude employé", "Une expression de besoin/désir"],
    modele: "Exemple : « <strong>La rumeur du stade</strong> — Personnages : LÉA, YASMINE.<br><em>(La cour du collège. Récréation. Léa arrive en courant, un téléphone à la main.)</em><br>LÉA : Yasmine ! Le match de samedi serait annulé !<br>YASMINE : <em>(s’arrêtant net)</em> Quoi ? Mais tu en es sûre ?<br>LÉA : Pas complètement… Le directeur aurait un problème avec les lignes du terrain.<br>YASMINE : J’aimerais tellement jouer, on s’entraîne depuis un mois !<br>LÉA : Moi aussi. Il faudrait vérifier auprès de madame Nada.<br>YASMINE : Allons-y tout de suite !<br><em>(Elles se dirigent vers le bureau du directeur, en riant nerveusement.)</em> »" }
},

/* ================= UNITÉ 17 ================= */
{
  id: "u17", domaine: "textes", unite: 17, theme: "Thème 8 · La Terre et l’espace",
  texte: "Apollo 13 en danger !", icone: "🚀",
  titre: "La gradation · Le passé composé de l’indicatif",
  objectifs: [
    "reconnaître et employer la gradation",
    "conjuguer et employer le passé composé",
    "préciser départ, destination, durée et moment"
  ],
  cours: [
    { t: "h", x: "1. La gradation" },
    { t: "regle", x: "La <strong>gradation</strong> (ou amplification) aligne des termes dans un <strong>ordre croissant</strong> (de moins en plus fort) ou <strong>décroissant</strong>, pour créer une tension, une intensité." },
    { t: "exemple", x: "« C’est un bruit, c’est un grondement, c’est une explosion ! » (croissante) / « Il a perdu son vaisseau, son équipage, son espoir. » (décroissante → effet tragique)" },
    { t: "h", x: "2. Le passé composé" },
    { t: "regle", x: "Le <strong>passé composé</strong> exprime une action accomplie, achevée, ponctuelle, dans le passé. Formation : <strong>auxiliaire (avoir ou être) au présent + participe passé</strong>." },
    { t: "table", head: ["Sujet", "avoir", "être", "verbe en -er (parler)", "aller"], rows: [
      ["je / j’", "ai", "suis", "ai parlé", "suis allé(e)"],
      ["tu", "as", "es", "as parlé", "es allé(e)"],
      ["il / elle / on", "a", "est", "a parlé", "est allé(e)"],
      ["nous", "avons", "sommes", "avons parlé", "sommes allé(e)s"],
      ["vous", "avez", "êtes", "avez parlé", "êtes allé(e)(s)"],
      ["ils / elles", "ont", "sont", "ont parlé", "sont allé(e)s"]
    ] },
    { t: "regle", x: "On emploie <strong>être</strong> avec les verbes pronominaux (se lever) et une liste de verbes (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir…). Le participe passé s’<strong>accorde</strong> alors avec le sujet : « Elle est partie. » « Ils sont arrivés. »" },
    { t: "astuce", x: "Moyen mnémotechnique pour la maison « être » : <strong>DR MRS VANDERTRAMP</strong> (Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Aller, Mourir, Partir) ou plus simple : « les verbes de déplacement et de changement d’état »." },
    { t: "h", x: "3. Préciser départ, destination, durée" },
    { t: "p", x: "Pour raconter un voyage : départ (« partir <strong>de</strong> Baalbek »), destination (« aller <strong>à</strong> Tripoli »), durée (« pendant trois jours »), moment (« le 11 avril à 14 h »)." }
  ],
  exercices: [
    { type: "qcm", consigne: "Repère la gradation.", diff: "",
      q: "« Je l’ai cru d’abord inquiet, puis affolé, enfin fou de terreur. »",
      options: ["une énumération neutre", "une gradation croissante", "une antithèse", "une périphrase"], rep: 1,
      expl: "L’intensité monte progressivement (inquiet → affolé → fou de terreur) : c’est une gradation croissante." },
    { type: "gap", consigne: "Conjugue au passé composé.", diff: "facile",
      q: "Elle [[est partie]] (partir) hier. · Ils [[ont regardé]] (regarder) le décollage. · Nous [[sommes arrivés]] (arriver, masc. pl.) ce matin. · Tu [[as entendu]] (entendre) le compte à rebours ?",
      expl: "« Partir » et « arriver » prennent être (+ accord) ; « regarder » et « entendre » prennent avoir." },
    { type: "gap", consigne: "Auxiliaire avoir ou être ?", diff: "",
      q: "Le vaisseau [[est]] monté très vite. · L’équipe [[a]] travaillé toute la nuit. · Les astronautes [[sont]] rentré[[s]] (masc. pl.) plus tôt.",
      expl: "Monter, rentrer (déplacement) → être ; travailler → avoir. Avec être, accord : rentrés." },
    { type: "qcm", consigne: "Choisis la phrase au passé composé correcte.", diff: "",
      q: "Quelle phrase est correcte ?",
      options: ["Elle est allé à l’école.", "Elle a allée à l’école.", "Elle est allée à l’école.", "Elle a aller à l’école."], rep: 2,
      expl: "Aller = verbe de déplacement → auxiliaire être + accord avec « elle » : est allée." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Raconte en <strong>3 phrases au passé composé</strong> un voyage (ou un trajet) : précise le départ, la destination, la durée.",
      modele: "Exemple : « Samedi, nous sommes partis de Beyrouth à 7 heures. Nous sommes arrivés à Baalbek après deux heures de route. Nous avons visité les temples pendant toute la journée. »",
      criteres: ["Passé composé bien formé (auxiliaires + accords)", "Départ + destination + durée précisés"] }
  ],
  devoir: {
    titre: "Devoir — Un moment de tension",
    consigne: "Raconte (12 à 15 lignes) un <strong>moment de tension</strong> vécu ou imaginé (un problème pendant un voyage, une panne, un match serré…), comme le récit d’Apollo 13.",
    etapes: [
      "Situe le départ (lieu, moment, durée prévue).",
      "Fais surgir le problème (passé composé) : que s’est-il passé ?",
      "Décris la gradation de la tension (une gradation croissante !).",
      "Termine par le dénouement (situation finale)."
    ],
    criteres: ["Passé composé correct (auxiliaires, accords)", "Une gradation identifiable", "Indicateurs de temps précis (départ, durée)", "Un dénouement clair"],
    modele: "Exemple : « Samedi matin, nous sommes partis en excursion dans la montagne. Nous avons marché pendant deux heures, puis nous avons perdu le chemin balisé. D’abord inquiets, puis nerveux, enfin complètement paniqués, nous avons allumé nos lampes. Heureusement, papa a reconnu un sentier familier : nous sommes rentrés sains et saufs, épuisés mais fiers. »" }
},

/* ================= UNITÉ 18 ================= */
{
  id: "u18", domaine: "textes", unite: 18, theme: "Thème 8 · La Terre et l’espace",
  texte: "Les conquérants", icone: "🌌",
  titre: "Introduire l’explication d’une idée · Le plus-que-parfait",
  objectifs: [
    "introduire l’explication d’une idée",
    "conjuguer et employer le plus-que-parfait",
    "exprimer une antériorité"
  ],
  cours: [
    { t: "h", x: "1. Introduire l’explication d’une idée" },
    { t: "regle", x: "Pour expliquer une idée, on utilise des <strong>mots-outils</strong> : <strong>car, parce que, puisque, en effet, c’est-à-dire, ainsi</strong>, ou les <strong>deux-points</strong>." },
    { t: "exemple", x: "« Les conquérants de l’espace ont du courage : ils quittent la Terre sans savoir ce qui les attend. » / « L’équipage était fier, <strong>car</strong> il représentait toute l’humanité. » / « Il a réussi, <strong>parce qu’</strong>il s’était préparé. »" },
    { t: "table", head: ["Mot-outil", "Emploi"], rows: [
      ["car", "explique (registre courant/soutenu), jamais en début de phrase"],
      ["parce que", "répond à « pourquoi ? »"],
      ["puisque", "explication évidente, admise"],
      ["en effet", "confirme et explique"],
      ["c’est-à-dire", "précise, reformule"]
    ] },
    { t: "h", x: "2. Le plus-que-parfait" },
    { t: "regle", x: "Le <strong>plus-que-parfait</strong> exprime une action <strong>antérieure</strong> (encore plus tôt) à une autre action passée. Formation : <strong>imparfait de avoir/être + participe passé</strong> : j’avais parlé, elle était partie." },
    { t: "exemple", x: "« Quand le vaisseau décolla, l’équipage <strong>avait déjà vérifié</strong> tous les instruments trois fois. » → la vérification s’est faite AVANT le décollage." },
    { t: "astuce", x: "Le plus-que-parfait = le « passé du passé ». Dans une phrase avec deux actions passées, la PLUS ANCIENNE se met au plus-que-parfait." },
    { t: "h", x: "3. Exprimer l’antériorité" },
    { t: "p", x: "Mots-outils de l’antériorité : <strong>déjà, avant, auparavant, d’abord</strong> + plus-que-parfait. « Il avait déjà dormi <strong>avant</strong> le décollage. »" }
  ],
  exercices: [
    { type: "qcm", consigne: "Choisis le bon mot-outil.", diff: "",
      q: "« L’astronaute est resté calme _____ il s’était entraîné pendant des années. »",
      options: ["car", "parce que", "puisque", "c’est-à-dire"], rep: 1,
      expl: "« Parce que » répond à la question « pourquoi est-il resté calme ? ». (« Car » est aussi possible mais il ne peut pas commencer la phrase ; ici il s’insère bien.)" },
    { type: "gap", consigne: "Conjugue au plus-que-parfait.", diff: "",
      q: "Quand nous sommes arrivés, la fusée [[était partie]]. · Elle [[avait préparé]] ses affaires la veille. · Ils [[avaient déjà dormi]] avant le départ.",
      expl: "Plus-que-parfait = imparfait de l’auxiliaire + participe passé : était partie, avait préparé, avaient déjà dormi." },
    { type: "qcm", consigne: "Quel temps pour l’action la plus ancienne ?", diff: "",
      q: "« Il _____ son casque, puis il monta dans la cabine. »",
      options: ["a mis (passé composé)", "avait mis (plus-que-parfait)", "met (présent)", "mettra (futur)"], rep: 1,
      expl: "L’action « mettre le casque » est antérieure à « monter » (passé simple) → plus-que-parfait : avait mis." },
    { type: "gap", consigne: "Complète avec un mot-outil d’explication ou d’antériorité.", diff: "",
      q: "Les explorateurs sont fatigués, [[car|parce que|puisque]] ils ont marché toute la nuit. [[Avant|Auparavant|Déjà]], ils avaient préparé leur itinéraire.",
      expl: "« car / parce que / puisque » introduisent l’explication ; « avant, auparavant, déjà » signalent l’antériorité." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "difficile",
      q: "Écris <strong>2 phrases</strong> : une qui explique une idée avec « parce que » ou « en effet », une avec une action au plus-que-parfait.",
      modele: "Exemples : « Nadia a réussi son examen parce qu’elle avait révisé chaque soir. » / « Le vaisseau décolla sans problème : l’équipe avait tout vérifié. »",
      criteres: ["Une phrase avec mot-outil d’explication", "Une phrase au plus-que-parfait (action antérieure logique)"] }
  ],
  devoir: {
    titre: "Devoir — Les conquérants de l’impossible",
    consigne: "Écris un récit (12 à 15 lignes) sur un <strong>défi relevé</strong> (sportif, scientifique, personnel) en utilisant le plus-que-parfait pour les préparatifs.",
    etapes: [
      "Montre d’abord les préparatifs (plus-que-parfait : elle s’était entraînée, ils avaient tout calculé…).",
      "Raconte le défi (passé composé ou passé simple).",
      "Explique la réussite avec « parce que » ou « en effet ».",
      "Termine par la leçon apprise."
    ],
    criteres: ["Au moins deux verbes au plus-que-parfait", "Une explication avec mot-outil", "Récit structuré et cohérent", "Temps bien distingués (antériorité/actions)"],
    modele: "Exemple : « Pour traverser la baie à la nage, Rana s’était entraînée pendant huit mois. Elle avait étudié les courants, avait préparé son alimentation, et son coach avait calculé chaque minute. Le grand jour arriva : elle plongea à l’aube et atteignit l’autre rive après trois heures d’effort. Elle avait réussi parce qu’elle n’avait rien laissé au hasard. Moralité : les vrais conquérants préparent leur victoire longtemps avant le départ. »" }
},

/* ================= UNITÉ 19 ================= */
{
  id: "u19", domaine: "textes", unite: 19, theme: "Thème 9 · Hommes célèbres…",
  texte: "« Terre ! »", icone: "🌍",
  titre: "Le genre « journal » · Le présent historique",
  objectifs: [
    "découvrir le genre du journal (récit au jour le jour)",
    "employer le présent historique",
    "exprimer une simultanéité"
  ],
  cours: [
    { t: "h", x: "1. Le genre du « journal »" },
    { t: "p", x: "Un <strong>journal</strong> (de bord, intime, de reportage) raconte les événements <strong>au jour le jour</strong>, avec des <strong>dates</strong>. Chaque entrée est datée et raconte ce qui s’est passé." },
    { t: "regle", x: "Structure d’une entrée de journal : <strong>la date</strong> (samedi 11 octobre), puis le récit des faits (passé composé ou présent historique), les <strong>impressions</strong> du narrateur (je)." },
    { t: "exemple", x: "« <strong>Samedi 11 avril, 3 h du matin.</strong> Un silence de plomb règne dans la cabine. Soudain, une voix cri : « Terre ! » Nous l’avons fait ! »" },
    { t: "h", x: "2. Le présent historique" },
    { t: "regle", x: "Le <strong>présent historique</strong> raconte un événement passé comme s’il se déroulait <strong>sous nos yeux</strong>. Il rend le récit vivant et palpitant." },
    { t: "exemple", x: "« En 1492, Christophe Colomb <strong>découvre</strong> l’Amérique. Le 12 octobre au matin, un marin <strong>hurle</strong> : « Terre ! » » → événements anciens, mais racontés au présent !" },
    { t: "attention", x: "Ne mélange pas sans raison : on choisit le passé composé/passé simple OU le présent historique pour une même séquence. Le présent historique est fréquent dans les journaux, les manuels et les reportages." },
    { t: "h", x: "3. Exprimer une simultanéité" },
    { t: "regle", x: "Pour dire que deux actions se passent <strong>en même temps</strong> : <strong>pendant que, lorsque, alors que, au moment où, tandis que</strong> + verbe au présent (ou imparfait au passé)." },
    { t: "exemple", x: "« <strong>Pendant que</strong> l’équipage fête la découverte, le capitaine note la position sur la carte. » / « <strong>Au moment où</strong> la lumière se leva, les oiseaux chantèrent. »" }
  ],
  exercices: [
    { type: "qcm", consigne: "Présent historique ou d’énonciation ?", diff: "",
      q: "« En 1969, l’homme marche sur la Lune pour la première fois. »",
      options: ["présent d’énonciation", "présent de vérité générale", "présent historique", "présent d’habitude"], rep: 2,
      expl: "Un événement daté du passé (1969) raconté au présent comme un reportage en direct : présent historique." },
    { type: "qcm", consigne: "Choisis l’entrée de journal correcte.", diff: "facile",
      q: "Quelle entrée respecte le format du journal ?",
      options: ["Il était une fois une belle princesse.", "Vendredi 3 mars. Aujourd’hui, nous avons enfin atteint le sommet !", "1) Préchauffez le four.", "Leiron, le roi des mers…"], rep: 1,
      expl: "Une entrée de journal commence par une date (Vendredi 3 mars) et raconte la journée avec « nous/j » au passé composé." },
    { type: "gap", consigne: "Complète avec un mot de simultanéité.", diff: "",
      q: "[[Pendant que|Tandis que|Alors que|Au moment où]] l’équipage criait de joie, le radio envoyait le message. [[Lorsque|Quand|Au moment où]] la mer s’apaisa, tout le monde respira.",
      expl: "Les mots de simultanéité : pendant que, tandis que, alors que, lorsque, au moment où." },
    { type: "ordre", consigne: "Remets cette entrée de journal en ordre.", diff: "",
      q: "Du haut vers le bas :",
      mots: ["Jeudi 14 juillet.", "Ce matin, le ciel était magnifique.", "À midi, nous avons hissé le drapeau.", "Quelle journée inoubliable !"],
      expl: "Date d’abord, puis le récit de la journée (du matin à midi), puis l’impression finale." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Écris <strong>une entrée de journal</strong> (3 à 4 phrases) avec la date, en racontant un événement au présent historique.",
      modele: "Exemple : « Lundi 6 octobre. Un grand jour ! À huit heures, le bus démarre et grimpe les cols enneigés. Pendant que les grands silencieux regardent par la fenêtre, les petits chantent à tue-tête. Nous arrivons enfin : la montagne nous ouvre ses bras. »",
      criteres: ["Une date", "Présent historique cohérent", "Un mot de simultanéité accepté !"] }
  ],
  devoir: {
    titre: "Devoir — Mon journal d’exploratrice",
    consigne: "Écris <strong>deux entrées de journal</strong> (5 à 6 lignes chacune) d’une exploratrice (ou d’un explorateur) : la veille du grand départ, puis le jour de la découverte.",
    etapes: [
      "Entrée 1 : date + préparation, impression (excitation, peur).",
      "Entrée 2 : date + la découverte, au présent historique (comme un reportage en direct).",
      "Utilise un mot de simultanéité dans chaque entrée.",
      "Exprime tes émotions avec des phrases exclamatives."
    ],
    criteres: ["Deux entrées datées", "Présent historique dans la 2e entrée", "Simultanéité (pendant que, alors que…)", "Émotions exprimées"],
    modele: "Exemple : « <strong>Vendredi 2 mai.</strong> Demain, c’est le grand jour ! Mon sac est prêt depuis une semaine ; je vérifie la lampe pour la dixième fois. Pendant que je range mes carnets, maman prépare un thermos de thé. L’angoisse et la joie se mélangent…<br><strong>Samedi 3 mai.</strong> C’est extraordinaire ! À sept heures, la brume se lève et révèle la vallée perdue. Le soleil éclaire des ruines inconnues ; les pierres brillent comme de l’or. Quel spectacle ! »" }
},

/* ================= UNITÉ 20 ================= */
{
  id: "u20", domaine: "textes", unite: 20, theme: "Thème 9 · Hommes célèbres…",
  texte: "Le chien d’Ulysse", icone: "🐕",
  titre: "Le passage explicatif · Le présent d’énonciation · La biographie",
  objectifs: [
    "écrire un passage explicatif",
    "employer le présent d’énonciation",
    "découvrir la biographie et exprimer son admiration"
  ],
  cours: [
    { t: "h", x: "1. Le passage explicatif" },
    { t: "regle", x: "Le <strong>passage explicatif</strong> fait comprendre <strong>comment</strong> et <strong>pourquoi</strong> : il explique un phénomène, un fonctionnement, une idée. Il utilise : des connecteurs logiques (d’abord, ensuite, donc, ainsi, parce que, en effet), le présent de vérité générale, et un vocabulaire précis." },
    { t: "exemple", x: "« Pourquoi le chien d’Ulysse est-il resté célèbre ? <strong>D’abord</strong>, Argos attendit son maître vingt ans. <strong>Ensuite</strong>, il reconnut Ulysse déguisé, <strong>car</strong> l’amour ne voit pas les habits. <strong>Ainsi</strong>, il devint le symbole de la fidélité. »" },
    { t: "h", x: "2. Le présent d’énonciation" },
    { t: "regle", x: "Le <strong>présent d’énonciation</strong> exprime ce qui se passe <strong>au moment où l’on parle</strong> : « Je t’écris depuis la bibliothèque. » « Le professeur explique la leçon. »" },
    { t: "table", head: ["Type de présent", "Question à se poser", "Exemple"], rows: [
      ["d’énonciation", "est-ce que ça se passe maintenant, au moment où je parle ?", "« Je te réponds. »"],
      ["d’habitude", "est-ce que ça se répète ?", "« Je réponds toujours vite. »"],
      ["de vérité générale", "est-ce toujours vrai ?", "« Les chiens sont fidèles. »"],
      ["historique", "est-ce un fait passé raconté en direct ?", "« En 1200 av. J.-C., Ulysse rentre chez lui. »"]
    ] },
    { t: "h", x: "3. La biographie" },
    { t: "p", x: "Une <strong>biographie</strong> raconte la vie d’une personne réelle, dans l’ordre chronologique : naissance, enfance, études, œuvre/vie, fin de vie. Elle est écrite à la 3e personne, au passé (ou au présent historique)." },
    { t: "astuce", x: "Pour exprimer l’admiration : « J’admire… parce que », « Ce qui me frappe chez lui/elle, c’est… », « Quel courage ! », « Elle mérite notre respect car… »" }
  ],
  exercices: [
    { type: "qcm", consigne: "Quelle valeur du présent ?", diff: "",
      q: "« Écoute, je te raconte ce qui m’est arrivé ce matin. »",
      options: ["présent de vérité générale", "présent d’énonciation", "présent historique", "présent d’habitude"], rep: 1,
      expl: "« Je te raconte » se passe au moment même où la personne parle : présent d’énonciation." },
    { type: "qcm", consigne: "Reconnais la biographie.", diff: "facile",
      q: "Quel texte est une biographie ?",
      options: ["« Il était une fois une reine… »", "« Marie Curie naquit à Varsovie en 1867. Elle étudia la physique à Paris… »", "« Préchauffez le four à 180°. »", "« Chers parents, je vous écris du camp… »"], rep: 1,
      expl: "Personne réelle, dates précises, vie racontée chronologiquement à la 3e personne : c’est une biographie." },
    { type: "gap", consigne: "Complète le passage explicatif avec les connecteurs logiques.", diff: "",
      q: "[[D’abord|Premièrement]], la plante capte l’eau par ses racines. [[Ensuite|Puis|Puis|Deuxièmement]], la sève monte dans la tige, [[car|parce que|puisque]] la lumière favorise l’évaporation. [[Ainsi|Donc|Enfin]], la plante peut fabriquer sa nourriture.",
      expl: "Les connecteurs organisent l’explication : d’abord, ensuite, car, ainsi/donc." },
    { type: "qcm", consigne: "Ordre chronologique d’une biographie.", diff: "",
      q: "Quelle est la bonne ordre d’une biographie ?",
      options: ["œuvre → naissance → enfance → mort", "naissance → enfance → études → œuvre → fin de vie", "fin de vie → œuvre → naissance", "études → naissance → mort → enfance"], rep: 1,
      expl: "La biographie suit la chronologie de la vie : naissance, enfance, études, œuvre, fin de vie." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Écris <strong>3 phrases</strong> pour exprimer ton admiration pour une personne que tu connais (famille, sportive, scientifique…). Utilise « parce que » ou « car ».",
      modele: "Exemple : « J’admire beaucoup ma grand-mère parce qu’elle a élevé six enfants avec courage. Elle apprend encore, car elle dit que le cerveau est un muscle ! Quel exemple pour nous tous ! »",
      criteres: ["Une expression d’admiration", "Une justification (parce que/car)", "3 phrases correctes"] }
  ],
  devoir: {
    titre: "Devoir — La biographie d’une personne admirée",
    consigne: "Écris la <strong>mini-biographie</strong> (10 à 12 lignes) d’une personne célèbre (ou d’un membre de ta famille !) que tu admires.",
    etapes: [
      "Présente la personne (nom, lieu et année de naissance si connus).",
      "Raconte sa vie dans l’ordre chronologique (enfance, études, parcours).",
      "Mets en avant une réussite ou une qualité avec un passage explicatif (d’abord, ensuite, ainsi…).",
      "Termine par une phrase d’admiration personnelle."
    ],
    criteres: ["Chronologie claire", "3e personne", "Connecteurs explicatifs (d’abord, ensuite, ainsi…)", "Une phrase d’admiration finale"],
    modele: "Exemple : « <strong>May Chidiac, le courage de dire</strong><br>May Chidiac naît au Liban en 1965. Elle choisit très tôt le métier de journaliste, car elle croit à la force de l’information. En 2005, elle est victime d’un attentat et perd son bras gauche. D’abord hospitalisée longuement, elle reprend ensuite son métier avec la même énergie. Ainsi, elle devient un symbole du courage des femmes. J’admire son opiniâtreté : elle n’a jamais renoncé à sa passion. »" }
}
);
