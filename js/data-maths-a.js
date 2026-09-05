/* ============================================================
   Base de données — MATHÉMATIQUES 1AC (Maroc)
   Importée depuis la base glaadadil/base-1ac-maroc (docs/05-mathematiques).
   Mathématiques rendues avec KaTeX (CDN).
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
{
 "id": "m01",
 "domaine": "maths",
 "unite": 1,
 "theme": "Numérique et calcul",
 "tag": "M01",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M01 — Opérations sur les nombres entiers naturels et les nombres décimaux",
 "duree": "8 h",
 "semestre": "1",
 "objectifs": [
  "Calculer une expression numérique en respectant les priorités opératoires.",
  "Utiliser correctement les parenthèses et la distributivité.",
  "Reconnaître multiples et diviseurs, appliquer les critères de divisibilité.",
  "Déterminer le PGCD de deux entiers naturels.",
  "Donner un ordre de grandeur et arrondir un nombre décimal."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Amine fait ses courses au souk de Fès. Il achète <strong>3 kg</strong> de tomates à <strong>7 DH</strong> le\nkilogramme et <strong>2 kg</strong> d'oignons à <strong>5 DH</strong> le kilogramme. Il paie avec un billet de\n<strong>50 DH</strong>.</p>\n<p>Amine écrit son calcul en une seule ligne :</p>\n<p>$$50 - 3 \\times 7 + 2 \\times 5$$</p>\n<p>Son camarade Youssef calcule de gauche à droite et trouve $475$. Amine, lui, trouve\n$39$. Qui a raison ? Il faut une règle commune, la même pour tout le monde : ce sont\nles <strong>priorités opératoires</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Calcule de deux façons le prix total de $4$ cahiers à $12$ DH et\n$4$ stylos à $3$ DH.</p>\n<ul>\n<li><strong>Façon A</strong> : je calcule chaque total, puis j'ajoute : $4 \\times 12 + 4 \\times 3 = 48 + 12 = 60$.</li>\n<li><strong>Façon B</strong> : un cahier + un stylo coûtent $12 + 3 = 15$ DH, et j'ai $4$ lots :\n  $4 \\times (12 + 3) = 4 \\times 15 = 60$.</li>\n</ul>\n<p><strong>Observation.</strong> Les deux façons donnent <strong>60 DH</strong>.</p>\n<p><strong>Conclusion.</strong> $4 \\times (12 + 3) = 4 \\times 12 + 4 \\times 3$. C'est la <strong>distributivité</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-priorites-operatoires\">3.1 Priorités opératoires</h3>\n<blockquote>\n<p><strong>Règle.</strong> Dans une expression numérique :\n1. on effectue d'abord les calculs entre <strong>parenthèses</strong>, en commençant par les plus intérieures ;\n2. puis les <strong>multiplications</strong> et les <strong>divisions</strong>, de gauche à droite ;\n3. enfin les <strong>additions</strong> et les <strong>soustractions</strong>, de gauche à droite.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $50 - 3 \\times 7 + 2 \\times 5 = 50 - 21 + 10 = 29 + 10 = 39$.\nC'est donc Amine qui a raison : il lui reste $39$ DH.</p>\n<p><strong>Méthode (pas à pas).</strong> Pour calculer $12 + 4 \\times (9 - 3) \\div 2$ :\n1. Parenthèse : $9 - 3 = 6$, donc l'expression devient $12 + 4 \\times 6 \\div 2$.\n2. Multiplication et division, de gauche à droite : $4 \\times 6 = 24$, puis $24 \\div 2 = 12$.\n3. Addition : $12 + 12 = 24$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Calculer de gauche à droite sans regarder les opérations.\n$2 + 3 \\times 4$ ne vaut <strong>pas</strong> $20$ mais $2 + 12 = 14$.</p>\n<h3 id=\"32-distributivite\">3.2 Distributivité</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Pour tous nombres $a$, $b$ et $k$ :\n$$k \\times (a + b) = k \\times a + k \\times b \\qquad \\text{et} \\qquad k \\times (a - b) = k \\times a - k \\times b$$</p>\n</blockquote>\n<p>Elle sert à <strong>développer</strong> (enlever la parenthèse) ou à <strong>factoriser</strong> (mettre en facteur).</p>\n<p><strong>Exemple 1 (développer).</strong> $7 \\times (20 + 3) = 7 \\times 20 + 7 \\times 3 = 140 + 21 = 161$.\nC'est une bonne technique de <strong>calcul mental</strong> : $7 \\times 23 = 161$.</p>\n<p><strong>Exemple 2 (factoriser).</strong> $25 \\times 17 + 25 \\times 3 = 25 \\times (17 + 3) = 25 \\times 20 = 500$.</p>\n<h3 id=\"33-multiples-et-diviseurs\">3.3 Multiples et diviseurs</h3>\n<blockquote>\n<p><strong>Définition.</strong> Soient $a$ et $b$ deux entiers naturels avec $b \\neq 0$.\nSi la division de $a$ par $b$ tombe juste (reste nul), on dit que :\n$a$ est un <strong>multiple</strong> de $b$, et que $b$ est un <strong>diviseur</strong> de $a$.\nOn dit aussi que $a$ est <strong>divisible</strong> par $b$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $56 = 8 \\times 7$. Donc $56$ est un multiple de $8$ et de $7$ ;\n$8$ et $7$ sont des diviseurs de $56$.</p>\n<h3 id=\"34-criteres-de-divisibilite\">3.4 Critères de divisibilité</h3>\n<table>\n<thead>\n<tr>\n<th>Divisible par</th>\n<th>Critère</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$2$</td>\n<td>le chiffre des unités est $0, 2, 4, 6$ ou $8$</td>\n<td>$174$</td>\n</tr>\n<tr>\n<td>$3$</td>\n<td>la somme des chiffres est un multiple de $3$</td>\n<td>$471$ ($4+7+1=12$)</td>\n</tr>\n<tr>\n<td>$4$</td>\n<td>le nombre formé par les deux derniers chiffres est un multiple de $4$</td>\n<td>$1\\,316$ ($16$)</td>\n</tr>\n<tr>\n<td>$5$</td>\n<td>le chiffre des unités est $0$ ou $5$</td>\n<td>$245$</td>\n</tr>\n<tr>\n<td>$9$</td>\n<td>la somme des chiffres est un multiple de $9$</td>\n<td>$837$ ($8+3+7=18$)</td>\n</tr>\n<tr>\n<td>$10$</td>\n<td>le chiffre des unités est $0$</td>\n<td>$3\\,270$</td>\n</tr>\n</tbody>\n</table>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire qu'un nombre divisible par $3$ est forcément divisible\npar $9$. $12$ est divisible par $3$ mais pas par $9$. En revanche, tout nombre\ndivisible par $9$ est divisible par $3$.</p>\n<h3 id=\"35-pgcd-de-deux-entiers-naturels\">3.5 PGCD de deux entiers naturels</h3>\n<blockquote>\n<p><strong>Définition.</strong> Le <strong>PGCD</strong> de deux entiers naturels non nuls est le <strong>plus grand\ndiviseur commun</strong> à ces deux nombres.</p>\n</blockquote>\n<p><strong>Méthode 1 — par différences successives.</strong> On remplace le plus grand nombre par la\ndifférence des deux, jusqu'à obtenir deux nombres égaux.</p>\n<p>Cherchons $\\mathrm{PGCD}(84\\,;\\,60)$ :\n$84 - 60 = 24$ → couple $(60\\,;\\,24)$ ; $60 - 24 = 36$ → $(36\\,;\\,24)$ ;\n$36 - 24 = 12$ → $(24\\,;\\,12)$ ; $24 - 12 = 12$ → $(12\\,;\\,12)$.\nDonc $\\mathrm{PGCD}(84\\,;\\,60) = 12$.</p>\n<p><strong>Méthode 2 — par divisions successives (algorithme d'Euclide).</strong> On divise le plus\ngrand par le plus petit, puis le diviseur par le reste, jusqu'à un reste nul.</p>\n<p>$84 = 60 \\times 1 + 24$ ; $60 = 24 \\times 2 + 12$ ; $24 = 12 \\times 2 + 0$.\nLe dernier reste non nul est $12$ : $\\mathrm{PGCD}(84\\,;\\,60) = 12$.</p>\n<h3 id=\"36-ordre-de-grandeur-et-arrondi\">3.6 Ordre de grandeur et arrondi</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>ordre de grandeur</strong> est une valeur approchée simple qui permet de\nprévoir le résultat d'un calcul et de vérifier qu'il est plausible.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $19{,}8 \\times 4{,}1 \\approx 20 \\times 4 = 80$. Le résultat exact,\n$81{,}18$, est bien proche de $80$.</p>\n<blockquote>\n<p><strong>Règle d'arrondi.</strong> Pour arrondir au dixième, on regarde le chiffre des centièmes :\ns'il est $0, 1, 2, 3$ ou $4$ on garde le chiffre des dixièmes ; s'il est\n$5, 6, 7, 8$ ou $9$ on augmente le chiffre des dixièmes de $1$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $7{,}382$ arrondi au dixième vaut $7{,}4$ ; arrondi au centième, $7{,}38$ ;\narrondi à l'unité, $7$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Calculer $A = 5 \\times (12 - 4) + 36 \\div 9$.\n<em>Solution.</em> Parenthèse : $12 - 4 = 8$. Donc $A = 5 \\times 8 + 36 \\div 9 = 40 + 4 = 44$.</p>\n<p><strong>Exemple 2.</strong> Une famille d'Agadir consomme $17$ m³ d'eau par mois à $9{,}5$ DH le m³,\nplus un abonnement de $24$ DH. Facture ?\n<em>Solution.</em> $17 \\times 9{,}5 + 24 = 161{,}5 + 24 = 185{,}5$ DH.\n<em>Vérification par ordre de grandeur</em> : $20 \\times 10 + 20 = 220$, résultat plausible.</p>\n<p><strong>Exemple 3.</strong> Un jardinier de Casablanca a $48$ rosiers et $36$ jasmins. Il veut faire\ndes rangées identiques, sans reste. Combien de rangées au maximum ?\n<em>Solution.</em> On cherche $\\mathrm{PGCD}(48\\,;\\,36)$ : $48 = 36 \\times 1 + 12$ ;\n$36 = 12 \\times 3 + 0$. Donc $\\mathrm{PGCD} = 12$ : <strong>12 rangées</strong>, chacune avec\n$4$ rosiers et $3$ jasmins.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Parenthèses, puis $\\times$ et $\\div$, puis $+$ et $-$ : toujours dans cet ordre.</li>\n<li>$k \\times (a + b) = k \\times a + k \\times b$ : la distributivité accélère le calcul mental.</li>\n<li>$a$ multiple de $b$ ⇔ $b$ diviseur de $a$ ⇔ le reste de $a \\div b$ est $0$.</li>\n<li>Critères : $2$ et $5$ et $10$ → dernier chiffre ; $3$ et $9$ → somme des chiffres ; $4$ → deux derniers chiffres.</li>\n<li>PGCD : différences successives ou algorithme d'Euclide.</li>\n<li>Un ordre de grandeur sert à <strong>vérifier</strong> un résultat, pas à le remplacer.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Chercher tous les diviseurs de $360$ et compter combien il y en a.</li>\n<li>Deux nombres dont le PGCD vaut $1$ sont dits <em>premiers entre eux</em> : trouves-en trois couples.</li>\n<li>Inventer un critère de divisibilité par $6$ à partir de ceux de $2$ et de $3$.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc — programmes du collège</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadres de référence des examens, mathématiques</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"1-priorites-operatoires\">1. Priorités opératoires</h2>\n<table>\n<thead>\n<tr>\n<th>Ordre</th>\n<th>Ce qu'on fait</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Les <strong>parenthèses</strong>, des plus intérieures aux plus extérieures</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Les <strong>multiplications</strong> et <strong>divisions</strong>, de gauche à droite</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Les <strong>additions</strong> et <strong>soustractions</strong>, de gauche à droite</td>\n</tr>\n</tbody>\n</table>\n<p>$$50 - 3 \\times 7 + 2 \\times 5 = 50 - 21 + 10 = 39$$</p>\n<h2 id=\"2-distributivite\">2. Distributivité</h2>\n<table>\n<thead>\n<tr>\n<th>Sens</th>\n<th>Formule</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Développer</td>\n<td>$k \\times (a + b) = k \\times a + k \\times b$</td>\n</tr>\n<tr>\n<td>Développer</td>\n<td>$k \\times (a - b) = k \\times a - k \\times b$</td>\n</tr>\n<tr>\n<td>Factoriser</td>\n<td>$k \\times a + k \\times b = k \\times (a + b)$</td>\n</tr>\n</tbody>\n</table>\n<p>Astuce de calcul mental : $6 \\times 102 = 6 \\times 100 + 6 \\times 2 = 612$.</p>\n<h2 id=\"3-multiples-et-diviseurs\">3. Multiples et diviseurs</h2>\n<p>$a$ est un <strong>multiple</strong> de $b$ (et $b$ un <strong>diviseur</strong> de $a$) lorsque le reste de la\ndivision de $a$ par $b$ est nul, c'est-à-dire $a = b \\times k$ avec $k$ entier.</p>\n<table>\n<thead>\n<tr>\n<th>Divisible par</th>\n<th>Critère</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$2$</td>\n<td>dernier chiffre $0,2,4,6,8$</td>\n</tr>\n<tr>\n<td>$3$</td>\n<td>somme des chiffres multiple de $3$</td>\n</tr>\n<tr>\n<td>$4$</td>\n<td>deux derniers chiffres multiples de $4$</td>\n</tr>\n<tr>\n<td>$5$</td>\n<td>dernier chiffre $0$ ou $5$</td>\n</tr>\n<tr>\n<td>$9$</td>\n<td>somme des chiffres multiple de $9$</td>\n</tr>\n<tr>\n<td>$10$</td>\n<td>dernier chiffre $0$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"4-pgcd\">4. PGCD</h2>\n<ul>\n<li><strong>Différences successives</strong> : remplacer le plus grand par la différence, jusqu'à l'égalité.</li>\n<li><strong>Divisions successives (Euclide)</strong> : diviser, puis diviser le diviseur par le reste ;\n  le dernier reste non nul est le PGCD.</li>\n</ul>\n<p>$\\mathrm{PGCD}(84\\,;\\,60) = 12$.</p>\n<h2 id=\"5-ordre-de-grandeur-et-arrondi\">5. Ordre de grandeur et arrondi</h2>\n<ul>\n<li>Ordre de grandeur : on remplace chaque nombre par un nombre simple proche.\n  $19{,}8 \\times 4{,}1 \\approx 20 \\times 4 = 80$.</li>\n<li>Arrondi : on regarde le chiffre <strong>juste après</strong> le rang demandé.\n  $7{,}382 \\approx 7{,}4$ (dixième), $\\approx 7{,}38$ (centième).</li>\n</ul>\n<h2 id=\"6-trois-pieges-a-eviter\">6. Trois pièges à éviter</h2>\n<ol>\n<li>Calculer de gauche à droite en oubliant la priorité de $\\times$ et $\\div$\n   ($2 + 3 \\times 4 = 14$, pas $20$).</li>\n<li>Confondre « divisible par $3$ » et « divisible par $9$ » : $12$ passe le test de $3$ mais pas celui de $9$.</li>\n<li>Confondre <strong>troncature</strong> et <strong>arrondi</strong> : $7{,}38$ arrondi au dixième donne $7{,}4$, pas $7{,}3$.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Parenthèses → $\\times\\ \\div$ → $+\\ -$ · $k(a+b) = ka + kb$ · reste $0$ ⇒ divisible ·\nPGCD = plus grand diviseur commun · j'estime <strong>avant</strong>, je vérifie <strong>après</strong>.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Priorités simples",
   "diff": "facile",
   "q": "<p>Calculer, en écrivant les étapes :\na) $7 + 5 \\times 4$  b) $(7 + 5) \\times 4$  c) $20 - 6 \\div 2$  d) $36 \\div (2 + 7)$</p>",
   "modele": "<p>a) $7 + 5 \\times 4 = 7 + 20 = 27$\nb) $(7 + 5) \\times 4 = 12 \\times 4 = 48$\nc) $20 - 6 \\div 2 = 20 - 3 = 17$\nd) $36 \\div (2 + 7) = 36 \\div 9 = 4$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Deux opérations prioritaires",
   "diff": "facile",
   "q": "<p>Calculer :\na) $3 \\times (8 - 5) + 10$  b) $40 - 2 \\times (3 + 4)$  c) $5 \\times 6 - 4 \\times 3$  d) $100 \\div 4 + 6 \\times 2$</p>",
   "modele": "<p>a) $3 \\times (8 - 5) + 10 = 3 \\times 3 + 10 = 9 + 10 = 19$\nb) $40 - 2 \\times (3 + 4) = 40 - 2 \\times 7 = 40 - 14 = 26$\nc) $5 \\times 6 - 4 \\times 3 = 30 - 12 = 18$\nd) $100 \\div 4 + 6 \\times 2 = 25 + 12 = 37$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Avec des nombres décimaux",
   "diff": "facile",
   "q": "<p>Calculer :\na) $2{,}5 \\times 4 + 1{,}5$  b) $(3{,}2 + 1{,}8) \\times 2$  c) $12{,}6 \\div 3 - 1{,}2$  d) $0{,}5 \\times (8 - 2{,}4)$</p>",
   "modele": "<p>a) $2{,}5 \\times 4 + 1{,}5 = 10 + 1{,}5 = 11{,}5$\nb) $(3{,}2 + 1{,}8) \\times 2 = 5 \\times 2 = 10$\nc) $12{,}6 \\div 3 - 1{,}2 = 4{,}2 - 1{,}2 = 3$\nd) $0{,}5 \\times (8 - 2{,}4) = 0{,}5 \\times 5{,}6 = 2{,}8$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Distributivité (développer)",
   "diff": "facile",
   "q": "<p>Développer puis calculer :\na) $8 \\times (10 + 3)$  b) $6 \\times (50 - 2)$  c) $25 \\times (4 + 8)$  d) $12 \\times (20 - 1)$</p>",
   "modele": "<p>a) $8 \\times (10 + 3) = 8 \\times 10 + 8 \\times 3 = 80 + 24 = 104$\nb) $6 \\times (50 - 2) = 6 \\times 50 - 6 \\times 2 = 300 - 12 = 288$\nc) $25 \\times (4 + 8) = 25 \\times 4 + 25 \\times 8 = 100 + 200 = 300$\nd) $12 \\times (20 - 1) = 12 \\times 20 - 12 \\times 1 = 240 - 12 = 228$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Critères de divisibilité",
   "diff": "facile",
   "q": "<p>Pour chacun des nombres $132$, $245$, $918$, $1\\,320$ et $407$, indiquer par lesquels\nde ces diviseurs il est divisible : $2$, $3$, $4$, $5$, $9$, $10$. Justifier par le critère.</p>",
   "modele": "<table>\n<thead>\n<tr>\n<th>Nombre</th>\n<th>$2$</th>\n<th>$3$</th>\n<th>$4$</th>\n<th>$5$</th>\n<th>$9$</th>\n<th>$10$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$132$</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>non</td>\n<td>non</td>\n<td>non</td>\n</tr>\n<tr>\n<td>$245$</td>\n<td>non</td>\n<td>non</td>\n<td>non</td>\n<td>oui</td>\n<td>non</td>\n<td>non</td>\n</tr>\n<tr>\n<td>$918$</td>\n<td>oui</td>\n<td>oui</td>\n<td>non</td>\n<td>non</td>\n<td>oui</td>\n<td>non</td>\n</tr>\n<tr>\n<td>$1\\,320$</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>non</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>$407$</td>\n<td>non</td>\n<td>non</td>\n<td>non</td>\n<td>non</td>\n<td>non</td>\n<td>non</td>\n</tr>\n</tbody>\n</table>\n<p>Justifications : $132$ finit par $2$ (divisible par $2$), $1+3+2 = 6$ multiple de $3$,\n$32$ est multiple de $4$ ; $245$ finit par $5$ et $2+4+5 = 11$ n'est pas multiple de $3$ ;\n$918$ : $9+1+8 = 18$, multiple de $9$ donc aussi de $3$, mais $18$ n'est pas multiple de $4$ ;\n$1\\,320$ finit par $0$ (donc par $2$, $5$ et $10$), $1+3+2+0 = 6$ multiple de $3$ mais pas de $9$,\net $20$ est multiple de $4$ ; $407$ : chiffre des unités $7$, et $4+0+7 = 11$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Arrondis et ordre de grandeur",
   "diff": "facile",
   "q": "<ol>\n<li>Arrondir $5{,}4728$ à l'unité, au dixième, au centième, au millième.</li>\n<li>Donner un ordre de grandeur de $4{,}98 \\times 20{,}3$, puis calculer la valeur exacte.</li>\n</ol>",
   "modele": "<ol>\n<li>$5{,}4728 \\approx 5$ (unité) ; $\\approx 5{,}5$ (dixième, car le centième est $7$) ;\n   $\\approx 5{,}47$ (centième, car le millième est $2$) ; $\\approx 5{,}473$ (millième, car le suivant est $8$).</li>\n<li>Ordre de grandeur : $4{,}98 \\times 20{,}3 \\approx 5 \\times 20 = 100$.\n   Valeur exacte : $4{,}98 \\times 20{,}3 = 101{,}094$. C'est bien proche de $100$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Parenthèses imbriquées",
   "diff": "",
   "q": "<p>Calculer :\n$A = 5 \\times \\big(12 - (3 + 4)\\big)$  ·  $B = (18 - 2 \\times 3) \\div 4$\n$C = 2 \\times \\big(3 + 4 \\times (5 - 2)\\big)$  ·  $D = 100 - (25 + 3 \\times 15)$</p>",
   "modele": "<p>$A = 5 \\times (12 - 7) = 5 \\times 5 = 25$\n$B = (18 - 6) \\div 4 = 12 \\div 4 = 3$\n$C = 2 \\times (3 + 4 \\times 3) = 2 \\times (3 + 12) = 2 \\times 15 = 30$\n$D = 100 - (25 + 45) = 100 - 70 = 30$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Factoriser pour calculer vite",
   "diff": "",
   "q": "<p>Calculer astucieusement, sans calculatrice :\na) $17 \\times 13 + 17 \\times 7$  b) $45 \\times 9 - 45 \\times 7$  c) $2{,}5 \\times 8 + 2{,}5 \\times 2$  d) $99 \\times 7$</p>",
   "modele": "<p>a) $17 \\times 13 + 17 \\times 7 = 17 \\times (13 + 7) = 17 \\times 20 = 340$\nb) $45 \\times 9 - 45 \\times 7 = 45 \\times (9 - 7) = 45 \\times 2 = 90$\nc) $2{,}5 \\times 8 + 2{,}5 \\times 2 = 2{,}5 \\times 10 = 25$\nd) $99 \\times 7 = (100 - 1) \\times 7 = 700 - 7 = 693$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Multiples et diviseurs",
   "diff": "",
   "q": "<ol>\n<li>Écrire la liste complète des diviseurs de $60$, puis dire combien il y en a.</li>\n<li>Écrire tous les multiples de $7$ compris entre $50$ et $100$.</li>\n</ol>",
   "modele": "<ol>\n<li>Diviseurs de $60$ : $1$, $2$, $3$, $4$, $5$, $6$, $10$, $12$, $15$, $20$, $30$, $60$.\n   Il y en a <strong>12</strong>.</li>\n<li>Multiples de $7$ entre $50$ et $100$ : $56$, $63$, $70$, $77$, $84$, $91$, $98$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Chiffre manquant",
   "diff": "",
   "q": "<p>Trouver tous les chiffres possibles pour remplacer le point :\na) $4!\\bullet!2$ divisible par $3$  b) $7!\\bullet!0$ divisible par $4$  c) $1!\\bullet!5$ divisible par $9$</p>",
   "modele": "<p>a) $4!\\bullet!2$ divisible par $3$ : la somme est $4 + \\bullet + 2 = 6 + \\bullet$.\n   Il faut $6 + \\bullet$ multiple de $3$, donc $\\bullet \\in {0\\,;\\,3\\,;\\,6\\,;\\,9}$\n   (nombres $402$, $432$, $462$, $492$).\nb) $7!\\bullet!0$ divisible par $4$ : le nombre formé des deux derniers chiffres est\n   $\\bullet 0$. Il doit être multiple de $4$ : $00$, $20$, $40$, $60$, $80$ conviennent,\n   donc $\\bullet \\in {0\\,;\\,2\\,;\\,4\\,;\\,6\\,;\\,8}$.\nc) $1!\\bullet!5$ divisible par $9$ : la somme est $1 + \\bullet + 5 = 6 + \\bullet$.\n   Un seul chiffre convient : $\\bullet = 3$ (somme $9$), soit le nombre $135$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "PGCD",
   "diff": "",
   "q": "<ol>\n<li>Déterminer $\\mathrm{PGCD}(96\\,;\\,72)$ par la méthode des différences successives.</li>\n<li>Déterminer $\\mathrm{PGCD}(126\\,;\\,84)$ par divisions successives.</li>\n</ol>",
   "modele": "<ol>\n<li>Différences successives : $96 - 72 = 24$ → $(72\\,;\\,24)$ ; $72 - 24 = 48$ → $(48\\,;\\,24)$ ;\n   $48 - 24 = 24$ → $(24\\,;\\,24)$. Donc $\\mathrm{PGCD}(96\\,;\\,72) = 24$.</li>\n<li>Divisions successives : $126 = 84 \\times 1 + 42$ ; $84 = 42 \\times 2 + 0$.\n   Le dernier reste non nul est $42$ : $\\mathrm{PGCD}(126\\,;\\,84) = 42$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Vérifier par estimation",
   "diff": "",
   "q": "<p>Fatima calcule $4{,}2 \\times 19{,}6$ à la calculatrice et lit $823{,}2$.\n1. Donner un ordre de grandeur du produit.\n2. Expliquer pourquoi le résultat lu est faux et donner la valeur exacte.</p>",
   "modele": "<ol>\n<li>$4{,}2 \\times 19{,}6 \\approx 4 \\times 20 = 80$.</li>\n<li>$823{,}2$ est environ $10$ fois trop grand : la virgule a été mal placée à la saisie.\n   Valeur exacte : $4{,}2 \\times 19{,}6 = 82{,}32$, ce qui est bien proche de $80$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Au souk de Fès",
   "diff": "difficile",
   "q": "<p>Hind achète $3$ kg d'oranges à $8{,}50$ DH le kilogramme et $2{,}5$ kg de bananes à\n$12$ DH le kilogramme. Elle paie avec un billet de $100$ DH.\n1. Écrire en une seule expression le calcul de la somme rendue.\n2. Calculer cette somme.</p>",
   "modele": "<ol>\n<li>Expression : $100 - (3 \\times 8{,}50 + 2{,}5 \\times 12)$.</li>\n<li>$3 \\times 8{,}50 = 25{,}50$ ; $2{,}5 \\times 12 = 30$ ; total des achats $= 55{,}50$ DH.\n   Somme rendue : $100 - 55{,}50 = 44{,}50$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Sachets de la coopérative",
   "diff": "difficile",
   "q": "<p>Une coopérative d'Errachidia veut préparer des sachets identiques avec $108$ dattes et\n$72$ amandes, sans qu'il reste rien.\n1. Quel est le nombre maximal de sachets ?\n2. Que contient alors chaque sachet ?</p>",
   "modele": "<ol>\n<li>On cherche $\\mathrm{PGCD}(108\\,;\\,72)$ : $108 = 72 \\times 1 + 36$ ; $72 = 36 \\times 2 + 0$.\n   Donc $\\mathrm{PGCD} = 36$ : au maximum <strong>36 sachets</strong>.</li>\n<li>Chaque sachet contient $108 \\div 36 = 3$ dattes et $72 \\div 36 = 2$ amandes.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Deux lignes de bus",
   "diff": "difficile",
   "q": "<p>À la gare de Casablanca, le bus A part toutes les $12$ minutes et le bus B toutes les\n$18$ minutes. Les deux partent ensemble à $7$ h $00$.\nÀ quelle heure partiront-ils de nouveau ensemble ? Justifier avec des listes de multiples.</p>",
   "modele": "<p>Multiples de $12$ : $12$, $24$, $36$, $48$, $60$…\nMultiples de $18$ : $18$, $36$, $54$, $72$…\nLe plus petit multiple commun est $36$.\nLes deux bus repartiront ensemble $36$ minutes après $7$ h $00$, soit à <strong>7 h 36</strong>.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Carrelage",
   "diff": "difficile",
   "q": "<p>Une salle rectangulaire mesure $4{,}80$ m sur $3{,}60$ m. On veut la couvrir exactement\navec des carreaux carrés identiques, sans découpe, dont le côté est un nombre entier de\ncentimètres, le plus grand possible.\n1. Quel est le côté d'un carreau ?\n2. Combien faut-il de carreaux ?</p>",
   "modele": "<ol>\n<li>En centimètres, la salle mesure $480$ cm sur $360$ cm.\n   $480 = 360 \\times 1 + 120$ ; $360 = 120 \\times 3 + 0$, donc $\\mathrm{PGCD}(480\\,;\\,360) = 120$.\n   Le côté du carreau est <strong>120 cm</strong>, soit $1{,}20$ m.</li>\n<li>On place $480 \\div 120 = 4$ carreaux en longueur et $360 \\div 120 = 3$ en largeur,\n   soit $4 \\times 3 = 12$ carreaux.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Facture d'eau à Agadir",
   "diff": "difficile",
   "q": "<p>Une facture comprend : un abonnement de $27$ DH, puis $8$ m³ facturés $2{,}50$ DH le m³\net $6$ m³ facturés $9{,}40$ DH le m³.\n1. Écrire le calcul en une seule expression avec des parenthèses.\n2. Calculer le montant exact, puis l'arrondir au dirham.</p>",
   "modele": "<ol>\n<li>Expression : $27 + (8 \\times 2{,}50) + (6 \\times 9{,}40)$.</li>\n<li>$8 \\times 2{,}50 = 20$ ; $6 \\times 9{,}40 = 56{,}40$.\n   Montant $= 27 + 20 + 56{,}40 = 103{,}40$ DH, soit environ <strong>103 DH</strong> au dirham près.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Le nombre mystère",
   "diff": "difficile",
   "q": "<p>Un nombre entier est compris entre $300$ et $350$. Il est divisible à la fois par $4$ et par $9$.\n1. Montrer qu'il n'y a qu'une seule possibilité et donner ce nombre.\n2. Ce nombre est-il divisible par $3$ ? par $6$ ? Justifier.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Calculer en respectant les priorités</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Calculer avec parenthèses</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer avec des décimaux</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Utiliser la distributivité</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Appliquer les critères de divisibilité</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Arrondir, estimer</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Gérer des parenthèses imbriquées</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Factoriser, calculer mentalement</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Reconnaître multiples et diviseurs</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Raisonner sur un critère</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Déterminer un PGCD</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Contrôler la vraisemblance d'un résultat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser une situation d'achat</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Résoudre un problème de PGCD</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Utiliser des multiples communs</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Modéliser un partage géométrique</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Traduire une facture en expression</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Raisonner, justifier</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>Un nombre divisible par $4$ et par $9$ est un multiple de $36$ (car $4$ et $9$ n'ont\n   aucun diviseur commun autre que $1$). Multiples de $36$ : $\\ldots, 288, 324, 360, \\ldots$\n   Entre $300$ et $350$, seul $324$ convient.\n   Vérification : $24$ est multiple de $4$, et $3 + 2 + 4 = 9$ est multiple de $9$.</li>\n<li>$324$ est divisible par $3$ (somme des chiffres $9$) et par $6$, car il est divisible\n   à la fois par $2$ (il finit par $4$) et par $3$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M01",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Calculatrice non autorisée</p>\n<h2 id=\"exercice-1-5-points-calculs-et-priorites\">Exercice 1 (5 points) — Calculs et priorités</h2>\n<p>Calculer en détaillant les étapes :\na) $15 - 3 \\times 4$  b) $(15 - 3) \\times 4$  c) $2 \\times (7 + 3 \\times 2)$\nd) $24 \\div (10 - 4) + 5$  e) $3{,}5 \\times 2 + 0{,}5 \\times 6$</p>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>a</td>\n<td>$3$ avec l'étape $15 - 12$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>b</td>\n<td>$48$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>c</td>\n<td>$26$ avec les deux étapes</td>\n<td>1</td>\n</tr>\n<tr>\n<td>d</td>\n<td>$9$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>e</td>\n<td>$10$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-divisibilite-et-pgcd\">Exercice 2 (5 points) — Divisibilité et PGCD</h2>\n<ol>\n<li>Pour $540$ puis pour $273$, dire s'ils sont divisibles par $2$, $3$, $4$, $5$, $9$, $10$\n   en citant le critère utilisé.</li>\n<li>Déterminer $\\mathrm{PGCD}(150\\,;\\,60)$ par divisions successives.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1 ($540$)</td>\n<td>six réponses correctes justifiées</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>1 ($273$)</td>\n<td>six réponses correctes justifiées</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>les deux divisions écrites</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>conclusion $\\mathrm{PGCD} = 30$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-au-marche-de-casablanca\">Exercice 3 (5 points) — Au marché de Casablanca</h2>\n<p>Karim achète $4$ kg de pommes à $14{,}50$ DH le kilogramme et $3$ boîtes de thé à $22$ DH\nla boîte. Il paie avec un billet de $200$ DH.\n1. Écrire en une seule expression le calcul de la somme rendue.\n2. Donner un ordre de grandeur de la dépense.\n3. Calculer la somme exacte rendue.</p>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>expression $200 - (4 \\times 14{,}50 + 3 \\times 22)$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>estimation cohérente (environ $120$ DH)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>calcul détaillé et résultat $76$ DH</td>\n<td>2,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points-bouquets-de-marrakech\">Exercice 4 (5 points) — Bouquets de Marrakech</h2>\n<p>Une fleuriste dispose de $90$ œillets et de $126$ roses. Elle veut composer des bouquets\nidentiques en utilisant toutes les fleurs.\n1. Quel est le nombre maximal de bouquets ?\n2. Combien d'œillets et combien de roses contient chaque bouquet ?\n3. Peut-elle faire $9$ bouquets identiques en utilisant toutes les fleurs ? Justifier.</p>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>méthode du PGCD écrite et résultat $18$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$5$ œillets et $7$ roses</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>justification : $9$ divise $90$ et $126$, donc oui</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<p>a) $15 - 3 \\times 4 = 15 - 12 = 3$\nb) $(15 - 3) \\times 4 = 12 \\times 4 = 48$\nc) $2 \\times (7 + 3 \\times 2) = 2 \\times (7 + 6) = 2 \\times 13 = 26$\nd) $24 \\div (10 - 4) + 5 = 24 \\div 6 + 5 = 4 + 5 = 9$\ne) $3{,}5 \\times 2 + 0{,}5 \\times 6 = 7 + 3 = 10$</p>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$540$ : divisible par $2$ (finit par $0$), par $3$ et par $9$ ($5+4+0 = 9$),\n   par $4$ ($40$ est multiple de $4$), par $5$ et par $10$ (finit par $0$).\n   Il est donc divisible par les six nombres.\n   $273$ : non divisible par $2$ (finit par $3$), divisible par $3$ ($2+7+3 = 12$),\n   non divisible par $9$ ($12$ n'est pas multiple de $9$), non par $4$ ($73$),\n   non par $5$ ni par $10$.</li>\n<li>$150 = 60 \\times 2 + 30$ ; $60 = 30 \\times 2 + 0$.\n   Dernier reste non nul : $30$, donc $\\mathrm{PGCD}(150\\,;\\,60) = 30$.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$200 - (4 \\times 14{,}50 + 3 \\times 22)$</li>\n<li>Ordre de grandeur : $4 \\times 15 + 3 \\times 20 = 60 + 60 = 120$ DH environ.</li>\n<li>$4 \\times 14{,}50 = 58$ ; $3 \\times 22 = 66$ ; dépense $= 58 + 66 = 124$ DH.\n   Somme rendue : $200 - 124 = 76$ DH. Le résultat est cohérent avec l'estimation.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>$126 = 90 \\times 1 + 36$ ; $90 = 36 \\times 2 + 18$ ; $36 = 18 \\times 2 + 0$.\n   Donc $\\mathrm{PGCD}(90\\,;\\,126) = 18$ : au maximum <strong>18 bouquets</strong>.</li>\n<li>Chaque bouquet contient $90 \\div 18 = 5$ œillets et $126 \\div 18 = 7$ roses.</li>\n<li>Oui : $9$ est un diviseur de $18$, donc de $90$ et de $126$.\n   Chaque bouquet contiendrait $90 \\div 9 = 10$ œillets et $126 \\div 9 = 14$ roses.</li>\n</ol>"
 }
},

{
 "id": "m02",
 "domaine": "maths",
 "unite": 2,
 "theme": "Numérique et calcul",
 "tag": "M02",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M02 — Les nombres en écriture fractionnaire",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Comprendre ce que représente une fraction.",
  "Reconnaître des écritures fractionnaires égales et simplifier.",
  "Comparer des fractions entre elles et à $1$.",
  "Placer une fraction sur une demi-droite graduée.",
  "Utiliser les fractions décimales et les pourcentages."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>À Casablanca, une pizza est partagée en $8$ parts égales. Salma en mange $3$ parts.\nOn dit qu'elle a mangé <strong>trois huitièmes</strong> de la pizza, ce qui s'écrit :</p>\n<p>$$\\dfrac{3}{8}$$</p>\n<p>Le nombre du bas, $8$, s'appelle le <strong>dénominateur</strong> : il indique en combien de parts\négales on a partagé. Le nombre du haut, $3$, s'appelle le <strong>numérateur</strong> : il indique\ncombien de parts on prend.</p>\n<p>Son frère Nabil a mangé $\\dfrac{2}{4}$ d'une pizza identique. Qui a mangé le plus ?\nPour répondre, il faut savoir <strong>comparer</strong> des fractions.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Trace trois bandes de papier identiques de $12$ cm.\n- Partage la première en $2$ parts égales et colorie $1$ part : tu colories $\\dfrac{1}{2}$, soit $6$ cm.\n- Partage la deuxième en $4$ parts égales et colorie $2$ parts : $\\dfrac{2}{4}$, soit $6$ cm.\n- Partage la troisième en $6$ parts égales et colorie $3$ parts : $\\dfrac{3}{6}$, soit $6$ cm.</p>\n<p><strong>Observation.</strong> Les trois zones coloriées ont exactement la même longueur.</p>\n<p><strong>Conclusion.</strong> $\\dfrac{1}{2} = \\dfrac{2}{4} = \\dfrac{3}{6}$ : un même nombre peut avoir\nplusieurs écritures fractionnaires.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-sens-de-la-fraction\">3.1 Sens de la fraction</h3>\n<blockquote>\n<p><strong>Définition.</strong> Soient $a$ un nombre et $b$ un nombre non nul. Le quotient de $a$ par\n$b$ s'écrit $\\dfrac{a}{b}$. C'est le nombre qui, multiplié par $b$, donne $a$ :\n$$\\dfrac{a}{b} \\times b = a$$</p>\n</blockquote>\n<p>Une fraction a donc deux visages :\n- un <strong>partage</strong> : $\\dfrac{3}{8}$ de la pizza, c'est $3$ parts sur $8$ ;\n- un <strong>quotient</strong> : $\\dfrac{3}{8} = 3 \\div 8 = 0{,}375$.</p>\n<p><strong>Exemple.</strong> Partager $7$ litres de lait entre $4$ familles donne $\\dfrac{7}{4}$ litre par\nfamille, soit $1{,}75$ L.</p>\n<h3 id=\"32-ecritures-fractionnaires-egales\">3.2 Écritures fractionnaires égales</h3>\n<blockquote>\n<p><strong>Propriété.</strong> On ne change pas la valeur d'une fraction si l'on multiplie (ou si l'on\ndivise) son numérateur <strong>et</strong> son dénominateur par un même nombre non nul :\n$$\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k} \\qquad \\text{et} \\qquad \\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> $\\dfrac{3}{5} = \\dfrac{3 \\times 4}{5 \\times 4} = \\dfrac{12}{20}$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Ajouter le même nombre en haut et en bas.\n$\\dfrac{1}{2}$ n'est <strong>pas</strong> égal à $\\dfrac{1+3}{2+3} = \\dfrac{4}{5}$ ! On multiplie ou\non divise, jamais on n'ajoute.</p>\n<h3 id=\"33-simplifier-fraction-irreductible\">3.3 Simplifier, fraction irréductible</h3>\n<p><strong>Méthode (pas à pas).</strong> Simplifier $\\dfrac{36}{48}$ :\n1. Chercher un diviseur commun au numérateur et au dénominateur : $12$ (c'est le PGCD).\n2. Diviser les deux : $\\dfrac{36 \\div 12}{48 \\div 12} = \\dfrac{3}{4}$.\n3. Vérifier : $3$ et $4$ n'ont plus de diviseur commun autre que $1$.</p>\n<blockquote>\n<p><strong>Définition.</strong> Une fraction est <strong>irréductible</strong> lorsqu'on ne peut plus la simplifier,\nc'est-à-dire quand le PGCD du numérateur et du dénominateur vaut $1$.</p>\n</blockquote>\n<p>On peut aussi simplifier par étapes : $\\dfrac{36}{48} = \\dfrac{18}{24} = \\dfrac{9}{12} = \\dfrac{3}{4}$.</p>\n<h3 id=\"34-comparer-des-fractions\">3.4 Comparer des fractions</h3>\n<blockquote>\n<p><strong>Règle 1.</strong> Deux fractions de <strong>même dénominateur</strong> : la plus grande est celle qui a\nle plus grand numérateur. $\\dfrac{5}{9} &gt; \\dfrac{2}{9}$.</p>\n<p><strong>Règle 2.</strong> Deux fractions de <strong>même numérateur</strong> : la plus grande est celle qui a le\nplus <strong>petit</strong> dénominateur. $\\dfrac{3}{5} &gt; \\dfrac{3}{8}$ (les parts sont plus grosses).</p>\n<p><strong>Règle 3.</strong> Dans les autres cas, on <strong>met au même dénominateur</strong>, puis on applique la règle 1.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Comparer $\\dfrac{3}{8}$ et $\\dfrac{2}{4}$.\n$\\dfrac{2}{4} = \\dfrac{4}{8}$. Comme $3 &lt; 4$, on a $\\dfrac{3}{8} &lt; \\dfrac{2}{4}$ :\nNabil a mangé plus que Salma.</p>\n<blockquote>\n<p><strong>Comparaison à 1.</strong> $\\dfrac{a}{b} &lt; 1$ si $a &lt; b$ ; $\\dfrac{a}{b} = 1$ si $a = b$ ;\n$\\dfrac{a}{b} &gt; 1$ si $a &gt; b$ (avec $a$ et $b$ positifs, $b \\neq 0$).</p>\n</blockquote>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire que la fraction avec les plus grands nombres est la plus\ngrande. $\\dfrac{7}{100}$ est bien plus petit que $\\dfrac{1}{2}$.</p>\n<h3 id=\"35-placer-une-fraction-sur-une-demi-droite-graduee\">3.5 Placer une fraction sur une demi-droite graduée</h3>\n<p><strong>Méthode.</strong> Pour placer $\\dfrac{7}{4}$ : le dénominateur est $4$, donc on partage\n<strong>chaque unité</strong> en $4$ parts égales ; puis on compte $7$ parts depuis $0$.</p>\n<pre><code> 0        1        2\n |--+--+--+--+--+--+--+--|\n 0                 ^\n                 7/4  (7 graduations à partir de 0)\n</code></pre>\n<p>Comme $7 = 4 + 3$, le point $\\dfrac{7}{4}$ se trouve entre $1$ et $2$, à $\\dfrac{3}{4}$\naprès $1$.</p>\n<h3 id=\"36-fractions-decimales-et-pourcentages\">3.6 Fractions décimales et pourcentages</h3>\n<blockquote>\n<p><strong>Définition.</strong> Une <strong>fraction décimale</strong> a pour dénominateur $10$, $100$, $1\\,000$…\nElle s'écrit facilement sous forme décimale :\n$$\\dfrac{7}{10} = 0{,}7 \\qquad \\dfrac{45}{100} = 0{,}45 \\qquad \\dfrac{125}{1000} = 0{,}125$$</p>\n<p><strong>Définition.</strong> Un <strong>pourcentage</strong> est une fraction de dénominateur $100$ :\n$$25\\,\\% = \\dfrac{25}{100} = \\dfrac{1}{4} = 0{,}25$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> Un tapis de Fès à $800$ DH est soldé à $-20\\,\\%$.\nRemise : $\\dfrac{20}{100} \\times 800 = 160$ DH. Nouveau prix : $800 - 160 = 640$ DH.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Rendre $\\dfrac{54}{72}$ irréductible.\n<em>Solution.</em> $\\mathrm{PGCD}(54\\,;\\,72) = 18$ car $72 = 54 + 18$, puis $54 = 18 \\times 3$.\n$\\dfrac{54}{72} = \\dfrac{54 \\div 18}{72 \\div 18} = \\dfrac{3}{4}$.</p>\n<p><strong>Exemple 2.</strong> Ranger dans l'ordre croissant $\\dfrac{2}{3}$, $\\dfrac{5}{6}$, $\\dfrac{1}{2}$.\n<em>Solution.</em> Dénominateur commun $6$ : $\\dfrac{2}{3} = \\dfrac{4}{6}$, $\\dfrac{1}{2} = \\dfrac{3}{6}$.\nOn compare $\\dfrac{3}{6} &lt; \\dfrac{4}{6} &lt; \\dfrac{5}{6}$, donc\n$\\dfrac{1}{2} &lt; \\dfrac{2}{3} &lt; \\dfrac{5}{6}$.</p>\n<p><strong>Exemple 3.</strong> Dans une classe d'Agadir de $30$ élèves, $18$ prennent le bus.\nQuelle fraction, quel pourcentage ?\n<em>Solution.</em> $\\dfrac{18}{30} = \\dfrac{18 \\div 6}{30 \\div 6} = \\dfrac{3}{5} = \\dfrac{60}{100} = 60\\,\\%$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>$\\dfrac{a}{b}$ : $b$ = nombre de parts égales, $a$ = nombre de parts prises ; $\\dfrac{a}{b} = a \\div b$.</li>\n<li>On multiplie ou on divise haut <strong>et</strong> bas par le même nombre non nul : la valeur ne change pas.</li>\n<li>Une fraction est irréductible quand le PGCD du numérateur et du dénominateur vaut $1$.</li>\n<li>Même dénominateur → comparer les numérateurs ; sinon, réduire au même dénominateur.</li>\n<li>Dénominateur $100$ ⇔ pourcentage.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Écrire $\\dfrac{1}{3}$ en écriture décimale : que remarques-tu ?</li>\n<li>Trouver toutes les fractions de dénominateur $12$ comprises entre $\\dfrac{1}{4}$ et $\\dfrac{3}{4}$.</li>\n<li>Chercher pourquoi $\\dfrac{a}{b}$ n'a aucun sens quand $b = 0$.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc — programmes du collège</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadres de référence des examens, mathématiques</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"1-vocabulaire\">1. Vocabulaire</h2>\n<p>$$\\dfrac{a}{b} \\quad \\text{avec } b \\neq 0 : \\quad a = \\text{numérateur}, \\quad b = \\text{dénominateur}$$</p>\n<p>$\\dfrac{a}{b}$ est le quotient de $a$ par $b$ : c'est le nombre qui, multiplié par $b$, donne $a$.</p>\n<h2 id=\"2-formules-essentielles\">2. Formules essentielles</h2>\n<table>\n<thead>\n<tr>\n<th>Règle</th>\n<th>Écriture</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Égalité de fractions</td>\n<td>$\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k}$</td>\n<td>$\\dfrac{3}{5} = \\dfrac{12}{20}$</td>\n</tr>\n<tr>\n<td>Simplification</td>\n<td>$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$</td>\n<td>$\\dfrac{36}{48} = \\dfrac{3}{4}$</td>\n</tr>\n<tr>\n<td>Fraction décimale</td>\n<td>$\\dfrac{45}{100} = 0{,}45$</td>\n<td>$\\dfrac{7}{10} = 0{,}7$</td>\n</tr>\n<tr>\n<td>Pourcentage</td>\n<td>$p\\,\\% = \\dfrac{p}{100}$</td>\n<td>$25\\,\\% = \\dfrac{1}{4}$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"3-comparer\">3. Comparer</h2>\n<table>\n<thead>\n<tr>\n<th>Situation</th>\n<th>Règle</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Même dénominateur</td>\n<td>plus grand numérateur = plus grande fraction</td>\n<td>$\\dfrac{5}{9} &gt; \\dfrac{2}{9}$</td>\n</tr>\n<tr>\n<td>Même numérateur</td>\n<td>plus petit dénominateur = plus grande fraction</td>\n<td>$\\dfrac{3}{5} &gt; \\dfrac{3}{8}$</td>\n</tr>\n<tr>\n<td>Cas général</td>\n<td>réduire au même dénominateur</td>\n<td>$\\dfrac{2}{3} = \\dfrac{4}{6} &gt; \\dfrac{3}{6} = \\dfrac{1}{2}$</td>\n</tr>\n<tr>\n<td>Par rapport à $1$</td>\n<td>$a &lt; b \\Rightarrow \\dfrac{a}{b} &lt; 1$</td>\n<td>$\\dfrac{7}{9} &lt; 1$, $\\dfrac{9}{7} &gt; 1$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"4-placer-sur-une-demi-droite-graduee\">4. Placer sur une demi-droite graduée</h2>\n<p>Partager <strong>chaque unité</strong> en autant de parts que l'indique le dénominateur, puis compter\nle numérateur de graduations depuis $0$. Ainsi $\\dfrac{7}{4}$ se place entre $1$ et $2$.</p>\n<h2 id=\"5-fractions-usuelles-a-connaitre\">5. Fractions usuelles à connaître</h2>\n<table>\n<thead>\n<tr>\n<th>Fraction</th>\n<th>Décimal</th>\n<th>Pourcentage</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$\\dfrac{1}{2}$</td>\n<td>$0{,}5$</td>\n<td>$50\\,\\%$</td>\n</tr>\n<tr>\n<td>$\\dfrac{1}{4}$</td>\n<td>$0{,}25$</td>\n<td>$25\\,\\%$</td>\n</tr>\n<tr>\n<td>$\\dfrac{3}{4}$</td>\n<td>$0{,}75$</td>\n<td>$75\\,\\%$</td>\n</tr>\n<tr>\n<td>$\\dfrac{1}{5}$</td>\n<td>$0{,}2$</td>\n<td>$20\\,\\%$</td>\n</tr>\n<tr>\n<td>$\\dfrac{1}{10}$</td>\n<td>$0{,}1$</td>\n<td>$10\\,\\%$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"6-trois-pieges\">6. Trois pièges</h2>\n<ol>\n<li>Ajouter le même nombre en haut et en bas : interdit. $\\dfrac{1}{2} \\neq \\dfrac{4}{5}$.</li>\n<li>Croire que les grands nombres font la grande fraction : $\\dfrac{7}{100} &lt; \\dfrac{1}{2}$.</li>\n<li>Oublier de vérifier que la fraction obtenue est vraiment irréductible\n   (ex. $\\dfrac{36}{48} = \\dfrac{18}{24}$ : ce n'est pas fini !).</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Haut $\\times k$, bas $\\times k$ : même nombre · PGCD $= 1$ ⇒ irréductible ·\nmême dénominateur pour comparer · dénominateur $100$ ⇒ pourcentage.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Lire et écrire",
   "diff": "facile",
   "q": "<ol>\n<li>Écrire en fraction : trois cinquièmes ; sept dixièmes ; onze quarts.</li>\n<li>Pour la fraction $\\dfrac{13}{6}$, donner le numérateur et le dénominateur, puis dire\n   si ce nombre est plus grand ou plus petit que $1$.</li>\n</ol>",
   "modele": "<ol>\n<li>Trois cinquièmes : $\\dfrac{3}{5}$ ; sept dixièmes : $\\dfrac{7}{10}$ ; onze quarts : $\\dfrac{11}{4}$.</li>\n<li>Pour $\\dfrac{13}{6}$ : numérateur $13$, dénominateur $6$.\n   Comme $13 &gt; 6$, on a $\\dfrac{13}{6} &gt; 1$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Compléter des égalités",
   "diff": "facile",
   "q": "<p>Trouver le nombre manquant :\na) $\\dfrac{2}{3} = \\dfrac{\\ldots}{12}$  b) $\\dfrac{5}{4} = \\dfrac{20}{\\ldots}$\nc) $\\dfrac{7}{10} = \\dfrac{\\ldots}{100}$  d) $\\dfrac{3}{8} = \\dfrac{9}{\\ldots}$</p>",
   "modele": "<p>a) $\\dfrac{2}{3} = \\dfrac{2 \\times 4}{3 \\times 4} = \\dfrac{8}{12}$ → $8$\nb) $\\dfrac{5}{4} = \\dfrac{5 \\times 4}{4 \\times 4} = \\dfrac{20}{16}$ → $16$\nc) $\\dfrac{7}{10} = \\dfrac{70}{100}$ → $70$\nd) $\\dfrac{3}{8} = \\dfrac{3 \\times 3}{8 \\times 3} = \\dfrac{9}{24}$ → $24$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Simplifier",
   "diff": "facile",
   "q": "<p>Simplifier au maximum : $\\dfrac{12}{18}$ ; $\\dfrac{25}{40}$ ; $\\dfrac{36}{60}$ ; $\\dfrac{42}{56}$.</p>",
   "modele": "<p>$\\dfrac{12}{18} = \\dfrac{12 \\div 6}{18 \\div 6} = \\dfrac{2}{3}$ ;\n$\\dfrac{25}{40} = \\dfrac{25 \\div 5}{40 \\div 5} = \\dfrac{5}{8}$ ;\n$\\dfrac{36}{60} = \\dfrac{36 \\div 12}{60 \\div 12} = \\dfrac{3}{5}$ ;\n$\\dfrac{42}{56} = \\dfrac{42 \\div 14}{56 \\div 14} = \\dfrac{3}{4}$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Comparer",
   "diff": "facile",
   "q": "<p>Compléter avec $&lt;$ ou $&gt;$ :\na) $\\dfrac{5}{7} \\ldots \\dfrac{3}{7}$  b) $\\dfrac{4}{9} \\ldots \\dfrac{4}{5}$\nc) $\\dfrac{3}{4} \\ldots 1$  d) $\\dfrac{11}{8} \\ldots 1$</p>",
   "modele": "<p>a) $\\dfrac{5}{7} &gt; \\dfrac{3}{7}$ (même dénominateur, $5 &gt; 3$)\nb) $\\dfrac{4}{9} &lt; \\dfrac{4}{5}$ (même numérateur, $9 &gt; 5$ donc parts plus petites)\nc) $\\dfrac{3}{4} &lt; 1$ car $3 &lt; 4$\nd) $\\dfrac{11}{8} &gt; 1$ car $11 &gt; 8$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Fractions décimales",
   "diff": "facile",
   "q": "<ol>\n<li>Écrire sous forme décimale : $\\dfrac{9}{10}$ ; $\\dfrac{37}{100}$ ; $\\dfrac{5}{1000}$.</li>\n<li>Écrire sous forme de fraction irréductible : $0{,}6$ ; $0{,}48$.</li>\n</ol>",
   "modele": "<ol>\n<li>$\\dfrac{9}{10} = 0{,}9$ ; $\\dfrac{37}{100} = 0{,}37$ ; $\\dfrac{5}{1000} = 0{,}005$.</li>\n<li>$0{,}6 = \\dfrac{6}{10} = \\dfrac{3}{5}$ ; $0{,}48 = \\dfrac{48}{100} = \\dfrac{12}{25}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Pourcentages",
   "diff": "facile",
   "q": "<ol>\n<li>Calculer $40\\,\\%$ de $250$ DH, puis $15\\,\\%$ de $60$ élèves.</li>\n<li>Écrire $\\dfrac{3}{4}$ et $\\dfrac{1}{5}$ sous forme de pourcentage.</li>\n</ol>",
   "modele": "<ol>\n<li>$40\\,\\%$ de $250 = \\dfrac{40}{100} \\times 250 = 0{,}4 \\times 250 = 100$ DH.\n   $15\\,\\%$ de $60 = \\dfrac{15}{100} \\times 60 = 9$ élèves.</li>\n<li>$\\dfrac{3}{4} = \\dfrac{75}{100} = 75\\,\\%$ ; $\\dfrac{1}{5} = \\dfrac{20}{100} = 20\\,\\%$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Fractions irréductibles",
   "diff": "",
   "q": "<p>Rendre irréductible en indiquant le PGCD utilisé :\n$\\dfrac{54}{81}$ ; $\\dfrac{84}{126}$ ; $\\dfrac{75}{100}$ ; $\\dfrac{120}{144}$.</p>",
   "modele": "<ul>\n<li>$\\mathrm{PGCD}(54\\,;\\,81) = 27$ : $\\dfrac{54}{81} = \\dfrac{2}{3}$.</li>\n<li>$\\mathrm{PGCD}(84\\,;\\,126) = 42$ : $\\dfrac{84}{126} = \\dfrac{2}{3}$.</li>\n<li>$\\mathrm{PGCD}(75\\,;\\,100) = 25$ : $\\dfrac{75}{100} = \\dfrac{3}{4}$.</li>\n<li>$\\mathrm{PGCD}(120\\,;\\,144) = 24$ : $\\dfrac{120}{144} = \\dfrac{5}{6}$.</li>\n</ul>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Ranger dans l'ordre",
   "diff": "",
   "q": "<p>Ranger dans l'ordre croissant : $\\dfrac{3}{4}$ ; $\\dfrac{5}{8}$ ; $\\dfrac{7}{12}$ ; $\\dfrac{1}{2}$.\nDétailler la mise au même dénominateur.</p>",
   "modele": "<p>Dénominateur commun : $24$.\n$\\dfrac{3}{4} = \\dfrac{18}{24}$ ; $\\dfrac{5}{8} = \\dfrac{15}{24}$ ;\n$\\dfrac{7}{12} = \\dfrac{14}{24}$ ; $\\dfrac{1}{2} = \\dfrac{12}{24}$.\nOn compare les numérateurs : $12 &lt; 14 &lt; 15 &lt; 18$, donc\n$$\\dfrac{1}{2} &lt; \\dfrac{7}{12} &lt; \\dfrac{5}{8} &lt; \\dfrac{3}{4}$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Demi-droite graduée",
   "diff": "",
   "q": "<p>Sur une demi-droite graduée où l'unité mesure $10$ carreaux, placer les points :\n$A\\left(\\dfrac{3}{10}\\right)$, $B\\left(\\dfrac{1}{2}\\right)$, $C\\left(\\dfrac{7}{10}\\right)$,\n$D\\left(\\dfrac{14}{10}\\right)$. Décrire la position de chaque point par rapport à $0$ et à $1$.</p>",
   "modele": "<p>Chaque unité est partagée en $10$ carreaux, donc un carreau vaut $\\dfrac{1}{10}$.\n- $A\\left(\\dfrac{3}{10}\\right)$ : $3$ carreaux après $0$, entre $0$ et $1$.\n- $B\\left(\\dfrac{1}{2}\\right) = \\dfrac{5}{10}$ : $5$ carreaux, au milieu de $[0\\,;\\,1]$.\n- $C\\left(\\dfrac{7}{10}\\right)$ : $7$ carreaux, entre $B$ et $1$.\n- $D\\left(\\dfrac{14}{10}\\right) = 1{,}4$ : $4$ carreaux après $1$, entre $1$ et $2$.</p>\n<pre><code> 0    A    B    C    1        D    2\n |--+-*-+--*-+--*-+--|--+--+--*--+--|\n</code></pre>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Fraction d'une quantité",
   "diff": "",
   "q": "<p>Calculer :\na) $\\dfrac{2}{5}$ de $45$ minutes  b) $\\dfrac{3}{8}$ de $120$ DH  c) $\\dfrac{5}{6}$ de $54$ kg</p>",
   "modele": "<p>a) $\\dfrac{2}{5}$ de $45 = 45 \\div 5 \\times 2 = 9 \\times 2 = 18$ minutes.\nb) $\\dfrac{3}{8}$ de $120 = 120 \\div 8 \\times 3 = 15 \\times 3 = 45$ DH.\nc) $\\dfrac{5}{6}$ de $54 = 54 \\div 6 \\times 5 = 9 \\times 5 = 45$ kg.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Encadrer",
   "diff": "",
   "q": "<p>Encadrer chaque nombre entre deux entiers consécutifs :\n$\\dfrac{17}{5}$ ; $\\dfrac{43}{9}$ ; $\\dfrac{100}{7}$.</p>",
   "modele": "<p>$17 = 5 \\times 3 + 2$, donc $3 &lt; \\dfrac{17}{5} &lt; 4$.\n$43 = 9 \\times 4 + 7$, donc $4 &lt; \\dfrac{43}{9} &lt; 5$.\n$100 = 7 \\times 14 + 2$, donc $14 &lt; \\dfrac{100}{7} &lt; 15$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Vrai ou faux",
   "diff": "",
   "q": "<p>Répondre par vrai ou faux <strong>en justifiant</strong> :\na) $\\dfrac{3}{7} = \\dfrac{6}{14}$  b) $\\dfrac{2}{3} = \\dfrac{5}{6}$\nc) $\\dfrac{15}{25}$ est irréductible  d) $\\dfrac{9}{4} &gt; 2$</p>",
   "modele": "<p>a) <strong>Vrai</strong> : $\\dfrac{3}{7} = \\dfrac{3 \\times 2}{7 \\times 2} = \\dfrac{6}{14}$.\nb) <strong>Faux</strong> : $\\dfrac{2}{3} = \\dfrac{4}{6}$ et $4 \\neq 5$.\nc) <strong>Faux</strong> : $\\dfrac{15}{25} = \\dfrac{3}{5}$, on pouvait encore simplifier par $5$.\nd) <strong>Vrai</strong> : $\\dfrac{9}{4} = 2{,}25 &gt; 2$ (car $2 = \\dfrac{8}{4}$ et $9 &gt; 8$).</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Une classe de Rabat",
   "diff": "difficile",
   "q": "<p>Une classe compte $40$ élèves, dont $24$ filles.\n1. Quelle fraction irréductible des élèves sont des filles ?\n2. Exprimer ce résultat en pourcentage.\n3. Faire de même pour les garçons.</p>",
   "modele": "<ol>\n<li>$\\dfrac{24}{40} = \\dfrac{24 \\div 8}{40 \\div 8} = \\dfrac{3}{5}$ des élèves sont des filles.</li>\n<li>$\\dfrac{3}{5} = \\dfrac{60}{100} = 60\\,\\%$.</li>\n<li>Garçons : $40 - 24 = 16$, soit $\\dfrac{16}{40} = \\dfrac{2}{5} = 40\\,\\%$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Le marchand de pastèques",
   "diff": "difficile",
   "q": "<p>Un commerçant de Marrakech a $96$ pastèques. Il en vend $\\dfrac{3}{4}$ dans la journée.\n1. Combien en a-t-il vendu ?\n2. Combien lui en reste-t-il ? Quelle fraction du stock cela représente-t-il ?</p>",
   "modele": "<ol>\n<li>$\\dfrac{3}{4}$ de $96 = 96 \\div 4 \\times 3 = 24 \\times 3 = 72$ pastèques vendues.</li>\n<li>Il reste $96 - 72 = 24$ pastèques, soit $\\dfrac{24}{96} = \\dfrac{1}{4}$ du stock.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Le terrain de sport",
   "diff": "difficile",
   "q": "<p>Un terrain de sport de $800$ m² est composé de $\\dfrac{3}{8}$ de gazon et de $\\dfrac{1}{4}$\nde piste ; le reste est en béton.\n1. Calculer l'aire du gazon et celle de la piste.\n2. Quelle partie est la plus grande : le gazon ou la piste ? Justifier par comparaison de fractions.\n3. Calculer l'aire de la partie en béton.</p>",
   "modele": "<ol>\n<li>Gazon : $\\dfrac{3}{8}$ de $800 = 800 \\div 8 \\times 3 = 100 \\times 3 = 300$ m².\n   Piste : $\\dfrac{1}{4}$ de $800 = 200$ m².</li>\n<li>$\\dfrac{1}{4} = \\dfrac{2}{8}$ et $\\dfrac{3}{8} &gt; \\dfrac{2}{8}$ : le <strong>gazon</strong> est la plus grande partie.</li>\n<li>Béton : $800 - (300 + 200) = 800 - 500 = 300$ m².</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Soldes à Casablanca",
   "diff": "difficile",
   "q": "<p>Une veste coûte $450$ DH et bénéficie d'une remise de $20\\,\\%$.\nUn pantalon coûte $300$ DH et bénéficie d'une remise du quart de son prix.\n1. Calculer le prix payé pour chaque article.\n2. Quel article bénéficie de la plus forte remise <strong>en pourcentage</strong> ? Justifier.</p>",
   "modele": "<ol>\n<li>Veste : remise $= \\dfrac{20}{100} \\times 450 = 90$ DH ; prix payé $= 450 - 90 = 360$ DH.\n   Pantalon : remise $= \\dfrac{1}{4} \\times 300 = 75$ DH ; prix payé $= 300 - 75 = 225$ DH.</li>\n<li>$\\dfrac{1}{4} = 25\\,\\%$ et $25\\,\\% &gt; 20\\,\\%$ : le <strong>pantalon</strong> bénéficie de la plus forte\n   remise en pourcentage, même si la remise en dirhams est plus petite.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Sur la route de Marrakech",
   "diff": "difficile",
   "q": "<p>La distance Casablanca–Marrakech est de $240$ km. Un car a déjà parcouru $\\dfrac{3}{5}$ du trajet.\n1. Combien de kilomètres a-t-il parcourus ?\n2. Quelle fraction du trajet reste-t-il ? À combien de kilomètres cela correspond-il ?</p>",
   "modele": "<ol>\n<li>$\\dfrac{3}{5}$ de $240 = 240 \\div 5 \\times 3 = 48 \\times 3 = 144$ km parcourus.</li>\n<li>Il reste $1 - \\dfrac{3}{5} = \\dfrac{2}{5}$ du trajet, soit $240 - 144 = 96$ km.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Chercher toutes les fractions",
   "diff": "difficile",
   "q": "<p>Trouver toutes les fractions de dénominateur $12$ strictement comprises entre $\\dfrac{1}{3}$\net $\\dfrac{3}{4}$. Préciser lesquelles peuvent être simplifiées.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Comprendre le vocabulaire</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Produire des fractions égales</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Simplifier</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Comparer</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Passer fraction ↔ décimal</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Utiliser les pourcentages</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Rendre irréductible</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Ordonner des fractions</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Représenter sur une demi-droite</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Calculer une fraction d'une quantité</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Encadrer un quotient</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Justifier une égalité</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser un effectif</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Résoudre un problème de proportion</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Comparer et calculer des aires</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Comparer deux remises</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Modéliser un trajet</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Chercher, raisonner</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<p>On écrit les bornes avec le dénominateur $12$ :\n$\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{3}{4} = \\dfrac{9}{12}$.\nLes fractions strictement comprises entre les deux sont :\n$$\\dfrac{5}{12}\\,;\\quad \\dfrac{6}{12}\\,;\\quad \\dfrac{7}{12}\\,;\\quad \\dfrac{8}{12}$$\nParmi elles, $\\dfrac{6}{12} = \\dfrac{1}{2}$ et $\\dfrac{8}{12} = \\dfrac{2}{3}$ se simplifient ;\n$\\dfrac{5}{12}$ et $\\dfrac{7}{12}$ sont déjà irréductibles.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M02",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Calculatrice non autorisée</p>\n<h2 id=\"exercice-1-5-points-simplifier-et-completer\">Exercice 1 (5 points) — Simplifier et compléter</h2>\n<ol>\n<li>Rendre irréductibles : $\\dfrac{45}{60}$ ; $\\dfrac{28}{63}$ ; $\\dfrac{96}{144}$.</li>\n<li>Compléter : $\\dfrac{4}{5} = \\dfrac{\\ldots}{100}$ et $\\dfrac{7}{4} = \\dfrac{21}{\\ldots}$.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>trois simplifications correctes (1 pt chacune)</td>\n<td>3</td>\n</tr>\n<tr>\n<td>2</td>\n<td>deux nombres manquants corrects (1 pt chacun)</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-comparer-et-ranger\">Exercice 2 (5 points) — Comparer et ranger</h2>\n<ol>\n<li>Comparer $\\dfrac{5}{6}$ et $\\dfrac{7}{9}$ en détaillant la mise au même dénominateur.</li>\n<li>Ranger dans l'ordre décroissant : $\\dfrac{2}{3}$ ; $\\dfrac{3}{4}$ ; $\\dfrac{5}{12}$ ; $\\dfrac{1}{2}$.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>dénominateur commun $18$ et conclusion</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>mise au dénominateur $12$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>rangement correct</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-la-cooperative-dhuile-dargan\">Exercice 3 (5 points) — La coopérative d'huile d'argan</h2>\n<p>Une coopérative d'Essaouira produit $180$ litres d'huile d'argan.\nElle vend $\\dfrac{2}{5}$ de sa production à Agadir et $\\dfrac{1}{4}$ à Casablanca.\n1. Calculer le nombre de litres vendus dans chaque ville.\n2. Quelle ville a acheté le plus ? Justifier par une comparaison de fractions.\n3. Combien de litres reste-t-il ?</p>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$72$ L et $45$ L, calculs détaillés</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>comparaison $\\dfrac{8}{20}$ et $\\dfrac{5}{20}$, conclusion Agadir</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>reste $63$ L</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points-fractions-decimaux-et-pourcentages\">Exercice 4 (5 points) — Fractions, décimaux et pourcentages</h2>\n<ol>\n<li>Écrire $\\dfrac{3}{20}$ sous forme décimale puis en pourcentage.</li>\n<li>Un téléphone coûte $1\\,200$ DH. Il est soldé à $-35\\,\\%$. Calculer le prix soldé.</li>\n<li>Sur une demi-droite graduée d'unité $6$ carreaux, expliquer où placer le point\n   d'abscisse $\\dfrac{8}{6}$.</li>\n</ol>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$0{,}15$ et $15\\,\\%$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>remise $420$ DH, prix $780$ DH</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3</td>\n<td>explication correcte (entre $1$ et $2$)</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>$\\dfrac{45}{60} = \\dfrac{45 \\div 15}{60 \\div 15} = \\dfrac{3}{4}$ ;\n   $\\dfrac{28}{63} = \\dfrac{28 \\div 7}{63 \\div 7} = \\dfrac{4}{9}$ ;\n   $\\dfrac{96}{144} = \\dfrac{96 \\div 48}{144 \\div 48} = \\dfrac{2}{3}$.</li>\n<li>$\\dfrac{4}{5} = \\dfrac{4 \\times 20}{5 \\times 20} = \\dfrac{80}{100}$ → $80$.\n   $\\dfrac{7}{4} = \\dfrac{7 \\times 3}{4 \\times 3} = \\dfrac{21}{12}$ → $12$.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>Dénominateur commun $18$ : $\\dfrac{5}{6} = \\dfrac{15}{18}$ et $\\dfrac{7}{9} = \\dfrac{14}{18}$.\n   Comme $15 &gt; 14$, on a $\\dfrac{5}{6} &gt; \\dfrac{7}{9}$.</li>\n<li>Dénominateur commun $12$ : $\\dfrac{2}{3} = \\dfrac{8}{12}$ ; $\\dfrac{3}{4} = \\dfrac{9}{12}$ ;\n   $\\dfrac{5}{12}$ ; $\\dfrac{1}{2} = \\dfrac{6}{12}$.\n   Ordre décroissant : $\\dfrac{3}{4} &gt; \\dfrac{2}{3} &gt; \\dfrac{1}{2} &gt; \\dfrac{5}{12}$.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>Agadir : $\\dfrac{2}{5}$ de $180 = 180 \\div 5 \\times 2 = 36 \\times 2 = 72$ litres.\n   Casablanca : $\\dfrac{1}{4}$ de $180 = 45$ litres.</li>\n<li>$\\dfrac{2}{5} = \\dfrac{8}{20}$ et $\\dfrac{1}{4} = \\dfrac{5}{20}$. Comme $8 &gt; 5$,\n   <strong>Agadir</strong> a acheté davantage.</li>\n<li>Reste : $180 - (72 + 45) = 180 - 117 = 63$ litres.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>$\\dfrac{3}{20} = \\dfrac{15}{100} = 0{,}15 = 15\\,\\%$.</li>\n<li>Remise : $\\dfrac{35}{100} \\times 1\\,200 = 0{,}35 \\times 1\\,200 = 420$ DH.\n   Prix soldé : $1\\,200 - 420 = 780$ DH.</li>\n<li>L'unité est partagée en $6$ carreaux, donc un carreau vaut $\\dfrac{1}{6}$.\n   Comme $8 = 6 + 2$, on compte $8$ carreaux depuis $0$ : le point est situé entre $1$ et $2$,\n   à deux carreaux après $1$ (soit $\\dfrac{2}{6} = \\dfrac{1}{3}$ après $1$).</li>\n</ol>"
 }
},

{
 "id": "m03",
 "domaine": "maths",
 "unite": 3,
 "theme": "Numérique et calcul",
 "tag": "M03",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M03 — Opérations sur les nombres en écriture fractionnaire",
 "duree": "8 h",
 "semestre": "1",
 "objectifs": [
  "Additionner et soustraire des fractions, d'abord de même dénominateur.",
  "Réduire au même dénominateur quand l'un est multiple de l'autre.",
  "Multiplier deux fractions et simplifier avant de calculer.",
  "Reconnaître l'inverse d'un nombre et diviser par une fraction.",
  "Calculer une expression avec fractions en respectant les priorités."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Pour préparer une chebakia, la maman de Yasmine utilise $\\dfrac{1}{4}$ de kilogramme de\nmiel le matin et $\\dfrac{3}{8}$ de kilogramme l'après-midi.</p>\n<p>Combien de miel a-t-elle utilisé en tout ? On ne peut pas simplement additionner $1$ et\n$3$ : les parts n'ont pas la même taille. Il faut d'abord exprimer les deux quantités avec\n<strong>le même dénominateur</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Dessine deux bandes identiques de $8$ carreaux (chaque carreau vaut $\\dfrac{1}{8}$).\n- Colorie $\\dfrac{1}{4}$ de la première bande : cela fait $2$ carreaux, donc $\\dfrac{1}{4} = \\dfrac{2}{8}$.\n- Colorie $\\dfrac{3}{8}$ de la seconde : $3$ carreaux.\n- Mets les carreaux coloriés bout à bout : tu obtiens $5$ carreaux.</p>\n<p><strong>Observation.</strong> $\\dfrac{2}{8} + \\dfrac{3}{8} = \\dfrac{5}{8}$.</p>\n<p><strong>Conclusion.</strong> $\\dfrac{1}{4} + \\dfrac{3}{8} = \\dfrac{5}{8}$ : la maman a utilisé\n$\\dfrac{5}{8}$ de kilogramme de miel, soit $625$ g.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-somme-et-difference-de-fractions-de-meme-denominateur\">3.1 Somme et différence de fractions de même dénominateur</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Pour $c \\neq 0$ :\n$$\\dfrac{a}{c} + \\dfrac{b}{c} = \\dfrac{a + b}{c} \\qquad \\text{et} \\qquad \\dfrac{a}{c} - \\dfrac{b}{c} = \\dfrac{a - b}{c}$$</p>\n</blockquote>\n<p>On additionne (ou on soustrait) <strong>les numérateurs</strong>, et on garde le dénominateur.</p>\n<p><strong>Exemple.</strong> $\\dfrac{5}{9} + \\dfrac{2}{9} = \\dfrac{7}{9}$ ; $\\dfrac{11}{6} - \\dfrac{5}{6} = \\dfrac{6}{6} = 1$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Additionner aussi les dénominateurs.\n$\\dfrac{1}{3} + \\dfrac{1}{3}$ vaut $\\dfrac{2}{3}$, et <strong>non</strong> $\\dfrac{2}{6}$.</p>\n<h3 id=\"32-denominateurs-differents-lun-multiple-de-lautre\">3.2 Dénominateurs différents (l'un multiple de l'autre)</h3>\n<p><strong>Méthode (pas à pas).</strong> Calculer $\\dfrac{5}{6} - \\dfrac{1}{3}$ :\n1. Repérer que $6$ est un multiple de $3$ : $6 = 3 \\times 2$.\n2. Transformer $\\dfrac{1}{3}$ : $\\dfrac{1}{3} = \\dfrac{1 \\times 2}{3 \\times 2} = \\dfrac{2}{6}$.\n3. Soustraire : $\\dfrac{5}{6} - \\dfrac{2}{6} = \\dfrac{3}{6}$.\n4. Simplifier : $\\dfrac{3}{6} = \\dfrac{1}{2}$.</p>\n<p>Un entier s'écrit aussi en fraction : $2 = \\dfrac{2}{1} = \\dfrac{10}{5}$.\nAinsi $2 + \\dfrac{3}{5} = \\dfrac{10}{5} + \\dfrac{3}{5} = \\dfrac{13}{5}$.</p>\n<h3 id=\"33-produit-de-deux-fractions\">3.3 Produit de deux fractions</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Pour $b \\neq 0$ et $d \\neq 0$ :\n$$\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$$</p>\n</blockquote>\n<p>On multiplie les numérateurs entre eux et les dénominateurs entre eux. Ici, <strong>pas besoin</strong>\ndu même dénominateur.</p>\n<p><strong>Exemple.</strong> $\\dfrac{2}{3} \\times \\dfrac{5}{7} = \\dfrac{10}{21}$.</p>\n<p><strong>Astuce : simplifier avant de multiplier.</strong>\n$$\\dfrac{4}{9} \\times \\dfrac{3}{8} = \\dfrac{4 \\times 3}{9 \\times 8} = \\dfrac{12}{72} = \\dfrac{1}{6}$$\nPlus rapide : on simplifie $4$ avec $8$ (par $4$) et $3$ avec $9$ (par $3$) :\n$\\dfrac{1}{3} \\times \\dfrac{1}{2} = \\dfrac{1}{6}$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Chercher un dénominateur commun pour une <strong>multiplication</strong>.\nC'est inutile : le dénominateur commun ne sert que pour $+$ et $-$.</p>\n<h3 id=\"34-inverse-dun-nombre\">3.4 Inverse d'un nombre</h3>\n<blockquote>\n<p><strong>Définition.</strong> L'<strong>inverse</strong> d'un nombre non nul $a$ est le nombre qui, multiplié par\n$a$, donne $1$. L'inverse de $\\dfrac{a}{b}$ (avec $a \\neq 0$) est $\\dfrac{b}{a}$.</p>\n</blockquote>\n<p><strong>Exemples.</strong> L'inverse de $\\dfrac{3}{5}$ est $\\dfrac{5}{3}$, car\n$\\dfrac{3}{5} \\times \\dfrac{5}{3} = \\dfrac{15}{15} = 1$.\nL'inverse de $4$ est $\\dfrac{1}{4}$. Le nombre $0$ n'a pas d'inverse.</p>\n<h3 id=\"35-quotient-de-deux-fractions\">3.5 Quotient de deux fractions</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Diviser par un nombre non nul, c'est multiplier par son inverse :\n$$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> $\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3}{4} \\times \\dfrac{5}{2} = \\dfrac{15}{8}$.</p>\n<p><strong>Exemple concret.</strong> Combien de bouteilles de $\\dfrac{3}{4}$ L peut-on remplir avec $6$ L\nd'huile d'olive ? $6 \\div \\dfrac{3}{4} = 6 \\times \\dfrac{4}{3} = \\dfrac{24}{3} = 8$ bouteilles.</p>\n<h3 id=\"36-priorites-operatoires-avec-des-fractions\">3.6 Priorités opératoires avec des fractions</h3>\n<p>Les règles de M01 restent valables : parenthèses, puis $\\times$ et $\\div$, puis $+$ et $-$.</p>\n<p><strong>Exemple.</strong> $\\dfrac{1}{2} + \\dfrac{2}{3} \\times \\dfrac{3}{4}$\n$= \\dfrac{1}{2} + \\dfrac{6}{12} = \\dfrac{1}{2} + \\dfrac{1}{2} = 1$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Calculer $A = \\dfrac{7}{10} - \\dfrac{1}{5} + \\dfrac{3}{10}$.\n<em>Solution.</em> $\\dfrac{1}{5} = \\dfrac{2}{10}$, donc\n$A = \\dfrac{7}{10} - \\dfrac{2}{10} + \\dfrac{3}{10} = \\dfrac{5}{10} + \\dfrac{3}{10} = \\dfrac{8}{10} = \\dfrac{4}{5}$.</p>\n<p><strong>Exemple 2.</strong> Calculer $B = \\left(\\dfrac{2}{3} + \\dfrac{1}{6}\\right) \\times \\dfrac{4}{5}$.\n<em>Solution.</em> Parenthèse d'abord : $\\dfrac{2}{3} = \\dfrac{4}{6}$, donc\n$\\dfrac{4}{6} + \\dfrac{1}{6} = \\dfrac{5}{6}$.\nPuis $B = \\dfrac{5}{6} \\times \\dfrac{4}{5} = \\dfrac{20}{30} = \\dfrac{2}{3}$.</p>\n<p><strong>Exemple 3.</strong> Un tapis de Fès mesure $\\dfrac{5}{2}$ m de long et $\\dfrac{6}{5}$ m de large.\nQuelle est son aire ?\n<em>Solution.</em> Aire $= \\dfrac{5}{2} \\times \\dfrac{6}{5} = \\dfrac{30}{10} = 3$ m².</p>\n<p><strong>Exemple 4.</strong> Un maçon d'Agadir a construit $\\dfrac{2}{5}$ d'un mur lundi et $\\dfrac{1}{4}$\nmardi. Quelle fraction reste-t-il ?\n<em>Solution.</em> Dénominateur commun $20$ : $\\dfrac{2}{5} = \\dfrac{8}{20}$ et $\\dfrac{1}{4} = \\dfrac{5}{20}$.\nFait : $\\dfrac{13}{20}$. Reste : $1 - \\dfrac{13}{20} = \\dfrac{20}{20} - \\dfrac{13}{20} = \\dfrac{7}{20}$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>$+$ et $-$ : <strong>même dénominateur obligatoire</strong>, on n'ajoute que les numérateurs.</li>\n<li>$\\times$ : haut par haut, bas par bas ; on simplifie <strong>avant</strong> de multiplier.</li>\n<li>Inverse de $\\dfrac{a}{b}$ : $\\dfrac{b}{a}$ ; $0$ n'a pas d'inverse.</li>\n<li>Diviser, c'est multiplier par l'inverse.</li>\n<li>Priorités : parenthèses, puis $\\times$ et $\\div$, puis $+$ et $-$.</li>\n<li>On donne toujours le résultat sous forme irréductible.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Calculer $\\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\dfrac{1}{16}$ : de quel nombre se rapproche-t-on ?</li>\n<li>Vérifier que $\\dfrac{1}{2} \\times \\dfrac{1}{3} &lt; \\dfrac{1}{2}$ : multiplier peut donc diminuer !</li>\n<li>Trouver deux fractions dont la somme vaut $1$ et le produit $\\dfrac{2}{9}$.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc — programmes du collège</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadres de référence des examens, mathématiques</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"1-tableau-des-formules\">1. Tableau des formules</h2>\n<table>\n<thead>\n<tr>\n<th>Opération</th>\n<th>Règle</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Somme (même dénominateur)</td>\n<td>$\\dfrac{a}{c} + \\dfrac{b}{c} = \\dfrac{a+b}{c}$</td>\n<td>$\\dfrac{5}{9} + \\dfrac{2}{9} = \\dfrac{7}{9}$</td>\n</tr>\n<tr>\n<td>Différence (même dénominateur)</td>\n<td>$\\dfrac{a}{c} - \\dfrac{b}{c} = \\dfrac{a-b}{c}$</td>\n<td>$\\dfrac{11}{6} - \\dfrac{5}{6} = 1$</td>\n</tr>\n<tr>\n<td>Dénominateurs différents</td>\n<td>on transforme la fraction dont le dénominateur divise l'autre</td>\n<td>$\\dfrac{1}{3} + \\dfrac{5}{6} = \\dfrac{2}{6} + \\dfrac{5}{6} = \\dfrac{7}{6}$</td>\n</tr>\n<tr>\n<td>Produit</td>\n<td>$\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$</td>\n<td>$\\dfrac{2}{3} \\times \\dfrac{5}{7} = \\dfrac{10}{21}$</td>\n</tr>\n<tr>\n<td>Inverse</td>\n<td>inverse de $\\dfrac{a}{b}$ : $\\dfrac{b}{a}$</td>\n<td>inverse de $\\dfrac{3}{5}$ : $\\dfrac{5}{3}$</td>\n</tr>\n<tr>\n<td>Quotient</td>\n<td>$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$</td>\n<td>$\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{15}{8}$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"2-definitions-cles\">2. Définitions clés</h2>\n<ul>\n<li><strong>Inverse</strong> : deux nombres sont inverses l'un de l'autre quand leur produit vaut $1$.\n  Le nombre $0$ n'a pas d'inverse.</li>\n<li><strong>Écrire un entier en fraction</strong> : $3 = \\dfrac{3}{1} = \\dfrac{12}{4}$. Indispensable pour\n  calculer $3 - \\dfrac{1}{4}$.</li>\n<li><strong>Fraction d'une quantité</strong> : « $\\dfrac{3}{5}$ de $200$ » signifie $\\dfrac{3}{5} \\times 200 = 120$.</li>\n</ul>\n<h2 id=\"3-ordre-des-calculs\">3. Ordre des calculs</h2>\n<ol>\n<li>Parenthèses.</li>\n<li>Multiplications et divisions, de gauche à droite.</li>\n<li>Additions et soustractions, de gauche à droite.</li>\n<li>Simplifier le résultat final.</li>\n</ol>\n<p>$$\\dfrac{1}{2} + \\dfrac{2}{3} \\times \\dfrac{3}{4} = \\dfrac{1}{2} + \\dfrac{1}{2} = 1$$</p>\n<h2 id=\"4-trois-pieges\">4. Trois pièges</h2>\n<ol>\n<li><strong>Additionner les dénominateurs</strong> : $\\dfrac{1}{3} + \\dfrac{1}{3} = \\dfrac{2}{3}$, jamais $\\dfrac{2}{6}$.</li>\n<li><strong>Chercher un dénominateur commun pour multiplier</strong> : inutile, on multiplie directement.</li>\n<li><strong>Oublier de simplifier</strong> le résultat : $\\dfrac{20}{30}$ doit être rendu sous la forme $\\dfrac{2}{3}$.</li>\n</ol>\n<h2 id=\"5-methode-express-pour-une-somme\">5. Méthode express pour une somme</h2>\n<p>Repérer si un dénominateur est multiple de l'autre → multiplier haut et bas de la petite\nfraction → additionner les numérateurs → simplifier.</p>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>$+$ et $-$ : même dénominateur · $\\times$ : tout droit, simplifier avant ·\n$\\div$ : je multiplie par l'inverse · résultat toujours irréductible.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Même dénominateur",
   "diff": "facile",
   "q": "<p>Calculer :\na) $\\dfrac{3}{7} + \\dfrac{2}{7}$  b) $\\dfrac{9}{11} - \\dfrac{4}{11}$  c) $\\dfrac{5}{8} + \\dfrac{7}{8}$  d) $\\dfrac{13}{6} - \\dfrac{1}{6}$</p>",
   "modele": "<p>a) $\\dfrac{3}{7} + \\dfrac{2}{7} = \\dfrac{5}{7}$\nb) $\\dfrac{9}{11} - \\dfrac{4}{11} = \\dfrac{5}{11}$\nc) $\\dfrac{5}{8} + \\dfrac{7}{8} = \\dfrac{12}{8} = \\dfrac{3}{2}$\nd) $\\dfrac{13}{6} - \\dfrac{1}{6} = \\dfrac{12}{6} = 2$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Un dénominateur multiple de l'autre",
   "diff": "facile",
   "q": "<p>Calculer :\na) $\\dfrac{1}{2} + \\dfrac{3}{4}$  b) $\\dfrac{5}{6} - \\dfrac{1}{3}$  c) $\\dfrac{2}{5} + \\dfrac{3}{10}$  d) $\\dfrac{7}{12} - \\dfrac{1}{4}$</p>",
   "modele": "<p>a) $\\dfrac{1}{2} + \\dfrac{3}{4} = \\dfrac{2}{4} + \\dfrac{3}{4} = \\dfrac{5}{4}$\nb) $\\dfrac{5}{6} - \\dfrac{1}{3} = \\dfrac{5}{6} - \\dfrac{2}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$\nc) $\\dfrac{2}{5} + \\dfrac{3}{10} = \\dfrac{4}{10} + \\dfrac{3}{10} = \\dfrac{7}{10}$\nd) $\\dfrac{7}{12} - \\dfrac{1}{4} = \\dfrac{7}{12} - \\dfrac{3}{12} = \\dfrac{4}{12} = \\dfrac{1}{3}$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Avec un nombre entier",
   "diff": "facile",
   "q": "<p>Calculer :\na) $2 + \\dfrac{1}{3}$  b) $1 - \\dfrac{3}{8}$  c) $3 - \\dfrac{5}{4}$  d) $\\dfrac{5}{6} + 1$</p>",
   "modele": "<p>a) $2 + \\dfrac{1}{3} = \\dfrac{6}{3} + \\dfrac{1}{3} = \\dfrac{7}{3}$\nb) $1 - \\dfrac{3}{8} = \\dfrac{8}{8} - \\dfrac{3}{8} = \\dfrac{5}{8}$\nc) $3 - \\dfrac{5}{4} = \\dfrac{12}{4} - \\dfrac{5}{4} = \\dfrac{7}{4}$\nd) $\\dfrac{5}{6} + 1 = \\dfrac{5}{6} + \\dfrac{6}{6} = \\dfrac{11}{6}$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Produits",
   "diff": "facile",
   "q": "<p>Calculer et simplifier :\na) $\\dfrac{2}{3} \\times \\dfrac{4}{5}$  b) $\\dfrac{3}{7} \\times \\dfrac{7}{9}$  c) $\\dfrac{5}{8} \\times 4$  d) $\\dfrac{3}{10} \\times \\dfrac{5}{6}$</p>",
   "modele": "<p>a) $\\dfrac{2}{3} \\times \\dfrac{4}{5} = \\dfrac{8}{15}$\nb) $\\dfrac{3}{7} \\times \\dfrac{7}{9} = \\dfrac{21}{63} = \\dfrac{1}{3}$\nc) $\\dfrac{5}{8} \\times 4 = \\dfrac{20}{8} = \\dfrac{5}{2}$\nd) $\\dfrac{3}{10} \\times \\dfrac{5}{6} = \\dfrac{15}{60} = \\dfrac{1}{4}$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Inverses",
   "diff": "facile",
   "q": "<ol>\n<li>Donner l'inverse de $\\dfrac{2}{7}$, de $5$, de $\\dfrac{1}{9}$ et de $\\dfrac{4}{3}$.</li>\n<li>Expliquer pourquoi $0$ n'a pas d'inverse.</li>\n</ol>",
   "modele": "<ol>\n<li>Inverse de $\\dfrac{2}{7}$ : $\\dfrac{7}{2}$ ; inverse de $5$ : $\\dfrac{1}{5}$ ;\n   inverse de $\\dfrac{1}{9}$ : $9$ ; inverse de $\\dfrac{4}{3}$ : $\\dfrac{3}{4}$.</li>\n<li>L'inverse de $0$ devrait vérifier $0 \\times x = 1$. Or tout produit par $0$ vaut $0$,\n   jamais $1$. Donc $0$ n'a pas d'inverse.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Quotients",
   "diff": "facile",
   "q": "<p>Calculer :\na) $\\dfrac{3}{5} \\div \\dfrac{2}{7}$  b) $\\dfrac{4}{9} \\div \\dfrac{2}{3}$  c) $6 \\div \\dfrac{3}{4}$  d) $\\dfrac{5}{8} \\div 5$</p>",
   "modele": "<p>a) $\\dfrac{3}{5} \\div \\dfrac{2}{7} = \\dfrac{3}{5} \\times \\dfrac{7}{2} = \\dfrac{21}{10}$\nb) $\\dfrac{4}{9} \\div \\dfrac{2}{3} = \\dfrac{4}{9} \\times \\dfrac{3}{2} = \\dfrac{12}{18} = \\dfrac{2}{3}$\nc) $6 \\div \\dfrac{3}{4} = 6 \\times \\dfrac{4}{3} = \\dfrac{24}{3} = 8$\nd) $\\dfrac{5}{8} \\div 5 = \\dfrac{5}{8} \\times \\dfrac{1}{5} = \\dfrac{5}{40} = \\dfrac{1}{8}$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Priorités opératoires",
   "diff": "",
   "q": "<p>Calculer :\n$A = \\dfrac{1}{3} + \\dfrac{2}{3} \\times \\dfrac{1}{2}$  ·  $B = \\left(\\dfrac{3}{4} - \\dfrac{1}{2}\\right) \\times 8$\n$C = \\dfrac{5}{6} \\div \\left(\\dfrac{1}{3} + \\dfrac{1}{6}\\right)$  ·  $D = \\dfrac{2}{5} \\times 3 - \\dfrac{1}{5}$</p>",
   "modele": "<p>$A = \\dfrac{1}{3} + \\dfrac{2}{3} \\times \\dfrac{1}{2} = \\dfrac{1}{3} + \\dfrac{2}{6} = \\dfrac{1}{3} + \\dfrac{1}{3} = \\dfrac{2}{3}$\n$B = \\left(\\dfrac{3}{4} - \\dfrac{2}{4}\\right) \\times 8 = \\dfrac{1}{4} \\times 8 = \\dfrac{8}{4} = 2$\n$C = \\dfrac{5}{6} \\div \\left(\\dfrac{2}{6} + \\dfrac{1}{6}\\right) = \\dfrac{5}{6} \\div \\dfrac{3}{6} = \\dfrac{5}{6} \\div \\dfrac{1}{2} = \\dfrac{5}{6} \\times 2 = \\dfrac{10}{6} = \\dfrac{5}{3}$\n$D = \\dfrac{6}{5} - \\dfrac{1}{5} = \\dfrac{5}{5} = 1$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Simplifier avant de multiplier",
   "diff": "",
   "q": "<p>Calculer en simplifiant avant d'effectuer le produit :\na) $\\dfrac{8}{15} \\times \\dfrac{5}{12}$  b) $\\dfrac{9}{14} \\times \\dfrac{7}{3}$\nc) $\\dfrac{25}{36} \\times \\dfrac{12}{5}$  d) $\\dfrac{14}{9} \\times \\dfrac{27}{28}$</p>",
   "modele": "<p>a) $\\dfrac{8}{15} \\times \\dfrac{5}{12}$ : on simplifie $5$ avec $15$ (par $5$) et $8$ avec $12$\n   (par $4$) : $\\dfrac{2}{3} \\times \\dfrac{1}{3} = \\dfrac{2}{9}$.\nb) $\\dfrac{9}{14} \\times \\dfrac{7}{3}$ : $9$ et $3$ par $3$, $7$ et $14$ par $7$ :\n   $\\dfrac{3}{2} \\times \\dfrac{1}{1} = \\dfrac{3}{2}$.\nc) $\\dfrac{25}{36} \\times \\dfrac{12}{5}$ : $25$ et $5$ par $5$, $12$ et $36$ par $12$ :\n   $\\dfrac{5}{3} \\times \\dfrac{1}{1} = \\dfrac{5}{3}$.\nd) $\\dfrac{14}{9} \\times \\dfrac{27}{28}$ : $14$ et $28$ par $14$, $27$ et $9$ par $9$ :\n   $\\dfrac{1}{1} \\times \\dfrac{3}{2} = \\dfrac{3}{2}$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Sommes de trois fractions",
   "diff": "",
   "q": "<p>Calculer :\na) $\\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8}$  b) $\\dfrac{2}{3} + \\dfrac{1}{6} + \\dfrac{1}{2}$  c) $\\dfrac{3}{10} + \\dfrac{1}{5} + \\dfrac{1}{2}$</p>",
   "modele": "<p>a) $\\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} = \\dfrac{4}{8} + \\dfrac{2}{8} + \\dfrac{1}{8} = \\dfrac{7}{8}$\nb) $\\dfrac{2}{3} + \\dfrac{1}{6} + \\dfrac{1}{2} = \\dfrac{4}{6} + \\dfrac{1}{6} + \\dfrac{3}{6} = \\dfrac{8}{6} = \\dfrac{4}{3}$\nc) $\\dfrac{3}{10} + \\dfrac{1}{5} + \\dfrac{1}{2} = \\dfrac{3}{10} + \\dfrac{2}{10} + \\dfrac{5}{10} = \\dfrac{10}{10} = 1$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Nombre manquant",
   "diff": "",
   "q": "<p>Trouver le nombre qui convient :\na) $\\dfrac{3}{7} + \\ldots = 1$  b) $\\ldots \\times \\dfrac{2}{5} = 1$\nc) $\\dfrac{5}{6} - \\ldots = \\dfrac{1}{3}$  d) $\\dfrac{3}{4} \\div \\ldots = \\dfrac{3}{2}$</p>",
   "modele": "<p>a) $\\dfrac{3}{7} + \\dfrac{4}{7} = 1$, donc le nombre est $\\dfrac{4}{7}$.\nb) Il s'agit de l'inverse de $\\dfrac{2}{5}$, c'est-à-dire $\\dfrac{5}{2}$.\nc) $\\dfrac{5}{6} - \\dfrac{1}{3} = \\dfrac{5}{6} - \\dfrac{2}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$,\n   donc le nombre est $\\dfrac{1}{2}$.\nd) On cherche $x$ tel que $\\dfrac{3}{4} \\div x = \\dfrac{3}{2}$.\n   Comme $\\dfrac{3}{4} \\div \\dfrac{1}{2} = \\dfrac{3}{4} \\times 2 = \\dfrac{3}{2}$, le nombre est $\\dfrac{1}{2}$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Calculer puis comparer",
   "diff": "",
   "q": "<p>On pose $A = \\dfrac{1}{2} + \\dfrac{1}{3}$ et $B = \\dfrac{7}{8}$.\n1. Calculer $A$.\n2. Comparer $A$ et $B$ en détaillant la méthode.</p>",
   "modele": "<ol>\n<li>$A = \\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}$.</li>\n<li>On réduit $A$ et $B$ au dénominateur $24$ : $\\dfrac{5}{6} = \\dfrac{20}{24}$ et\n   $\\dfrac{7}{8} = \\dfrac{21}{24}$. Comme $20 &lt; 21$, on a $A &lt; B$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Vrai ou faux",
   "diff": "",
   "q": "<p>Répondre en justifiant par un calcul :\na) $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{2}{5}$  b) l'inverse de $\\dfrac{3}{4}$ est $\\dfrac{4}{3}$\nc) $\\dfrac{2}{3} \\times \\dfrac{3}{2} = 1$  d) $5 \\div \\dfrac{1}{2} = 2{,}5$</p>",
   "modele": "<p>a) <strong>Faux</strong> : $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{5}{6}$, et non $\\dfrac{2}{5}$.\nb) <strong>Vrai</strong> : $\\dfrac{3}{4} \\times \\dfrac{4}{3} = \\dfrac{12}{12} = 1$.\nc) <strong>Vrai</strong> : $\\dfrac{2}{3} \\times \\dfrac{3}{2} = \\dfrac{6}{6} = 1$.\nd) <strong>Faux</strong> : $5 \\div \\dfrac{1}{2} = 5 \\times 2 = 10$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le mur du maçon",
   "diff": "difficile",
   "q": "<p>Un maçon d'Agadir doit enduire un mur de $60$ m². Lundi il en fait $\\dfrac{2}{5}$,\nmardi il en fait $\\dfrac{1}{4}$.\n1. Quelle fraction du mur a-t-il faite en deux jours ?\n2. Quelle fraction reste-t-il ?\n3. À combien de mètres carrés cela correspond-il ?</p>",
   "modele": "<ol>\n<li>$\\dfrac{2}{5} + \\dfrac{1}{4} = \\dfrac{8}{20} + \\dfrac{5}{20} = \\dfrac{13}{20}$ du mur.</li>\n<li>Il reste $1 - \\dfrac{13}{20} = \\dfrac{20}{20} - \\dfrac{13}{20} = \\dfrac{7}{20}$.</li>\n<li>$\\dfrac{7}{20} \\times 60 = \\dfrac{420}{20} = 21$ m².</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "La citerne",
   "diff": "difficile",
   "q": "<p>Une citerne de $1\\,200$ litres est remplie aux $\\dfrac{5}{6}$ de sa capacité.\nOn utilise ensuite $\\dfrac{2}{5}$ du contenu pour arroser un jardin de Marrakech.\n1. Combien de litres contenait la citerne au départ ?\n2. Combien de litres ont été utilisés ?\n3. Combien de litres reste-t-il ?</p>",
   "modele": "<ol>\n<li>$\\dfrac{5}{6} \\times 1\\,200 = \\dfrac{6\\,000}{6} = 1\\,000$ litres.</li>\n<li>$\\dfrac{2}{5} \\times 1\\,000 = 400$ litres utilisés.</li>\n<li>Il reste $1\\,000 - 400 = 600$ litres.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Flacons d'huile d'argan",
   "diff": "difficile",
   "q": "<p>Une coopérative met $15$ litres d'huile d'argan en flacons de $\\dfrac{3}{4}$ de litre.\n1. Combien de flacons peut-elle remplir ?\n2. Chaque flacon est vendu $250$ DH. Quelle est la recette totale ?</p>",
   "modele": "<ol>\n<li>$15 \\div \\dfrac{3}{4} = 15 \\times \\dfrac{4}{3} = \\dfrac{60}{3} = 20$ flacons.</li>\n<li>$20 \\times 250 = 5\\,000$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Recette de chebakia",
   "diff": "difficile",
   "q": "<p>Une recette de chebakia pour $6$ personnes nécessite $\\dfrac{3}{4}$ kg de farine.\n1. Quelle quantité de farine faut-il pour $1$ personne ?\n2. Quelle quantité faut-il pour $8$ personnes ?</p>",
   "modele": "<ol>\n<li>$\\dfrac{3}{4} \\div 6 = \\dfrac{3}{4} \\times \\dfrac{1}{6} = \\dfrac{3}{24} = \\dfrac{1}{8}$ kg par personne.</li>\n<li>$\\dfrac{1}{8} \\times 8 = 1$ kg de farine pour $8$ personnes.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Terrain rectangulaire",
   "diff": "difficile",
   "q": "<p>Un terrain rectangulaire mesure $\\dfrac{9}{2}$ m de longueur et $\\dfrac{8}{3}$ m de largeur.\n1. Calculer son aire.\n2. Calculer son périmètre, puis en donner une valeur approchée au centième de mètre.</p>",
   "modele": "<ol>\n<li>Aire $= \\dfrac{9}{2} \\times \\dfrac{8}{3} = \\dfrac{72}{6} = 12$ m².</li>\n<li>Périmètre $= 2 \\times \\left(\\dfrac{9}{2} + \\dfrac{8}{3}\\right) = 2 \\times \\left(\\dfrac{27}{6} + \\dfrac{16}{6}\\right)\n   = 2 \\times \\dfrac{43}{6} = \\dfrac{43}{3}$ m.\n   Valeur approchée : $\\dfrac{43}{3} \\approx 14{,}33$ m.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "La journée de Reda",
   "diff": "difficile",
   "q": "<p>Reda passe $\\dfrac{1}{3}$ de sa journée à dormir, $\\dfrac{1}{4}$ au collège et\n$\\dfrac{1}{6}$ à faire ses devoirs.\n1. Quelle fraction de sa journée cela représente-t-il en tout ?\n2. Quelle fraction lui reste-t-il pour ses loisirs et ses repas ?\n3. Convertir chacune de ces quatre fractions en heures (une journée dure $24$ heures).</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Additionner et soustraire</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Réduire au même dénominateur</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Écrire un entier en fraction</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Multiplier des fractions</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Reconnaître un inverse</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Diviser par une fraction</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Respecter les priorités</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Simplifier avant de calculer</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Enchaîner plusieurs sommes</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Raisonner à l'envers</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Calculer puis comparer</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Justifier par un calcul</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser un partage de travail</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Enchaîner deux fractions d'une quantité</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Modéliser une division par une fraction</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Résoudre un problème de recette</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Calculer aire et périmètre</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Organiser une recherche</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$\\dfrac{1}{3} + \\dfrac{1}{4} + \\dfrac{1}{6} = \\dfrac{4}{12} + \\dfrac{3}{12} + \\dfrac{2}{12} = \\dfrac{9}{12} = \\dfrac{3}{4}$.</li>\n<li>Il reste $1 - \\dfrac{3}{4} = \\dfrac{1}{4}$ de la journée.</li>\n<li>Sommeil : $\\dfrac{1}{3} \\times 24 = 8$ h ; collège : $\\dfrac{1}{4} \\times 24 = 6$ h ;\n   devoirs : $\\dfrac{1}{6} \\times 24 = 4$ h ; loisirs et repas : $\\dfrac{1}{4} \\times 24 = 6$ h.\n   Vérification : $8 + 6 + 4 + 6 = 24$ h.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M03",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Calculatrice non autorisée · Résultats sous forme irréductible</p>\n<h2 id=\"exercice-1-5-points-calculs-de-base\">Exercice 1 (5 points) — Calculs de base</h2>\n<p>Calculer :\na) $\\dfrac{3}{5} + \\dfrac{4}{5}$  b) $\\dfrac{7}{8} - \\dfrac{1}{4}$  c) $\\dfrac{2}{3} \\times \\dfrac{9}{4}$\nd) $\\dfrac{5}{6} \\div \\dfrac{5}{3}$  e) $2 - \\dfrac{3}{7}$</p>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>a</td>\n<td>$\\dfrac{7}{5}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>b</td>\n<td>mise au dénominateur $8$ puis $\\dfrac{5}{8}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>c</td>\n<td>$\\dfrac{3}{2}$ simplifié</td>\n<td>1</td>\n</tr>\n<tr>\n<td>d</td>\n<td>multiplication par l'inverse, $\\dfrac{1}{2}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>e</td>\n<td>$2$ écrit $\\dfrac{14}{7}$, résultat $\\dfrac{11}{7}$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-priorites-operatoires\">Exercice 2 (5 points) — Priorités opératoires</h2>\n<p>Calculer en détaillant les étapes :\n$A = \\dfrac{1}{4} + \\dfrac{3}{4} \\times \\dfrac{2}{3}$ ·\n$B = \\left(\\dfrac{5}{6} - \\dfrac{1}{2}\\right) \\div \\dfrac{1}{3}$ ·\n$C = \\dfrac{3}{5} \\times \\left(\\dfrac{1}{2} + \\dfrac{1}{4}\\right)$</p>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$A$</td>\n<td>produit d'abord, résultat $\\dfrac{3}{4}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>$B$</td>\n<td>parenthèse $\\dfrac{1}{3}$, résultat $1$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>$C$</td>\n<td>parenthèse $\\dfrac{3}{4}$, résultat $\\dfrac{9}{20}$</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-les-olives-de-fes\">Exercice 3 (5 points) — Les olives de Fès</h2>\n<p>Un commerçant dispose de $240$ kg d'olives. Lundi il en vend $\\dfrac{3}{8}$,\nmardi il en vend $\\dfrac{1}{4}$.\n1. Calculer la masse vendue chaque jour.\n2. Quelle fraction du stock lui reste-t-il ?\n3. À combien de kilogrammes cela correspond-il ?</p>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$90$ kg et $60$ kg avec calculs</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>somme $\\dfrac{5}{8}$ puis reste $\\dfrac{3}{8}$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$90$ kg</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points-atelier-de-menuiserie-a-sale\">Exercice 4 (5 points) — Atelier de menuiserie à Salé</h2>\n<p>Un menuisier découpe des tasseaux de $\\dfrac{3}{4}$ m dans une planche de $6$ m.\nIl fabrique ensuite un panneau rectangulaire de $\\dfrac{5}{2}$ m sur $\\dfrac{4}{5}$ m.\n1. Combien de tasseaux obtient-il ?\n2. Calculer l'aire du panneau.\n3. Le panneau est peint à raison de $18$ DH le mètre carré. Quel est le coût de la peinture ?</p>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>division par une fraction, $8$ tasseaux</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$2$ m²</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$36$ DH</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<p>a) $\\dfrac{3}{5} + \\dfrac{4}{5} = \\dfrac{7}{5}$\nb) $\\dfrac{7}{8} - \\dfrac{1}{4} = \\dfrac{7}{8} - \\dfrac{2}{8} = \\dfrac{5}{8}$\nc) $\\dfrac{2}{3} \\times \\dfrac{9}{4} = \\dfrac{18}{12} = \\dfrac{3}{2}$\nd) $\\dfrac{5}{6} \\div \\dfrac{5}{3} = \\dfrac{5}{6} \\times \\dfrac{3}{5} = \\dfrac{15}{30} = \\dfrac{1}{2}$\ne) $2 - \\dfrac{3}{7} = \\dfrac{14}{7} - \\dfrac{3}{7} = \\dfrac{11}{7}$</p>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<p>$A = \\dfrac{1}{4} + \\dfrac{3}{4} \\times \\dfrac{2}{3} = \\dfrac{1}{4} + \\dfrac{6}{12}\n= \\dfrac{1}{4} + \\dfrac{1}{2} = \\dfrac{1}{4} + \\dfrac{2}{4} = \\dfrac{3}{4}$\n$B = \\left(\\dfrac{5}{6} - \\dfrac{3}{6}\\right) \\div \\dfrac{1}{3} = \\dfrac{2}{6} \\div \\dfrac{1}{3}\n= \\dfrac{1}{3} \\times 3 = 1$\n$C = \\dfrac{3}{5} \\times \\left(\\dfrac{2}{4} + \\dfrac{1}{4}\\right) = \\dfrac{3}{5} \\times \\dfrac{3}{4} = \\dfrac{9}{20}$</p>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>Lundi : $\\dfrac{3}{8} \\times 240 = \\dfrac{720}{8} = 90$ kg.\n   Mardi : $\\dfrac{1}{4} \\times 240 = 60$ kg.</li>\n<li>Vendu : $\\dfrac{3}{8} + \\dfrac{1}{4} = \\dfrac{3}{8} + \\dfrac{2}{8} = \\dfrac{5}{8}$.\n   Reste : $1 - \\dfrac{5}{8} = \\dfrac{3}{8}$.</li>\n<li>$\\dfrac{3}{8} \\times 240 = 90$ kg. (On vérifie : $90 + 60 + 90 = 240$ kg.)</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>$6 \\div \\dfrac{3}{4} = 6 \\times \\dfrac{4}{3} = \\dfrac{24}{3} = 8$ tasseaux.</li>\n<li>Aire $= \\dfrac{5}{2} \\times \\dfrac{4}{5} = \\dfrac{20}{10} = 2$ m².</li>\n<li>Coût $= 2 \\times 18 = 36$ DH.</li>\n</ol>"
 }
},

{
 "id": "m04",
 "domaine": "maths",
 "unite": 4,
 "theme": "Géométrie",
 "tag": "M04",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M04 — Notions de base de la géométrie dans le plan",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Connaître le vocabulaire et les notations : point, droite, demi-droite, segment.",
  "Reconnaître et tracer des droites sécantes, perpendiculaires, parallèles.",
  "Utiliser les propriétés de transitivité et de perpendicularité.",
  "Calculer et construire la distance d'un point à une droite.",
  "Décrire et tracer un cercle."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Sur le plan d'un nouveau quartier de Casablanca, l'architecte trace des rues. Certaines\nse croisent, d'autres non. Deux rues qui se croisent en formant un angle droit permettent\nde dessiner des immeubles rectangulaires. Deux rues qui ne se croisent jamais restent à\nla même distance l'une de l'autre.</p>\n<p>Pour parler de ces situations sans se tromper, les mathématiciens utilisent un vocabulaire\nprécis et des notations communes. C'est l'objet de cette leçon.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Trace une droite $(d)$ sur ta feuille. Place un point $A$ <strong>en dehors</strong> de\ncette droite. Avec ton équerre, trace toutes les droites que tu peux passant par $A$ et\nperpendiculaires à $(d)$.</p>\n<p><strong>Observation.</strong> Tu ne peux en tracer <strong>qu'une seule</strong>.</p>\n<p><strong>Activité 2.</strong> Reprends la même figure. Mesure la longueur du segment qui joint $A$ à\nplusieurs points de $(d)$ : $AM_1$, $AM_2$, $AM_3$… La plus petite de ces longueurs\ncorrespond au point situé sur la perpendiculaire.</p>\n<p><strong>Conclusion.</strong> Par un point donné, il passe une seule perpendiculaire à une droite donnée,\net cette perpendiculaire donne le <strong>plus court chemin</strong> entre le point et la droite.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-point-droite-demi-droite-segment\">3.1 Point, droite, demi-droite, segment</h3>\n<blockquote>\n<p><strong>Définitions et notations.</strong>\n- Un <strong>point</strong> se note par une lettre majuscule : $A$, $B$, $M$.\n- Une <strong>droite</strong> est illimitée des deux côtés. On la note $(AB)$ (droite passant par $A$ et $B$) ou $(d)$.\n- Une <strong>demi-droite</strong> a une origine et est illimitée d'un seul côté : $[AB)$, d'origine $A$.\n- Un <strong>segment</strong> a deux extrémités : $[AB]$. Sa <strong>longueur</strong> se note $AB$ (sans crochets).</p>\n</blockquote>\n<pre><code>   droite (AB)        demi-droite [AB)      segment [AB]\n &lt;----A------B----&gt;     A------B----&gt;        A------B\n</code></pre>\n<blockquote>\n<p><strong>Appartenance.</strong> Si le point $M$ est sur la droite $(d)$, on écrit $M \\in (d)$\n(« $M$ appartient à $(d)$ »). Sinon on écrit $M \\notin (d)$.</p>\n<p><strong>Propriété.</strong> Par deux points distincts $A$ et $B$, il passe <strong>une seule</strong> droite : $(AB)$.</p>\n</blockquote>\n<p>⚠️ <strong>Erreur fréquente.</strong> Confondre $[AB]$ (le segment, un objet géométrique) et $AB$\n(sa longueur, un nombre). On écrit « $AB = 5$ cm », jamais « $[AB] = 5$ cm ».</p>\n<h3 id=\"32-droites-secantes\">3.2 Droites sécantes</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux droites sont <strong>sécantes</strong> lorsqu'elles ont un seul point commun,\nappelé <strong>point d'intersection</strong>.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Si $(d_1)$ et $(d_2)$ se coupent en $I$, alors $I \\in (d_1)$ et $I \\in (d_2)$.</p>\n<h3 id=\"33-droites-perpendiculaires\">3.3 Droites perpendiculaires</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux droites sont <strong>perpendiculaires</strong> lorsqu'elles sont sécantes et\nforment quatre angles droits. On note $(d_1) \\perp (d_2)$.</p>\n</blockquote>\n<p><strong>Méthode (construction à l'équerre).</strong> Tracer la perpendiculaire à $(d)$ passant par $A$ :\n1. Poser un côté de l'angle droit de l'équerre le long de $(d)$.\n2. Faire glisser l'équerre jusqu'à ce que l'autre côté passe par $A$.\n3. Tracer le trait le long de ce côté, puis coder l'angle droit par un petit carré.</p>\n<h3 id=\"34-droites-paralleles\">3.4 Droites parallèles</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux droites sont <strong>parallèles</strong> lorsqu'elles n'ont aucun point commun,\nou lorsqu'elles sont confondues. On note $(d_1) \\parallel (d_2)$.</p>\n</blockquote>\n<p><strong>Méthode (construction à la règle et à l'équerre).</strong> Tracer la parallèle à $(d)$ passant par $A$ :\n1. Tracer la perpendiculaire $(p)$ à $(d)$ passant par $A$.\n2. Tracer la perpendiculaire à $(p)$ passant par $A$ : c'est la parallèle cherchée.</p>\n<h3 id=\"35-proprietes-importantes\">3.5 Propriétés importantes</h3>\n<blockquote>\n<p><strong>Propriété 1 (transitivité du parallélisme).</strong> Si deux droites sont parallèles à une\nmême troisième droite, alors elles sont parallèles entre elles.\nSi $(d_1) \\parallel (d)$ et $(d_2) \\parallel (d)$, alors $(d_1) \\parallel (d_2)$.</p>\n<p><strong>Propriété 2.</strong> Si deux droites sont perpendiculaires à une même droite, alors elles\nsont parallèles entre elles.\nSi $(d_1) \\perp (d)$ et $(d_2) \\perp (d)$, alors $(d_1) \\parallel (d_2)$.</p>\n<p><strong>Propriété 3.</strong> Si deux droites sont parallèles et qu'une troisième est perpendiculaire\nà l'une, alors elle est perpendiculaire à l'autre.\nSi $(d_1) \\parallel (d_2)$ et $(d) \\perp (d_1)$, alors $(d) \\perp (d_2)$.</p>\n</blockquote>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire que deux droites perpendiculaires à une même droite sont\nperpendiculaires entre elles. C'est faux : elles sont <strong>parallèles</strong> (propriété 2).</p>\n<h3 id=\"36-distance-dun-point-a-une-droite\">3.6 Distance d'un point à une droite</h3>\n<blockquote>\n<p><strong>Définition.</strong> Soit $A$ un point et $(d)$ une droite. Le <strong>pied de la perpendiculaire</strong>\nest le point $H$ où la perpendiculaire à $(d)$ passant par $A$ coupe $(d)$.\nLa longueur $AH$ est la <strong>distance du point $A$ à la droite $(d)$</strong>.</p>\n<p><strong>Propriété.</strong> Pour tout point $M$ de $(d)$ différent de $H$, on a $AH &lt; AM$ :\nla distance est la plus courte longueur possible.</p>\n</blockquote>\n<pre><code>        A\n        |\\\n        | \\\n        |  \\\n   -----H---M-----  (d)\n</code></pre>\n<h3 id=\"37-le-cercle\">3.7 Le cercle</h3>\n<blockquote>\n<p><strong>Définition.</strong> Le <strong>cercle</strong> de centre $O$ et de rayon $r$ est l'ensemble des points\nsitués à la distance $r$ du point $O$. On le note $\\mathcal{C}(O\\,;\\,r)$.</p>\n</blockquote>\n<p>Vocabulaire : un <strong>rayon</strong> est un segment joignant $O$ à un point du cercle ;\nun <strong>diamètre</strong> est un segment joignant deux points du cercle en passant par $O$.\nLe diamètre mesure le double du rayon : $D = 2 \\times r$.</p>\n<p><strong>Exemple.</strong> Un rond-point circulaire de Rabat a un diamètre de $30$ m : son rayon\nmesure $15$ m.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Sur une figure, $(AB) \\perp (d)$ et $(CD) \\perp (d)$. Que dire de $(AB)$ et $(CD)$ ?\n<em>Solution.</em> D'après la propriété 2, deux droites perpendiculaires à une même droite sont\nparallèles : donc $(AB) \\parallel (CD)$.</p>\n<p><strong>Exemple 2.</strong> $(d_1) \\parallel (d_2)$ et $(d_3) \\perp (d_2)$. Que dire de $(d_1)$ et $(d_3)$ ?\n<em>Solution.</em> D'après la propriété 3, $(d_3) \\perp (d_1)$.</p>\n<p><strong>Exemple 3.</strong> Construire un rectangle $ABCD$ tel que $AB = 6$ cm et $BC = 4$ cm.\n<em>Solution.</em>\n1. Tracer $[AB]$ de longueur $6$ cm.\n2. Tracer la perpendiculaire à $(AB)$ passant par $B$, et y placer $C$ tel que $BC = 4$ cm.\n3. Tracer la perpendiculaire à $(BC)$ passant par $C$ ; elle est parallèle à $(AB)$.\n4. Placer $D$ sur cette droite tel que $CD = 6$ cm. On vérifie que $(AD) \\perp (AB)$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>$(AB)$ droite, $[AB)$ demi-droite, $[AB]$ segment, $AB$ longueur.</li>\n<li>Par deux points distincts passe une seule droite.</li>\n<li>Perpendiculaires : angle droit, noté $\\perp$. Parallèles : aucun point commun, noté $\\parallel$.</li>\n<li>$\\perp$ à une même droite $\\Rightarrow$ parallèles entre elles.</li>\n<li>$\\parallel$ à une même droite $\\Rightarrow$ parallèles entre elles.</li>\n<li>Distance d'un point à une droite = longueur du segment perpendiculaire $AH$.</li>\n<li>Cercle $\\mathcal{C}(O\\,;\\,r)$ : tous les points à distance $r$ de $O$ ; $D = 2r$.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Combien de droites peut-on tracer passant par un seul point ? Et par trois points non alignés ?</li>\n<li>Sur un plan de ville, repérer deux rues perpendiculaires et deux rues parallèles.</li>\n<li>Tracer deux cercles de même centre : comment appelle-t-on de tels cercles ?</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc — programmes du collège</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadres de référence des examens, mathématiques</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"1-notations-a-connaitre\">1. Notations à connaître</h2>\n<table>\n<thead>\n<tr>\n<th>Objet</th>\n<th>Notation</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Point</td>\n<td>$A$</td>\n<td>lettre majuscule</td>\n</tr>\n<tr>\n<td>Droite</td>\n<td>$(AB)$ ou $(d)$</td>\n<td>illimitée des deux côtés</td>\n</tr>\n<tr>\n<td>Demi-droite</td>\n<td>$[AB)$</td>\n<td>origine $A$, illimitée vers $B$</td>\n</tr>\n<tr>\n<td>Segment</td>\n<td>$[AB]$</td>\n<td>extrémités $A$ et $B$</td>\n</tr>\n<tr>\n<td>Longueur</td>\n<td>$AB$</td>\n<td>un nombre, avec une unité</td>\n</tr>\n<tr>\n<td>Appartenance</td>\n<td>$M \\in (d)$ / $M \\notin (d)$</td>\n<td>$M$ est ou n'est pas sur $(d)$</td>\n</tr>\n<tr>\n<td>Perpendicularité</td>\n<td>$(d_1) \\perp (d_2)$</td>\n<td>angle droit</td>\n</tr>\n<tr>\n<td>Parallélisme</td>\n<td>$(d_1) \\parallel (d_2)$</td>\n<td>aucun point commun</td>\n</tr>\n<tr>\n<td>Cercle</td>\n<td>$\\mathcal{C}(O\\,;\\,r)$</td>\n<td>centre $O$, rayon $r$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"2-proprietes-cles\">2. Propriétés clés</h2>\n<table>\n<thead>\n<tr>\n<th>Si…</th>\n<th>…alors</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$A \\neq B$</td>\n<td>une seule droite $(AB)$ passe par $A$ et $B$</td>\n</tr>\n<tr>\n<td>$(d_1) \\parallel (d)$ et $(d_2) \\parallel (d)$</td>\n<td>$(d_1) \\parallel (d_2)$</td>\n</tr>\n<tr>\n<td>$(d_1) \\perp (d)$ et $(d_2) \\perp (d)$</td>\n<td>$(d_1) \\parallel (d_2)$</td>\n</tr>\n<tr>\n<td>$(d_1) \\parallel (d_2)$ et $(d) \\perp (d_1)$</td>\n<td>$(d) \\perp (d_2)$</td>\n</tr>\n<tr>\n<td>$A$ point, $(d)$ droite</td>\n<td>une seule perpendiculaire à $(d)$ passe par $A$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"3-distance-dun-point-a-une-droite\">3. Distance d'un point à une droite</h2>\n<p>$H$ = pied de la perpendiculaire à $(d)$ issue de $A$.\nLa distance de $A$ à $(d)$ est $AH$, et pour tout autre point $M$ de $(d)$ : $AH &lt; AM$.</p>\n<pre><code>        A\n        |\\\n   -----H-M-----  (d)\n</code></pre>\n<h2 id=\"4-le-cercle\">4. Le cercle</h2>\n<p>$\\mathcal{C}(O\\,;\\,r)$ : tous les points à la distance $r$ du centre $O$.\nRayon $r$ · Diamètre $D = 2 \\times r$ · Un point $M$ est sur le cercle si $OM = r$,\nà l'intérieur si $OM &lt; r$, à l'extérieur si $OM &gt; r$.</p>\n<h2 id=\"5-constructions\">5. Constructions</h2>\n<ul>\n<li><strong>Perpendiculaire à $(d)$ passant par $A$</strong> : poser un côté de l'angle droit de l'équerre\n  sur $(d)$, glisser jusqu'à $A$, tracer, coder l'angle droit.</li>\n<li><strong>Parallèle à $(d)$ passant par $A$</strong> : tracer la perpendiculaire $(p)$ à $(d)$ par $A$,\n  puis la perpendiculaire à $(p)$ par $A$.</li>\n</ul>\n<h2 id=\"6-trois-pieges\">6. Trois pièges</h2>\n<ol>\n<li>Écrire « $[AB] = 5$ cm » : il faut écrire « $AB = 5$ cm ».</li>\n<li>Croire que deux droites perpendiculaires à une même droite sont perpendiculaires\n   entre elles : elles sont <strong>parallèles</strong>.</li>\n<li>Mesurer la distance d'un point à une droite « en biais » : il faut toujours passer par\n   la perpendiculaire.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>$(AB)$ illimitée · $[AB]$ limitée · $\\perp$ = angle droit · $\\parallel$ = jamais de rencontre ·\ndistance = perpendiculaire · $D = 2r$.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Notations",
   "diff": "facile",
   "q": "<p>Compléter par la notation correcte :\na) la droite passant par $E$ et $F$ ; b) le segment d'extrémités $E$ et $F$ ;\nc) la demi-droite d'origine $E$ passant par $F$ ; d) la longueur du segment $[EF]$.</p>",
   "modele": "<p>a) $(EF)$  b) $[EF]$  c) $[EF)$  d) $EF$ (un nombre, suivi d'une unité).</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Appartenance",
   "diff": "facile",
   "q": "<p>On trace une droite $(d)$. Les points $A$ et $B$ sont sur $(d)$, le point $C$ n'y est pas.\nÉcrire les quatre phrases suivantes avec les symboles $\\in$ et $\\notin$ :\n$A$ est sur $(d)$ ; $B$ est sur $(d)$ ; $C$ n'est pas sur $(d)$ ; $C$ est sur la droite $(AC)$.</p>",
   "modele": "<p>$A \\in (d)$ ; $B \\in (d)$ ; $C \\notin (d)$ ; $C \\in (AC)$\n(le point $C$ appartient toujours à toute droite qui porte son nom).</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Vrai ou faux",
   "diff": "facile",
   "q": "<p>Dire si chaque affirmation est vraie ou fausse :\na) Une droite a deux extrémités.\nb) Un segment a une longueur.\nc) Par deux points distincts passent plusieurs droites.\nd) Une demi-droite a une seule origine.</p>",
   "modele": "<p>a) <strong>Faux</strong> : une droite est illimitée, elle n'a pas d'extrémités.\nb) <strong>Vrai</strong> : un segment est limité, on peut mesurer sa longueur.\nc) <strong>Faux</strong> : par deux points distincts, il passe <strong>une seule</strong> droite.\nd) <strong>Vrai</strong> : une demi-droite possède une origine et une seule.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Construction de base",
   "diff": "facile",
   "q": "<p>Tracer une droite $(d)$ et placer un point $A$ à $3$ cm de $(d)$.\n1. Construire à l'équerre la perpendiculaire à $(d)$ passant par $A$. Appeler $H$ le pied.\n2. Mesurer $AH$ et écrire la phrase : « la distance de $A$ à $(d)$ est … ».</p>",
   "modele": "<ol>\n<li>On pose un côté de l'angle droit de l'équerre sur $(d)$, on fait glisser jusqu'à ce que\n   l'autre côté passe par $A$, puis on trace. Le point d'intersection avec $(d)$ est $H$.</li>\n<li>On mesure $AH = 3$ cm.\n   Phrase attendue : « la distance de $A$ à la droite $(d)$ est $3$ cm ».</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Parallèle à l'équerre",
   "diff": "facile",
   "q": "<p>Tracer une droite $(d)$ et un point $B$ n'appartenant pas à $(d)$.\nConstruire la parallèle à $(d)$ passant par $B$, en expliquant les deux étapes de la méthode.</p>",
   "modele": "<p>Étape 1 : tracer la perpendiculaire $(p)$ à $(d)$ passant par $B$ (équerre posée sur $(d)$).\nÉtape 2 : tracer la perpendiculaire à $(p)$ passant par $B$ (équerre posée sur $(p)$).\nCette dernière droite est parallèle à $(d)$, car deux droites perpendiculaires à une même\ndroite $(p)$ sont parallèles entre elles.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Cercle",
   "diff": "facile",
   "q": "<p>Tracer le cercle $\\mathcal{C}$ de centre $O$ et de rayon $3{,}5$ cm.\n1. Quelle est la longueur d'un diamètre ?\n2. Placer un point $M$ tel que $OM = 3{,}5$ cm, un point $P$ tel que $OP = 2$ cm et un\n   point $Q$ tel que $OQ = 5$ cm. Préciser pour chacun sa position par rapport à $\\mathcal{C}$.</p>",
   "modele": "<ol>\n<li>Diamètre $= 2 \\times 3{,}5 = 7$ cm.</li>\n<li>$OM = 3{,}5 = r$ : $M$ est <strong>sur</strong> le cercle.\n   $OP = 2 &lt; 3{,}5$ : $P$ est <strong>à l'intérieur</strong> du cercle.\n   $OQ = 5 &gt; 3{,}5$ : $Q$ est <strong>à l'extérieur</strong> du cercle.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Utiliser les propriétés",
   "diff": "",
   "q": "<p>Dans chaque cas, conclure en citant la propriété utilisée :\na) $(d_1) \\perp (d)$ et $(d_2) \\perp (d)$ : que dire de $(d_1)$ et $(d_2)$ ?\nb) $(d_1) \\parallel (d)$ et $(d_2) \\parallel (d)$ : que dire de $(d_1)$ et $(d_2)$ ?\nc) $(d_1) \\parallel (d_2)$ et $(\\Delta) \\perp (d_1)$ : que dire de $(\\Delta)$ et $(d_2)$ ?</p>",
   "modele": "<p>a) $(d_1) \\parallel (d_2)$ : deux droites perpendiculaires à une même droite sont parallèles.\nb) $(d_1) \\parallel (d_2)$ : deux droites parallèles à une même droite sont parallèles entre elles.\nc) $(\\Delta) \\perp (d_2)$ : si une droite est perpendiculaire à l'une de deux droites\n   parallèles, elle est perpendiculaire à l'autre.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Rectangle",
   "diff": "",
   "q": "<p>Construire un rectangle $ABCD$ tel que $AB = 7$ cm et $BC = 4$ cm.\n1. Décrire les étapes de la construction.\n2. Citer deux couples de droites parallèles et deux couples de droites perpendiculaires\n   de la figure.</p>",
   "modele": "<ol>\n<li>Étapes : tracer $[AB]$ avec $AB = 7$ cm ; tracer la perpendiculaire à $(AB)$ en $B$ et y\n   placer $C$ tel que $BC = 4$ cm ; tracer la perpendiculaire à $(BC)$ en $C$ et y placer $D$\n   tel que $CD = 7$ cm ; relier $D$ à $A$. On vérifie que $AD = 4$ cm et que\n   $(AD) \\perp (AB)$.</li>\n<li>Parallèles : $(AB) \\parallel (DC)$ et $(AD) \\parallel (BC)$.\n   Perpendiculaires : $(AB) \\perp (BC)$ et $(BC) \\perp (CD)$ (aussi $(CD) \\perp (DA)$ et $(DA) \\perp (AB)$).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Distance",
   "diff": "",
   "q": "<p>Sur une droite $(d)$, on place les points $H$, $M$ et $N$. Le point $A$ est tel que\n$(AH) \\perp (d)$, avec $AH = 4$ cm, $AM = 5$ cm et $AN = 6{,}5$ cm.\n1. Quelle est la distance de $A$ à $(d)$ ? Justifier.\n2. Ranger $AH$, $AM$ et $AN$ dans l'ordre croissant. Que remarque-t-on ?</p>",
   "modele": "<ol>\n<li>La distance de $A$ à $(d)$ est $AH = 4$ cm, car $H$ est le pied de la perpendiculaire\n   à $(d)$ issue de $A$.</li>\n<li>$AH &lt; AM &lt; AN$, soit $4 &lt; 5 &lt; 6{,}5$.\n   On remarque que la longueur perpendiculaire est bien la plus petite de toutes.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Carré et diagonales",
   "diff": "",
   "q": "<p>Construire un carré $EFGH$ de côté $5$ cm.\n1. Tracer les diagonales $[EG]$ et $[FH]$ ; elles se coupent en $O$.\n2. Mesurer $EO$, $FO$, $GO$ et $HO$. Que remarque-t-on ?\n3. Tracer le cercle de centre $O$ passant par $E$. Que constate-t-on ?</p>",
   "modele": "<ol>\n<li>Construction : quatre côtés de $5$ cm et quatre angles droits, puis on trace $[EG]$ et $[FH]$.</li>\n<li>On mesure $EO = FO = GO = HO \\approx 3{,}5$ cm : les quatre longueurs sont égales.\n   Le point $O$ est le milieu des deux diagonales.</li>\n<li>Le cercle de centre $O$ passant par $E$ passe aussi par $F$, $G$ et $H$ : les quatre\n   sommets du carré sont sur un même cercle, car ils sont tous à la même distance de $O$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Figure codée",
   "diff": "",
   "q": "<p>Sur une figure, on lit : $(AB) \\perp (BC)$, $(BC) \\perp (CD)$ et $AB = 5$ cm.\n1. Que peut-on dire de $(AB)$ et $(CD)$ ? Justifier.\n2. Quelle sorte de quadrilatère peut être $ABCD$ ? Expliquer ce qu'il faudrait vérifier\n   en plus pour être sûr.</p>",
   "modele": "<ol>\n<li>$(AB) \\perp (BC)$ et $(CD) \\perp (BC)$ : ces deux droites sont perpendiculaires à la\n   même droite $(BC)$, donc $(AB) \\parallel (CD)$.</li>\n<li>$ABDC$ ou $ABCD$ possède au moins deux angles droits et deux côtés parallèles :\n   $ABCD$ peut être un rectangle. Pour en être sûr, il faudrait vérifier que l'angle\n   en $D$ (ou en $A$) est aussi droit, c'est-à-dire que $(AD) \\perp (DC)$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Plan de quartier",
   "diff": "",
   "q": "<p>Dans un quartier de Fès, l'avenue $(a)$ est perpendiculaire à la rue $(r)$.\nLa ruelle $(s)$ est parallèle à l'avenue $(a)$.\n1. Quelle est la position de $(s)$ par rapport à $(r)$ ? Justifier.\n2. Faire un schéma clair et codé de la situation.</p>",
   "modele": "<ol>\n<li>$(s) \\parallel (a)$ et $(a) \\perp (r)$. D'après la propriété « si une droite est\n   perpendiculaire à l'une de deux droites parallèles, elle est perpendiculaire à\n   l'autre », on obtient $(s) \\perp (r)$.</li>\n<li>Schéma :</li>\n</ol>\n<pre><code>      (a)        (s)\n       |          |\n  -----+----------+-----  (r)\n       |          |\n</code></pre>\n<p>Les angles droits sont codés en $(a) \\cap (r)$ et en $(s) \\cap (r)$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le puits et le canal",
   "diff": "difficile",
   "q": "<p>Un canal rectiligne est représenté par une droite $(c)$. Un puits $P$ est situé à $12$ m\ndu canal. On veut creuser une conduite droite du puits jusqu'au canal.\n1. Où faut-il la faire arriver pour qu'elle soit la plus courte possible ? Justifier.\n2. Un ouvrier propose un tracé arrivant en un point $M$ tel que $PM = 15$ m.\n   Combien de mètres de conduite sont perdus par rapport au meilleur tracé ?</p>",
   "modele": "<ol>\n<li>Il faut faire arriver la conduite au pied $H$ de la perpendiculaire à $(c)$ passant\n   par $P$ : c'est le plus court chemin d'un point à une droite. Sa longueur est $12$ m.</li>\n<li>Le tracé proposé mesure $15$ m, soit $15 - 12 = 3$ m de conduite perdus.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Construction guidée",
   "diff": "difficile",
   "q": "<ol>\n<li>Tracer un segment $[AB]$ tel que $AB = 8$ cm.</li>\n<li>Construire la perpendiculaire à $(AB)$ passant par $A$, puis celle passant par $B$.</li>\n<li>Que peut-on dire de ces deux perpendiculaires ? Justifier par une propriété.</li>\n<li>Placer $C$ sur la première, à $5$ cm de $A$, et $D$ sur la seconde, à $5$ cm de $B$,\n   du même côté de $(AB)$. Quelle est la nature de $ABDC$ ?</li>\n</ol>",
   "modele": "<ol>\n<li>et 2. Constructions à la règle et à l'équerre.</li>\n<li>Ces deux droites sont perpendiculaires à la même droite $(AB)$ : elles sont donc\n   <strong>parallèles</strong> entre elles.</li>\n<li>$ABDC$ a deux côtés opposés $[AC]$ et $[BD]$ parallèles et de même longueur $5$ cm,\n   avec des angles droits en $A$ et en $B$ : c'est un <strong>rectangle</strong>\n   (de dimensions $8$ cm sur $5$ cm).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Deux cercles",
   "diff": "difficile",
   "q": "<p>Tracer deux points $O$ et $O'$ tels que $OO' = 6$ cm.\nTracer le cercle de centre $O$ et de rayon $4$ cm, puis celui de centre $O'$ et de rayon $3$ cm.\n1. Combien de points communs ont-ils ?\n2. Nommer ces points $I$ et $J$ et mesurer $OI$, $O'I$, $OJ$, $O'J$.\n3. Que peut-on dire des longueurs trouvées ?</p>",
   "modele": "<ol>\n<li>Comme $4 + 3 = 7 &gt; 6$ et $4 - 3 = 1 &lt; 6$, les deux cercles se coupent en\n   <strong>deux points</strong>.</li>\n<li>$OI = 4$ cm, $O'I = 3$ cm, $OJ = 4$ cm, $O'J = 3$ cm.</li>\n<li>$I$ et $J$ sont tous les deux à $4$ cm de $O$ (ils sont sur le premier cercle) et à\n   $3$ cm de $O'$ (ils sont sur le second). On a donc $OI = OJ$ et $O'I = O'J$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Le terrain de football",
   "diff": "difficile",
   "q": "<p>Un terrain rectangulaire mesure $90$ m sur $50$ m. On trace la ligne médiane\nperpendiculaire aux grands côtés.\n1. Faire un schéma à l'échelle $1$ cm pour $10$ m.\n2. Quelle est la distance d'un coin du terrain à la ligne médiane ?\n3. Les deux grands côtés sont-ils parallèles ? Justifier par une propriété du cours.</p>",
   "modele": "<ol>\n<li>À l'échelle demandée, on dessine un rectangle de $9$ cm sur $5$ cm ; la ligne médiane\n   est le segment perpendiculaire aux grands côtés, tracé à $4{,}5$ cm de chaque largeur.</li>\n<li>La ligne médiane coupe la longueur en deux parties de $45$ m.\n   La distance d'un coin à cette ligne est donc $45$ m (en suivant le grand côté, qui est\n   bien perpendiculaire à la ligne médiane).</li>\n<li>Oui : les deux grands côtés sont tous les deux perpendiculaires aux petits côtés,\n   donc ils sont parallèles entre eux.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Le rond-point",
   "diff": "difficile",
   "q": "<p>Un rond-point circulaire de Rabat a un diamètre de $36$ m. Quatre rues partent du centre,\ndeux à deux perpendiculaires.\n1. Quel est le rayon du rond-point ?\n2. Quelle longueur de rue se trouve à l'intérieur du rond-point pour chacune des quatre rues ?\n3. Que peut-on dire de deux rues « opposées » ? Justifier.</p>",
   "modele": "<ol>\n<li>Rayon $= 36 \\div 2 = 18$ m.</li>\n<li>Chaque rue part du centre : la portion à l'intérieur du rond-point mesure $18$ m,\n   c'est-à-dire un rayon.</li>\n<li>Deux rues opposées forment ensemble un segment passant par le centre, de longueur\n   $18 + 18 = 36$ m : c'est un <strong>diamètre</strong>. Elles sont donc portées par une même droite.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Programme de construction à écrire",
   "diff": "difficile",
   "q": "<p>Écrire un programme de construction précis (au moins cinq étapes) permettant à un\ncamarade d'obtenir, sans voir la figure : un segment $[MN]$ de $6$ cm, le point $K$\nmilieu de $[MN]$, la perpendiculaire à $(MN)$ passant par $K$, un point $L$ sur cette\nperpendiculaire tel que $KL = 4$ cm, puis les segments $[LM]$ et $[LN]$.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Utiliser les notations</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Utiliser $\\in$ et $\\notin$</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Maîtriser le vocabulaire</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Construire une perpendiculaire</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Construire une parallèle</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Tracer un cercle, situer un point</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Appliquer une propriété</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Construire un rectangle</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Comprendre la distance à une droite</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Construire un carré, observer</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Raisonner sur une figure codée</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Modéliser un plan de ville</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Résoudre un problème de distance</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Enchaîner des constructions</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Explorer deux cercles sécants</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Travailler à l'échelle</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Modéliser une situation circulaire</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Communiquer un programme de construction</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<p>Programme de construction accepté (exemple) :\n1. Tracer un segment $[MN]$ tel que $MN = 6$ cm.\n2. Placer le point $K$ sur $[MN]$ tel que $MK = 3$ cm : $K$ est le milieu de $[MN]$.\n3. À l'aide de l'équerre, tracer la droite $(\\Delta)$ perpendiculaire à $(MN)$ passant par $K$.\n4. Sur $(\\Delta)$, placer le point $L$ tel que $KL = 4$ cm.\n5. Tracer les segments $[LM]$ et $[LN]$.\n6. Coder l'angle droit en $K$ et les longueurs égales $MK = KN$.</p>\n<p>En mesurant, on constate que $LM = LN = 5$ cm : le triangle $LMN$ est isocèle en $L$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M04",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Matériel : règle, équerre, compas</p>\n<h2 id=\"exercice-1-5-points-vocabulaire-et-notations\">Exercice 1 (5 points) — Vocabulaire et notations</h2>\n<ol>\n<li>Écrire la notation correspondant à : la droite passant par $R$ et $S$ ; le segment\n   d'extrémités $R$ et $S$ ; la demi-droite d'origine $S$ passant par $R$ ; la longueur\n   du segment $[RS]$.</li>\n<li>Compléter par $\\in$ ou $\\notin$ sachant que $T$ est sur la droite $(d)$ et que $U$ ne\n   l'est pas : $T \\ldots (d)$ ; $U \\ldots (d)$.</li>\n<li>Indiquer si l'affirmation « une droite a une longueur » est vraie ou fausse, et pourquoi.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>quatre notations correctes (0,5 pt chacune)</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>deux symboles corrects</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>« faux », car une droite est illimitée</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-construction\">Exercice 2 (5 points) — Construction</h2>\n<ol>\n<li>Tracer une droite $(d)$ et placer un point $A$ tel que la distance de $A$ à $(d)$\n   soit $4$ cm.</li>\n<li>Construire à l'équerre la perpendiculaire à $(d)$ passant par $A$ ; nommer $H$ son pied.</li>\n<li>Construire la parallèle à $(d)$ passant par $A$, en indiquant la méthode utilisée.</li>\n<li>Placer un point $M$ sur $(d)$ tel que $HM = 3$ cm. Mesurer $AM$ et comparer à $AH$.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1 et 2</td>\n<td>perpendiculaire correcte, angle droit codé</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3</td>\n<td>parallèle correcte + méthode expliquée</td>\n<td>2</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$AM = 5$ cm et $AH &lt; AM$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-raisonner-avec-les-proprietes\">Exercice 3 (5 points) — Raisonner avec les propriétés</h2>\n<p>Sur un plan de Casablanca, la rue $(r_1)$ est perpendiculaire au boulevard $(b)$ et la\nrue $(r_2)$ est aussi perpendiculaire à $(b)$. L'avenue $(a)$ est parallèle à $(r_1)$.\n1. Que peut-on dire de $(r_1)$ et $(r_2)$ ? Citer la propriété.\n2. Que peut-on dire de $(a)$ et $(r_2)$ ? Citer la propriété.\n3. Que peut-on dire de $(a)$ et $(b)$ ? Citer la propriété.</p>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$(r_1) \\parallel (r_2)$ + propriété</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$(a) \\parallel (r_2)$ + propriété</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$(a) \\perp (b)$ + propriété</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points-cercle-et-rectangle\">Exercice 4 (5 points) — Cercle et rectangle</h2>\n<ol>\n<li>Tracer un rectangle $ABCD$ tel que $AB = 6$ cm et $BC = 4{,}5$ cm.</li>\n<li>Tracer les diagonales ; elles se coupent en $O$. Mesurer $OA$, $OB$, $OC$ et $OD$.</li>\n<li>Tracer le cercle de centre $O$ passant par $A$. Que constate-t-on ?</li>\n<li>Le cercle de centre $B$ et de rayon $5$ cm passe-t-il par $C$ ? Justifier par un calcul\n   ou une mesure.</li>\n</ol>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>rectangle correct, angles droits codés</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>quatre longueurs égales (environ $3{,}75$ cm)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>le cercle passe par les quatre sommets</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>non, car $BC = 4{,}5 \\neq 5$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>$(RS)$ ; $[RS]$ ; $[SR)$ ; $RS$.</li>\n<li>$T \\in (d)$ ; $U \\notin (d)$.</li>\n<li><strong>Faux</strong> : une droite est illimitée des deux côtés, on ne peut donc pas mesurer sa\n   longueur. Seul un segment possède une longueur.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>et 2. On trace $(d)$, on place $H$ sur $(d)$, on trace la perpendiculaire en $H$ et on\n   place $A$ à $4$ cm de $H$ sur cette perpendiculaire. On code l'angle droit.</li>\n<li>Méthode : tracer la perpendiculaire $(p)$ à $(AH)$ passant par $A$. Comme\n   $(AH) \\perp (d)$ et $(AH) \\perp (p)$, les droites $(d)$ et $(p)$ sont parallèles.</li>\n<li>En mesurant, on trouve $AM = 5$ cm. On a bien $AH = 4 &lt; 5 = AM$ : le segment\n   perpendiculaire est le plus court.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$(r_1)$ et $(r_2)$ sont perpendiculaires à la même droite $(b)$, donc\n   $(r_1) \\parallel (r_2)$ (deux droites perpendiculaires à une même droite sont parallèles).</li>\n<li>$(a) \\parallel (r_1)$ et $(r_1) \\parallel (r_2)$, donc $(a) \\parallel (r_2)$\n   (deux droites parallèles à une même droite sont parallèles entre elles).</li>\n<li>$(a) \\parallel (r_1)$ et $(b) \\perp (r_1)$, donc $(a) \\perp (b)$ (si une droite est\n   perpendiculaire à l'une de deux droites parallèles, elle est perpendiculaire à l'autre).</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>Construction du rectangle à la règle et à l'équerre.</li>\n<li>On mesure $OA = OB = OC = OD \\approx 3{,}75$ cm : les diagonales d'un rectangle ont la\n   même longueur et se coupent en leur milieu.</li>\n<li>Le cercle de centre $O$ passant par $A$ passe aussi par $B$, $C$ et $D$, puisque ces\n   quatre points sont à la même distance de $O$.</li>\n<li>Non : $BC = 4{,}5$ cm, alors que le rayon du cercle est $5$ cm.\n   Comme $4{,}5 &lt; 5$, le point $C$ est à l'intérieur de ce cercle.</li>\n</ol>"
 }
},

{
 "id": "m05",
 "domaine": "maths",
 "unite": 5,
 "theme": "Géométrie",
 "tag": "M05",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M05 — Inégalité triangulaire et médiatrice d'un segment",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Comprendre et énoncer l'inégalité triangulaire.",
  "Décider si trois longueurs permettent de construire un triangle.",
  "Construire un triangle au compas connaissant ses trois côtés.",
  "Définir la médiatrice d'un segment et la construire.",
  "Utiliser la propriété de la médiatrice pour justifier des égalités de longueurs."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Trois villages de la région de Béni Mellal sont reliés par des pistes rectilignes.\nLa piste directe entre le village $A$ et le village $B$ mesure $12$ km. En passant par le\nvillage $C$, on parcourt $AC + CB = 5 + 6 = 11$ km, soit <strong>moins</strong> que la piste directe.</p>\n<p>C'est impossible ! Le chemin direct est toujours le plus court. Les trois distances\nannoncées sont donc fausses. Cette remarque très simple s'appelle l'<strong>inégalité\ntriangulaire</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Avec des baguettes (ou des bandes de papier) de $3$ cm, $4$ cm et $6$ cm,\nessaie de former un triangle. Puis essaie avec $3$ cm, $4$ cm et $9$ cm.</p>\n<p><strong>Observation.</strong>\n- Avec $3$, $4$ et $6$ : le triangle se referme. On remarque que $3 + 4 = 7 &gt; 6$.\n- Avec $3$, $4$ et $9$ : les deux petites baguettes sont trop courtes, elles ne se\n  rejoignent pas. On remarque que $3 + 4 = 7 &lt; 9$.</p>\n<p><strong>Conclusion.</strong> Un triangle n'existe que si la somme des deux plus petits côtés est\nsupérieure au plus grand.</p>\n<p><strong>Activité 2.</strong> Trace un segment $[AB]$ de $6$ cm. Place plusieurs points $M$ tels que\n$MA = MB$ (essaie à $4$ cm, à $5$ cm, à $6$ cm de chaque extrémité).</p>\n<p><strong>Observation.</strong> Tous ces points sont alignés sur une même droite, qui coupe $[AB]$ en son\nmilieu et perpendiculairement. Cette droite est la <strong>médiatrice</strong> de $[AB]$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-inegalite-triangulaire\">3.1 Inégalité triangulaire</h3>\n<blockquote>\n<p><strong>Propriété (inégalité triangulaire).</strong> Pour trois points $A$, $B$ et $C$ quelconques :\n$$AB \\leqslant AC + CB$$\nL'égalité $AB = AC + CB$ a lieu <strong>si et seulement si</strong> le point $C$ appartient au\nsegment $[AB]$ (les points sont alignés dans cet ordre).</p>\n</blockquote>\n<p>Autrement dit : <strong>le chemin le plus court d'un point à un autre est la ligne droite.</strong></p>\n<p><strong>Exemple.</strong> Si $AC = 5$ cm et $CB = 7$ cm, alors $AB \\leqslant 12$ cm.\nSi l'on mesure $AB = 12$ cm, c'est que $C$ est sur $[AB]$.</p>\n<h3 id=\"32-condition-de-construction-dun-triangle\">3.2 Condition de construction d'un triangle</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Trois longueurs permettent de construire un triangle si et seulement si\n<strong>la plus grande est strictement inférieure à la somme des deux autres</strong>.</p>\n</blockquote>\n<p><strong>Méthode (pas à pas).</strong> Peut-on construire un triangle de côtés $5$ cm, $7$ cm et $11$ cm ?\n1. Repérer la plus grande longueur : $11$ cm.\n2. Additionner les deux autres : $5 + 7 = 12$.\n3. Comparer : $11 &lt; 12$. <strong>Oui</strong>, le triangle est constructible.</p>\n<p>Contre-exemple : $4$ cm, $5$ cm et $10$ cm. La plus grande est $10$, et $4 + 5 = 9 &lt; 10$.\nLe triangle <strong>n'existe pas</strong>.</p>\n<p>Cas limite : $3$ cm, $5$ cm et $8$ cm. Ici $3 + 5 = 8$ : les trois points sont <strong>alignés</strong>,\nle « triangle » est aplati, ce n'est pas un vrai triangle.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Comparer la mauvaise longueur. Il faut toujours comparer la\n<strong>plus grande</strong> à la somme des deux autres. Avec $6$, $9$ et $4$, tester $4 &lt; 6 + 9$ ne\nprouve rien ; il faut tester $9 &lt; 6 + 4 = 10$, ce qui est vrai.</p>\n<p><strong>Construction d'un triangle au compas.</strong> Construire $ABC$ avec $AB = 6$ cm, $AC = 4$ cm\net $BC = 5$ cm :\n1. Vérifier : $6 &lt; 4 + 5 = 9$, le triangle existe.\n2. Tracer le segment $[AB]$ de $6$ cm.\n3. Tracer l'arc de cercle de centre $A$ et de rayon $4$ cm.\n4. Tracer l'arc de cercle de centre $B$ et de rayon $5$ cm.\n5. Les deux arcs se coupent en $C$. Tracer $[AC]$ et $[BC]$.</p>\n<h3 id=\"33-mediatrice-dun-segment\">3.3 Médiatrice d'un segment</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>médiatrice</strong> d'un segment $[AB]$ est la droite perpendiculaire à\n$[AB]$ passant par son milieu $I$.</p>\n</blockquote>\n<pre><code>            (m)\n             |\n    A -------I------- B\n             |\n</code></pre>\n<blockquote>\n<p><strong>Propriété de caractérisation.</strong> Un point $M$ appartient à la médiatrice du segment\n$[AB]$ <strong>si et seulement si</strong> $MA = MB$.</p>\n<ul>\n<li>Si $M$ est sur la médiatrice, alors $MA = MB$.</li>\n<li>Réciproquement, si $MA = MB$, alors $M$ est sur la médiatrice.</li>\n</ul>\n</blockquote>\n<p>On dit que la médiatrice est l'ensemble des points <strong>équidistants</strong> de $A$ et de $B$.</p>\n<p><strong>Construction au compas (sans équerre).</strong> Pour tracer la médiatrice de $[AB]$ :\n1. Choisir un écartement de compas <strong>supérieur à la moitié</strong> de $AB$.\n2. Pointer en $A$ et tracer deux arcs, l'un au-dessus, l'autre au-dessous de $[AB]$.\n3. Garder le même écartement, pointer en $B$ et tracer deux arcs qui coupent les précédents\n   en deux points $P$ et $Q$.\n4. Tracer la droite $(PQ)$ : c'est la médiatrice de $[AB]$.</p>\n<p><em>Pourquoi cela marche ?</em> Par construction, $PA = PB$ et $QA = QB$. Donc $P$ et $Q$\nappartiennent tous deux à la médiatrice, et deux points suffisent pour définir la droite.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Prendre un écartement de compas trop petit : les arcs ne se\ncoupent pas et la construction est impossible.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Peut-on construire un triangle de côtés $8$ cm, $3$ cm et $4$ cm ?\n<em>Solution.</em> Plus grande longueur : $8$. Somme des deux autres : $3 + 4 = 7$.\nComme $7 &lt; 8$, <strong>non</strong>, ce triangle n'est pas constructible.</p>\n<p><strong>Exemple 2.</strong> Trois points $R$, $S$ et $T$ sont tels que $RS = 9$ cm, $ST = 4$ cm et\n$RT = 5$ cm. Que peut-on en déduire ?\n<em>Solution.</em> $ST + TR = 4 + 5 = 9 = RS$. Il y a égalité : les points sont <strong>alignés</strong>, et\n$T$ appartient au segment $[RS]$.</p>\n<p><strong>Exemple 3.</strong> $M$ est un point de la médiatrice de $[EF]$ et $ME = 6{,}5$ cm.\nCombien vaut $MF$ ?\n<em>Solution.</em> D'après la propriété de la médiatrice, $MF = ME = 6{,}5$ cm.</p>\n<p><strong>Exemple 4.</strong> Deux douars, $D_1$ et $D_2$, sont distants de $8$ km. On veut installer un\nchâteau d'eau à égale distance des deux douars. Où le placer ?\n<em>Solution.</em> Tous les points à égale distance de $D_1$ et $D_2$ forment la médiatrice du\nsegment $[D_1D_2]$. Le château d'eau peut être placé n'importe où sur cette droite.\nS'il doit aussi être le plus proche possible, on le place au milieu, à $4$ km de chacun.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>$AB \\leqslant AC + CB$ toujours ; égalité si et seulement si $C \\in [AB]$.</li>\n<li>Triangle constructible ⇔ plus grand côté <strong>strictement</strong> inférieur à la somme des deux autres.</li>\n<li>Si la somme est exactement égale au plus grand côté : les points sont alignés.</li>\n<li>Médiatrice de $[AB]$ : perpendiculaire à $[AB]$ passant par son milieu.</li>\n<li>$M$ sur la médiatrice de $[AB]$ ⇔ $MA = MB$.</li>\n<li>La construction au compas de la médiatrice ne demande ni règle graduée ni équerre.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Chercher toutes les longueurs entières possibles du troisième côté d'un triangle dont\n  deux côtés mesurent $5$ cm et $9$ cm.</li>\n<li>Tracer les médiatrices des trois côtés d'un triangle : que remarques-tu ?</li>\n<li>Expliquer pourquoi un triangle isocèle a un axe de symétrie qui est une médiatrice.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc — programmes du collège</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadres de référence des examens, mathématiques</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"1-inegalite-triangulaire\">1. Inégalité triangulaire</h2>\n<p>$$AB \\leqslant AC + CB \\qquad \\text{pour trois points quelconques } A,\\ B,\\ C$$</p>\n<table>\n<thead>\n<tr>\n<th>Situation</th>\n<th>Conclusion</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$AB &lt; AC + CB$</td>\n<td>$C$ n'est pas sur $[AB]$ : le triangle $ABC$ existe</td>\n</tr>\n<tr>\n<td>$AB = AC + CB$</td>\n<td>$A$, $C$, $B$ sont alignés et $C \\in [AB]$</td>\n</tr>\n<tr>\n<td>$AB &gt; AC + CB$</td>\n<td>impossible : les données sont fausses</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"2-triangle-constructible\">2. Triangle constructible ?</h2>\n<blockquote>\n<p><strong>Test.</strong> Comparer la <strong>plus grande</strong> longueur à la somme des deux autres.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>Longueurs</th>\n<th>Test</th>\n<th>Réponse</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$5$ ; $7$ ; $11$</td>\n<td>$11 &lt; 5 + 7 = 12$</td>\n<td>constructible</td>\n</tr>\n<tr>\n<td>$4$ ; $5$ ; $10$</td>\n<td>$10 &gt; 4 + 5 = 9$</td>\n<td>impossible</td>\n</tr>\n<tr>\n<td>$3$ ; $5$ ; $8$</td>\n<td>$8 = 3 + 5$</td>\n<td>points alignés, triangle aplati</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Construction au compas</strong> : tracer le plus grand côté, puis deux arcs de cercle de rayons\négaux aux deux autres côtés, centrés sur les extrémités ; leur intersection donne le\ntroisième sommet.</p>\n<h2 id=\"3-mediatrice-dun-segment\">3. Médiatrice d'un segment</h2>\n<blockquote>\n<p><strong>Définition.</strong> Droite perpendiculaire à $[AB]$ passant par le milieu $I$ de $[AB]$.</p>\n<p><strong>Caractérisation.</strong> $M$ appartient à la médiatrice de $[AB]$ $\\iff$ $MA = MB$.</p>\n</blockquote>\n<pre><code>            (m)\n             |\n    A -------I------- B\n             |\n</code></pre>\n<p><strong>Construction au compas :</strong>\n1. Écartement de compas <strong>supérieur</strong> à la moitié de $AB$.\n2. Deux arcs centrés en $A$ (au-dessus et au-dessous).\n3. Deux arcs centrés en $B$, même écartement : ils coupent les premiers en $P$ et $Q$.\n4. Tracer $(PQ)$.</p>\n<h2 id=\"4-utilisations-typiques\">4. Utilisations typiques</h2>\n<ul>\n<li>Prouver que deux longueurs sont égales : « $M$ est sur la médiatrice de $[AB]$, donc $MA = MB$ ».</li>\n<li>Prouver qu'un point est sur la médiatrice : « $MA = MB$, donc $M$ appartient à la médiatrice de $[AB]$ ».</li>\n<li>Trouver un lieu à égale distance de deux villes, de deux douars, de deux poteaux.</li>\n</ul>\n<h2 id=\"5-trois-pieges\">5. Trois pièges</h2>\n<ol>\n<li>Tester la mauvaise longueur : c'est toujours la <strong>plus grande</strong> que l'on compare à la somme.</li>\n<li>Oublier le cas d'égalité : $3 + 5 = 8$ donne des points alignés, pas un triangle.</li>\n<li>Confondre la médiatrice de $[AB]$ (perpendiculaire au milieu) avec la simple\n   perpendiculaire passant par $A$ ou par $B$.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Le chemin direct est le plus court · plus grand côté $&lt;$ somme des deux autres ·\nmédiatrice = perpendiculaire au milieu · $MA = MB \\iff M \\in$ médiatrice.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Constructible ou non ?",
   "diff": "facile",
   "q": "<p>Dans chaque cas, dire si un triangle de ces longueurs existe. Justifier par un calcul.\na) $4$ cm, $6$ cm, $9$ cm  b) $2$ cm, $3$ cm, $7$ cm\nc) $5$ cm, $5$ cm, $10$ cm  d) $7$ cm, $8$ cm, $10$ cm</p>",
   "modele": "<p>a) Plus grande longueur $9$ ; $4 + 6 = 10$. Comme $9 &lt; 10$, le triangle <strong>existe</strong>.\nb) Plus grande longueur $7$ ; $2 + 3 = 5$. Comme $7 &gt; 5$, le triangle <strong>n'existe pas</strong>.\nc) Plus grande longueur $10$ ; $5 + 5 = 10$. Il y a <strong>égalité</strong> : les trois points sont\n   alignés, ce n'est pas un vrai triangle.\nd) Plus grande longueur $10$ ; $7 + 8 = 15$. Comme $10 &lt; 15$, le triangle <strong>existe</strong>.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Encadrer une longueur",
   "diff": "facile",
   "q": "<p>Trois points $A$, $B$ et $C$ sont tels que $AC = 6$ cm et $CB = 4$ cm.\n1. Que peut-on dire de la longueur $AB$ ?\n2. Dans quel cas particulier a-t-on $AB = 10$ cm ?</p>",
   "modele": "<ol>\n<li>D'après l'inégalité triangulaire, $AB \\leqslant AC + CB$, donc $AB \\leqslant 10$ cm.\n   De plus $AB \\geqslant 6 - 4 = 2$ cm. Donc $2 \\leqslant AB \\leqslant 10$ cm.</li>\n<li>On a $AB = 10$ cm exactement lorsque $C$ appartient au segment $[AB]$, c'est-à-dire\n   lorsque $A$, $C$ et $B$ sont alignés dans cet ordre.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Alignement",
   "diff": "facile",
   "q": "<p>Trois points $E$, $F$ et $G$ vérifient $EF = 12$ cm, $EG = 7$ cm et $GF = 5$ cm.\nCes trois points sont-ils alignés ? Justifier.</p>",
   "modele": "<p>$EG + GF = 7 + 5 = 12 = EF$. Il y a égalité dans l'inégalité triangulaire, donc les trois\npoints sont <strong>alignés</strong>, et $G$ appartient au segment $[EF]$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Construction au compas",
   "diff": "facile",
   "q": "<p>Construire un triangle $ABC$ tel que $AB = 6$ cm, $AC = 4$ cm et $BC = 5$ cm.\n1. Vérifier d'abord que le triangle est constructible.\n2. Décrire les étapes de la construction au compas.</p>",
   "modele": "<ol>\n<li>Plus grande longueur : $6$ cm. Somme des deux autres : $4 + 5 = 9$.\n   Comme $6 &lt; 9$, le triangle est constructible.</li>\n<li>Étapes :\n   - tracer le segment $[AB]$ tel que $AB = 6$ cm ;\n   - tracer l'arc de cercle de centre $A$ et de rayon $4$ cm ;\n   - tracer l'arc de cercle de centre $B$ et de rayon $5$ cm ;\n   - noter $C$ le point d'intersection des deux arcs ;\n   - tracer les segments $[AC]$ et $[BC]$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Médiatrice au compas",
   "diff": "facile",
   "q": "<p>Tracer un segment $[AB]$ tel que $AB = 7$ cm.\n1. Construire sa médiatrice $(m)$ au compas, sans utiliser l'équerre.\n2. Nommer $I$ le point d'intersection de $(m)$ et de $[AB]$. Mesurer $AI$ et $IB$.\n3. Vérifier à l'équerre que $(m) \\perp (AB)$.</p>",
   "modele": "<ol>\n<li>Écartement du compas supérieur à $3{,}5$ cm (par exemple $5$ cm) : deux arcs centrés\n   en $A$, deux arcs centrés en $B$, qui se coupent en $P$ et $Q$ ; on trace $(PQ)$.</li>\n<li>$AI = IB = 3{,}5$ cm : $I$ est le milieu de $[AB]$.</li>\n<li>L'équerre confirme que l'angle formé en $I$ est droit : $(m) \\perp (AB)$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Utiliser la propriété",
   "diff": "facile",
   "q": "<ol>\n<li>Le point $M$ appartient à la médiatrice de $[CD]$ et $MC = 5{,}2$ cm.\n   Combien mesure $MD$ ? Citer la propriété utilisée.</li>\n<li>Le point $N$ vérifie $NC = ND = 8$ cm. Que peut-on en déduire pour $N$ ?</li>\n</ol>",
   "modele": "<ol>\n<li>$MD = MC = 5{,}2$ cm. Propriété : si un point appartient à la médiatrice d'un segment,\n   alors il est équidistant des extrémités de ce segment.</li>\n<li>Comme $NC = ND$, le point $N$ appartient à la médiatrice de $[CD]$\n   (réciproque de la propriété précédente).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Classer les triplets",
   "diff": "",
   "q": "<p>Pour chaque triplet, indiquer « triangle », « points alignés » ou « impossible » :\n$(3\\,;\\,4\\,;\\,5)$ ; $(2\\,;\\,9\\,;\\,6)$ ; $(10\\,;\\,10\\,;\\,10)$ ; $(1\\,;\\,1\\,;\\,2)$ ; $(12\\,;\\,5\\,;\\,8)$.\nToutes les longueurs sont en centimètres.</p>",
   "modele": "<table>\n<thead>\n<tr>\n<th>Triplet</th>\n<th>Test</th>\n<th>Conclusion</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$(3\\,;\\,4\\,;\\,5)$</td>\n<td>$5 &lt; 3 + 4 = 7$</td>\n<td>triangle</td>\n</tr>\n<tr>\n<td>$(2\\,;\\,9\\,;\\,6)$</td>\n<td>$9 &gt; 2 + 6 = 8$</td>\n<td>impossible</td>\n</tr>\n<tr>\n<td>$(10\\,;\\,10\\,;\\,10)$</td>\n<td>$10 &lt; 10 + 10 = 20$</td>\n<td>triangle (équilatéral)</td>\n</tr>\n<tr>\n<td>$(1\\,;\\,1\\,;\\,2)$</td>\n<td>$2 = 1 + 1$</td>\n<td>points alignés</td>\n</tr>\n<tr>\n<td>$(12\\,;\\,5\\,;\\,8)$</td>\n<td>$12 &lt; 5 + 8 = 13$</td>\n<td>triangle</td>\n</tr>\n</tbody>\n</table>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Le troisième côté",
   "diff": "",
   "q": "<p>Dans un triangle $ABC$, on sait que $AB = 5$ cm et $AC = 9$ cm.\n1. Entre quelles valeurs la longueur $BC$ est-elle comprise ?\n2. Donner toutes les valeurs entières possibles de $BC$ en centimètres.</p>",
   "modele": "<ol>\n<li>L'inégalité triangulaire donne $BC &lt; AB + AC = 5 + 9 = 14$ et\n   $AC &lt; AB + BC$, c'est-à-dire $9 &lt; 5 + BC$, donc $BC &gt; 4$.\n   Ainsi $4 &lt; BC &lt; 14$ (en centimètres).</li>\n<li>Valeurs entières possibles : $5$, $6$, $7$, $8$, $9$, $10$, $11$, $12$, $13$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Triangle isocèle",
   "diff": "",
   "q": "<p>Un triangle isocèle a deux côtés de $7$ cm chacun et une base dont la longueur est un\nnombre entier de centimètres.\n1. Quelles sont toutes les longueurs possibles de la base ?\n2. Quel est alors le plus grand périmètre possible ?</p>",
   "modele": "<ol>\n<li>Notons $b$ la base. Il faut $b &lt; 7 + 7 = 14$ et, si $b \\leqslant 7$, la condition\n   $7 &lt; 7 + b$ est toujours vraie. Donc $b$ peut valoir tout entier de $1$ à $13$ cm.</li>\n<li>Le plus grand périmètre correspond à $b = 13$ : $7 + 7 + 13 = 27$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Justifier avec la médiatrice",
   "diff": "",
   "q": "<p>Dans un triangle $ABC$, on a $AB = AC = 6$ cm et $BC = 5$ cm. Soit $I$ le milieu de $[BC]$.\n1. Justifier que le point $A$ appartient à la médiatrice de $[BC]$.\n2. Justifier que le point $I$ appartient aussi à cette médiatrice.\n3. En déduire la nature de la droite $(AI)$ pour le segment $[BC]$.</p>",
   "modele": "<ol>\n<li>$AB = AC = 6$ cm, donc $A$ est équidistant de $B$ et de $C$ : $A$ appartient à la\n   médiatrice de $[BC]$.</li>\n<li>$I$ est le milieu de $[BC]$, donc $IB = IC = 2{,}5$ cm : $I$ appartient aussi à cette\n   médiatrice.</li>\n<li>Les points $A$ et $I$ sont distincts et appartiennent tous deux à la médiatrice de\n   $[BC]$. Comme une seule droite passe par deux points distincts, la droite $(AI)$ <strong>est</strong>\n   la médiatrice de $[BC]$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Construction et vérification",
   "diff": "",
   "q": "<ol>\n<li>Construire un triangle $ABC$ tel que $BC = 5$ cm et $AB = AC = 7$ cm.</li>\n<li>Construire au compas la médiatrice de $[BC]$.</li>\n<li>Que constate-t-on ? Expliquer à l'aide de la propriété du cours.</li>\n</ol>",
   "modele": "<ol>\n<li>Vérification : $7 &lt; 7 + 5 = 12$, le triangle existe. Construction au compas comme dans\n   l'exercice 4, avec $[BC]$ de $5$ cm puis deux arcs de rayon $7$ cm.</li>\n<li>Construction de la médiatrice de $[BC]$ au compas.</li>\n<li>On constate que la médiatrice <strong>passe par $A$</strong>. C'est normal : $AB = AC = 7$ cm, donc\n   $A$ est équidistant de $B$ et de $C$, donc $A$ appartient à la médiatrice de $[BC]$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Vrai ou faux",
   "diff": "",
   "q": "<p>Répondre en justifiant :\na) On peut construire un triangle de côtés $6$ cm, $6$ cm et $13$ cm.\nb) Si $MA = MB$, alors $M$ est le milieu de $[AB]$.\nc) La médiatrice d'un segment est perpendiculaire à ce segment.\nd) Pour trois points quelconques, on a toujours $AB \\leqslant AC + CB$.</p>",
   "modele": "<p>a) <strong>Faux</strong> : $13 &gt; 6 + 6 = 12$, le triangle est impossible.\nb) <strong>Faux</strong> : $M$ appartient à la médiatrice de $[AB]$, mais il n'est le milieu que s'il\n   se trouve en plus sur le segment $[AB]$.\nc) <strong>Vrai</strong> : c'est la définition même de la médiatrice.\nd) <strong>Vrai</strong> : c'est l'inégalité triangulaire.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le château d'eau",
   "diff": "difficile",
   "q": "<p>Deux douars, $D_1$ et $D_2$, sont distants de $8$ km. On veut construire un château d'eau\nà égale distance des deux douars.\n1. Décrire l'ensemble des emplacements possibles.\n2. Faire un schéma à l'échelle $1$ cm pour $1$ km et placer trois emplacements possibles.\n3. Où placer le château d'eau pour qu'il soit le plus proche possible des deux douars ?\n   Quelle distance le sépare alors de chacun ?</p>",
   "modele": "<ol>\n<li>L'ensemble des points à égale distance de $D_1$ et de $D_2$ est la <strong>médiatrice</strong> du\n   segment $[D_1D_2]$.</li>\n<li>On trace $[D_1D_2]$ de $8$ cm (soit $8$ km), puis sa médiatrice au compas ; tout point\n   de cette droite convient, par exemple le milieu et deux points situés de part et\n   d'autre à $3$ cm du milieu.</li>\n<li>Le point le plus proche des deux douars est le <strong>milieu</strong> $I$ de $[D_1D_2]$ :\n   il est alors à $8 \\div 2 = 4$ km de chaque douar.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Des distances impossibles",
   "diff": "difficile",
   "q": "<p>Un document annonce trois pistes rectilignes entre les villages $A$, $B$ et $C$ de la\nrégion de Béni Mellal : $AB = 12$ km, $AC = 5$ km et $CB = 6$ km.\n1. Montrer que ces trois données sont impossibles.\n2. Proposer une valeur de $CB$ qui rendrait la situation possible, et expliquer pourquoi.</p>",
   "modele": "<ol>\n<li>$AC + CB = 5 + 6 = 11$ km, alors que $AB = 12$ km. On aurait $AB &gt; AC + CB$, ce qui\n   contredit l'inégalité triangulaire. Les données sont donc impossibles.</li>\n<li>Il faut $AC + CB \\geqslant AB$, c'est-à-dire $5 + CB \\geqslant 12$, donc $CB \\geqslant 7$ km.\n   Par exemple $CB = 9$ km convient : on a alors $12 &lt; 5 + 9 = 14$, et il faut aussi\n   vérifier $9 &lt; 12 + 5$, ce qui est vrai.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "L'antenne relais",
   "diff": "difficile",
   "q": "<p>Deux villes $F$ et $M$ sont distantes de $60$ km. Une antenne relais $R$ doit être à\n$50$ km de chacune des deux villes.\n1. Vérifier que le triangle $FMR$ est constructible.\n2. Réaliser la figure à l'échelle $1$ cm pour $10$ km.\n3. Expliquer pourquoi $R$ se trouve sur la médiatrice de $[FM]$.\n4. Combien y a-t-il d'emplacements possibles pour l'antenne ?</p>",
   "modele": "<ol>\n<li>Plus grande longueur : $60$ km ; somme des deux autres : $50 + 50 = 100$ km.\n   Comme $60 &lt; 100$, le triangle $FMR$ est constructible.</li>\n<li>À l'échelle, on trace $[FM]$ de $6$ cm, puis deux arcs de rayon $5$ cm centrés en $F$\n   et en $M$ ; leur intersection donne $R$.</li>\n<li>$RF = RM = 50$ km : le point $R$ est équidistant de $F$ et de $M$, il appartient donc\n   à la médiatrice de $[FM]$.</li>\n<li>Les deux arcs se coupent en <strong>deux points</strong>, l'un d'un côté de $(FM)$, l'autre de\n   l'autre côté : il y a donc <strong>deux emplacements possibles</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Le point d'eau du douar",
   "diff": "difficile",
   "q": "<p>Trois maisons $A$, $B$ et $C$ ne sont pas alignées. On veut creuser un puits $P$ situé\nà égale distance des trois maisons.\n1. Expliquer pourquoi $P$ doit être sur la médiatrice de $[AB]$.\n2. Expliquer pourquoi $P$ doit aussi être sur la médiatrice de $[BC]$.\n3. En déduire une construction du point $P$, puis la réaliser avec\n   $AB = 6$ cm, $BC = 5$ cm et $AC = 7$ cm.</p>",
   "modele": "<ol>\n<li>Le puits doit vérifier $PA = PB$, donc il appartient à la médiatrice de $[AB]$.</li>\n<li>Il doit aussi vérifier $PB = PC$, donc il appartient à la médiatrice de $[BC]$.</li>\n<li>Construction : tracer le triangle $ABC$ avec $AB = 6$ cm, $BC = 5$ cm et $AC = 7$ cm\n   (constructible car $7 &lt; 6 + 5 = 11$), puis construire au compas la médiatrice de $[AB]$\n   et la médiatrice de $[BC]$. Leur point d'intersection est le point $P$ cherché.\n   On vérifie ensuite par mesure que $PA = PB = PC$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Périmètres possibles",
   "diff": "difficile",
   "q": "<p>Un triangle a deux côtés qui mesurent $8$ cm et $3$ cm, le troisième côté étant un nombre\nentier de centimètres.\n1. Quelles sont toutes les valeurs possibles du troisième côté ?\n2. En déduire tous les périmètres possibles de ce triangle.</p>",
   "modele": "<ol>\n<li>Notons $x$ le troisième côté. Il faut $x &lt; 8 + 3 = 11$ et $8 &lt; 3 + x$, donc $x &gt; 5$.\n   Ainsi $5 &lt; x &lt; 11$ : les valeurs entières possibles sont\n   $6$, $7$, $8$, $9$ et $10$ cm.</li>\n<li>Périmètre $= 8 + 3 + x = 11 + x$, donc les périmètres possibles sont\n   $17$, $18$, $19$, $20$ et $21$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Clôture d'un terrain",
   "diff": "difficile",
   "q": "<p>Un terrain triangulaire près d'Agadir a pour côtés $45$ m, $60$ m et $80$ m.\n1. Vérifier que ce terrain peut exister.\n2. Réaliser un plan à l'échelle $1$ cm pour $10$ m.\n3. Calculer le périmètre du terrain.\n4. La clôture coûte $120$ DH le mètre. Calculer le coût total.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Tester la constructibilité</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Encadrer une longueur</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Reconnaître un alignement</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Construire un triangle au compas</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Construire une médiatrice</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Appliquer la caractérisation</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Classer des triplets</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Encadrer le troisième côté</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Raisonner sur un triangle isocèle</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Justifier une médiatrice</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Construire et vérifier</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Argumenter, réfuter</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser un lieu géométrique</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Critiquer des données</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Construire à l'échelle</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Croiser deux médiatrices</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Chercher toutes les solutions</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Résoudre un problème complet</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>Plus grand côté : $80$ m ; somme des deux autres : $45 + 60 = 105$ m.\n   Comme $80 &lt; 105$, le terrain peut exister.</li>\n<li>À l'échelle $1$ cm pour $10$ m, on construit un triangle de côtés $8$ cm, $6$ cm et\n   $4{,}5$ cm (tracer le côté de $8$ cm, puis deux arcs de $6$ cm et $4{,}5$ cm).</li>\n<li>Périmètre $= 45 + 60 + 80 = 185$ m.</li>\n<li>Coût $= 185 \\times 120 = 22\\,200$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M05",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Matériel : règle, équerre, compas</p>\n<h2 id=\"exercice-1-5-points-constructibilite\">Exercice 1 (5 points) — Constructibilité</h2>\n<ol>\n<li>Dire, en justifiant par un calcul, si un triangle de ces longueurs existe :\n   a) $3$ cm, $9$ cm, $5$ cm  b) $6$ cm, $8$ cm, $13$ cm\n   c) $4$ cm, $4$ cm, $8$ cm  d) $9$ cm, $12$ cm, $15$ cm</li>\n<li>Dans un triangle $ABC$, $AB = 7$ cm et $AC = 10$ cm. Entre quelles valeurs $BC$\n   est-elle comprise ?</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1a</td>\n<td>impossible, $9 &gt; 3 + 5$</td>\n<td>0,75</td>\n</tr>\n<tr>\n<td>1b</td>\n<td>possible, $13 &lt; 6 + 8$</td>\n<td>0,75</td>\n</tr>\n<tr>\n<td>1c</td>\n<td>points alignés, $8 = 4 + 4$</td>\n<td>0,75</td>\n</tr>\n<tr>\n<td>1d</td>\n<td>possible, $15 &lt; 9 + 12$</td>\n<td>0,75</td>\n</tr>\n<tr>\n<td>2</td>\n<td>encadrement $3 &lt; BC &lt; 17$</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-construction\">Exercice 2 (5 points) — Construction</h2>\n<ol>\n<li>Construire un triangle $RST$ tel que $RS = 7$ cm, $RT = 6$ cm et $ST = 4$ cm.\n   Vérifier d'abord qu'il est constructible.</li>\n<li>Construire au compas la médiatrice du segment $[RS]$.</li>\n<li>Nommer $I$ le point où cette médiatrice coupe $[RS]$ et donner la longueur $RI$.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>vérification $7 &lt; 6 + 4$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>1</td>\n<td>construction correcte aux arcs de cercle</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>médiatrice au compas (traits de construction visibles)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$RI = 3{,}5$ cm</td>\n<td>0,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-justifier\">Exercice 3 (5 points) — Justifier</h2>\n<p>Soit $[AB]$ un segment de $8$ cm et $(m)$ sa médiatrice.\n1. Le point $K$ appartient à $(m)$ et $KA = 6{,}5$ cm. Donner $KB$ en citant la propriété.\n2. Le point $L$ vérifie $LA = LB = 9$ cm. Que peut-on dire de $L$ ? Citer la propriété.\n3. Le point $N$ vérifie $NA = 5$ cm et $NB = 7$ cm. Le point $N$ appartient-il à $(m)$ ?\n   Justifier.\n4. Un élève affirme : « tout point $M$ tel que $MA = MB$ est le milieu de $[AB]$ ».\n   Cette affirmation est-elle correcte ? Expliquer.</p>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$KB = 6{,}5$ cm + propriété</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$L$ appartient à $(m)$ + réciproque</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>non, car $NA \\neq NB$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>faux, avec explication</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points-le-point-de-rencontre\">Exercice 4 (5 points) — Le point de rencontre</h2>\n<p>Deux douars $D_1$ et $D_2$ sont distants de $10$ km. On veut installer une école à\n$7$ km de chaque douar.\n1. Vérifier que cette situation est possible.\n2. Faire une figure à l'échelle $1$ cm pour $1$ km et construire l'emplacement de l'école.\n3. Expliquer pourquoi l'école se trouve sur la médiatrice de $[D_1D_2]$.\n4. Combien d'emplacements possibles existe-t-il ?</p>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$10 &lt; 7 + 7 = 14$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>figure correcte avec arcs de $7$ cm</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3</td>\n<td>équidistance, propriété citée</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>deux emplacements</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>a) Plus grande longueur $9$ ; $3 + 5 = 8$ ; comme $9 &gt; 8$, le triangle est <strong>impossible</strong>.\n   b) Plus grande longueur $13$ ; $6 + 8 = 14$ ; comme $13 &lt; 14$, le triangle <strong>existe</strong>.\n   c) Plus grande longueur $8$ ; $4 + 4 = 8$ ; il y a égalité, les points sont <strong>alignés</strong>.\n   d) Plus grande longueur $15$ ; $9 + 12 = 21$ ; comme $15 &lt; 21$, le triangle <strong>existe</strong>.</li>\n<li>On doit avoir $BC &lt; AB + AC = 17$ cm, et aussi $AC &lt; AB + BC$, soit $10 &lt; 7 + BC$,\n   c'est-à-dire $BC &gt; 3$ cm. Donc $3 &lt; BC &lt; 17$ (en centimètres).</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>Plus grande longueur : $7$ cm ; $6 + 4 = 10 &gt; 7$ : le triangle est constructible.\n   Construction : tracer $[RS]$ de $7$ cm ; arc de centre $R$ et de rayon $6$ cm ;\n   arc de centre $S$ et de rayon $4$ cm ; leur intersection donne $T$ ; tracer $[RT]$ et $[ST]$.</li>\n<li>Médiatrice de $[RS]$ : écartement de compas supérieur à $3{,}5$ cm, deux arcs centrés\n   en $R$, deux arcs centrés en $S$, puis on relie les deux points d'intersection.</li>\n<li>$I$ est le milieu de $[RS]$, donc $RI = 7 \\div 2 = 3{,}5$ cm.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$KB = KA = 6{,}5$ cm : si un point est sur la médiatrice d'un segment, il est\n   équidistant des extrémités de ce segment.</li>\n<li>$LA = LB$, donc $L$ appartient à la médiatrice $(m)$ de $[AB]$ (réciproque de la\n   propriété).</li>\n<li>Non : $NA = 5$ cm et $NB = 7$ cm sont différentes, donc $N$ n'est pas équidistant de\n   $A$ et de $B$, donc $N \\notin (m)$.</li>\n<li>L'affirmation est <strong>fausse</strong>. Tous les points de la médiatrice vérifient $MA = MB$,\n   et il y en a une infinité. Le milieu de $[AB]$ n'est que <strong>l'un</strong> d'entre eux : c'est\n   le seul qui appartienne au segment $[AB]$.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>Plus grande longueur : $10$ km ; somme des deux autres : $7 + 7 = 14$ km.\n   Comme $10 &lt; 14$, la situation est possible.</li>\n<li>On trace $[D_1D_2]$ de $10$ cm, puis un arc de centre $D_1$ et de rayon $7$ cm et un\n   arc de centre $D_2$ et de rayon $7$ cm. Leur intersection donne l'emplacement $E$.</li>\n<li>On a $ED_1 = ED_2 = 7$ km : le point $E$ est équidistant de $D_1$ et de $D_2$, il\n   appartient donc à la médiatrice de $[D_1D_2]$.</li>\n<li>Les deux arcs se coupent en deux points, situés de part et d'autre de la droite\n   $(D_1D_2)$ : il y a donc <strong>deux emplacements possibles</strong>.</li>\n</ol>"
 }
},

{
 "id": "m06",
 "domaine": "maths",
 "unite": 6,
 "theme": "Géométrie",
 "tag": "M06",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M06 — Les angles",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Nommer, noter et lire un angle.",
  "Mesurer un angle au rapporteur et construire un angle donné.",
  "Classer un angle : nul, aigu, droit, obtus, plat.",
  "Construire la bissectrice d'un angle.",
  "Reconnaître des angles adjacents, complémentaires, supplémentaires, opposés par le sommet.",
  "Calculer un angle manquant dans un triangle."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>À Agadir, un pêcheur oriente la voile de sa barque. Le mât et la bôme partent du même\npoint. Quand le vent tourne, l'écart entre les deux pièces de bois change : il s'ouvre\nou il se ferme. Cet <strong>écart d'ouverture</strong> entre deux demi-droites qui partent d'un même\npoint, c'est ce que les mathématiciens appellent un <strong>angle</strong>.</p>\n<p>Deux remarques importantes dès le départ :</p>\n<ul>\n<li>Un angle ne dépend <strong>pas</strong> de la longueur des demi-droites. Si on rallonge le mât, l'angle\n  ne change pas.</li>\n<li>Un angle se <strong>mesure</strong>, en degrés, avec un instrument : le <strong>rapporteur</strong>.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Sur ta feuille, place un point $O$. Trace deux demi-droites $[Ox)$ et $[Oy)$\nqui partent de $O$. Prolonge maintenant $[Ox)$ jusqu'au bord de la feuille.</p>\n<p><strong>Observation.</strong> La figure « s'agrandit », mais l'ouverture entre les deux demi-droites est\nrestée la même. Si tu mesures au rapporteur avant et après, tu lis la même valeur.</p>\n<p><strong>Conclusion.</strong> La mesure d'un angle ne dépend que de l'ouverture, jamais de la longueur\ndes traits dessinés.</p>\n<p><strong>Activité 2.</strong> Trace un angle $\\widehat{AOB}$ d'ouverture quelconque. Plie ta feuille de\nfaçon que la demi-droite $[OA)$ vienne exactement sur $[OB)$. Déplie : le pli passe par $O$\net coupe l'angle en deux parties <strong>superposables</strong>. Ce pli s'appelle la <strong>bissectrice</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-vocabulaire-et-notation\">3.1 Vocabulaire et notation</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>angle</strong> est la figure formée par deux demi-droites de même origine.\nCette origine commune est le <strong>sommet</strong> de l'angle ; les deux demi-droites sont les\n<strong>côtés</strong> de l'angle.</p>\n</blockquote>\n<p>Si le sommet est $O$ et si $A$ et $B$ sont deux points pris sur les côtés, l'angle se note\n$\\widehat{AOB}$ ou $\\widehat{BOA}$. <strong>La lettre du sommet est toujours au milieu.</strong></p>\n<p>Sa mesure en degrés se note $\\widehat{AOB} = 50^\\circ$ ; on lit « l'angle A O B mesure\n50 degrés ». L'unité est le <strong>degré</strong>, de symbole $^\\circ$.</p>\n<pre><code>        B\n       /\n      /\n     /\n    O------------ A     angle AOB : sommet O, côtés [OA) et [OB)\n</code></pre>\n<p>⚠️ <strong>Erreur fréquente.</strong> Écrire $\\widehat{OAB}$ pour un angle de sommet $O$. La lettre\ncentrale désigne le sommet : $\\widehat{OAB}$ est l'angle de sommet $A$, ce n'est pas le même.</p>\n<h3 id=\"32-mesurer-un-angle-au-rapporteur\">3.2 Mesurer un angle au rapporteur</h3>\n<p><strong>Méthode (pas à pas).</strong>\n1. Place le <strong>centre</strong> du rapporteur (la petite croix ou le trait au milieu du bord droit)\n   exactement sur le <strong>sommet</strong> de l'angle.\n2. Fais coïncider le <strong>zéro</strong> d'une des deux graduations avec un <strong>côté</strong> de l'angle.\n3. Lis la graduation traversée par l'<strong>autre côté</strong>, en suivant la même série de nombres\n   que celle où tu as lu le zéro.\n4. Écris le résultat : $\\widehat{AOB} = \\dots^\\circ$.</p>\n<p>Si un côté est trop court pour atteindre la graduation, <strong>prolonge-le</strong> à la règle : cela ne\nchange pas l'angle.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Confondre les deux séries de nombres du rapporteur et lire $130^\\circ$\nau lieu de $50^\\circ$. Contrôle : un angle visiblement plus fermé qu'un angle droit mesure\nmoins de $90^\\circ$.</p>\n<h3 id=\"33-construire-un-angle-de-mesure-donnee\">3.3 Construire un angle de mesure donnée</h3>\n<p>Pour construire $\\widehat{xOy} = 65^\\circ$ :\n1. Trace une demi-droite $[Ox)$.\n2. Pose le rapporteur, centre sur $O$, zéro sur $[Ox)$.\n3. Marque un point $M$ en face de la graduation $65$.\n4. Trace la demi-droite $[OM)$ : c'est $[Oy)$.</p>\n<h3 id=\"34-les-differents-types-dangles\">3.4 Les différents types d'angles</h3>\n<blockquote>\n<p><strong>Propriété (classement).</strong> Soit $a$ la mesure d'un angle.\n- $a = 0^\\circ$ : angle <strong>nul</strong> (les deux côtés sont confondus) ;\n- $0^\\circ &lt; a &lt; 90^\\circ$ : angle <strong>aigu</strong> ;\n- $a = 90^\\circ$ : angle <strong>droit</strong> (côtés perpendiculaires) ;\n- $90^\\circ &lt; a &lt; 180^\\circ$ : angle <strong>obtus</strong> ;\n- $a = 180^\\circ$ : angle <strong>plat</strong> (les côtés forment une droite).</p>\n</blockquote>\n<p><strong>Exemple.</strong> $\\widehat{A} = 34^\\circ$ est aigu ; $\\widehat{B} = 118^\\circ$ est obtus ;\n$\\widehat{C} = 90^\\circ$ est droit.</p>\n<h3 id=\"35-la-bissectrice-dun-angle\">3.5 La bissectrice d'un angle</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>bissectrice</strong> d'un angle est la demi-droite qui part du sommet et\nqui partage l'angle en <strong>deux angles de même mesure</strong>.</p>\n</blockquote>\n<p>Si $[Oz)$ est la bissectrice de $\\widehat{xOy}$, alors\n$$\\widehat{xOz} = \\widehat{zOy} = \\dfrac{\\widehat{xOy}}{2}.$$</p>\n<p><strong>Construction au rapporteur.</strong> On mesure $\\widehat{xOy}$, on divise la mesure par $2$, puis on\nconstruit un angle de cette mesure à partir d'un côté.</p>\n<p><strong>Construction au compas.</strong>\n1. Pointe en $O$, trace un arc qui coupe $[Ox)$ en $M$ et $[Oy)$ en $N$.\n2. Pointe en $M$, trace un arc à l'intérieur de l'angle ; garde le même écartement,\n   pointe en $N$, trace un second arc. Les deux arcs se coupent en $P$.\n3. Trace $[OP)$ : c'est la bissectrice.</p>\n<h3 id=\"36-angles-adjacents-complementaires-supplementaires\">3.6 Angles adjacents, complémentaires, supplémentaires</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux angles sont <strong>adjacents</strong> lorsqu'ils ont le même sommet, un côté\ncommun, et qu'ils sont situés <strong>de part et d'autre</strong> de ce côté commun.</p>\n<p><strong>Définition.</strong> Deux angles sont <strong>complémentaires</strong> si la somme de leurs mesures vaut\n$90^\\circ$. Ils sont <strong>supplémentaires</strong> si cette somme vaut $180^\\circ$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $27^\\circ$ et $63^\\circ$ sont complémentaires car $27 + 63 = 90$.\n$110^\\circ$ et $70^\\circ$ sont supplémentaires car $110 + 70 = 180$.</p>\n<p>Attention : complémentaires ou supplémentaires ne veut pas dire adjacents. Deux angles peuvent\nêtre supplémentaires même s'ils sont dessinés sur deux figures différentes.</p>\n<h3 id=\"37-angles-opposes-par-le-sommet\">3.7 Angles opposés par le sommet</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux angles sont <strong>opposés par le sommet</strong> lorsque les côtés de l'un sont\nles prolongements des côtés de l'autre.</p>\n<p><strong>Propriété.</strong> Deux angles opposés par le sommet ont la <strong>même mesure</strong>.</p>\n</blockquote>\n<pre><code>        \\   1   /\n         \\     /\n      4   \\   /   2\n   --------X--------\n          /   \\\n         /  3  \\\n</code></pre>\n<p>Ici $\\widehat{1} = \\widehat{3}$ et $\\widehat{2} = \\widehat{4}$ ; de plus $\\widehat{1}$ et\n$\\widehat{2}$ sont supplémentaires.</p>\n<h3 id=\"38-somme-des-angles-dun-triangle\">3.8 Somme des angles d'un triangle</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Dans <strong>tout</strong> triangle, la somme des mesures des trois angles vaut $180^\\circ$.\nPour un triangle $ABC$ : $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.</p>\n</blockquote>\n<p>Conséquences utiles :\n- un triangle a au plus un angle droit ou obtus ;\n- dans un triangle rectangle, les deux angles aigus sont complémentaires ;\n- dans un triangle équilatéral, chaque angle mesure $\\dfrac{180^\\circ}{3} = 60^\\circ$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Dans le triangle $ABC$, $\\widehat{A} = 47^\\circ$ et $\\widehat{B} = 68^\\circ$.\nCalculer $\\widehat{C}$.</p>\n<p><em>Solution.</em> $\\widehat{C} = 180^\\circ - (47^\\circ + 68^\\circ) = 180^\\circ - 115^\\circ = 65^\\circ$.</p>\n<p><strong>Exemple 2.</strong> $[Oz)$ est la bissectrice de $\\widehat{xOy}$ et $\\widehat{xOz} = 36^\\circ$.\nCalculer $\\widehat{xOy}$.</p>\n<p><em>Solution.</em> La bissectrice partage l'angle en deux angles égaux, donc\n$\\widehat{xOy} = 2 \\times 36^\\circ = 72^\\circ$.</p>\n<p><strong>Exemple 3.</strong> Le triangle $MNP$ est isocèle en $M$ et $\\widehat{M} = 40^\\circ$.\nCalculer $\\widehat{N}$ et $\\widehat{P}$.</p>\n<p><em>Solution.</em> Le triangle étant isocèle en $M$, $\\widehat{N} = \\widehat{P}$.\nIl reste $180^\\circ - 40^\\circ = 140^\\circ$ pour ces deux angles, donc\n$\\widehat{N} = \\widehat{P} = 140^\\circ \\div 2 = 70^\\circ$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Un angle : deux demi-droites, un sommet commun ; la lettre du sommet se note au milieu.</li>\n<li>La mesure ne dépend pas de la longueur des côtés ; on mesure en degrés au rapporteur.</li>\n<li>Nul $0^\\circ$ · aigu $&lt; 90^\\circ$ · droit $= 90^\\circ$ · obtus entre $90^\\circ$ et $180^\\circ$ · plat $= 180^\\circ$.</li>\n<li>La bissectrice partage l'angle en deux angles de même mesure.</li>\n<li>Complémentaires : somme $90^\\circ$. Supplémentaires : somme $180^\\circ$.</li>\n<li>Angles opposés par le sommet : même mesure.</li>\n<li>Dans tout triangle : $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Fabrique un rapporteur en papier calque en reportant un demi-tour partagé en 180 parts.</li>\n<li>Cherche les angles des panneaux routiers de ta ville : lesquels sont aigus, obtus ?</li>\n<li>Prépare la leçon M07 : la bissectrice devient une des quatre droites remarquables du triangle.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Prog-Horaires-college_.aspx\">Programmes et horaires du secondaire collégial — MEN Maroc</a></li>\n<li><a href=\"https://www.tawjihnet.net/actualites/wp-content/uploads/2024/01/Programme-adapte-College-25-Janvier-2024-Version-Finale1.pdf\">Programme adapté du collège, version 2024</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"definitions-cles\">Définitions clés</h2>\n<ul>\n<li><strong>Angle</strong> : figure formée par deux demi-droites de même origine. L'origine est le <strong>sommet</strong>,\n  les demi-droites sont les <strong>côtés</strong>.</li>\n<li><strong>Notation</strong> : $\\widehat{AOB}$, sommet $O$ au milieu. Mesure en <strong>degrés</strong> ($^\\circ$).</li>\n<li><strong>Bissectrice</strong> : demi-droite issue du sommet qui partage l'angle en deux angles égaux.</li>\n<li><strong>Angles adjacents</strong> : même sommet, un côté commun, de part et d'autre de ce côté.</li>\n</ul>\n<h2 id=\"tableau-des-types-dangles\">Tableau des types d'angles</h2>\n<table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Mesure $a$</th>\n<th>Aspect</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Nul</td>\n<td>$a = 0^\\circ$</td>\n<td>côtés confondus</td>\n</tr>\n<tr>\n<td>Aigu</td>\n<td>$0^\\circ &lt; a &lt; 90^\\circ$</td>\n<td>plus fermé qu'un angle droit</td>\n</tr>\n<tr>\n<td>Droit</td>\n<td>$a = 90^\\circ$</td>\n<td>côtés perpendiculaires</td>\n</tr>\n<tr>\n<td>Obtus</td>\n<td>$90^\\circ &lt; a &lt; 180^\\circ$</td>\n<td>plus ouvert qu'un angle droit</td>\n</tr>\n<tr>\n<td>Plat</td>\n<td>$a = 180^\\circ$</td>\n<td>côtés alignés (une droite)</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"tableau-des-relations\">Tableau des relations</h2>\n<table>\n<thead>\n<tr>\n<th>Relation</th>\n<th>Condition</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Complémentaires</td>\n<td>somme $= 90^\\circ$</td>\n<td>$25^\\circ$ et $65^\\circ$</td>\n</tr>\n<tr>\n<td>Supplémentaires</td>\n<td>somme $= 180^\\circ$</td>\n<td>$115^\\circ$ et $65^\\circ$</td>\n</tr>\n<tr>\n<td>Opposés par le sommet</td>\n<td>côtés dans le prolongement</td>\n<td>mesures <strong>égales</strong></td>\n</tr>\n<tr>\n<td>Bissectrice $[Oz)$</td>\n<td>$\\widehat{xOz} = \\widehat{zOy} = \\dfrac{\\widehat{xOy}}{2}$</td>\n<td>$\\widehat{xOy}=70^\\circ \\Rightarrow 35^\\circ$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"formules-a-connaitre\">Formules à connaître</h2>\n<p>$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ \\quad \\text{(tout triangle)}$$\n$$\\text{triangle équilatéral : chaque angle } = 60^\\circ$$\n$$\\text{triangle rectangle en } A : \\widehat{B} + \\widehat{C} = 90^\\circ$$\n$$\\text{triangle isocèle en } A : \\widehat{B} = \\widehat{C} = \\dfrac{180^\\circ - \\widehat{A}}{2}$$</p>\n<h2 id=\"methode-mesurer-au-rapporteur\">Méthode : mesurer au rapporteur</h2>\n<ol>\n<li>Centre du rapporteur sur le <strong>sommet</strong>.</li>\n<li>Zéro d'une graduation sur un <strong>côté</strong>.</li>\n<li>Lire la graduation traversée par l'autre côté, <strong>même série de nombres</strong>.</li>\n<li>Prolonger un côté trop court : la mesure ne change pas.</li>\n</ol>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li><strong>Lettre du sommet mal placée</strong> : l'angle de sommet $O$ s'écrit $\\widehat{AOB}$, jamais $\\widehat{OAB}$.</li>\n<li><strong>Mauvaise graduation du rapporteur</strong> : $130^\\circ$ lu à la place de $50^\\circ$. Vérifie\n   toujours en comparant à l'angle droit.</li>\n<li><strong>Longueur des côtés</strong> : un côté plus long ne donne pas un angle plus grand.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Angle droit $= 90^\\circ$ · demi-tour $= 180^\\circ$ · tour complet $= 360^\\circ$ ·\nangle d'un triangle équilatéral $= 60^\\circ$ · la somme des angles d'un triangle est\n<strong>toujours</strong> $180^\\circ$, quel que soit le triangle.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Nommer un angle",
   "diff": "facile",
   "q": "<p>Sur une feuille, place un point $O$, puis trace trois demi-droites $[OA)$, $[OB)$ et $[OC)$\ndistinctes, dans cet ordre en tournant, de sorte que $[OB)$ soit <strong>entre</strong> $[OA)$ et $[OC)$.\n1. Écris les trois angles que l'on peut lire sur la figure.\n2. Pour l'angle $\\widehat{AOB}$, donne le sommet et les deux côtés.\n3. Explique pourquoi l'écriture $\\widehat{OAB}$ ne désigne pas le même angle.</p>",
   "modele": "<ol>\n<li>Les trois angles sont $\\widehat{AOB}$, $\\widehat{BOC}$ et $\\widehat{AOC}$.</li>\n<li>$\\widehat{AOB}$ a pour sommet $O$ et pour côtés les demi-droites $[OA)$ et $[OB)$.</li>\n<li>Dans la notation d'un angle, la lettre <strong>du milieu</strong> est celle du sommet. Dans\n   $\\widehat{OAB}$ la lettre du milieu est $A$ : cet angle aurait pour sommet $A$, ce qui\n   n'est pas le cas ici.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Classer des angles",
   "diff": "facile",
   "q": "<p>Classe chacun des angles suivants en : nul, aigu, droit, obtus ou plat.\n$$\\widehat{A} = 12^\\circ \\quad \\widehat{B} = 90^\\circ \\quad \\widehat{C} = 143^\\circ \\quad\n\\widehat{D} = 180^\\circ \\quad \\widehat{E} = 89^\\circ \\quad \\widehat{F} = 0^\\circ \\quad\n\\widehat{G} = 97^\\circ$$</p>",
   "modele": "<ul>\n<li>$\\widehat{A} = 12^\\circ$ : <strong>aigu</strong> ($0 &lt; 12 &lt; 90$).</li>\n<li>$\\widehat{B} = 90^\\circ$ : <strong>droit</strong>.</li>\n<li>$\\widehat{C} = 143^\\circ$ : <strong>obtus</strong> ($90 &lt; 143 &lt; 180$).</li>\n<li>$\\widehat{D} = 180^\\circ$ : <strong>plat</strong>.</li>\n<li>$\\widehat{E} = 89^\\circ$ : <strong>aigu</strong> (juste en dessous de $90^\\circ$).</li>\n<li>$\\widehat{F} = 0^\\circ$ : <strong>nul</strong>.</li>\n<li>$\\widehat{G} = 97^\\circ$ : <strong>obtus</strong>.</li>\n</ul>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Angles complémentaires",
   "diff": "facile",
   "q": "<p>Pour chaque angle, calcule la mesure de son complémentaire.\n$$30^\\circ \\quad 45^\\circ \\quad 12^\\circ \\quad 78^\\circ \\quad 6^\\circ$$</p>",
   "modele": "<p>On calcule $90^\\circ - a$ :\n- $90 - 30 = 60$, donc $60^\\circ$.\n- $90 - 45 = 45$, donc $45^\\circ$.\n- $90 - 12 = 78$, donc $78^\\circ$.\n- $90 - 78 = 12$, donc $12^\\circ$.\n- $90 - 6 = 84$, donc $84^\\circ$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Angles supplémentaires",
   "diff": "facile",
   "q": "<p>Pour chaque angle, calcule la mesure de son supplémentaire.\n$$100^\\circ \\quad 45^\\circ \\quad 90^\\circ \\quad 173^\\circ \\quad 28^\\circ$$</p>",
   "modele": "<p>On calcule $180^\\circ - a$ :\n- $180 - 100 = 80$, donc $80^\\circ$.\n- $180 - 45 = 135$, donc $135^\\circ$.\n- $180 - 90 = 90$, donc $90^\\circ$.\n- $180 - 173 = 7$, donc $7^\\circ$.\n- $180 - 28 = 152$, donc $152^\\circ$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Bissectrice",
   "diff": "facile",
   "q": "<ol>\n<li>$[Oz)$ est la bissectrice de $\\widehat{xOy}$. Calcule $\\widehat{xOz}$ lorsque\n   $\\widehat{xOy} = 80^\\circ$, puis lorsque $\\widehat{xOy} = 126^\\circ$, puis lorsque\n   $\\widehat{xOy} = 45^\\circ$.</li>\n<li>$[Ot)$ est la bissectrice de $\\widehat{uOv}$ et $\\widehat{uOt} = 27^\\circ$.\n   Calcule $\\widehat{uOv}$.</li>\n</ol>",
   "modele": "<ol>\n<li>La bissectrice partage l'angle en deux angles égaux, donc $\\widehat{xOz} = \\dfrac{\\widehat{xOy}}{2}$ :\n   - $\\dfrac{80}{2} = 40$, soit $40^\\circ$ ;\n   - $\\dfrac{126}{2} = 63$, soit $63^\\circ$ ;\n   - $\\dfrac{45}{2} = 22{,}5$, soit $22{,}5^\\circ$.</li>\n<li>Ici on remonte : $\\widehat{uOv} = 2 \\times 27^\\circ = 54^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Troisième angle d'un triangle",
   "diff": "facile",
   "q": "<p>Dans chaque cas, calcule la mesure du troisième angle du triangle $ABC$.\n1. $\\widehat{A} = 52^\\circ$ et $\\widehat{B} = 61^\\circ$.\n2. $\\widehat{A} = 90^\\circ$ et $\\widehat{B} = 37^\\circ$.\n3. $\\widehat{A} = 105^\\circ$ et $\\widehat{B} = 25^\\circ$.</p>\n<hr />",
   "modele": "<p>On utilise $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.\n1. $\\widehat{C} = 180 - (52 + 61) = 180 - 113 = 67$, soit $\\widehat{C} = 67^\\circ$.\n2. $\\widehat{C} = 180 - (90 + 37) = 180 - 127 = 53$, soit $\\widehat{C} = 53^\\circ$.\n3. $\\widehat{C} = 180 - (105 + 25) = 180 - 130 = 50$, soit $\\widehat{C} = 50^\\circ$.</p>\n<hr />\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Construire et partager",
   "diff": "",
   "q": "<ol>\n<li>Construis au rapporteur trois angles : $\\widehat{xOy} = 55^\\circ$,\n   $\\widehat{uAv} = 128^\\circ$, $\\widehat{mBn} = 90^\\circ$.</li>\n<li>Pour chacun, construis la bissectrice au compas.</li>\n<li>Vérifie au rapporteur la mesure de chaque demi-angle et compare avec le calcul.</li>\n</ol>",
   "modele": "<ol>\n<li>Construction au rapporteur : on trace un côté, on place le centre du rapporteur sur le\n   sommet, le zéro sur ce côté, on marque la graduation voulue ($55$, $128$, $90$), puis on\n   trace la seconde demi-droite.</li>\n<li>Construction de la bissectrice au compas : arc de centre le sommet coupant les deux côtés\n   en $M$ et $N$ ; deux arcs de même rayon de centres $M$ et $N$ se coupant en $P$ ; la\n   bissectrice est la demi-droite issue du sommet passant par $P$.</li>\n<li>Valeurs attendues à la vérification :\n   $\\dfrac{55}{2} = 27{,}5^\\circ$ ; $\\dfrac{128}{2} = 64^\\circ$ ; $\\dfrac{90}{2} = 45^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Opposés par le sommet",
   "diff": "",
   "q": "<p>Deux droites $(d)$ et $(d')$ se coupent en $I$. Elles forment quatre angles que l'on note\n$\\widehat{1}$, $\\widehat{2}$, $\\widehat{3}$, $\\widehat{4}$ en tournant dans le sens des\naiguilles d'une montre. On sait que $\\widehat{1} = 63^\\circ$.\n1. Quel angle est opposé par le sommet à $\\widehat{1}$ ? Donne sa mesure.\n2. Calcule $\\widehat{2}$ et $\\widehat{4}$ en justifiant.\n3. Vérifie que $\\widehat{1} + \\widehat{2} + \\widehat{3} + \\widehat{4} = 360^\\circ$.</p>",
   "modele": "<ol>\n<li>En tournant, $\\widehat{3}$ est opposé par le sommet à $\\widehat{1}$ (leurs côtés sont dans\n   le prolongement l'un de l'autre). Donc $\\widehat{3} = \\widehat{1} = 63^\\circ$.</li>\n<li>$\\widehat{1}$ et $\\widehat{2}$ sont adjacents et forment ensemble un angle plat, donc ils\n   sont supplémentaires : $\\widehat{2} = 180 - 63 = 117^\\circ$.\n   $\\widehat{4}$ est opposé par le sommet à $\\widehat{2}$, donc $\\widehat{4} = 117^\\circ$.</li>\n<li>$63 + 117 + 63 + 117 = 360$. La somme vaut bien $360^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Angles adjacents",
   "diff": "",
   "q": "<p>$\\widehat{xOy}$ mesure $137^\\circ$. La demi-droite $[Oz)$ est située à l'intérieur de cet\nangle et $\\widehat{xOz} = 48^\\circ$.\n1. Explique pourquoi $\\widehat{xOz}$ et $\\widehat{zOy}$ sont adjacents.\n2. Calcule $\\widehat{zOy}$.\n3. $[Oz)$ est-elle la bissectrice de $\\widehat{xOy}$ ? Justifie.</p>",
   "modele": "<ol>\n<li>Les angles $\\widehat{xOz}$ et $\\widehat{zOy}$ ont le même sommet $O$, le côté commun\n   $[Oz)$, et ils sont situés de part et d'autre de ce côté : ils sont <strong>adjacents</strong>.</li>\n<li>$\\widehat{zOy} = \\widehat{xOy} - \\widehat{xOz} = 137 - 48 = 89$, soit $89^\\circ$.</li>\n<li>Non : pour que $[Oz)$ soit la bissectrice, il faudrait $\\widehat{xOz} = \\widehat{zOy}$.\n   Or $48^\\circ \\neq 89^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Triangle isocèle",
   "diff": "",
   "q": "<ol>\n<li>Le triangle $ABC$ est isocèle en $A$ et $\\widehat{A} = 36^\\circ$.\n   Calcule $\\widehat{B}$ et $\\widehat{C}$.</li>\n<li>Le triangle $DEF$ est isocèle en $D$ et $\\widehat{E} = 50^\\circ$. Calcule $\\widehat{F}$\n   puis $\\widehat{D}$.</li>\n</ol>",
   "modele": "<ol>\n<li>Le triangle est isocèle en $A$, donc $\\widehat{B} = \\widehat{C}$.\n   $\\widehat{B} + \\widehat{C} = 180 - 36 = 144$, donc $\\widehat{B} = \\widehat{C} = \\dfrac{144}{2} = 72^\\circ$.</li>\n<li>Le triangle $DEF$ est isocèle en $D$, donc $\\widehat{E} = \\widehat{F} = 50^\\circ$.\n   Puis $\\widehat{D} = 180 - (50 + 50) = 180 - 100 = 80^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Triangle rectangle",
   "diff": "",
   "q": "<p>Le triangle $RST$ est rectangle en $R$ et $\\widehat{S} = 27^\\circ$.\n1. Calcule $\\widehat{T}$.\n2. Que peut-on dire des angles $\\widehat{S}$ et $\\widehat{T}$ ? Justifie par une propriété.\n3. Le triangle $RST$ peut-il être isocèle en $R$ ? Explique.</p>",
   "modele": "<ol>\n<li>$\\widehat{T} = 180 - (90 + 27) = 180 - 117 = 63^\\circ$.</li>\n<li>$\\widehat{S} + \\widehat{T} = 27 + 63 = 90^\\circ$ : ces deux angles sont <strong>complémentaires</strong>.\n   C'est une propriété générale du triangle rectangle : les deux angles aigus d'un triangle\n   rectangle sont complémentaires.</li>\n<li>Non. Si $RST$ était isocèle en $R$, on aurait $\\widehat{S} = \\widehat{T}$, c'est-à-dire\n   $45^\\circ$ chacun. Or $\\widehat{S} = 27^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Deux bissectrices de suite",
   "diff": "",
   "q": "<p>$\\widehat{xOy} = 84^\\circ$. $[Oz)$ est la bissectrice de $\\widehat{xOy}$, puis $[Ot)$ est la\nbissectrice de $\\widehat{xOz}$.\n1. Calcule $\\widehat{xOz}$.\n2. Calcule $\\widehat{xOt}$.\n3. Calcule $\\widehat{tOy}$.</p>\n<hr />",
   "modele": "<ol>\n<li>$\\widehat{xOz} = \\dfrac{84}{2} = 42^\\circ$.</li>\n<li>$\\widehat{xOt} = \\dfrac{\\widehat{xOz}}{2} = \\dfrac{42}{2} = 21^\\circ$.</li>\n<li>$\\widehat{tOy} = \\widehat{xOy} - \\widehat{xOt} = 84 - 21 = 63^\\circ$.</li>\n</ol>\n<hr />\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le terrain de sport de Casablanca",
   "diff": "difficile",
   "q": "<p>Sur un terrain de handball, trois joueurs occupent les positions $A$, $B$ et $C$ et forment\nun triangle. L'entraîneur mesure sur son schéma $\\widehat{ABC} = 74^\\circ$ et\n$\\widehat{BCA} = 58^\\circ$.\n1. Calcule $\\widehat{BAC}$.\n2. Le triangle $ABC$ est-il rectangle ? isocèle ? Justifie tes réponses.\n3. Le joueur en $A$ se déplace pour que $\\widehat{BAC}$ devienne droit, les angles en $B$ et\n   $C$ restant égaux entre eux. Calcule alors $\\widehat{ABC}$.</p>",
   "modele": "<ol>\n<li>$\\widehat{BAC} = 180 - (74 + 58) = 180 - 132 = 48^\\circ$.</li>\n<li>Aucun angle ne vaut $90^\\circ$ : le triangle n'est <strong>pas rectangle</strong>. Les trois angles\n   $48^\\circ$, $74^\\circ$ et $58^\\circ$ sont deux à deux différents : le triangle n'est <strong>pas\n   isocèle</strong> non plus. Il est quelconque.</li>\n<li>Si $\\widehat{BAC} = 90^\\circ$, il reste $180 - 90 = 90^\\circ$ pour $\\widehat{ABC}$ et\n   $\\widehat{BCA}$, qui sont égaux : $\\widehat{ABC} = \\dfrac{90}{2} = 45^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Angles proportionnels",
   "diff": "difficile",
   "q": "<p>Dans le triangle $MNP$, on sait que $\\widehat{P} = 60^\\circ$ et que $\\widehat{M}$ est le\ndouble de $\\widehat{N}$.\n1. Calcule $\\widehat{M} + \\widehat{N}$.\n2. En déduis $\\widehat{N}$, puis $\\widehat{M}$.\n3. Classe chacun des trois angles (aigu, droit ou obtus).</p>",
   "modele": "<ol>\n<li>$\\widehat{M} + \\widehat{N} = 180 - 60 = 120^\\circ$.</li>\n<li>Comme $\\widehat{M} = 2 \\times \\widehat{N}$, on a $2\\widehat{N} + \\widehat{N} = 120$, donc\n   $3 \\widehat{N} = 120$ et $\\widehat{N} = \\dfrac{120}{3} = 40^\\circ$.\n   Puis $\\widehat{M} = 2 \\times 40 = 80^\\circ$.\n   Vérification : $80 + 40 + 60 = 180$.</li>\n<li>$\\widehat{M} = 80^\\circ$ : aigu ; $\\widehat{N} = 40^\\circ$ : aigu ; $\\widehat{P} = 60^\\circ$ : aigu.\n   Le triangle a ses trois angles aigus.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Une différence de $40^\\circ$",
   "diff": "difficile",
   "q": "<p>Deux angles sont supplémentaires. Le premier mesure $40^\\circ$ de plus que le second.\n1. Note $x$ la mesure du second angle et écris la mesure du premier en fonction de $x$.\n2. Traduis « ils sont supplémentaires » par une égalité.\n3. Trouve les deux mesures, puis vérifie ta réponse.</p>",
   "modele": "<ol>\n<li>Second angle : $x$. Premier angle : $x + 40$.</li>\n<li>Supplémentaires signifie que la somme vaut $180^\\circ$ :\n   $$x + (x + 40) = 180.$$</li>\n<li>$2x + 40 = 180$, donc $2x = 140$ et $x = 70$.\n   Le second angle mesure $70^\\circ$ et le premier $70 + 40 = 110^\\circ$.\n   Vérification : $70 + 110 = 180$ et $110 - 70 = 40$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Figure combinée",
   "diff": "difficile",
   "q": "<p>Deux droites $(AB)$ et $(CD)$ se coupent en $O$. Un point $E$ est placé de façon que le\ntriangle $AOE$ ait un angle $\\widehat{OAE} = 35^\\circ$ et un angle $\\widehat{AEO} = 82^\\circ$.\nOn sait de plus que $\\widehat{AOC} = 118^\\circ$.\n1. Calcule $\\widehat{AOE}$.\n2. Calcule $\\widehat{BOD}$ en utilisant les angles opposés par le sommet.\n3. Calcule $\\widehat{AOD}$.</p>",
   "modele": "<ol>\n<li>Dans le triangle $AOE$ : $\\widehat{AOE} = 180 - (35 + 82) = 180 - 117 = 63^\\circ$.</li>\n<li>$\\widehat{BOD}$ est opposé par le sommet à $\\widehat{AOC}$ (car $B$ est sur $(AB)$ de\n   l'autre côté de $O$ que $A$, et $D$ de l'autre côté que $C$). Donc\n   $\\widehat{BOD} = \\widehat{AOC} = 118^\\circ$.</li>\n<li>$\\widehat{AOC}$ et $\\widehat{AOD}$ sont adjacents et forment l'angle plat $\\widehat{COD}$,\n   donc $\\widehat{AOD} = 180 - 118 = 62^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Programme de construction (la voile d'Agadir)",
   "diff": "difficile",
   "q": "<p>Suis ce programme, puis réponds.\n- Trace un segment $[AB]$ de $8$ cm.\n- Construis $\\widehat{BAC} = 65^\\circ$ avec $AC = 6$ cm.\n- Trace la bissectrice $[Ad)$ de $\\widehat{BAC}$ ; elle coupe $[BC]$ en $I$.\n1. Mesure $\\widehat{BAI}$ au rapporteur et compare avec la valeur calculée.\n2. Mesure $\\widehat{ABC}$ et $\\widehat{ACB}$, puis vérifie que la somme des trois angles du\n   triangle $ABC$ vaut bien $180^\\circ$ (une erreur de $1^\\circ$ à $2^\\circ$ est normale).\n3. Le triangle $ABC$ est-il isocèle ? Justifie à partir de tes mesures.</p>",
   "modele": "<ol>\n<li>Calcul : $\\widehat{BAI} = \\dfrac{65}{2} = 32{,}5^\\circ$. La mesure au rapporteur doit donner\n   $32^\\circ$ ou $33^\\circ$ : c'est cohérent.</li>\n<li>Sur une construction soignée on mesure environ $\\widehat{ABC} \\approx 47^\\circ$ et\n   $\\widehat{ACB} \\approx 68^\\circ$. Contrôle : $65 + 47 + 68 = 180$. La propriété de la somme\n   des angles du triangle est vérifiée.</li>\n<li>Les trois angles obtenus sont différents ($65^\\circ$, $47^\\circ$, $68^\\circ$) et les côtés\n   $AB = 8$ cm et $AC = 6$ cm ne sont pas égaux : le triangle <strong>n'est pas isocèle</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Somme des angles d'un quadrilatère",
   "diff": "difficile",
   "q": "<p>$ABCD$ est un quadrilatère. On trace la diagonale $[AC]$, ce qui le partage en deux triangles\n$ABC$ et $ACD$.\n1. Quelle est la somme des angles du triangle $ABC$ ? du triangle $ACD$ ?\n2. En déduis la somme des quatre angles du quadrilatère $ABCD$.\n3. Dans un quadrilatère $EFGH$, on a $\\widehat{E} = 95^\\circ$, $\\widehat{F} = 78^\\circ$ et\n   $\\widehat{G} = 112^\\circ$. Calcule $\\widehat{H}$.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Communiquer : notation correcte d'un angle</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Représenter : classer selon la mesure</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer : complémentaire</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Calculer : supplémentaire</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Calculer : bissectrice</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Calculer : somme des angles d'un triangle</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Représenter : construire angle et bissectrice</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Raisonner : angles opposés par le sommet</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Raisonner : angles adjacents</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Calculer : triangle isocèle</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Raisonner : triangle rectangle</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Calculer : bissectrices successives</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser : situation sportive</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Raisonner : angles proportionnels</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Modéliser : mise en équation simple</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Raisonner : figure combinée</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Représenter : programme de construction</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Raisonner : extension au quadrilatère</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>La somme des angles du triangle $ABC$ vaut $180^\\circ$ ; celle du triangle $ACD$ vaut aussi\n   $180^\\circ$.</li>\n<li>La diagonale $[AC]$ partage les angles en $A$ et en $C$ du quadrilatère, sans rien ajouter\n   ni retirer. La somme des quatre angles du quadrilatère est donc\n   $$180^\\circ + 180^\\circ = 360^\\circ.$$</li>\n<li>$\\widehat{H} = 360 - (95 + 78 + 112) = 360 - 285 = 75^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M06",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Matériel autorisé : règle, compas, rapporteur, équerre.</p>\n<h2 id=\"exercice-1-5-points-vocabulaire-et-classement\">Exercice 1 (5 points) — Vocabulaire et classement</h2>\n<ol>\n<li>Recopie et complète : « Un angle est formé par deux ……… de même ……… . Cette origine\n   commune s'appelle le ……… de l'angle. »</li>\n<li>Classe les angles suivants (nul, aigu, droit, obtus, plat) :\n   $$14^\\circ \\quad 90^\\circ \\quad 168^\\circ \\quad 180^\\circ \\quad 89^\\circ$$</li>\n<li>Donne le complémentaire de $23^\\circ$, puis le supplémentaire de $23^\\circ$.</li>\n</ol>\n<h2 id=\"exercice-2-5-points-construction\">Exercice 2 (5 points) — Construction</h2>\n<ol>\n<li>Trace un segment $[AB]$ de $7$ cm.</li>\n<li>Construis au rapporteur l'angle $\\widehat{BAC} = 74^\\circ$ avec $AC = 5$ cm.</li>\n<li>Construis au compas la bissectrice $[Ad)$ de l'angle $\\widehat{BAC}$.</li>\n<li>Sans mesurer, donne la mesure de l'angle formé par $[AB)$ et $[Ad)$. Justifie.</li>\n</ol>\n<h2 id=\"exercice-3-5-points-calculs-dangles-dans-un-triangle\">Exercice 3 (5 points) — Calculs d'angles dans un triangle</h2>\n<ol>\n<li>Dans le triangle $ABC$, $\\widehat{A} = 43^\\circ$ et $\\widehat{B} = 66^\\circ$.\n   Calcule $\\widehat{C}$.</li>\n<li>Le triangle $DEF$ est isocèle en $D$ et $\\widehat{D} = 44^\\circ$.\n   Calcule $\\widehat{E}$ et $\\widehat{F}$.</li>\n<li>Le triangle $GHI$ est rectangle en $G$ et $\\widehat{H} = 31^\\circ$. Calcule $\\widehat{I}$\n   et précise la relation entre $\\widehat{H}$ et $\\widehat{I}$.</li>\n</ol>\n<h2 id=\"exercice-4-5-points-probleme\">Exercice 4 (5 points) — Problème</h2>\n<p>Deux droites $(d)$ et $(d')$ se coupent en $O$. Un des quatre angles formés mesure $126^\\circ$.\nOn appelle $\\widehat{xOy}$ cet angle.</p>\n<ol>\n<li>Calcule la mesure de l'angle opposé par le sommet à $\\widehat{xOy}$. Justifie.</li>\n<li>Calcule la mesure de chacun des deux autres angles. Justifie.</li>\n<li>La demi-droite $[Oz)$ est la bissectrice de $\\widehat{xOy}$. Calcule $\\widehat{xOz}$.</li>\n<li>Un ouvrier de Fès affirme : « Ces quatre angles ont pour somme $360^\\circ$. » A-t-il raison ?\n   Vérifie par le calcul.</li>\n</ol>\n<hr />\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.1</td>\n<td>« demi-droites », « origine », « sommet »</td>\n<td>1</td>\n</tr>\n<tr>\n<td>1.2</td>\n<td>5 classements corrects (0,4 pt chacun)</td>\n<td>2</td>\n</tr>\n<tr>\n<td>1.3</td>\n<td>complémentaire $67^\\circ$ et supplémentaire $157^\\circ$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.1</td>\n<td>segment $[AB] = 7$ cm exact</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.2</td>\n<td>angle $74^\\circ$ à $\\pm 2^\\circ$ et $AC = 5$ cm</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.3</td>\n<td>tracé au compas visible (arcs conservés)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.4</td>\n<td>$37^\\circ$ avec justification par la bissectrice</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3.1</td>\n<td>$\\widehat{C} = 71^\\circ$ avec calcul</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3.2</td>\n<td>$\\widehat{E} = \\widehat{F} = 68^\\circ$ avec calcul</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3.3</td>\n<td>$\\widehat{I} = 59^\\circ$ + « complémentaires »</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.1</td>\n<td>$126^\\circ$ + propriété des angles opposés</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.2</td>\n<td>$54^\\circ$ pour chacun + « supplémentaires »</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.3</td>\n<td>$\\widehat{xOz} = 63^\\circ$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.4</td>\n<td>$126 + 54 + 126 + 54 = 360$, il a raison</td>\n<td>1</td>\n</tr>\n<tr>\n<td><strong>Total</strong></td>\n<td></td>\n<td><strong>20</strong></td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>« Un angle est formé par deux <strong>demi-droites</strong> de même <strong>origine</strong>. Cette origine commune\n   s'appelle le <strong>sommet</strong> de l'angle. »</li>\n<li>$14^\\circ$ : aigu · $90^\\circ$ : droit · $168^\\circ$ : obtus · $180^\\circ$ : plat ·\n   $89^\\circ$ : aigu.</li>\n<li>Complémentaire : $90 - 23 = 67^\\circ$. Supplémentaire : $180 - 23 = 157^\\circ$.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>et 2. Construction : tracer $[AB]$ de $7$ cm ; placer le centre du rapporteur en $A$, le\n   zéro sur $[AB)$, marquer la graduation $74$, tracer $[AC)$ et reporter $AC = 5$ cm.</li>\n<li>Bissectrice au compas : arc de centre $A$ coupant $[AB)$ en $M$ et $[AC)$ en $N$ ; deux arcs\n   de même rayon de centres $M$ et $N$ se coupant en $P$ ; tracer $[AP)$.</li>\n<li>La bissectrice partage l'angle en deux angles égaux :\n   $$\\widehat{BAd} = \\dfrac{74^\\circ}{2} = 37^\\circ.$$</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$\\widehat{C} = 180 - (43 + 66) = 180 - 109 = 71^\\circ$.</li>\n<li>Isocèle en $D$ donc $\\widehat{E} = \\widehat{F}$ ; il reste $180 - 44 = 136^\\circ$ à partager :\n   $\\widehat{E} = \\widehat{F} = \\dfrac{136}{2} = 68^\\circ$.</li>\n<li>$\\widehat{I} = 180 - (90 + 31) = 59^\\circ$. Comme $31 + 59 = 90$, les angles $\\widehat{H}$\n   et $\\widehat{I}$ sont <strong>complémentaires</strong> : c'est la propriété des deux angles aigus d'un\n   triangle rectangle.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>L'angle opposé par le sommet a la même mesure : $126^\\circ$.</li>\n<li>Chacun des deux autres angles est adjacent à $\\widehat{xOy}$ et forme avec lui un angle\n   plat : ils sont supplémentaires, donc chacun mesure $180 - 126 = 54^\\circ$.</li>\n<li>$\\widehat{xOz} = \\dfrac{126}{2} = 63^\\circ$.</li>\n<li>$126 + 54 + 126 + 54 = 360$. L'ouvrier a raison : les quatre angles autour du point $O$\n   forment un tour complet, soit $360^\\circ$.</li>\n</ol>"
 }
},

{
 "id": "m07",
 "domaine": "maths",
 "unite": 7,
 "theme": "Géométrie",
 "tag": "M07",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M07 — Droites remarquables dans le triangle",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Reconnaître et définir les quatre droites remarquables d'un triangle.",
  "Construire une médiatrice, une hauteur, une médiane, une bissectrice.",
  "Connaître les quatre points de concours et leur nom.",
  "Construire le cercle circonscrit et le cercle inscrit.",
  "Utiliser ces droites dans le triangle isocèle, équilatéral et rectangle."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Trois douars sont situés en $A$, $B$ et $C$ dans la région de Fès. La commune veut installer\n<strong>un château d'eau à égale distance des trois douars</strong>. Où le placer ?</p>\n<p>Autre question, dans la même région : on veut creuser un puits à l'intérieur du triangle\nformé par trois pistes, de façon qu'il soit <strong>à la même distance des trois pistes</strong>. Ce n'est\npas le même point !</p>\n<p>Ces deux problèmes se résolvent avec des droites particulières du triangle : les <strong>droites\nremarquables</strong>. Il y en a quatre familles, et chacune répond à une question différente.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Trace un triangle $ABC$ assez grand (côtés d'environ $8$, $9$ et $10$ cm).\nConstruis au compas la médiatrice de $[AB]$, puis celle de $[BC]$, puis celle de $[AC]$.</p>\n<p><strong>Observation.</strong> Les trois médiatrices passent toutes par un même point. Appelle-le $O$.\nMesure $OA$, $OB$ et $OC$ : tu trouves trois longueurs égales.</p>\n<p><strong>Conclusion.</strong> Le point $O$ est à égale distance des trois sommets : c'est la solution du\nproblème du château d'eau. Le cercle de centre $O$ et de rayon $OA$ passe par $A$, $B$ et $C$.</p>\n<p><strong>Activité 2.</strong> Sur un nouveau triangle, construis les trois médianes (chaque médiane joint un\nsommet au milieu du côté opposé). Elles se coupent aussi en un seul point. Découpe le triangle\ndans du carton et pose-le en équilibre sur la pointe d'un crayon placée en ce point : il tient.\nCe point s'appelle le <strong>centre de gravité</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-la-mediatrice-dun-cote\">3.1 La médiatrice d'un côté</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>médiatrice</strong> d'un segment est la droite perpendiculaire à ce segment\nqui passe par son milieu.</p>\n<p><strong>Propriété.</strong> Un point appartient à la médiatrice d'un segment si et seulement s'il est à\n<strong>égale distance</strong> des deux extrémités de ce segment.</p>\n</blockquote>\n<p><strong>Construction au compas</strong> de la médiatrice de $[AB]$ :\n1. Pointe en $A$, écartement plus grand que la moitié de $AB$, trace deux arcs (au-dessus et\n   au-dessous de $[AB]$).\n2. Garde le même écartement, pointe en $B$, trace deux arcs. Ils coupent les premiers en deux\n   points $M$ et $N$.\n3. Trace la droite $(MN)$ : c'est la médiatrice de $[AB]$.</p>\n<blockquote>\n<p><strong>Propriété (point de concours).</strong> Les trois médiatrices d'un triangle sont <strong>concourantes</strong> :\nelles se coupent en un même point $O$, appelé <strong>centre du cercle circonscrit</strong>.\nCe cercle, de centre $O$, passe par les trois sommets $A$, $B$ et $C$.</p>\n</blockquote>\n<h3 id=\"32-la-hauteur\">3.2 La hauteur</h3>\n<blockquote>\n<p><strong>Définition.</strong> Une <strong>hauteur</strong> d'un triangle est la droite qui passe par un sommet et qui\nest <strong>perpendiculaire</strong> au côté opposé (ou à son support).</p>\n</blockquote>\n<p>Un triangle a donc trois hauteurs, une par sommet. On les trace à l'équerre : on pose un côté\nde l'équerre sur le côté du triangle, on fait glisser jusqu'au sommet opposé, on trace.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire que la hauteur issue de $A$ passe par le milieu de $[BC]$.\nC'est faux en général : la hauteur est perpendiculaire, la médiane passe par le milieu. Les\ndeux ne coïncident que dans certains triangles particuliers.</p>\n<blockquote>\n<p><strong>Propriété (point de concours).</strong> Les trois hauteurs d'un triangle sont concourantes en un\npoint appelé <strong>orthocentre</strong>, souvent noté $H$.</p>\n</blockquote>\n<p>Remarque : si le triangle a un angle obtus, l'orthocentre est <strong>à l'extérieur</strong> du triangle.\nDans un triangle rectangle, l'orthocentre est le sommet de l'angle droit.</p>\n<h3 id=\"33-la-mediane\">3.3 La médiane</h3>\n<blockquote>\n<p><strong>Définition.</strong> Une <strong>médiane</strong> d'un triangle est la droite qui passe par un sommet et par\nle <strong>milieu du côté opposé</strong>.</p>\n</blockquote>\n<p>Construction : on mesure le côté $[BC]$, on marque son milieu $I$ (ou on trace la médiatrice\nde $[BC]$ pour trouver $I$), puis on trace la droite $(AI)$.</p>\n<blockquote>\n<p><strong>Propriété (point de concours).</strong> Les trois médianes sont concourantes en un point appelé\n<strong>centre de gravité</strong> du triangle, souvent noté $G$. Il est toujours à l'intérieur du triangle.</p>\n</blockquote>\n<p>Une médiane partage le triangle en deux triangles de même aire.</p>\n<h3 id=\"34-la-bissectrice-dun-angle-du-triangle\">3.4 La bissectrice d'un angle du triangle</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>bissectrice</strong> d'un angle du triangle est la demi-droite issue du sommet\nqui partage cet angle en deux angles de même mesure (voir M06).</p>\n<p><strong>Propriété.</strong> Un point appartient à la bissectrice d'un angle si et seulement s'il est à\n<strong>égale distance des deux côtés</strong> de cet angle.</p>\n<p><strong>Propriété (point de concours).</strong> Les trois bissectrices d'un triangle sont concourantes en\nun point $I$, appelé <strong>centre du cercle inscrit</strong>. Ce cercle est tangent aux trois côtés du\ntriangle, et il est situé à l'intérieur du triangle.</p>\n</blockquote>\n<p>C'est le point du puits de la situation d'entrée.</p>\n<h3 id=\"35-tableau-de-synthese\">3.5 Tableau de synthèse</h3>\n<table>\n<thead>\n<tr>\n<th>Droite</th>\n<th>Définition</th>\n<th>Point de concours</th>\n<th>Cercle associé</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Médiatrice</td>\n<td>perpendiculaire à un côté en son milieu</td>\n<td>centre du cercle <strong>circonscrit</strong> ($O$)</td>\n<td>passe par $A$, $B$, $C$</td>\n</tr>\n<tr>\n<td>Hauteur</td>\n<td>passe par un sommet, perpendiculaire au côté opposé</td>\n<td><strong>orthocentre</strong> ($H$)</td>\n<td>—</td>\n</tr>\n<tr>\n<td>Médiane</td>\n<td>passe par un sommet et le milieu du côté opposé</td>\n<td><strong>centre de gravité</strong> ($G$)</td>\n<td>—</td>\n</tr>\n<tr>\n<td>Bissectrice</td>\n<td>partage un angle en deux angles égaux</td>\n<td>centre du cercle <strong>inscrit</strong> ($I$)</td>\n<td>tangent aux 3 côtés</td>\n</tr>\n</tbody>\n</table>\n<p>⚠️ <strong>Erreur fréquente.</strong> Confondre médiatrice et médiane. La <strong>médiatrice</strong> est perpendiculaire\net passe par le milieu d'un côté, mais <strong>pas</strong> par un sommet. La <strong>médiane</strong> part d'un sommet\net va au milieu du côté opposé, mais <strong>n'est pas perpendiculaire</strong> à ce côté en général.</p>\n<h3 id=\"36-cas-des-triangles-particuliers\">3.6 Cas des triangles particuliers</h3>\n<blockquote>\n<p><strong>Propriété (triangle isocèle).</strong> Dans un triangle $ABC$ isocèle en $A$, la médiatrice de\n$[BC]$, la hauteur issue de $A$, la médiane issue de $A$ et la bissectrice de $\\widehat{A}$\nsont <strong>une seule et même droite</strong> : l'axe de symétrie du triangle.</p>\n<p><strong>Propriété (triangle équilatéral).</strong> Dans un triangle équilatéral, cette confusion a lieu\npour les trois sommets. Les quatre points $O$, $H$, $G$ et $I$ sont <strong>confondus</strong> en un seul\npoint, le centre du triangle.</p>\n<p><strong>Propriété (triangle rectangle).</strong> Dans un triangle $ABC$ rectangle en $A$ :\n- les côtés $[AB]$ et $[AC]$ sont eux-mêmes deux des hauteurs ; l'orthocentre est $A$ ;\n- le centre $O$ du cercle circonscrit est le <strong>milieu de l'hypoténuse</strong> $[BC]$, et\n  $$OA = OB = OC = \\dfrac{BC}{2}.$$</p>\n</blockquote>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> $ABC$ est un triangle isocèle en $A$ avec $BC = 6$ cm. $I$ est le milieu de\n$[BC]$. Que peut-on dire de la droite $(AI)$ ?</p>\n<p><em>Solution.</em> $(AI)$ est la médiane issue de $A$. Comme le triangle est isocèle en $A$, cette\ndroite est aussi la hauteur issue de $A$, la médiatrice de $[BC]$ et la bissectrice de\n$\\widehat{BAC}$. En particulier $(AI) \\perp (BC)$ et $BI = IC = 3$ cm.</p>\n<p><strong>Exemple 2.</strong> $ABC$ est rectangle en $A$ avec $BC = 10$ cm. On note $O$ le centre du cercle\ncirconscrit. Calculer $OA$.</p>\n<p><em>Solution.</em> Dans un triangle rectangle, $O$ est le milieu de l'hypoténuse $[BC]$, donc\n$OA = \\dfrac{BC}{2} = \\dfrac{10}{2} = 5$ cm.</p>\n<p><strong>Exemple 3.</strong> Dans un triangle $MNP$, $O$ est le point de concours des médiatrices et\n$OM = 4{,}2$ cm. Que valent $ON$ et $OP$ ?</p>\n<p><em>Solution.</em> $O$ est à égale distance des trois sommets, donc $ON = OP = OM = 4{,}2$ cm.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Médiatrice → perpendiculaire au milieu d'un côté → point $O$ → cercle <strong>circonscrit</strong>.</li>\n<li>Hauteur → sommet et perpendiculaire au côté opposé → <strong>orthocentre</strong> $H$.</li>\n<li>Médiane → sommet et milieu du côté opposé → <strong>centre de gravité</strong> $G$.</li>\n<li>Bissectrice → coupe un angle en deux → point $I$ → cercle <strong>inscrit</strong>.</li>\n<li>Triangle isocèle en $A$ : les quatre droites issues de $A$ sont confondues.</li>\n<li>Triangle équilatéral : $O = H = G = I$.</li>\n<li>Triangle rectangle en $A$ : $H = A$ et $O$ est le milieu de l'hypoténuse.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Vérifie expérimentalement que le centre de gravité est situé aux deux tiers de chaque médiane\n  en partant du sommet.</li>\n<li>Construis un triangle obtusangle et observe que son orthocentre sort du triangle.</li>\n<li>Cherche pourquoi un ingénieur qui place une antenne desservant trois villes utilise le\n  cercle circonscrit.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Prog-Horaires-college_.aspx\">Programmes et horaires du secondaire collégial — MEN Maroc</a></li>\n<li><a href=\"https://www.tawjihnet.net/actualites/wp-content/uploads/2024/01/Programme-adapte-College-25-Janvier-2024-Version-Finale1.pdf\">Programme adapté du collège, version 2024</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"les-quatre-familles\">Les quatre familles</h2>\n<table>\n<thead>\n<tr>\n<th>Droite</th>\n<th>Définition</th>\n<th>Se construit avec</th>\n<th>Point de concours</th>\n<th>Cercle</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Médiatrice</strong> d'un côté</td>\n<td>perpendiculaire au côté, passant par son <strong>milieu</strong></td>\n<td>compas (ou équerre + règle)</td>\n<td>$O$, centre du cercle <strong>circonscrit</strong></td>\n<td>passe par les 3 <strong>sommets</strong></td>\n</tr>\n<tr>\n<td><strong>Hauteur</strong> issue d'un sommet</td>\n<td>passe par le sommet, <strong>perpendiculaire</strong> au côté opposé</td>\n<td>équerre</td>\n<td>$H$, <strong>orthocentre</strong></td>\n<td>—</td>\n</tr>\n<tr>\n<td><strong>Médiane</strong> issue d'un sommet</td>\n<td>joint le sommet au <strong>milieu</strong> du côté opposé</td>\n<td>règle graduée</td>\n<td>$G$, <strong>centre de gravité</strong></td>\n<td>—</td>\n</tr>\n<tr>\n<td><strong>Bissectrice</strong> d'un angle</td>\n<td>partage l'angle en <strong>deux angles égaux</strong></td>\n<td>compas (ou rapporteur)</td>\n<td>$I$, centre du cercle <strong>inscrit</strong></td>\n<td><strong>tangent</strong> aux 3 côtés</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"proprietes-caracteristiques\">Propriétés caractéristiques</h2>\n<ul>\n<li>$M$ sur la médiatrice de $[AB]$ $\\iff$ $MA = MB$.</li>\n<li>$O$ centre du cercle circonscrit : $OA = OB = OC = $ rayon.</li>\n<li>$P$ sur la bissectrice de $\\widehat{xOy}$ $\\iff$ $P$ est à la même distance des deux côtés.</li>\n</ul>\n<h2 id=\"triangles-particuliers\">Triangles particuliers</h2>\n<table>\n<thead>\n<tr>\n<th>Triangle</th>\n<th>Ce qu'il faut retenir</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Isocèle en $A$</td>\n<td>médiatrice de $[BC]$ = hauteur issue de $A$ = médiane issue de $A$ = bissectrice de $\\widehat{A}$ (axe de symétrie)</td>\n</tr>\n<tr>\n<td>Équilatéral</td>\n<td>$O = H = G = I$ : un seul point, le centre</td>\n</tr>\n<tr>\n<td>Rectangle en $A$</td>\n<td>orthocentre $H = A$ ; $O$ = milieu de l'hypoténuse ; $OA = OB = OC = \\dfrac{BC}{2}$</td>\n</tr>\n<tr>\n<td>Obtusangle</td>\n<td>l'orthocentre $H$ est <strong>à l'extérieur</strong> du triangle</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li><strong>Médiatrice ≠ médiane.</strong> La médiatrice ne passe pas par un sommet ; la médiane n'est pas\n   perpendiculaire (sauf triangle isocèle ou équilatéral).</li>\n<li><strong>Hauteur ≠ médiane.</strong> La hauteur issue de $A$ ne coupe pas $[BC]$ en son milieu, sauf si le\n   triangle est isocèle en $A$.</li>\n<li><strong>Cercle circonscrit ≠ cercle inscrit.</strong> Le circonscrit passe par les sommets (centre $O$,\n   médiatrices) ; l'inscrit touche les côtés (centre $I$, bissectrices).</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Médiatric<strong>e</strong> → c<strong>e</strong>rcle circonscrit. Bissectr<strong>i</strong>ce → centre <strong>I</strong> du cercle <strong>i</strong>nscrit.\nMédi<strong>a</strong>ne → milieu. H<strong>au</strong>teur → angle droit. Dans le triangle équilatéral, tout se confond.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Vrai ou faux",
   "diff": "facile",
   "q": "<p>Réponds par vrai ou faux et corrige les affirmations fausses.\n1. La médiatrice d'un côté d'un triangle passe toujours par un sommet.\n2. Une hauteur est perpendiculaire à un côté du triangle.\n3. Une médiane passe par le milieu d'un côté.\n4. Les trois bissectrices d'un triangle se coupent en un même point.\n5. Le centre du cercle circonscrit est le point de concours des hauteurs.</p>",
   "modele": "<ol>\n<li><strong>Faux.</strong> La médiatrice d'un côté est perpendiculaire à ce côté en son milieu ; elle ne\n   passe pas par un sommet (sauf cas particulier du triangle isocèle où elle passe par le\n   sommet principal).</li>\n<li><strong>Vrai.</strong> Une hauteur passe par un sommet et est perpendiculaire au côté opposé.</li>\n<li><strong>Vrai.</strong> Une médiane joint un sommet au milieu du côté opposé.</li>\n<li><strong>Vrai.</strong> Elles se coupent au centre $I$ du cercle inscrit.</li>\n<li><strong>Faux.</strong> Le centre du cercle circonscrit est le point de concours des <strong>médiatrices</strong> ;\n   les hauteurs se coupent à l'<strong>orthocentre</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Reconnaître la droite",
   "diff": "facile",
   "q": "<p>Dans le triangle $ABC$, $I$ est le milieu de $[BC]$. Précise, pour chaque droite, s'il s'agit\nd'une médiatrice, d'une hauteur, d'une médiane ou d'une bissectrice.\n1. La droite qui passe par $A$ et $I$.\n2. La droite perpendiculaire à $(BC)$ passant par $I$.\n3. La droite passant par $B$ et perpendiculaire à $(AC)$.\n4. La demi-droite issue de $C$ qui partage $\\widehat{ACB}$ en deux angles de $24^\\circ$.</p>",
   "modele": "<ol>\n<li>$(AI)$ passe par le sommet $A$ et par le milieu $I$ de $[BC]$ : c'est une <strong>médiane</strong>.</li>\n<li>Perpendiculaire à $(BC)$ en son milieu : c'est la <strong>médiatrice</strong> de $[BC]$.</li>\n<li>Passe par le sommet $B$, perpendiculaire au côté opposé $[AC]$ : c'est une <strong>hauteur</strong>.</li>\n<li>Elle partage $\\widehat{ACB}$ en deux angles égaux : c'est la <strong>bissectrice</strong> de $\\widehat{ACB}$\n   (et donc $\\widehat{ACB} = 2 \\times 24 = 48^\\circ$).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Les trois médiatrices",
   "diff": "facile",
   "q": "<p>Construis un triangle $ABC$ tel que $AB = 7$ cm, $AC = 6$ cm et $BC = 5$ cm.\n1. Construis au compas les médiatrices de $[AB]$, de $[BC]$ et de $[AC]$.\n2. Nomme $O$ leur point de concours.\n3. Trace le cercle de centre $O$ passant par $A$. Que remarques-tu pour $B$ et $C$ ?\n4. Mesure le rayon de ce cercle.</p>",
   "modele": "<ol>\n<li>Pour chaque côté : deux arcs de même rayon depuis chaque extrémité, puis la droite joignant\n   les deux points d'intersection.</li>\n<li>Les trois médiatrices passent bien par un même point $O$.</li>\n<li>Le cercle de centre $O$ passant par $A$ passe <strong>aussi</strong> par $B$ et par $C$, car\n   $OA = OB = OC$. C'est le cercle circonscrit au triangle $ABC$.</li>\n<li>Pour ce triangle ($5$, $6$, $7$ cm), on mesure un rayon d'environ $3{,}6$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Les trois hauteurs",
   "diff": "facile",
   "q": "<p>Construis un triangle $DEF$ tel que $DE = 8$ cm, $DF = 6$ cm et $EF = 7$ cm.\n1. Trace à l'équerre les trois hauteurs.\n2. Nomme $H$ leur point de concours et donne son nom mathématique.\n3. $H$ est-il à l'intérieur ou à l'extérieur du triangle ?</p>",
   "modele": "<ol>\n<li>Pour chaque sommet, on pose l'équerre sur le côté opposé et on trace la perpendiculaire\n   passant par le sommet.</li>\n<li>Les trois hauteurs se coupent en $H$ : c'est l'<strong>orthocentre</strong> du triangle $DEF$.</li>\n<li>Le triangle $DEF$ (côtés $6$, $7$, $8$ cm) a ses trois angles aigus : $H$ est <strong>à\n   l'intérieur</strong> du triangle.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Les trois médianes",
   "diff": "facile",
   "q": "<p>Construis un triangle $MNP$ tel que $MN = 9$ cm, $MP = 7$ cm et $NP = 8$ cm.\n1. Place les milieux $I$ de $[NP]$, $J$ de $[MP]$ et $K$ de $[MN]$.\n2. Trace les trois médianes et nomme $G$ leur point de concours.\n3. Mesure $MI$ et $MG$. Compare $MG$ à $\\dfrac{2}{3} \\times MI$.</p>",
   "modele": "<ol>\n<li>On repère les milieux à la règle graduée : $I$ tel que $NI = IP = 4$ cm, $J$ tel que\n   $MJ = JP = 3{,}5$ cm, $K$ tel que $MK = KN = 4{,}5$ cm.</li>\n<li>Les trois médianes $(MI)$, $(NJ)$ et $(PK)$ se coupent en $G$, le <strong>centre de gravité</strong>.</li>\n<li>On mesure $MI = 7$ cm et $MG \\approx 4{,}7$ cm. Or\n   $\\dfrac{2}{3} \\times 7 = \\dfrac{14}{3} \\approx 4{,}7$. Les deux valeurs coïncident :\n   $G$ est situé aux deux tiers de la médiane en partant du sommet.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Les trois bissectrices",
   "diff": "facile",
   "q": "<p>Construis un triangle $RST$ tel que $RS = 8$ cm, $\\widehat{SRT} = 50^\\circ$ et $RT = 7$ cm.\n1. Construis au compas les bissectrices des trois angles.\n2. Nomme $I$ leur point de concours.\n3. Trace le cercle de centre $I$ tangent au côté $[RS]$. Vérifie qu'il touche aussi les deux\n   autres côtés.</p>\n<hr />",
   "modele": "<ol>\n<li>Construction au compas pour chaque angle : arc de centre le sommet coupant les deux côtés,\n   puis deux arcs de même rayon se coupant à l'intérieur de l'angle.</li>\n<li>Les trois bissectrices se coupent en $I$, centre du cercle inscrit.</li>\n<li>Le cercle de centre $I$ tangent à $[RS]$ (rayon = distance de $I$ à $[RS]$, mesurée\n   perpendiculairement) touche aussi $[RT]$ et $[ST]$, car $I$ est à égale distance des trois\n   côtés.</li>\n</ol>\n<hr />\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Triangle rectangle et cercle circonscrit",
   "diff": "",
   "q": "<p>$ABC$ est un triangle rectangle en $A$ avec $BC = 12$ cm. $O$ est le centre de son cercle\ncirconscrit.\n1. Où se trouve précisément le point $O$ ?\n2. Calcule $OA$, $OB$ et $OC$.\n3. Quel est l'orthocentre de ce triangle ? Justifie.</p>",
   "modele": "<ol>\n<li>Dans un triangle rectangle, le centre du cercle circonscrit est le <strong>milieu de\n   l'hypoténuse</strong>, ici le milieu de $[BC]$.</li>\n<li>$OA = OB = OC = \\dfrac{BC}{2} = \\dfrac{12}{2} = 6$ cm.</li>\n<li>Les côtés $[AB]$ et $[AC]$ sont perpendiculaires : $(AB)$ est la hauteur issue de $B$ et\n   $(AC)$ la hauteur issue de $C$. Elles se coupent en $A$, donc l'<strong>orthocentre est $A$</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Triangle isocèle",
   "diff": "",
   "q": "<p>$ABC$ est isocèle en $A$ avec $AB = AC = 7$ cm et $BC = 5$ cm. $I$ est le milieu de $[BC]$.\n1. Cite les quatre droites remarquables auxquelles $(AI)$ appartient.\n2. Calcule $BI$.\n3. On donne $\\widehat{BAC} = 42^\\circ$. Calcule $\\widehat{BAI}$, puis $\\widehat{ABC}$.</p>",
   "modele": "<ol>\n<li>$(AI)$ est à la fois : la <strong>médiane</strong> issue de $A$, la <strong>hauteur</strong> issue de $A$, la\n   <strong>médiatrice</strong> de $[BC]$ et la <strong>bissectrice</strong> de $\\widehat{BAC}$. C'est l'axe de symétrie\n   du triangle.</li>\n<li>$I$ est le milieu de $[BC]$, donc $BI = \\dfrac{BC}{2} = \\dfrac{5}{2} = 2{,}5$ cm.</li>\n<li>$(AI)$ étant la bissectrice de $\\widehat{BAC}$ : $\\widehat{BAI} = \\dfrac{42}{2} = 21^\\circ$.\n   Le triangle étant isocèle en $A$, $\\widehat{ABC} = \\widehat{ACB}$ et\n   $\\widehat{ABC} = \\dfrac{180 - 42}{2} = \\dfrac{138}{2} = 69^\\circ$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Triangle équilatéral",
   "diff": "",
   "q": "<p>$ABC$ est un triangle équilatéral de côté $6$ cm.\n1. Quelle est la mesure de chacun de ses angles ?\n2. Que peut-on dire des points $O$, $H$, $G$ et $I$ de ce triangle ?\n3. Construis la figure, place ce point unique et trace le cercle circonscrit puis le cercle\n   inscrit. Ont-ils le même centre ? le même rayon ?</p>",
   "modele": "<ol>\n<li>Chaque angle mesure $\\dfrac{180^\\circ}{3} = 60^\\circ$.</li>\n<li>Dans un triangle équilatéral, les quatre points $O$, $H$, $G$ et $I$ sont <strong>confondus</strong> en\n   un seul point : le centre du triangle.</li>\n<li>Les deux cercles ont bien le <strong>même centre</strong>, mais <strong>pas le même rayon</strong> : le cercle\n   circonscrit (qui passe par les sommets) a un rayon d'environ $3{,}5$ cm, le cercle inscrit\n   (tangent aux côtés) un rayon d'environ $1{,}7$ cm, soit la moitié.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Un orthocentre à l'extérieur",
   "diff": "",
   "q": "<p>Construis un triangle $ABC$ tel que $\\widehat{BAC} = 115^\\circ$, $AB = 5$ cm et $AC = 4$ cm.\n1. Trace les trois hauteurs (pense à prolonger les côtés).\n2. Où se situe l'orthocentre ?\n3. Explique en une phrase le lien entre l'angle obtus et cette position.</p>",
   "modele": "<ol>\n<li>Pour tracer les hauteurs issues de $B$ et de $C$, il faut <strong>prolonger</strong> les côtés $[AC]$ et\n   $[AB]$ au-delà de $A$ : les pieds des hauteurs tombent sur ces prolongements.</li>\n<li>L'orthocentre se situe <strong>à l'extérieur</strong> du triangle, du côté opposé à l'angle obtus.</li>\n<li>Lorsqu'un angle du triangle est obtus, deux des pieds des hauteurs sortent des côtés : le\n   point de concours des hauteurs se retrouve donc hors du triangle.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Propriété de la médiatrice",
   "diff": "",
   "q": "<p>Sur une figure, $M$ est un point de la médiatrice de $[AB]$ et $MA = 6{,}5$ cm.\n1. Que vaut $MB$ ? Justifie par la propriété du cours.\n2. $N$ est un autre point tel que $NA = 4$ cm et $NB = 4$ cm. Le point $N$ appartient-il à la\n   médiatrice de $[AB]$ ? Justifie.\n3. $P$ vérifie $PA = 5$ cm et $PB = 7$ cm. Que peut-on dire de $P$ ?</p>",
   "modele": "<ol>\n<li>Un point de la médiatrice de $[AB]$ est à égale distance de $A$ et de $B$, donc\n   $MB = MA = 6{,}5$ cm.</li>\n<li>Oui : $NA = NB = 4$ cm, donc $N$ est à égale distance de $A$ et de $B$. D'après la propriété\n   caractéristique, $N$ appartient à la médiatrice de $[AB]$.</li>\n<li>$PA \\neq PB$ ($5 \\neq 7$), donc $P$ <strong>n'appartient pas</strong> à la médiatrice de $[AB]$. Comme\n   $PA &lt; PB$, le point $P$ se trouve du côté de $A$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Tableau de synthèse à remplir",
   "diff": "",
   "q": "<p>Recopie ce tableau sur ta feuille et remplis chaque case.</p>\n<table>\n<thead>\n<tr>\n<th>Famille de droites</th>\n<th>Définition en une phrase</th>\n<th>Nom du point de concours</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Médiatrices</td>\n<td>…</td>\n<td>…</td>\n</tr>\n<tr>\n<td>Hauteurs</td>\n<td>…</td>\n<td>…</td>\n</tr>\n<tr>\n<td>Médianes</td>\n<td>…</td>\n<td>…</td>\n</tr>\n<tr>\n<td>Bissectrices</td>\n<td>…</td>\n<td>…</td>\n</tr>\n</tbody>\n</table>\n<hr />",
   "modele": "<table>\n<thead>\n<tr>\n<th>Famille de droites</th>\n<th>Définition en une phrase</th>\n<th>Nom du point de concours</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Médiatrices</td>\n<td>droite perpendiculaire à un côté passant par son milieu</td>\n<td>centre $O$ du cercle circonscrit</td>\n</tr>\n<tr>\n<td>Hauteurs</td>\n<td>droite passant par un sommet et perpendiculaire au côté opposé</td>\n<td>orthocentre $H$</td>\n</tr>\n<tr>\n<td>Médianes</td>\n<td>droite passant par un sommet et par le milieu du côté opposé</td>\n<td>centre de gravité $G$</td>\n</tr>\n<tr>\n<td>Bissectrices</td>\n<td>demi-droite issue d'un sommet partageant l'angle en deux angles égaux</td>\n<td>centre $I$ du cercle inscrit</td>\n</tr>\n</tbody>\n</table>\n<hr />\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le château d'eau des trois douars",
   "diff": "difficile",
   "q": "<p>Trois douars de la région de Fès sont représentés par les points $A$, $B$ et $C$ d'un plan.\nSur ce plan, $AB = 8$ cm, $BC = 6$ cm et $AC = 7$ cm ; l'échelle est $1$ cm pour $500$ m.\n1. Construis le triangle $ABC$.\n2. La commune veut placer un château d'eau à égale distance des trois douars. Quelle\n   construction faut-il faire ? Réalise-la et place le point $E$.\n3. Mesure $EA$ sur le plan, puis calcule la distance réelle en mètres entre le château d'eau\n   et le douar $A$.</p>",
   "modele": "<ol>\n<li>Construction classique au compas : $[AB] = 8$ cm, puis arc de centre $A$ de rayon $7$ cm et\n   arc de centre $B$ de rayon $6$ cm ; leur intersection donne $C$.</li>\n<li>Le château d'eau doit être à égale distance des trois sommets : il faut construire les\n   <strong>médiatrices</strong> des côtés. Leur point de concours est le point $E$ cherché (centre du cercle\n   circonscrit).</li>\n<li>On mesure $EA \\approx 4{,}1$ cm. Comme $1$ cm représente $500$ m :\n   $$4{,}1 \\times 500 = 2\\,050 \\text{ m}.$$\n   Le château d'eau est à environ $2\\,050$ m (soit $2{,}05$ km) du douar $A$ — et à la même\n   distance des deux autres douars.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Le puits au milieu des pistes",
   "diff": "difficile",
   "q": "<p>Trois pistes forment un triangle $PQR$ avec $PQ = 9$ cm, $PR = 8$ cm et $QR = 7$ cm sur le plan.\nOn veut creuser un puits à l'intérieur du triangle, à la même distance des trois pistes.\n1. Quelles droites remarquables faut-il construire ? Pourquoi ?\n2. Réalise la construction et place le point $J$.\n3. Trace le cercle de centre $J$ tangent aux trois côtés et mesure son rayon.\n4. Explique pourquoi le point du château d'eau (exercice 13) et le point du puits ne sont pas\n   la même sorte de point.</p>",
   "modele": "<ol>\n<li>Il faut construire les <strong>bissectrices</strong> des angles du triangle : un point situé à égale\n   distance de deux côtés d'un angle est sur la bissectrice de cet angle.</li>\n<li>Le point de concours des trois bissectrices est $J$, centre du cercle inscrit.</li>\n<li>Le cercle de centre $J$ tangent aux trois côtés a ici un rayon d'environ $2{,}2$ cm.</li>\n<li>Le château d'eau doit être à égale distance des trois <strong>sommets</strong> (des douars, qui sont des\n   points) : c'est le centre du cercle <strong>circonscrit</strong>, obtenu avec les médiatrices. Le puits\n   doit être à égale distance des trois <strong>côtés</strong> (des pistes, qui sont des droites) : c'est le\n   centre du cercle <strong>inscrit</strong>, obtenu avec les bissectrices. Ce sont deux points différents.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Programme de construction",
   "diff": "difficile",
   "q": "<p>Suis ce programme :\n- Trace un segment $[AB]$ de $10$ cm.\n- Construis la médiatrice de $[AB]$ ; elle coupe $[AB]$ en $I$.\n- Place sur cette médiatrice un point $C$ tel que $IC = 6$ cm.\n- Trace le triangle $ABC$.\n1. Quelle est la nature du triangle $ABC$ ? Justifie avec la propriété de la médiatrice.\n2. Que représente la droite $(CI)$ pour le triangle $ABC$ ? Cite au moins trois réponses.\n3. Mesure $\\widehat{ACB}$ au rapporteur, puis calcule $\\widehat{CAB}$.</p>",
   "modele": "<ol>\n<li>$C$ appartient à la médiatrice de $[AB]$, donc $CA = CB$ : le triangle $ABC$ est\n   <strong>isocèle en $C$</strong>.</li>\n<li>La droite $(CI)$ est la médiatrice de $[AB]$, la hauteur issue de $C$, la médiane issue de\n   $C$ et la bissectrice de $\\widehat{ACB}$ : c'est l'axe de symétrie du triangle.</li>\n<li>On mesure $\\widehat{ACB} \\approx 80^\\circ$. Comme le triangle est isocèle en $C$ :\n   $$\\widehat{CAB} = \\dfrac{180^\\circ - 80^\\circ}{2} = 50^\\circ.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Quand hauteur et médiane se confondent",
   "diff": "difficile",
   "q": "<p>Dans un triangle $ABC$, la hauteur issue de $A$ coupe $[BC]$ exactement en son milieu $I$.\n1. Que peut-on dire de la droite $(AI)$ vis-à-vis du segment $[BC]$ ?\n2. En utilisant la propriété caractéristique de la médiatrice, montre que $AB = AC$.\n3. Conclus sur la nature du triangle $ABC$.</p>",
   "modele": "<ol>\n<li>$(AI)$ est perpendiculaire à $[BC]$ (c'est une hauteur) et passe par le milieu $I$ de\n   $[BC]$ : $(AI)$ est donc la <strong>médiatrice</strong> de $[BC]$.</li>\n<li>$A$ appartient à la médiatrice de $[BC]$. Or tout point de la médiatrice d'un segment est à\n   égale distance de ses extrémités. Donc $AB = AC$.</li>\n<li>Le triangle $ABC$ est <strong>isocèle en $A$</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Terrain de sport à Agadir",
   "diff": "difficile",
   "q": "<p>Un terrain triangulaire $ABC$ est rectangle en $A$. On mesure $AB = 30$ m, $AC = 40$ m et\n$BC = 50$ m. Un projecteur doit être placé au centre du cercle circonscrit au terrain.\n1. Où faut-il placer le projecteur ? Justifie.\n2. Calcule la distance entre le projecteur et chacun des trois sommets.\n3. Le gardien affirme que le projecteur est à égale distance des trois côtés du terrain.\n   A-t-il raison ? Explique.</p>",
   "modele": "<ol>\n<li>Le triangle est rectangle en $A$ : le centre du cercle circonscrit est le <strong>milieu de\n   l'hypoténuse</strong> $[BC]$. Le projecteur doit donc être placé au milieu du côté $[BC]$.</li>\n<li>$OA = OB = OC = \\dfrac{BC}{2} = \\dfrac{50}{2} = 25$ m.</li>\n<li>Non, le gardien a tort. Le point $O$ est à égale distance des trois <strong>sommets</strong>, pas des\n   trois <strong>côtés</strong>. Le point équidistant des trois côtés serait le centre du cercle inscrit,\n   c'est-à-dire le point de concours des bissectrices, qui est un autre point.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Synthèse sur un même triangle",
   "diff": "difficile",
   "q": "<p>$ABC$ est un triangle avec $\\widehat{A} = 80^\\circ$ et $\\widehat{B} = 60^\\circ$.\n1. Calcule $\\widehat{C}$.\n2. La bissectrice issue de $A$ coupe $\\widehat{A}$ en deux angles. Donne leur mesure.\n3. La bissectrice issue de $B$ et celle issue de $A$ se coupent en $I$. En considérant le\n   triangle $ABI$, calcule $\\widehat{AIB}$.\n4. Le point $I$ est-il le centre du cercle inscrit ou du cercle circonscrit ? Justifie.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Communiquer : définitions</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Communiquer : identifier une droite remarquable</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Représenter : médiatrices et cercle circonscrit</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Représenter : hauteurs et orthocentre</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Représenter : médianes et centre de gravité</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Représenter : bissectrices et cercle inscrit</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Raisonner : triangle rectangle</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Calculer : triangle isocèle</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Raisonner : triangle équilatéral</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Représenter : triangle obtusangle</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Raisonner : propriété de la médiatrice</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Communiquer : synthèse organisée</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser : problème d'aménagement</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Modéliser : cercle inscrit</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Chercher : programme de construction</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Raisonner : démonstration simple</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Modéliser : triangle rectangle réel</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Calculer : angles et bissectrices</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$\\widehat{C} = 180 - (80 + 60) = 180 - 140 = 40^\\circ$.</li>\n<li>La bissectrice issue de $A$ donne deux angles de $\\dfrac{80}{2} = 40^\\circ$.</li>\n<li>Dans le triangle $ABI$ : $\\widehat{IAB} = 40^\\circ$ et $\\widehat{ABI} = \\dfrac{60}{2} = 30^\\circ$.\n   Donc\n   $$\\widehat{AIB} = 180 - (40 + 30) = 180 - 70 = 110^\\circ.$$</li>\n<li>$I$ est le point de concours de deux bissectrices, donc le point de concours des trois :\n   c'est le <strong>centre du cercle inscrit</strong> du triangle $ABC$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M07",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Matériel : règle, équerre, compas, rapporteur.</p>\n<h2 id=\"exercice-1-5-points-connaissances\">Exercice 1 (5 points) — Connaissances</h2>\n<ol>\n<li>Donne la définition d'une médiane d'un triangle et celle d'une hauteur.</li>\n<li>Recopie et complète :\n   - Les trois médiatrices se coupent au centre du cercle ……… .\n   - Les trois bissectrices se coupent au centre du cercle ……… .\n   - Les trois hauteurs se coupent en un point appelé ……… .\n   - Les trois médianes se coupent en un point appelé ……… .</li>\n<li>Explique en deux phrases la différence entre une médiatrice et une médiane.</li>\n</ol>\n<h2 id=\"exercice-2-6-points-construction\">Exercice 2 (6 points) — Construction</h2>\n<ol>\n<li>Construis un triangle $ABC$ tel que $AB = 8$ cm, $AC = 6$ cm et $BC = 7$ cm.</li>\n<li>Construis au compas les médiatrices de $[AB]$ et de $[AC]$ ; nomme $O$ leur point\n   d'intersection.</li>\n<li>Trace le cercle circonscrit au triangle $ABC$ et mesure son rayon.</li>\n<li>Trace la hauteur issue de $A$ à l'équerre. Passe-t-elle par $O$ ? Explique.</li>\n</ol>\n<h2 id=\"exercice-3-4-points-triangle-rectangle\">Exercice 3 (4 points) — Triangle rectangle</h2>\n<p>$MNP$ est un triangle rectangle en $M$ avec $NP = 9$ cm.</p>\n<ol>\n<li>Quel est l'orthocentre du triangle $MNP$ ? Justifie.</li>\n<li>Où se trouve le centre $O$ du cercle circonscrit ?</li>\n<li>Calcule $OM$, $ON$ et $OP$.</li>\n</ol>\n<h2 id=\"exercice-4-5-points-probleme\">Exercice 4 (5 points) — Problème</h2>\n<p>Trois villages de la région de Casablanca sont représentés par les points $D$, $E$ et $F$.\nSur le plan, $DE = 9$ cm, $DF = 7$ cm et $EF = 6$ cm ; l'échelle est $1$ cm pour $200$ m.</p>\n<ol>\n<li>Construis le triangle $DEF$.</li>\n<li>On veut installer une antenne à égale distance des trois villages. Quelle famille de droites\n   remarquables faut-il construire ? Justifie ta réponse par une propriété du cours.</li>\n<li>Réalise la construction et place le point $A$ où sera l'antenne.</li>\n<li>Mesure $AD$ sur le plan, puis calcule la distance réelle, en mètres, entre l'antenne et le\n   village $D$.</li>\n</ol>\n<hr />\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.1</td>\n<td>deux définitions correctes</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>1.2</td>\n<td>circonscrit / inscrit / orthocentre / centre de gravité</td>\n<td>2</td>\n</tr>\n<tr>\n<td>1.3</td>\n<td>différence claire (perpendiculaire + milieu vs sommet + milieu)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.1</td>\n<td>triangle construit au compas, mesures exactes</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.2</td>\n<td>deux médiatrices au compas, arcs conservés, point $O$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.3</td>\n<td>cercle passant par $A$, $B$, $C$ + rayon mesuré ($\\approx 4$ cm)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.4</td>\n<td>hauteur tracée + « non, ce sont deux droites différentes »</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3.1</td>\n<td>orthocentre $= M$ avec justification</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3.2</td>\n<td>milieu de l'hypoténuse $[NP]$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3.3</td>\n<td>$OM = ON = OP = 4{,}5$ cm</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.1</td>\n<td>triangle construit correctement</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.2</td>\n<td>médiatrices + propriété d'équidistance aux sommets</td>\n<td>2</td>\n</tr>\n<tr>\n<td>4.3</td>\n<td>point $A$ placé au concours des médiatrices</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.4</td>\n<td>mesure $\\approx 4{,}5$ cm et calcul $\\approx 900$ m</td>\n<td>1</td>\n</tr>\n<tr>\n<td><strong>Total</strong></td>\n<td></td>\n<td><strong>20</strong></td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>Une <strong>médiane</strong> d'un triangle est la droite qui passe par un sommet et par le milieu du\n   côté opposé. Une <strong>hauteur</strong> est la droite qui passe par un sommet et qui est\n   perpendiculaire au côté opposé.</li>\n<li>circonscrit · inscrit · orthocentre · centre de gravité.</li>\n<li>La médiatrice d'un côté est perpendiculaire à ce côté et passe par son milieu, mais ne passe\n   pas par un sommet. La médiane part d'un sommet et rejoint le milieu du côté opposé, sans\n   être perpendiculaire à ce côté (sauf dans un triangle isocèle ou équilatéral).</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>Tracer $[AB] = 8$ cm, puis l'arc de centre $A$ de rayon $6$ cm et l'arc de centre $B$ de\n   rayon $7$ cm : leur intersection donne $C$.</li>\n<li>Médiatrices au compas (arcs de même rayon depuis chaque extrémité du segment), point\n   d'intersection $O$.</li>\n<li>Le cercle de centre $O$ et de rayon $OA$ passe par $B$ et $C$ car $OA = OB = OC$.\n   On mesure un rayon d'environ $4$ cm.</li>\n<li><strong>Non</strong>, en général la hauteur issue de $A$ ne passe pas par $O$. La hauteur est\n   perpendiculaire à $[BC]$ et passe par $A$ ; la médiatrice de $[BC]$ est aussi\n   perpendiculaire à $[BC]$ mais passe par le milieu de $[BC]$ : ces deux droites sont\n   parallèles et distinctes ici, car le triangle n'est pas isocèle en $A$.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>Les côtés $[MN]$ et $[MP]$ sont perpendiculaires. $(MN)$ est la hauteur issue de $N$ et\n   $(MP)$ la hauteur issue de $P$ ; elles se coupent en $M$. L'orthocentre est donc <strong>$M$</strong>.</li>\n<li>Dans un triangle rectangle, le centre du cercle circonscrit est le <strong>milieu de\n   l'hypoténuse</strong>, ici le milieu de $[NP]$.</li>\n<li>$OM = ON = OP = \\dfrac{NP}{2} = \\dfrac{9}{2} = 4{,}5$ cm.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>Tracer $[DE] = 9$ cm, arc de centre $D$ de rayon $7$ cm, arc de centre $E$ de rayon $6$ cm ;\n   intersection : $F$.</li>\n<li>Il faut construire les <strong>médiatrices</strong> des côtés : tout point de la médiatrice d'un segment\n   est à égale distance des deux extrémités de ce segment. Leur point de concours est donc à\n   égale distance de $D$, $E$ et $F$.</li>\n<li>Le point $A$ est le point de concours des trois médiatrices (centre du cercle circonscrit).</li>\n<li>On mesure $AD \\approx 4{,}5$ cm. Comme $1$ cm représente $200$ m :\n   $$4{,}5 \\times 200 = 900 \\text{ m}.$$\n   L'antenne est donc à environ $900$ m de chacun des trois villages.</li>\n</ol>"
 }
},

{
 "id": "m08",
 "domaine": "maths",
 "unite": 8,
 "theme": "Numérique et calcul",
 "tag": "M08",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M08 — Les nombres relatifs : présentation et comparaison",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Comprendre pourquoi les nombres négatifs sont nécessaires.",
  "Lire et écrire un nombre relatif : signe et distance à zéro.",
  "Placer un nombre relatif sur une droite graduée, lire son abscisse.",
  "Trouver l'opposé et la valeur absolue d'un nombre relatif.",
  "Comparer et ranger des nombres relatifs."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Un matin de janvier, la météo annonce : <strong>Ifrane $-6\\ ^\\circ$C</strong>, <strong>Casablanca $+11\\ ^\\circ$C</strong>.\nLe même jour, à la banque, le relevé de Karim indique un solde de $-250$ DH : il <strong>doit</strong> de\nl'argent. Et sur une carte, la mer Morte est indiquée à l'altitude $-430$ m : elle est\n<strong>en dessous</strong> du niveau de la mer.</p>\n<p>Dans ces trois cas, les nombres que tu connais (les nombres positifs) ne suffisent plus. Il faut\npouvoir descendre <strong>au-dessous de zéro</strong>. C'est le rôle des <strong>nombres relatifs</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Voici les températures relevées à Ifrane pendant cinq jours :\n$-6\\ ^\\circ$C, $+2\\ ^\\circ$C, $-1\\ ^\\circ$C, $0\\ ^\\circ$C, $-9\\ ^\\circ$C.</p>\n<ol>\n<li>Quel jour a-t-il fait le plus froid ? le moins froid ?</li>\n<li>Trace une droite horizontale, place le $0$, gradue de centimètre en centimètre et place les\n   cinq températures.</li>\n</ol>\n<p><strong>Observation.</strong> Le jour le plus froid est celui à $-9\\ ^\\circ$C : c'est le nombre placé le\nplus à <strong>gauche</strong>. Le jour le moins froid est celui à $+2\\ ^\\circ$C, placé le plus à <strong>droite</strong>.</p>\n<p><strong>Conclusion.</strong> Ranger des nombres relatifs revient à les lire de gauche à droite sur une droite\ngraduée. Attention : $-9$ est plus <strong>petit</strong> que $-1$, même si $9$ est plus grand que $1$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-vocabulaire\">3.1 Vocabulaire</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>nombre relatif</strong> est un nombre formé d'un <strong>signe</strong> ($+$ ou $-$) et\nd'un nombre positif appelé sa <strong>distance à zéro</strong>.\n- Si le signe est $+$, le nombre est <strong>positif</strong> : $+7$ ; $+3{,}5$ ; $+\\dfrac{1}{2}$.\n- Si le signe est $-$, le nombre est <strong>négatif</strong> : $-7$ ; $-3{,}5$ ; $-\\dfrac{1}{2}$.</p>\n</blockquote>\n<p>Le nombre $0$ est le seul nombre à la fois positif et négatif ; il n'a pas de signe utile.</p>\n<p>Pour un nombre positif, on peut ne pas écrire le signe : $+7$ s'écrit aussi $7$.\nPour un nombre négatif, le signe $-$ est <strong>obligatoire</strong>.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire que le signe $-$ de $-7$ est une soustraction. Ici $-7$ est\n<strong>un nombre</strong>, comme $7$ ou $12$ ; il se lit « moins sept ».</p>\n<h3 id=\"32-la-droite-graduee-et-labscisse\">3.2 La droite graduée et l'abscisse</h3>\n<p>On trace une droite, on choisit un point <strong>origine</strong> $O$ auquel on associe le nombre $0$, un\nsens (vers la droite) et une <strong>unité</strong> de longueur.</p>\n<pre><code>   -5   -4   -3   -2   -1    0   +1   +2   +3   +4   +5\n ---+----+----+----+----+----+----+----+----+----+----+---&gt;\n                             O                    A\n</code></pre>\n<blockquote>\n<p><strong>Définition.</strong> Le nombre associé à un point de la droite graduée s'appelle son <strong>abscisse</strong>.\nOn écrit par exemple $A(+4)$, ce qui se lit « le point $A$ a pour abscisse $+4$ ».</p>\n</blockquote>\n<ul>\n<li>Les nombres <strong>positifs</strong> sont à <strong>droite</strong> de l'origine.</li>\n<li>Les nombres <strong>négatifs</strong> sont à <strong>gauche</strong> de l'origine.</li>\n</ul>\n<h3 id=\"33-loppose-dun-nombre-relatif\">3.3 L'opposé d'un nombre relatif</h3>\n<blockquote>\n<p><strong>Définition.</strong> L'<strong>opposé</strong> d'un nombre relatif est le nombre qui a la <strong>même distance à\nzéro</strong> mais le <strong>signe contraire</strong>.</p>\n</blockquote>\n<p><strong>Exemples.</strong> L'opposé de $+5$ est $-5$. L'opposé de $-8{,}2$ est $+8{,}2$.\nL'opposé de $0$ est $0$.</p>\n<p>Sur la droite graduée, deux nombres opposés sont <strong>symétriques par rapport à l'origine</strong> :\nils sont à la même distance de $0$, de part et d'autre.</p>\n<h3 id=\"34-la-valeur-absolue-la-distance-a-zero\">3.4 La valeur absolue : la distance à zéro</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>valeur absolue</strong> d'un nombre relatif $a$ est sa distance à zéro. On la\nnote $|a|$ ; c'est toujours un nombre <strong>positif ou nul</strong>.</p>\n</blockquote>\n<p><strong>Exemples.</strong>\n$$|+7| = 7 \\qquad |-7| = 7 \\qquad |-3{,}5| = 3{,}5 \\qquad |0| = 0$$</p>\n<p>Méthode : pour obtenir $|a|$, on <strong>enlève le signe</strong>.</p>\n<p>Deux nombres opposés ont la <strong>même valeur absolue</strong> : $|-6| = |+6| = 6$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Écrire $|-7| = -7$. La valeur absolue ne peut jamais être négative :\nc'est une distance.</p>\n<h3 id=\"35-comparer-deux-nombres-relatifs\">3.5 Comparer deux nombres relatifs</h3>\n<blockquote>\n<p><strong>Règle 1.</strong> Un nombre <strong>positif</strong> est toujours plus grand qu'un nombre <strong>négatif</strong>.\nExemple : $+1 &gt; -100$.</p>\n<p><strong>Règle 2.</strong> Entre deux nombres <strong>positifs</strong>, le plus grand est celui qui a la plus grande\nvaleur absolue. Exemple : $+9 &gt; +4$.</p>\n<p><strong>Règle 3.</strong> Entre deux nombres <strong>négatifs</strong>, le plus grand est celui qui a la <strong>plus petite</strong>\nvaleur absolue. Exemple : $-4 &gt; -9$, car $|-4| = 4$ et $|-9| = 9$.</p>\n<p><strong>Règle 4 (générale).</strong> Sur une droite graduée, de deux nombres relatifs, le plus grand est\ncelui qui est situé le plus à <strong>droite</strong>.</p>\n</blockquote>\n<p><strong>Méthode (pas à pas) pour comparer $a$ et $b$.</strong>\n1. Regarde les signes. Signes différents ? Le positif est le plus grand : c'est fini.\n2. Les deux sont positifs ? Compare comme d'habitude.\n3. Les deux sont négatifs ? Compare les valeurs absolues, puis <strong>inverse</strong> la conclusion.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Écrire $-8 &gt; -3$ parce que $8 &gt; 3$. C'est faux : plus un nombre\nnégatif a une grande valeur absolue, plus il est <strong>petit</strong>. On a $-8 &lt; -3$.</p>\n<h3 id=\"36-ranger-une-liste\">3.6 Ranger une liste</h3>\n<p>Ranger dans l'<strong>ordre croissant</strong> = du plus petit au plus grand (de gauche à droite sur la\ndroite graduée). Ranger dans l'<strong>ordre décroissant</strong> = du plus grand au plus petit.</p>\n<p><strong>Méthode.</strong> Sépare d'abord les négatifs des positifs. Range les négatifs en commençant par\ncelui qui a la plus grande valeur absolue, puis place $0$, puis range les positifs.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Comparer $-12$ et $-15$.</p>\n<p><em>Solution.</em> Les deux nombres sont négatifs. $|-12| = 12$ et $|-15| = 15$. Comme $12 &lt; 15$, le\nnombre dont la valeur absolue est la plus petite est le plus grand : $-12 &gt; -15$.</p>\n<p><strong>Exemple 2.</strong> Ranger dans l'ordre croissant : $-3$ ; $+5$ ; $-7{,}5$ ; $0$ ; $+1{,}2$ ; $-0{,}5$.</p>\n<p><em>Solution.</em> Négatifs : $-7{,}5$ ; $-3$ ; $-0{,}5$ (valeurs absolues $7{,}5$ ; $3$ ; $0{,}5$ ;\non part de la plus grande). Puis $0$. Puis les positifs : $+1{,}2$ ; $+5$.\n$$-7{,}5 &lt; -3 &lt; -0{,}5 &lt; 0 &lt; +1{,}2 &lt; +5$$</p>\n<p><strong>Exemple 3.</strong> À Ifrane, la température était de $-4\\ ^\\circ$C à 6 h et de $-9\\ ^\\circ$C à 3 h.\nÀ quelle heure faisait-il le plus froid ?</p>\n<p><em>Solution.</em> $-9 &lt; -4$, donc il faisait plus froid à 3 h.</p>\n<p><strong>Exemple 4.</strong> Le solde de Nadia est $-320$ DH, celui d'Amine $-95$ DH. Qui doit le plus\nd'argent à la banque ?</p>\n<p><em>Solution.</em> $|-320| = 320$ et $|-95| = 95$. Nadia doit $320$ DH, Amine seulement $95$ DH.\nNadia doit le plus d'argent, et son solde est le plus petit : $-320 &lt; -95$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Un nombre relatif = un <strong>signe</strong> + une <strong>distance à zéro</strong>.</li>\n<li>Positifs à droite de $0$, négatifs à gauche, sur la droite graduée.</li>\n<li>L'<strong>abscisse</strong> d'un point est le nombre qui lui est associé.</li>\n<li><strong>Opposé</strong> : même distance à zéro, signe contraire ($-6$ et $+6$).</li>\n<li><strong>Valeur absolue</strong> $|a|$ : distance à zéro, toujours positive ou nulle.</li>\n<li>Positif $&gt;$ négatif, toujours.</li>\n<li>Entre deux négatifs, le plus grand est celui dont la valeur absolue est la <strong>plus petite</strong>.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Relève chaque jour pendant une semaine les températures minimales de Ifrane et de Marrakech,\n  puis range-les dans l'ordre croissant.</li>\n<li>Cherche les altitudes de la mer Morte, de la vallée de la Mort et du niveau de la mer :\n  place-les sur une droite graduée verticale.</li>\n<li>La leçon M09 utilisera ces nombres pour calculer : additions et soustractions de relatifs.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Prog-Horaires-college_.aspx\">Programmes et horaires du secondaire collégial — MEN Maroc</a></li>\n<li><a href=\"https://www.tawjihnet.net/actualites/wp-content/uploads/2024/01/Programme-adapte-College-25-Janvier-2024-Version-Finale1.pdf\">Programme adapté du collège, version 2024</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"definitions-cles\">Définitions clés</h2>\n<ul>\n<li><strong>Nombre relatif</strong> : un <strong>signe</strong> ($+$ ou $-$) suivi d'une <strong>distance à zéro</strong>.</li>\n<li><strong>Positif</strong> : $+5$, $+2{,}3$ (le $+$ peut être omis). <strong>Négatif</strong> : $-5$, $-2{,}3$ (le $-$ est\n  obligatoire). $0$ n'est ni strictement positif ni strictement négatif.</li>\n<li><strong>Abscisse</strong> : nombre associé à un point d'une droite graduée. Notation $A(-3)$.</li>\n<li><strong>Opposé</strong> de $a$ : même distance à zéro, signe contraire. Opposé de $-8$ : $+8$.</li>\n<li><strong>Valeur absolue</strong> $|a|$ : distance à zéro, <strong>toujours positive ou nulle</strong>.</li>\n</ul>\n<h2 id=\"tableau-recapitulatif\">Tableau récapitulatif</h2>\n<table>\n<thead>\n<tr>\n<th>Nombre</th>\n<th>Signe</th>\n<th>Valeur absolue</th>\n<th>Opposé</th>\n<th>Position sur la droite</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$+7$</td>\n<td>positif</td>\n<td>$7$</td>\n<td>$-7$</td>\n<td>à droite de $0$</td>\n</tr>\n<tr>\n<td>$-7$</td>\n<td>négatif</td>\n<td>$7$</td>\n<td>$+7$</td>\n<td>à gauche de $0$</td>\n</tr>\n<tr>\n<td>$-2{,}5$</td>\n<td>négatif</td>\n<td>$2{,}5$</td>\n<td>$+2{,}5$</td>\n<td>à gauche de $0$</td>\n</tr>\n<tr>\n<td>$0$</td>\n<td>—</td>\n<td>$0$</td>\n<td>$0$</td>\n<td>à l'origine</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"regles-de-comparaison\">Règles de comparaison</h2>\n<table>\n<thead>\n<tr>\n<th>Cas</th>\n<th>Règle</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Un positif et un négatif</td>\n<td>le positif est le plus grand</td>\n<td>$+0{,}1 &gt; -1000$</td>\n</tr>\n<tr>\n<td>Deux positifs</td>\n<td>le plus grand est celui de plus grande valeur absolue</td>\n<td>$+12 &gt; +5$</td>\n</tr>\n<tr>\n<td>Deux négatifs</td>\n<td>le plus grand est celui de <strong>plus petite</strong> valeur absolue</td>\n<td>$-5 &gt; -12$</td>\n</tr>\n<tr>\n<td>Cas général</td>\n<td>le plus grand est le plus à <strong>droite</strong> sur la droite graduée</td>\n<td>—</td>\n</tr>\n</tbody>\n</table>\n<p>$$|+9| = 9 \\qquad |-9| = 9 \\qquad |0| = 0$$</p>\n<h2 id=\"methode-ranger-dans-lordre-croissant\">Méthode : ranger dans l'ordre croissant</h2>\n<ol>\n<li>Sépare les négatifs, le zéro, les positifs.</li>\n<li>Range les négatifs de la <strong>plus grande</strong> valeur absolue à la plus petite.</li>\n<li>Place $0$.</li>\n<li>Range les positifs de la plus petite à la plus grande valeur absolue.</li>\n</ol>\n<p>Exemple : $-8 &lt; -4 &lt; -0{,}5 &lt; 0 &lt; +2 &lt; +6{,}3$.</p>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li><strong>$-8 &gt; -3$</strong> : faux. Chez les négatifs, tout s'inverse : $-8 &lt; -3$.</li>\n<li><strong>$|-7| = -7$</strong> : faux. Une valeur absolue est une distance, donc $|-7| = 7$.</li>\n<li><strong>Confondre opposé et valeur absolue</strong> : l'opposé de $-4$ est $+4$ (un nombre relatif) ;\n   la valeur absolue de $-4$ est $4$ (une distance, sans signe).</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Température, altitude, solde bancaire : trois situations où $0$ n'est pas le minimum.\nPlus on va vers la gauche, plus le nombre est petit. Deux opposés sont symétriques par rapport\nà l'origine et ont la même valeur absolue.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Positif ou négatif",
   "diff": "facile",
   "q": "<p>Recopie et indique pour chaque nombre s'il est positif ou négatif, puis donne sa distance à zéro.\n$$-9 \\quad +4 \\quad -0{,}5 \\quad 12 \\quad -25{,}7 \\quad +\\dfrac{3}{4} \\quad -\\dfrac{1}{2}$$</p>",
   "modele": "<table>\n<thead>\n<tr>\n<th>Nombre</th>\n<th>Signe</th>\n<th>Distance à zéro</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$-9$</td>\n<td>négatif</td>\n<td>$9$</td>\n</tr>\n<tr>\n<td>$+4$</td>\n<td>positif</td>\n<td>$4$</td>\n</tr>\n<tr>\n<td>$-0{,}5$</td>\n<td>négatif</td>\n<td>$0{,}5$</td>\n</tr>\n<tr>\n<td>$12$</td>\n<td>positif</td>\n<td>$12$</td>\n</tr>\n<tr>\n<td>$-25{,}7$</td>\n<td>négatif</td>\n<td>$25{,}7$</td>\n</tr>\n<tr>\n<td>$+\\dfrac{3}{4}$</td>\n<td>positif</td>\n<td>$\\dfrac{3}{4}$</td>\n</tr>\n<tr>\n<td>$-\\dfrac{1}{2}$</td>\n<td>négatif</td>\n<td>$\\dfrac{1}{2}$</td>\n</tr>\n</tbody>\n</table>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Écrire avec un nombre relatif",
   "diff": "facile",
   "q": "<p>Traduis chaque phrase par un nombre relatif.\n1. La température à Ifrane est de $6$ degrés en dessous de zéro.\n2. Un plongeur est à $18$ mètres sous le niveau de la mer.\n3. Le sommet du Toubkal culmine à $4\\,167$ mètres au-dessus du niveau de la mer.\n4. Le compte de Salma est débiteur de $340$ DH.\n5. L'ascenseur s'arrête au $3^{\\text{e}}$ sous-sol.</p>",
   "modele": "<ol>\n<li>$-6\\ ^\\circ$C.</li>\n<li>$-18$ m.</li>\n<li>$+4\\,167$ m.</li>\n<li>$-340$ DH (débiteur signifie que le solde est négatif).</li>\n<li>$-3$ (le troisième sous-sol).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Opposés",
   "diff": "facile",
   "q": "<p>Donne l'opposé de chacun des nombres suivants.\n$$+8 \\quad -15 \\quad 0 \\quad -2{,}4 \\quad +100 \\quad -\\dfrac{5}{2}$$</p>",
   "modele": "<p>On garde la distance à zéro et on change le signe :\nopposé de $+8$ : $-8$ · de $-15$ : $+15$ · de $0$ : $0$ · de $-2{,}4$ : $+2{,}4$ ·\nde $+100$ : $-100$ · de $-\\dfrac{5}{2}$ : $+\\dfrac{5}{2}$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Valeurs absolues",
   "diff": "facile",
   "q": "<p>Calcule.\n$$|-11| \\quad |+11| \\quad |0| \\quad |-3{,}6| \\quad |+0{,}9| \\quad \\left|-\\dfrac{7}{4}\\right|$$</p>",
   "modele": "<p>$$|-11| = 11 \\quad |+11| = 11 \\quad |0| = 0 \\quad |-3{,}6| = 3{,}6 \\quad |+0{,}9| = 0{,}9\n\\quad \\left|-\\dfrac{7}{4}\\right| = \\dfrac{7}{4}$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Comparer deux à deux",
   "diff": "facile",
   "q": "<p>Complète par $&lt;$ ou $&gt;$.\n1. $-5 \\ \\dots \\ +2$\n2. $-7 \\ \\dots \\ -3$\n3. $+8 \\ \\dots \\ +13$\n4. $0 \\ \\dots \\ -1$\n5. $-0{,}4 \\ \\dots \\ -0{,}9$\n6. $-100 \\ \\dots \\ +0{,}1$</p>",
   "modele": "<ol>\n<li>$-5 &lt; +2$ (un négatif est plus petit qu'un positif).</li>\n<li>$-7 &lt; -3$ (deux négatifs : $|-7| = 7 &gt; |-3| = 3$, donc $-7$ est le plus petit).</li>\n<li>$+8 &lt; +13$.</li>\n<li>$0 &gt; -1$.</li>\n<li>$-0{,}4 &gt; -0{,}9$ (car $0{,}4 &lt; 0{,}9$).</li>\n<li>$-100 &lt; +0{,}1$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Droite graduée",
   "diff": "facile",
   "q": "<p>On considère une droite graduée d'origine $O$, d'unité $1$ cm.\n1. Trace-la de $-6$ à $+6$.\n2. Place les points $A(+3)$, $B(-4)$, $C(-1{,}5)$, $D(+5)$, $E(0)$.\n3. Quel est le point le plus à gauche ? le plus à droite ?\n4. Quels sont les deux points dont les abscisses sont opposées ? (Ajoute le point $F$ d'abscisse\n   $-3$ si nécessaire.)</p>\n<hr />",
   "modele": "<ol>\n<li>et 2. Droite graduée de $-6$ à $+6$, unité $1$ cm ; $A$ à $3$ cm à droite de $O$, $B$ à\n   $4$ cm à gauche, $C$ à $1{,}5$ cm à gauche, $D$ à $5$ cm à droite, $E$ sur $O$.</li>\n<li>Le point le plus à gauche est $B(-4)$ ; le plus à droite est $D(+5)$.</li>\n<li>En ajoutant $F(-3)$ : les points $A(+3)$ et $F(-3)$ ont des abscisses opposées ; ils sont\n   symétriques par rapport à l'origine $O$.</li>\n</ol>\n<hr />\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Ranger dans l'ordre croissant",
   "diff": "",
   "q": "<p>Range dans l'ordre croissant :\n$$-3 \\ ; \\ +7 \\ ; \\ -8{,}5 \\ ; \\ 0 \\ ; \\ +2{,}5 \\ ; \\ -0{,}75 \\ ; \\ +12 \\ ; \\ -1$$</p>",
   "modele": "<p>Négatifs (de la plus grande valeur absolue à la plus petite) : $-8{,}5$ ; $-3$ ; $-1$ ;\n$-0{,}75$. Puis $0$, puis les positifs : $+2{,}5$ ; $+7$ ; $+12$.\n$$-8{,}5 &lt; -3 &lt; -1 &lt; -0{,}75 &lt; 0 &lt; +2{,}5 &lt; +7 &lt; +12$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Ranger dans l'ordre décroissant",
   "diff": "",
   "q": "<p>Range dans l'ordre décroissant :\n$$-14 \\ ; \\ -1{,}4 \\ ; \\ +1{,}4 \\ ; \\ -0{,}14 \\ ; \\ +14 \\ ; \\ 0 \\ ; \\ -4{,}1$$</p>",
   "modele": "<p>On commence par le plus grand :\n$$+14 &gt; +1{,}4 &gt; 0 &gt; -0{,}14 &gt; -1{,}4 &gt; -4{,}1 &gt; -14$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Vrai ou faux",
   "diff": "",
   "q": "<p>Réponds par vrai ou faux et justifie chaque réponse.\n1. $-6$ est plus grand que $-2$.\n2. La valeur absolue d'un nombre négatif est un nombre positif.\n3. L'opposé de $-5$ est $-5$.\n4. Deux nombres opposés ont la même valeur absolue.\n5. Tout nombre négatif est plus petit que $0$.\n6. $|-4| &lt; |+3|$.</p>",
   "modele": "<ol>\n<li><strong>Faux.</strong> $|-6| = 6 &gt; |-2| = 2$, donc $-6 &lt; -2$.</li>\n<li><strong>Vrai.</strong> Une valeur absolue est une distance à zéro : elle est positive ou nulle.</li>\n<li><strong>Faux.</strong> L'opposé de $-5$ est $+5$.</li>\n<li><strong>Vrai.</strong> Deux opposés ont la même distance à zéro, donc la même valeur absolue.</li>\n<li><strong>Vrai.</strong> Sur la droite graduée, les négatifs sont à gauche de $0$.</li>\n<li><strong>Faux.</strong> $|-4| = 4$ et $|+3| = 3$, donc $|-4| &gt; |+3|$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Températures des villes marocaines",
   "diff": "",
   "q": "<p>Le 12 janvier, on relève les températures minimales suivantes :\nIfrane $-7\\ ^\\circ$C, Casablanca $+9\\ ^\\circ$C, Fès $+2\\ ^\\circ$C, Midelt $-3\\ ^\\circ$C,\nAgadir $+11\\ ^\\circ$C, Azrou $-1\\ ^\\circ$C.\n1. Range ces villes de la plus froide à la moins froide.\n2. Quelle est la différence de température entre Agadir et Ifrane ?\n3. Cite les villes où il a gelé (température strictement négative).</p>",
   "modele": "<ol>\n<li>De la plus froide à la moins froide :\n   Ifrane $(-7)$, Midelt $(-3)$, Azrou $(-1)$, Fès $(+2)$, Casablanca $(+9)$, Agadir $(+11)$.</li>\n<li>D'Ifrane à Agadir, on monte de $7$ degrés pour atteindre $0$, puis de $11$ degrés :\n   $$7 + 11 = 18.$$\n   L'écart est de $18\\ ^\\circ$C.</li>\n<li>Il a gelé à Ifrane, Midelt et Azrou (températures strictement négatives).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Encadrer",
   "diff": "",
   "q": "<p>Trouve tous les nombres <strong>entiers relatifs</strong> $x$ qui vérifient chaque condition.\n1. $-4 &lt; x &lt; +2$\n2. $-1 \\leq x \\leq +3$\n3. $-7 &lt; x &lt; -3$</p>",
   "modele": "<ol>\n<li>$-4 &lt; x &lt; +2$ : $x \\in {-3 ; -2 ; -1 ; 0 ; +1}$.</li>\n<li>$-1 \\leq x \\leq +3$ : $x \\in {-1 ; 0 ; +1 ; +2 ; +3}$.</li>\n<li>$-7 &lt; x &lt; -3$ : $x \\in {-6 ; -5 ; -4}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Abscisses à lire",
   "diff": "",
   "q": "<p>Sur une droite graduée d'unité $1$ cm et d'origine $O$, on a placé cinq points.\n$P$ est à $2$ cm à droite de $O$ ; $Q$ est à $5$ cm à gauche de $O$ ; $R$ est à $3{,}5$ cm à\ngauche de $O$ ; $S$ est confondu avec $O$ ; $T$ est à $4$ cm à droite de $O$.\n1. Donne l'abscisse de chaque point.\n2. Range les cinq abscisses dans l'ordre croissant.\n3. Quels points ont des abscisses de même valeur absolue ? Ajoute au besoin un point $U$\n   d'abscisse $-2$.</p>\n<hr />",
   "modele": "<ol>\n<li>$P(+2)$ ; $Q(-5)$ ; $R(-3{,}5)$ ; $S(0)$ ; $T(+4)$.</li>\n<li>$-5 &lt; -3{,}5 &lt; 0 &lt; +2 &lt; +4$.</li>\n<li>En ajoutant $U(-2)$ : les points $P(+2)$ et $U(-2)$ ont des abscisses de même valeur absolue\n   ($2$) ; leurs abscisses sont opposées.</li>\n</ol>\n<hr />\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le compte bancaire de Hicham",
   "diff": "difficile",
   "q": "<p>Hicham consulte son relevé bancaire à Casablanca. Les soldes du 1er au 5 du mois sont :\n$+430$ DH ; $-120$ DH ; $-15$ DH ; $+60$ DH ; $-380$ DH.\n1. Quels jours son compte est-il débiteur (solde négatif) ?\n2. Quel jour doit-il le plus d'argent à la banque ? Justifie avec les valeurs absolues.\n3. Range les cinq soldes dans l'ordre croissant.\n4. La banque prélève des frais quand le solde est inférieur à $-100$ DH. Quels jours des frais\n   sont-ils prélevés ?</p>",
   "modele": "<ol>\n<li>Le compte est débiteur les jours où le solde est négatif : le <strong>2</strong> ($-120$ DH), le <strong>3</strong>\n   ($-15$ DH) et le <strong>5</strong> ($-380$ DH).</li>\n<li>$|-120| = 120$, $|-15| = 15$, $|-380| = 380$. La plus grande valeur absolue parmi les soldes\n   négatifs est $380$ : c'est le <strong>5</strong> du mois que Hicham doit le plus d'argent.</li>\n<li>$$-380 &lt; -120 &lt; -15 &lt; +60 &lt; +430$$</li>\n<li>Un solde inférieur à $-100$ DH : $-120 &lt; -100$ et $-380 &lt; -100$. Des frais sont donc\n   prélevés le <strong>2</strong> et le <strong>5</strong>. ($-15 &gt; -100$ : pas de frais le 3.)</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Altitudes",
   "diff": "difficile",
   "q": "<p>Un géographe note les altitudes suivantes :\nJbel Toubkal $+4\\,167$ m ; Casablanca (port) $+2$ m ; niveau de la mer $0$ m ;\nfond d'une mine près de Khouribga $-320$ m ; galerie inférieure $-455$ m ; plateau d'Ifrane\n$+1\\,650$ m.\n1. Range ces altitudes dans l'ordre décroissant.\n2. Quelle est la distance verticale entre le plateau d'Ifrane et la galerie inférieure ?\n3. Le géographe écrit : « la galerie inférieure est plus haute que la mine, car $455 &gt; 320$. »\n   Corrige son erreur en expliquant.</p>",
   "modele": "<ol>\n<li>$$+4\\,167 &gt; +1\\,650 &gt; +2 &gt; 0 &gt; -320 &gt; -455$$</li>\n<li>Du plateau d'Ifrane ($+1\\,650$ m) à la galerie ($-455$ m), on descend d'abord de $1\\,650$ m\n   jusqu'au niveau de la mer, puis encore de $455$ m :\n   $$1\\,650 + 455 = 2\\,105.$$\n   La distance verticale est de $2\\,105$ m.</li>\n<li>Il confond valeur absolue et position. C'est vrai que $455 &gt; 320$, mais pour des nombres\n   <strong>négatifs</strong> cela signifie que $-455$ est <strong>plus petit</strong> que $-320$ : la galerie inférieure\n   est donc plus <strong>basse</strong> que la mine, et non plus haute.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Valeur absolue et devinettes",
   "diff": "difficile",
   "q": "<ol>\n<li>Trouve tous les nombres relatifs $x$ tels que $|x| = 6$.</li>\n<li>Trouve tous les nombres relatifs $x$ tels que $|x| = 0$.</li>\n<li>Existe-t-il un nombre relatif $x$ tel que $|x| = -3$ ? Explique.</li>\n<li>Un nombre négatif a pour valeur absolue $7{,}5$. Quel est ce nombre ? Quel est son opposé ?</li>\n</ol>",
   "modele": "<ol>\n<li>$|x| = 6$ signifie que $x$ est à la distance $6$ de zéro : $x = +6$ ou $x = -6$.</li>\n<li>$|x| = 0$ : seul le nombre $0$ est à la distance $0$ de zéro, donc $x = 0$.</li>\n<li>Non. Une valeur absolue est une distance : elle ne peut pas être négative. Il n'existe aucun\n   nombre relatif $x$ tel que $|x| = -3$.</li>\n<li>Le nombre est négatif et sa distance à zéro vaut $7{,}5$ : c'est $-7{,}5$.\n   Son opposé est $+7{,}5$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Le grand jeu du plus proche de zéro",
   "diff": "difficile",
   "q": "<p>On donne la liste : $-4{,}2$ ; $+3{,}9$ ; $-0{,}8$ ; $+0{,}75$ ; $-5$ ; $+1{,}1$.\n1. Calcule la valeur absolue de chaque nombre.\n2. Quel nombre est le plus proche de zéro ? le plus éloigné ?\n3. Range la liste dans l'ordre croissant.\n4. Explique pourquoi le rangement de la question 3 n'est pas le même que le rangement des\n   valeurs absolues.</p>",
   "modele": "<ol>\n<li>$|-4{,}2| = 4{,}2$ ; $|+3{,}9| = 3{,}9$ ; $|-0{,}8| = 0{,}8$ ; $|+0{,}75| = 0{,}75$ ;\n   $|-5| = 5$ ; $|+1{,}1| = 1{,}1$.</li>\n<li>Le plus proche de zéro est $+0{,}75$ (valeur absolue $0{,}75$, la plus petite).\n   Le plus éloigné est $-5$ (valeur absolue $5$, la plus grande).</li>\n<li>$$-5 &lt; -4{,}2 &lt; -0{,}8 &lt; +0{,}75 &lt; +1{,}1 &lt; +3{,}9$$</li>\n<li>Le rangement des valeurs absolues ne tient pas compte du signe : il mesure seulement\n   l'éloignement du zéro. Le rangement des nombres relatifs tient compte du sens : chez les\n   négatifs, plus la valeur absolue est grande, plus le nombre est petit. Les deux classements\n   sont donc inversés sur la partie négative.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Un thermomètre à Ifrane",
   "diff": "difficile",
   "q": "<p>Un thermomètre gradué de $-20\\ ^\\circ$C à $+20\\ ^\\circ$C est représenté par une droite graduée\nverticale, l'unité valant $1$ cm pour $5\\ ^\\circ$C.\n1. À quelle distance du zéro, en centimètres, se trouve la graduation $-15\\ ^\\circ$C ?\n2. Et la graduation $+10\\ ^\\circ$C ?\n3. Deux graduations sont à $3$ cm du zéro. Lesquelles ? Que peut-on dire de ces deux\n   températures l'une par rapport à l'autre ?\n4. La température passe de $-15\\ ^\\circ$C à $-3\\ ^\\circ$C : a-t-elle augmenté ou diminué ?\n   Justifie par une comparaison.</p>",
   "modele": "<ol>\n<li>$15 \\div 5 = 3$, donc la graduation $-15\\ ^\\circ$C est à $3$ cm du zéro (vers le bas).</li>\n<li>$10 \\div 5 = 2$, donc la graduation $+10\\ ^\\circ$C est à $2$ cm du zéro (vers le haut).</li>\n<li>$3 \\times 5 = 15$ : ce sont les graduations $-15\\ ^\\circ$C et $+15\\ ^\\circ$C. Ces deux\n   températures sont <strong>opposées</strong> ; elles ont la même valeur absolue, $15$.</li>\n<li>$-15 &lt; -3$ : la température est passée d'une valeur plus petite à une valeur plus grande,\n   elle a donc <strong>augmenté</strong> (il fait moins froid).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Problème de synthèse",
   "diff": "difficile",
   "q": "<p>Quatre élèves d'un collège de Fès ont participé à un jeu. Les points obtenus peuvent être\nnégatifs. On a : Yasmine $-12$ points ; Omar $+8$ points ; Salma $-3$ points ;\nReda $-12{,}5$ points.\n1. Range les quatre scores dans l'ordre décroissant et donne le classement du jeu.\n2. Quel élève a le score dont la valeur absolue est la plus grande ? Est-ce le vainqueur ?\n   Explique.\n3. Salma affirme : « Mon score est l'opposé de $+3$. » A-t-elle raison ?\n4. Quel score faudrait-il ajouter à la liste pour qu'il soit l'opposé du score d'Omar ? Quelle\n   place occuperait cet élève au classement ?</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Communiquer : signe et distance à zéro</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Modéliser : traduire une situation</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer : opposé</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Calculer : valeur absolue</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Raisonner : comparaison</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Représenter : droite graduée</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Calculer : ordre croissant</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Calculer : ordre décroissant</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Raisonner : justifier vrai/faux</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Modéliser : températures</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Raisonner : encadrement</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Représenter : lire des abscisses</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser : compte bancaire</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Modéliser : altitudes</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Chercher : équations avec valeur absolue</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Raisonner : distance à zéro et ordre</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Représenter : graduation et échelle</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Modéliser : problème de synthèse</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$$+8 &gt; -3 &gt; -12 &gt; -12{,}5$$\n   Classement : 1er Omar, 2e Salma, 3e Yasmine, 4e Reda.</li>\n<li>C'est Reda : $|-12{,}5| = 12{,}5$ est la plus grande valeur absolue. Ce n'est <strong>pas</strong> le\n   vainqueur, au contraire : son score est le plus petit, il est dernier. La valeur absolue\n   mesure seulement l'éloignement du zéro, pas la position dans le classement.</li>\n<li>Oui. L'opposé de $+3$ est $-3$, qui est bien le score de Salma.</li>\n<li>L'opposé du score d'Omar ($+8$) est $-8$. Comme $-3 &gt; -8 &gt; -12$, cet élève se placerait\n   entre Salma et Yasmine, donc à la <strong>3e place</strong>, et Yasmine et Reda reculeraient d'un rang.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M08",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Calculatrice non autorisée.</p>\n<h2 id=\"exercice-1-5-points-vocabulaire-et-ecritures\">Exercice 1 (5 points) — Vocabulaire et écritures</h2>\n<ol>\n<li>Traduis par un nombre relatif :\n   a. une température de $4$ degrés en dessous de zéro ;\n   b. un solde bancaire débiteur de $175$ DH ;\n   c. une altitude de $230$ m sous le niveau de la mer.</li>\n<li>Donne l'opposé de $-13$, de $+2{,}5$ et de $0$.</li>\n<li>Calcule $|-17|$, $|+6{,}3|$ et $|0|$.</li>\n</ol>\n<h2 id=\"exercice-2-5-points-droite-graduee\">Exercice 2 (5 points) — Droite graduée</h2>\n<p>On trace une droite graduée d'origine $O$ et d'unité $1$ cm.</p>\n<ol>\n<li>Trace-la de $-6$ à $+6$.</li>\n<li>Place les points $A(-4)$, $B(+2{,}5)$, $C(-1)$, $D(+4)$, $E(-2{,}5)$.</li>\n<li>Quels sont les deux couples de points d'abscisses opposées ?</li>\n<li>Quel point est le plus proche de l'origine ? Justifie avec les valeurs absolues.</li>\n</ol>\n<h2 id=\"exercice-3-5-points-comparer-et-ranger\">Exercice 3 (5 points) — Comparer et ranger</h2>\n<ol>\n<li>Complète par $&lt;$ ou $&gt;$ :\n   a. $-9 \\ \\dots \\ -15$ ; b. $-0{,}3 \\ \\dots \\ +0{,}1$ ; c. $-2{,}7 \\ \\dots \\ -2{,}9$ ;\n   d. $0 \\ \\dots \\ -6$.</li>\n<li>Range dans l'ordre croissant : $-5$ ; $+3$ ; $-11{,}5$ ; $0$ ; $-0{,}5$ ; $+8$ ; $-2$.</li>\n<li>Donne tous les nombres entiers relatifs $x$ tels que $-3 &lt; x &lt; +2$.</li>\n</ol>\n<h2 id=\"exercice-4-5-points-probleme-le-releve-de-fatima\">Exercice 4 (5 points) — Problème : le relevé de Fatima</h2>\n<p>Fatima habite à Fès. Voici les soldes de son compte bancaire pendant cinq semaines :\n$+520$ DH ; $-45$ DH ; $-260$ DH ; $+90$ DH ; $-260{,}5$ DH.</p>\n<ol>\n<li>Combien de semaines son compte est-il débiteur ?</li>\n<li>Range les cinq soldes dans l'ordre croissant.</li>\n<li>Quelle semaine doit-elle le plus d'argent à la banque ? Justifie avec les valeurs absolues.</li>\n<li>Fatima dit : « La semaine 3 et la semaine 5, c'est pareil, je dois $260$ DH environ. »\n   Compare précisément les deux soldes et dis quelle semaine est la plus défavorable.</li>\n</ol>\n<hr />\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.1</td>\n<td>$-4\\ ^\\circ$C ; $-175$ DH ; $-230$ m</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>1.2</td>\n<td>$+13$ ; $-2{,}5$ ; $0$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>1.3</td>\n<td>$17$ ; $6{,}3$ ; $0$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.1</td>\n<td>droite correctement graduée, unité respectée</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.2</td>\n<td>5 points bien placés (0,4 pt chacun)</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.3</td>\n<td>${B ; E}$ et ${A ; D}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.4</td>\n<td>$C$, car $</td>\n<td>-1</td>\n</tr>\n<tr>\n<td>3.1</td>\n<td>4 comparaisons correctes</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3.2</td>\n<td>rangement complet et exact</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3.3</td>\n<td>${-2 ; -1 ; 0 ; +1}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.1</td>\n<td>3 semaines</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.2</td>\n<td>rangement exact</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.3</td>\n<td>semaine 5, $</td>\n<td>-260{,}5</td>\n</tr>\n<tr>\n<td>4.4</td>\n<td>$-260{,}5 &lt; -260$, la semaine 5 est la plus défavorable</td>\n<td>1</td>\n</tr>\n<tr>\n<td><strong>Total</strong></td>\n<td></td>\n<td><strong>20</strong></td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>a. $-4\\ ^\\circ$C · b. $-175$ DH · c. $-230$ m.</li>\n<li>Opposé de $-13$ : $+13$. Opposé de $+2{,}5$ : $-2{,}5$. Opposé de $0$ : $0$.</li>\n<li>$|-17| = 17$ ; $|+6{,}3| = 6{,}3$ ; $|0| = 0$.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>Droite graduée de $-6$ à $+6$, une graduation tous les centimètres.</li>\n<li>$A$ à $4$ cm à gauche de $O$ ; $B$ à $2{,}5$ cm à droite ; $C$ à $1$ cm à gauche ;\n   $D$ à $4$ cm à droite ; $E$ à $2{,}5$ cm à gauche.</li>\n<li>$A(-4)$ et $D(+4)$ ont des abscisses opposées ; $B(+2{,}5)$ et $E(-2{,}5)$ également.</li>\n<li>Les valeurs absolues sont $4$ ; $2{,}5$ ; $1$ ; $4$ ; $2{,}5$. La plus petite est $1$ :\n   le point le plus proche de l'origine est <strong>$C$</strong>.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>a. $-9 &gt; -15$ (car $9 &lt; 15$) · b. $-0{,}3 &lt; +0{,}1$ (négatif $&lt;$ positif) ·\n   c. $-2{,}7 &gt; -2{,}9$ (car $2{,}7 &lt; 2{,}9$) · d. $0 &gt; -6$.</li>\n<li>$$-11{,}5 &lt; -5 &lt; -2 &lt; -0{,}5 &lt; 0 &lt; +3 &lt; +8$$</li>\n<li>$x \\in {-2 ; -1 ; 0 ; +1}$.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>Les soldes négatifs sont $-45$, $-260$ et $-260{,}5$ : le compte est débiteur pendant\n   <strong>3 semaines</strong> (semaines 2, 3 et 5).</li>\n<li>$$-260{,}5 &lt; -260 &lt; -45 &lt; +90 &lt; +520$$</li>\n<li>Les valeurs absolues des soldes négatifs sont $45$ ; $260$ ; $260{,}5$. La plus grande est\n   $260{,}5$ : c'est la <strong>semaine 5</strong> que Fatima doit le plus d'argent.</li>\n<li>Les deux soldes sont proches, mais $|-260{,}5| = 260{,}5 &gt; |-260| = 260$, donc\n   $-260{,}5 &lt; -260$. La <strong>semaine 5</strong> est la plus défavorable : la dette est plus grande de\n   $0{,}5$ DH.</li>\n</ol>"
 }
},

{
 "id": "m09",
 "domaine": "maths",
 "unite": 9,
 "theme": "Numérique et calcul",
 "tag": "M09",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M09 — Les nombres relatifs : addition et soustraction",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Additionner deux relatifs de même signe, puis de signes contraires.",
  "Reconnaître deux nombres opposés et savoir que leur somme vaut $0$.",
  "Transformer une soustraction en addition de l'opposé.",
  "Simplifier l'écriture d'une somme algébrique.",
  "Calculer des sommes algébriques longues en regroupant.",
  "Résoudre des problèmes de température et de compte bancaire."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>À Ifrane, il fait $-5\\ ^\\circ$C à 7 h du matin. Dans la journée, la température <strong>monte de\n$8$ degrés</strong>. Quelle température fait-il l'après-midi ?</p>\n<p>En même temps, à Casablanca, le compte de Karim affiche $-120$ DH. Il dépose $200$ DH.\nQuel est son nouveau solde ? Puis il retire $150$ DH. Et maintenant ?</p>\n<p>Ces questions se calculent avec des <strong>additions et des soustractions de nombres relatifs</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1 (le thermomètre).</strong> Sur une droite graduée horizontale, place $-5$. Avance de\n$8$ graduations vers la <strong>droite</strong> (la température monte). Où arrives-tu ?</p>\n<p><strong>Observation.</strong> Tu arrives sur $+3$. On écrit :\n$$(-5) + (+8) = +3.$$</p>\n<p><strong>Activité 2.</strong> Repars de $-5$ et recule de $4$ graduations vers la <strong>gauche</strong> (la température\ndescend de $4$ degrés). Tu arrives sur $-9$. On écrit :\n$$(-5) + (-4) = -9.$$</p>\n<p><strong>Conclusion.</strong> Additionner un nombre <strong>positif</strong>, c'est avancer vers la droite ; additionner\nun nombre <strong>négatif</strong>, c'est reculer vers la gauche.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-addition-de-deux-relatifs-de-meme-signe\">3.1 Addition de deux relatifs de même signe</h3>\n<blockquote>\n<p><strong>Règle.</strong> Pour additionner deux nombres relatifs de <strong>même signe</strong> :\n- on garde le <strong>signe commun</strong> ;\n- on <strong>additionne</strong> les distances à zéro.</p>\n</blockquote>\n<p><strong>Exemples.</strong>\n$$(+7) + (+5) = +12 \\qquad (-7) + (-5) = -12 \\qquad (-2{,}5) + (-1{,}5) = -4$$</p>\n<p>Moyen mnémotechnique : deux dettes s'ajoutent, deux gains s'ajoutent.</p>\n<h3 id=\"32-addition-de-deux-relatifs-de-signes-contraires\">3.2 Addition de deux relatifs de signes contraires</h3>\n<blockquote>\n<p><strong>Règle.</strong> Pour additionner deux nombres relatifs de <strong>signes contraires</strong> :\n- on garde le signe du nombre qui a la <strong>plus grande</strong> distance à zéro ;\n- on <strong>soustrait</strong> la plus petite distance à zéro de la plus grande.</p>\n</blockquote>\n<p><strong>Exemples.</strong>\n$$(+9) + (-4) = +5 \\quad \\text{car } 9 &gt; 4 \\text{ et } 9 - 4 = 5$$\n$$(+4) + (-9) = -5 \\quad \\text{car } 9 &gt; 4 \\text{ et } 9 - 4 = 5, \\text{ signe } -$$\n$$(-11) + (+3) = -8$$</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Additionner les distances à zéro alors que les signes sont contraires :\nécrire $(+9) + (-4) = +13$. Non : signes contraires, on <strong>soustrait</strong>.</p>\n<h3 id=\"33-somme-de-deux-opposes\">3.3 Somme de deux opposés</h3>\n<blockquote>\n<p><strong>Propriété.</strong> La somme d'un nombre relatif et de son opposé est <strong>nulle</strong> :\n$$a + (-a) = 0.$$</p>\n</blockquote>\n<p><strong>Exemples.</strong> $(+13) + (-13) = 0$ ; $(-6{,}4) + (+6{,}4) = 0$.</p>\n<p>C'est très utile pour simplifier un long calcul : on repère et on supprime les couples\nd'opposés.</p>\n<h3 id=\"34-la-soustraction\">3.4 La soustraction</h3>\n<blockquote>\n<p><strong>Règle.</strong> Soustraire un nombre relatif revient à <strong>additionner son opposé</strong> :\n$$a - b = a + (-b).$$</p>\n</blockquote>\n<p><strong>Méthode (pas à pas).</strong>\n1. Repère la soustraction.\n2. Remplace le signe $-$ de l'opération par un $+$.\n3. Change le signe du nombre qui suit (prends son opposé).\n4. Applique la règle d'addition qui convient.</p>\n<p><strong>Exemples.</strong>\n$$(+8) - (+3) = (+8) + (-3) = +5$$\n$$(+8) - (-3) = (+8) + (+3) = +11$$\n$$(-6) - (+4) = (-6) + (-4) = -10$$\n$$(-6) - (-4) = (-6) + (+4) = -2$$</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Ne changer qu'un seul des deux signes. Il faut transformer <strong>à la\nfois</strong> l'opération ($-$ devient $+$) <strong>et</strong> le nombre (on prend son opposé).</p>\n<h3 id=\"35-simplifier-lecriture\">3.5 Simplifier l'écriture</h3>\n<p>Une fois toutes les soustractions transformées en additions, on peut alléger l'écriture en\nsupprimant les parenthèses et les signes $+$ d'addition. On applique :</p>\n<table>\n<thead>\n<tr>\n<th>Écriture longue</th>\n<th>Écriture simplifiée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$+ (+5)$</td>\n<td>$+ 5$</td>\n</tr>\n<tr>\n<td>$+ (-5)$</td>\n<td>$- 5$</td>\n</tr>\n<tr>\n<td>$- (+5)$</td>\n<td>$- 5$</td>\n</tr>\n<tr>\n<td>$- (-5)$</td>\n<td>$+ 5$</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Exemple.</strong>\n$$(-7) + (+4) - (-2) - (+9) = -7 + 4 + 2 - 9$$</p>\n<p>Attention : dans l'écriture simplifiée $-7 + 4 + 2 - 9$, les signes $+$ et $-$ sont les\n<strong>signes des nombres</strong>, pas des opérations.</p>\n<h3 id=\"36-sommes-algebriques-longues\">3.6 Sommes algébriques longues</h3>\n<blockquote>\n<p><strong>Méthode.</strong> Pour calculer une somme algébrique de plusieurs termes :\n1. simplifie l'écriture ;\n2. regroupe tous les termes <strong>positifs</strong> entre eux, et tous les termes <strong>négatifs</strong> entre eux ;\n3. calcule les deux totaux ;\n4. additionne ces deux résultats (signes contraires : on soustrait).</p>\n</blockquote>\n<p><strong>Exemple détaillé.</strong> Calculer $A = (-8) + (+15) - (+6) - (-3) + (-4)$.</p>\n<p>Simplification : $A = -8 + 15 - 6 + 3 - 4$.\nPositifs : $15 + 3 = 18$. Négatifs : $-8 - 6 - 4 = -18$.\nDonc $A = 18 - 18 = 0$.</p>\n<p>On peut aussi repérer des opposés qui s'annulent, ou choisir un ordre de calcul plus commode :\nl'addition de nombres relatifs reste <strong>commutative</strong> et <strong>associative</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Calculer $B = (-14) + (+6)$.</p>\n<p><em>Solution.</em> Signes contraires. Distances à zéro : $14$ et $6$. La plus grande est $14$, portée\npar un nombre négatif, donc le résultat est négatif. $14 - 6 = 8$, donc $B = -8$.</p>\n<p><strong>Exemple 2.</strong> Calculer $C = (-5) - (-12)$.</p>\n<p><em>Solution.</em> On transforme : $C = (-5) + (+12)$. Signes contraires, $12 &gt; 5$ et $12 - 5 = 7$,\nle signe est $+$. Donc $C = +7$.</p>\n<p><strong>Exemple 3.</strong> Calculer $D = -3 + 9 - 12 + 4 - 1$.</p>\n<p><em>Solution.</em> Positifs : $9 + 4 = 13$. Négatifs : $-3 - 12 - 1 = -16$.\nDonc $D = 13 - 16 = -3$.</p>\n<p><strong>Exemple 4 (température).</strong> À Ifrane, il fait $-5\\ ^\\circ$C à 7 h. La température monte de\n$8$ degrés jusqu'à 14 h, puis redescend de $6$ degrés jusqu'à 21 h. Quelle est la température\nà 21 h ?</p>\n<p><em>Solution.</em> $(-5) + (+8) = +3$, puis $(+3) + (-6) = -3$. Il fait $-3\\ ^\\circ$C à 21 h.</p>\n<p><strong>Exemple 5 (compte bancaire).</strong> Le solde de Karim est $-120$ DH. Il dépose $200$ DH puis\nretire $150$ DH. Quel est son solde final ?</p>\n<p><em>Solution.</em> $(-120) + (+200) = +80$, puis $(+80) + (-150) = -70$.\nSon solde final est $-70$ DH : son compte est de nouveau débiteur de $70$ DH.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li><strong>Mêmes signes</strong> : on garde le signe, on <strong>ajoute</strong> les distances à zéro.</li>\n<li><strong>Signes contraires</strong> : on garde le signe du plus « fort », on <strong>soustrait</strong> les distances à zéro.</li>\n<li>$a + (-a) = 0$ : deux opposés s'annulent.</li>\n<li><strong>Soustraire, c'est ajouter l'opposé</strong> : $a - b = a + (-b)$.</li>\n<li>Simplification : $-(-5) = +5$ ; $-(+5) = -5$ ; $+(-5) = -5$.</li>\n<li>Somme algébrique longue : regrouper les positifs, regrouper les négatifs, puis conclure.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Note pendant une semaine les températures matin/soir de ta ville et calcule chaque variation.</li>\n<li>Simule un relevé bancaire sur un mois avec dépôts et retraits, et suis le solde pas à pas.</li>\n<li>La leçon M10 abordera la multiplication et la division des nombres relatifs.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Prog-Horaires-college_.aspx\">Programmes et horaires du secondaire collégial — MEN Maroc</a></li>\n<li><a href=\"https://www.tawjihnet.net/actualites/wp-content/uploads/2024/01/Programme-adapte-College-25-Janvier-2024-Version-Finale1.pdf\">Programme adapté du collège, version 2024</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"les-deux-regles-daddition\">Les deux règles d'addition</h2>\n<table>\n<thead>\n<tr>\n<th>Cas</th>\n<th>Règle</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Mêmes signes</strong></td>\n<td>garder le signe commun, <strong>additionner</strong> les distances à zéro</td>\n<td>$(-7)+(-5) = -12$</td>\n</tr>\n<tr>\n<td><strong>Signes contraires</strong></td>\n<td>garder le signe de la plus grande distance à zéro, <strong>soustraire</strong> les distances</td>\n<td>$(+9)+(-4) = +5$</td>\n</tr>\n<tr>\n<td><strong>Opposés</strong></td>\n<td>la somme est nulle</td>\n<td>$(-13)+(+13) = 0$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"la-soustraction\">La soustraction</h2>\n<p>$$a - b = a + (-b)$$</p>\n<blockquote>\n<p>Soustraire un nombre, c'est <strong>ajouter son opposé</strong>.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>Calcul</th>\n<th>Transformation</th>\n<th>Résultat</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$(+8) - (+3)$</td>\n<td>$(+8)+(-3)$</td>\n<td>$+5$</td>\n</tr>\n<tr>\n<td>$(+8) - (-3)$</td>\n<td>$(+8)+(+3)$</td>\n<td>$+11$</td>\n</tr>\n<tr>\n<td>$(-6) - (+4)$</td>\n<td>$(-6)+(-4)$</td>\n<td>$-10$</td>\n</tr>\n<tr>\n<td>$(-6) - (-4)$</td>\n<td>$(-6)+(+4)$</td>\n<td>$-2$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"simplification-decriture\">Simplification d'écriture</h2>\n<table>\n<thead>\n<tr>\n<th>Écriture longue</th>\n<th>Simplifiée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$+(+a)$</td>\n<td>$+a$</td>\n</tr>\n<tr>\n<td>$+(-a)$</td>\n<td>$-a$</td>\n</tr>\n<tr>\n<td>$-(+a)$</td>\n<td>$-a$</td>\n</tr>\n<tr>\n<td>$-(-a)$</td>\n<td>$+a$</td>\n</tr>\n</tbody>\n</table>\n<p>Deux signes identiques donnent $+$ ; deux signes différents donnent $-$.</p>\n<h2 id=\"methode-somme-algebrique-longue\">Méthode : somme algébrique longue</h2>\n<ol>\n<li>Simplifier l'écriture (plus de parenthèses).</li>\n<li>Additionner tous les termes <strong>positifs</strong> entre eux.</li>\n<li>Additionner tous les termes <strong>négatifs</strong> entre eux.</li>\n<li>Combiner les deux totaux (signes contraires : on soustrait).</li>\n</ol>\n<p>Exemple : $-8 + 15 - 6 + 3 - 4 \\;\\to\\; (15+3) = 18$ et $(-8-6-4) = -18$ $\\;\\to\\; 18 - 18 = 0$.</p>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li><strong>Signes contraires mais on additionne</strong> : $(+9)+(-4) = +13$ est faux ; c'est $+5$.</li>\n<li><strong>Soustraction mal transformée</strong> : dans $a - b$, il faut changer <strong>l'opération et le signe\n   du nombre</strong> : $(-6)-(-4) = (-6)+(+4) = -2$, pas $-10$.</li>\n<li><strong>Signe du résultat oublié</strong> : quand les distances à zéro sont proches, on écrit le bon\n   nombre mais avec le mauvais signe. Contrôle toujours quel terme « pèse » le plus.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Additionner un positif = avancer à droite. Additionner un négatif = reculer à gauche.\n$-(-a) = +a$. Deux opposés s'annulent : cherche-les d'abord dans un long calcul.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Additions de même signe",
   "diff": "facile",
   "q": "<p>Calcule.\na. $(+6) + (+9)$  b. $(-6) + (-9)$  c. $(-12) + (-7)$\nd. $(+2{,}5) + (+3{,}5)$  e. $(-0{,}8) + (-1{,}2)$  f. $(-25) + (-75)$</p>",
   "modele": "<p>Mêmes signes : on garde le signe et on additionne les distances à zéro.\na. $(+6) + (+9) = +15$ (car $6 + 9 = 15$)\nb. $(-6) + (-9) = -15$\nc. $(-12) + (-7) = -19$ (car $12 + 7 = 19$)\nd. $(+2{,}5) + (+3{,}5) = +6$\ne. $(-0{,}8) + (-1{,}2) = -2$\nf. $(-25) + (-75) = -100$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Additions de signes contraires",
   "diff": "facile",
   "q": "<p>Calcule.\na. $(+10) + (-4)$  b. $(-10) + (+4)$  c. $(+3) + (-11)$\nd. $(-15) + (+15)$  e. $(-7{,}5) + (+2{,}5)$  f. $(+18) + (-6)$</p>",
   "modele": "<p>Signes contraires : on garde le signe de la plus grande distance à zéro et on soustrait.\na. $(+10) + (-4) = +6$ (car $10 - 4 = 6$, signe $+$)\nb. $(-10) + (+4) = -6$ (car $10 - 4 = 6$, signe $-$)\nc. $(+3) + (-11) = -8$ (car $11 - 3 = 8$, signe $-$)\nd. $(-15) + (+15) = 0$ (nombres opposés)\ne. $(-7{,}5) + (+2{,}5) = -5$ (car $7{,}5 - 2{,}5 = 5$, signe $-$)\nf. $(+18) + (-6) = +12$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Opposés et somme nulle",
   "diff": "facile",
   "q": "<ol>\n<li>Donne l'opposé de $+9$, de $-13$, de $-4{,}7$ et de $0$.</li>\n<li>Complète : $(-8) + \\dots = 0$ et $\\dots + (-2{,}5) = 0$.</li>\n<li>Que vaut la somme d'un nombre relatif et de son opposé ?</li>\n</ol>",
   "modele": "<ol>\n<li>Opposé de $+9$ : $-9$ · de $-13$ : $+13$ · de $-4{,}7$ : $+4{,}7$ · de $0$ : $0$.</li>\n<li>$(-8) + (+8) = 0$ et $(+2{,}5) + (-2{,}5) = 0$.</li>\n<li>Cette somme vaut toujours $0$ : $a + (-a) = 0$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Soustractions",
   "diff": "facile",
   "q": "<p>Transforme chaque soustraction en addition, puis calcule.\na. $(+7) - (+2)$  b. $(+7) - (-2)$  c. $(-7) - (+2)$\nd. $(-7) - (-2)$  e. $(-3) - (-10)$  f. $(+4) - (+11)$</p>",
   "modele": "<p>On remplace la soustraction par l'addition de l'opposé.\na. $(+7) - (+2) = (+7) + (-2) = +5$\nb. $(+7) - (-2) = (+7) + (+2) = +9$\nc. $(-7) - (+2) = (-7) + (-2) = -9$\nd. $(-7) - (-2) = (-7) + (+2) = -5$\ne. $(-3) - (-10) = (-3) + (+10) = +7$\nf. $(+4) - (+11) = (+4) + (-11) = -7$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Simplifier l'écriture",
   "diff": "facile",
   "q": "<p>Réécris chaque expression sans parenthèses (ne calcule pas).\na. $(+5) + (-8)$  b. $(-3) - (-7)$  c. $(+12) - (+4)$\nd. $(-6) + (+2) - (-9)$  e. $(+1) - (-4) + (-11)$</p>",
   "modele": "<p>a. $(+5) + (-8) = 5 - 8$\nb. $(-3) - (-7) = -3 + 7$\nc. $(+12) - (+4) = 12 - 4$\nd. $(-6) + (+2) - (-9) = -6 + 2 + 9$\ne. $(+1) - (-4) + (-11) = 1 + 4 - 11$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Petites sommes algébriques",
   "diff": "facile",
   "q": "<p>Calcule.\na. $-4 + 9$  b. $7 - 15$  c. $-3 - 8$\nd. $12 - 12$  e. $-2{,}5 + 6$  f. $-1 - 1$</p>\n<hr />",
   "modele": "<p>a. $-4 + 9 = +5$ (signes contraires, $9 - 4 = 5$)\nb. $7 - 15 = -8$ (car $15 - 7 = 8$)\nc. $-3 - 8 = -11$ (mêmes signes)\nd. $12 - 12 = 0$\ne. $-2{,}5 + 6 = +3{,}5$\nf. $-1 - 1 = -2$</p>\n<hr />\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Trois termes",
   "diff": "",
   "q": "<p>Calcule en détaillant les étapes.\n$$A = (-5) + (+8) + (-6) \\qquad B = (+7) - (+12) + (-3)$$\n$$C = (-4) - (-9) + (-2) \\qquad D = (+15) + (-20) - (-5)$$</p>",
   "modele": "<p>$$A = (-5) + (+8) + (-6) = (+3) + (-6) = -3$$\n$$B = (+7) - (+12) + (-3) = 7 - 12 - 3 = (-5) + (-3) = -8$$\n$$C = (-4) - (-9) + (-2) = -4 + 9 - 2 = (+5) + (-2) = +3$$\n$$D = (+15) + (-20) - (-5) = 15 - 20 + 5 = (-5) + (+5) = 0$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Sommes algébriques longues",
   "diff": "",
   "q": "<p>Calcule en regroupant les positifs puis les négatifs.\n$$E = -7 + 12 - 5 + 3 - 8$$\n$$F = 20 - 35 + 15 - 4 + 4$$\n$$G = -1{,}5 + 4{,}5 - 2 - 3$$\n$$H = (-9) - (-9) + (-9) - (+9)$$</p>",
   "modele": "<p>$E = -7 + 12 - 5 + 3 - 8$.\nPositifs : $12 + 3 = 15$. Négatifs : $-7 - 5 - 8 = -20$.\n$$E = 15 - 20 = -5$$</p>\n<p>$F = 20 - 35 + 15 - 4 + 4$.\nPositifs : $20 + 15 + 4 = 39$. Négatifs : $-35 - 4 = -39$.\n$$F = 39 - 39 = 0$$</p>\n<p>$G = -1{,}5 + 4{,}5 - 2 - 3$.\nPositifs : $4{,}5$. Négatifs : $-1{,}5 - 2 - 3 = -6{,}5$.\n$$G = 4{,}5 - 6{,}5 = -2$$</p>\n<p>$H = (-9) - (-9) + (-9) - (+9) = -9 + 9 - 9 - 9$.\nPositifs : $9$. Négatifs : $-9 - 9 - 9 = -27$.\n$$H = 9 - 27 = -18$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Calculer astucieusement",
   "diff": "",
   "q": "<p>Repère les couples d'opposés avant de calculer.\n$$I = (+13) + (-7) + (-13) + (+7)$$\n$$J = -18 + 25 + 18 - 25 + 6$$\n$$K = (-4{,}3) + (+11) + (+4{,}3) + (-11) + (-2)$$</p>",
   "modele": "<p>$I$ : $(+13)$ et $(-13)$ sont opposés, $(-7)$ et $(+7)$ aussi.\n$$I = 0 + 0 = 0$$\n$J$ : $-18$ et $+18$ s'annulent, $+25$ et $-25$ aussi. Il reste $+6$.\n$$J = +6$$\n$K$ : $(-4{,}3)$ et $(+4{,}3)$ s'annulent, $(+11)$ et $(-11)$ aussi. Il reste $(-2)$.\n$$K = -2$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Terme manquant",
   "diff": "",
   "q": "<p>Trouve le nombre relatif manquant.\na. $(+7) + \\dots = +2$  b. $(-3) + \\dots = -10$  c. $\\dots + (-6) = +1$\nd. $\\dots - (+4) = -9$  e. $(-8) - \\dots = -3$</p>",
   "modele": "<p>a. $(+7) + (-5) = +2$, donc le nombre manquant est $-5$.\nb. $(-3) + (-7) = -10$, donc c'est $-7$.\nc. $(+7) + (-6) = +1$, donc c'est $+7$.\nd. $(-5) - (+4) = -9$, donc c'est $-5$.\ne. $(-8) - (-5) = -8 + 5 = -3$, donc c'est $-5$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Vrai ou faux",
   "diff": "",
   "q": "<p>Réponds et corrige les affirmations fausses.\n1. $(-5) + (-3) = -8$.\n2. $(+6) - (-2) = +4$.\n3. La somme de deux nombres négatifs est toujours négative.\n4. La somme d'un nombre positif et d'un nombre négatif est toujours positive.\n5. $-(-7) = -7$.\n6. Soustraire un nombre négatif revient à ajouter un nombre positif.</p>",
   "modele": "<ol>\n<li><strong>Vrai.</strong> Mêmes signes : $5 + 3 = 8$, signe $-$.</li>\n<li><strong>Faux.</strong> $(+6) - (-2) = (+6) + (+2) = +8$.</li>\n<li><strong>Vrai.</strong> On garde le signe commun, qui est $-$.</li>\n<li><strong>Faux.</strong> Contre-exemple : $(+3) + (-10) = -7$, qui est négatif.</li>\n<li><strong>Faux.</strong> $-(-7) = +7$ : deux signes $-$ donnent $+$.</li>\n<li><strong>Vrai.</strong> $a - (-b) = a + (+b)$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Tableau à double entrée",
   "diff": "",
   "q": "<p>Recopie et complète les deux tableaux ($a$ en ligne, $b$ en colonne).</p>\n<p>Tableau 1 : calcule $a + b$.</p>\n<table>\n<thead>\n<tr>\n<th>$a + b$</th>\n<th>$b = +3$</th>\n<th>$b = -8$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$a = +5$</td>\n<td>…</td>\n<td>…</td>\n</tr>\n<tr>\n<td>$a = -5$</td>\n<td>…</td>\n<td>…</td>\n</tr>\n</tbody>\n</table>\n<p>Tableau 2 : calcule $a - b$.</p>\n<table>\n<thead>\n<tr>\n<th>$a - b$</th>\n<th>$b = +3$</th>\n<th>$b = -8$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$a = +5$</td>\n<td>…</td>\n<td>…</td>\n</tr>\n<tr>\n<td>$a = -5$</td>\n<td>…</td>\n<td>…</td>\n</tr>\n</tbody>\n</table>\n<hr />",
   "modele": "<p>Tableau 1 ($a + b$) :</p>\n<table>\n<thead>\n<tr>\n<th>$a + b$</th>\n<th>$b = +3$</th>\n<th>$b = -8$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$a = +5$</td>\n<td>$+8$</td>\n<td>$-3$</td>\n</tr>\n<tr>\n<td>$a = -5$</td>\n<td>$-2$</td>\n<td>$-13$</td>\n</tr>\n</tbody>\n</table>\n<p>Détails : $(+5)+(+3) = +8$ ; $(+5)+(-8) = -3$ ; $(-5)+(+3) = -2$ ; $(-5)+(-8) = -13$.</p>\n<p>Tableau 2 ($a - b$) :</p>\n<table>\n<thead>\n<tr>\n<th>$a - b$</th>\n<th>$b = +3$</th>\n<th>$b = -8$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$a = +5$</td>\n<td>$+2$</td>\n<td>$+13$</td>\n</tr>\n<tr>\n<td>$a = -5$</td>\n<td>$-8$</td>\n<td>$+3$</td>\n</tr>\n</tbody>\n</table>\n<p>Détails : $(+5)-(+3) = +2$ ; $(+5)-(-8) = +5+8 = +13$ ; $(-5)-(+3) = -5-3 = -8$ ;\n$(-5)-(-8) = -5+8 = +3$.</p>\n<hr />\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Une journée d'hiver à Ifrane",
   "diff": "difficile",
   "q": "<p>À $6$ h, le thermomètre d'Ifrane indique $-6\\ ^\\circ$C. Entre $6$ h et $14$ h, la température\nmonte de $9$ degrés. Entre $14$ h et $23$ h, elle baisse de $11$ degrés.\n1. Calcule la température à $14$ h.\n2. Calcule la température à $23$ h.\n3. Quel est l'écart entre la température la plus haute et la plus basse de la journée ?\n4. La température de $23$ h est-elle plus haute ou plus basse que celle de $6$ h ? De combien ?</p>",
   "modele": "<ol>\n<li>$(-6) + (+9) = +3$. À $14$ h il fait $+3\\ ^\\circ$C.</li>\n<li>$(+3) + (-11) = -8$. À $23$ h il fait $-8\\ ^\\circ$C.</li>\n<li>La plus haute est $+3\\ ^\\circ$C, la plus basse $-8\\ ^\\circ$C. L'écart est\n   $$(+3) - (-8) = 3 + 8 = 11.$$\n   Soit $11\\ ^\\circ$C.</li>\n<li>$(-8) - (-6) = -8 + 6 = -2$. La température de $23$ h est <strong>plus basse</strong> que celle de\n   $6$ h, de $2$ degrés.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Le compte de Youssef à Casablanca",
   "diff": "difficile",
   "q": "<p>Le solde du compte de Youssef est de $+150$ DH lundi matin. Dans la semaine, il effectue :\nun retrait de $400$ DH, un dépôt de $220$ DH, un retrait de $95$ DH, puis un dépôt de $500$ DH,\ndans cet ordre.\n1. Écris chaque opération sous la forme d'un nombre relatif.\n2. Calcule le solde après chaque opération.\n3. À quels moments le compte est-il débiteur ?\n4. Quel est le solde final ? Écris le calcul complet en une seule somme algébrique.</p>",
   "modele": "<ol>\n<li>Retrait de $400$ DH : $-400$ · dépôt de $220$ DH : $+220$ · retrait de $95$ DH : $-95$ ·\n   dépôt de $500$ DH : $+500$.</li>\n<li>Solde initial : $+150$.\n   - Après le retrait de $400$ : $(+150) + (-400) = -250$ DH.\n   - Après le dépôt de $220$ : $(-250) + (+220) = -30$ DH.\n   - Après le retrait de $95$ : $(-30) + (-95) = -125$ DH.\n   - Après le dépôt de $500$ : $(-125) + (+500) = +375$ DH.</li>\n<li>Le compte est débiteur après la première, la deuxième et la troisième opération\n   (soldes $-250$ DH, $-30$ DH et $-125$ DH).</li>\n<li>En une seule somme algébrique :\n   $$150 - 400 + 220 - 95 + 500.$$\n   Positifs : $150 + 220 + 500 = 870$. Négatifs : $-400 - 95 = -495$.\n   $$870 - 495 = 375.$$\n   Le solde final est $+375$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Remontée dans une mine",
   "diff": "difficile",
   "q": "<p>Une cage d'ascenseur est arrêtée à l'altitude $-455$ m dans une mine de la région de\nKhouribga. Elle remonte de $200$ m, puis encore de $180$ m, puis encore de $90$ m.\n1. Calcule l'altitude après chaque remontée.\n2. La cage est-elle sortie au-dessus du niveau du sol (altitude $0$ m) ? Justifie.\n3. De combien de mètres la cage est-elle remontée en tout ? Vérifie que ce total correspond à\n   l'écart entre l'altitude de départ et l'altitude d'arrivée.</p>",
   "modele": "<ol>\n<li>\n<ul>\n<li>Après la première remontée : $(-455) + (+200) = -255$ m.</li>\n<li>Après la deuxième : $(-255) + (+180) = -75$ m.</li>\n<li>Après la troisième : $(-75) + (+90) = +15$ m.</li>\n</ul>\n</li>\n<li>Oui : l'altitude finale $+15$ m est positive, donc la cage se trouve $15$ m <strong>au-dessus</strong> du\n   niveau de référence.</li>\n<li>Total des remontées : $200 + 180 + 90 = 470$ m.\n   Écart entre l'arrivée et le départ : $(+15) - (-455) = 15 + 455 = 470$ m. Les deux résultats\n   coïncident.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "La pyramide des relatifs",
   "diff": "difficile",
   "q": "<p>Dans cette pyramide, chaque brique contient la <strong>somme</strong> des deux briques placées juste en\ndessous. La ligne du bas est : $-7$ ; $+3$ ; $-2$ ; $+5$.\n1. Calcule les trois briques de la deuxième ligne.\n2. Calcule les deux briques de la troisième ligne.\n3. Calcule la brique du sommet.</p>\n<pre><code>              ?\n          ?       ?\n      ?       ?       ?\n   -7      +3      -2      +5\n</code></pre>",
   "modele": "<ol>\n<li>Deuxième ligne : $-7 + 3 = -4$ ; $3 + (-2) = +1$ ; $-2 + 5 = +3$.</li>\n<li>Troisième ligne : $-4 + 1 = -3$ ; $1 + 3 = +4$.</li>\n<li>Sommet : $-3 + 4 = +1$.</li>\n</ol>\n<pre><code>              +1\n          -3      +4\n      -4      +1      +3\n   -7      +3      -2      +5\n</code></pre>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Ifrane et Agadir",
   "diff": "difficile",
   "q": "<p>Voici les températures minimales relevées pendant quatre jours.</p>\n<table>\n<thead>\n<tr>\n<th>Jour</th>\n<th>Ifrane</th>\n<th>Agadir</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Lundi</td>\n<td>$-4\\ ^\\circ$C</td>\n<td>$+14\\ ^\\circ$C</td>\n</tr>\n<tr>\n<td>Mardi</td>\n<td>$-7\\ ^\\circ$C</td>\n<td>$+12\\ ^\\circ$C</td>\n</tr>\n<tr>\n<td>Mercredi</td>\n<td>$+1\\ ^\\circ$C</td>\n<td>$+16\\ ^\\circ$C</td>\n</tr>\n<tr>\n<td>Jeudi</td>\n<td>$-2\\ ^\\circ$C</td>\n<td>$+13\\ ^\\circ$C</td>\n</tr>\n</tbody>\n</table>\n<ol>\n<li>Calcule chaque jour l'écart de température entre Agadir et Ifrane.</li>\n<li>Quel jour l'écart est-il le plus grand ? le plus petit ?</li>\n<li>Calcule la variation de température à Ifrane entre lundi et mardi, puis entre mardi et\n   mercredi. Précise à chaque fois s'il s'agit d'une hausse ou d'une baisse.</li>\n</ol>",
   "modele": "<ol>\n<li>Écart = température d'Agadir moins température d'Ifrane.\n   - Lundi : $(+14) - (-4) = 14 + 4 = 18\\ ^\\circ$C.\n   - Mardi : $(+12) - (-7) = 12 + 7 = 19\\ ^\\circ$C.\n   - Mercredi : $(+16) - (+1) = 15\\ ^\\circ$C.\n   - Jeudi : $(+13) - (-2) = 13 + 2 = 15\\ ^\\circ$C.</li>\n<li>L'écart le plus grand est celui de <strong>mardi</strong> ($19\\ ^\\circ$C) ; le plus petit est celui de\n   <strong>mercredi et jeudi</strong> ($15\\ ^\\circ$C, à égalité).</li>\n<li>\n<ul>\n<li>Lundi $\\to$ mardi : $(-7) - (-4) = -7 + 4 = -3$. C'est une <strong>baisse</strong> de $3$ degrés.</li>\n<li>Mardi $\\to$ mercredi : $(+1) - (-7) = 1 + 7 = +8$. C'est une <strong>hausse</strong> de $8$ degrés.</li>\n</ul>\n</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Synthèse",
   "diff": "difficile",
   "q": "<ol>\n<li>Calcule $L = (-12) + (+7) - (-5) - (+9) + (-3)$ en détaillant les étapes.</li>\n<li>Trouve le nombre relatif $x$ tel que $L + x = 0$.</li>\n<li>Le solde du compte de Nadia est $-85$ DH. Elle veut que son solde atteigne exactement\n   $+240$ DH. Quel montant doit-elle déposer ? Écris l'égalité utilisée.</li>\n<li>Amine affirme : « Si j'enlève un nombre négatif à un nombre, le résultat est toujours plus\n   petit. » Donne un contre-exemple chiffré et explique la règle correcte.</li>\n</ol>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Calculer : addition de même signe</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Calculer : addition de signes contraires</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Communiquer : opposé et somme nulle</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Calculer : soustraction</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Communiquer : simplification d'écriture</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Calculer : sommes algébriques simples</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Calculer : trois termes</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Calculer : sommes longues</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Raisonner : calcul astucieux</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Raisonner : terme manquant</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Raisonner : justifier vrai/faux</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Calculer : tableau à double entrée</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser : températures</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Modéliser : compte bancaire</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Modéliser : altitudes</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Chercher : pyramide additive</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Modéliser : comparaison de deux villes</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Raisonner : synthèse et contre-exemple</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$L = (-12) + (+7) - (-5) - (+9) + (-3) = -12 + 7 + 5 - 9 - 3$.\n   Positifs : $7 + 5 = 12$. Négatifs : $-12 - 9 - 3 = -24$.\n   $$L = 12 - 24 = -12$$</li>\n<li>$x$ doit être l'opposé de $L$, donc $x = +12$. Vérification : $-12 + 12 = 0$.</li>\n<li>On cherche $x$ tel que $(-85) + x = +240$.\n   $x$ est l'écart entre $+240$ et $-85$ :\n   $$x = (+240) - (-85) = 240 + 85 = 325.$$\n   Nadia doit déposer $325$ DH. Vérification : $-85 + 325 = +240$.</li>\n<li>Amine a tort. Contre-exemple : $(+4) - (-6) = 4 + 6 = +10$, et $+10 &gt; +4$ : le résultat est\n   plus <strong>grand</strong>. La règle correcte est : soustraire un nombre négatif revient à <strong>ajouter</strong>\n   son opposé, qui est positif, donc le résultat augmente. C'est en soustrayant un nombre\n   <strong>positif</strong> que le résultat diminue.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M09",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Calculatrice non autorisée.</p>\n<h2 id=\"exercice-1-5-points-calculs-directs\">Exercice 1 (5 points) — Calculs directs</h2>\n<p>Calcule.\na. $(-8) + (-6)$  b. $(+13) + (-5)$  c. $(-4) + (+11)$\nd. $(+9) - (+14)$  e. $(-3) - (-10)$  f. $(-7) - (+7)$\ng. $(-2{,}5) + (+2{,}5)$  h. $(+6{,}4) - (-3{,}6)$</p>\n<h2 id=\"exercice-2-5-points-sommes-algebriques\">Exercice 2 (5 points) — Sommes algébriques</h2>\n<ol>\n<li>Simplifie l'écriture, puis calcule :\n   $$M = (-9) + (+4) - (-6) - (+11)$$</li>\n<li>Calcule en regroupant les positifs puis les négatifs :\n   $$N = -13 + 20 - 7 + 5 - 2$$</li>\n<li>Calcule astucieusement en repérant les opposés :\n   $$P = (+17) + (-6) + (-17) + (+9) + (+6)$$</li>\n</ol>\n<h2 id=\"exercice-3-4-points-terme-manquant\">Exercice 3 (4 points) — Terme manquant</h2>\n<ol>\n<li>Trouve le nombre relatif manquant dans chaque égalité.\n   a. $(+12) + \\dots = +3$   b. $(-5) + \\dots = -14$   c. $\\dots - (-7) = +2$</li>\n<li>Rachid écrit : $(-6) - (-9) = -15$. A-t-il raison ? Corrige et explique la règle utilisée.</li>\n</ol>\n<h2 id=\"exercice-4-6-points-probleme-une-journee-a-ifrane-et-un-compte-a-fes\">Exercice 4 (6 points) — Problème : une journée à Ifrane et un compte à Fès</h2>\n<p><strong>Partie A.</strong> À $5$ h du matin, il fait $-8\\ ^\\circ$C à Ifrane. La température monte de\n$13$ degrés jusqu'à $15$ h, puis baisse de $9$ degrés jusqu'à minuit.\n1. Calcule la température à $15$ h.\n2. Calcule la température à minuit.\n3. La température de minuit est-elle plus haute ou plus basse que celle de $5$ h ? De combien ?</p>\n<p><strong>Partie B.</strong> Le solde du compte de Samira, à Fès, est de $-140$ DH.\nElle dépose $360$ DH, puis retire $520$ DH, puis dépose $180$ DH.\n4. Calcule le solde après chaque opération.\n5. Écris le calcul du solde final sous la forme d'une seule somme algébrique et donne le\n   résultat.\n6. Quel montant Samira devrait-elle déposer pour que son solde final devienne exactement\n   $+400$ DH ?</p>\n<hr />\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1 a–h</td>\n<td>8 calculs corrects (0,625 pt chacun)</td>\n<td>5</td>\n</tr>\n<tr>\n<td>2.1</td>\n<td>$M = -10$ avec simplification écrite</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.2</td>\n<td>$N = +3$ avec les deux regroupements</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.3</td>\n<td>$P = +9$ avec repérage des opposés</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3.1</td>\n<td>$-9$ ; $-9$ ; $-5$</td>\n<td>3</td>\n</tr>\n<tr>\n<td>3.2</td>\n<td>résultat $+3$ + explication de la règle</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.1</td>\n<td>$+5\\ ^\\circ$C</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.2</td>\n<td>$-4\\ ^\\circ$C</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.3</td>\n<td>plus haute de $4$ degrés, avec calcul</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.4</td>\n<td>$+220$ ; $-300$ ; $-120$ DH</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.5</td>\n<td>$-140 + 360 - 520 + 180 = -120$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.6</td>\n<td>$520$ DH</td>\n<td>0,5</td>\n</tr>\n<tr>\n<td><strong>Total</strong></td>\n<td></td>\n<td><strong>20</strong></td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<p>a. $(-8) + (-6) = -14$ (mêmes signes : $8 + 6 = 14$).\nb. $(+13) + (-5) = +8$ (signes contraires : $13 - 5 = 8$, signe $+$).\nc. $(-4) + (+11) = +7$ ($11 - 4 = 7$, signe $+$).\nd. $(+9) - (+14) = (+9) + (-14) = -5$ ($14 - 9 = 5$, signe $-$).\ne. $(-3) - (-10) = (-3) + (+10) = +7$.\nf. $(-7) - (+7) = (-7) + (-7) = -14$.\ng. $(-2{,}5) + (+2{,}5) = 0$ (nombres opposés).\nh. $(+6{,}4) - (-3{,}6) = (+6{,}4) + (+3{,}6) = +10$.</p>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$M = (-9) + (+4) - (-6) - (+11) = -9 + 4 + 6 - 11$.\n   Positifs : $4 + 6 = 10$. Négatifs : $-9 - 11 = -20$.\n   $$M = 10 - 20 = -10$$</li>\n<li>$N = -13 + 20 - 7 + 5 - 2$.\n   Positifs : $20 + 5 = 25$. Négatifs : $-13 - 7 - 2 = -22$.\n   $$N = 25 - 22 = +3$$</li>\n<li>Dans $P$, $(+17)$ et $(-17)$ sont opposés, $(-6)$ et $(+6)$ aussi. Il reste $(+9)$ :\n   $$P = +9$$</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>a. $(+12) + (-9) = +3$, donc le nombre manquant est $-9$.\n   b. $(-5) + (-9) = -14$, donc c'est $-9$.\n   c. $(-5) - (-7) = -5 + 7 = +2$, donc c'est $-5$.</li>\n<li>Rachid a <strong>tort</strong>. Soustraire un nombre revient à ajouter son opposé :\n   $$(-6) - (-9) = (-6) + (+9) = +3.$$\n   Son erreur : il a additionné les distances à zéro en gardant le signe $-$, sans transformer\n   la soustraction en addition de l'opposé.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<p><strong>Partie A.</strong>\n1. $(-8) + (+13) = +5$. À $15$ h il fait $+5\\ ^\\circ$C.\n2. $(+5) + (-9) = -4$. À minuit il fait $-4\\ ^\\circ$C.\n3. $(-4) - (-8) = -4 + 8 = +4$. La température de minuit est <strong>plus haute</strong> que celle de $5$ h,\n   de $4$ degrés.</p>\n<p><strong>Partie B.</strong>\n4. - Après le dépôt de $360$ DH : $(-140) + (+360) = +220$ DH.\n   - Après le retrait de $520$ DH : $(+220) + (-520) = -300$ DH.\n   - Après le dépôt de $180$ DH : $(-300) + (+180) = -120$ DH.\n5. $$-140 + 360 - 520 + 180$$\n   Positifs : $360 + 180 = 540$. Négatifs : $-140 - 520 = -660$.\n   $$540 - 660 = -120$$\n   Le solde final est $-120$ DH : le compte est débiteur de $120$ DH.\n6. Il faut passer de $-120$ DH à $+400$ DH. Le montant à déposer est\n   $$(+400) - (-120) = 400 + 120 = 520.$$\n   Samira devrait déposer $520$ DH. Vérification : $-120 + 520 = +400$.</p>"
 }
},

{
 "id": "m10",
 "domaine": "maths",
 "unite": 10,
 "theme": "Numérique et calcul",
 "tag": "M10",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M10 — Les nombres relatifs : multiplication et division",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Multiplier deux nombres relatifs en appliquant la règle des signes.",
  "Trouver le signe d'un produit de plusieurs facteurs.",
  "Reconnaître l'inverse d'un nombre relatif non nul.",
  "Diviser deux nombres relatifs et écrire le quotient sous forme fractionnaire.",
  "Calculer une expression qui mélange addition, soustraction, multiplication et division."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Rappel / Situation d'entrée",
   "x": "<p>À Agadir, un commerçant du souk tient les comptes de sa semaine. Chaque jour, il perd\n$12$ DH sur un lot de dattes abîmées. On note cette perte $-12$ DH.</p>\n<p>Au bout de $5$ jours, sa perte totale est :\n$$(-12)+(-12)+(-12)+(-12)+(-12) = -60.$$</p>\n<p>Mais additionner cinq fois le même nombre, c'est multiplier. On voudrait donc écrire :\n$$5\\times(-12) = -60.$$</p>\n<p>Cette leçon donne les règles qui permettent d'écrire ce genre de calcul sans hésiter,\navec n'importe quels signes.</p>\n<p>Rappels utiles de M08 et M09 :\n- La <strong>distance à zéro</strong> de $-7$ est $7$ ; celle de $+4$ est $4$.\n- Deux nombres relatifs sont <strong>opposés</strong> si leur somme vaut $0$ : $-7$ et $+7$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Un plongeur descend de $3$ m par minute. On note $-3$ sa variation\nd'altitude en une minute.</p>\n<ol>\n<li>\n<p>Complète la suite de calculs :\n$$4\\times(-3)=-12 \\quad ; \\quad 3\\times(-3)=-9 \\quad ; \\quad 2\\times(-3)=-6 \\quad ; \\quad 1\\times(-3)=-3 \\quad ; \\quad 0\\times(-3)=0.$$</p>\n</li>\n<li>\n<p>Continue la même logique : que doit valoir $(-1)\\times(-3)$ ? Puis $(-2)\\times(-3)$ ?</p>\n</li>\n</ol>\n<p><strong>Observation.</strong> À chaque étape, le premier facteur diminue de $1$ et le résultat\n<strong>augmente de $3$</strong>. Après $0$, on obtient donc $+3$, puis $+6$.</p>\n<p><strong>Conclusion.</strong>\n- « positif $\\times$ négatif » donne un résultat <strong>négatif</strong> ;\n- « négatif $\\times$ négatif » donne un résultat <strong>positif</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-produit-de-deux-nombres-relatifs\">3.1 Produit de deux nombres relatifs</h3>\n<blockquote>\n<p><strong>Règle des signes (produit).</strong> Pour multiplier deux nombres relatifs :\n1. on multiplie leurs distances à zéro ;\n2. on donne au résultat le signe <strong>$+$</strong> si les deux facteurs ont le <strong>même signe</strong>,\net le signe <strong>$-$</strong> s'ils ont des <strong>signes contraires</strong>.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>$\\times$</th>\n<th>$+$</th>\n<th>$-$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>$+$</strong></td>\n<td>$+$</td>\n<td>$-$</td>\n</tr>\n<tr>\n<td><strong>$-$</strong></td>\n<td>$-$</td>\n<td>$+$</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Exemples.</strong>\n$$(-6)\\times(-5)=+30 \\quad ; \\quad (+6)\\times(-5)=-30 \\quad ; \\quad (-1{,}5)\\times(+4)=-6.$$</p>\n<p><strong>Méthode (pas à pas).</strong> Calculer $(-2{,}5)\\times(-8)$.\n1. Distances à zéro : $2{,}5$ et $8$.\n2. Produit des distances : $2{,}5\\times 8 = 20$.\n3. Signes identiques (les deux négatifs) donc résultat positif : $(-2{,}5)\\times(-8)=+20$.</p>\n<blockquote>\n<p><strong>Cas particuliers.</strong> Pour tout relatif $a$ : $a\\times 1 = a$, $a\\times(-1)=-a$\n(l'opposé de $a$) et $a\\times 0 = 0$.</p>\n</blockquote>\n<p>⚠️ <strong>Erreur fréquente.</strong> Ne pas confondre avec l'addition ! Pour la somme,\n$(-3)+(-4)=-7$ ; pour le produit, $(-3)\\times(-4)=+12$. La règle « moins et moins font\nplus » vaut pour la <strong>multiplication</strong>, jamais pour l'addition.</p>\n<h3 id=\"32-produit-de-plusieurs-facteurs\">3.2 Produit de plusieurs facteurs</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Dans un produit de plusieurs facteurs non nuls :\n- si le <strong>nombre de facteurs négatifs est pair</strong>, le produit est <strong>positif</strong> ;\n- si le <strong>nombre de facteurs négatifs est impair</strong>, le produit est <strong>négatif</strong>.\nSi l'un des facteurs est nul, le produit est nul.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $(-2)\\times(+3)\\times(-5)$ : il y a <strong>deux</strong> facteurs négatifs (nombre pair),\ndonc le produit est positif. Les distances donnent $2\\times3\\times5=30$, d'où\n$$(-2)\\times(+3)\\times(-5)=+30.$$</p>\n<p><strong>Exemple.</strong> $(-1)\\times(-2)\\times(-3)\\times(+4)$ : <strong>trois</strong> facteurs négatifs (impair),\ndonc négatif ; $1\\times2\\times3\\times4=24$ ; le produit vaut $-24$.</p>\n<h3 id=\"33-inverse-dun-nombre-relatif\">3.3 Inverse d'un nombre relatif</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux nombres relatifs sont <strong>inverses</strong> l'un de l'autre si leur produit\nest égal à $1$. L'inverse d'un nombre relatif $a$ non nul se note $\\dfrac{1}{a}$.</p>\n</blockquote>\n<p><strong>Exemples.</strong>\n- L'inverse de $-4$ est $-\\dfrac{1}{4}$ car $(-4)\\times\\left(-\\dfrac{1}{4}\\right)=1$.\n- L'inverse de $-\\dfrac{3}{7}$ est $-\\dfrac{7}{3}$.\n- L'inverse de $0{,}5$ est $2$.\n- $0$ n'a <strong>pas</strong> d'inverse.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> L'inverse et l'opposé sont deux choses différentes.\nL'opposé de $-4$ est $+4$ (somme nulle) ; son inverse est $-\\dfrac{1}{4}$ (produit égal\nà $1$). Remarque : un nombre et son inverse ont <strong>toujours le même signe</strong>.</p>\n<h3 id=\"34-quotient-de-deux-nombres-relatifs\">3.4 Quotient de deux nombres relatifs</h3>\n<blockquote>\n<p><strong>Règle.</strong> Pour diviser deux nombres relatifs (le second non nul) :\n1. on divise leurs distances à zéro ;\n2. on applique <strong>la même règle des signes</strong> que pour le produit.</p>\n</blockquote>\n<p><strong>Exemples.</strong>\n$$(-36)\\div(+9)=-4 \\quad ; \\quad (-36)\\div(-9)=+4 \\quad ; \\quad (+7{,}2)\\div(-6)=-1{,}2.$$</p>\n<blockquote>\n<p><strong>Écriture fractionnaire.</strong> Pour $b\\neq 0$, le quotient de $a$ par $b$ s'écrit\n$\\dfrac{a}{b}$, et l'on a\n$$\\dfrac{-a}{b}=\\dfrac{a}{-b}=-\\dfrac{a}{b}\\qquad\\text{et}\\qquad \\dfrac{-a}{-b}=\\dfrac{a}{b}.$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> $\\dfrac{-15}{4}=\\dfrac{15}{-4}=-\\dfrac{15}{4}=-3{,}75$ et\n$\\dfrac{-15}{-4}=\\dfrac{15}{4}=3{,}75$.</p>\n<blockquote>\n<p><strong>Lien avec l'inverse.</strong> Diviser par un nombre non nul, c'est multiplier par son\ninverse : $a\\div b = a\\times\\dfrac{1}{b}$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $(-8)\\div\\left(-\\dfrac{2}{3}\\right)=(-8)\\times\\left(-\\dfrac{3}{2}\\right)=+12$.</p>\n<h3 id=\"35-priorites-operatoires-avec-des-relatifs\">3.5 Priorités opératoires avec des relatifs</h3>\n<blockquote>\n<p><strong>Règle.</strong> Dans un calcul :\n1. on effectue d'abord ce qui est entre <strong>parenthèses</strong> ;\n2. puis les <strong>multiplications et divisions</strong>, de gauche à droite ;\n3. enfin les <strong>additions et soustractions</strong>, de gauche à droite.</p>\n</blockquote>\n<p><strong>Méthode (pas à pas).</strong> Calculer $A=-5+(-3)\\times(-4)-\\dfrac{-18}{6}$.\n1. Produit : $(-3)\\times(-4)=+12$.\n2. Quotient : $\\dfrac{-18}{6}=-3$.\n3. On remplace : $A=-5+12-(-3)$.\n4. On termine : $A=-5+12+3=10$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Calculer $B=(-4)\\times(+2{,}5)\\times(-10)$.\n<em>Solution.</em> Deux facteurs négatifs : le produit est positif.\n$4\\times2{,}5\\times10=100$, donc $B=+100$.</p>\n<p><strong>Exemple 2.</strong> Calculer $C=\\dfrac{(-6)\\times(+14)}{-4}$.\n<em>Solution.</em> Numérateur : $(-6)\\times(+14)=-84$. Puis $\\dfrac{-84}{-4}=+21$. Donc $C=21$.</p>\n<p><strong>Exemple 3.</strong> Un puits près de Fès est vidé à raison de $25$ litres par minute ;\non note $-25$ L la variation par minute. Quelle est la variation après $8$ minutes ?\n<em>Solution.</em> $8\\times(-25)=-200$ : le puits a perdu $200$ litres.</p>\n<p><strong>Exemple 4.</strong> Le compte d'un artisan de Casablanca est passé de $0$ DH à $-360$ DH en\n$6$ jours, en baissant de la même somme chaque jour. Quelle baisse journalière ?\n<em>Solution.</em> $\\dfrac{-360}{6}=-60$ : il perd $60$ DH par jour.</p>\n<p><strong>Exemple 5.</strong> Calculer $D=(-2)\\times(-3)+(-15)\\div(+3)$.\n<em>Solution.</em> $(-2)\\times(-3)=+6$ ; $(-15)\\div(+3)=-5$ ; donc $D=6+(-5)=1$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Même signe $\\rightarrow$ résultat <strong>positif</strong> ; signes contraires $\\rightarrow$ résultat <strong>négatif</strong>, pour le produit <strong>comme</strong> pour le quotient.</li>\n<li>On calcule toujours d'abord les <strong>distances à zéro</strong>, puis on place le signe.</li>\n<li>Nombre pair de facteurs négatifs $\\rightarrow$ produit positif ; nombre impair $\\rightarrow$ produit négatif.</li>\n<li>$a\\times(-1)=-a$ ; l'inverse de $a\\neq0$ est $\\dfrac{1}{a}$ et a le même signe que $a$ ; $0$ n'a pas d'inverse.</li>\n<li>$\\dfrac{-a}{b}=\\dfrac{a}{-b}=-\\dfrac{a}{b}$ et $\\dfrac{-a}{-b}=\\dfrac{a}{b}$.</li>\n<li>Priorités : parenthèses, puis $\\times$ et $\\div$, puis $+$ et $-$.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Vérifie qu'un produit de deux relatifs ne change pas si l'on échange les facteurs : $(-7)\\times(+3)=(+3)\\times(-7)$.</li>\n<li>Cherche le signe de $(-1)\\times(-1)\\times\\dots\\times(-1)$ avec $100$ facteurs, puis avec $101$ facteurs.</li>\n<li>Prépare la leçon M11 : que vaut le signe de $(-2)^3$ ? de $(-2)^4$ ?</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques du collège — Ministère de l'Éducation nationale (Maroc)</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadre de référence des mathématiques au collège</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"regle-des-signes-produit-et-quotient\">Règle des signes (produit ET quotient)</h2>\n<table>\n<thead>\n<tr>\n<th>Opération</th>\n<th>Signes identiques</th>\n<th>Signes contraires</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$a\\times b$</td>\n<td>résultat $+$</td>\n<td>résultat $-$</td>\n</tr>\n<tr>\n<td>$a\\div b$</td>\n<td>résultat $+$</td>\n<td>résultat $-$</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Méthode en 2 temps :</strong> je calcule avec les distances à zéro, puis je place le signe.</p>\n<p>$$(-7)\\times(-8)=+56 \\qquad (-7)\\times(+8)=-56 \\qquad \\dfrac{-56}{-8}=+7 \\qquad \\dfrac{-56}{8}=-7$$</p>\n<h2 id=\"formules-cles\">Formules clés</h2>\n<table>\n<thead>\n<tr>\n<th>Situation</th>\n<th>Règle</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Facteur $1$</td>\n<td>$a\\times1=a$</td>\n<td>$(-9)\\times1=-9$</td>\n</tr>\n<tr>\n<td>Facteur $-1$</td>\n<td>$a\\times(-1)=-a$</td>\n<td>$(-9)\\times(-1)=9$</td>\n</tr>\n<tr>\n<td>Facteur $0$</td>\n<td>$a\\times0=0$</td>\n<td>$(-9)\\times0=0$</td>\n</tr>\n<tr>\n<td>Plusieurs facteurs</td>\n<td>nombre <strong>pair</strong> de négatifs $\\rightarrow$ $+$ ; <strong>impair</strong> $\\rightarrow$ $-$</td>\n<td>$(-1)(-2)(-3)=-6$</td>\n</tr>\n<tr>\n<td>Inverse</td>\n<td>$a\\times\\dfrac{1}{a}=1$ ($a\\neq0$)</td>\n<td>inverse de $-5$ : $-\\dfrac{1}{5}$</td>\n</tr>\n<tr>\n<td>Division</td>\n<td>$a\\div b=a\\times\\dfrac{1}{b}$</td>\n<td>$(-6)\\div\\dfrac{1}{2}=-12$</td>\n</tr>\n<tr>\n<td>Signes d'une fraction</td>\n<td>$\\dfrac{-a}{b}=\\dfrac{a}{-b}=-\\dfrac{a}{b}$</td>\n<td>$\\dfrac{-3}{4}=-0{,}75$</td>\n</tr>\n<tr>\n<td>Fraction de deux négatifs</td>\n<td>$\\dfrac{-a}{-b}=\\dfrac{a}{b}$</td>\n<td>$\\dfrac{-3}{-4}=0{,}75$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"definitions-cles\">Définitions clés</h2>\n<ul>\n<li><strong>Opposé</strong> de $a$ : le nombre $-a$ ; leur <strong>somme</strong> vaut $0$.</li>\n<li><strong>Inverse</strong> de $a\\neq0$ : le nombre $\\dfrac{1}{a}$ ; leur <strong>produit</strong> vaut $1$.</li>\n<li>Un nombre et son inverse ont <strong>toujours le même signe</strong>. $0$ n'a pas d'inverse.</li>\n</ul>\n<h2 id=\"priorites-operatoires\">Priorités opératoires</h2>\n<ol>\n<li>Parenthèses.</li>\n<li>Multiplications et divisions, de gauche à droite.</li>\n<li>Additions et soustractions, de gauche à droite.</li>\n</ol>\n<p>Exemple : $-4+(-5)\\times(-2)-\\dfrac{-12}{4} = -4+10-(-3) = -4+10+3 = 9$.</p>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li><strong>Confondre somme et produit :</strong> $(-3)+(-5)=-8$ mais $(-3)\\times(-5)=+15$.</li>\n<li><strong>Confondre opposé et inverse :</strong> opposé de $-2$ : $+2$ ; inverse de $-2$ : $-\\dfrac{1}{2}$.</li>\n<li><strong>Oublier les priorités :</strong> dans $-2+3\\times(-4)$, on calcule $3\\times(-4)=-12$ <strong>avant</strong> l'addition ; le résultat est $-14$, pas $-4$.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<ul>\n<li>Deux signes qui se suivent dans un produit : « pareils $\\rightarrow$ plus, différents $\\rightarrow$ moins ».</li>\n<li>Pour un long produit : je compte les signes $-$ ; pair $\\rightarrow$ $+$, impair $\\rightarrow$ $-$.</li>\n<li>Un produit est nul <strong>seulement</strong> si l'un de ses facteurs est nul.</li>\n<li>On ne divise <strong>jamais</strong> par $0$.</li>\n</ul>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Produits de deux relatifs",
   "diff": "facile",
   "q": "<p>Calcule chaque produit.\na) $(-7)\\times(+6)$  b) $(-9)\\times(-4)$  c) $(+8)\\times(-5)$\nd) $(-12)\\times 0$  e) $(-1)\\times(-15)$  f) $(+2{,}5)\\times(-4)$</p>",
   "modele": "<p>a) Signes contraires : $(-7)\\times(+6)=-42$.\nb) Mêmes signes : $(-9)\\times(-4)=+36$.\nc) Signes contraires : $(+8)\\times(-5)=-40$.\nd) Un facteur nul : $(-12)\\times0=0$.\ne) Mêmes signes : $(-1)\\times(-15)=+15$.\nf) Signes contraires : $2{,}5\\times4=10$, donc $(+2{,}5)\\times(-4)=-10$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Seulement le signe",
   "diff": "facile",
   "q": "<p>Sans calculer la valeur, donne le <strong>signe</strong> de chaque produit et justifie par le nombre de facteurs négatifs.\na) $(-3)\\times(-8)\\times(-2)$\nb) $(-1)\\times(+5)\\times(-6)\\times(-2)\\times(-4)$\nc) $(-2)\\times(+7)\\times(-9)$\nd) $(-5)\\times(+4)\\times(+3)\\times(-2)\\times(-1)$</p>",
   "modele": "<p>a) Trois facteurs négatifs (nombre impair) : produit <strong>négatif</strong>.\nb) Quatre facteurs négatifs ($-1$, $-6$, $-2$, $-4$ ; nombre pair) : produit <strong>positif</strong>.\nc) Deux facteurs négatifs (pair) : produit <strong>positif</strong>.\nd) Trois facteurs négatifs ($-5$, $-2$, $-1$ ; impair) : produit <strong>négatif</strong>.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Quotients de deux relatifs",
   "diff": "facile",
   "q": "<p>Calcule.\na) $(-48)\\div(+6)$  b) $(-72)\\div(-9)$  c) $(+35)\\div(-7)$\nd) $(-4{,}8)\\div(+4)$  e) $(-100)\\div(-25)$  f) $(+81)\\div(-9)$</p>",
   "modele": "<p>a) $48\\div6=8$, signes contraires : $-8$.\nb) $72\\div9=8$, mêmes signes : $+8$.\nc) $35\\div7=5$, signes contraires : $-5$.\nd) $4{,}8\\div4=1{,}2$, signes contraires : $-1{,}2$.\ne) $100\\div25=4$, mêmes signes : $+4$.\nf) $81\\div9=9$, signes contraires : $-9$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Inverse ou opposé ?",
   "diff": "facile",
   "q": "<p>Pour chaque nombre, donne son <strong>opposé</strong> puis son <strong>inverse</strong>.\na) $-6$  b) $\\dfrac{3}{5}$  c) $-\\dfrac{2}{9}$  d) $0{,}25$  e) $-1$</p>",
   "modele": "<table>\n<thead>\n<tr>\n<th>Nombre</th>\n<th>Opposé</th>\n<th>Inverse</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$-6$</td>\n<td>$+6$</td>\n<td>$-\\dfrac{1}{6}$</td>\n</tr>\n<tr>\n<td>$\\dfrac{3}{5}$</td>\n<td>$-\\dfrac{3}{5}$</td>\n<td>$\\dfrac{5}{3}$</td>\n</tr>\n<tr>\n<td>$-\\dfrac{2}{9}$</td>\n<td>$\\dfrac{2}{9}$</td>\n<td>$-\\dfrac{9}{2}$</td>\n</tr>\n<tr>\n<td>$0{,}25$</td>\n<td>$-0{,}25$</td>\n<td>$4$</td>\n</tr>\n<tr>\n<td>$-1$</td>\n<td>$+1$</td>\n<td>$-1$</td>\n</tr>\n</tbody>\n</table>\n<p>Vérification pour $0{,}25$ : $0{,}25\\times4=1$. Vérification pour $-\\dfrac{2}{9}$ :\n$\\left(-\\dfrac{2}{9}\\right)\\times\\left(-\\dfrac{9}{2}\\right)=\\dfrac{18}{18}=1$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Écriture fractionnaire",
   "diff": "facile",
   "q": "<p>Écris chaque quotient avec un <strong>dénominateur positif</strong>, puis simplifie si c'est possible.\na) $\\dfrac{-8}{-5}$  b) $\\dfrac{7}{-9}$  c) $-\\dfrac{-4}{11}$\nd) $\\dfrac{-24}{-6}$  e) $\\dfrac{-15}{5}$  f) $\\dfrac{18}{-4}$</p>",
   "modele": "<p>a) $\\dfrac{-8}{-5}=\\dfrac{8}{5}=1{,}6$.\nb) $\\dfrac{7}{-9}=-\\dfrac{7}{9}$.\nc) $-\\dfrac{-4}{11}=\\dfrac{4}{11}$.\nd) $\\dfrac{-24}{-6}=\\dfrac{24}{6}=4$.\ne) $\\dfrac{-15}{5}=-3$.\nf) $\\dfrac{18}{-4}=-\\dfrac{18}{4}=-\\dfrac{9}{2}=-4{,}5$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Produits de plusieurs facteurs",
   "diff": "facile",
   "q": "<p>Calcule.\na) $(-2)\\times(-5)\\times(-3)$\nb) $(-1)\\times(-4)\\times(+2{,}5)$\nc) $(-2)\\times(+3)\\times(-5)\\times(-1)$\nd) $(-10)\\times(-10)\\times(-10)$</p>",
   "modele": "<p>a) Trois facteurs négatifs : signe $-$ ; $2\\times5\\times3=30$ ; résultat $-30$.\nb) Deux facteurs négatifs : signe $+$ ; $1\\times4\\times2{,}5=10$ ; résultat $+10$.\nc) Trois facteurs négatifs : signe $-$ ; $2\\times3\\times5\\times1=30$ ; résultat $-30$.\nd) Trois facteurs négatifs : signe $-$ ; $10\\times10\\times10=1000$ ; résultat $-1\\,000$.</p>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Priorités opératoires",
   "diff": "",
   "q": "<p>Calcule en détaillant les étapes.\n$A=-6+(-4)\\times(-3)$ ; $B=(-5)\\times(+2)-(-8)$ ; $C=12\\div(-3)+(-7)$ ; $D=(-9)-(-2)\\times(+5)$</p>",
   "modele": "<p>$A=-6+(-4)\\times(-3)=-6+12=6$.\n$B=(-5)\\times(+2)-(-8)=-10+8=-2$.\n$C=12\\div(-3)+(-7)=-4-7=-11$.\n$D=(-9)-(-2)\\times(+5)=-9-(-10)=-9+10=1$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Barres de fraction",
   "diff": "",
   "q": "<p>Calcule chaque expression.\n$$E=\\dfrac{(-6)\\times(+15)}{-9} \\qquad F=\\dfrac{(-8)+(-4)}{-3} \\qquad G=\\dfrac{(-5)\\times(-4)}{2-6}$$</p>",
   "modele": "<p>$E$ : numérateur $(-6)\\times(+15)=-90$, donc $E=\\dfrac{-90}{-9}=+10$.\n$F$ : numérateur $(-8)+(-4)=-12$, donc $F=\\dfrac{-12}{-3}=+4$.\n$G$ : numérateur $(-5)\\times(-4)=+20$ ; dénominateur $2-6=-4$ ; donc $G=\\dfrac{20}{-4}=-5$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Diviser, c'est multiplier par l'inverse",
   "diff": "",
   "q": "<p>Calcule en passant par l'inverse.\na) $(-9)\\div\\dfrac{3}{4}$  b) $\\left(-\\dfrac{2}{3}\\right)\\div\\left(-\\dfrac{4}{5}\\right)$  c) $\\left(-\\dfrac{5}{6}\\right)\\div(-10)$</p>",
   "modele": "<p>a) $(-9)\\div\\dfrac{3}{4}=(-9)\\times\\dfrac{4}{3}=-\\dfrac{36}{3}=-12$.\nb) $\\left(-\\dfrac{2}{3}\\right)\\div\\left(-\\dfrac{4}{5}\\right)=\\left(-\\dfrac{2}{3}\\right)\\times\\left(-\\dfrac{5}{4}\\right)=\\dfrac{10}{12}=\\dfrac{5}{6}$.\nc) $\\left(-\\dfrac{5}{6}\\right)\\div(-10)=\\left(-\\dfrac{5}{6}\\right)\\times\\left(-\\dfrac{1}{10}\\right)=\\dfrac{5}{60}=\\dfrac{1}{12}$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Nombre manquant",
   "diff": "",
   "q": "<p>Trouve le nombre relatif $x$ dans chaque égalité.\na) $(-4)\\times x=-28$  b) $x\\times(-6)=54$  c) $x\\div(-5)=-3$  d) $(-36)\\div x=-4$</p>",
   "modele": "<p>a) $x=(-28)\\div(-4)=+7$. Vérification : $(-4)\\times7=-28$.\nb) $x=54\\div(-6)=-9$. Vérification : $(-9)\\times(-6)=54$.\nc) $x=(-3)\\times(-5)=+15$. Vérification : $15\\div(-5)=-3$.\nd) $x=(-36)\\div(-4)=+9$. Vérification : $(-36)\\div9=-4$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Avec des lettres",
   "diff": "",
   "q": "<p>On donne $a=-3$, $b=+4$ et $c=-2$. Calcule :\n$a\\times b$ ; $b\\times c$ ; $a\\times c$ ; $a\\times b\\times c$ ; $(a\\times b)\\div c$.</p>",
   "modele": "<p>$a\\times b=(-3)\\times(+4)=-12$.\n$b\\times c=(+4)\\times(-2)=-8$.\n$a\\times c=(-3)\\times(-2)=+6$.\n$a\\times b\\times c=(-12)\\times(-2)=+24$ (deux facteurs négatifs sur trois : signe $+$).\n$(a\\times b)\\div c=\\dfrac{-12}{-2}=+6$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Vrai ou faux ?",
   "diff": "",
   "q": "<p>Réponds par vrai ou faux, puis justifie (règle ou contre-exemple chiffré).\na) Le produit de deux nombres relatifs négatifs est négatif.\nb) L'inverse de $-\\dfrac{1}{4}$ est $-4$.\nc) Si un produit de trois facteurs est positif, alors les trois facteurs sont positifs.\nd) $\\dfrac{-12}{-3}=-4$.\ne) L'inverse de $0$ est $0$.</p>",
   "modele": "<p>a) <strong>Faux.</strong> Deux négatifs donnent un produit positif : $(-2)\\times(-3)=+6$.\nb) <strong>Vrai.</strong> $\\left(-\\dfrac{1}{4}\\right)\\times(-4)=1$.\nc) <strong>Faux.</strong> Contre-exemple : $(-1)\\times(-1)\\times2=+2$ est positif alors que deux facteurs sont négatifs.\nd) <strong>Faux.</strong> $\\dfrac{-12}{-3}=+4$ (mêmes signes).\ne) <strong>Faux.</strong> $0$ n'a pas d'inverse, car $0\\times n=0\\neq1$ pour tout nombre $n$.</p>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Nuit d'hiver à Ifrane",
   "diff": "difficile",
   "q": "<p>À $18$ h, la température à Ifrane est de $+4\\ ^\\circ\\text{C}$. Elle baisse ensuite\nde $3\\ ^\\circ\\text{C}$ par heure pendant $5$ heures.\n1. Écris un produit qui donne la variation totale de température, puis calcule-la.\n2. Quelle est la température à $23$ h ?\n3. À partir de $23$ h, la température remonte de $2\\ ^\\circ\\text{C}$ par heure. À quelle heure\natteint-elle $-1\\ ^\\circ\\text{C}$ ?</p>",
   "modele": "<ol>\n<li>Variation totale : $5\\times(-3)=-15$, soit une baisse de $15\\ ^\\circ\\text{C}$.</li>\n<li>Température à $23$ h : $4+(-15)=-11\\ ^\\circ\\text{C}$.</li>\n<li>Il faut gagner $-1-(-11)=+10$ degrés, à raison de $2\\ ^\\circ\\text{C}$ par heure :\n$10\\div2=5$ heures. La température atteint $-1\\ ^\\circ\\text{C}$ à $4$ h du matin.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Remboursement à Casablanca",
   "diff": "difficile",
   "q": "<p>Le compte d'un artisan de Casablanca affiche un solde de $-1\\,470$ DH. Il rembourse sa\ndette en $7$ versements égaux, jusqu'à revenir à $0$ DH.\n1. Quel est le montant de chaque versement ?\n2. Quel est le solde après $3$ versements ?\n3. Un autre artisan a un solde de $-1\\,470$ DH et perd encore $210$ DH par jour pendant\n$4$ jours. Quel est son nouveau solde ?</p>",
   "modele": "<ol>\n<li>$(-1\\,470)\\div7=-210$ : chaque versement fait varier le solde de $+210$ DH,\ndonc chaque versement vaut $210$ DH.</li>\n<li>Après $3$ versements : $-1\\,470+3\\times210=-1\\,470+630=-840$ DH.</li>\n<li>$-1\\,470+4\\times(-210)=-1\\,470-840=-2\\,310$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Plongée à Agadir",
   "diff": "difficile",
   "q": "<p>Un plongeur se trouve à l'altitude $-3$ m. Il descend de $4$ m par minute pendant\n$9$ minutes.\n1. Calcule son altitude à la fin de la descente.\n2. Il remonte ensuite de $3$ m par minute. Combien de minutes lui faut-il pour atteindre\nl'altitude $-12$ m ?\n3. Combien de minutes de remontée lui faudrait-il, au total, pour revenir à l'altitude $0$ m ?</p>",
   "modele": "<ol>\n<li>Descente : $9\\times(-4)=-36$ m. Altitude finale : $-3+(-36)=-39$ m.</li>\n<li>Il doit remonter de $-12-(-39)=+27$ m, à $3$ m par minute : $27\\div3=9$ minutes.</li>\n<li>Pour revenir à $0$ m depuis $-39$ m : $39\\div3=13$ minutes.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Programme de calcul",
   "diff": "difficile",
   "q": "<p>Voici un programme : « Choisis un nombre relatif. Multiplie-le par $-3$. Ajoute $5$ au résultat. »\n1. Quel résultat obtient-on avec le nombre $-2$ ? avec le nombre $4$ ?\n2. Quel nombre faut-il choisir pour obtenir $20$ ?\n3. Quel nombre faut-il choisir pour obtenir $5$ ?</p>",
   "modele": "<ol>\n<li>Avec $-2$ : $(-2)\\times(-3)=6$ puis $6+5=11$.\nAvec $4$ : $4\\times(-3)=-12$ puis $-12+5=-7$.</li>\n<li>On veut $-3\\times x+5=20$, donc $-3\\times x=15$ et $x=15\\div(-3)=-5$.\nVérification : $(-5)\\times(-3)+5=15+5=20$.</li>\n<li>On veut $-3\\times x+5=5$, donc $-3\\times x=0$ et $x=0$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Prix du carburant",
   "diff": "difficile",
   "q": "<p>Pendant $5$ jours, le prix d'un litre de gasoil dans une station de Fès a varié ainsi\n(en DH) : $-0{,}40$ ; $+0{,}15$ ; $-0{,}25$ ; $-0{,}30$ ; $+0{,}20$.\n1. Calcule la variation totale sur les $5$ jours.\n2. Calcule la variation <strong>moyenne</strong> par jour (quotient de la variation totale par $5$).\n3. Le prix valait $11{,}50$ DH avant ces $5$ jours. Quel est le prix après ?</p>",
   "modele": "<ol>\n<li>$-0{,}40+0{,}15=-0{,}25$ ; $-0{,}25+(-0{,}25)=-0{,}50$ ; $-0{,}50+(-0{,}30)=-0{,}80$ ;\n$-0{,}80+0{,}20=-0{,}60$. La variation totale est de $-0{,}60$ DH.</li>\n<li>Variation moyenne : $\\dfrac{-0{,}60}{5}=-0{,}12$ DH par jour.</li>\n<li>Prix final : $11{,}50+(-0{,}60)=10{,}90$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Le long produit",
   "diff": "difficile",
   "q": "<p>On considère le produit\n$$P=(-5)\\times(-4)\\times(-3)\\times(-2)\\times(-1)\\times 1\\times 2\\times 3.$$\n1. Combien ce produit a-t-il de facteurs négatifs ? Quel est donc son signe ?\n2. Calcule $P$.\n3. Si l'on remplace le facteur $3$ par $0$, que devient $P$ ? Justifie.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Calculer un produit de deux relatifs</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Raisonner sur le signe d'un produit</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer un quotient de deux relatifs</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Distinguer opposé et inverse</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Maîtriser l'écriture fractionnaire signée</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Calculer un produit de plusieurs facteurs</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Appliquer les priorités opératoires</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Calculer une expression fractionnaire</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Diviser en multipliant par l'inverse</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Raisonner pour trouver un facteur manquant</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Calculer la valeur numérique d'expressions</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Argumenter, produire un contre-exemple</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser une évolution de température</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Modéliser une situation financière</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Modéliser un déplacement vertical</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Raisonner à l'envers sur un programme de calcul</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Traiter des données de variations</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Raisonner sur le signe et le produit nul</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>Les facteurs négatifs sont $-5$, $-4$, $-3$, $-2$, $-1$ : il y en a <strong>cinq</strong>,\nnombre impair, donc $P$ est <strong>négatif</strong>.</li>\n<li>Produit des distances à zéro : $5\\times4\\times3\\times2\\times1\\times1\\times2\\times3=120\\times6=720$.\nDonc $P=-720$.</li>\n<li>Le produit devient $0$ : dès qu'un facteur est nul, le produit entier est nul.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M10",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20</p>\n<h2 id=\"exercice-1-6-points\">Exercice 1 (6 points)</h2>\n<p>Calcule et donne le résultat le plus simple possible.\na) $(-8)\\times(+7)$  b) $(-6)\\times(-9)$  c) $(-56)\\div(-8)$\nd) $(+45)\\div(-5)$  e) $(-2{,}5)\\times(-6)$  f) $(-3)\\times(+4)\\times(-2)$</p>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>a)</td>\n<td>$-56$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>b)</td>\n<td>$+54$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>c)</td>\n<td>$+7$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>d)</td>\n<td>$-9$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>e)</td>\n<td>$+15$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>f)</td>\n<td>$+24$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points\">Exercice 2 (5 points)</h2>\n<p>Calcule en détaillant les étapes.\n$$A=-7+(-6)\\times(-2) \\qquad B=(-20)\\div(+4)-(-3)\\times(-1) \\qquad C=\\dfrac{(-9)\\times(+8)}{-6}$$</p>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$A$</td>\n<td>produit calculé d'abord ($+12$) puis $A=5$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>$B$</td>\n<td>$-5$ et $+3$ obtenus, puis $B=-8$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>$C$</td>\n<td>numérateur $-72$, puis $C=12$</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-4-points\">Exercice 3 (4 points)</h2>\n<ol>\n<li>Donne l'opposé puis l'inverse de $-5$, puis de $\\dfrac{2}{7}$.</li>\n<li>Vrai ou faux ? Justifie chaque réponse.\n   a) L'inverse de $-0{,}5$ est $-2$.\n   b) $\\dfrac{-20}{-4}=-5$.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1. ($-5$)</td>\n<td>opposé $+5$ ; inverse $-\\dfrac{1}{5}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>1. ($\\frac{2}{7}$)</td>\n<td>opposé $-\\dfrac{2}{7}$ ; inverse $\\dfrac{7}{2}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.a)</td>\n<td>vrai, avec justification par le produit égal à $1$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.b)</td>\n<td>faux, le quotient vaut $+5$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points\">Exercice 4 (5 points)</h2>\n<p>Un marchand de fruits secs de Fès note son solde de caisse. Lundi matin, son solde est\nde $+150$ DH. Pendant $6$ jours, il perd $45$ DH par jour.\n1. Écris un produit qui donne la variation totale de son solde, puis calcule-la.\n2. Quel est son solde après ces $6$ jours ?\n3. S'il continuait à perdre $45$ DH par jour, au bout de combien de jours\nsupplémentaires son solde serait-il de $-300$ DH ?\n4. En réalité, il rembourse le solde négatif trouvé à la question 2 en $3$ versements\négaux. Quel est le montant de chaque versement ?</p>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>produit $6\\times(-45)=-270$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>$150+(-270)=-120$ DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3.</td>\n<td>manque $-180$ DH, soit $4$ jours</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.</td>\n<td>$120\\div3=40$ DH par versement</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<p>a) Signes contraires, $8\\times7=56$ : $-56$.\nb) Mêmes signes, $6\\times9=54$ : $+54$.\nc) Mêmes signes, $56\\div8=7$ : $+7$.\nd) Signes contraires, $45\\div5=9$ : $-9$.\ne) Mêmes signes, $2{,}5\\times6=15$ : $+15$.\nf) Deux facteurs négatifs (pair), $3\\times4\\times2=24$ : $+24$.</p>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<p>$A=-7+(-6)\\times(-2)$. Le produit d'abord : $(-6)\\times(-2)=+12$.\nDonc $A=-7+12=5$.</p>\n<p>$B=(-20)\\div(+4)-(-3)\\times(-1)$. Quotient : $(-20)\\div(+4)=-5$.\nProduit : $(-3)\\times(-1)=+3$. Donc $B=-5-3=-8$.</p>\n<p>$C=\\dfrac{(-9)\\times(+8)}{-6}$. Numérateur : $(-9)\\times(+8)=-72$.\nDonc $C=\\dfrac{-72}{-6}=+12$.</p>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>Pour $-5$ : opposé $+5$ (car $-5+5=0$) ; inverse $-\\dfrac{1}{5}$ (car $(-5)\\times\\left(-\\dfrac{1}{5}\\right)=1$).\nPour $\\dfrac{2}{7}$ : opposé $-\\dfrac{2}{7}$ ; inverse $\\dfrac{7}{2}$ (car $\\dfrac{2}{7}\\times\\dfrac{7}{2}=1$).</li>\n<li>a) <strong>Vrai</strong> : $(-0{,}5)\\times(-2)=1$.\nb) <strong>Faux</strong> : les deux nombres ont le même signe, donc $\\dfrac{-20}{-4}=+5$.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>Variation totale : $6\\times(-45)=-270$ DH.</li>\n<li>Solde : $150+(-270)=-120$ DH.</li>\n<li>Il faut encore perdre $-300-(-120)=-180$ DH, soit $180\\div45=4$ jours supplémentaires.</li>\n<li>$120\\div3=40$ : chaque versement vaut $40$ DH (variation de $+40$ DH du solde).</li>\n</ol>"
 }
},

{
 "id": "m11",
 "domaine": "maths",
 "unite": 11,
 "theme": "Numérique et calcul",
 "tag": "M11",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M11 — Les puissances",
 "duree": "6 h",
 "semestre": "1",
 "objectifs": [
  "Écrire un produit de facteurs égaux sous forme de puissance, et inversement.",
  "Connaître le vocabulaire : base, exposant, carré, cube.",
  "Utiliser les puissances de $10$, d'exposant positif ou négatif.",
  "Écrire un nombre en écriture scientifique simple.",
  "Appliquer les règles de calcul sur les puissances de même base.",
  "Trouver le signe d'une puissance d'un nombre relatif."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Rappel / Situation d'entrée",
   "x": "<p>Un ingénieur agronome d'Agadir plante des arbres en carré : $6$ rangées de $6$ arbres.\nLe nombre d'arbres est\n$$6\\times 6 = 36.$$\nOn écrit ce produit plus court : $6^2$, qui se lit « $6$ au carré ».</p>\n<p>Le même ingénieur empile des caisses cubiques : $6$ caisses de côté, sur $6$ de large et\n$6$ de haut. Le nombre de caisses est\n$$6\\times6\\times6 = 216 = 6^3,$$\nqui se lit « $6$ au cube ».</p>\n<p>Écrire des produits de facteurs égaux revient très souvent : en géométrie (aires et\nvolumes), en informatique, et pour manipuler de très grands ou de très petits nombres,\ncomme la population du Maroc ($3{,}7\\times10^7$ habitants environ) ou l'épaisseur d'un\ncheveu ($7\\times10^{-5}$ m).</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Une feuille de papier est pliée en deux, plusieurs fois de suite.\nAprès chaque pliage, le nombre d'épaisseurs double.</p>\n<table>\n<thead>\n<tr>\n<th>Nombre de pliages</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Nombre d'épaisseurs</td>\n<td>2</td>\n<td>4</td>\n<td>8</td>\n<td>16</td>\n<td>32</td>\n</tr>\n</tbody>\n</table>\n<ol>\n<li>Écris chaque nombre d'épaisseurs comme un produit de facteurs $2$.</li>\n<li>Combien y a-t-il de facteurs $2$ après $5$ pliages ? après $10$ pliages ?</li>\n</ol>\n<p><strong>Observation.</strong> Après $5$ pliages : $2\\times2\\times2\\times2\\times2=32$ : il y a $5$ facteurs.\nOn note ce produit $2^5$.</p>\n<p><strong>Conclusion.</strong> Le petit nombre écrit en haut compte <strong>combien de fois</strong> le facteur est\nrépété. Après $10$ pliages, on aurait $2^{10}=1\\,024$ épaisseurs.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-definition-dune-puissance\">3.1 Définition d'une puissance</h3>\n<blockquote>\n<p><strong>Définition.</strong> Soit $a$ un nombre relatif et $n$ un entier supérieur ou égal à $2$.\nLa puissance $a^n$ est le produit de $n$ facteurs égaux à $a$ :\n$$a^n=\\underbrace{a\\times a\\times\\dots\\times a}_{n\\ \\text{facteurs}}.$$\n$a$ est la <strong>base</strong>, $n$ est l'<strong>exposant</strong>. On lit « $a$ exposant $n$ ».</p>\n</blockquote>\n<p><strong>Vocabulaire.</strong> $a^2$ se lit « $a$ au carré », $a^3$ « $a$ au cube ».</p>\n<p><strong>Exemples.</strong> $3^4=3\\times3\\times3\\times3=81$ ; $10^5=100\\,000$ ; $(0{,}5)^2=0{,}25$.</p>\n<blockquote>\n<p><strong>Cas des exposants $1$ et $0$.</strong> Pour tout nombre $a$ non nul :\n$$a^1=a \\qquad\\text{et}\\qquad a^0=1.$$</p>\n</blockquote>\n<p>Ainsi $7^1=7$, $7^0=1$, $(-13)^0=1$ et $(2{,}5)^1=2{,}5$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Ne pas confondre puissance et multiplication par l'exposant :\n$5^3=5\\times5\\times5=125$, alors que $5\\times3=15$. De même $2^4=16$ et non $8$.</p>\n<h3 id=\"32-signe-dune-puissance-dun-nombre-relatif\">3.2 Signe d'une puissance d'un nombre relatif</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Soit $a$ un nombre relatif négatif et $n$ un entier positif.\n- Si $n$ est <strong>pair</strong>, alors $a^n$ est <strong>positif</strong>.\n- Si $n$ est <strong>impair</strong>, alors $a^n$ est <strong>négatif</strong>.\nUne puissance d'un nombre positif est toujours positive.</p>\n</blockquote>\n<p>C'est la règle des signes de M10 : $a^n$ est un produit de $n$ facteurs négatifs.</p>\n<p><strong>Exemples.</strong> $(-2)^2=(-2)\\times(-2)=4$ ; $(-2)^3=-8$ ; $(-2)^4=16$ ; $(-2)^5=-32$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> $(-3)^2$ et $-3^2$ ne sont pas la même chose !\n$(-3)^2=(-3)\\times(-3)=9$, tandis que $-3^2=-(3\\times3)=-9$ : sans parenthèses,\nl'exposant ne porte que sur le $3$.</p>\n<h3 id=\"33-puissances-de-10\">3.3 Puissances de 10</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Pour un entier $n$ positif :\n$$10^n=1\\underbrace{0\\dots0}<em _text_zéros=\"\\text{zéros\" n-1_=\"n-1\\\">{n\\ \\text{zéros}} \\qquad\\text{et}\\qquad 10^{-n}=\\dfrac{1}{10^n}=0{,}\\underbrace{0\\dots0}</em>1.$$}</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>Puissance</th>\n<th>$10^{-3}$</th>\n<th>$10^{-2}$</th>\n<th>$10^{-1}$</th>\n<th>$10^{0}$</th>\n<th>$10^{1}$</th>\n<th>$10^{2}$</th>\n<th>$10^{3}$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Valeur</td>\n<td>$0{,}001$</td>\n<td>$0{,}01$</td>\n<td>$0{,}1$</td>\n<td>$1$</td>\n<td>$10$</td>\n<td>$100$</td>\n<td>$1\\,000$</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Exemples.</strong> $10^6=1\\,000\\,000$ ; $10^{-4}=0{,}0001$ ; $4{,}5\\times10^3=4\\,500$ ;\n$8\\times10^{-2}=0{,}08$.</p>\n<p><strong>Méthode (pas à pas).</strong> Multiplier par $10^n$, c'est décaler la virgule de $n$ rangs\nvers la <strong>droite</strong> ; multiplier par $10^{-n}$, c'est la décaler de $n$ rangs vers la\n<strong>gauche</strong>.\n1. $2{,}47\\times10^4$ : la virgule se décale de $4$ rangs à droite, soit $24\\,700$.\n2. $2{,}47\\times10^{-3}$ : elle se décale de $3$ rangs à gauche, soit $0{,}00247$.</p>\n<h3 id=\"34-ecriture-scientifique\">3.4 Écriture scientifique</h3>\n<blockquote>\n<p><strong>Définition.</strong> L'<strong>écriture scientifique</strong> d'un nombre décimal non nul est son écriture\nsous la forme\n$$a\\times10^{n},$$\noù $n$ est un entier relatif et où $a$ est un nombre décimal dont la partie entière\npossède <strong>un seul chiffre</strong>, différent de zéro (donc $1\\leq a&lt;10$ pour un nombre positif).</p>\n</blockquote>\n<p><strong>Exemples.</strong>\n- $53\\,000=5{,}3\\times10^4$.\n- $0{,}00072=7{,}2\\times10^{-4}$.\n- $9\\,600\\,000$ habitants $=9{,}6\\times10^6$ habitants.\n- $284\\times10^3=2{,}84\\times10^5$ (attention, $284\\times10^3$ n'est <strong>pas</strong> une écriture scientifique).</p>\n<h3 id=\"35-regles-de-calcul-sur-les-puissances\">3.5 Règles de calcul sur les puissances</h3>\n<blockquote>\n<p><strong>Propriétés.</strong> Pour un nombre $a$ non nul et des entiers $m$ et $n$ :\n$$a^m\\times a^n=a^{m+n} \\qquad ; \\qquad \\dfrac{a^m}{a^n}=a^{m-n} \\qquad ; \\qquad \\left(a^m\\right)^n=a^{m\\times n}.$$</p>\n</blockquote>\n<p><strong>Exemples.</strong>\n- $2^3\\times2^4=2^{7}=128$ (vérification : $8\\times16=128$).\n- $\\dfrac{10^7}{10^4}=10^{3}=1\\,000$.\n- $\\left(5^2\\right)^3=5^{6}$.\n- $10^5\\times10^{-2}=10^{3}=1\\,000$.\n- $\\dfrac{10^{-3}}{10^{2}}=10^{-5}=0{,}00001$.</p>\n<p><strong>Méthode (pas à pas).</strong> Calculer $P=\\dfrac{3^5\\times3^2}{3^4}$.\n1. Produit au numérateur : $3^5\\times3^2=3^{7}$.\n2. Quotient : $\\dfrac{3^{7}}{3^{4}}=3^{3}$.\n3. Valeur : $3^3=27$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Ces règles ne s'appliquent qu'à des puissances de <strong>même base</strong>.\n$2^3\\times5^3$ ne vaut pas $10^{6}$ mais $8\\times125=1\\,000=10^3$. Et pour une somme,\n$2^3+2^4=8+16=24$, ce n'est pas $2^7$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Calculer $(-5)^3$ et $(-5)^4$.\n<em>Solution.</em> $3$ est impair, donc $(-5)^3$ est négatif : $(-5)^3=-125$.\n$4$ est pair, donc $(-5)^4$ est positif : $(-5)^4=625$.</p>\n<p><strong>Exemple 2.</strong> Écrire $0{,}00058$ en écriture scientifique.\n<em>Solution.</em> On place la virgule après le premier chiffre non nul : $5{,}8$. Il faut\ndécaler de $4$ rangs vers la gauche, donc $0{,}00058=5{,}8\\times10^{-4}$.</p>\n<p><strong>Exemple 3.</strong> Un stade de Casablanca peut accueillir $45\\,000$ spectateurs. Écris ce\nnombre en écriture scientifique.\n<em>Solution.</em> $45\\,000=4{,}5\\times10^4$ spectateurs.</p>\n<p><strong>Exemple 4.</strong> Calculer $Q=\\dfrac{10^8\\times10^{-3}}{10^{2}}$.\n<em>Solution.</em> Numérateur : $10^{8}\\times10^{-3}=10^{5}$. Puis $\\dfrac{10^5}{10^2}=10^{3}=1\\,000$.</p>\n<p><strong>Exemple 5.</strong> Le volume d'un cube de côté $4$ cm est $4^3=64\\ \\text{cm}^3$ ;\nl'aire d'un carré de côté $9$ cm est $9^2=81\\ \\text{cm}^2$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>$a^n$ est le produit de $n$ facteurs égaux à $a$ ; $a^1=a$ et $a^0=1$ (pour $a\\neq0$).</li>\n<li>Base négative : exposant <strong>pair</strong> $\\rightarrow$ puissance positive ; exposant <strong>impair</strong> $\\rightarrow$ puissance négative.</li>\n<li>$(-a)^n$ et $-a^n$ sont différents : les parenthèses comptent.</li>\n<li>$10^n$ : un $1$ suivi de $n$ zéros ; $10^{-n}=\\dfrac{1}{10^n}$.</li>\n<li>Écriture scientifique : $a\\times10^n$ avec un seul chiffre non nul avant la virgule.</li>\n<li>$a^m\\times a^n=a^{m+n}$ ; $\\dfrac{a^m}{a^n}=a^{m-n}$ ; $\\left(a^m\\right)^n=a^{m\\times n}$ — uniquement pour une <strong>même base</strong>.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Calcule $2^{10}$, $2^{20}$ et compare avec $1\\,000$ et $1\\,000\\,000$.</li>\n<li>Cherche des ordres de grandeur : distance Casablanca–Fès en mètres, en écriture scientifique.</li>\n<li>Vérifie avec la règle du quotient que $\\dfrac{a^n}{a^n}=a^0=1$.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques du collège — Ministère de l'Éducation nationale (Maroc)</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadre de référence des mathématiques au collège</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"definition\">Définition</h2>\n<p>$$a^n=\\underbrace{a\\times a\\times\\dots\\times a}_{n\\ \\text{facteurs}}$$\n$a$ = <strong>base</strong>, $n$ = <strong>exposant</strong>. $a^2$ : « au carré » ; $a^3$ : « au cube ».</p>\n<h2 id=\"tableau-des-regles\">Tableau des règles</h2>\n<table>\n<thead>\n<tr>\n<th>Règle</th>\n<th>Formule</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Exposant $1$</td>\n<td>$a^1=a$</td>\n<td>$12^1=12$</td>\n</tr>\n<tr>\n<td>Exposant $0$</td>\n<td>$a^0=1$ ($a\\neq0$)</td>\n<td>$(-9)^0=1$</td>\n</tr>\n<tr>\n<td>Produit, même base</td>\n<td>$a^m\\times a^n=a^{m+n}$</td>\n<td>$3^2\\times3^4=3^6$</td>\n</tr>\n<tr>\n<td>Quotient, même base</td>\n<td>$\\dfrac{a^m}{a^n}=a^{m-n}$</td>\n<td>$\\dfrac{5^7}{5^3}=5^4$</td>\n</tr>\n<tr>\n<td>Puissance d'une puissance</td>\n<td>$\\left(a^m\\right)^n=a^{m\\times n}$</td>\n<td>$\\left(2^3\\right)^4=2^{12}$</td>\n</tr>\n<tr>\n<td>Puissance de $10$</td>\n<td>$10^n=1$ suivi de $n$ zéros</td>\n<td>$10^4=10\\,000$</td>\n</tr>\n<tr>\n<td>Exposant négatif de $10$</td>\n<td>$10^{-n}=\\dfrac{1}{10^n}$</td>\n<td>$10^{-3}=0{,}001$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"signe-dune-puissance\">Signe d'une puissance</h2>\n<table>\n<thead>\n<tr>\n<th>Base</th>\n<th>Exposant pair</th>\n<th>Exposant impair</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>positive</td>\n<td>positif</td>\n<td>positif</td>\n</tr>\n<tr>\n<td>négative</td>\n<td><strong>positif</strong></td>\n<td><strong>négatif</strong></td>\n</tr>\n</tbody>\n</table>\n<p>$(-4)^2=16$ ; $(-4)^3=-64$ ; $(-4)^4=256$.</p>\n<h2 id=\"puissances-utiles\">Puissances utiles</h2>\n<p>$2^2=4$ ; $2^3=8$ ; $2^4=16$ ; $2^5=32$ ; $2^{10}=1\\,024$.\n$3^2=9$ ; $3^3=27$ ; $3^4=81$. $5^2=25$ ; $5^3=125$. $10^6=1\\,000\\,000$.</p>\n<h2 id=\"ecriture-scientifique\">Écriture scientifique</h2>\n<p>Forme $a\\times10^n$ avec <strong>un seul chiffre non nul avant la virgule</strong> ($1\\leq a&lt;10$).\n- $67\\,400=6{,}74\\times10^4$\n- $0{,}0092=9{,}2\\times10^{-3}$\n- $3{,}7\\times10^7$ = environ $37$ millions d'habitants.</p>\n<p><strong>Astuce virgule :</strong> $\\times10^{n}$ décale la virgule de $n$ rangs à <strong>droite</strong> ;\n$\\times10^{-n}$ de $n$ rangs à <strong>gauche</strong>.</p>\n<h2 id=\"trois-pieges\">Trois pièges</h2>\n<ol>\n<li>$5^3\\neq5\\times3$ : $5^3=125$, pas $15$.</li>\n<li>$(-2)^4=16$ mais $-2^4=-16$ : les parenthèses changent tout.</li>\n<li>Les règles $a^m\\times a^n$ et $\\dfrac{a^m}{a^n}$ exigent la <strong>même base</strong> ; et pour une somme,\n   $2^3+2^2=8+4=12$, ce n'est pas $2^5$.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<ul>\n<li>Multiplier des puissances de même base : j'<strong>ajoute</strong> les exposants.</li>\n<li>Diviser : je <strong>soustrais</strong> les exposants.</li>\n<li>Puissance d'une puissance : je <strong>multiplie</strong> les exposants.</li>\n<li>$a^0=1$ sauf pour $a=0$.</li>\n</ul>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Écrire sous forme de puissance",
   "diff": "facile",
   "q": "<p>Écris chaque produit sous la forme d'une puissance.\na) $7\\times7\\times7$  b) $(-4)\\times(-4)$  c) $10\\times10\\times10\\times10\\times10$\nd) $2\\times2\\times2\\times2\\times2\\times2$  e) $0{,}3\\times0{,}3\\times0{,}3$  f) $1{,}5\\times1{,}5$</p>",
   "modele": "<p>a) $7\\times7\\times7=7^3$\nb) $(-4)\\times(-4)=(-4)^2$\nc) $10\\times10\\times10\\times10\\times10=10^5$\nd) $2\\times2\\times2\\times2\\times2\\times2=2^6$\ne) $0{,}3\\times0{,}3\\times0{,}3=(0{,}3)^3$\nf) $1{,}5\\times1{,}5=(1{,}5)^2$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Développer et calculer",
   "diff": "facile",
   "q": "<p>Écris le produit correspondant, puis donne la valeur.\na) $4^3$  b) $2^5$  c) $3^4$  d) $5^2$  e) $10^4$  f) $1^7$</p>",
   "modele": "<p>a) $4^3=4\\times4\\times4=64$\nb) $2^5=2\\times2\\times2\\times2\\times2=32$\nc) $3^4=3\\times3\\times3\\times3=81$\nd) $5^2=5\\times5=25$\ne) $10^4=10\\times10\\times10\\times10=10\\,000$\nf) $1^7=1\\times1\\times1\\times1\\times1\\times1\\times1=1$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Exposants 0 et 1",
   "diff": "facile",
   "q": "<p>Donne la valeur de chaque puissance.\na) $8^0$  b) $12^1$  c) $(-6)^0$  d) $(-15)^1$  e) $10^0$  f) $(2{,}5)^1$</p>",
   "modele": "<p>a) $8^0=1$  b) $12^1=12$  c) $(-6)^0=1$  d) $(-15)^1=-15$  e) $10^0=1$  f) $(2{,}5)^1=2{,}5$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Signe d'une puissance",
   "diff": "facile",
   "q": "<p>Calcule.\na) $(-3)^2$  b) $(-3)^3$  c) $(-1)^8$  d) $(-1)^9$  e) $(-10)^4$  f) $(-2)^6$</p>",
   "modele": "<p>a) Exposant pair : $(-3)^2=(-3)\\times(-3)=9$.\nb) Exposant impair : $(-3)^3=9\\times(-3)=-27$.\nc) Exposant pair : $(-1)^8=1$.\nd) Exposant impair : $(-1)^9=-1$.\ne) Exposant pair : $(-10)^4=10\\,000$.\nf) Exposant pair : $(-2)^6=64$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Puissances de 10",
   "diff": "facile",
   "q": "<ol>\n<li>Donne l'écriture décimale de $10^5$, $10^7$, $10^{-2}$ et $10^{-5}$.</li>\n<li>Écris $1\\,000$ et $0{,}0001$ sous la forme d'une puissance de $10$.</li>\n</ol>",
   "modele": "<ol>\n<li>$10^5=100\\,000$ ; $10^7=10\\,000\\,000$ ; $10^{-2}=0{,}01$ ; $10^{-5}=0{,}00001$.</li>\n<li>$1\\,000=10^3$ ; $0{,}0001=10^{-4}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "De la puissance de 10 au nombre décimal",
   "diff": "facile",
   "q": "<p>Donne l'écriture décimale de chaque nombre.\na) $3{,}5\\times10^3$  b) $7\\times10^{-2}$  c) $2{,}08\\times10^5$  d) $6{,}4\\times10^{-4}$</p>",
   "modele": "<p>a) $3{,}5\\times10^3=3\\,500$ (virgule décalée de $3$ rangs à droite).\nb) $7\\times10^{-2}=0{,}07$.\nc) $2{,}08\\times10^5=208\\,000$.\nd) $6{,}4\\times10^{-4}=0{,}00064$.</p>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Écriture scientifique",
   "diff": "",
   "q": "<p>Écris chaque nombre en écriture scientifique.\na) $84\\,000$  b) $0{,}00506$  c) $1\\,250\\,000$  d) $0{,}072$  e) $305{,}7$</p>",
   "modele": "<p>a) $84\\,000=8{,}4\\times10^4$\nb) $0{,}00506=5{,}06\\times10^{-3}$\nc) $1\\,250\\,000=1{,}25\\times10^6$\nd) $0{,}072=7{,}2\\times10^{-2}$\ne) $305{,}7=3{,}057\\times10^2$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Une seule puissance",
   "diff": "",
   "q": "<p>Écris chaque expression sous la forme d'une <strong>seule</strong> puissance.\na) $2^5\\times2^3$  b) $10^6\\times10^{-4}$  c) $\\dfrac{3^9}{3^5}$\nd) $\\dfrac{10^{-2}}{10^{3}}$  e) $\\left(7^2\\right)^4$  f) $\\left(5^3\\right)^2$</p>",
   "modele": "<p>a) $2^5\\times2^3=2^{5+3}=2^8$\nb) $10^6\\times10^{-4}=10^{6+(-4)}=10^2$\nc) $\\dfrac{3^9}{3^5}=3^{9-5}=3^4$\nd) $\\dfrac{10^{-2}}{10^{3}}=10^{-2-3}=10^{-5}$\ne) $\\left(7^2\\right)^4=7^{2\\times4}=7^8$\nf) $\\left(5^3\\right)^2=5^{3\\times2}=5^6$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Calculer la valeur",
   "diff": "",
   "q": "<p>Simplifie puis donne la valeur décimale.\na) $2^4\\times2^2$  b) $10^5\\times10^{-3}$  c) $\\dfrac{3^5}{3^3}$  d) $\\left(2^2\\right)^3$</p>",
   "modele": "<p>a) $2^4\\times2^2=2^6=64$\nb) $10^5\\times10^{-3}=10^2=100$\nc) $\\dfrac{3^5}{3^3}=3^2=9$\nd) $\\left(2^2\\right)^3=2^6=64$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Priorités opératoires",
   "diff": "",
   "q": "<p>Calcule en détaillant les étapes.\n$A=3+2\\times5^2$ ; $B=(-2)^3-(-3)^2$ ; $C=4^2\\times(-1)^5$ ; $D=(5-8)^2$</p>",
   "modele": "<p>$A=3+2\\times5^2$ : d'abord la puissance, $5^2=25$ ; puis $2\\times25=50$ ; donc $A=3+50=53$.\n$B=(-2)^3-(-3)^2$ : $(-2)^3=-8$ et $(-3)^2=9$ ; donc $B=-8-9=-17$.\n$C=4^2\\times(-1)^5$ : $4^2=16$ et $(-1)^5=-1$ ; donc $C=16\\times(-1)=-16$.\n$D=(5-8)^2$ : la parenthèse d'abord, $5-8=-3$ ; donc $D=(-3)^2=9$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Vrai ou faux ?",
   "diff": "",
   "q": "<p>Réponds par vrai ou faux et justifie par un calcul.\na) $3^2\\times3^4=9^6$\nb) $(-5)^2=-25$\nc) $10^{-3}=0{,}001$\nd) $\\left(2^3\\right)^2=2^6$\ne) $2^3+2^3=2^6$</p>",
   "modele": "<p>a) <strong>Faux.</strong> $3^2\\times3^4=3^6=729$, alors que $9^6$ est bien plus grand. La base ne change pas.\nb) <strong>Faux.</strong> $(-5)^2=(-5)\\times(-5)=+25$.\nc) <strong>Vrai.</strong> $10^{-3}=\\dfrac{1}{1\\,000}=0{,}001$.\nd) <strong>Vrai.</strong> $\\left(2^3\\right)^2=2^{3\\times2}=2^6$.\ne) <strong>Faux.</strong> $2^3+2^3=8+8=16=2^4$, et non $2^6=64$. On n'additionne pas les exposants dans une somme.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Ranger dans l'ordre",
   "diff": "",
   "q": "<p>Calcule chaque nombre puis range-les dans l'ordre croissant :\n$$2^5 \\quad ; \\quad 3^3 \\quad ; \\quad 5^2 \\quad ; \\quad 10^1 \\quad ; \\quad 4^2 \\quad ; \\quad 1^{100}.$$</p>",
   "modele": "<p>$2^5=32$ ; $3^3=27$ ; $5^2=25$ ; $10^1=10$ ; $4^2=16$ ; $1^{100}=1$.\nOrdre croissant :\n$$1^{100}&lt;10^1&lt;4^2&lt;5^2&lt;3^3&lt;2^5 \\quad\\text{soit}\\quad 1&lt;10&lt;16&lt;25&lt;27&lt;32.$$</p>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Carrés et cubes",
   "diff": "difficile",
   "q": "<ol>\n<li>Calcule l'aire d'un carré de côté $7$ cm.</li>\n<li>Calcule le volume d'un cube d'arête $5$ cm.</li>\n<li>Un cube a un volume de $216\\ \\text{cm}^3$. Quelle est la longueur de son arête ?</li>\n<li>Un carré a une aire de $81\\ \\text{cm}^2$. Quelle est la longueur de son côté ?</li>\n</ol>",
   "modele": "<ol>\n<li>Aire du carré : $7^2=49\\ \\text{cm}^2$.</li>\n<li>Volume du cube : $5^3=125\\ \\text{cm}^3$.</li>\n<li>On cherche le nombre dont le cube vaut $216$ : $6^3=216$, donc l'arête mesure $6$ cm.</li>\n<li>On cherche le nombre dont le carré vaut $81$ : $9^2=81$, donc le côté mesure $9$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Ordres de grandeur au Maroc",
   "diff": "difficile",
   "q": "<ol>\n<li>La superficie du Maroc est d'environ $710\\,850\\ \\text{km}^2$. Écris ce nombre en écriture scientifique.</li>\n<li>La population de la région de Casablanca-Settat est d'environ $7\\,100\\,000$ habitants.\nÉcris ce nombre en écriture scientifique.</li>\n<li>La distance Terre–Soleil vaut environ $150\\,000\\,000$ km. Écris-la en écriture scientifique.</li>\n<li>Parmi les trois nombres précédents, lequel est le plus grand ? Explique comment\nl'écriture scientifique permet de répondre très vite.</li>\n</ol>",
   "modele": "<ol>\n<li>$710\\,850=7{,}1085\\times10^5\\ \\text{km}^2$.</li>\n<li>$7\\,100\\,000=7{,}1\\times10^6$ habitants.</li>\n<li>$150\\,000\\,000=1{,}5\\times10^8$ km.</li>\n<li>Le plus grand est $1{,}5\\times10^8$. En écriture scientifique, il suffit de comparer\nd'abord les exposants de $10$ : $8&gt;6&gt;5$. On ne compare les nombres devant $10$ que si\nles exposants sont égaux.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Bactéries dans un laboratoire de Fès",
   "diff": "difficile",
   "q": "<p>Dans une boîte, une bactérie se divise en deux chaque heure. Au départ, il y a\n$1$ bactérie.\n1. Combien y a-t-il de bactéries après $5$ heures ? Écris le résultat sous forme de puissance et en écriture décimale.\n2. Combien après $10$ heures ?\n3. Au bout de combien d'heures dépasse-t-on $500$ bactéries pour la première fois ?</p>",
   "modele": "<ol>\n<li>Après $5$ heures : $2^5=32$ bactéries.</li>\n<li>Après $10$ heures : $2^{10}=1\\,024$ bactéries.</li>\n<li>$2^8=256$ (inférieur à $500$) et $2^9=512$ (supérieur à $500$).\nOn dépasse $500$ bactéries au bout de $9$ heures.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Épaisseur d'un cheveu",
   "diff": "difficile",
   "q": "<p>Le diamètre d'un cheveu est d'environ $5\\times10^{-5}$ m.\n1. Donne ce diamètre en écriture décimale, en mètres.\n2. Exprime-le en millimètres.\n3. Combien de cheveux faut-il placer côte à côte pour couvrir une longueur de $1$ cm ?</p>",
   "modele": "<ol>\n<li>$5\\times10^{-5}=0{,}00005$ m.</li>\n<li>$1$ m $=1\\,000$ mm, donc $0{,}00005\\ \\text{m}=0{,}00005\\times1\\,000=0{,}05$ mm.</li>\n<li>$1$ cm $=10$ mm et $10\\div0{,}05=200$ : il faut $200$ cheveux côte à côte.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Calculs avec des puissances de 10",
   "diff": "difficile",
   "q": "<p>Calcule chaque produit ou quotient et donne le résultat en <strong>écriture scientifique</strong>.\na) $\\left(3\\times10^4\\right)\\times\\left(2\\times10^3\\right)$\nb) $\\dfrac{8\\times10^5}{4\\times10^2}$\nc) $\\left(5\\times10^{-3}\\right)\\times\\left(4\\times10^{6}\\right)$</p>",
   "modele": "<p>a) $\\left(3\\times10^4\\right)\\times\\left(2\\times10^3\\right)=(3\\times2)\\times10^{4+3}=6\\times10^7$.\nb) $\\dfrac{8\\times10^5}{4\\times10^2}=(8\\div4)\\times10^{5-2}=2\\times10^3$.\nc) $\\left(5\\times10^{-3}\\right)\\times\\left(4\\times10^{6}\\right)=20\\times10^{3}=2\\times10^{4}$\n(on écrit $20=2\\times10$, donc $2\\times10\\times10^3=2\\times10^4$).</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Le chiffre des unités",
   "diff": "difficile",
   "q": "<ol>\n<li>Calcule $3^1$, $3^2$, $3^3$, $3^4$, $3^5$ et $3^6$, puis note le chiffre des unités de chacun.</li>\n<li>Quel motif observes-tu ? Au bout de combien d'étapes se répète-t-il ?</li>\n<li>Sans calculer $3^{15}$, donne son chiffre des unités. Explique ta démarche.</li>\n</ol>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Passer du produit à la puissance</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Calculer une puissance</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Connaître les exposants 0 et 1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Déterminer le signe d'une puissance</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Maîtriser les puissances de 10</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Convertir $a\\times10^n$ en écriture décimale</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Écrire en écriture scientifique</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Appliquer les règles sur les puissances</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Simplifier puis calculer</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Respecter les priorités opératoires</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Argumenter par un calcul</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Comparer et ranger des nombres</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser aire et volume</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Utiliser des ordres de grandeur</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Modéliser une croissance par doublement</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Traiter de très petites mesures</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Calculer avec l'écriture scientifique</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Chercher et justifier une régularité</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$3^1=3$ ; $3^2=9$ ; $3^3=27$ ; $3^4=81$ ; $3^5=243$ ; $3^6=729$.\nChiffres des unités : $3$ ; $9$ ; $7$ ; $1$ ; $3$ ; $9$.</li>\n<li>Le motif $3$ ; $9$ ; $7$ ; $1$ se répète <strong>toutes les $4$ puissances</strong>.</li>\n<li>On divise $15$ par $4$ : $15=4\\times3+3$. Le reste est $3$, donc $3^{15}$ a le même\nchiffre des unités que $3^3$, c'est-à-dire <strong>$7$</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M11",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20</p>\n<h2 id=\"exercice-1-6-points\">Exercice 1 (6 points)</h2>\n<p>Calcule chaque puissance.\na) $2^6$  b) $3^3$  c) $(-4)^2$  d) $(-2)^5$  e) $9^0$  f) $10^{-3}$</p>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>a)</td>\n<td>$64$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>b)</td>\n<td>$27$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>c)</td>\n<td>$16$ (exposant pair)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>d)</td>\n<td>$-32$ (exposant impair)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>e)</td>\n<td>$1$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>f)</td>\n<td>$0{,}001$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points\">Exercice 2 (5 points)</h2>\n<ol>\n<li>Écris sous la forme d'une seule puissance : $5^4\\times5^3$ ; $\\dfrac{10^{8}}{10^{5}}$ ; $\\left(3^2\\right)^5$.</li>\n<li>Calcule ensuite la valeur décimale de $\\dfrac{10^{8}}{10^{5}}$.</li>\n<li>Calcule $E=(-3)^2-2\\times4^2$.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>$5^7$ ; $10^3$ ; $3^{10}$ (0,5 pt chacun)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>$10^3=1\\,000$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3.</td>\n<td>$9-32=-23$, avec étapes</td>\n<td>2,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-4-points\">Exercice 3 (4 points)</h2>\n<ol>\n<li>Écris en écriture scientifique : $47\\,500$ ; $0{,}0039$.</li>\n<li>Donne l'écriture décimale de $6{,}2\\times10^4$ et de $8{,}5\\times10^{-3}$.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1. ($47\\,500$)</td>\n<td>$4{,}75\\times10^4$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>1. ($0{,}0039$)</td>\n<td>$3{,}9\\times10^{-3}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2. ($6{,}2\\times10^4$)</td>\n<td>$62\\,000$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2. ($8{,}5\\times10^{-3}$)</td>\n<td>$0{,}0085$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points\">Exercice 4 (5 points)</h2>\n<p>Une entreprise d'Agadir fabrique des caisses cubiques d'arête $4$ dm.\n1. Calcule le volume d'une caisse, en $\\text{dm}^3$.\n2. L'entreprise empile ces caisses pour former un grand cube de $3$ caisses de côté,\n$3$ de large et $3$ de haut. Combien de caisses utilise-t-elle ?\n3. Chaque caisse coûte $85$ DH. Quel est le prix total de ce grand cube ?\n4. L'entreprise annonce avoir vendu $1\\,200\\,000$ caisses depuis sa création.\nÉcris ce nombre en écriture scientifique.</p>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>$4^3=64\\ \\text{dm}^3$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>$3^3=27$ caisses</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3.</td>\n<td>$27\\times85=2\\,295$ DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4.</td>\n<td>$1{,}2\\times10^6$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<p>a) $2^6=2\\times2\\times2\\times2\\times2\\times2=64$.\nb) $3^3=3\\times3\\times3=27$.\nc) L'exposant $2$ est pair : $(-4)^2=(-4)\\times(-4)=+16$.\nd) L'exposant $5$ est impair : $(-2)^5=-32$.\ne) $9^0=1$.\nf) $10^{-3}=\\dfrac{1}{10^3}=\\dfrac{1}{1\\,000}=0{,}001$.</p>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$5^4\\times5^3=5^{4+3}=5^7$ ; $\\dfrac{10^{8}}{10^{5}}=10^{8-5}=10^3$ ;\n$\\left(3^2\\right)^5=3^{2\\times5}=3^{10}$.</li>\n<li>$10^3=1\\,000$.</li>\n<li>$E=(-3)^2-2\\times4^2$. Les puissances d'abord : $(-3)^2=9$ et $4^2=16$.\nPuis la multiplication : $2\\times16=32$. Enfin $E=9-32=-23$.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$47\\,500=4{,}75\\times10^4$ ; $0{,}0039=3{,}9\\times10^{-3}$.</li>\n<li>$6{,}2\\times10^4=62\\,000$ ; $8{,}5\\times10^{-3}=0{,}0085$.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>Volume d'un cube d'arête $4$ dm : $4^3=64\\ \\text{dm}^3$.</li>\n<li>Nombre de caisses : $3\\times3\\times3=3^3=27$ caisses.</li>\n<li>Prix total : $27\\times85=2\\,295$ DH.</li>\n<li>$1\\,200\\,000=1{,}2\\times10^6$ caisses.</li>\n</ol>"
 }
}
);
