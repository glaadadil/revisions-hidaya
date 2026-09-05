/* ============================================================
   Base de données — GRAMMAIRE (10 leçons)
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
{
  id: "g01", domaine: "grammaire", tag: "G1", icone: "🧱",
  titre: "La phrase : simple, composée, complexe",
  objectifs: ["reconnaître les trois formes de phrase", "identifier coordination, juxtaposition, subordination"],
  cours: [
    { t: "h", x: "Les trois formes de la phrase" },
    { t: "regle", x: "Une <strong>phrase simple</strong> contient <strong>un seul verbe conjugué</strong> (une seule proposition). « Les enfants jouent dans la cour. »" },
    { t: "regle", x: "Une <strong>phrase composée</strong> contient <strong>plusieurs verbes conjugués</strong> séparés, sans mot subordonnant : chaque partie (proposition) pourrait exister seule. « Les enfants jouent, les mères discutent. »" },
    { t: "regle", x: "Une <strong>phrase complexe</strong> contient une <strong>proposition subordonnée</strong> (introduite par que, qui, quand, si, parce que…) qui ne peut pas exister seule. « Je pense <strong>que tu as raison</strong>. »" },
    { t: "table", head: ["Forme", "Lien entre les propositions", "Exemple"], rows: [
      ["<strong>Juxtaposition</strong>", "une virgule, un point-virgule, deux-points", "« Il pleut, nous restons. »"],
      ["<strong>Coordination</strong>", "une conjonction de coordination : mais, ou, et, donc, or, ni, car", "« Il pleut <strong>donc</strong> nous restons. »"],
      ["<strong>Subordination</strong>", "un mot subordonnant : que, quand, si, parce que, qui…", "« Nous restons <strong>parce qu’</strong>il pleut. »"]
    ] },
    { t: "astuce", x: "Retiens la liste des conjonctions de coordination avec la phrase : « <strong>Mais où et donc or ni car</strong> » !" },
    { t: "p", x: "<strong>Méthode :</strong> ① je compte les verbes conjugués → 1 verbe = phrase simple ; ② je regarde le lien : virgule/conjonction = composée ; mot subordonnant = complexe." }
  ],
  exercices: [
    { type: "qcm", consigne: "Identifie la forme de phrase.", diff: "facile",
      q: "« Le chat dort et le chien veille. »",
      options: ["phrase simple", "phrase composée (coordination)", "phrase complexe", "phrase nominale"], rep: 1,
      expl: "Deux verbes conjugués (dort, veille) reliés par « et » (conjonction de coordination) : phrase composée." },
    { type: "qcm", consigne: "Identifie la forme de phrase.", diff: "",
      q: "« J’espère que tu viendras demain. »",
      options: ["phrase simple", "phrase composée", "phrase complexe (subordination)", "phrase interrogative"], rep: 2,
      expl: "« que tu viendras demain » ne peut pas exister seule : c’est une subordonnée → phrase complexe." },
    { type: "qcm", consigne: "Trouve la phrase simple.", diff: "",
      q: "Laquelle est une phrase simple ?",
      options: ["Elle chante et il danse.", "Elle chante parce qu’elle est contente.", "Elle chante une belle chanson.", "Elle chante, il écoute."], rep: 2,
      expl: "« Elle chante une belle chanson » : un seul verbe conjugué → phrase simple." },
    { type: "gap", consigne: "Complète avec une conjonction de coordination qui convient.", diff: "",
      q: "Je voulais sortir, [[mais]] il pleut. · Écoute bien, [[et|puis]] tu comprendras. · Elle n’aime ni le café [[ni]] le thé.",
      expl: "Les conjonctions de coordination : mais, ou, et, donc, or, ni, car." },
    { type: "ouverte", consigne: "À toi !", diff: "difficile",
      q: "Écris une phrase complexe avec « parce que », puis transforme-la en phrase composée avec « donc ».",
      modele: "Exemple : Complexe : « J’ai pris mon parapluie parce qu’il pleuvait. » Composée : « Il pleuvait, donc j’ai pris mon parapluie. »",
      criteres: ["Une phrase complexe avec parce que", "Une phrase composée avec donc", "Le sens reste le même"] }
  ]
},
{
  id: "g02", domaine: "grammaire", tag: "G2", icone: "❗",
  titre: "Les types de phrases",
  objectifs: ["reconnaître les 4 types de phrases", "employer chaque type à bon escient"],
  cours: [
    { t: "table", head: ["Type", "But", "Ponctuation", "Exemple"], rows: [
      ["déclarative", "informer, raconter", "point .", "« Il fait beau. »"],
      ["interrogative", "poser une question", "?", "« Tu viens ? »"],
      ["exclamative", "exprimer une émotion", "!", "« Quelle chance ! »"],
      ["impérative (injonctive)", "donner un ordre, un conseil", ". ou !", "« Viens ici ! »"]
    ] },
    { t: "attention", x: "Une phrase exclamative peut contenir un verbe à un autre mode : « Qu’il est beau ! » Ne pas confondre le type (exclamatif) et la ponctuation seule : « Quelle journée ! » (sans verbe = phrase nominale exclamative)." },
    { t: "astuce", x: "Pour l’interrogation, trois formes : intonation (Tu viens ?), inversion (Viens-tu ?), est-ce que (Est-ce que tu viens ?)." }
  ],
  exercices: [
    { type: "qcm", consigne: "Quel type de phrase ?", diff: "facile",
      q: "« Ne descends jamais seul dans la grotte. »",
      options: ["déclarative", "impérative", "exclamative", "interrogative"], rep: 1,
      expl: "Verbe à l’impératif (ne descends), interdiction : phrase impérative (injonctive)." },
    { type: "gap", consigne: "Transforme en question avec inversion.", diff: "",
      q: "Tu viens avec nous. → [[Viens-tu|Venez-vous|Venez vous|Viens tu]] avec nous ?",
      expl: "L’inversion du sujet : « Viens-tu avec nous ? » (le tiret relie verbe et pronom)." },
    { type: "qcm", consigne: "Identifie le type.", diff: "",
      q: "« Combien de trésors cachent ces ruines ! »",
      options: ["interrogative", "exclamative", "déclarative", "impérative"], rep: 1,
      expl: "« Combien… ! » exprime l’admiration avec un point d’exclamation : exclamative." },
    { type: "gap", consigne: "Écris le type qui convient selon le but.", diff: "",
      q: "Informer : phrase [[déclarative|declarative|déclaratif|declaratif]]. · Émouvoir : phrase [[exclamative|exclamatif]]. · Ordonner : phrase [[impérative|imperative|injonctive|injonctif]].",
      expl: "Déclarative = informer ; exclamative = émotion ; impérative = ordre." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris les 4 types de phrases sur le même thème (la mer) : une déclarative, une interrogative, une exclamative, une impérative.",
      modele: "Exemple : « La mer scintille. (déclarative) Veux-tu nager avec moi ? (interrogative) Comme l’eau est claire ! (exclamative) Ne nage pas trop loin ! (impérative) »",
      criteres: ["Les 4 types présents", "Ponctuation correcte pour chaque type", "Thème respecté"] }
  ]
},
{
  id: "g03", domaine: "grammaire", tag: "G3", icone: "🏷️",
  titre: "Le nom et le groupe nominal",
  objectifs: ["identifier le nom et ses classes", "construire le groupe nominal avec ses expansions"],
  cours: [
    { t: "h", x: "Le nom" },
    { t: "regle", x: "Le <strong>nom</strong> désigne un être, une chose, une idée. On le reconnaît souvent grâce à un déterminant devant : <strong>un/une/le/la/les/des/mon/ce…</strong> Un nom est <strong>commun</strong> (fille, ville) ou <strong>propre</strong> (Hidaya, Beyrouth, Méditerranée)." },
    { t: "h", x: "Le groupe nominal (GN)" },
    { t: "regle", x: "Le <strong>groupe nominal</strong> = déterminant + nom + expansions possibles : adjectifs, complément du nom (de…), subordonnée relative (qui…)." },
    { t: "exemple", x: "« <strong>Une [magnifique] maison [de pierre] [qui surplombe la mer]</strong> » → GN minimal : « une maison » ; expansions : magnifique (adjectif), de pierre (complément du nom), qui surplombe la mer (relative)." },
    { t: "astuce", x: "Pour trouver le cœur du GN, supprime les expansions : « une magnifique maison de pierre » → « une maison ». Le mot resté (maison) est le nom noyau !" }
  ],
  exercices: [
    { type: "qcm", consigne: "Trouve le nom noyau du groupe nominal.", diff: "facile",
      q: "« un petit chat endormi près de la cheminée »",
      options: ["un petit", "chat", "endormi", "cheminée"], rep: 1,
      expl: "On supprime les expansions : il reste « un chat ». Le nom noyau est « chat »." },
    { type: "qcm", consigne: "Nom propre ou nom commun ?", diff: "facile",
      q: "« La cèdre du Liban pousse dans la montagne. » (cèdre / Liban / montagne)",
      options: ["tous communs", "tous propres", "cèdre et montagne communs ; Liban propre", "cèdre propre"], rep: 2,
      expl: "« Cèdre » et « montagne » désignent une espèce/un lieu quelconque (communs) ; « Liban » désigne un pays précis avec majuscule (propre)." },
    { type: "gap", consigne: "Complète le GN avec une expansion logique.", diff: "",
      q: "Une robe [[de soie|en soie|rouge|magnifique]]. · Des livres [[qui parlent d’aventures|d’aventures|intéressants|qui racontent des histoires]].",
      expl: "On peut enrichir un GN avec un adjectif, un complément du nom (de…) ou une relative." },
    { type: "qcm", consigne: "Compte les expansions.", diff: "difficile",
      q: "« Les vieilles maisons de la médina, qui ont mille ans, résistent. » — Le GN « Les vieilles maisons de la médina, qui ont mille ans » contient…",
      options: ["aucune expansion", "2 expansions", "3 expansions", "4 expansions"], rep: 2,
      expl: "Trois expansions : vieilles (adjectif), de la médina (complément du nom), qui ont mille ans (relative)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Construis un groupe nominal de 6 mots minimum sur le thème « la montagne », avec un adjectif et une relative.",
      modele: "Exemple : « les hautes montagnes libanaises qui touchent les nuages » ou « une vieille cabane en bois qui sent la pomme ».",
      criteres: ["Déterminant + nom présents", "Au moins un adjectif", "Une relative"] }
  ]
},
{
  id: "g04", domaine: "grammaire", tag: "G4", icone: "🔧",
  titre: "Les classes grammaticales : verbe, pronom, mot invariable",
  objectifs: ["reconnaître le verbe, les pronoms et les mots invariables", "conjuguer mentalement pour trouver le verbe"],
  cours: [
    { t: "h", x: "Le verbe" },
    { t: "regle", x: "Le <strong>verbe</strong> exprime une action ou un état et <strong>change avec le temps et la personne</strong> (je joue, nous jouions, il jouera). C’est le cœur de la phrase !" },
    { t: "h", x: "Le pronom" },
    { t: "regle", x: "Le <strong>pronom</strong> remplace un nom pour éviter la répétition : je, tu, il, elle, nous, vous, ils (personnels) ; qui, que, dont (relatifs) ; on, chacun, certains (indéfinis) ; celui, celle (démonstratifs)." },
    { t: "h", x: "Les mots invariables" },
    { t: "regle", x: "Les <strong>mots invariables</strong> ne changent jamais : <strong>adverbes</strong> (très, doucement, hier), <strong>prépositions</strong> (à, de, dans, sur, chez), <strong>conjonctions</strong> (et, mais, que, car), <strong>interjections</strong> (hélas ! bravo !)." },
    { t: "table", head: ["Classe", "Test pour la reconnaître"], rows: [
      ["verbe", "je peux la conjuguer (je…, nous…), il change avec le temps"],
      ["pronom", "il REMPLACE un nom déjà dit"],
      ["adverbe", "il précise un verbe/adjectif, invariable"],
      ["préposition", "elle relie (à, de, en, sous, avant…)"],
      ["conjonction", "elle relie des phrases (et, que, car…)"]
    ] },
    { t: "astuce", x: "Pour trouver le verbe : change le sujet (il/ils ou je/nous). Le mot qui change de forme est le verbe !" }
  ],
  exercices: [
    { type: "qcm", consigne: "Quelle classe grammaticale ?", diff: "facile",
      q: "« rapidement » dans « Il court rapidement. »",
      options: ["adjectif", "verbe", "adverbe", "préposition"], rep: 2,
      expl: "« Rapidement » précise comment il court, invariable : adverbe de manière." },
    { type: "qcm", consigne: "Quelle classe grammaticale ?", diff: "",
      q: "« Ils » dans « Ils arrivent. »",
      options: ["déterminant", "pronom personnel", "nom", "adverbe"], rep: 1,
      expl: "« Ils » remplace les personnes dont on parle : pronom personnel sujet." },
    { type: "gap", consigne: "Trouve le verbe et écris-le.", diff: "",
      q: "« Les oiseaux chantent à l’aube. » → [[chantent|Chantent]] · « Nous avions déjà mangé. » → [[avions|Avions]] (l’auxiliaire conjugué)",
      expl: "« Chantent » change avec la personne/le temps : c’est le verbe. Dans « avions mangé », l’auxiliaire « avions » est le verbe conjugué." },
    { type: "gap", consigne: "Préposition, conjonction ou adverbe ?", diff: "",
      q: "« sur la table » → [[préposition|P|p]]. · « Il pleut, donc je reste. » → donc : [[conjonction|C|c]]. · « Il viendra demain. » → demain : [[adverbe|A|a]].",
      expl: "sur = préposition ; donc = conjonction de coordination ; demain = adverbe de temps (invariable)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris une phrase contenant : un verbe, un pronom, un adverbe et une préposition. Souligne (ou indique) chaque classe.",
      modele: "Exemple : « Elle (pronom) marche (verbe) doucement (adverbe) dans (préposition) le parc. »",
      criteres: ["Les 4 classes présentes", "Chaque classe est bien identifiée"] }
  ]
},
{
  id: "g05", domaine: "grammaire", tag: "G5", icone: "👑",
  titre: "Les fonctions : sujet et attribut",
  objectifs: ["identifier le sujet du verbe", "distinguer attribut du sujet et COD"],
  cours: [
    { t: "h", x: "Le sujet" },
    { t: "regle", x: "Le <strong>sujet</strong> fait l’action ou est dans l’état exprimé par le verbe. Test : <strong>c’est… qui</strong> + verbe. « Le vent souffle » → « C’est le vent qui souffle. » Le verbe s’accorde avec le sujet." },
    { t: "h", x: "L’attribut du sujet" },
    { t: "regle", x: "L’<strong>attribut du sujet</strong> suit un verbe d’état (<strong>être, sembler, devenir, paraître, demeurer, rester, avoir l’air</strong>) et caractérise le sujet. Test : je peux remplacer par « être »." },
    { t: "exemple", x: "« Cette fleur est magnifique. » → magnifique = attribut (remplaçable par « être »). « Elle cueille une rose. » → une rose = COD (pas de verbe d’état)." },
    { t: "attention", x: "Verbe d’État ≠ verbe d’Action ! Après être, sembler, devenir… on cherche un attribut. Après cueillir, manger, regarder… on cherche un COD." }
  ],
  exercices: [
    { type: "gap", consigne: "Trouve le sujet.", diff: "facile",
      q: "« Les feuilles mortes tombent. » → sujet : [[Les feuilles mortes|les feuilles mortes|feuilles|les feuilles]]. · « Tout le monde attend le résultat. » → sujet : [[Tout le monde|tout le monde|On|on]]",
      expl: "Test « c’est… qui » : « C’est les feuilles mortes qui tombent » → sujet = les feuilles mortes." },
    { type: "qcm", consigne: "Attribut ou COD ?", diff: "",
      q: "« Cette fille deviendra une grande scientifique. »",
      options: ["COD", "attribut du sujet", "sujet", "complément circonstanciel"], rep: 1,
      expl: "« Devenir » est un verbe d’état : « une grande scientifique » est l’attribut du sujet." },
    { type: "gap", consigne: "Trouve l’attribut.", diff: "",
      q: "« La mer semble calme ce matin. » → attribut : [[calme|Calme]]. · « Ils restent amis malgré tout. » → attribut : [[amis|Amis]]",
      expl: "Après « sembler » et « rester » (verbes d’état), les mots qui caractérisent le sujet sont des attributs." },
    { type: "qcm", consigne: "Choisis la bonne analyse.", diff: "difficile",
      q: "« La patronne paraît fatiguée. » — « fatiguée » est…",
      options: ["COD", "épithète de « patronne »", "attribut du sujet", "sujet"], rep: 2,
      expl: "Après « paraître » (verbe d’état), « fatiguée » caractérise le sujet « la patronne » : attribut du sujet (et il s’accorde !)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 2 phrases : une avec un sujet composé (deux noms) + verbe d’action, une avec un attribut du sujet.",
      modele: "Exemple : « Léa et Nour préparent le gâteau. (sujet composé) Le gâteau est délicieux. (attribut : délicieux) »",
      criteres: ["Phrase 1 : sujet de 2 noms + verbe d’action", "Phrase 2 : attribut après verbe d’état"] }
  ]
},
{
  id: "g06", domaine: "grammaire", tag: "G6", icone: "🎁",
  titre: "Les fonctions : COD, COI et complément du nom",
  objectifs: ["identifier le COD et le COI", "reconnaître le complément du nom"],
  cours: [
    { t: "h", x: "Le COD" },
    { t: "regle", x: "Le <strong>COD</strong> (complément d’objet direct) répond à « <strong>qui ?</strong> ou <strong>quoi ?</strong> » après un verbe d’action, sans préposition. « Elle cueille <strong>une rose</strong>. » (elle cueille quoi ?)" },
    { t: "h", x: "Le COI" },
    { t: "regle", x: "Le <strong>COI</strong> (complément d’objet indirect) répond aussi à « qui ? quoi ? » mais avec une <strong>préposition</strong> (à, de). « Elle parle <strong>à sa voisine</strong>. » « Il rêve <strong>d’aventures</strong>. »" },
    { t: "h", x: "Le complément du nom" },
    { t: "regle", x: "Le <strong>complément du nom</strong> suit un nom (souvent introduit par <strong>de</strong>) et le précise. « une boîte <strong>de chocolats</strong> », « le toit <strong>de la maison</strong> »." },
    { t: "astuce", x: "Pour distinguer : le COD est « consommé » par l’action (je cueille quoi ?) ; le complément du nom fait partie du groupe nominal (une boîte de quoi ?). Supprime le verbe : si le groupe reste lié au nom → complément du nom." }
  ],
  exercices: [
    { type: "gap", consigne: "Trouve le COD.", diff: "facile",
      q: "« Karim lit un roman policier. » → COD : [[un roman policier|roman policier|le roman policier]]. · « Nous rangeons la classe. » → COD : [[la classe|classe]]",
      expl: "« Lire quoi ? » → un roman policier. « Ranger quoi ? » → la classe." },
    { type: "gap", consigne: "Trouve le COI.", diff: "",
      q: "« Elle téléphone à sa cousine. » → COI : [[à sa cousine|sa cousine]]. · « Nous parlons de nos projets. » → COI : [[de nos projets|nos projets]]",
      expl: "« Téléphoner À qui ? » → à sa cousine (COI avec préposition). « Parler DE quoi ? » → de nos projets." },
    { type: "qcm", consigne: "COD, COI ou complément du nom ?", diff: "difficile",
      q: "« Il achète un panier de pommes rouges. »",
      options: ["un panier = COI", "de pommes rouges = complément du nom", "rouges = COD", "achète = COD"], rep: 1,
      expl: "« De pommes rouges » précise le nom « panier » (un panier de quoi ?) : complément du nom. COD = « un panier de pommes rouges » (il achète quoi ?)." },
    { type: "qcm", consigne: "Choisis la bonne analyse.", diff: "",
      q: "« Le maître félicite ses élèves. » — « ses élèves » est…",
      options: ["le sujet", "le COD", "le COI", "un complément du nom"], rep: 1,
      expl: "« Féliciter qui ? » → ses élèves, sans préposition : COD." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 2 phrases : une avec un COD et une avec un COI (verbes utiles : téléphoner à, parler de, penser à / lire, préparer, regarder).",
      modele: "Exemple : « Elle prépare un gâteau. (COD) Il pense à ses vacances. (COI) »",
      criteres: ["Un COD clair (sans préposition)", "Un COI clair (avec à ou de)"] }
  ]
},
{
  id: "g07", domaine: "grammaire", tag: "G7", icone: "🕐",
  titre: "Les compléments circonstanciels",
  objectifs: ["identifier CC de temps, lieu, manière, cause, but", "déplacer le CC pour le reconnaître"],
  cours: [
    { t: "regle", x: "Les <strong>compléments circonstanciels (CC)</strong> précisent les <strong>circconstances</strong> de l’action. Ils sont <strong>supprimables</strong> et <strong>déplaçables</strong> !" },
    { t: "table", head: ["CC", "Question", "Exemple"], rows: [
      ["de temps", "quand ? combien de temps ?", "« Il revient <strong>demain</strong>. »"],
      ["de lieu", "où ?", "« Ils jouent <strong>dans le parc</strong>. »"],
      ["de manière", "comment ?", "« Elle parle <strong>doucement</strong>. »"],
      ["de cause", "pourquoi ? (raison réelle)", "« Il pleure <strong>de joie</strong>. »"],
      ["de but", "pourquoi ? (objectif visé)", "« Il court <strong>pour gagner</strong>. »"],
      ["de moyen", "avec quoi ?", "« Elle écrit <strong>à la plume</strong>. »"]
    ] },
    { t: "astuce", x: "Test du déplacement : « <strong>Demain</strong>, il revient. » = « Il revient <strong>demain</strong>. » → déplaçable donc CC. Le COD, lui, ne peut pas partir : « Elle cueille une rose » ≠ « Une rose, elle cueille » (bizarre !)." }
  ],
  exercices: [
    { type: "gap", consigne: "Quelle nature de CC ?", diff: "facile",
      q: "« Nous arrivons <strong>à midi</strong>. » → CC de [[temps|T|t]]. · « Elle chante <strong>avec passion</strong>. » → CC de [[manière|M|m]]. · « Il voyage <strong>en train</strong>. » → CC de [[moyen|M|m|maniere]].",
      expl: "à midi = quand (temps) ; avec passion = comment (manière) ; en train = avec quoi (moyen)." },
    { type: "qcm", consigne: "Repère le CC.", diff: "",
      q: "« Le chat dort tranquillement sur le canapé. »",
      options: ["le chat", "dort", "tranquillement et sur le canapé", "aucun CC"], rep: 2,
      expl: "« Tranquillement » (manière) et « sur le canapé » (lieu) sont supprimables et déplaçables : deux CC." },
    { type: "qcm", consigne: "Cause ou but ?", diff: "difficile",
      q: "« Elle étudie pour réussir son examen. »",
      options: ["CC de cause", "CC de but", "CC de temps", "COD"], rep: 1,
      expl: "« Pour réussir » = objectif visé (ce qu’elle veut obtenir) → CC de but. La cause serait la raison réelle (« parce qu’elle veut réussir »)." },
    { type: "gap", consigne: "Ajoute le CC demandé.", diff: "",
      q: "CC de lieu : Ils jouent [[dans le jardin|dans la cour|au parc|dehors]]. · CC de temps : Nous partons [[demain|ce soir|à 8 h|samedi]].",
      expl: "CC de lieu = où ? ; CC de temps = quand ? (toute réponse logique est acceptée)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris une phrase avec un CC de temps ET un CC de lieu, puis réécris-la en déplaçant les CC au début.",
      modele: "Exemple : « Je révise mes leçons dans ma chambre le soir. » → « Le soir, dans ma chambre, je révise mes leçons. »",
      criteres: ["CC de temps + CC de lieu présents", "Phrase réécrite avec CC en tête", "La phrase reste correcte"] }
  ]
},
{
  id: "g08", domaine: "grammaire", tag: "G8", icone: "🎀",
  titre: "Épithète, apposition, relatives : enrichir le nom",
  objectifs: ["distinguer épithète, apposition et relative", "ponctuer correctement"],
  cours: [
    { t: "regle", x: "L’<strong>épithète</strong> est un adjectif qui colle au nom (ou en est séparé par des virgules). « une <strong>longue</strong> route » ; « La route, <strong>longue et silencieuse</strong>, serpente. »" },
    { t: "regle", x: "L’<strong>apposition</strong> est un <strong>groupe nominal</strong> (pas un adjectif !) qui complète un autre nom, détaché par des virgules. « Tripoli, <strong>la capitale du Nord</strong>, est animée. »" },
    { t: "regle", x: "La <strong>relative</strong> est une proposition introduite par qui, que, dont, où. « La maison <strong>que nous avons visitée</strong> est ancienne. »" },
    { t: "table", head: ["Fonction", "Nature", "Exemple"], rows: [
      ["épithète", "adjectif", "un <strong>curieux</strong> enfant"],
      ["épithète séparée", "adjectif(s) entre virgules", "L’enfant, <strong>curieux et bruyant</strong>, explore."],
      ["apposition", "groupe nominal entre virgules", "L’enfant, <strong>le plus jeune de la famille</strong>, explore."],
      ["relative", "proposition (qui, que, dont, où)", "L’enfant <strong>qui explore</strong> le grenier est curieux."]
    ] },
    { t: "attention", x: "Accord de la relative avec « que » : le participe passé s’accorde avec l’antécédent ! « La maison <strong>que</strong> nous avons visité<strong>e</strong>. » (on a visité quoi ? la maison → féminin)." }
  ],
  exercices: [
    { type: "qcm", consigne: "Épithète ou apposition ?", diff: "",
      q: "« Le hibou, oiseau de nuit, chasse au crépuscule. »",
      options: ["épithète", "apposition", "relative", "attribut"], rep: 1,
      expl: "« Oiseau de nuit » est un groupe nominal entre virgules qui complète « le hibou » : apposition." },
    { type: "gap", consigne: "Accorde la relative.", diff: "difficile",
      q: "Les fleurs que j’ai [[cueillies]] sentent bon. · La chanson que nous avons [[écoutée]] est douce.",
      expl: "Avec « que », le participe s’accorde avec l’antécédent : les fleurs cueillies (fém. pl.), la chanson écoutée (fém. sing.)." },
    { type: "qcm", consigne: "Trouve la relative.", diff: "facile",
      q: "« La valise qui était restée sur le quai a été retrouvée. »",
      options: ["La valise", "qui était restée sur le quai", "a été retrouvée", "sur le quai"], rep: 1,
      expl: "« Qui était restée sur le quai » commence par le pronom relatif « qui » : c’est la subordonnée relative." },
    { type: "ordre", consigne: "Reconstruis la phrase.", diff: "",
      q: "Mets en ordre :",
      mots: ["Les enfants,", "fatigués mais heureux,", "regagnaient la maison."],
      expl: "Sujet + épithètes séparées entre virgules + verbe + complément." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Décris un personnage en 2 phrases : une avec une épithète séparée, une avec une apposition.",
      modele: "Exemple : « La vieille dame, lente et souriante, traversait la place. Ma tante Rose, la meilleure cuisinière du village, la salua. »",
      criteres: ["Une épithète séparée (adjectifs entre virgules)", "Une apposition (GN entre virgules)"] }
  ]
},
{
  id: "g09", domaine: "grammaire", tag: "G9", icone: "🔗",
  titre: "La subordonnée relative",
  objectifs: ["employer qui, que, dont, où", "repérer la valeur descriptive"],
  cours: [
    { t: "regle", x: "Le pronom relatif remplace l’<strong>antécédent</strong> et relie la relative au nom :" },
    { t: "table", head: ["Pronom", "Rôle dans la relative", "Exemple"], rows: [
      ["<strong>qui</strong>", "sujet", "La fille <strong>qui</strong> chante est ma sœur."],
      ["<strong>que</strong> (qu’)", "complément direct", "La chanson <strong>que</strong> tu aimes est ancienne."],
      ["<strong>dont</strong>", "complément avec « de »", "Le livre <strong>dont</strong> je parle est passionnant."],
      ["<strong>où</strong>", "lieu ou temps", "Le village <strong>où</strong> nous allons est isolé."]
    ] },
    { t: "astuce", x: "Qui ou que ? Je regarde ce qui suit : après <strong>qui</strong> → directement un verbe (qui chante) ; après <strong>que</strong> → un sujet (que TU aimes). <strong>Dont</strong> remplace « de + quelque chose » (parler de → dont)." },
    { t: "regle", x: "La relative entre <strong>virgules</strong> est souvent <strong>descriptive</strong> : elle ajoute un détail sur le nom. « Le héros, qui avait tout perdu, souriait encore. »" }
  ],
  exercices: [
    { type: "gap", strict: true, consigne: "Complète avec qui, que, dont ou où.", diff: "facile",
      q: "Le pain [[que|qu’|que]] elle achète sent bon. · La boulangerie [[où]] nous entrons est réputée. · Le boulanger [[qui]]sourit aime son métier. · La tarte [[dont]] je rêve est aux pommes.",
      expl: "que + sujet (elle achète) ; où = lieu ; qui + verbe (sourit) ; dont = rêver DE." },
    { type: "qcm", consigne: "Qui ou que ?", diff: "",
      q: "« Les romans ______ ce libraire recommande sont excellents. »",
      options: ["qui", "que", "dont", "où"], rep: 1,
      expl: "Après le trou : « ce libraire recommande » — il y a un sujet → il faut « que »." },
    { type: "qcm", consigne: "Valeur de la relative ?", diff: "",
      q: "« Le professeur, qui enseigne depuis vingt ans, connaît tous ses élèves. »",
      options: ["relative indispensable", "relative descriptive (entre virgules)", "phrase simple", "relative interrogative"], rep: 1,
      expl: "Entre virgules, la relative ajoute une description du professeur : valeur descriptive." },
    { type: "gap", consigne: "Relie les deux phrases avec un pronom relatif.", diff: "",
      q: "J’ai lu un livre. Tu m’as parlé de ce livre. → J’ai lu le livre [[dont|duquel]] tu m’as parlé. · Voici la grotte. Nous avons visité cette grotte. → Voici la grotte [[que|qu’|que]]nous avons visitée.",
      expl: "Parler DE → dont. Visiter (sans préposition) → que (+ accord : visitée)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 2 phrases avec des relatives : une avec « dont », une avec « où ».",
      modele: "Exemple : « Le parc dont je t’avais parlé est ouvert. Nous irons samedi à la cascade où nagent les truites. »",
      criteres: ["Une relative avec dont", "Une relative avec où", "Phrases correctes et complètes"] }
  ]
},
{
  id: "g10", domaine: "grammaire", tag: "G10", icone: "🗣️",
  titre: "Les registres de langue",
  objectifs: ["reconnaître registre familier, courant, soutenu", "adapter son langage à la situation"],
  cours: [
    { t: "regle", x: "Le <strong>registre</strong> (ou niveau) de langue dépend de la situation et de l’interlocuteur. Trois niveaux : <strong>familier</strong> (amis, famille), <strong>courant</strong> (école, vie quotidienne), <strong>soutenu</strong> (écrit soigné, cérémonies, littérature)." },
    { t: "table", head: ["Familier", "Courant", "Soutenu"], rows: [
      ["la bouffe", "la nourriture", "les mets, l’alimentation"],
      ["bosser", "travailler", "travailler, œuvrer"],
      ["le prof", "le professeur", "l’enseignant"],
      ["une caisse (voiture)", "une voiture", "un véhicule"],
      ["il est crevé", "il est fatigué", "il est épuisé, exténué"],
      ["trop cool !", "très bien !", "excellent ! remarquable !"]
    ] },
    { t: "regle", x: "Le registre soutenu utilise aussi : des phrases plus longues et complètes, des mots de liaison élégants (néanmoins, en effet, cependant), l’inversion dans les questions (« Où allez-vous ? »), et jamais de mots tronqués (télé → télévision, pub → publicité)." },
    { t: "attention", x: "Dans tes devoirs, écris en registre <strong>courant</strong> au minimum ! Les mots familiers (chouette, gamin, drôlement bien…) coûtent des points." }
  ],
  exercices: [
    { type: "qcm", consigne: "Quel registre ?", diff: "facile",
      q: "« Passe le sel, stp, j’ai trop la flemme de me lever. »",
      options: ["soutenu", "courant", "familier", "poétique"], rep: 2,
      expl: "Mots tronqués (stp), expressions familières (avoir la flemme, trop) : registre familier." },
    { type: "gap", consigne: "Traduis en registre courant.", diff: "",
      q: "« La bouffe est prête » → [[La nourriture est prête|Le repas est prêt|Le repas est servi|La nourriture est servie]]. · « Je bosse ce soir » → [[Je travaille ce soir]].",
      expl: "La bouffe → la nourriture/le repas ; bosser → travailler (registre courant)." },
    { type: "qcm", consigne: "Choisis la version soutenue.", diff: "",
      q: "« Il est crevé. » →",
      options: ["Il est fatigué.", "Il est épuisé.", "Il est mort.", "Il dort."], rep: 1,
      expl: "« Épuisé » est l’équivalent soutenu de « crevé ». (« Fatigué » est courant.)" },
    { type: "qcm", consigne: "Dans quelle situation ?", diff: "",
      q: "Tu écris une lettre à la directrice de l’école pour demander un document. Quel registre ?",
      options: ["familier", "courant", "soutenu", "le plus drôle possible"], rep: 2,
      expl: "Une lettre officielle exige le registre soutenu : formules de politesse, vocabulaire soigné (je vous prie d’agréer…)." },
    { type: "ouverte", consigne: "À toi !", diff: "difficile",
      q: "Réécris cette phrase familier en registre soutenu : « Ce film est trop bien, on a trop rigolé, faut y retourner ! »",
      modele: "Exemple : « Ce film est remarquable ; nous avons beaucoup ri. Il faudrait y retourner. » ou « Ce film est excellent : nous avons été nombreux à rire de bon cœur. Nous devrions le revoir. »",
      criteres: ["Aucun mot familier restant", "Phrases complètes et soignées", "Le sens est conservé"] }
  ]
}
);
