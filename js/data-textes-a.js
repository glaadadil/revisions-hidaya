/* ============================================================
   Base de données — TEXTES & EXPRESSION — Unités 1 à 10
   Contenus pédagogiques originaux, alignés sur le programme
   « Le Français au Collège » 5e / EB7 (Kédémos Education).
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
/* ================= UNITÉ 1 ================= */
{
  id: "u01", domaine: "textes", unite: 1, theme: "Thème 1 · Familles…",
  texte: "Les deux cousins", icone: "🏠",
  titre: "Le paragraphe · Phrases impératives et exclamatives",
  objectifs: [
    "reconnaître et écrire un paragraphe bien construit",
    "reconnaître les phrases impératives et exclamatives",
    "écrire un texte injonctif (notice, recette, règles du jeu)"
  ],
  cours: [
    { t: "h", x: "1. Le paragraphe" },
    { t: "p", x: "Un <strong>paragraphe</strong> est une partie d’un texte qui développe <strong>une seule idée principale</strong>. Il commence par un <strong>retrait</strong> (on décale la première ligne) et il se termine par un point à la ligne." },
    { t: "regle", x: "Un bon paragraphe respecte 3 règles : <strong>l’unité</strong> (une seule idée principale), <strong>l’ordre</strong> (les phrases se suivent logiquement) et <strong>la liaison</strong> (on relie les phrases avec des mots comme : d’abord, ensuite, enfin, parce que…)." },
    { t: "exemple", x: "« Mon grand-père est le pilier de notre famille. <strong>D’abord</strong>, c’est lui qui nous raconte des histoires le soir. <strong>Ensuite</strong>, il nous aide à faire nos devoirs. <strong>Enfin</strong>, il prépare le meilleur café de la maison ! » → Une seule idée (le grand-père pilier de la famille), des mots de liaison, un ordre clair." },
    { t: "astuce", x: "Méthode en 4 étapes pour écrire un paragraphe : ① Je choisis <strong>l’idée principale</strong>. ② Je liste <strong>2 ou 3 détails</strong> qui l’expliquent. ③ Je les ordonne avec des mots de liaison. ④ Je relis : chaque phrase parle bien de la même idée ?" },
    { t: "h", x: "2. La phrase impérative et la phrase exclamative" },
    { t: "p", x: "Il existe quatre types de phrases : la phrase <strong>déclarative</strong> (elle raconte, elle informe : « Il pleure. »), la phrase <strong>interrogative</strong> (elle pose une question : « Où vas-tu ? »), la phrase <strong>impérative</strong> et la phrase <strong>exclamative</strong>." },
    { t: "regle", x: "La phrase <strong>impérative</strong> donne un ordre, un conseil ou une interdiction. Le verbe est à l’<strong>impératif</strong> et il n’y a pas de sujet devant le verbe. Elle finit par un point ou par un point d’exclamation. → « <strong>Range</strong> ta chambre. » « <strong>Écoutez</strong> bien ! » « Ne <strong>sors</strong> pas. »" },
    { t: "regle", x: "La phrase <strong>exclamative</strong> exprime une émotion forte (joie, colère, surprise…). Elle finit par <strong>!</strong> et contient souvent « quel », « que », « comme », « combien ». → « <strong>Quelle</strong> bonne nouvelle ! » « <strong>Comme</strong> tu as grandi ! »" },
    { t: "attention", x: "Une phrase qui finit par « ! » n’est pas toujours impérative ! « Quelle belle maison ! » exprime une émotion → exclamative. « Ferme la porte ! » donne un ordre → impérative. Demande-toi : <strong>est-ce que la phrase donne un ordre ou exprime un sentiment ?</strong>" },
    { t: "h", x: "3. Le texte injonctif" },
    { t: "p", x: "Le <strong>texte injonctif</strong> donne des instructions, des consignes à suivre : recette de cuisine, notice de montage, règles d’un jeu, consignes de sécurité. Il utilise surtout des <strong>phrases impératives</strong> (ou l’infinitif)." },
    { t: "exemple", x: "« <strong>Mélangez</strong> la farine et les œufs. <strong>Ajoutez</strong> le lait. <strong>Ne pas</strong> laisser la pâte reposer plus d’une heure. <strong>Servez</strong> froid. »" },
    { t: "astuce", x: "Pour reconnaître un texte injonctif, je cherche : des verbes à l’impératif ou à l’infinitif, des mots d’ordre (d’abord, puis, enfin), et une consigne à suivre." }
  ],
  exercices: [
    { type: "qcm", consigne: "Identifie le type de chaque phrase.", diff: "facile",
      q: "« Prends ton parapluie, il pleut ! » — La première partie « Prends ton parapluie » est une phrase…",
      options: ["déclarative", "impérative", "exclamative", "interrogative"], rep: 1,
      expl: "« Prends ton parapluie » donne un ordre, le verbe « prends » est à l’impératif et il n’y a pas de sujet : c’est une phrase impérative." },
    { type: "qcm", consigne: "Identifie le type de phrase.", diff: "facile",
      q: "« Combien de fois dois-je te le répéter ! »",
      options: ["interrogative", "déclarative", "exclamative", "injonctive"], rep: 2,
      expl: "Malgré le mot « combien » et le point d’interrogation apparent, la phrase exprime une émotion (l’énervement) et finit par « ! » : c’est une phrase exclamative." },
    { type: "gap", consigne: "Mets ces phrases à l’impératif (comme un ordre gentil).", diff: "",
      q: "Tu écris une lettre. → [[Écris|Ecris]] une lettre ! &nbsp;·&nbsp; Vous fermez la porte. → [[Fermez]] la porte ! &nbsp;·&nbsp; Tu ne parles pas en classe. → Ne [[parle]] pas en classe !",
      expl: "À l’impératif présent : « tu écris » → « écris » ; « vous fermez » → « fermez » ; « tu ne parles pas » → « ne parle pas » (on enlève le sujet, on garde la négation)." },
    { type: "ordre", consigne: "Remets ce paragraphe dans le bon ordre (clique les phrases une par une).", diff: "",
      q: "Reconstruis le paragraphe de Yasmine :",
      mots: ["Ma sœur aime énormément la lecture.", "D’abord, elle lit chaque soir avant de dormir.", "Ensuite, elle raconte ses histoires préférées à toute la famille.", "Enfin, elle rêve d’écrire elle-même un roman."],
      expl: "L’idée principale vient d’abord, puis les détails suivent l’ordre chronologique avec les liaisons « d’abord, ensuite, enfin »." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "difficile",
      q: "Écris un <strong>paragraphe de 4 phrases</strong> sur ton activité préférée. Utilise au moins deux mots de liaison (d’abord, ensuite, enfin, parce que…).",
      modele: "Exemple de réponse : « J’adore le dessin. D’abord, je prépare mes crayons de couleur. Ensuite, je choisis ce que je vais représenter, souvent un paysage. Enfin, je montre mon dessin à ma famille, qui l’adore ! »",
      criteres: ["Une seule idée principale", "Au moins 2 mots de liaison", "4 phrases complètes avec des points"] }
  ],
  devoir: {
    titre: "Devoir — Le texte injonctif",
    consigne: "Rédige les <strong>règles d’un jeu</strong> que tu aimes (ou invente un jeu !) en 5 à 8 lignes, sous forme de texte injonctif.",
    etapes: [
      "Donne un titre à ton jeu.",
      "Explique le but du jeu avec une phrase déclarative.",
      "Donne 4 à 6 consignes avec des phrases impératives (Mélange…, Lance…, Ne triche pas…).",
      "Termine par une phrase exclamative pour souhaiter bon jeu !"
    ],
    criteres: ["Au moins 5 phrases impératives", "Des mots d’ordre (d’abord, puis, enfin)", "Une phrase exclamative à la fin", "Une ponctuation soignée"],
    modele: "Exemple : <strong>« La course aux trésors »</strong><br>Le but du jeu est de trouver le trésor caché avant les autres joueurs. D’abord, distribuez les cartes-indices à chaque joueur. Ensuite, lisez le premier indice : il indique un endroit de la maison. Puis, courez vers cet endroit et cherchez la carte suivante. Ne vous disputez pas ! Enfin, le premier joueur qui touche le trésor gagne la partie. Amusez-vous bien !" }
},

/* ================= UNITÉ 2 ================= */
{
  id: "u02", domaine: "textes", unite: 2, theme: "Thème 1 · Familles…",
  texte: "C’est papa qui décide !", icone: "👨‍👩‍👧",
  titre: "Le récit à la 1re personne · Les registres de langue · Le schéma narratif",
  objectifs: [
    "raconter un événement à la 1re personne",
    "choisir le bon registre de langue (familier, courant, soutenu)",
    "connaître les 5 étapes du schéma narratif"
  ],
  cours: [
    { t: "h", x: "1. Le récit à la 1re personne" },
    { t: "p", x: "Raconter à la <strong>1re personne</strong>, c’est raconter en disant « je » ou « nous ». Le narrateur est un personnage de l’histoire : il raconte ce qu’il voit, ce qu’il ressent, ce qu’il pense." },
    { t: "regle", x: "À la 1re personne, on utilise : les pronoms <strong>je, me, moi, nous</strong>, les déterminants <strong>mon, ma, mes, notre</strong>, et on exprime les <strong>sentiments</strong> du narrateur (j’étais content, je tremblais…)." },
    { t: "exemple", x: "« Ce matin-là, <strong>je</strong> suis descendu(e) à la cuisine. <strong>Mon</strong> cœur battait fort : aujourd’hui, <strong>je</strong> allais… non, <strong>j’allais</strong> passer mon examen de natation ! »" },
    { t: "h", x: "2. Les registres de langue" },
    { t: "p", x: "On ne parle pas de la même façon à son meilleur ami et au directeur de l’école ! Le <strong>registre de langue</strong>, c’est le niveau de langue choisi selon la situation." },
    { t: "table", head: ["Registre", "Quand ?", "Exemple"], rows: [
      ["<strong>Familier</strong>", "avec la famille, les amis proches", "« La bouffe est prête, dégage du canapé ! »"],
      ["<strong>Courant</strong>", "dans la vie de tous les jours, à l’école", "« Le repas est prêt, va t’installer ailleurs. »"],
      ["<strong>Soutenu</strong>", "écrit soigné, situations officielles", "« Le repas est servi ; allez vous asseoir ailleurs, je vous prie. »"]
    ] },
    { t: "attention", x: "Le registre familier utilise des mots familiers (bouffe, bosser, chouette, gamin) et des phrases souvent simples ou coupées. À l’école et dans les devoirs, on écrit en registre <strong>courant</strong> au minimum !" },
    { t: "h", x: "3. Le texte narratif : le schéma narratif" },
    { t: "regle", x: "Le <strong>schéma narratif</strong> est la « squelette » de presque toutes les histoires, en 5 étapes :<br>① <strong>Situation initiale</strong> — on présente les personnages et le lieu (imparfait).<br>② <strong>Élément perturbateur</strong> — un événement vient tout changer (passé simple).<br>③ <strong>Péripéties</strong> — les actions, les problèmes.<br>④ <strong>Dénouement</strong> — le problème se résout.<br>⑤ <strong>Situation finale</strong> — on retrouve l’équilibre." },
    { t: "astuce", x: "Pour retenir l’ordre : <strong>S</strong>ituer, <strong>É</strong>tonner, <strong>P</strong>eriple… non ! Retiens plutôt : « <strong>S</strong>amedi <strong>É</strong>mile <strong>P</strong>rend <strong>D</strong>u <strong>S</strong>ucre » → Situation initiale, Élément perturbateur, Péripéties, Dénouement, Situation finale." }
  ],
  exercices: [
    { type: "qcm", consigne: "Choisis la bonne réponse.", diff: "facile",
      q: "Dans un récit à la 1re personne, on trouve forcément…",
      options: ["des mots comme « il » et « elle »", "les pronoms « je », « me », « moi »", "un ordre à suivre", "des questions sans réponse"], rep: 1,
      expl: "Le récit à la 1re personne utilise les pronoms je, me, moi, nous : le narrateur fait partie de l’histoire." },
    { type: "qcm", consigne: "Quel registre de langue ?", diff: "",
      q: "« Cette salope de voiture… » Non ! Choisis la version <strong>soutenue</strong> de « Cette voiture est nulle » :",
      options: ["Cette voiture est nulle.", "Cette voiture est de piètre qualité.", "Cette caisse est pourrie."], rep: 1,
      expl: "« De piètre qualité » appartient au registre soutenu ; « nulle » est courant ; « caisse » et « pourrie » sont familiers." },
    { type: "gap", consigne: "Complète avec les mots du registre courant.", diff: "",
      q: "Registre familier → courant : « la bouffe » → [[la nourriture|nourriture]] ; « bosser » → [[travailler]] ; « le prof » → [[le professeur|le professeur|la professeure|professeur]] ; « chouette » (adjectif) → [[agréable|sympa|bien]]",
      expl: "Chaque mot familier a un équivalent courant : la bouffe → la nourriture ; bosser → travailler ; le prof → le professeur ; chouette → agréable." },
    { type: "ordre", consigne: "Remets les 5 étapes du schéma narratif dans l’ordre.", diff: "",
      q: "Étape par étape :",
      mots: ["Situation initiale", "Élément perturbateur", "Péripéties", "Dénouement", "Situation finale"],
      expl: "Situation initiale → Élément perturbateur → Péripéties → Dénouement → Situation finale." },
    { type: "ouverte", consigne: "À toi de jouer !", diff: "difficile",
      q: "Réécris ce récit familier en registre courant : « Hier, j’ai croisé le nouveau. Il est trop cool, on a trop déliré ensemble, chuis contente. »",
      modele: "Exemple : « Hier, j’ai rencontré le nouvel élève. Il est très sympathique : nous avons beaucoup ri ensemble. Je suis contente de le connaître. »",
      criteres: ["Plus de mots familiers (trop, chuis, délirer…)", "Des phrases complètes", "Le sens reste le même"] }
  ],
  devoir: {
    titre: "Devoir — Raconter à la 1re personne",
    consigne: "Raconte à la 1re personne un événement qui t’a <strong>surprise</strong> (une bonne ou une mauvaise surprise !), en 10 à 12 lignes.",
    etapes: [
      "Situation initiale : présente le lieu, le moment, ton humeur (imparfait).",
      "Élément perturbateur : que s’est-il passé ? (passé simple ou passé composé)",
      "Péripéties : raconte les actions et tes émotions.",
      "Situation finale : comment cela s’est-il terminé ? Que ressens-tu ?"
    ],
    criteres: ["Récit à la 1re personne (je)", "Le schéma narratif en 5 étapes", "Imparfait pour la description, passé composé/passé simple pour les actions", "Des émotions exprimées"],
    modele: "Exemple : « Samedi dernier, je me levai tranquillement… mais ce jour-là ne fut pas comme les autres. (Situation initiale + élément perturbateur) En descendant, j’aperçus un énorme paquet à mon nom sur la table. Mon cœur se mit à battre très fort. Qui avait pu m’offrir ce cadeau ? (Péripéties) Je l’ouvris avec précaution : c’était le vélo dont je rêvais depuis un an ! (Dénouement) Mes parents, souriants, me souhaitèrent bonne route. Quelle merveilleuse journée ! (Situation finale) »" }
},

/* ================= UNITÉ 3 ================= */
{
  id: "u03", domaine: "textes", unite: 3, theme: "Thème 1 · Familles…",
  texte: "Premiers succès d’un enfant d’immigrés", icone: "🌟",
  titre: "Le récit à la 3e personne · Imparfait de durée et passé simple",
  objectifs: [
    "raconter à la 3e personne",
    "choisir entre imparfait et passé simple",
    "rédiger une introduction de récit"
  ],
  cours: [
    { t: "h", x: "1. Le récit à la 3e personne" },
    { t: "p", x: "Raconter à la <strong>3e personne</strong>, c’est raconter l’histoire de quelqu’un d’autre avec « il », « elle », « ils ». Le narrateur <strong>ne fait pas partie</strong> de l’histoire : il la regarde de l’extérieur, comme un caméra." },
    { t: "regle", x: "À la 3e personne, on utilise : les pronoms <strong>il, elle, ils, elles, on</strong>, les déterminants <strong>son, sa, ses, leur</strong>. On peut décrire ce que les personnages pensent et ressentent." },
    { t: "exemple", x: "« <strong>Elle</strong> ouvrit la porte lentement. <strong>Son</strong> frère dormait encore. <strong>Ils</strong> avaient toute la journée devant eux. »" },
    { t: "h", x: "2. Imparfait ou passé simple ?" },
    { t: "table", head: ["L’imparfait", "Le passé simple"], rows: [
      ["description dans le passé", "action qui avance l’histoire"],
      ["action longue ou répétée (durée, habitude)", "action courte, qui se produit une fois"],
      ["arrière-plan", "premier plan"],
      ["« Il <strong>pleuvait</strong>. Elle <strong>révisait</strong> ses leçons. »", "« Soudain, elle <strong>entendit</strong> un bruit. Elle <strong>ferma</strong> son cahier. »"]
    ] },
    { t: "regle", x: "L’<strong>imparfait</strong> peint la toile de fond (décor, habitudes, sentiments durables). Le <strong>passé simple</strong> fait avancer le film : c’est le temps des <strong>actions principales</strong> d’un récit au passé." },
    { t: "astuce", x: "Test rapide : je peux remplacer par « était en train de » ? → imparfait. Je peux mettre « soudain » devant ? → passé simple !" },
    { t: "h", x: "3. Rédiger une introduction de récit" },
    { t: "p", x: "L’<strong>introduction</strong> (situation initiale) répond aux questions : <strong>Qui ?</strong> (les personnages) <strong>Où ?</strong> (le lieu) <strong>Quand ?</strong> (le moment) <strong>Comment ?</strong> (l’ambiance, l’humeur). Elle est surtout à l’<strong>imparfait</strong>." },
    { t: "exemple", x: "« Cet été-là, dans le petit village de montagne, Lina, dix ans, passait ses journées chez sa grand-mère. Les journées étaient calmes et douces. Rien ne laissait prévoir ce qui allait arriver… » → Qui : Lina. Où : un village de montagne. Quand : cet été-là. Ambiance : calme (et un indice de suspense !)." }
  ],
  exercices: [
    { type: "qcm", consigne: "Imparfait ou passé simple ?", diff: "facile",
      q: "« Quand je suis entrée, ma sœur _____ ses devoirs. »",
      options: ["faisait (imparfait)", "fit (passé simple)", "fait", "fera"], rep: 0,
      expl: "L’action de « faire ses devoirs » est en cours (durée) quand j’entre : c’est l’arrière-plan → imparfait." },
    { type: "gap", consigne: "Mets les verbes au temps qui convient (imparfait ou passé simple).", diff: "",
      q: "Le soleil [[brillait]] et les oiseaux [[chantaient]]. Soudain, Nour [[entendit]] un cri. Elle [[courut]] vers la maison.",
      expl: "Décor → imparfait (brillait, chantaient). Actions ponctuelles qui font avancer l’histoire → passé simple (entendit, courut)." },
    { type: "qcm", consigne: "Choisis la 3e personne.", diff: "facile",
      q: "Quelle phrase est écrite à la 3e personne ?",
      options: ["Je visitais le musée avec ma classe.", "Nous étions très excités.", "Il découvrit une pièce secrète.", "Vous avez bien travaillé."], rep: 2,
      expl: "« Il découvrit » : le narrateur raconte l’histoire d’un autre personnage → 3e personne." },
    { type: "ordre", consigne: "Construis une introduction correcte.", diff: "",
      q: "Remets les éléments dans l’ordre : qui → où → quand → ambiance :",
      mots: ["Omar", "dans la cour de l’école", "un matin d’octobre", "l’ambiance était joyeuse"],
      expl: "L’introduction présente : Qui (Omar) — Où (dans la cour de l’école) — Quand (un matin d’octobre) — Comment (l’ambiance était joyeuse)." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "difficile",
      q: "Rédige une <strong>introduction de récit à la 3e personne</strong> (3 à 4 phrases) : une fille retrouve son chat perdu. Utilise l’imparfait.",
      modele: "Exemple : « Depuis une semaine, Maya cherchait son chat Félix dans tout le quartier. Ce soir-là, le ciel était gris et les rues désertes. Maya rentrait, le cœur lourd, quand soudain… un miaulement résonna près du vieux mur. »",
      criteres: ["Qui ? Où ? Quand ? répondus", "3e personne (elle)", "Imparfait pour le décor", "Une touche de suspense acceptée !"] }
  ],
  devoir: {
    titre: "Devoir — Un premier succès",
    consigne: "Écris un récit à la <strong>3e personne</strong> (12 à 15 lignes) qui raconte le <strong>premier succès</strong> d’un enfant (sport, musique, école, courage…).",
    etapes: [
      "Introduction : présente le personnage, le lieu, le moment (imparfait).",
      "Élément perturbateur : le défi à relever.",
      "Péripéties : les efforts, les difficultés, puis la réussite (passé simple).",
      "Situation finale : la joie du succès, l’entourage qui félicite."
    ],
    criteres: ["3e personne (il/elle)", "Imparfait (décor) + passé simple (actions)", "Schéma narratif complet", "Vocabulaire des émotions (fierté, joie, courage)"],
    modele: "Exemple : « Karim, neuf ans, n’osait jamais parler devant la classe. Chaque fois qu’on l’interrogeait, ses joues rougissaient et sa voix tremblait. (Introduction) Un jour, la maîtresse annonça un concours de poésie. Karim décida de relever le défi. (Élément perturbateur) Il répéta chaque soir devant son miroir. Le jour du concours, il monta sur scène, les jambes tremblantes, et récita son poème sans une erreur. Le public applaudit longuement. (Péripéties + dénouement) Karim remporta le premier prix. Depuis ce jour, il croit en lui. (Situation finale) »" }
},

/* ================= UNITÉ 4 ================= */
{
  id: "u04", domaine: "textes", unite: 4, theme: "Thème 2 · Rencontres",
  texte: "Cosette", icone: "🕯️",
  titre: "L’antithèse · Les adverbes de manière · Le style direct",
  objectifs: [
    "reconnaître et employer l’antithèse",
    "utiliser les adverbes de manière",
    "passer du style direct au style indirect"
  ],
  cours: [
    { t: "h", x: "1. L’antithèse" },
    { t: "p", x: "L’<strong>antithèse</strong> consiste à rapprocher deux idées <strong>contraires</strong> pour créer un effet fort : le jour et la nuit, la richesse et la pauvreté, la joie et la tristesse…" },
    { t: "regle", x: "L’antithèse met en relation des mots de <strong>sens opposé</strong> : grand/petit, aimer/haïr, lumière/ténèbres, rire/pleurer…" },
    { t: "exemple", x: "« Dehors, la ville riait sous le soleil ; dedans, Cosette pleurait dans l’ombre. » → riait/pleurait, soleil/ombre : deux réalités opposées !" },
    { t: "h", x: "2. Les adverbes de manière" },
    { t: "p", x: "Les <strong>adverbes de manière</strong> disent <strong>comment</strong> se fait l’action. Ils complètent souvent un verbe et beaucoup se forment avec <strong>-ment</strong>." },
    { t: "table", head: ["Adjectif", "Adverbe de manière"], rows: [
      ["lent", "lent<strong>ement</strong>"],
      ["doux", "doux<strong>cement</strong>"],
      ["attentif", "attentiv<strong>ement</strong>"],
      ["bon, forte… (irréguliers)", "bien, fortement"],
      ["(sans adjectif)", "vite, mal, ensemble, ainsi"]
    ] },
    { t: "astuce", x: "Formation de l’adverbe en -ment : féminin de l’adjectif + -ment → <strong>lente</strong> → lentement ; <strong>attentive</strong> → attentivement. Exceptions fréquentes à apprendre : bien (bon), mal (mauvais), vite (rapide)." },
    { t: "h", x: "3. Le style direct et le style indirect" },
    { t: "regle", x: "<strong>Style direct</strong> : on rapporte les paroles exactes, entre <strong>guillemets</strong> « », souvent après deux points. → Le maître dit : «<strong> Ouvre ton cahier.</strong>»<br><strong>Style indirect</strong> : on raconte les paroles avec <strong>que</strong>, sans guillemets. → Le maître dit <strong>qu’</strong>il ouvre son cahier." },
    { t: "attention", x: "Au style indirect, les pronoms et les temps changent : « Je suis fatiguée » → Elle dit <strong>qu’elle est</strong> fatiguée. Le verbe déclaratif (dire, demander, répondre) sert de charnière." }
  ],
  exercices: [
    { type: "qcm", consigne: "Repère l’antithèse.", diff: "",
      q: "Quelle phrase contient une antithèse ?",
      options: ["Elle chante joliment.", "Il court vite dans le jardin.", "La salle était glacée, mais son cœur brûlait.", "Nous partons demain matin."], rep: 2,
      expl: "« Glacée / brûlait » : froid contre chaud ! Deux contraires rapprochés dans la même phrase = antithèse." },
    { type: "gap", consigne: "Transforme les adjectifs en adverbes de manière.", diff: "facile",
      q: "lente → [[lentement]] ; douce → [[doucement]] ; attentive → [[attentivement]] ; parfait → [[parfaitement]] ; mauvais → [[mal|mal]]",
      expl: "lentement, doucement, attentivement, parfaitement. Attention aux irréguliers : mauvais → mal, bon → bien, rapide → vite." },
    { type: "qcm", consigne: "Style direct ou indirect ?", diff: "",
      q: "« La vieille femme demanda à l’enfant où il habitait. »",
      options: ["style direct", "style indirect", "phrase impérative", "style poétique"], rep: 1,
      expl: "Pas de guillemets, pas de deux points : la question est rapportée avec « où » → style indirect." },
    { type: "gap", consigne: "Passe au style indirect.", diff: "difficile",
      q: "Le médecin dit : « Vous devez vous reposer. » → Le médecin dit [[que|qu’]]vous devez vous reposer. → correction attendue : Le médecin dit que le patient doit se reposer. Écris la phrase complète transformée : Le médecin dit [[que le patient doit se reposer|que je dois me reposer|qu il doit se reposer|que le malade doit se reposer]].",
      expl: "Au style indirect : on ajoute « que », on enlève les guillemets et on adapte les pronoms (vous → le patient)." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Écris une phrase avec une <strong>antithèse</strong> (par exemple sur une ville la nuit ou deux jumeaux très différents). Souligne (ou écris en gras) les deux mots contraires.",
      modele: "Exemples : « Le vieux monsieur parlait fort, mais ses yeux restaient doux. » / « Sa chambre était en désordre, mais son travail était parfait. » / « La nuit était noire, mais son sourire éclairait la pièce. »",
      criteres: ["Deux mots de sens contraire dans la même phrase", "Une phrase complète et correcte"] }
  ],
  devoir: {
    titre: "Devoir — Dialogue au style direct",
    consigne: "Écris un <strong>petit dialogue</strong> (8 à 10 lignes) entre deux personnages qui se rencontrent pour la première fois. Utilise le style direct.",
    etapes: [
      "Une phrase d’introduction (qui, où, quand).",
      "Fais parler les personnages : verbes déclaratifs variés (dire, demander, répondre, murmurer, s’exclamer).",
      "Utilise les guillemets et les deux points correctement.",
      "Ajoute au moins deux adverbes de manière (doucement, poliment, joyeusement…)."
    ],
    criteres: ["Style direct avec « : » et guillemets « »", "Verbes de parole variés", "Au moins 2 adverbes de manière", "Ponctuation du dialogue soignée"],
    modele: "Exemple : « Dans le couloir du nouveau collège, Maya s’adressa poliment à une fille inconnue : « Bonjour, je m’appelle Maya. Tu es nouvelle ? » « Oui, répondit l’autre timidement, je m’appelle Sara. » « Tu veux qu’on aille ensemble en classe ? demanda Maya joyeusement. » « Volontiers, murmura Sara en souriant doucement. » »" }
},

/* ================= UNITÉ 5 ================= */
{
  id: "u05", domaine: "textes", unite: 5, theme: "Thème 2 · Rencontres",
  texte: "Dans les souterrains du château d’If", icone: "🏰",
  titre: "La comparaison · Les adjectifs épithètes · Le texte informatif",
  objectifs: [
    "reconnaître et écrire des comparaisons",
    "distinguer épithète liée et épithète séparée",
    "comprendre la structure d’un texte informatif"
  ],
  cours: [
    { t: "h", x: "1. La comparaison" },
    { t: "regle", x: "La <strong>comparaison</strong> rapproche deux éléments à partir d’un point commun, avec un <strong>outil de comparaison</strong> : comme, tel, semblable à, ainsi que, plus… que, moins… que, aussi… que." },
    { t: "exemple", x: "« Ses mains étaient <strong>fraîches comme</strong> des feuilles d’automne. » / « Ce corridor est <strong>plus sombre qu’</strong>un puits. » / « Il était <strong>tel</strong> un lion en cage. »" },
    { t: "astuce", x: "Pour analyser une comparaison, je cherche 3 choses : le <strong>comparé</strong> (ce dont on parle), le <strong>comparant</strong> (ce à quoi on le compare) et <strong>l’outil</strong> (comme, tel…)." },
    { t: "h", x: "2. L’adjectif qualificatif : épithète liée et épithète séparée" },
    { t: "regle", x: "L’<strong>adjectif épithète</strong> précise le nom. Il est <strong>lié</strong> quand il colle au nom (sans virgule) : « un <strong>étrange</strong> bruit ». Il est <strong>séparé</strong> quand il est détaché par des virgules : « Le bruit, <strong>sourd et menaçant</strong>, se rapprochait. »" },
    { t: "attention", x: "L’adjectif s’accorde en <strong>genre</strong> et en <strong>nombre</strong> avec le nom : une porte étroite → des portes étroites. L’épithète séparée apporte souvent une information nouvelle, comme une petite phrase descriptive." },
    { t: "h", x: "3. Le texte informatif" },
    { t: "p", x: "Le <strong>texte informatif</strong> donne des informations <strong>réelles et vérifiables</strong> : article, fiche documentaire, reportage. Il répond aux questions Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?" },
    { t: "ul", items: [
      "Un <strong>titre</strong> qui annonce le sujet.",
      "Une <strong>phrase d’attaque</strong> (l’information la plus importante).",
      "Des <strong>détails</strong> classés (dates, chiffres, noms précis).",
      "Un vocabulaire <strong>précis</strong>, des phrases déclaratives, pas d’opinion."
    ] },
    { t: "astuce", x: "Différence clé : le texte narratif raconte une histoire ; le texte informatif explique le réel. Dans un texte informatif, je ne trouve ni « il était une fois », ni sentiments inventés." }
  ],
  exercices: [
    { type: "gap", consigne: "Complète les comparaisons avec un outil de comparaison.", diff: "facile",
      q: "Elle nage [[comme]] un poisson. · Il est plus courageux [[que]] son frère. · Cette grotte semble [[telle]] un palais de glace.",
      expl: "Les outils de comparaison : comme, plus… que, tel (telle), semblable à, aussi… que." },
    { type: "qcm", consigne: "Épithète liée ou séparée ?", diff: "",
      q: "« Le tunnel, étroit et humide, descendait vers la mer. » L’adjectif « étroit et humide » est…",
      options: ["épithète liée", "épithète séparée", "attribut", "sujet"], rep: 1,
      expl: "« Étroit et humide » est encadré par des virgules après le nom : c’est une épithète séparée (déplacée)." },
    { type: "gap", consigne: "Accorde les adjectifs épithètes.", diff: "",
      q: "des portes [[massives]] (massif) · une muraille [[haute]] (haut) · des escaliers [[étroits|etroits]] (étroit) · une oubliette [[profonde]] (profond)",
      expl: "L’adjectif s’accorde avec le nom : portes massives (fém. pl.), muraille haute (fém. sing.), escaliers étroits (masc. pl.), oubliette profonde (fém. sing.)." },
    { type: "qcm", consigne: "Reconnais le texte informatif.", diff: "",
      q: "Quel de ces débuts de texte est celui d’un texte informatif ?",
      options: ["« Il était une fois un château… »", "« Le château d’If, construit en 1524, se dresse sur une île près de Marseille. »", "« Quel château impressionnant ! »", "« Visite le château ! »"], rep: 1,
      expl: "Date, lieu, fait réel et vérifiable, phrase déclarative : c’est la structure typique d’un texte informatif." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "difficile",
      q: "Écris <strong>deux phrases</strong> : une avec une comparaison (outil « comme »), une avec une épithète séparée (entre virgules). Thème libre : un lieu mystérieux.",
      modele: "Exemples : « Le couloir résonnait comme une caverne vide. » / « La porte, immense et rouillée, grinça lentement. »",
      criteres: ["Phrase 1 : comparaison avec un outil de comparaison", "Phrase 2 : adjectif séparé par des virgules", "Ponctuation correcte"] }
  ],
  devoir: {
    titre: "Devoir — Écrire une fiche informative",
    consigne: "Choisis un lieu ou un monument (un château, une grotte, une tour, un site du Liban comme Baalbek ou Jeita…) et rédige une <strong>fiche informative</strong> de 8 à 10 lignes.",
    etapes: [
      "Titre + phrase d’attaque (Quoi ? Où ?).",
      "Ajoute des informations précises : date, dimensions, histoire (tu peux chercher !).",
      "Utilise au moins une comparaison et une épithète séparée.",
      "Relis : aucune opinion, que du vérifiable !"
    ],
    criteres: ["Informations réelles et précises", "Une comparaison", "Une épithète séparée", "Titre et paragraphes clairs"],
    modele: "Exemple : « <strong>La grotte de Jeita, merveille du Liban</strong><br>Située à une vingtaine de kilomètres de Beyrouth, la grotte de Jeita est l’une des plus grandes grottes du monde. Découverte en 1836, elle s’étend sur plusieurs kilomètres. Ses stalactites, gigantesques et scintillants, attirent des visiteurs du monde entier. La galerie inférieure se parcourt en barque, comme un fleuve souterrain. Un vrai palais sculpté par la nature ! »" }
},

/* ================= UNITÉ 6 ================= */
{
  id: "u06", domaine: "textes", unite: 6, theme: "Thème 3 · L’Aventure selon Jules Verne",
  texte: "La femme du rajah", icone: "🐘",
  titre: "L’énumération · La subordonnée relative · Le passage descriptif (1)",
  objectifs: [
    "utiliser l’énumération pour enrichir une description",
    "reconnaître la subordonnée relative et sa valeur descriptive",
    "écrire un début de passage descriptif"
  ],
  cours: [
    { t: "h", x: "1. L’énumération" },
    { t: "regle", x: "L’<strong>énumération</strong> consiste à lister des éléments les uns après les autres (avec des virgules ou des mots de liaison : et, puis, ensuite, puis… ou des deux-points). Elle crée un effet d’<strong>abondance</strong> : richesse, profusion, confusion, surprise…" },
    { t: "exemple", x: "« Le palais était rempli de merveilles : des tapis de soie, des lampes d’or, des cristaux qui chantaient, des fruits rares. » → l’accumulation montre la richesse du palais." },
    { t: "h", x: "2. La subordonnée relative" },
    { t: "regle", x: "Une <strong>subordonnée relative</strong> commence par un <strong>pronom relatif</strong> (qui, que, quoi, dont, où) et complète un nom (l’<strong>antécédent</strong>). Elle est séparée du reste par deux virgules quand elle a une valeur <strong>descriptive</strong> : elle décrit, elle ajoute une information sur le nom." },
    { t: "exemple", x: "« Le rajah, <strong>qui régnait sur une immense vallée</strong>, adorait les chevaux. » → la relative décrit le rajah. « La vallée <strong>où coulait un fleuve d’argent</strong> était paisible. » → la relative décrit la vallée." },
    { t: "attention", x: "Ne confonds pas <strong>qui</strong> (sujet de la relative : L’homme <strong>qui</strong> parle) et <strong>que</strong> (complément : L’homme <strong>que</strong> je regarde). Astuce : après « que », il faut un sujet (je, tu, il, nous…) ; après « qui », il n’y a pas d’autre sujet !" },
    { t: "h", x: "3. Le passage descriptif (1) : observer" },
    { t: "p", x: "Le <strong>passage descriptif</strong> peint un lieu, un objet, une personne, un paysage. Pour bien décrire : <strong>① j’observe</strong> (formes, couleurs, tailles, lumières, sons, odeurs) — <strong>② je classe</strong> mes impressions — <strong>③ j’ordonne</strong> (de gauche à droite, du proche au lointain, du général au détail)." },
    { t: "astuce", x: "Mots outils du descriptif : des adjectifs précis, des comparaisons, des relatives, et des repères d’espace (au fond, à droite, près de, au-dessus de…)." }
  ],
  exercices: [
    { type: "qcm", consigne: "Trouve le pronom relatif.", diff: "facile",
      q: "« La princesse ______ il aimait vivait loin. »",
      options: ["qui", "que", "dont", "où"], rep: 1,
      expl: "« il aimait » a déjà un sujet (il) → il faut « que » (complément : il aimait la princesse)." },
    { type: "gap", strict: true, consigne: "Complète avec qui, que, dont ou où.", diff: "",
      q: "Le palais [[où]] il habitait était immense. · La danseuse [[qui]] apparut portait un voile. · Le bijou [[que|qu’]]elle portait brillait. · Le cheval [[dont]] il rêvait était blanc.",
      expl: "où = lieu ; qui = sujet ; que = complément ; dont = complément introduit par « de » (rêver de quelque chose)." },
    { type: "qcm", consigne: "Valeur de la relative ?", diff: "",
      q: "« Le marchand, qui vendait des épices, souriait. » La relative « qui vendait des épices »…",
      options: ["donne un ordre", "décrit le marchand", "pose une question", "exprime une condition"], rep: 1,
      expl: "Entre virgules, elle ajoute une description du marchand : c’est la valeur descriptive (explicative)." },
    { type: "ordre", consigne: "Reconstruis la phrase.", diff: "",
      q: "Remets les groupes en ordre :",
      mots: ["Le vieux sage,", "qui connaissait mille histoires,", "parlait doucement."],
      expl: "Nom + épithète séparée, puis relative descriptive entre virgules, puis le verbe et son complément." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Décris un marché (ou une salle de classe) en <strong>3 phrases</strong> : utilise une énumération (au moins 4 éléments) et une relative avec « qui ».",
      modele: "Exemple : « Le marché débordait de couleurs : des oranges brillantes, des tapis rouges, des pots de cuivre, des bouquets de menthe. Les vendeurs, qui criaient leurs prix, saluaient chaque client. Au fond, une odeur de pain chaud flottait dans l’air. »",
      criteres: ["Une énumération d’au moins 4 éléments", "Une relative avec « qui »", "3 phrases descriptives"] }
  ],
  devoir: {
    titre: "Devoir — Le passage descriptif",
    consigne: "Écris un <strong>passage descriptif</strong> (10 à 12 lignes) d’un lieu merveilleux ou mystérieux (palais, île, forêt, grotte…).",
    etapes: [
      "Choisis ton lieu et 5 à 6 détails observés (couleurs, sons, odeurs, formes).",
      "Ordre : du général (une phrase d’ensemble) vers le détail.",
      "Utilise : une énumération, deux relatives (qui, que, où, dont), une comparaison.",
      "Termine par une phrase qui donne l’ambiance."
    ],
    criteres: ["Une phrase d’ensemble + détails organisés", "Une énumération", "Deux subordonnées relatives", "Une comparaison", "Repères d’espace (au fond, à droite…)"],
    modele: "Exemple : « Au cœur de la forêt s’ouvrait une clairière mystérieuse. La lumière dorée tombait comme une pluie douce entre les arbres. Des fleurs bleues, qui brillaient dans l’ombre, tapissaient le sol ; des oiseaux inconnus, que personne n’avait jamais nommés, chantaient en cascade. Une rivière claire, dont l’eau glissait sur les pierres polies, serpentait au fond de la clairière. C’était un lieu silencieux et vivant à la fois, un lieu hors du temps. »" }
},

/* ================= UNITÉ 7 ================= */
{
  id: "u07", domaine: "textes", unite: 7, theme: "Thème 3 · L’Aventure selon Jules Verne",
  texte: "Une étrange promenade", icone: "🎈",
  titre: "La métaphore · Les phrases exclamatives (sentiments) · Exprimer l’hypothèse",
  objectifs: [
    "distinguer comparaison et métaphore",
    "employer les phrases exclamatives pour exprimer des sentiments forts",
    "émettre une hypothèse"
  ],
  cours: [
    { t: "h", x: "1. La métaphore" },
    { t: "regle", x: "La <strong>métaphore</strong> est une comparaison <strong>sans outil de comparaison</strong> : on donne à un être ou à une chose un nom qui appartient à autre chose. Elle rapproche directement deux réalités." },
    { t: "exemple", x: "Comparaison : « Ce nuage est <strong>comme</strong> un monstre. » → Métaphore : « Ce <strong>monstre</strong> gris avance sur la ville. » La métaphore est plus forte, plus surprenante, plus poétique." },
    { t: "attention", x: "Dans la métaphore, l’outil de comparaison (comme, tel, semblable à…) a disparu ! « Ses yeux étaient des étoiles » = métaphore ; « Ses yeux étaient comme des étoiles » = comparaison." },
    { t: "h", x: "2. Les phrases exclamatives de sentiments forts" },
    { t: "p", x: "Pour exprimer l’étonnement, la peur, l’admiration, la joie intense, on utilise des phrases exclamatives renforcées :" },
    { t: "ul", items: [
      "<strong>Quel/quelle/quels/quelles</strong> + nom : « Quelle aventure extraordinaire ! »",
      "<strong>Comme / Que</strong> + phrase : « Comme il fait bon ici ! » « Que tu es courageuse ! »",
      "<strong>Combien</strong> : « Combien j’aimerais partir avec vous ! »",
      "une simple exclamation : « Magnifique ! » « Quel bonheur ! »"
    ] },
    { t: "h", x: "3. Émettre une hypothèse" },
    { t: "regle", x: "Émettre une <strong>hypothèse</strong>, c’est imaginer une explication possible. On utilise : <strong>peut-être, sans doute, probablement, je suppose que, il se peut que, si… alors</strong>." },
    { t: "exemple", x: "« L’aéronef a disparu du ciel… <strong>Peut-être</strong> a-t-il été emporté par la tempête. <strong>Si</strong> le vent s’était calmé, l’équipage <strong>aurait</strong> repris sa route. »" }
  ],
  exercices: [
    { type: "qcm", consigne: "Comparaison ou métaphore ?", diff: "",
      q: "« La Machine-tempête bondissait, cheval fou des nuages. »",
      options: ["une comparaison (outil : comme)", "une métaphore", "une phrase interrogative", "une énumération"], rep: 1,
      expl: "« Cheval fou des nuages » : pas d’outil de comparaison, le ballon EST nommé cheval → métaphore." },
    { type: "gap", consigne: "Transforme ces comparaisons en métaphores.", diff: "difficile",
      q: "Cette maison est comme un géant. → Cette [[géante]] veille sur la rue. · Ses cheveux sont comme de l’or. → Ses cheveux sont de [[l’or|l or|l or|l’ or|or]].",
      expl: "On supprime l’outil de comparaison : « comme un géant » → « un géant » ; « comme de l’or » → « de l’or »." },
    { type: "qcm", consigne: "Choisis l’exclamation correcte.", diff: "facile",
      q: "______ merveilleux paysage !",
      options: ["Quel", "Quelle", "Quels", "Combien"], rep: 0,
      expl: "« Paysage » est masculin singulier → « Quel ». (Quelle + fém. : quelle aventure !)" },
    { type: "gap", consigne: "Complète pour exprimer une hypothèse.", diff: "",
      q: "[[Peut-être|Peut être|Sans doute|Probablement]] ont-ils perdu leur chemin. · [[Si|S i]] tu viens, nous partirons tôt.",
      expl: "Les marqueurs d’hypothèse : peut-être, sans doute, probablement, il se peut que, si… alors." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Tu observes un phénomène étrange dans le ciel (une lumière, un nuage bizarre…). Écris <strong>2 phrases</strong> : une exclamative (sentiment fort) et une hypothèse (peut-être, sans doute, si…).",
      modele: "Exemples : « Quelle étrange lumière flotte au-dessus des toits ! Peut-être est-ce une étoile tombée du ciel, ou bien un vaisseau venu d’ailleurs. »",
      criteres: ["Une phrase exclamative correcte (quel/que/comme ou !)", "Une hypothèse avec un marqueur (peut-être, sans doute, si…)"] }
  ],
  devoir: {
    titre: "Devoir — Récit merveilleux",
    consigne: "Écris le début d’un récit d’aventure (10 à 12 lignes) où un personnage vit quelque chose d’extraordinaire.",
    etapes: [
      "Situe l’action (qui, où, quand) à l’imparfait.",
      "Fais surgir l’élément extraordinaire (passé simple ou présent de narration).",
      "Exprime l’émotion avec au moins deux phrases exclamatives.",
      "Termine par une hypothèse du personnage (peut-être…, si…)."
    ],
    criteres: ["Deux phrases exclamatives", "Une hypothèse", "Une métaphore ou une comparaison", "Temps du récit maîtrisés"],
    modele: "Exemple : « Ce soir-là, Lina observait les étoiles depuis le toit de la maison. Soudain, une lumière turquoise traversa le ciel comme un poisson dans l’eau. « Quelle merveille ! » s’écria-t-elle. Son cœur, un oiseau pris au piège, battait à rompre. Peut-être s’agissait-il d’une étoile filante ; ou bien, si elle osait l’avouer, d’un vaisseau venu d’un autre monde. »" }
},

/* ================= UNITÉ 8 ================= */
{
  id: "u08", domaine: "textes", unite: 8, theme: "Thème 4 · Contes…",
  texte: "L’homme à la cervelle d’or", icone: "👑",
  titre: "La périphrase · Imparfait d’habitude et passé simple",
  objectifs: [
    "reconnaître et employer la périphrase",
    "distinguer imparfait d’habitude et passé simple",
    "décrire un lieu (passage descriptif 2)"
  ],
  cours: [
    { t: "h", x: "1. La périphrase" },
    { t: "regle", x: "La <strong>périphrase</strong> remplace un mot par un <strong>groupe de mots</strong> qui le décrit : « le Roi Soleil » = Louis XIV ; « la Ville Lumière » = Paris ; « l’oiseau de nuit » = le hibou." },
    { t: "exemple", x: "« Le génie des mers » (= le capitaine Nemo), « la reine des neiges », « le maître de la maison » (le père), « celle qui répare tout » (la maman !)." },
    { t: "astuce", x: "La périphrase sert à : éviter une répétition, créer une image poétique, mettre en valeur (royauté, respect) ou parfois cacher (euphémisme)." },
    { t: "h", x: "2. Imparfait d’habitude et passé simple" },
    { t: "regle", x: "L’<strong>imparfait d’habitude</strong> exprime une action répétée dans le passé, souvent avec des marqueurs : <strong>chaque jour, tous les matins, d’habitude, souvent, toujours</strong>. Le <strong>passé simple</strong> casse l’habitude : il raconte ce qui s’est passé <strong>une fois</strong>." },
    { t: "exemple", x: "« Chaque soir, le vieux roi <strong>comptait</strong> ses pièces d’or. Mais une nuit, un voleur <strong>s’introduisit</strong> dans le palais. » → comptait = habitude ; s’introduisit = événement unique." },
    { t: "h", x: "3. Le passage descriptif (2) : les adjectifs de qualité" },
    { t: "p", x: "Pour peindre un lieu ou un personnage, choisis des adjectifs <strong>précis</strong> plutôt que des adjectifs passe-partout. Remplace : grand → immense, colossal ; joli → éblouissant ; bizarre → insolite ; triste → morose." },
    { t: "table", head: ["Adjectif passe-partout", "Adjectifs précis"], rows: [
      ["grand", "immense, gigantesque, vaste, colossale"],
      ["joli", "ravissant, éblouissant, splendide"],
      ["effrayant", "redoutable, terrifiant, sinistre"],
      ["content", "ravi, enchanté, aux anges"]
    ] }
  ],
  exercices: [
    { type: "qcm", consigne: "Repère la périphrase.", diff: "",
      q: "Quelle expression est une périphrase de « le lion » ?",
      options: ["un animal féroce", "le roi des animaux", "un grand chat", "Simba"], rep: 1,
      expl: "« Le roi des animaux » : groupe de mots qui remplace « le lion » en le mettant en valeur → périphrase (classique)." },
    { type: "gap", consigne: "Imparfait d’habitude ou passé simple ? Conjugué les verbes.", diff: "",
      q: "Tous les matins, la grand-mère [[préparait|preparait]] du café. Un jour, elle [[découvrit]] une lettre étrange. D’habitude, les enfants [[jouaient]] dans la cour ; ce jour-là, ils [[restèrent]] silencieux.",
      expl: "« Tous les matins », « d’habitude » → imparfait d’habitude (préparait, jouaient). « Un jour », « ce jour-là » → événements uniques → passé simple (découvrit, restèrent)." },
    { type: "qcm", consigne: "Choisis l’adjectif le plus précis.", diff: "facile",
      q: "Le palais du sultan était ______.",
      options: ["grand", "très grand", "colossal", "pas petit"], rep: 2,
      expl: "« Colossal » est précis et imagé : il vaut mieux que « grand » ou « très grand » dans un texte descriptif." },
    { type: "qcm", consigne: "Trouve l’intrus.", diff: "",
      q: "Quelle expression n’est PAS une périphrase ?",
      options: ["la Ville Lumière (Paris)", "le Stagirite (Aristote)", "une voiture rouge", "l’étoile du berger (Vénus)"], rep: 2,
      expl: "« Une voiture rouge » est un simple groupe nominal avec adjectif, pas une périphrase (qui remplace un nom propre ou un nom par une expression descriptive)." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Invente une périphrase pour : ta mère (positive), le soleil, ton école. Puis écris une phrase à l’imparfait d’habitude avec « chaque soir ».",
      modele: "Exemples de périphrases : « la lumière de nos jours » (le soleil), « le grand vaisseau du savoir » (l’école), « la fée du foyer » (la mère). Phrase d’habitude : « Chaque soir, la fée du foyer préparait un délicieux repas. »",
      criteres: ["3 périphrases inventées", "1 phrase à l’imparfait avec un marqueur d’habitude"] }
  ],
  devoir: {
    titre: "Devoir — Le conte et l’habitude rompue",
    consigne: "Écris le début d’un <strong>conte</strong> (10 à 12 lignes) : un personnage a une habitude paisible… qu’un événement vient briser !",
    etapes: [
      "Ouvre ton conte (« Il était une fois… ») et installe l’habitude : 3 actions à l’imparfait avec « chaque jour ».",
      "Décris le décor avec deux adjectifs précis.",
      "Fais surgir l’événement au passé simple (« Mais un matin… »).",
      "Utilise une périphrase pour nommer ton héros ou son ennemi."
    ],
    criteres: ["Imparfait d’habitude + passé simple bien opposés", "Deux adjectifs précis", "Une périphrase", "Ton de conte (formules merveilleuses)"],
    modele: "Exemple : « Il était une fois, au fond d’une vallée bleue, un vieux tisserand que les enfants appelaient le roi du fil. Chaque matin, il montait à son atelier. Chaque midi, il mangeait une pomme dorée. Chaque soir, il chantait à la lune. Mais une nuit, un poids de la montagne — un géant furieux — s’abattit sur le village… »" }
},

/* ================= UNITÉ 9 ================= */
{
  id: "u09", domaine: "textes", unite: 9, theme: "Thème 4 · Contes…",
  texte: "Prisonnier", icone: "🐋",
  titre: "La personnification · Les phrases nominales",
  objectifs: [
    "reconnaître la personnification",
    "employer les phrases nominales",
    "commencer un conte avec les procédés du merveilleux"
  ],
  cours: [
    { t: "h", x: "1. La personnification" },
    { t: "regle", x: "La <strong>personnification</strong> donne à une chose, un animal ou une idée des comportements <strong>humains</strong> : le vent murmure, la mer se fâche, la lune veille, la peur grimpe…" },
    { t: "exemple", x: "« La mer, en colère, frappait la coque du navire. » / « Le silence envahit la salle. » / « L’espoir lui souriait. »" },
    { t: "attention", x: "Personnification ≠ comparaison : « La mer comme un monstre » = comparaison ; « Le monstre mugissait » (parlant de la mer, sans comparaison) = personnification." },
    { t: "h", x: "2. Les phrases nominales" },
    { t: "regle", x: "Une <strong>phrase nominale</strong> n’a <strong>pas de verbe conjugué</strong> : elle est formée d’un nom ou d’un groupe nominal (+ éventuellement des adjectifs). Elle crée un effet de tableau, de vitesse ou de tension." },
    { t: "exemple", x: "« Nuit noire. Mer déchaînée. Aucune étoile au ciel. » / « Le cri d’un oiseau. Puis le silence. » → des tableaux immédiats, comme des images !" },
    { t: "astuce", x: "Dans un récit, les phrases nominales servent souvent à décrire une scène d’un seul coup d’œil, ou à accélérer le rythme d’une action." },
    { t: "h", x: "3. Les procédés du conte" },
    { t: "ul", items: [
      "Des <strong>formules d’ouverture et de clôture</strong> : « Il était une fois… », « … et ils vécurent heureux. »",
      "Des <strong>personnages types</strong> : héros courageux, méchant, fée, animal qui parle.",
      "Des <strong>lieux merveilleux</strong> : forêts interdites, châteaux enchantés.",
      "Des <strong>épreuves</strong> et un aide magique."
    ] }
  ],
  exercices: [
    { type: "qcm", consigne: "Repère la personnification.", diff: "",
      q: "Quelle phrase contient une personnification ?",
      options: ["La vague était haute comme une maison.", "La vague avala le petit bateau.", "La vague est haute.", "Quelle vague immense !"], rep: 1,
      expl: "« Avala » est un comportement humain/animal donné à la vague → personnification. (« Comme une maison » serait une comparaison.)" },
    { type: "gap", consigne: "Transforme en phrase nominale (sans verbe conjugué).", diff: "",
      q: "La nuit était sombre. → Une nuit [[sombre|noire|sans lune]]. · Le vent soufflait fort. → Un vent [[terrible|violent|fort|fou]].",
      expl: "On garde le nom + ses adjectifs, on supprime le verbe : « Une nuit sombre. » « Un vent violent. »" },
    { type: "qcm", consigne: "Phrase nominale ou verbale ?", diff: "facile",
      q: "« Le camp des pirates. Des torches partout. Personne. »",
      options: ["phrase verbale", "phrases nominales", "phrase interrogative", "dialogue"], rep: 1,
      expl: "Aucun verbe conjugué : ce sont trois phrases nominales qui décrivent la scène comme un tableau." },
    { type: "gap", consigne: "Personnifie ! Complète avec un verbe qui convient.", diff: "",
      q: "Le soleil [[caressait|embrassait|regardait|souriait|veillait]] la mer. · La peur [[grimpa|monta|s’empara|s empara]] de lui. · Les vieux murs [[se souviennent|gardent|racontent|écoutent]] les histoires du quartier.",
      expl: "On donne aux choses des verbes humains : caresser, sourire, veiller, grimper, se souvenir…" },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "",
      q: "Décris un orage en <strong>3 phrases nominales</strong> puis <strong>1 phrase avec personnification</strong>.",
      modele: "Exemple : « Un ciel de plomb. Des éclairs déchirants. Puis le déluge. La tempête rugissait de colère sur le village endormi. »",
      criteres: ["3 phrases nominales (pas de verbe conjugué)", "1 personnification claire"] }
  ],
  devoir: {
    titre: "Devoir — Écrire l’ouverture d’un conte",
    consigne: "Écris l’<strong>ouverture d’un conte</strong> (10 à 12 lignes) mettant en scène un animal ou un élément de la nature personnifié.",
    etapes: [
      "Formule d’ouverture du conte (« Il était une fois… »).",
      "Installe le décor avec 2 phrases nominales.",
      "Présente ton personnage personnifié (la lune, un vieux chêne, le fleuve…).",
      "Lance l’intrigue : une épreuve ou un mystère."
    ],
    criteres: ["Formules du conte", "Deux phrases nominales", "Une personnification développée", "Une intrigue lancée"],
    modele: "Exemple : « Il était une fois, au bord d’un fleuve tranquille, un village endormi. Maisons basses. Ruelles silencieuses. Le vieux fleuve, lui, racontait chaque nuit aux saules toutes les histoires du monde. Mais un matin, le fleuve perdit la parole : son eau s’était figée, muette comme une pierre. Que s’était-il passé dans la montagne ? »" }
},

/* ================= UNITÉ 10 ================= */
{
  id: "u10", domaine: "textes", unite: 10, theme: "Thème 5 · Passé et traditions…",
  texte: "À la claire fontaine", icone: "⛲",
  titre: "L’onomatopée · Le présent de vérité générale",
  objectifs: [
    "reconnaître et employer les onomatopées",
    "comprendre le présent de vérité générale",
    "distinguer les valeurs du présent"
  ],
  cours: [
    { t: "h", x: "1. L’onomatopée" },
    { t: "regle", x: "Une <strong>onomatopée</strong> est un mot qui imite un <strong>son</strong> ou un bruit : boum, crac, glou-glou, tic-tac, Cocorico, splash, vroum." },
    { t: "exemple", x: "« Crac ! La branche céda. Splash ! Il tomba dans la fontaine. » Les onomatopées rendent le récit vivant et bruyant !" },
    { t: "astuce", x: "En bande dessinée, les onomatopées sont partout : BOUM, ZAP, TAP TAP… À l’écrit, elles s’emploient surtout dans les récits vivants, les chansons et les BD." },
    { t: "h", x: "2. Le présent de vérité générale" },
    { t: "regle", x: "Le <strong>présent de vérité générale</strong> exprime un fait <strong>toujours vrai</strong>, une règle, une loi, un proverbe. Il est utilisé dans les sciences, les définitions et les fables." },
    { t: "exemple", x: "« L’eau bout à 100 degrés. » « La Terre tourne autour du Soleil. » « On n’est jamais si bien servi que par soi-même. » — ces phrases resteront vraies demain et dans cent ans !" },
    { t: "table", head: ["Valeur du présent", "Indice", "Exemple"], rows: [
      ["<strong>d’énonciation</strong>", "je parle maintenant", "« Je te parle, tu m’écoutes. »"],
      ["<strong>d’habitude</strong>", "chaque jour, souvent", "« Je me lève à 7 h. »"],
      ["<strong>de vérité générale</strong>", "fait toujours vrai", "« La glace flotte sur l’eau. »"],
      ["<strong>historique</strong>", "récit au passé remplacé", "« En 1836, un explorateur découvre la grotte. »"]
    ] },
    { t: "h", x: "3. La fable" },
    { t: "p", x: "La <strong>fable</strong> est un petit récit (souvent en vers) avec des animaux personnifiés, qui se termine par une <strong>moralité</strong> : une leçon de vie. Elle utilise le présent de vérité générale pour la morale." }
  ],
  exercices: [
    { type: "gap", consigne: "Invente ou retrouve l’onomatopée qui convient.", diff: "facile",
      q: "La porte grince : [[crac|Crac]] ! · L’eau coule : [[glou-glou|glou glou|Glou-glou]]. · Une explosion : [[boum|Boum|boom|Boom]]. · Le coq chante : [[cocorico|Cocorico]].",
      expl: "Les onomatopées imitent les bruits : crac, glou-glou, boum, cocorico…" },
    { type: "qcm", consigne: "Quelle valeur du présent ?", diff: "",
      q: "« Le fer rouille quand il reste humide. »",
      options: ["présent d’énonciation", "présent d’habitude", "présent de vérité générale", "présent historique"], rep: 2,
      expl: "C’est un fait toujours vrai, une règle générale : le présent exprime ici une vérité générale." },
    { type: "qcm", consigne: "Quelle valeur du présent ?", diff: "",
      q: "« Je suis fatiguée, je te rappelle dans cinq minutes. »",
      options: ["présent de vérité générale", "présent d’énonciation", "présent historique", "présent d’habitude"], rep: 1,
      expl: "La personne parle au moment même où elle s’exprime : présent d’énonciation." },
    { type: "qcm", consigne: "Reconnais la fable.", diff: "",
      q: "Un texte avec des animaux qui parlent et une moralité à la fin est…",
      options: ["un texte informatif", "une fable", "une notice", "un journal"], rep: 1,
      expl: "La fable : récit court, animaux personnifiés, leçon (moralité) — souvent en vers." },
    { type: "ouverte", consigne: "À toi d’écrire !", diff: "difficile",
      q: "Écris <strong>une moralité</strong> (une leçon de vie) au présent de vérité générale, puis une phrase avec une onomatopée.",
      modele: "Exemples de moralités : « Qui sème le partage récolte des amis. » / « La patience finit toujours par récompenser celui qui l’attend. » Onomatopée : « Plic-plic… la pluie tambourinait sur les volets. »",
      criteres: ["Moralité au présent de vérité générale (toujours vraie)", "Une onomatopée bien placée"] }
  ],
  devoir: {
    titre: "Devoir — Écrire une mini-fable",
    consigne: "Écris une <strong>fable</strong> de 10 à 12 lignes avec un animal personnifié et une moralité.",
    etapes: [
      "Choisis deux animaux (un fort, un petit malin, par exemple).",
      "Raconte leur rencontre et une épreuve (imparfait/passé simple ou présent).",
      "Ajoute une ou deux onomatopées.",
      "Termine par la moralité au présent de vérité générale."
    ],
    criteres: ["Deux animaux personnifiés", "Un récit structuré avec une épreuve", "Une ou deux onomatopées", "Une moralité au présent de vérité générale"],
    modele: "Exemple : « Une fourmi diligente et un pigeon discutaient au bord d’une rivière. — Emporte-moi de l’autre côté, supplia la fourmi. — Chante d’abord une belle chanson ! se moqua le pigeon. La fourmi chanta si fort qu’un chat accourut… et poursuivit le pigeon jusqu’à ce qu’il retombe, essoufflé, au même endroit. Plic ! La fourmi, elle, avait déjà traversé sur une feuille. Moralité : le petit qui se débrouille dépasse le fort qui se moque. »" }
}
);
