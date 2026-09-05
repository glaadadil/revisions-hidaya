/* ============================================================
   Base de données — CONJUGAISON (8 leçons)
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
{
  id: "c01", domaine: "conjugaison", tag: "C1", icone: "☀️",
  titre: "Le présent de l’indicatif",
  objectifs: ["conjuguer au présent les trois groupes", "distinguer les valeurs du présent"],
  cours: [
    { t: "h", x: "Les terminaisons" },
    { t: "table", head: ["Sujet", "1er groupe (parler)", "2e groupe (finir)", "être", "avoir", "aller"], rows: [
      ["je", "parl<strong>e</strong>", "fin<strong>is</strong>", "suis", "ai", "vais"],
      ["tu", "parl<strong>es</strong>", "fin<strong>is</strong>", "es", "as", "vas"],
      ["il/elle", "parl<strong>e</strong>", "fin<strong>it</strong>", "est", "a", "va"],
      ["nous", "parl<strong>ons</strong>", "fin<strong>issons</strong>", "sommes", "avons", "allons"],
      ["vous", "parl<strong>ez</strong>", "fin<strong>issez</strong>", "êtes", "avez", "allez"],
      ["ils/elles", "parl<strong>ent</strong>", "fin<strong>issent</strong>", "sont", "ont", "vont"]
    ] },
    { t: "attention", x: "Verbes du 3e groupe à bien connaître : <strong>faire</strong> (je fais, nous faisons), <strong>prendre</strong> (je prends, ils prennent), <strong>pouvoir</strong> (je peux), <strong>vouloir</strong> (je veux, nous voulons), <strong>venir</strong> (je viens, ils viennent), <strong>dire</strong> (nous disons !), <strong>partir</strong> (je pars, nous partons)." },
    { t: "regle", x: "<strong>Valeurs du présent :</strong> d’énonciation (maintenant : « je lis »), d’habitude (« je lis chaque soir »), de vérité générale (« la terre tourne »), historique (« en 1836, on découvre… »), futur proche (« je pars dans cinq minutes »)." }
  ],
  exercices: [
    { type: "gap", consigne: "Conjugue au présent.", diff: "facile",
      q: "Nous [[finissons]] nos devoirs. · Tu [[parles]] trop bas. · Elles [[vont]] à la piscine.",
      expl: "finir (2e groupe) → nous finissons ; parler → tu parles ; aller → elles vont." },
    { type: "qcm", consigne: "Choisis la bonne forme.", diff: "",
      q: "« Ils _____ une grande maison. » (prendre)",
      options: ["prennent", "prendent", "prenons", "prennent tous"], rep: 0,
      expl: "prendre → ils prennent (double n avant -ent !)." },
    { type: "gap", consigne: "Quelle valeur du présent ?", diff: "",
      q: "« Je te téléphone à l’instant. » → présent d’[[énonciation]]. · « Le samedi, je nage. » → présent d’[[habitude]].",
      expl: "À l’instant = maintenant (énonciation) ; le samedi = répétition (habitude)." },
    { type: "qcm", consigne: "Trouve l’erreur.", diff: "difficile",
      q: "Quelle phrase contient une faute ?",
      options: ["Nous disons la vérité.", "Vous faites du bruit.", "Ils vois la mer.", "Je veux partir."], rep: 2,
      expl: "« Ils voient la mer » : voir → ils voient. (faute dans « Ils vois »)" },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris une phrase au présent de vérité générale et une phrase au présent d’habitude sur le thème de l’eau.",
      modele: "Exemple : « L’eau bout à cent degrés. (vérité générale) Chaque matin, je bois un grand verre d’eau. (habitude) »",
      criteres: ["Un fait toujours vrai au présent", "Une habitude avec marqueur de fréquence"] }
  ]
},
{
  id: "c02", domaine: "conjugaison", tag: "C2", icone: "🌫️",
  titre: "L’imparfait",
  objectifs: ["conjuguer à l’imparfait", "employer l’imparfait (description, habitude, durée)"],
  cours: [
    { t: "regle", x: "L’<strong>imparfait</strong> se forme sur le radical du <strong>nous</strong> au présent + terminaisons : <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong>." },
    { t: "table", head: ["Sujet", "parler", "finir", "être", "avoir", "faire"], rows: [
      ["je", "parlais", "finissais", "étais", "avais", "faisais"],
      ["tu", "parlais", "finissais", "étais", "avais", "faisais"],
      ["il/elle", "parlait", "finissait", "était", "avait", "faisait"],
      ["nous", "parlions", "finissions", "étions", "avions", "faisions"],
      ["vous", "parliez", "finissiez", "étiez", "aviez", "faisiez"],
      ["ils/elles", "parlaient", "finissaient", "étaient", "avaient", "faisaient"]
    ] },
    { t: "attention", x: "Seule exception : <strong>être</strong> → ét- (pas de « nous sommes » visible : ét-ais, ét-ions). Verbes en -ger : nous mang<strong>e</strong>ions (on garde le e pour le son !)." },
    { t: "regle", x: "<strong>Emplois :</strong> la description (« Le ciel était gris »), l’habitude (« Tous les étés, nous partions »), la durée (« Il pleuvait depuis une heure »)." }
  ],
  exercices: [
    { type: "gap", consigne: "Conjugue à l’imparfait.", diff: "facile",
      q: "Quand j’étais petite, je [[jouais]] dans le jardin. · Nous [[étions]] très amis. · Ils [[avaient]] toujours faim à midi.",
      expl: "Radical du nous au présent + terminaisons d’imparfait : jouais, étions, avaient." },
    { type: "qcm", consigne: "Imparfait ou présent ?", diff: "",
      q: "« Autrefois, les gens _____ à la fontaine. » (aller)",
      options: ["vont", "allaient", "vas", "iront"], rep: 1,
      expl: "« Autrefois » = passé + habitude → imparfait : allaient." },
    { type: "gap", consigne: "Conjugue (attention aux verbes en -ger !).", diff: "difficile",
      q: "Nous [[mangeions]] des pommes. · Vous [[commenciez]] à comprendre.",
      expl: "Avec -ger : nous mangeions, vous commenciez (on garde le « e » après le g devant a/o)." },
    { type: "qcm", consigne: "Emploi de l’imparfait.", diff: "",
      q: "Dans « La lune éclairait la mer endormie », l’imparfait sert à…",
      options: ["une action brève", "une description", "un ordre", "une vérité générale"], rep: 1,
      expl: "L’imparfait peint le décor : c’est l’emploi descriptif (l’arrière-plan du récit)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Décris ta chambre quand tu étais plus petite (3 phrases à l’imparfait) : une description + une habitude.",
      modele: "Exemple : « Ma chambre était rose et mes murs étaient couverts de dessins. Tous les soirs, je lisais une histoire avant de dormir. Mes peluches veillaient près de la fenêtre. »",
      criteres: ["3 phrases à l’imparfait", "Une description + une habitude", "Terminaisons correctes"] }
  ]
},
{
  id: "c03", domaine: "conjugaison", tag: "C3", icone: "📜",
  titre: "Le passé simple",
  objectifs: ["conjuguer le passé simple (1er et 3e groupes usuels)", "l’employer dans le récit"],
  cours: [
    { t: "regle", x: "Le <strong>passé simple</strong> est le temps des <strong>actions principales du récit littéraire</strong> : il fait avancer l’histoire, une action à la fois." },
    { t: "table", head: ["Sujet", "1er grp (parler)", "2e grp (finir)", "être", "avoir", "faire"], rows: [
      ["je", "parlai", "finis", "fus", "eus", "fis"],
      ["tu", "parlas", "finis", "fus", "eus", "fis"],
      ["il/elle", "parla", "finit", "fut", "eut", "fit"],
      ["nous", "parlâmes", "finîmes", "fûmes", "eûmes", "fîmes"],
      ["vous", "parlâtes", "finîtes", "fûtes", "eûtes", "fîtes"],
      ["ils/elles", "parlèrent", "finirent", "furent", "eurent", "firent"]
    ] },
    { t: "table", head: ["Sujet", "aller", "venir", "pouvoir", "vouloir", "prendre"], rows: [
      ["je", "allai", "vins", "pus", "voulus", "pris"],
      ["tu", "allas", "vins", "pus", "voulus", "pris"],
      ["il/elle", "alla", "vint", "put", "voulut", "prit"],
      ["nous", "allâmes", "vînmes", "pûmes", "voulûmes", "prîmes"],
      ["vous", "allâtes", "vîntes", "pûtes", "voulûtes", "prîtes"],
      ["ils/elles", "allèrent", "vinrent", "purent", "voulurent", "prirent"]
    ] },
    { t: "astuce", x: "Repères visuels : 1er groupe → -ai, -âmes, -èrent (parla, parlâmes, parlèrent). 3e groupe → souvent -is/-it/-irent (finis, vint, prirent) ou formes irrégulières à mémoriser (fut, eut, fit)." }
  ],
  exercices: [
    { type: "gap", consigne: "Conjugue au passé simple.", diff: "facile",
      q: "Elle [[ouvrit]] la porte. · Ils [[coururent]] vers le village. · Nous [[mangeâmes]] une pomme. · Il [[fut]] très étonné.",
      expl: "ouvrit (3e groupe, -it) ; coururent (-urent) ; mangeâmes (1er groupe, -âmes) ; fut (être)." },
    { type: "qcm", consigne: "Choisis la bonne forme.", diff: "",
      q: "« Soudain, un bruit étrange ______. » (résonner)",
      options: ["résonna", "résonne", "résonnait", "résonnera"], rep: 0,
      expl: "« Soudain » + action unique qui fait avancer le récit → passé simple : résonna." },
    { type: "qcm", consigne: "Passé simple ou imparfait ?", diff: "",
      q: "« La nuit _____ tout à coup. Un loup _____ au loin. » (tomber / hurler)",
      options: ["tomba / hurlait", "tombait / hurla", "tombe / hurle", "tomba / hurle"], rep: 0,
      expl: "« Tout à coup » → action brève (passé simple : tomba). Le loup hurle = décor/action de fond → imparfait (hurlait)." },
    { type: "gap", consigne: "Conjugue être et avoir au passé simple.", diff: "",
      q: "Il [[eut]] une idée géniale. · Elles [[furent]] heureuses de partir.",
      expl: "avoir → il eut ; être → elles furent (formes irrégulières à mémoriser)." },
    { type: "ouverte", consigne: "À toi !", diff: "difficile",
      q: "Écris 3 phrases de récit au passé simple : « Soudain… », « Alors… », « Enfin… ».",
      modele: "Exemple : « Soudain, la lumière s’éteignit. Alors, je cherchai une bougie à tâtons. Enfin, ma sœur la trouva dans la cuisine et nous vîmes clair de nouveau. »",
      criteres: ["3 verbes au passé simple bien formés", "Un mot de liaison (soudain, alors, enfin)", "Le récit reste logique"] }
  ]
},
{
  id: "c04", domaine: "conjugaison", tag: "C4", icone: "✅",
  titre: "Le passé composé",
  objectifs: ["choisir avoir ou être", "accorder le participe passé avec être"],
  cours: [
    { t: "regle", x: "Formation : <strong>présent de avoir/être + participe passé</strong>. « J’ai mangé. » « Elle est partie. »" },
    { t: "regle", x: "<strong>Auxiliaire être</strong> : verbes pronominaux (se lever → s’est levée) et verbes de déplacement/changement d’état : aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir… → le participe <strong>s’accorde avec le sujet</strong> : « elles sont parties ». Avec <strong>avoir</strong>, le participe ne s’accorde JAMAIS avec le sujet : « elles ont mangé »." },
    { t: "table", head: ["Sujet", "avoir (manger)", "être (aller)"], rows: [
      ["je", "j’ai mangé", "je suis allé(e)"],
      ["tu", "tu as mangé", "tu es allé(e)"],
      ["il/elle", "il a mangé", "il est allé / elle est allée"],
      ["nous", "nous avons mangé", "nous sommes allé(e)s"],
      ["vous", "vous avez mangé", "vous êtes allé(e)(s)"],
      ["ils/elles", "ils ont mangé", "ils sont allés / elles sont allées"]
    ] },
    { t: "attention", x: "Participes passés : -é (parler → parlé), -i (finir → fini), -u (boire → bu), -is (prendre → pris), -it (dire → dit). Irréguliers : faire → fait, ouvrir → ouvert, mettre → mis, écrire → écrit." },
    { t: "regle", x: "<strong>Emploi :</strong> action achevée, ponctuelle dans le passé, à l’oral et dans les lettres, les journaux : « Hier, j’ai visité le musée. »" }
  ],
  exercices: [
    { type: "gap", consigne: "Conjugue au passé composé (attention à l’accord !).", diff: "facile",
      q: "Elle [[est rentrée]] tard. · Ils [[ont fini]] leur dessert. · Nous [[sommes allées]] (filles) au cinéma.",
      expl: "rentrer → être + accord (rentrée) ; finir → avoir (invariable : fini) ; aller → être + accord : allées." },
    { type: "qcm", consigne: "Avoir ou être ?", diff: "",
      q: "« Les enfants _____ montés dans le bus. »",
      options: ["ont", "ont été", "sont", "ont eu"], rep: 2,
      expl: "Monter (déplacement) → auxiliaire être : sont montés." },
    { type: "gap", consigne: "Écris le participe passé.", diff: "",
      q: "prendre → [[pris]] · ouvrir → [[ouvert]] · écrire → [[écrit]] · faire → [[fait]]",
      expl: "Participes irréguliers : pris, ouvert, écrit, fait." },
    { type: "qcm", consigne: "Trouve la phrase correcte.", diff: "difficile",
      q: "Quelle phrase est bien accordée ?",
      options: ["Ma sœur et moi sommes allé au marché.", "Ma sœur est allée au marché.", "Elles ont vu étonnées le spectacle.", "Elle a allée au marché."], rep: 1,
      expl: "Avec être, accord avec le sujet féminin : « Ma sœur est allée »." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Raconte ta journée d’hier en 4 phrases au passé composé (mixe des verbes avec avoir et avec être).",
      modele: "Exemple : « Hier, je me suis levée à sept heures. J’ai pris mon petit-déjeuner, puis je suis allée au parc avec ma cousine. Nous avons joué au badminton. Le soir, nous sommes rentrées fatiguées mais contentes. »",
      criteres: ["4 phrases au passé composé", "Auxiliaires bien choisis", "Participes accordés avec être"] }
  ]
},
{
  id: "c05", domaine: "conjugaison", tag: "C5", icone: "⏩",
  titre: "Le futur simple",
  objectifs: ["conjuguer au futur simple", "distinguer futur simple et futur proche"],
  cours: [
    { t: "regle", x: "Formation : <strong>infinitif + -ai, -as, -a, -ons, -ez, -ont</strong>. Verbes en -re : on enlève le e final (prendre → je prendrai)." },
    { t: "table", head: ["Sujet", "parler", "finir", "être", "avoir", "aller", "faire"], rows: [
      ["je", "parlerai", "finirai", "serai", "aurai", "irai", "ferai"],
      ["tu", "parleras", "finiras", "seras", "auras", "iras", "feras"],
      ["il/elle", "parlera", "finira", "sera", "aura", "ira", "fera"],
      ["nous", "parlerons", "finirons", "serons", "aurons", "irons", "ferons"],
      ["vous", "parlerez", "finirez", "serez", "aurez", "irez", "ferez"],
      ["ils/elles", "parleront", "finiront", "seront", "auront", "iront", "feront"]
    ] },
    { t: "attention", x: "Irréguliers : venir → je viendr<strong>ai</strong> ; pouvoir → je pourrai ; vouloir → je voudrai ; voir → je verrai ; envoyer → j’enverrai ; recevoir → je recevrai." },
    { t: "regle", x: "<strong>Futur simple</strong> (« demain je partirai ») ≠ <strong>futur proche</strong> (aller + infinitif : « je vais partir » = tout de suite, presque décidé)." }
  ],
  exercices: [
    { type: "gap", consigne: "Conjugue au futur simple.", diff: "facile",
      q: "Demain, je [[lirai]] tout le roman. · Ils [[seront]]contents de te revoir. · Nous [[irons]] à la plage dimanche.",
      expl: "lire → je lirai ; être → ils seront ; aller → nous irons." },
    { type: "qcm", consigne: "Choisis la bonne forme.", diff: "",
      q: "« Tu _____ de beaux progrès. » (faire)",
      options: ["fais", "feras", "faisas", "feront"], rep: 1,
      expl: "faire au futur → tu feras." },
    { type: "gap", consigne: "Futur simple ou futur proche ?", diff: "",
      q: "« Dans dix ans, je [[serai]] médecin. » (futur simple) · « Attends, je [[vais t’aider]] ! » (tout de suite → futur proche)",
      expl: "Dans dix ans = futur lointain → futur simple. Tout de suite → futur proche (vais + infinitif)." },
    { type: "qcm", consigne: "Trouve l’erreur.", diff: "difficile",
      q: "Quelle phrase contient une faute ?",
      options: ["Je verrai mes cousins.", "Nous viendrons tôt.", "Il prendera le train.", "Vous serez fiers."], rep: 2,
      expl: "prendre → il prendra (pas de « prendera » : on enlève le e de l’infinitif -re)." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris tes 3 résolutions pour cette année au futur simple.",
      modele: "Exemple : « Cette année, je lirai un livre chaque mois. Je ferai du sport deux fois par semaine. J’aiderai davantage à la maison. »",
      criteres: ["3 phrases au futur simple", "Terminaisons correctes"] }
  ]
},
{
  id: "c06", domaine: "conjugaison", tag: "C6", icone: "🕰️",
  titre: "Le plus-que-parfait",
  objectifs: ["conjuguer au plus-que-parfait", "l’employer pour l’antériorité"],
  cours: [
    { t: "regle", x: "Formation : <strong>imparfait de avoir/être + participe passé</strong>. « j’avais mangé », « elle était partie », « ils s’étaient levés »." },
    { t: "table", head: ["Sujet", "avoir (manger)", "être (aller)"], rows: [
      ["je", "j’avais mangé", "j’étais allé(e)"],
      ["tu", "tu avais mangé", "tu étais allé(e)"],
      ["il/elle", "il avait mangé", "il était allé / elle était allée"],
      ["nous", "nous avions mangé", "nous étions allé(e)s"],
      ["vous", "vous aviez mangé", "vous étiez allé(e)(s)"],
      ["ils/elles", "ils avaient mangé", "ils étaient allés / elles étaient allées"]
    ] },
    { t: "regle", x: "<strong>Emploi :</strong> action passée <strong>antérieure</strong> à une autre action passée. « Quand je suis arrivée, le film <strong>avait déjà commencé</strong>. » (le film a commencé AVANT mon arrivée)." },
    { t: "astuce", x: "Le plus-que-parfait est le « passé du passé » : dans un récit, il raconte ce qui s’était passé avant le moment de l’histoire." }
  ],
  exercices: [
    { type: "gap", consigne: "Conjugue au plus-que-parfait.", diff: "facile",
      q: "Elle [[avait terminé]] son travail avant midi. · Ils [[étaient partis]] avant la pluie.",
      expl: "imparfait de l’auxiliaire + participe passé : avait terminé ; étaient partis (être + accord)." },
    { type: "qcm", consigne: "Quel temps ?", diff: "",
      q: "« Le train _____ quand nous _____ au quai. » (partir / arriver)",
      options: ["est parti / arrivions", "était parti / sommes arrivés", "partait / arrivons", "avait parti / arrivons"], rep: 1,
      expl: "Le train part AVANT l’arrivée : antériorité → plus-que-parfait (était parti) ; l’arrivée → passé composé (sommes arrivés)." },
    { type: "gap", consigne: "Complète avec le plus-que-parfait.", diff: "",
      q: "Nous [[n’avions jamais vu]] (ne… jamais voir, masc.) un tel spectacle. · Tu [[t’étais lavé]] (masc.) avant le dîner.",
      expl: "imparfait (n’avions) + jamais + participe passé vu ; pronominal : t’étais lavé (accord avec sujet masculin)." },
    { type: "qcm", consigne: "Repère le plus-que-parfait.", diff: "",
      q: "« Elle avait préparé tout le dîner quand ses invités sonnèrent. »",
      options: ["sonnèrent", "avait préparé", "préparer", "quand"], rep: 1,
      expl: "« avait préparé » = imparfait de avoir + participe passé : plus-que-parfait (action antérieure au « sonnèrent »)." },
    { type: "ouverte", consigne: "À toi !", diff: "difficile",
      q: "Complète le mini-récit : « Quand je suis arrivée à la gare, le train _____ (partir). Ma cousine _____ (oublier) l’heure exacte, car on _____ (changer) l’horaire. »",
      modele: "Réponse : « Quand je suis arrivée à la gare, le train était parti. Ma cousine avait oublié l’heure exacte, car on avait changé l’horaire. »",
      criteres: ["3 verbes au plus-que-parfait", "Auxiliaires et accords corrects", "Logique de l’antériorité respectée"] }
  ]
},
{
  id: "c07", domaine: "conjugaison", tag: "C7", icone: "🤔",
  titre: "Le conditionnel présent",
  objectifs: ["conjuguer au conditionnel", "l’employer (politesse, désir, incertitude, hypothèse)"],
  cours: [
    { t: "regle", x: "Formation : <strong>infinitif + terminaisons de l’imparfait</strong> (-ais, -ais, -ait, -ions, -iez, -aient). « je parlerais », « il finirait », « nous serions »." },
    { t: "table", head: ["Sujet", "parler", "être", "avoir", "faire", "aller"], rows: [
      ["je", "parlerais", "serais", "aurais", "ferais", "irais"],
      ["tu", "parlerais", "serais", "aurais", "ferais", "irais"],
      ["il/elle", "parlerait", "serait", "aurait", "ferait", "irait"],
      ["nous", "parlerions", "serions", "aurions", "ferions", "irions"],
      ["vous", "parleriez", "seriez", "auriez", "feriez", "iriez"],
      ["ils/elles", "parleraient", "seraient", "auraient", "feraient", "iraient"]
    ] },
    { t: "attention", x: "Ne pas confondre futur et conditionnel à l’écrit : futur <strong>je parlerai</strong> / conditionnel <strong>je parlerais</strong> (-ai vs -ais) !" },
    { t: "regle", x: "<strong>Emplois :</strong> ① la politesse (« Je voudrais un jus ») ② le désir, le conseil (« Tu devrais réviser ») ③ l’incertitude, la rumeur (« Le professeur serait malade ») ④ l’imaginaire, l’hypothèse (« Si j’étais astronaute, je voyagerais sur Mars »)." }
  ],
  exercices: [
    { type: "gap", consigne: "Conjugue au conditionnel présent.", diff: "facile",
      q: "Je [[voudrais]] un chocolat chaud, s’il vous plaît. · Vous [[devriez]] dormir plus tôt. · Ils [[iraient]] volontiers à la montagne.",
      expl: "Conditionnel : infinitif + -ais/-iez/-aient. voudrais (politesse), devriez (conseil), iraient (désir)." },
    { type: "qcm", consigne: "Futur ou conditionnel ?", diff: "",
      q: "« Si tu venais avec nous, tu _____ de superbes paysages. » (voir)",
      options: ["verras", "verrais", "vois", "verrait"], rep: 1,
      expl: "Hypothèse au passé (« si tu venais ») + conséquence imaginaire → conditionnel : tu verrais." },
    { type: "qcm", consigne: "Quelle valeur du conditionnel ?", diff: "",
      q: "« Selon les journaux, le concert serait reporté. »",
      options: ["politesse", "conseil", "incertitude (rumeur)", "hypothèse"], rep: 2,
      expl: "« Selon… » + conditionnel = information non confirmée : la rumeur, l’incertitude." },
    { type: "gap", consigne: "Complète la phrase hypothétique.", diff: "difficile",
      q: "Si j’avais une machine à voyager dans le temps, je [[visiterais]] l’Égypte ancienne.",
      expl: "Si + imparfait (j’avais) → conditionnel présent dans la conséquence : je visiterais." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Termine par le conditionnel : « Si j’étais directrice de l’école, je… » (2 phrases).",
      modele: "Exemple : « Si j’étais directrice de l’école, j’organiserais une journée sportive chaque mois. Les élèves travailleraient aussi en petits groupes, et il y aurait un coin lecture vert ! »",
      criteres: ["2 phrases au conditionnel présent", "Logique de l’hypothèse (si + imparfait → conditionnel)"] }
  ]
},
{
  id: "c08", domaine: "conjugaison", tag: "C8", icone: "📢",
  titre: "L’impératif",
  objectifs: ["conjuguer à l’impératif", " employer l’impératif (ordre, conseil, invitation)"],
  cours: [
    { t: "regle", x: "L’<strong>impératif présent</strong> n’a que trois personnes : <strong>(tu), (nous), (vous)</strong>. On supprime le sujet ! Formation : présent de l’indicatif sans le sujet." },
    { t: "table", head: ["", "parler", "finir", "aller", "faire", "avoir", "être"], rows: [
      ["(tu)", "parle !", "finis !", "va !", "fais !", "aie !", "sois !"],
      ["(nous)", "parlons !", "finissons !", "allons !", "faisons !", "ayons !", "soyons !"],
      ["(vous)", "parlez !", "finissez !", "allez !", "faites !", "ayez !", "soyez !"]
    ] },
    { t: "attention", x: "Au présent, les verbes comme « manger » doublent leur forme avec (tu) : « Mange ! » (pas de e après le g au présent de l’indicatif « tu manges » → à l’impératif : « Mange ! »). Et pour les verbes en -er + pronom : « Regarde-moi ! » devient « Regarde-<strong>moi</strong> » (moi et non me), « Donne-<strong>en</strong> ! » (en et non de)." },
    { t: "regle", x: "<strong>Emplois :</strong> ordre (« Ferme la porte ! »), conseil (« Repose-toi bien. »), invitation (« Viens chez nous ! »), interdiction (« Ne touche pas ! »)." }
  ],
  exercices: [
    { type: "gap", consigne: "Mets à l’impératif (2e personne du singulier).", diff: "facile",
      q: "Tu écoutes bien. → [[Écoute]] bien ! · Tu vas au lit. → [[Va]] au lit ! · Tu es sage. → [[Sois]] sage !",
      expl: "Impératif (tu) : écoute, va, sois — on supprime le sujet et on ne met jamais de -s final pour les verbes en -er !" },
    { type: "gap", consigne: "Mets à l’impératif (2e personne du pluriel).", diff: "",
      q: "Vous rangez vos affaires. → [[Rangez]] vos affaires ! · Vous êtes attentifs. → [[Soyez]] attentifs !",
      expl: "Impératif (vous) : rangez, soyez." },
    { type: "qcm", consigne: "Trouve la phrase correcte.", diff: "",
      q: "Quelle phrase est correcte à l’impératif ?",
      options: ["Tu ferme la fenêtre !", "Ferme la fenêtre !", "Fermer la fenêtre tu !", "Tu fermes la fenêtre à l’impératif."], rep: 1,
      expl: "À l’impératif, on supprime le sujet : « Ferme la fenêtre ! »" },
    { type: "gap", consigne: "Impératif négatif (interdiction).", diff: "",
      q: "Tu parles en classe. → Ne [[parle]] pas en classe ! · Vous oubliez vos cahiers. → N’[[oubliez]] pas vos cahiers !",
      expl: "Interdiction : ne/n’ + verbe à l’impératif + pas : « Ne parle pas », « N’oubliez pas »." },
    { type: "ouverte", consigne: "À toi !", diff: "",
      q: "Écris 4 consignes pour un camarade qui prépare son sac d’école (impératif : 2 affirmatives, 1 négative, 1 avec (nous)).",
      modele: "Exemple : « Vérifie ton emploi du temps. Range tes cahiers dans le bon ordre. N’oublie pas ta gourde ! Mettons aussi le livret de maths. »",
      criteres: ["4 impératifs corrects", "Sans sujet devant le verbe", "Une négation (ne… pas)"] }
  ]
}
);
