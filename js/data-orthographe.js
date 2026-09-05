/* ============================================================
   Base de données — ORTHOGRAPHE & VOCABULAIRE (8 leçons)
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
{
  id: "o01", domaine: "orthographe", tag: "O1", icone: "🔗",
  titre: "Les homophones : a/à, et/est, on/ont, son/sont",
  objectifs: ["écrire correctement les homophones les plus fréquents", "utiliser les tests de remplacement"],
  cours: [
    { t: "table", head: ["Homophones", "Test pour choisir", "Exemples"], rows: [
      ["<strong>a</strong> / <strong>à</strong>", "a = verbe avoir (remplace par « avait ») ; à = préposition (impossible de remplacer)", "« Elle <strong>a</strong> un chat » (elle avait un chat ✔) / « Elle va <strong>à</strong> l’école »"],
      ["<strong>et</strong> / <strong>est</strong>", "et = « et puis » (on peut remplacer par une virgule) ; est = verbe être (remplace par « était »)", "« du pain <strong>et</strong> du lait » / « Il <strong>est</strong> content » (il était ✔)"],
      ["<strong>on</strong> / <strong>ont</strong>", "ont = ils ont (remplace par « avaient ») ; on = pronom (remplace par « quelqu’un »)", "« Ils <strong>ont</strong> fini » (ils avaient ✔) / « <strong>On</strong> part » (quelqu’un part ✔)"],
      ["<strong>son</strong> / <strong>sont</strong>", "sont = ils sont (remplace par « étaient ») ; son = le sien", "« Ils <strong>sont</strong> prêts » (étaient ✔) / « <strong>son</strong> sac » (le sien ✔)"],
      ["<strong>ou</strong> / <strong>où</strong>", "ou = « ou bien » (choix) ; où = lieu/temps (avec accent circonflexe)", "« thé <strong>ou</strong> café ? » / « la ville <strong>où</strong> je vis »"]
    ] },
    { t: "astuce", x: "Retiens le trio magique des tests : <strong>avait</strong> (pour a/ont), <strong>était</strong> (pour est/sont), <strong>ou bien</strong> (pour ou). Si le remplacement marche, c’est le verbe !" }
  ],
  exercices: [
    { type: "gap", strict: true, consigne: "Complète avec a ou à.", diff: "facile",
      q: "Elle [[a]] une jolie robe. · Nous allons [[à]] la mer demain. · Il [[a]] patiné toute la journée.",
      expl: "« Elle avait une jolie robe » ✔ → a. « Nous allons vers… » → à. « Il avait patiné » ✔ → a." },
    { type: "gap", strict: true, consigne: "Complète avec et ou est.", diff: "",
      q: "Ce gâteau [[est]] délicieux. · J’achète du pain [[et]] du fromage. · Lina [[et]] Maya sont cousins.",
      expl: "« était délicieux » ✔ → est ; « du pain, puis du fromage » → et." },
    { type: "gap", strict: true, consigne: "Complète avec on, ont, son ou sont.", diff: "",
      q: "Ils [[ont]] visité Baalbek. · [[On]] m’a dit que tu revenais. · Les filles [[sont]] contentes. · Il range [[son]] cartable.",
      expl: "« ils avaient visité » ✔ → ont ; « quelqu’un m’a dit » → On ; « elles étaient contentes » ✔ → sont ; « le sien » → son." },
    { type: "gap", strict: true, consigne: "Complète avec ou ou où.", diff: "",
      q: "Tu préfères la plage [[ou]] la montagne ? · Le village [[où]] est né mon père est petit. · [[Où]] as-tu mis mes clés ?",
      expl: "Choix → ou ; lieu/temps → où (avec circonflexe)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 4 phrases : une avec « a », une avec « à », une avec « ont », une avec « sont ».",
      modele: "Exemple : « Ma sœur a un vélo bleu. Nous irons à la mer ce week-end. Ils ont planté un olivier. Mes amis sont arrivés ce matin. »",
      criteres: ["Les 4 homophones utilisés correctement", "Les phrases sont complètes"] }
  ]
},
{
  id: "o02", domaine: "orthographe", tag: "O2", icone: "🤝",
  titre: "L’accord du verbe avec le sujet",
  objectifs: ["accorder le verbe avec son sujet", "gérer les sujets composés et les sujets éloignés"],
  cours: [
    { t: "regle", x: "Le verbe s’accorde en <strong>personne</strong> et en <strong>nombre</strong> avec son <strong>sujet</strong>. « Les enfants <strong>jouent</strong>. » « Ma sœur <strong>chante</strong>. »" },
    { t: "regle", x: "<strong>Sujet composé</strong> (A et B) → verbe au pluriel : « Lina <strong>et</strong> Maya <strong>vont</strong> au parc. » Sujets liés par « ou » → souvent singulier : « Le thé <strong>ou</strong> le café <strong>est</strong> offert. »" },
    { t: "attention", x: "Sujet <strong>éloigné</strong> : le verbe s’accorde avec le sujet, pas avec le mot juste devant ! « Les pommes <strong>de mon grand-père</strong> sont délicieuses. » (et non « est » !) « La boîte <strong>de chocolats</strong> est ouverte. »" },
    { t: "astuce", x: "Méthode : ① je cherche le verbe ; ② je pose la question « qui est-ce qui + verbe ? » ; ③ j’accorde avec la réponse. Attention aux pronoms : c’est → c’<strong>est</strong> (sujet invisible = ça)." }
  ],
  exercices: [
    { type: "gap", consigne: "Accorde le verbe avec le sujet.", diff: "facile",
      q: "Les élèves de 5e [[révisent]] leurs leçons. · La liste des invités [[est]] sur la table.",
      expl: "« Les élèves révisent » (pluriel). Sujet éloigné : c’est « la liste » qui est (singulier), pas « invités »." },
    { type: "gap", consigne: "Sujet composé : accorde.", diff: "",
      q: "Le pain [[et]] le fromage [[sont]] prêts. · Ni mon frère ni ma sœur [[n’aime]] les épinards.",
      expl: "« et » → pluriel (sont). « ni… ni » avec deux singuliers → verbe au singulier (n’aime)." },
    { type: "qcm", consigne: "Trouve la phrase correcte.", diff: "",
      q: "Quelle phrase est bien accordée ?",
      options: ["La clé des portes sont perdues.", "La clé des portes est perdue.", "La clé des portes sont perdue.", "Les clé est perdues."], rep: 1,
      expl: "Le sujet est « la clé » (singulier) : « la clé est perdue ». « Des portes » est un complément du nom !" },
    { type: "gap", consigne: "Accorde avec le pronom sujet.", diff: "difficile",
      q: "C’[[est]] moi qui [[suis]] responsable. · Ce [[sont]] mes amis qui arrivent.",
      expl: "« c’est moi qui suis » (accord avec « moi ») ; « ce sont mes amis » (pluriel)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 2 phrases : une avec un sujet éloigné (GN + complément du nom), une avec un sujet composé (X et Y).",
      modele: "Exemple : « Le parfum des fleurs embaume le jardin. (sujet = le parfum) Nour et Hala préparent un spectacle. (sujet composé → pluriel) »",
      criteres: ["Sujets identifiés et verbes bien accordés", "Une phrase avec sujet composé au pluriel"] }
  ]
},
{
  id: "o03", domaine: "orthographe", tag: "O3", icone: "🎨",
  titre: "L’accord de l’adjectif qualificatif",
  objectifs: ["accorder l’adjectif en genre et en nombre", "connaître les règles particulières"],
  cours: [
    { t: "regle", x: "L’<strong>adjectif</strong> s’accorde en <strong>genre</strong> et en <strong>nombre</strong> avec le nom qu’il qualifie : « un livre intéress<strong>ant</strong> » / « une histoire intéress<strong>ante</strong> » / « des livres intéress<strong>ants</strong> » / « des histoires intéress<strong>antes</strong> »." },
    { t: "table", head: ["Règle", "Exemples"], rows: [
      ["feminin : + e (souvent)", "grand → grand<strong>e</strong> ; petit → petit<strong>e</strong>"],
      ["-er → -ère", "cher → cher<strong>ère</strong> ; léger → lég<strong>ère</strong>"],
      ["-eux → -euse", "heureux → heureus<strong>e</strong>"],
      ["-eur → -euse / -eure", "travailleur → travailleuse ; prieur → priante"],
      ["doublement de la consonne", "bon → bon<strong>ne</strong> ; gros → gros<strong>se</strong> ; ancien → ancienn<strong>e</strong>"],
      ["déjà en e → inchangé", "rouge → rouge ; rapide → rapide"],
      ["pluriel : + s (ou -x si -eau)", "bleus ; beaux ; nouveaux"]
    ] },
    { t: "attention", x: "Adjectifs irréguliers : beau → beau (masc sing) / bel (devant voyelle) / belle ; nouveau → nouvel (devant voyelle) / nouvelle ; vieux → vieil / vieille. « Un bel homme », « un vieil arbre », « un nouvel élève »." }
  ],
  exercices: [
    { type: "gap", consigne: "Accorde les adjectifs.", diff: "facile",
      q: "une robe [[bleue]] · des gâteaux [[délicieux]] · une [[grande]] maison · des histoires [[intéressantes]]",
      expl: "robe (fém sing) → bleue ; gâteaux (masc pl) → délicieux ; maison (fém sing) → grande ; histoires (fém pl) → intéressantes." },
    { type: "qcm", consigne: "Choisis la bonne forme.", diff: "",
      q: "« Des travailleuses ______. »",
      options: ["heureux", "heureuses", "heureuse", "heureusex"], rep: 1,
      expl: "heureux → féminin pluriel : heureuses (-eux → -euses)." },
    { type: "gap", consigne: "Bel, beau, belle, nouvel, nouveau, nouvelle ?", diff: "difficile",
      q: "un [[bel|bel|beau|belle]] arbre (devant voyelle !) · un [[nouvel|nouvel|nouveau|nouvelle]] élève · une [[belle|belle|beau|bel]] histoire · un [[beau|beau|bel|belle]] jardin",
      expl: "Devant une voyelle : bel (un bel arbre), nouvel (un nouvel élève). Devant consonne : beau, nouveau, belle." },
    { type: "qcm", consigne: "Trouve la phrase correcte.", diff: "",
      q: "Quelle phrase est bien accordée ?",
      options: ["Les filles sont contents.", "Les filles sont contentes.", "Les filles sont content.", "Les filles sont contents."], rep: 1,
      expl: "« Filles » est féminin pluriel → contentes." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Décris un objet de ta chambre en 2 phrases avec 3 adjectifs accordés (au moins un féminin et un pluriel).",
      modele: "Exemple : « Ma lampe jaune éclaire des étagères bien rangées. Mes coussins doux et moelleux attendent que je m’assoie. »",
      criteres: ["3 adjectifs accordés correctement", "Au moins un accord féminin et un pluriel"] }
  ]
},
{
  id: "o04", domaine: "orthographe", tag: "O4", icone: "🧮",
  titre: "L’accord du participe passé",
  objectifs: ["accorder le participe passé avec être", "comprendre le COD placé avant avec avoir"],
  cours: [
    { t: "regle", x: "<strong>Avec être</strong> : le participe s’accorde avec le <strong>sujet</strong>. « Elle est allé<strong>e</strong>. » « Ils sont arriv<strong>és</strong>. » « Elles sont parti<strong>es</strong>. »" },
    { t: "regle", x: "<strong>Avec avoir</strong> : le participe ne s’accorde <strong>jamais</strong> avec le sujet : « Elle a mangé des pommes. » Mais il s’accorde avec le <strong>COD placé AVANT</strong> : « Les pommes qu’elle a mangé<strong>es</strong>. » « Quelle belle histoire tu m’as raconté<strong>e</strong> ! »" },
    { t: "astuce", x: "Méthode pour « avoir » : ① y a-t-il un COD ? ② est-il placé avant le verbe ? Si oui → j’accorde. « Je les ai lavé<strong>es</strong> » (les = les assiettes, COD avant). « J’ai lavé les assiettes » (COD après → pas d’accord)." },
    { t: "attention", x: "Cas fréquents : « les fleurs que j’ai cueillies » (accord), « les lettres qu’elle a écrites » (accord), mais « elle a écrit des lettres » (pas d’accord), « je l’ai vu » (l’ = le garçon ? vu) / « je l’ai vue » (la fille ? vue)." }
  ],
  exercices: [
    { type: "gap", consigne: "Accorde si nécessaire.", diff: "facile",
      q: "Les filles sont rentrée[[s]] tôt. → [[rentrées]] · Elle a mangé des pommes → [[mangé]] (pas d’accord)",
      expl: "Avec être : accord avec le sujet (rentrées). Avec avoir + COD après : pas d’accord (mangé)." },
    { type: "gap", consigne: "COD avant ? Accorde !", diff: "difficile",
      q: "Les tartes que j’ai [[préparées]] sont chaudes. · Il les a [[écoutées]] (les chansons). · Elle a [[écrit]] trois lettres.",
      expl: "« que » (= les tartes, COD avant) → préparées. « les » (COD avant) → écoutées. COD après → écrit (pas d’accord)." },
    { type: "qcm", consigne: "Choisis la bonne phrase.", diff: "",
      q: "« Voici les photos que nous avons ______. » (prendre)",
      options: ["pris", "prises", "prise", "prenus"], rep: 1,
      expl: "« que » = les photos (fém. pl., COD avant) → prises." },
    { type: "qcm", consigne: "Suis-je sûr(e) ?", diff: "",
      q: "« Ma cousine et sa copine sont ______ au Liban. » (venir)",
      options: ["venu", "venus", "venues", "venirent"], rep: 2,
      expl: "Venir → être. Sujet féminin pluriel → venues." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 2 phrases au passé composé : une avec être (accordée), une avec avoir + COD placé avant (accordée aussi !).",
      modele: "Exemple : « Mes amies sont arrivées à huit heures. Les histoires qu’elles ont racontées étaient drôles. »",
      criteres: ["Une phrase avec être bien accordée", "Une phrase avec avoir + COD avant bien accordée"] }
  ]
},
{
  id: "o05", domaine: "orthographe", tag: "O5", icone: "➕",
  titre: "Pluriels particuliers",
  objectifs: ["former les pluriels en -x", "connaître les pluriels des noms composés usuels"],
  cours: [
    { t: "table", head: ["Terminaison", "Pluriel", "Exemples"], rows: [
      ["-s", "+ s", "des livres, des maisons"],
      ["-eau, -eu", "+ x", "des bateau<strong>x</strong>, des cheveu<strong>x</strong> (sauf : des pneus, des bleus)"],
      ["-ou", "+ s (7 exceptions en -x)", "des clous… mais des bijou<strong>x</strong>, des joujou<strong>x</strong>, des chou<strong>x</strong>, des genou<strong>x</strong>, des hibou<strong>x</strong>, des caillou<strong>x</strong>, des pou<strong>x</strong>"],
      ["-al", "-aux", "des animau<strong>x</strong>, des journaux, des idéaux (sauf : des festivals, des bals)"],
      ["-ail", "+ s (souvent)", "des détails, des éventails (mais : des travaux)"]
    ] },
    { t: "astuce", x: "Pour les -ou : retiens la phrase « <strong>Vi</strong>ens <strong>m</strong>on <strong>chou</strong>, <strong>m</strong>on <strong>joujou</strong>, <strong>m</strong>on <strong>genou</strong>, <strong>h</strong>ibou, <strong>c</strong>aillou, pou ! » (bijou, chou, joujou, genou, hibou, caillou, pou → -x)." },
    { t: "regle", x: "Pluriels particuliers : un œil → des <strong>yeux</strong> ; madame → mesdames ; monsieur → messieurs ; mademoiselle → mesdemoiselles." }
  ],
  exercices: [
    { type: "gap", consigne: "Écris le pluriel.", diff: "facile",
      q: "un cheveu → des [[cheveux]]. · un animal → des [[animaux]]. · un genou → des [[genoux]]. · un détail → des [[détails]].",
      expl: "-eu → x ; -al → aux ; -ou exception → x ; -ail → s." },
    { type: "gap", consigne: "Pluriel en -x ou -s ?", diff: "",
      q: "des clou[[s]] · des bijou[[x]] · des caillou[[x]] · des trous[[s]]",
      expl: "clou et trou prennent -s ; bijou et caillou (exceptions !) prennent -x." },
    { type: "qcm", consigne: "Trouve l’erreur.", diff: "",
      q: "Quelle phrase contient une faute de pluriel ?",
      options: ["Des bateaux traversent le fleuve.", "Mes cheveux sont bruns.", "Des festivals ont lieu l’été.", "Des animaus vivent ici."], rep: 3,
      expl: "animal → animaux (pas « animaus »)." },
    { type: "gap", consigne: "Pluriels particuliers.", diff: "",
      q: "un œil → des [[yeux]]. · madame → [[mesdames]].",
      expl: "Œil → yeux ; madame → mesdames (pluriel lexical)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 2 phrases contenant chacune un pluriel en -x (pas le même !).",
      modele: "Exemple : « Ses cheveux ondoyent au vent. Les journaux racontent des histoires extraordinaires. »",
      criteres: ["2 pluriels en -x différents et corrects"] }
  ]
},
{
  id: "o06", domaine: "orthographe", tag: "O6", icone: "🧵",
  titre: "Le champ lexical et le champ sémantique",
  objectifs: ["constituer un champ lexical", "distinguer synonymes et champ sémantique"],
  cours: [
    { t: "regle", x: "Le <strong>champ lexical</strong> = l’ensemble des mots qui se rapportent au <strong>même thème</strong> (natures variées : noms, verbes, adjectifs). Champ lexical de la mer : vague, salé, naviguer, marin, tempête…" },
    { t: "regle", x: "Le <strong>champ sémantique</strong> = l’ensemble des <strong>sens</strong> d’un même mot. « Pied » : partie du corps, pied de la montagne, pied de la table, trois pieds de long (mesure)…" },
    { t: "astuce", x: "Repérer le champ lexical d’un texte aide à deviner son thème ! Pour enrichir une description, je pioche dans le champ lexical du sujet." },
    { t: "exemple", x: "Champ lexical de la fête : gâteau, bougies, invités, célébrer, musique, danser, rire, décorations…" }
  ],
  exercices: [
    { type: "qcm", consigne: "Quel mot n’appartient PAS au champ lexical de l’école ?", diff: "facile",
      q: "cahier · craie · réviser · lampe · maître",
      options: ["cahier", "craie", "lampe", "maître"], rep: 2,
      expl: "« Lampe » ne se rapporte pas spécialement à l’école : cahier, craie, réviser, maître oui." },
    { type: "gap", consigne: "Ajoute 2 mots du champ lexical demandé.", diff: "",
      q: "La mer : vagues, [[poisson|poissons|poisson|sel|bateau|nager|plage|écume|coquillage]]. · La montagne : sommet, [[pente|randonnée|pente|pistes|nez|ascension|pied|vallee|vallée|cèdre]].",
      expl: "Toute réponse liée au thème est acceptée : le champ lexical est ouvert !" },
    { type: "qcm", consigne: "Champ lexical ou champ sémantique ?", diff: "difficile",
      q: "« Tête » peut signifier : partie du corps, chef (le chef d’entreprise), esprit (avoir la tête pleine). On parle de…",
      options: ["champ lexical", "champ sémantique", "synonymes", "homophones"], rep: 1,
      expl: "Les différents sens d’UN même mot = champ sémantique. Plusieurs mots autour d’un thème = champ lexical." },
    { type: "qcm", consigne: "Trouve le thème.", diff: "",
      q: "« Le juge écoute les témoins, examine les preuves et rend sa décision. » — le champ lexical dominant est celui de…",
      options: ["l’école", "la justice", "la médecine", "la cuisine"], rep: 1,
      expl: "Juge, témoins, preuves, décision : le champ lexical de la justice." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 5 mots du champ lexical de « la forêt », puis une phrase utilisant au moins 3 de ces mots.",
      modele: "Exemple : arbres, feuilles, sous-bois, chant des oiseaux, mousse. « Dans le sous-bois, les feuilles craquaient sous nos pas et le chant des oiseaux remplissait les arbres. »",
      criteres: ["5 mots liés à la forêt", "Une phrase avec 3 de ces mots"] }
  ]
},
{
  id: "o07", domaine: "orthographe", tag: "O7", icone: "🪞",
  titre: "Polysémie, homonymes et paronymes",
  objectifs: ["reconnaître un mot polysémique", "distinguer homonymes et paronymes"],
  cours: [
    { t: "regle", x: "Un mot <strong>polysémique</strong> a <strong>plusieurs sens</strong> selon le contexte : « une orange » (fruit) / « une orange » (couleur) ; « le nez » (visage) / « le nez » (d’un avion)." },
    { t: "regle", x: "Des <strong>homonymes</strong> se prononcent pareil mais ont des sens différents et souvent une orthographe différente : ver / vert / verre / vers / vair." },
    { t: "regle", x: "Des <strong>paronymes</strong> se ressemblent mais ne se prononcent pas tout à fait pareil : <strong>éminent/imm<br>inent</strong>, <strong>collation/collocation</strong>, <strong>éviter/étourdir</strong>… Attention aux pièges : « apporter/emporter », « préciser/prévenir »." },
    { t: "exemple", x: "« La pluie » (eau) vs « le pleut » n’existe pas… mais « il pleut » (verbe) vs « la pluie » (nom) : attention aux confusions fréquentes ! Autre classique : « conflit/consul »." }
  ],
  exercices: [
    { type: "qcm", consigne: "Quel sens de « pied » ?", diff: "facile",
      q: "« Il est parti à pied parce que le pied de la colline était proche. »",
      options: ["deux fois le même sens", "partie du corps puis base de la colline", "mesure puis corps", "base puis mesure"], rep: 1,
      expl: "« À pied » = partie du corps (marcher) ; « le pied de la colline » = le bas (base). Même mot, deux sens : polysémie." },
    { type: "gap", consigne: "Choisis le bon homophone.", diff: "",
      q: "Le verre est [[vert]] (couleur). · Je bois un [[verre]] d’eau. · Le [[ver]] de terre creuse des galeries.",
      expl: "vert (couleur), verre (contenant), ver (animal) : homonymes !" },
    { type: "qcm", consigne: "Homonymes ou paronymes ?", diff: "difficile",
      q: "« expérience » (savoir) et « expérience » (essai scientifique) sont…",
      options: ["des homonymes", "des paronymes", "le même mot polysémique", "des synonymes"], rep: 2,
      expl: "Même orthographe, même prononciation, plusieurs sens : mot polysémique !" },
    { type: "gap", consigne: "Complète avec apporter ou emporter.", diff: "",
      q: "Tu peux [[apporter]] mon parapluie quand tu viens ? (vers le lieu où l’on est) · N’oublie pas d’[[emporter]] ta gourde en excursion ! (emmener avec soi)",
      expl: "Apporter = amener VERS le lieu/la personne ; emporter = prendre AVEC soi en partant." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Invente 2 phrases où le mot « feuille » a deux sens différents.",
      modele: "Exemple : « La feuille de l’arbre tomba sur la feuille de papier posée sur la table. » / « Il note le score sur une feuille verte. »",
      criteres: ["Deux sens différents du mot feuille", "Contextes clairs"] }
  ]
},
{
  id: "o08", domaine: "orthographe", tag: "O8", icone: "🧩",
  titre: "Préfixes, radicaux et suffixes",
  objectifs: ["décomposer un mot", "former des mots avec préfixes et suffixes"],
  cours: [
    { t: "regle", x: "Un mot peut se décomposer : <strong>préfixe</strong> + <strong>radical</strong> + <strong>suffixe</strong>. « im-possible-ment » → im (négation) + possible + ment (adverbe)." },
    { t: "table", head: ["Préfixe", "Sens", "Exemples"], rows: [
      ["re-", "répéter", "refaire, repartir"],
      ["in-, im-, il-, ir-", "négation", "invisible, impossible, illégal, irrégulier"],
      ["dé-, dés-", "action contraire", "détruire, défaire, désobéir"],
      ["mal-", "mal fait", "malheureux, malvoyant"],
      ["inter-", "entre", "international, interrompre"],
      ["tele-, télé-", "à distance", "téléphone, télévision"]
    ] },
    { t: "table", head: ["Suffixe", "Forme", "Exemples"], rows: [
      ["-tion", "nom d’action", "action, navigation"],
      ["-té", "nom de qualité", "beauté, gentillesse"],
      ["-eux/-euse", "adjectif", "joyeux, merveilleux"],
      ["-able/-ible", "adjectif (possibilité)", "mangeable, lisible, visible"],
      ["-ment", "adverbe", "doucement, gentiment"],
      ["-iste, -eur", "métier/personne", "dentiste, lecteur"]
    ] },
    { t: "astuce", x: "Connaître les préfixes et suffixes aide à deviner le sens des mots inconnus ET à éviter les fautes : « mal-heureux » (mal + heureux), « in-visible »." }
  ],
  exercices: [
    { type: "qcm", consigne: "Quel est le préfixe ?", diff: "facile",
      q: "« repartir »",
      options: ["re-", "par-", "-tir", "parti"], rep: 0,
      expl: "re- (répéter) + partir : repartir = partir de nouveau." },
    { type: "gap", consigne: "Forme le contraire avec un préfixe.", diff: "",
      q: "possible → [[impossible]] · obéissant → [[désobéissant|desobeissant|désobéissant]] · utile → [[inutile]] · heureux → [[malheureux]]",
      expl: "Préfixes de négation : im- (possible), dés- (obéissant), in- (utile), mal- (heureux)." },
    { type: "gap", consigne: "Décompose le mot.", diff: "",
      q: "« navigation » = le verbe [[naviguer|naviguer|navig|navigation]] + le suffixe [[-ation|-ation|ation|-tion]] (qui forme un nom d’action).",
      expl: "naviguer + -ation → navigation (nom d’action)." },
    { type: "qcm", consigne: "Quel suffixe forme un adverbe ?", diff: "",
      q: "« rapide » → « rapidement ». Le suffixe est…",
      options: ["-ment", "-te", "-eur", "-able"], rep: 0,
      expl: "Adjectif + -ment = adverbe de manière." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Forme 3 mots : un avec le préfixe « re- », un avec « in- », un avec le suffixe « -tion ». Écris-les dans une phrase chacun.",
      modele: "Exemple : « Je relis ma leçon. Ce puzzle est introuvable. La fabrication du pain sent bon. »",
      criteres: ["3 mots correctement formés", "Chaque mot utilisé dans une phrase"] }
  ]
}
);
