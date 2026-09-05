/* ============================================================
   Base de données — MATHÉMATIQUES 1AC (Maroc)
   Importée depuis la base glaadadil/base-1ac-maroc (docs/05-mathematiques).
   Mathématiques rendues avec KaTeX (CDN).
   ============================================================ */
window.HIDAYA_DATA = window.HIDAYA_DATA || [];

window.HIDAYA_DATA.push(
{
 "id": "m12",
 "domaine": "maths",
 "unite": 12,
 "theme": "Algèbre",
 "tag": "M12",
 "icone": "✖️",
 "niveau": "1re année collège · Maroc",
 "titre": "M12 — Développement et factorisation",
 "duree": "8 h",
 "semestre": "2",
 "objectifs": [
  "Écrire correctement une expression littérale (conventions d'écriture).",
  "Réduire une expression en regroupant les termes semblables.",
  "Développer avec $k(a+b)$ puis avec $(a+b)(c+d)$.",
  "Factoriser en repérant un facteur commun.",
  "Calculer la valeur numérique d'une expression.",
  "Utiliser ces outils pour un périmètre, une aire ou un calcul mental rapide."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Rappel / Situation d'entrée",
   "x": "<p>Au souk de Fès, un cahier coûte $7$ DH et un stylo $3$ DH. Un élève achète $5$ cahiers\net $5$ stylos. Il peut calculer sa dépense de deux façons :\n$$5\\times7+5\\times3=35+15=50 \\qquad\\text{ou}\\qquad 5\\times(7+3)=5\\times10=50.$$</p>\n<p>Les deux méthodes donnent $50$ DH : c'est la <strong>distributivité</strong>, déjà rencontrée en M01.\nMais si le prix du cahier n'est pas connu, on l'appelle $x$ et la dépense s'écrit\n$$5\\times x+5\\times3=5(x+3).$$</p>\n<p>Travailler avec des lettres permet d'écrire une formule valable pour <strong>tous</strong> les prix.\nC'est l'objet du <strong>calcul littéral</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Un terrain rectangulaire d'Agadir mesure $8$ m de large. Sa longueur $x$\nn'est pas connue. On lui ajoute une bande de $3$ m de longueur.</p>\n<pre><code>        x            3\n   +---------+---------------+\n   |         |               |  8 m\n   +---------+---------------+\n</code></pre>\n<ol>\n<li>Calcule l'aire du grand rectangle en utilisant sa longueur totale.</li>\n<li>Calcule l'aire comme somme des aires des deux morceaux.</li>\n</ol>\n<p><strong>Observation.</strong> Première façon : $8\\times(x+3)$. Deuxième façon : $8\\times x+8\\times3=8x+24$.</p>\n<p><strong>Conclusion.</strong> Ces deux écritures désignent la <strong>même</strong> aire :\n$$8(x+3)=8x+24.$$\nPasser de la gauche vers la droite s'appelle <strong>développer</strong> ; passer de la droite vers la\ngauche s'appelle <strong>factoriser</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-expression-litterale-et-conventions-decriture\">3.1 Expression littérale et conventions d'écriture</h3>\n<blockquote>\n<p><strong>Définition.</strong> Une <strong>expression littérale</strong> est une expression contenant une ou\nplusieurs lettres qui représentent des nombres.</p>\n<p><strong>Conventions d'écriture.</strong>\n- On supprime le signe $\\times$ devant une lettre ou une parenthèse : $4\\times x=4x$ et $3\\times(x+1)=3(x+1)$.\n- On écrit le nombre <strong>avant</strong> la lettre : $4x$ et non $x4$.\n- $1\\times x=x$ et $(-1)\\times x=-x$.\n- $x\\times x=x^2$ ; $x\\times x\\times x=x^3$.\n- Le signe $\\times$ reste <strong>obligatoire</strong> entre deux nombres : $4\\times5$.</p>\n</blockquote>\n<p><strong>Exemples.</strong> $2\\times a\\times b=2ab$ ; $5\\times y\\times y=5y^2$ ; $a\\times7=7a$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> $2x$ signifie $2\\times x$, et non $2$ suivi du chiffre $x$.\nAinsi, pour $x=3$, $2x=6$ (et non $23$).</p>\n<h3 id=\"32-reduire-une-expression\">3.2 Réduire une expression</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux <strong>termes semblables</strong> sont deux termes qui ont la même partie\nlittérale (par exemple $5x$ et $-3x$, ou $2x^2$ et $7x^2$).</p>\n<p><strong>Propriété.</strong> On <strong>réduit</strong> une expression en regroupant les termes semblables :\n$$ax+bx=(a+b)x.$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> $7x+4-2x+9=(7x-2x)+(4+9)=5x+13$.</p>\n<p><strong>Exemple.</strong> $3x^2+5x-x^2+2x=(3x^2-x^2)+(5x+2x)=2x^2+7x$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> On ne peut pas additionner $x$ et $x^2$ : $3x+2x^2$ ne se réduit\npas. De même, $4x+5$ ne vaut pas $9x$.</p>\n<h3 id=\"33-distributivite-simple-developper-kab\">3.3 Distributivité simple : développer $k(a+b)$</h3>\n<blockquote>\n<p><strong>Propriété (distributivité).</strong> Pour tous nombres $k$, $a$, $b$ :\n$$k(a+b)=ka+kb \\qquad\\text{et}\\qquad k(a-b)=ka-kb.$$</p>\n</blockquote>\n<p><strong>Méthode (pas à pas).</strong> Développer $-3(2x-5)$.\n1. Je multiplie $-3$ par le premier terme : $-3\\times2x=-6x$.\n2. Je multiplie $-3$ par le second terme, <strong>avec son signe</strong> : $-3\\times(-5)=+15$.\n3. J'écris le résultat : $-3(2x-5)=-6x+15$.</p>\n<p><strong>Exemples.</strong> $4(x+7)=4x+28$ ; $5(3x-2)=15x-10$ ; $-2(x-6)=-2x+12$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Il faut multiplier <strong>tous</strong> les termes de la parenthèse :\n$4(x+7)$ vaut $4x+28$ et non $4x+7$. Et attention au signe : $-2(x-6)=-2x+12$,\npas $-2x-12$.</p>\n<h3 id=\"34-double-distributivite-developper-abcd\">3.4 Double distributivité : développer $(a+b)(c+d)$</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Pour tous nombres $a$, $b$, $c$, $d$ :\n$$(a+b)(c+d)=ac+ad+bc+bd.$$</p>\n</blockquote>\n<p>Chaque terme de la première parenthèse multiplie chaque terme de la seconde : il y a donc\n<strong>quatre</strong> produits.</p>\n<p><strong>Méthode (pas à pas).</strong> Développer $(x+3)(x+5)$.\n1. $x\\times x=x^2$.\n2. $x\\times5=5x$.\n3. $3\\times x=3x$.\n4. $3\\times5=15$.\n5. On additionne puis on réduit : $x^2+5x+3x+15=x^2+8x+15$.</p>\n<p><strong>Exemple.</strong> $(2x-1)(x+4)=2x\\times x+2x\\times4-1\\times x-1\\times4=2x^2+8x-x-4=2x^2+7x-4$.</p>\n<h3 id=\"35-factoriser-reconnaitre-un-facteur-commun\">3.5 Factoriser : reconnaître un facteur commun</h3>\n<blockquote>\n<p><strong>Définition.</strong> <strong>Factoriser</strong> une expression, c'est l'écrire sous forme de <strong>produit</strong>.</p>\n<p><strong>Propriété.</strong> Si un même facteur $k$ apparaît dans chaque terme, on peut l'extraire :\n$$ka+kb=k(a+b).$$</p>\n</blockquote>\n<p><strong>Méthode (pas à pas).</strong> Factoriser $12x+18$.\n1. Je cherche un facteur commun aux deux termes : $12=6\\times2$ et $18=6\\times3$, donc $6$.\n2. J'écris : $12x+18=6\\times2x+6\\times3$.\n3. Je factorise : $12x+18=6(2x+3)$.</p>\n<p><strong>Exemples.</strong>\n- $5x+5y=5(x+y)$.\n- $7x-14=7(x-2)$.\n- $x^2+3x=x(x+3)$ (le facteur commun est $x$).\n- $4x(x+1)+9(x+1)=(x+1)(4x+9)$ (le facteur commun est la parenthèse $(x+1)$).</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Après avoir factorisé, on vérifie toujours en développant :\n$6(2x+3)=12x+18$. Si l'on retrouve l'expression de départ, la factorisation est correcte.</p>\n<h3 id=\"36-valeur-numerique-dune-expression\">3.6 Valeur numérique d'une expression</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>valeur numérique</strong> d'une expression littérale est le nombre obtenu\nen remplaçant chaque lettre par une valeur donnée, puis en calculant.</p>\n</blockquote>\n<p><strong>Méthode (pas à pas).</strong> Calculer $A=3x^2-5x+2$ pour $x=-2$.\n1. Je remplace : $A=3\\times(-2)^2-5\\times(-2)+2$.\n2. Puissance : $(-2)^2=4$, donc $A=3\\times4+10+2$.\n3. Produits : $A=12+10+2$.\n4. Somme : $A=24$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Développer et réduire $B=3(2x+4)-2(x-5)$.\n<em>Solution.</em> $3(2x+4)=6x+12$ et $-2(x-5)=-2x+10$.\nDonc $B=6x+12-2x+10=4x+22$.</p>\n<p><strong>Exemple 2.</strong> Développer $C=(x+6)(x-2)$.\n<em>Solution.</em> $C=x^2-2x+6x-12=x^2+4x-12$.</p>\n<p><strong>Exemple 3.</strong> Factoriser $D=15x-25$ puis $E=x^2-7x$.\n<em>Solution.</em> $D=5(3x-5)$ ; $E=x(x-7)$.</p>\n<p><strong>Exemple 4 (périmètre et aire).</strong> Un jardin rectangulaire de Casablanca a une largeur de\n$x$ mètres et une longueur de $x+4$ mètres.\n<em>Solution.</em> Périmètre : $P=2\\left(x+(x+4)\\right)=2(2x+4)=4x+8$ mètres.\nAire : $\\mathcal{A}=x(x+4)=x^2+4x$ mètres carrés.\nPour $x=6$ : $P=4\\times6+8=32$ m et $\\mathcal{A}=36+24=60\\ \\text{m}^2$.</p>\n<p><strong>Exemple 5 (calcul mental).</strong> Calculer $102\\times35$ de tête.\n<em>Solution.</em> $102\\times35=(100+2)\\times35=3\\,500+70=3\\,570$.\nDe même, $99\\times48=(100-1)\\times48=4\\,800-48=4\\,752$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Conventions : $4\\times x=4x$, $x\\times x=x^2$, on écrit le nombre avant la lettre.</li>\n<li>Réduire : on regroupe seulement les termes <strong>semblables</strong>.</li>\n<li>Développer : $k(a+b)=ka+kb$ et $(a+b)(c+d)=ac+ad+bc+bd$.</li>\n<li>Factoriser : $ka+kb=k(a+b)$ ; on cherche le facteur commun (nombre, lettre ou parenthèse).</li>\n<li>Développer et factoriser sont deux opérations <strong>inverses</strong> : chacune vérifie l'autre.</li>\n<li>Valeur numérique : je remplace, puis j'applique les priorités opératoires.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Vérifie que $(x+3)(x+3)=x^2+6x+9$ et compare avec $x^2+9$ : les deux sont différents.</li>\n<li>Utilise la distributivité pour calculer de tête $998\\times7$ et $25\\times104$.</li>\n<li>Prépare la leçon M13 : que devient l'égalité $4x+8=20$ si l'on factorise le membre de gauche ?</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques du collège — Ministère de l'Éducation nationale (Maroc)</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadre de référence des mathématiques au collège</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"conventions-decriture\">Conventions d'écriture</h2>\n<table>\n<thead>\n<tr>\n<th>J'écris</th>\n<th>Au lieu de</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$5x$</td>\n<td>$5\\times x$</td>\n</tr>\n<tr>\n<td>$3(x+2)$</td>\n<td>$3\\times(x+2)$</td>\n</tr>\n<tr>\n<td>$x^2$</td>\n<td>$x\\times x$</td>\n</tr>\n<tr>\n<td>$-x$</td>\n<td>$(-1)\\times x$</td>\n</tr>\n<tr>\n<td>$2ab$</td>\n<td>$2\\times a\\times b$</td>\n</tr>\n</tbody>\n</table>\n<p>Le signe $\\times$ reste obligatoire entre deux nombres : $4\\times5$.</p>\n<h2 id=\"tableau-des-formules\">Tableau des formules</h2>\n<table>\n<thead>\n<tr>\n<th>Nom</th>\n<th>Formule</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Réduction</td>\n<td>$ax+bx=(a+b)x$</td>\n<td>$7x-2x=5x$</td>\n</tr>\n<tr>\n<td>Distributivité simple</td>\n<td>$k(a+b)=ka+kb$</td>\n<td>$4(x+3)=4x+12$</td>\n</tr>\n<tr>\n<td>Distributivité (soustraction)</td>\n<td>$k(a-b)=ka-kb$</td>\n<td>$-3(x-2)=-3x+6$</td>\n</tr>\n<tr>\n<td>Double distributivité</td>\n<td>$(a+b)(c+d)=ac+ad+bc+bd$</td>\n<td>$(x+2)(x+5)=x^2+7x+10$</td>\n</tr>\n<tr>\n<td>Factorisation</td>\n<td>$ka+kb=k(a+b)$</td>\n<td>$12x+18=6(2x+3)$</td>\n</tr>\n<tr>\n<td>Facteur commun lettre</td>\n<td>$x^2+ax=x(x+a)$</td>\n<td>$x^2+5x=x(x+5)$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"definitions-cles\">Définitions clés</h2>\n<ul>\n<li><strong>Expression littérale</strong> : expression contenant des lettres qui remplacent des nombres.</li>\n<li><strong>Termes semblables</strong> : mêmes lettres avec les mêmes exposants ($4x$ et $-9x$).</li>\n<li><strong>Développer</strong> : transformer un produit en somme.</li>\n<li><strong>Factoriser</strong> : transformer une somme en produit.</li>\n<li><strong>Valeur numérique</strong> : le nombre obtenu en remplaçant les lettres, puis en calculant.</li>\n</ul>\n<h2 id=\"trois-pieges\">Trois pièges</h2>\n<ol>\n<li><strong>Oublier un terme</strong> : $5(x+4)=5x+20$, pas $5x+4$.</li>\n<li><strong>Se tromper de signe</strong> : $-2(x-7)=-2x+14$, pas $-2x-14$.</li>\n<li><strong>Réduire ce qui n'est pas semblable</strong> : $3x+4$ ne vaut pas $7x$ ; $x+x^2$ ne se réduit pas.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<ul>\n<li>Double distributivité : <strong>4 produits</strong> à écrire, puis on réduit.</li>\n<li>Pour factoriser : « qu'est-ce qui se trouve dans tous les termes ? » (nombre, lettre ou parenthèse).</li>\n<li>Contrôle : je développe ma factorisation ; je dois retrouver l'expression de départ.</li>\n<li>Valeur numérique avec un nombre négatif : je mets des parenthèses, $3\\times(-2)^2=12$.</li>\n<li>Calcul mental : $103\\times12=(100+3)\\times12=1\\,200+36=1\\,236$.</li>\n</ul>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Conventions d'écriture",
   "diff": "facile",
   "q": "<p>Écris chaque expression le plus simplement possible.\na) $7\\times x$  b) $x\\times x\\times x$  c) $3\\times(x+5)$\nd) $1\\times y$  e) $a\\times b\\times 5$  f) $x\\times 4$</p>",
   "modele": "<p>a) $7\\times x=7x$  b) $x\\times x\\times x=x^3$  c) $3\\times(x+5)=3(x+5)$\nd) $1\\times y=y$  e) $a\\times b\\times5=5ab$  f) $x\\times4=4x$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Réduire",
   "diff": "facile",
   "q": "<p>Réduis chaque expression.\na) $8x+3x$  b) $9x-4x+2$  c) $5+7x-3-2x$\nd) $4x^2+x^2-2x$  e) $6x-6x+9$  f) $3a+5b-a+2b$</p>",
   "modele": "<p>a) $8x+3x=11x$\nb) $9x-4x+2=5x+2$\nc) $5+7x-3-2x=(7x-2x)+(5-3)=5x+2$\nd) $4x^2+x^2-2x=5x^2-2x$ (on ne peut pas réduire davantage)\ne) $6x-6x+9=0+9=9$\nf) $3a+5b-a+2b=(3a-a)+(5b+2b)=2a+7b$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Distributivité simple",
   "diff": "facile",
   "q": "<p>Développe.\na) $5(x+2)$  b) $3(2x-7)$  c) $-4(x+3)$\nd) $-2(3x-5)$  e) $x(x+6)$  f) $7(2-x)$</p>",
   "modele": "<p>a) $5(x+2)=5x+10$\nb) $3(2x-7)=6x-21$\nc) $-4(x+3)=-4x-12$\nd) $-2(3x-5)=-6x+10$\ne) $x(x+6)=x^2+6x$\nf) $7(2-x)=14-7x$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Double distributivité",
   "diff": "facile",
   "q": "<p>Développe et réduis.\na) $(x+2)(x+4)$  b) $(x+5)(x-3)$  c) $(2x+1)(x+3)$  d) $(x-4)(x-2)$</p>",
   "modele": "<p>a) $(x+2)(x+4)=x^2+4x+2x+8=x^2+6x+8$\nb) $(x+5)(x-3)=x^2-3x+5x-15=x^2+2x-15$\nc) $(2x+1)(x+3)=2x^2+6x+x+3=2x^2+7x+3$\nd) $(x-4)(x-2)=x^2-2x-4x+8=x^2-6x+8$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Facteur commun",
   "diff": "facile",
   "q": "<p>Factorise chaque expression.\na) $4x+4y$  b) $9x+12$  c) $x^2+7x$\nd) $10x-15$  e) $6x^2+4x$  f) $5(x+1)+x(x+1)$</p>",
   "modele": "<p>a) $4x+4y=4(x+y)$\nb) $9x+12=3(3x+4)$\nc) $x^2+7x=x(x+7)$\nd) $10x-15=5(2x-3)$\ne) $6x^2+4x=2x(3x+2)$\nf) $5(x+1)+x(x+1)=(x+1)(5+x)$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Valeur numérique",
   "diff": "facile",
   "q": "<ol>\n<li>Calcule $A=4x+3$ pour $x=2$, puis pour $x=-1$.</li>\n<li>Calcule $B=x^2-2x$ pour $x=3$, puis pour $x=-2$.</li>\n</ol>",
   "modele": "<ol>\n<li>Pour $x=2$ : $A=4\\times2+3=11$. Pour $x=-1$ : $A=4\\times(-1)+3=-4+3=-1$.</li>\n<li>Pour $x=3$ : $B=3^2-2\\times3=9-6=3$.\nPour $x=-2$ : $B=(-2)^2-2\\times(-2)=4+4=8$.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Développer, puis réduire",
   "diff": "",
   "q": "<p>Développe et réduis chaque expression.\na) $3(x+2)+4(x-1)$\nb) $5(2x-3)-2(x+4)$\nc) $-2(x-5)+3(2x+1)$\nd) $x(x+3)-2(x+3)$</p>",
   "modele": "<p>a) $3(x+2)+4(x-1)=3x+6+4x-4=7x+2$\nb) $5(2x-3)-2(x+4)=10x-15-2x-8=8x-23$\nc) $-2(x-5)+3(2x+1)=-2x+10+6x+3=4x+13$\nd) $x(x+3)-2(x+3)=x^2+3x-2x-6=x^2+x-6$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Quatre produits",
   "diff": "",
   "q": "<p>Développe et réduis.\na) $(x+3)(x+7)$  b) $(2x-5)(x+2)$  c) $(3x+1)(2x-4)$  d) $(x-6)(x+6)$</p>",
   "modele": "<p>a) $(x+3)(x+7)=x^2+7x+3x+21=x^2+10x+21$\nb) $(2x-5)(x+2)=2x^2+4x-5x-10=2x^2-x-10$\nc) $(3x+1)(2x-4)=6x^2-12x+2x-4=6x^2-10x-4$\nd) $(x-6)(x+6)=x^2+6x-6x-36=x^2-36$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Factoriser",
   "diff": "",
   "q": "<p>Factorise, puis vérifie en développant.\na) $14x+21$  b) $12x^2-8x$  c) $3(x+2)+x(x+2)$  d) $5(x-1)-x(x-1)$</p>",
   "modele": "<p>a) $14=7\\times2$ et $21=7\\times3$, donc $14x+21=7(2x+3)$.\nVérification : $7(2x+3)=14x+21$.\nb) Facteur commun $4x$ : $12x^2-8x=4x(3x-2)$.\nVérification : $4x(3x-2)=12x^2-8x$.\nc) Facteur commun $(x+2)$ : $3(x+2)+x(x+2)=(x+2)(3+x)$.\nVérification : $(x+2)(3+x)=3x+x^2+6+2x=x^2+5x+6$, et $3(x+2)+x(x+2)=3x+6+x^2+2x=x^2+5x+6$.\nd) Facteur commun $(x-1)$ : $5(x-1)-x(x-1)=(x-1)(5-x)$.\nVérification : $(x-1)(5-x)=5x-x^2-5+x=-x^2+6x-5$, et $5(x-1)-x(x-1)=5x-5-x^2+x=-x^2+6x-5$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Calcul mental",
   "diff": "",
   "q": "<p>Utilise la distributivité pour calculer sans poser d'opération. Écris ta décomposition.\na) $102\\times24$  b) $99\\times36$  c) $25\\times104$  d) $998\\times5$</p>",
   "modele": "<p>a) $102\\times24=(100+2)\\times24=2\\,400+48=2\\,448$\nb) $99\\times36=(100-1)\\times36=3\\,600-36=3\\,564$\nc) $25\\times104=25\\times(100+4)=2\\,500+100=2\\,600$\nd) $998\\times5=(1\\,000-2)\\times5=5\\,000-10=4\\,990$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Deux expressions, un seul résultat",
   "diff": "",
   "q": "<p>On donne $E=2(x+3)$ et $F=2x+6$.\n1. Calcule $E$ et $F$ pour $x=5$, puis pour $x=-4$, puis pour $x=0$.\n2. Que remarques-tu ? Explique-le en développant $E$.</p>",
   "modele": "<ol>\n<li>Pour $x=5$ : $E=2\\times8=16$ et $F=10+6=16$.\nPour $x=-4$ : $E=2\\times(-1)=-2$ et $F=-8+6=-2$.\nPour $x=0$ : $E=2\\times3=6$ et $F=0+6=6$.</li>\n<li>On obtient toujours le même résultat. En développant, $E=2(x+3)=2x+6=F$ :\nles deux expressions sont égales pour <strong>toute</strong> valeur de $x$.</li>\n</ol>",
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
   "q": "<p>Réponds par vrai ou faux et justifie (calcul ou contre-exemple avec une valeur de $x$).\na) $3x+3=6x$\nb) $5(x-2)=5x-10$\nc) $(x+1)(x+2)=x^2+2$\nd) $x^2+4x=x(x+4)$\ne) $-3(2-x)=-6-3x$</p>",
   "modele": "<p>a) <strong>Faux.</strong> $3x$ et $3$ ne sont pas semblables. Pour $x=1$ : $3x+3=6$ mais $6x=6$ ;\npour $x=2$ : $3x+3=9$ alors que $6x=12$. L'égalité n'est donc pas toujours vraie.\nb) <strong>Vrai.</strong> $5(x-2)=5\\times x-5\\times2=5x-10$.\nc) <strong>Faux.</strong> $(x+1)(x+2)=x^2+3x+2$. Pour $x=1$ : $2\\times3=6$, alors que $x^2+2=3$.\nd) <strong>Vrai.</strong> $x(x+4)=x^2+4x$.\ne) <strong>Faux.</strong> $-3(2-x)=-6+3x$. Pour $x=1$ : $-3\\times1=-3$, alors que $-6-3x=-9$.</p>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Terrain rectangulaire",
   "diff": "difficile",
   "q": "<p>Un terrain rectangulaire a une largeur de $x$ mètres et une longueur de $x+7$ mètres.\n1. Exprime son périmètre en fonction de $x$, sous forme développée et réduite.\n2. Exprime son aire en fonction de $x$, sous forme développée.\n3. Calcule le périmètre et l'aire pour $x=12$ m.</p>",
   "modele": "<ol>\n<li>$P=2\\left(x+(x+7)\\right)=2(2x+7)=4x+14$ (en mètres).</li>\n<li>$\\mathcal{A}=x(x+7)=x^2+7x$ (en mètres carrés).</li>\n<li>Pour $x=12$ : $P=4\\times12+14=48+14=62$ m et\n$\\mathcal{A}=12^2+7\\times12=144+84=228\\ \\text{m}^2$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Fournitures au souk de Fès",
   "diff": "difficile",
   "q": "<p>Un cahier coûte $x$ DH et un stylo coûte $4$ DH.\n1. Écris, sous forme factorisée puis développée, le prix de $6$ cahiers et $6$ stylos.\n2. Calcule ce prix pour $x=9$ DH.\n3. Écris le prix de $6$ cahiers et $10$ stylos, sous forme réduite.\n4. Pour $x=9$ DH, quelle est la différence de prix entre les deux achats ?</p>",
   "modele": "<ol>\n<li>Forme factorisée : $6(x+4)$ ; forme développée : $6x+24$.</li>\n<li>Pour $x=9$ : $6\\times9+24=54+24=78$ DH.</li>\n<li>$6$ cahiers et $10$ stylos : $6x+10\\times4=6x+40$.</li>\n<li>Pour $x=9$ : $6\\times9+40=54+40=94$ DH. Différence : $94-78=16$ DH,\nce qui correspond bien à $4$ stylos de plus à $4$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Figure composée",
   "diff": "difficile",
   "q": "<p>On considère un rectangle de longueur $x+5$ (en cm) et de largeur $10$ cm. On enlève dans\nun coin un carré de côté $4$ cm.</p>\n<pre><code>   +---------------------+\n   |                     | 10 cm\n   |          +----+     |\n   +----------|////|-----+\n        x + 5   (carré de côté 4 retiré)\n</code></pre>\n<ol>\n<li>Exprime l'aire du rectangle en fonction de $x$, sous forme développée.</li>\n<li>Exprime l'aire de la figure restante en fonction de $x$.</li>\n<li>Calcule cette aire pour $x=6$ cm.</li>\n</ol>",
   "modele": "<ol>\n<li>Aire du rectangle : $10\\times(x+5)=10x+50$ (en $\\text{cm}^2$).</li>\n<li>Aire du carré retiré : $4^2=16\\ \\text{cm}^2$.\nAire restante : $10x+50-16=10x+34$ (en $\\text{cm}^2$).</li>\n<li>Pour $x=6$ : $10\\times6+34=60+34=94\\ \\text{cm}^2$.</li>\n</ol>",
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
   "q": "<p>Programme : « Choisis un nombre. Ajoute $5$. Multiplie le résultat par $3$. Retranche $15$. »\n1. Applique le programme au nombre $4$, puis au nombre $-2$.\n2. Écris l'expression obtenue en partant d'un nombre $x$, puis développe et réduis-la.\n3. Que fait ce programme, en une phrase ?</p>",
   "modele": "<ol>\n<li>Avec $4$ : $4+5=9$ ; $9\\times3=27$ ; $27-15=12$.\nAvec $-2$ : $-2+5=3$ ; $3\\times3=9$ ; $9-15=-6$.</li>\n<li>Expression : $3(x+5)-15=3x+15-15=3x$.</li>\n<li>Ce programme <strong>triple</strong> le nombre choisi.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Clôture à Agadir",
   "diff": "difficile",
   "q": "<p>Un terrain carré a un côté de $x$ mètres. On l'agrandit de $3$ m dans une seule direction :\nil devient un rectangle de côtés $x$ et $x+3$.\n1. Exprime l'aire du nouveau terrain sous forme développée.\n2. Exprime son périmètre sous forme réduite.\n3. La clôture coûte $45$ DH par mètre. Exprime le prix de la clôture en fonction de $x$,\nsous forme développée.\n4. Calcule ce prix pour $x=20$ m.</p>",
   "modele": "<ol>\n<li>Aire : $x(x+3)=x^2+3x$ (en $\\text{m}^2$).</li>\n<li>Périmètre : $2\\left(x+(x+3)\\right)=2(2x+3)=4x+6$ (en m).</li>\n<li>Prix : $45\\times(4x+6)=180x+270$ (en DH).</li>\n<li>Pour $x=20$ : $180\\times20+270=3\\,600+270=3\\,870$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Une différence surprenante",
   "diff": "difficile",
   "q": "<p>On pose $G=(x+4)(x+2)-(x+1)(x+5)$.\n1. Calcule $G$ pour $x=0$, puis pour $x=10$.\n2. Développe et réduis $G$.\n3. Que peux-tu conclure ?</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Respecter les conventions d'écriture</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Réduire une expression littérale</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Développer avec la distributivité simple</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Développer avec la double distributivité</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Factoriser avec un facteur commun</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Calculer une valeur numérique</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Enchaîner développement et réduction</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Maîtriser les quatre produits</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Factoriser et contrôler son résultat</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Utiliser la distributivité en calcul mental</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Reconnaître deux expressions égales</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Argumenter, produire un contre-exemple</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser périmètre et aire</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Modéliser une situation d'achat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Calculer l'aire d'une figure composée</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Traduire un programme de calcul</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Modéliser un coût par mètre</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Démontrer qu'une expression est constante</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>Pour $x=0$ : $G=(4)(2)-(1)(5)=8-5=3$.\nPour $x=10$ : $G=14\\times12-11\\times15=168-165=3$.</li>\n<li>$(x+4)(x+2)=x^2+2x+4x+8=x^2+6x+8$ et $(x+1)(x+5)=x^2+5x+x+5=x^2+6x+5$.\nDonc $G=(x^2+6x+8)-(x^2+6x+5)=3$.</li>\n<li>$G$ vaut <strong>toujours $3$</strong>, quelle que soit la valeur de $x$ : c'est une expression constante.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M12",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20</p>\n<h2 id=\"exercice-1-5-points\">Exercice 1 (5 points)</h2>\n<p>Réduis ou développe chaque expression.\na) $6x+9x-4x$  b) $4(x+3)$  c) $-5(2x-1)$  d) $x(x+8)$  e) $3+8x-7-3x$</p>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>a)</td>\n<td>$11x$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>b)</td>\n<td>$4x+12$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>c)</td>\n<td>$-10x+5$ (signe correct)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>d)</td>\n<td>$x^2+8x$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>e)</td>\n<td>$5x-4$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points\">Exercice 2 (5 points)</h2>\n<ol>\n<li>Développe et réduis $A=(x+4)(x+6)$.</li>\n<li>Développe et réduis $B=(2x-3)(x+5)$.</li>\n<li>Développe et réduis $C=4(x-2)-3(x+1)$.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>les 4 produits, puis $x^2+10x+24$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>les 4 produits, puis $2x^2+7x-15$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3.</td>\n<td>$4x-8-3x-3=x-11$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-4-points\">Exercice 3 (4 points)</h2>\n<ol>\n<li>Factorise : $16x+24$ ; $x^2-9x$ ; $7(x+3)+x(x+3)$.</li>\n<li>Calcule la valeur numérique de $D=x^2-5x+2$ pour $x=-3$.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1. ($16x+24$)</td>\n<td>$8(2x+3)$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>1. ($x^2-9x$)</td>\n<td>$x(x-9)$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>1. (parenthèse)</td>\n<td>$(x+3)(7+x)$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>$9+15+2=26$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-6-points\">Exercice 4 (6 points)</h2>\n<p>Un jardin public de Casablanca a la forme d'un rectangle de largeur $x$ mètres et de\nlongueur $x+10$ mètres.\n1. Exprime le périmètre du jardin en fonction de $x$, sous forme réduite.\n2. Exprime son aire en fonction de $x$, sous forme développée.\n3. On entoure le jardin d'une grille qui coûte $120$ DH par mètre. Exprime le prix de la\ngrille en fonction de $x$, sous forme développée.\n4. Calcule le périmètre, l'aire et le prix de la grille pour $x=15$ m.</p>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>$P=4x+20$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>$\\mathcal{A}=x^2+10x$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3.</td>\n<td>$120(4x+20)=480x+2\\,400$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.</td>\n<td>$P=80$ m ; $\\mathcal{A}=375\\ \\text{m}^2$ ; prix $=9\\,600$ DH</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<p>a) $6x+9x-4x=11x$.\nb) $4(x+3)=4x+12$.\nc) $-5(2x-1)=-10x+5$.\nd) $x(x+8)=x^2+8x$.\ne) $3+8x-7-3x=(8x-3x)+(3-7)=5x-4$.</p>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$A=(x+4)(x+6)=x^2+6x+4x+24=x^2+10x+24$.</li>\n<li>$B=(2x-3)(x+5)=2x^2+10x-3x-15=2x^2+7x-15$.</li>\n<li>$C=4(x-2)-3(x+1)=4x-8-3x-3=x-11$.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$16x+24=8(2x+3)$ ; $x^2-9x=x(x-9)$ ; $7(x+3)+x(x+3)=(x+3)(7+x)$.</li>\n<li>$D=(-3)^2-5\\times(-3)+2=9+15+2=26$.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>$P=2\\left(x+(x+10)\\right)=2(2x+10)=4x+20$ (en m).</li>\n<li>$\\mathcal{A}=x(x+10)=x^2+10x$ (en $\\text{m}^2$).</li>\n<li>Prix $=120\\times(4x+20)=480x+2\\,400$ (en DH).</li>\n<li>Pour $x=15$ : $P=4\\times15+20=80$ m ;\n$\\mathcal{A}=15^2+10\\times15=225+150=375\\ \\text{m}^2$ ;\nprix $=480\\times15+2\\,400=7\\,200+2\\,400=9\\,600$ DH.</li>\n</ol>"
 }
},

{
 "id": "m13",
 "domaine": "maths",
 "unite": 13,
 "theme": "Algèbre",
 "tag": "M13",
 "icone": "✖️",
 "niveau": "1re année collège · Maroc",
 "titre": "M13 — Les équations",
 "duree": "6 h",
 "semestre": "2",
 "objectifs": [
  "Reconnaître une équation, son inconnue, ses solutions.",
  "Tester si un nombre est solution d'une équation.",
  "Connaître et utiliser les règles de transformation d'une égalité.",
  "Résoudre $ax+b=c$ puis $ax+b=cx+d$.",
  "Résoudre une équation contenant des parenthèses.",
  "Mettre un problème en équation, le résoudre et vérifier la réponse."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Rappel / Situation d'entrée",
   "x": "<p>Au marché de Casablanca, un client achète $4$ kg d'oranges et paie $6$ DH de sac.\nIl donne un billet et la facture totale est de $38$ DH.</p>\n<p>Quel est le prix d'un kilogramme d'oranges ? Appelons-le $x$ (en DH). Alors\n$$4x+6=38.$$</p>\n<p>Cette écriture est une <strong>équation</strong> : une égalité où figure un nombre inconnu. Résoudre\nl'équation, c'est trouver la valeur de $x$ qui rend l'égalité vraie. Ici, on devine que\n$x=8$ car $4\\times8+6=38$. Mais deviner ne suffit pas toujours : il faut une méthode.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Une balance est en équilibre. Sur le plateau de gauche : $3$ sacs\nidentiques de masse inconnue $x$ et un poids de $2$ kg. Sur le plateau de droite : un\npoids de $11$ kg.</p>\n<pre><code>   [ x ][ x ][ x ][2 kg]      |      [11 kg]\n   -------------------- /\\ --------------------\n</code></pre>\n<ol>\n<li>Que se passe-t-il si l'on retire $2$ kg des <strong>deux</strong> plateaux ?</li>\n<li>Que se passe-t-il ensuite si l'on partage le contenu de chaque plateau en $3$ parts égales ?</li>\n</ol>\n<p><strong>Observation.</strong> En retirant $2$ kg de chaque côté, la balance reste équilibrée :\n$3x=9$. En partageant en $3$, on obtient $x=3$.</p>\n<p><strong>Conclusion.</strong> Une égalité reste vraie si l'on effectue la <strong>même</strong> opération des deux\ncôtés. C'est le principe de toute résolution d'équation.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-vocabulaire\">3.1 Vocabulaire</h3>\n<blockquote>\n<p><strong>Définition.</strong> Une <strong>équation</strong> est une égalité contenant une lettre dont on cherche la\nvaleur. Cette lettre est l'<strong>inconnue</strong>. Une <strong>solution</strong> est une valeur de l'inconnue\nqui rend l'égalité vraie. <strong>Résoudre</strong> l'équation, c'est trouver toutes ses solutions.</p>\n</blockquote>\n<p>Dans l'équation $4x+6=38$ :\n- l'inconnue est $x$ ;\n- $4x+6$ est le <strong>premier membre</strong>, $38$ est le <strong>second membre</strong> ;\n- $8$ est une solution car $4\\times8+6=38$.</p>\n<blockquote>\n<p><strong>Définition.</strong> Une équation du <strong>premier degré à une inconnue</strong> est une équation qui,\naprès transformations, s'écrit sous la forme $ax=b$, avec $a\\neq0$. L'inconnue n'y\napparaît qu'à la puissance $1$.</p>\n</blockquote>\n<h3 id=\"32-tester-une-solution\">3.2 Tester une solution</h3>\n<p><strong>Méthode (pas à pas).</strong> Le nombre $-2$ est-il solution de $5x+3=x-5$ ?\n1. Je calcule le premier membre pour $x=-2$ : $5\\times(-2)+3=-10+3=-7$.\n2. Je calcule le second membre : $-2-5=-7$.\n3. Les deux membres sont égaux, donc <strong>oui</strong>, $-2$ est solution.</p>\n<p><strong>Autre exemple.</strong> Le nombre $3$ est-il solution de $2x-1=x+5$ ?\nPremier membre : $2\\times3-1=5$. Second membre : $3+5=8$. Comme $5\\neq8$, <strong>non</strong>.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Il faut calculer les deux membres <strong>séparément</strong>, puis les\ncomparer. On ne remplace pas $x$ dans un seul membre.</p>\n<h3 id=\"33-regles-de-transformation-dune-egalite\">3.3 Règles de transformation d'une égalité</h3>\n<blockquote>\n<p><strong>Propriété 1.</strong> Une égalité reste vraie si l'on <strong>ajoute</strong> ou si l'on <strong>retranche</strong> un\nmême nombre aux deux membres :\n$$\\text{si } a=b \\text{ alors } a+c=b+c \\text{ et } a-c=b-c.$$</p>\n<p><strong>Propriété 2.</strong> Une égalité reste vraie si l'on <strong>multiplie</strong> ou si l'on <strong>divise</strong> les\ndeux membres par un même nombre <strong>non nul</strong> :\n$$\\text{si } a=b \\text{ alors } a\\times c=b\\times c \\text{ et } \\dfrac{a}{c}=\\dfrac{b}{c} \\ (c\\neq0).$$</p>\n</blockquote>\n<p>⚠️ <strong>Erreur fréquente.</strong> On ne divise <strong>jamais</strong> par $0$, et l'opération doit être faite\ndes <strong>deux</strong> côtés. Écrire « $3x=12$ donc $x=12-3$ » est faux : ici on divise, on ne\nsoustrait pas. La bonne réponse est $x=\\dfrac{12}{3}=4$.</p>\n<h3 id=\"34-resoudre-axbc\">3.4 Résoudre $ax+b=c$</h3>\n<p><strong>Méthode (pas à pas).</strong> Résoudre $5x-7=18$.\n1. J'ajoute $7$ aux deux membres : $5x-7+7=18+7$, donc $5x=25$.\n2. Je divise les deux membres par $5$ : $x=\\dfrac{25}{5}=5$.\n3. Je <strong>vérifie</strong> : $5\\times5-7=25-7=18$. C'est bien le second membre.\n4. Je conclus : la solution de l'équation est $x=5$.</p>\n<p><strong>Autre exemple.</strong> Résoudre $-3x+4=19$.\n$-3x=19-4=15$ puis $x=\\dfrac{15}{-3}=-5$.\nVérification : $-3\\times(-5)+4=15+4=19$.</p>\n<h3 id=\"35-resoudre-axbcxd\">3.5 Résoudre $ax+b=cx+d$</h3>\n<p>Quand l'inconnue apparaît des deux côtés, on regroupe d'abord les termes en $x$ dans un\nseul membre.</p>\n<p><strong>Méthode (pas à pas).</strong> Résoudre $7x-5=4x+13$.\n1. Je retranche $4x$ aux deux membres : $7x-4x-5=13$, donc $3x-5=13$.\n2. J'ajoute $5$ aux deux membres : $3x=18$.\n3. Je divise par $3$ : $x=6$.\n4. Vérification : $7\\times6-5=37$ et $4\\times6+13=37$. Les deux membres coïncident.</p>\n<h3 id=\"36-equations-avec-parentheses\">3.6 Équations avec parenthèses</h3>\n<p>On commence par <strong>développer</strong> (leçon M12), puis on réduit, puis on résout.</p>\n<p><strong>Méthode (pas à pas).</strong> Résoudre $3(x+4)=2(x-1)+15$.\n1. Je développe : $3x+12=2x-2+15$.\n2. Je réduis : $3x+12=2x+13$.\n3. Je retranche $2x$ : $x+12=13$.\n4. Je retranche $12$ : $x=1$.\n5. Vérification : $3(1+4)=15$ et $2(1-1)+15=15$. Correct.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Résoudre $2x+9=1$.\n<em>Solution.</em> $2x=1-9=-8$, donc $x=\\dfrac{-8}{2}=-4$. Vérification : $2\\times(-4)+9=1$.</p>\n<p><strong>Exemple 2.</strong> Résoudre $\\dfrac{x}{4}=6$.\n<em>Solution.</em> Je multiplie les deux membres par $4$ : $x=24$. Vérification : $\\dfrac{24}{4}=6$.</p>\n<p><strong>Exemple 3.</strong> Résoudre $8-x=3x+4$.\n<em>Solution.</em> J'ajoute $x$ : $8=4x+4$. Je retranche $4$ : $4=4x$, donc $x=1$.\nVérification : $8-1=7$ et $3\\times1+4=7$.</p>\n<p><strong>Exemple 4 (mise en équation).</strong> Au souk de Fès, Karim achète $3$ boîtes de dattes\nidentiques et une théière à $65$ DH. Il paie $200$ DH en tout. Quel est le prix d'une boîte ?\n<em>Solution.</em>\n1. Choix de l'inconnue : soit $x$ le prix d'une boîte, en DH.\n2. Mise en équation : $3x+65=200$.\n3. Résolution : $3x=135$, donc $x=45$.\n4. Vérification : $3\\times45+65=135+65=200$.\n5. Réponse : une boîte de dattes coûte $45$ DH.</p>\n<p><strong>Exemple 5 (deux formules de prix).</strong> Un club de sport d'Agadir propose deux tarifs :\ntarif A, $40$ DH par séance ; tarif B, un abonnement de $150$ DH plus $25$ DH par séance.\nPour combien de séances les deux tarifs coûtent-ils la même somme ?\n<em>Solution.</em> Soit $n$ le nombre de séances. On résout $40n=150+25n$.\nOn retranche $25n$ : $15n=150$, donc $n=10$.\nPour $10$ séances, les deux tarifs coûtent $400$ DH.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Une équation est une égalité avec une inconnue ; une solution rend l'égalité vraie.</li>\n<li>Tester une solution : je calcule les deux membres séparément et je compare.</li>\n<li>Une égalité se conserve si l'on ajoute, retranche, multiplie ou divise (par un nombre non nul) <strong>des deux côtés</strong>.</li>\n<li>Plan de résolution : développer, réduire, regrouper les $x$ d'un côté et les nombres de l'autre, diviser par le coefficient de $x$.</li>\n<li>On <strong>vérifie toujours</strong> la solution trouvée.</li>\n<li>Mise en équation : je nomme l'inconnue, j'écris l'équation, je résous, je vérifie, je rédige une phrase-réponse.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Résous $2(x+3)=2x+6$ : que remarques-tu ? (tout nombre est solution)</li>\n<li>Résous $x+1=x+5$ : que remarques-tu ? (aucune solution)</li>\n<li>Invente un problème de la vie courante dont l'équation est $6x+20=98$.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques du collège — Ministère de l'Éducation nationale (Maroc)</a></li>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/CadresReference.aspx\">Cadre de référence des mathématiques au collège</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"vocabulaire\">Vocabulaire</h2>\n<ul>\n<li><strong>Équation</strong> : égalité contenant une lettre inconnue. Exemple : $5x-3=12$.</li>\n<li><strong>Inconnue</strong> : la lettre cherchée (souvent $x$).</li>\n<li><strong>Membres</strong> : $5x-3$ est le premier membre, $12$ le second membre.</li>\n<li><strong>Solution</strong> : valeur de l'inconnue qui rend l'égalité vraie ($x=3$ ici).</li>\n<li><strong>Résoudre</strong> : trouver toutes les solutions.</li>\n</ul>\n<h2 id=\"regles-de-transformation\">Règles de transformation</h2>\n<table>\n<thead>\n<tr>\n<th>Règle</th>\n<th>Écriture</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Ajouter le même nombre</td>\n<td>si $a=b$ alors $a+c=b+c$</td>\n<td>$x-4=7$ donne $x=11$</td>\n</tr>\n<tr>\n<td>Retrancher le même nombre</td>\n<td>si $a=b$ alors $a-c=b-c$</td>\n<td>$x+5=9$ donne $x=4$</td>\n</tr>\n<tr>\n<td>Multiplier par $c\\neq0$</td>\n<td>si $a=b$ alors $ac=bc$</td>\n<td>$\\dfrac{x}{3}=5$ donne $x=15$</td>\n</tr>\n<tr>\n<td>Diviser par $c\\neq0$</td>\n<td>si $a=b$ alors $\\dfrac{a}{c}=\\dfrac{b}{c}$</td>\n<td>$6x=42$ donne $x=7$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"methode-de-resolution\">Méthode de résolution</h2>\n<table>\n<thead>\n<tr>\n<th>Étape</th>\n<th>Action</th>\n<th>Exemple : $4(x+2)=x+20$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Développer</td>\n<td>$4x+8=x+20$</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Regrouper les $x$ à gauche</td>\n<td>$3x+8=20$</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Regrouper les nombres à droite</td>\n<td>$3x=12$</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Diviser par le coefficient de $x$</td>\n<td>$x=4$</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Vérifier</td>\n<td>$4(4+2)=24$ et $4+20=24$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"tester-une-solution\">Tester une solution</h2>\n<p>Le nombre $-1$ est-il solution de $3x+2=x$ ?\nPremier membre : $3\\times(-1)+2=-1$. Second membre : $-1$. Égaux, donc <strong>oui</strong>.</p>\n<h2 id=\"mise-en-equation-dun-probleme\">Mise en équation d'un problème</h2>\n<ol>\n<li>Je nomme l'inconnue avec son unité (« soit $x$ le prix d'un cahier, en DH »).</li>\n<li>Je traduis l'énoncé par une égalité.</li>\n<li>Je résous l'équation.</li>\n<li>Je vérifie et j'écris une phrase-réponse.</li>\n</ol>\n<h2 id=\"trois-pieges\">Trois pièges</h2>\n<ol>\n<li><strong>Soustraire au lieu de diviser</strong> : de $5x=20$ on tire $x=4$, pas $x=15$.</li>\n<li><strong>Oublier un côté</strong> : si j'ajoute $3$ à gauche, je l'ajoute aussi à droite.</li>\n<li><strong>Ne pas développer</strong> : dans $2(x-3)=8$, il faut d'abord écrire $2x-6=8$.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<ul>\n<li>Un terme qui « change de côté » change de signe : $x+7=10$ donne $x=10-7$.</li>\n<li>Diviser par un négatif : $-4x=12$ donne $x=\\dfrac{12}{-4}=-3$.</li>\n<li>Vérification obligatoire : elle détecte toutes les erreurs de calcul.</li>\n</ul>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Est-ce une équation ?",
   "diff": "facile",
   "q": "<p>Parmi les écritures suivantes, indique lesquelles sont des équations à <strong>une seule</strong>\ninconnue. Justifie brièvement pour chacune.\na) $3x+5=11$  b) $4+7=11$  c) $2x-3$\nd) $5=x+9$  e) $x+y=4$  f) $7x=0$</p>",
   "modele": "<p>a) <strong>Oui</strong> : égalité avec une inconnue $x$.\nb) <strong>Non</strong> : c'est une égalité entre deux nombres, sans inconnue.\nc) <strong>Non</strong> : c'est une expression littérale, il n'y a pas de signe $=$.\nd) <strong>Oui</strong> : égalité avec l'inconnue $x$ (le membre inconnu est à droite, cela ne change rien).\ne) <strong>Non</strong> : c'est une équation, mais à <strong>deux</strong> inconnues $x$ et $y$.\nf) <strong>Oui</strong> : équation d'inconnue $x$ (sa solution est $x=0$).</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Tester une solution",
   "diff": "facile",
   "q": "<p>Pour chaque cas, dis si le nombre proposé est solution de l'équation. Détaille le calcul\ndes deux membres.\na) $x=4$ pour $3x-5=7$\nb) $x=-2$ pour $5x+1=-9$\nc) $x=3$ pour $2x+4=x+8$\nd) $x=0$ pour $7x-2=-2$</p>",
   "modele": "<p>a) Premier membre : $3\\times4-5=12-5=7$. Second membre : $7$. Égaux : <strong>oui</strong>, $4$ est solution.\nb) Premier membre : $5\\times(-2)+1=-10+1=-9$. Second membre : $-9$. <strong>Oui</strong>.\nc) Premier membre : $2\\times3+4=10$. Second membre : $3+8=11$. $10\\neq11$ : <strong>non</strong>.\nd) Premier membre : $7\\times0-2=-2$. Second membre : $-2$. <strong>Oui</strong>.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Ajouter ou retrancher",
   "diff": "facile",
   "q": "<p>Résous chaque équation.\na) $x+7=15$  b) $x-4=9$  c) $x+12=5$  d) $x-3=-8$</p>",
   "modele": "<p>a) $x=15-7=8$\nb) $x=9+4=13$\nc) $x=5-12=-7$\nd) $x=-8+3=-5$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Multiplier ou diviser",
   "diff": "facile",
   "q": "<p>Résous chaque équation.\na) $5x=45$  b) $-3x=21$  c) $4x=-18$  d) $\\dfrac{x}{6}=7$</p>",
   "modele": "<p>a) $x=\\dfrac{45}{5}=9$\nb) $x=\\dfrac{21}{-3}=-7$\nc) $x=\\dfrac{-18}{4}=-4{,}5$\nd) On multiplie les deux membres par $6$ : $x=7\\times6=42$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Équations $ax+b=c$",
   "diff": "facile",
   "q": "<p>Résous et vérifie chaque solution.\na) $2x+7=19$  b) $5x-8=12$  c) $3x+10=1$\nd) $-4x+5=17$  e) $6x-1=-13$  f) $10x+3=3$</p>",
   "modele": "<p>a) $2x=19-7=12$ donc $x=6$. Vérification : $2\\times6+7=19$.\nb) $5x=12+8=20$ donc $x=4$. Vérification : $5\\times4-8=12$.\nc) $3x=1-10=-9$ donc $x=-3$. Vérification : $3\\times(-3)+10=1$.\nd) $-4x=17-5=12$ donc $x=\\dfrac{12}{-4}=-3$. Vérification : $-4\\times(-3)+5=17$.\ne) $6x=-13+1=-12$ donc $x=-2$. Vérification : $6\\times(-2)-1=-13$.\nf) $10x=3-3=0$ donc $x=0$. Vérification : $10\\times0+3=3$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Vocabulaire",
   "diff": "facile",
   "q": "<p>On considère l'équation $7x-2=3x+10$.\n1. Quelle est l'inconnue ?\n2. Écris le premier membre, puis le second membre.\n3. Le nombre $3$ est-il solution de cette équation ? Justifie par le calcul.</p>",
   "modele": "<ol>\n<li>L'inconnue est $x$.</li>\n<li>Premier membre : $7x-2$ ; second membre : $3x+10$.</li>\n<li>Pour $x=3$ : premier membre $7\\times3-2=19$ ; second membre $3\\times3+10=19$.\nLes deux membres sont égaux, donc <strong>$3$ est solution</strong>.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "L'inconnue des deux côtés",
   "diff": "",
   "q": "<p>Résous chaque équation et vérifie.\na) $6x-4=2x+12$  b) $5x+3=2x+18$  c) $7x-1=9x+11$  d) $4-x=2x-5$</p>",
   "modele": "<p>a) $6x-4=2x+12$. On retranche $2x$ : $4x-4=12$ ; on ajoute $4$ : $4x=16$ ; donc $x=4$.\nVérification : $6\\times4-4=20$ et $2\\times4+12=20$.\nb) $5x+3=2x+18$. On retranche $2x$ : $3x+3=18$ ; puis $3x=15$ ; donc $x=5$.\nVérification : $5\\times5+3=28$ et $2\\times5+18=28$.\nc) $7x-1=9x+11$. On retranche $9x$ : $-2x-1=11$ ; puis $-2x=12$ ; donc $x=\\dfrac{12}{-2}=-6$.\nVérification : $7\\times(-6)-1=-43$ et $9\\times(-6)+11=-43$.\nd) $4-x=2x-5$. On ajoute $x$ : $4=3x-5$ ; on ajoute $5$ : $9=3x$ ; donc $x=3$.\nVérification : $4-3=1$ et $2\\times3-5=1$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Avec des parenthèses",
   "diff": "",
   "q": "<p>Développe d'abord, puis résous.\na) $3(x+2)=18$  b) $2(x-5)=x+1$  c) $4(x+1)=3(x+2)$  d) $5(2x-3)=3(x+2)+7$</p>",
   "modele": "<p>a) $3(x+2)=18$ donne $3x+6=18$, puis $3x=12$ et $x=4$.\nVérification : $3(4+2)=18$.\nb) $2(x-5)=x+1$ donne $2x-10=x+1$, puis $x=11$.\nVérification : $2(11-5)=12$ et $11+1=12$.\nc) $4(x+1)=3(x+2)$ donne $4x+4=3x+6$, puis $x=2$.\nVérification : $4\\times3=12$ et $3\\times4=12$.\nd) $5(2x-3)=3(x+2)+7$ donne $10x-15=3x+6+7$, soit $10x-15=3x+13$.\nOn retranche $3x$ : $7x-15=13$ ; on ajoute $15$ : $7x=28$ ; donc $x=4$.\nVérification : $5(8-3)=25$ et $3\\times6+7=25$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Avec un quotient",
   "diff": "",
   "q": "<p>Résous chaque équation.\na) $\\dfrac{x}{3}+2=7$  b) $\\dfrac{x}{5}=-4$  c) $\\dfrac{2x}{3}=8$  d) $\\dfrac{x}{2}-3=1$</p>",
   "modele": "<p>a) $\\dfrac{x}{3}+2=7$ donne $\\dfrac{x}{3}=5$, puis $x=15$. Vérification : $\\dfrac{15}{3}+2=7$.\nb) $\\dfrac{x}{5}=-4$ donne $x=-20$. Vérification : $\\dfrac{-20}{5}=-4$.\nc) $\\dfrac{2x}{3}=8$ donne $2x=24$, puis $x=12$. Vérification : $\\dfrac{24}{3}=8$.\nd) $\\dfrac{x}{2}-3=1$ donne $\\dfrac{x}{2}=4$, puis $x=8$. Vérification : $\\dfrac{8}{2}-3=1$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Trouve l'erreur",
   "diff": "",
   "q": "<p>Chaque résolution contient une erreur. Repère-la, explique-la et donne la bonne solution.\na) « $3x=15$ donc $x=15-3=12$. »\nb) « $x+8=3$ donc $x=3+8=11$. »\nc) « $2(x+1)=10$ donc $2x+1=10$ donc $x=4{,}5$. »</p>",
   "modele": "<p>a) Erreur : on a soustrait $3$ alors que $x$ est <strong>multiplié</strong> par $3$. Il faut diviser :\n$x=\\dfrac{15}{3}=5$.\nb) Erreur de signe : pour isoler $x$, il faut <strong>retrancher</strong> $8$ aux deux membres :\n$x=3-8=-5$.\nc) Erreur de développement : $2(x+1)=2x+2$ et non $2x+1$. On résout $2x+2=10$,\ndonc $2x=8$ et $x=4$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Choisir la bonne équation",
   "diff": "",
   "q": "<p>Un taxi de Casablanca facture $8$ DH de prise en charge, puis $6$ DH par kilomètre.\nUne course a coûté $44$ DH. On appelle $x$ le nombre de kilomètres parcourus.\n1. Parmi les équations suivantes, laquelle traduit la situation ?\n$6x+8=44$ ; $8x+6=44$ ; $6(x+8)=44$.\n2. Résous l'équation choisie et donne la distance parcourue.</p>",
   "modele": "<ol>\n<li>Le prix est $6x$ pour les kilomètres, plus $8$ DH de prise en charge : l'équation\ncorrecte est $6x+8=44$.</li>\n<li>$6x=44-8=36$, donc $x=6$. La course a duré $6$ km.\nVérification : $6\\times6+8=44$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Du programme de calcul à l'équation",
   "diff": "",
   "q": "<ol>\n<li>« Je choisis un nombre, je le multiplie par $4$, je retranche $9$ et j'obtiens $23$. »\nÉcris l'équation puis trouve le nombre choisi.</li>\n<li>« Je choisis un nombre, je le multiplie par $3$, j'ajoute $7$ et j'obtiens $-2$. »\nÉcris l'équation puis trouve le nombre choisi.</li>\n</ol>",
   "modele": "<ol>\n<li>Équation : $4x-9=23$. On a $4x=32$, donc $x=8$.\nVérification : $4\\times8-9=23$.</li>\n<li>Équation : $3x+7=-2$. On a $3x=-9$, donc $x=-3$.\nVérification : $3\\times(-3)+7=-2$.</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Au souk d'Agadir",
   "diff": "difficile",
   "q": "<p>Un client achète $5$ kg de pommes et un cabas à $4$ DH. Il paie $79$ DH en tout.\n1. Choisis l'inconnue et écris l'équation du problème.\n2. Résous-la.\n3. Vérifie et donne le prix d'un kilogramme de pommes.</p>",
   "modele": "<ol>\n<li>Soit $x$ le prix d'un kilogramme de pommes, en DH. Équation : $5x+4=79$.</li>\n<li>$5x=79-4=75$, donc $x=15$.</li>\n<li>Vérification : $5\\times15+4=75+4=79$ DH.\nUn kilogramme de pommes coûte <strong>$15$ DH</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Deux tarifs de salle de sport",
   "diff": "difficile",
   "q": "<p>Une salle de sport de Fès propose deux tarifs :\n- <strong>tarif A</strong> : $25$ DH par séance ;\n- <strong>tarif B</strong> : un abonnement de $120$ DH, puis $10$ DH par séance.</p>\n<p>On appelle $n$ le nombre de séances.\n1. Exprime le prix payé avec chaque tarif en fonction de $n$.\n2. Pour combien de séances les deux tarifs coûtent-ils la même somme ? Quel est alors le prix ?\n3. Pour $12$ séances, quel tarif est le plus avantageux ? Justifie par un calcul.</p>",
   "modele": "<ol>\n<li>Tarif A : $25n$ DH. Tarif B : $120+10n$ DH.</li>\n<li>On résout $25n=120+10n$. On retranche $10n$ : $15n=120$, donc $n=8$.\nPrix commun : $25\\times8=200$ DH (et $120+10\\times8=200$ DH).\nLes deux tarifs coûtent la même somme pour $8$ séances.</li>\n<li>Pour $12$ séances : tarif A $=25\\times12=300$ DH ; tarif B $=120+120=240$ DH.\nLe <strong>tarif B</strong> est plus avantageux (économie de $60$ DH).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Périmètre d'un terrain",
   "diff": "difficile",
   "q": "<p>Un terrain rectangulaire a une largeur de $x$ mètres et une longueur de $x+5$ mètres.\nSon périmètre mesure $46$ m.\n1. Écris une équation traduisant cette situation.\n2. Résous-la et donne la largeur et la longueur du terrain.\n3. Calcule l'aire du terrain.</p>",
   "modele": "<ol>\n<li>Périmètre : $2\\left(x+(x+5)\\right)=46$, soit $4x+10=46$.</li>\n<li>$4x=36$, donc $x=9$. La largeur mesure $9$ m et la longueur $9+5=14$ m.\nVérification : $2\\times(9+14)=2\\times23=46$ m.</li>\n<li>Aire : $9\\times14=126\\ \\text{m}^2$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Question d'âges",
   "diff": "difficile",
   "q": "<p>Aujourd'hui, un père a $39$ ans et son fils $11$ ans.\n1. Dans $x$ années, quel sera l'âge du père ? celui du fils ?\n2. Écris une équation traduisant : « dans $x$ années, l'âge du père sera le double de celui du fils ».\n3. Résous l'équation et vérifie ta réponse.</p>",
   "modele": "<ol>\n<li>Dans $x$ années : le père aura $39+x$ ans et le fils $11+x$ ans.</li>\n<li>Équation : $39+x=2(11+x)$.</li>\n<li>On développe : $39+x=22+2x$. On retranche $x$ : $39=22+x$ ; puis $x=17$.\nVérification : dans $17$ ans, le père aura $56$ ans et le fils $28$ ans, et\n$56=2\\times28$. C'est bien dans <strong>$17$ ans</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Partage d'une somme",
   "diff": "difficile",
   "q": "<p>Trois amis se partagent $510$ DH. Le deuxième reçoit le double du premier. Le troisième\nreçoit $30$ DH de plus que le premier.\n1. Choisis l'inconnue et exprime la part de chacun en fonction de cette inconnue.\n2. Écris l'équation du problème, puis résous-la.\n3. Donne les trois parts et vérifie que leur somme vaut bien $510$ DH.</p>",
   "modele": "<ol>\n<li>Soit $x$ la part du premier ami, en DH. Le deuxième reçoit $2x$ et le troisième $x+30$.</li>\n<li>Équation : $x+2x+(x+30)=510$, soit $4x+30=510$.\nOn retranche $30$ : $4x=480$, donc $x=120$.</li>\n<li>Premier : $120$ DH ; deuxième : $2\\times120=240$ DH ; troisième : $120+30=150$ DH.\nVérification : $120+240+150=510$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Équations surprenantes",
   "diff": "difficile",
   "q": "<p>Résous, si c'est possible, chacune des équations suivantes et commente le résultat.\na) $2(x+3)=2x+6$\nb) $x+4=x+9$\nc) $5x-3=3+5x$</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Reconnaître une équation et son inconnue</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Tester une solution</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Utiliser l'addition et la soustraction</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Utiliser la multiplication et la division</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Résoudre $ax+b=c$</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Maîtriser le vocabulaire des équations</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Résoudre $ax+b=cx+d$</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Développer puis résoudre</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Résoudre une équation avec quotient</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Analyser et corriger une erreur</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Modéliser : choisir la bonne équation</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Traduire un programme de calcul</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Mettre un achat en équation</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Comparer deux tarifs</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Modéliser un périmètre</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Modéliser un problème d'âges</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Modéliser un partage</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Raisonner sur les cas particuliers</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<p>a) $2(x+3)=2x+6$ donne $2x+6=2x+6$. Les deux membres sont identiques :\nl'égalité est vraie pour <strong>tout</strong> nombre $x$. Tous les nombres sont solutions.\nb) $x+4=x+9$. On retranche $x$ : $4=9$, ce qui est faux.\nCette équation n'a <strong>aucune</strong> solution.\nc) $5x-3=3+5x$. On retranche $5x$ : $-3=3$, ce qui est faux.\nCette équation n'a <strong>aucune</strong> solution.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M13",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20</p>\n<h2 id=\"exercice-1-4-points\">Exercice 1 (4 points)</h2>\n<ol>\n<li>Le nombre $-3$ est-il solution de l'équation $4x+5=-7$ ? Détaille le calcul des deux membres.</li>\n<li>Le nombre $2$ est-il solution de l'équation $3x-1=x+4$ ? Détaille le calcul.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>$4\\times(-3)+5=-7$ ; oui, $-3$ est solution</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>$5$ et $6$ : non, $2$ n'est pas solution</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-6-points\">Exercice 2 (6 points)</h2>\n<p>Résous chaque équation et vérifie ta solution.\na) $x+9=4$  b) $-5x=35$  c) $3x-8=13$  d) $\\dfrac{x}{4}=-3$</p>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>a)</td>\n<td>$x=-5$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>b)</td>\n<td>$x=-7$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>c)</td>\n<td>$3x=21$ puis $x=7$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>d)</td>\n<td>$x=-12$</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points\">Exercice 3 (5 points)</h2>\n<p>Résous les équations suivantes en détaillant les étapes.\n1. $8x-3=5x+12$\n2. $4(x+2)=2(x+7)$</p>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>regroupement des $x$, $3x=15$, $x=5$</td>\n<td>2,5</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>développement $4x+8=2x+14$, puis $x=3$</td>\n<td>2,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points\">Exercice 4 (5 points)</h2>\n<p>Un libraire de Fès vend des cahiers tous au même prix. Une école achète $7$ cahiers et\nune boîte de craies à $23$ DH. La facture s'élève à $114$ DH.\n1. Choisis l'inconnue en précisant son unité.\n2. Écris l'équation qui traduit la situation.\n3. Résous l'équation.\n4. Vérifie, puis rédige une phrase-réponse.</p>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.</td>\n<td>« soit $x$ le prix d'un cahier, en DH »</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2.</td>\n<td>$7x+23=114$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3.</td>\n<td>$7x=91$ puis $x=13$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4.</td>\n<td>vérification $7\\times13+23=114$ et phrase-réponse</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>Premier membre pour $x=-3$ : $4\\times(-3)+5=-12+5=-7$. Second membre : $-7$.\nLes deux membres sont égaux, donc <strong>$-3$ est solution</strong>.</li>\n<li>Premier membre pour $x=2$ : $3\\times2-1=5$. Second membre : $2+4=6$.\nComme $5\\neq6$, <strong>$2$ n'est pas solution</strong>.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<p>a) $x=4-9=-5$. Vérification : $-5+9=4$.\nb) $x=\\dfrac{35}{-5}=-7$. Vérification : $-5\\times(-7)=35$.\nc) $3x=13+8=21$, donc $x=7$. Vérification : $3\\times7-8=13$.\nd) On multiplie les deux membres par $4$ : $x=-3\\times4=-12$.\nVérification : $\\dfrac{-12}{4}=-3$.</p>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$8x-3=5x+12$. On retranche $5x$ : $3x-3=12$. On ajoute $3$ : $3x=15$, donc $x=5$.\nVérification : $8\\times5-3=37$ et $5\\times5+12=37$.</li>\n<li>$4(x+2)=2(x+7)$ donne $4x+8=2x+14$. On retranche $2x$ : $2x+8=14$.\nOn retranche $8$ : $2x=6$, donc $x=3$.\nVérification : $4\\times5=20$ et $2\\times10=20$.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>Soit $x$ le prix d'un cahier, en DH.</li>\n<li>Équation : $7x+23=114$.</li>\n<li>$7x=114-23=91$, donc $x=\\dfrac{91}{7}=13$.</li>\n<li>Vérification : $7\\times13+23=91+23=114$ DH.\nUn cahier coûte <strong>$13$ DH</strong>.</li>\n</ol>"
 }
},

{
 "id": "m14",
 "domaine": "maths",
 "unite": 14,
 "theme": "Géométrie",
 "tag": "M14",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M14 — La symétrie centrale",
 "duree": "6 h",
 "semestre": "2",
 "objectifs": [
  "Construire le symétrique d'un point par rapport à un point.",
  "Construire l'image d'un segment, d'une droite, d'un cercle, d'un angle.",
  "Connaître et utiliser les propriétés conservées par la symétrie centrale.",
  "Reconnaître le centre de symétrie d'une figure.",
  "Distinguer la symétrie centrale de la symétrie axiale."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Dans un café de Fès, une table de jeu de dames est décorée d'un motif carré. Le\nserveur fait tourner la table d'un <strong>demi-tour</strong> (un tour de $180°$) autour du clou\nplanté exactement au centre du plateau. À la fin du mouvement, le motif semble\nn'avoir pas bougé du tout : chaque case noire est venue prendre la place d'une\nautre case noire.</p>\n<p>Sur le même plateau, un joueur pose un pion en un point $A$. Après le demi-tour,\nle pion se retrouve en un point $A'$. Le clou, lui, n'a pas bougé.</p>\n<p><strong>Question.</strong> Que peut-on dire du clou par rapport aux deux positions $A$ et $A'$ du\npion ? Comment retrouver $A'$ si on connaît $A$ et le clou ?</p>\n<p>C'est exactement le sujet de cette leçon : la <strong>symétrie centrale</strong>, c'est-à-dire\nle demi-tour autour d'un point.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Sur une feuille, place un point $O$. Place ensuite un point $A$ à\n$3$ cm de $O$. Trace la demi-droite $[AO)$ et prolonge-la au-delà de $O$. Sur ce\nprolongement, place le point $A'$ tel que $OA' = 3$ cm.</p>\n<p>Pique une aiguille en $O$, puis fais tourner la feuille d'un demi-tour.</p>\n<p><strong>Observation.</strong> Après le demi-tour, le point $A$ arrive exactement sur $A'$. De\nplus, les trois points $A$, $O$, $A'$ sont alignés et $OA = OA' = 3$ cm.</p>\n<p><strong>Conclusion.</strong> Le point $O$ est le <strong>milieu</strong> du segment $[AA']$. Faire un\ndemi-tour autour de $O$ revient à remplacer chaque point par le point tel que $O$\nsoit le milieu du segment qui les joint.</p>\n<p><strong>Activité 2.</strong> Trace un triangle $ABC$ quelconque et un point $O$ à l'extérieur.\nConstruis les symétriques $A'$, $B'$, $C'$ des trois sommets par rapport à $O$,\npuis trace le triangle $A'B'C'$. Mesure les côtés et les angles des deux triangles.</p>\n<p><strong>Observation.</strong> On trouve $A'B' = AB$, $B'C' = BC$, $A'C' = AC$ et les angles sont\négaux deux à deux. Le triangle $A'B'C'$ est un « calque retourné d'un demi-tour »\ndu triangle $ABC$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-symetrique-dun-point\">3.1 Symétrique d'un point</h3>\n<blockquote>\n<p><strong>Définition.</strong> Soit $O$ un point du plan. Le <strong>symétrique</strong> d'un point $A$ par\nrapport à $O$ est le point $A'$ tel que $O$ soit le <strong>milieu</strong> du segment\n$[AA']$. On dit aussi que $A'$ est l'<strong>image</strong> de $A$ par la symétrie de centre $O$.</p>\n</blockquote>\n<p>Cas particulier : le symétrique de $O$ par rapport à $O$ est $O$ lui-même. On dit\nque $O$ est <strong>invariant</strong>.</p>\n<p><strong>Méthode (pas à pas) — construire $A'$.</strong>\n1. Trace la demi-droite $[AO)$ et prolonge-la au-delà de $O$.\n2. Mesure la longueur $OA$ (au compas ou à la règle).\n3. Reporte cette longueur à partir de $O$, de l'autre côté de $O$.\n4. Le point obtenu est $A'$. Vérifie : $A$, $O$, $A'$ alignés et $OA = OA'$.</p>\n<p><strong>Exemple.</strong> Si $OA = 4{,}5$ cm, alors $OA' = 4{,}5$ cm et $AA' = 9$ cm, car\n$AA' = OA + OA' = 4{,}5 + 4{,}5 = 9$ cm.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Beaucoup d'élèves placent $A'$ du <strong>même côté</strong> que $A$ par\nrapport à $O$. Le point $A'$ doit toujours être de l'<strong>autre côté</strong> de $O$ : sinon\n$O$ n'est pas le milieu de $[AA']$.</p>\n<h3 id=\"32-images-des-figures-usuelles\">3.2 Images des figures usuelles</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Par une symétrie centrale :\n- l'image d'un <strong>segment</strong> est un segment <strong>de même longueur</strong> ;\n- l'image d'une <strong>droite</strong> est une droite <strong>parallèle</strong> à la première ;\n- l'image d'un <strong>cercle</strong> de centre $I$ et de rayon $r$ est le cercle de centre\n  $I'$ (image de $I$) et de <strong>même rayon</strong> $r$ ;\n- l'image d'un <strong>angle</strong> est un angle <strong>de même mesure</strong>.</p>\n</blockquote>\n<p><strong>Méthode — image d'un segment $[AB]$ par rapport à $O$.</strong> On construit seulement\nles symétriques $A'$ et $B'$ des extrémités, puis on trace $[A'B']$. Inutile de\nconstruire d'autres points.</p>\n<p><strong>Méthode — image d'une droite $(d)$.</strong> On choisit deux points $M$ et $N$ de $(d)$,\non construit $M'$ et $N'$, puis on trace la droite $(M'N')$. Elle est parallèle à $(d)$.</p>\n<h3 id=\"33-proprietes-conservees\">3.3 Propriétés conservées</h3>\n<blockquote>\n<p><strong>Propriété.</strong> La symétrie centrale <strong>conserve</strong> :\n- les <strong>longueurs</strong> (donc les périmètres) ;\n- les <strong>mesures d'angles</strong> ;\n- l'<strong>alignement</strong> des points ;\n- les <strong>milieux</strong> (l'image du milieu d'un segment est le milieu du segment image) ;\n- le <strong>parallélisme</strong> et la <strong>perpendicularité</strong> ;\n- les <strong>aires</strong>.</p>\n</blockquote>\n<p>Autrement dit : une figure et son image par symétrie centrale sont\n<strong>superposables</strong>. Si un triangle a une aire de $12$ cm², son image a aussi une\naire de $12$ cm².</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire que la symétrie centrale « agrandit » ou\n« retourne comme un miroir ». Non : elle ne change <strong>ni</strong> les dimensions <strong>ni</strong> la\nforme. Elle fait seulement tourner la figure d'un demi-tour.</p>\n<h3 id=\"34-centre-de-symetrie-dune-figure\">3.4 Centre de symétrie d'une figure</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un point $O$ est un <strong>centre de symétrie</strong> d'une figure $F$ si\nl'image de $F$ par la symétrie de centre $O$ est $F$ elle-même.</p>\n</blockquote>\n<p>Exemples de figures possédant un centre de symétrie :\n- un <strong>segment</strong> : son milieu ;\n- un <strong>cercle</strong> : son centre ;\n- un <strong>parallélogramme</strong> : le point d'intersection de ses diagonales ;\n- un <strong>rectangle</strong>, un <strong>losange</strong>, un <strong>carré</strong> : le point d'intersection des diagonales.</p>\n<p>Un <strong>triangle</strong> n'a jamais de centre de symétrie.</p>\n<h3 id=\"35-symetrie-centrale-et-symetrie-axiale\">3.5 Symétrie centrale et symétrie axiale</h3>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>Symétrie <strong>axiale</strong> (M04)</th>\n<th>Symétrie <strong>centrale</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Élément de base</td>\n<td>une droite (l'axe)</td>\n<td>un point (le centre)</td>\n</tr>\n<tr>\n<td>Geste</td>\n<td>pliage / miroir</td>\n<td>demi-tour ($180°$)</td>\n</tr>\n<tr>\n<td>Image d'une droite</td>\n<td>une droite, en général <strong>non</strong> parallèle</td>\n<td>une droite <strong>parallèle</strong></td>\n</tr>\n<tr>\n<td>Points invariants</td>\n<td>tous les points de l'axe</td>\n<td>le centre $O$ seulement</td>\n</tr>\n<tr>\n<td>Sens de lecture d'une figure</td>\n<td>inversé</td>\n<td>conservé</td>\n</tr>\n</tbody>\n</table>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> $O$ est le milieu de $[AA']$ et $B'$ est le symétrique de $B$ par\nrapport à $O$. On sait que $AB = 5{,}2$ cm et $\\widehat{ABO} = 47°$.\nDonne $A'B'$ et $\\widehat{A'B'O}$.</p>\n<p><em>Solution.</em> La symétrie de centre $O$ envoie $A$ sur $A'$ et $B$ sur $B'$. Elle\nconserve les longueurs, donc $A'B' = AB = 5{,}2$ cm. Elle conserve les angles, donc\n$\\widehat{A'B'O} = \\widehat{ABO} = 47°$.</p>\n<p><strong>Exemple 2.</strong> $ABC$ est un triangle tel que $AB = 6$ cm, $BC = 7$ cm et $AC = 5$ cm.\n$O$ est le milieu de $[BC]$. On note $A'$ le symétrique de $A$ par rapport à $O$.\nCalcule le périmètre du triangle $A'BC$.</p>\n<p><em>Solution.</em> Par la symétrie de centre $O$ : $A \\mapsto A'$, $B \\mapsto C$ (car $O$ est\nle milieu de $[BC]$) et $C \\mapsto B$. Donc $A'C = AB = 6$ cm et $A'B = AC = 5$ cm.\nLe périmètre cherché est\n$$A'B + BC + CA' = 5 + 7 + 6 = 18 \\text{ cm}.$$</p>\n<p><strong>Exemple 3.</strong> Un panneau publicitaire rectangulaire de Casablanca mesure\n$120$ cm sur $80$ cm. On le fait tourner d'un demi-tour autour du point\nd'intersection de ses diagonales. Que devient le panneau ?</p>\n<p><em>Solution.</em> Le point d'intersection des diagonales est le centre de symétrie du\nrectangle. Le panneau vient donc exactement se replacer sur lui-même : son aire\nreste $120 \\times 80 = 9\\,600$ cm² et son périmètre reste\n$2 \\times (120 + 80) = 400$ cm.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>$A'$ est le symétrique de $A$ par rapport à $O$ signifie : <strong>$O$ est le milieu de $[AA']$</strong>.</li>\n<li>Le centre $O$ est le seul point qui ne bouge pas.</li>\n<li>La symétrie centrale conserve longueurs, angles, alignement, milieux,\n  parallélisme, perpendicularité et aires.</li>\n<li>L'image d'une droite est une droite <strong>parallèle</strong> à celle de départ.</li>\n<li>Pour construire l'image d'une figure, il suffit de construire l'image de ses\n  <strong>points clés</strong> (extrémités, sommets, centre).</li>\n<li>Segment, cercle, parallélogramme, rectangle, losange, carré ont un centre de\n  symétrie ; le triangle n'en a pas.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Cherche dans les motifs du zellige marocain les figures qui possèdent un centre\n  de symétrie et celles qui n'ont qu'un axe.</li>\n<li>Un logo de banque ou de club sportif possède-t-il un centre de symétrie ?\n  Vérifie en le faisant tourner d'un demi-tour.</li>\n<li>Que se passe-t-il si on applique <strong>deux fois de suite</strong> la même symétrie\n  centrale à un point ? On revient au point de départ.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Curricula.aspx\">Ministère de l'Éducation nationale du Maroc — programmes et curricula</a></li>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"definition-cle\">Définition clé</h2>\n<p>$A'$ est le <strong>symétrique</strong> de $A$ par rapport à $O$ $\\iff$ $O$ est le <strong>milieu</strong> de\n$[AA']$, c'est-à-dire $A$, $O$, $A'$ alignés et $OA = OA'$.</p>\n<p>Le centre $O$ est le <strong>seul point invariant</strong>. Une symétrie centrale est un\n<strong>demi-tour</strong> de $180°$ autour de $O$.</p>\n<h2 id=\"images-des-figures\">Images des figures</h2>\n<table>\n<thead>\n<tr>\n<th>Figure de départ</th>\n<th>Image par la symétrie de centre $O$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Point $A$</td>\n<td>Point $A'$ avec $O$ milieu de $[AA']$</td>\n</tr>\n<tr>\n<td>Segment $[AB]$</td>\n<td>Segment $[A'B']$ avec $A'B' = AB$</td>\n</tr>\n<tr>\n<td>Droite $(d)$</td>\n<td>Droite $(d')$ <strong>parallèle</strong> à $(d)$</td>\n</tr>\n<tr>\n<td>Demi-droite $[AB)$</td>\n<td>Demi-droite $[A'B')$ de sens opposé</td>\n</tr>\n<tr>\n<td>Cercle de centre $I$, rayon $r$</td>\n<td>Cercle de centre $I'$, <strong>même rayon</strong> $r$</td>\n</tr>\n<tr>\n<td>Angle de mesure $\\alpha$</td>\n<td>Angle de <strong>même mesure</strong> $\\alpha$</td>\n</tr>\n<tr>\n<td>Triangle $ABC$</td>\n<td>Triangle $A'B'C'$ superposable</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"ce-que-la-symetrie-centrale-conserve\">Ce que la symétrie centrale conserve</h2>\n<ul>\n<li>les longueurs et les périmètres ;</li>\n<li>les mesures d'angles ;</li>\n<li>l'alignement des points ;</li>\n<li>les milieux ;</li>\n<li>le parallélisme et la perpendicularité ;</li>\n<li>les aires.</li>\n</ul>\n<p>Deux figures symétriques par rapport à un point sont <strong>superposables</strong>.</p>\n<h2 id=\"centre-de-symetrie-dune-figure\">Centre de symétrie d'une figure</h2>\n<p>$O$ est centre de symétrie de la figure $F$ si l'image de $F$ par la symétrie de\ncentre $O$ est $F$ elle-même.</p>\n<table>\n<thead>\n<tr>\n<th>Figure</th>\n<th>Centre de symétrie</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Segment</td>\n<td>son milieu</td>\n</tr>\n<tr>\n<td>Cercle</td>\n<td>son centre</td>\n</tr>\n<tr>\n<td>Parallélogramme, rectangle, losange, carré</td>\n<td>intersection des diagonales</td>\n</tr>\n<tr>\n<td>Triangle</td>\n<td><strong>aucun</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"axiale-ou-centrale\">Axiale ou centrale ?</h2>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>Axiale</th>\n<th>Centrale</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Élément</td>\n<td>droite (axe)</td>\n<td>point (centre)</td>\n</tr>\n<tr>\n<td>Geste</td>\n<td>pliage / miroir</td>\n<td>demi-tour</td>\n</tr>\n<tr>\n<td>Image d'une droite</td>\n<td>droite en général non parallèle</td>\n<td>droite <strong>parallèle</strong></td>\n</tr>\n<tr>\n<td>Invariants</td>\n<td>tous les points de l'axe</td>\n<td>le centre seulement</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Placer $A'$ du <strong>même côté</strong> de $O$ que $A$ : $A'$ est toujours de l'autre côté.</li>\n<li>Confondre $OA' = OA$ avec $AA' = OA$ : en réalité $AA' = 2 \\times OA$.</li>\n<li>Croire qu'un triangle a un centre de symétrie : c'est faux, jamais.</li>\n</ol>\n<h2 id=\"mini-memo-de-construction\">Mini-mémo de construction</h2>\n<ol>\n<li>Repérer le centre $O$ et les points clés.</li>\n<li>Pour chaque point clé $M$ : tracer $[MO)$, prolonger, reporter $OM$ au compas.</li>\n<li>Relier les images dans le <strong>même ordre</strong> qu'au départ.</li>\n<li>Contrôler : $[MM']$ passe par $O$ et les longueurs sont conservées.</li>\n</ol>\n<p>Si $OA = d$ alors $AA' = 2d$ ; si $AA' = L$ alors $OA = \\dfrac{L}{2}$.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Vrai ou faux",
   "diff": "facile",
   "q": "<p>Réponds par vrai ou faux et justifie en une phrase.\n1. Le symétrique du point $O$ par rapport à $O$ est $O$.\n2. Si $A'$ est le symétrique de $A$ par rapport à $O$, alors $AA' = OA$.\n3. L'image d'une droite par une symétrie centrale est une droite parallèle à la première.\n4. Un triangle possède toujours un centre de symétrie.\n5. La symétrie centrale conserve les aires.</p>",
   "modele": "<ol>\n<li><strong>Vrai.</strong> Le centre est le seul point invariant : $O$ est son propre milieu de $[OO]$.</li>\n<li><strong>Faux.</strong> $O$ est le milieu de $[AA']$, donc $AA' = OA + OA' = 2 \\times OA$.</li>\n<li><strong>Vrai.</strong> C'est une propriété de la symétrie centrale.</li>\n<li><strong>Faux.</strong> Un triangle n'a jamais de centre de symétrie.</li>\n<li><strong>Vrai.</strong> Une figure et son image sont superposables, donc de même aire.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Construire un symétrique",
   "diff": "facile",
   "q": "<p>Place un point $O$, puis un point $A$ tel que $OA = 3{,}5$ cm.\n1. Construis le point $A'$, symétrique de $A$ par rapport à $O$.\n2. Donne la longueur $AA'$.</p>",
   "modele": "<ol>\n<li>Construction : on trace la demi-droite $[AO)$, on la prolonge au-delà de $O$,\n   puis on reporte au compas $OA' = OA = 3{,}5$ cm de l'autre côté de $O$.</li>\n<li>Comme $O$ est le milieu de $[AA']$ :\n$$AA' = 2 \\times OA = 2 \\times 3{,}5 = 7 \\text{ cm}.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Longueurs",
   "diff": "facile",
   "q": "<p>$O$ est le centre d'une symétrie. Complète.\n1. $OB = 2{,}8$ cm, calcule $BB'$ où $B'$ est le symétrique de $B$.\n2. $CC' = 11$ cm et $C'$ est le symétrique de $C$ par rapport à $O$ ; calcule $OC$.\n3. $OD = 7{,}5$ cm ; calcule $DD'$.</p>",
   "modele": "<ol>\n<li>$BB' = 2 \\times OB = 2 \\times 2{,}8 = 5{,}6$ cm.</li>\n<li>$OC = \\dfrac{CC'}{2} = \\dfrac{11}{2} = 5{,}5$ cm.</li>\n<li>$DD' = 2 \\times OD = 2 \\times 7{,}5 = 15$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Image d'un segment",
   "diff": "facile",
   "q": "<p>Trace un segment $[AB]$ avec $AB = 5$ cm. Place un point $O$ à $3$ cm de $A$, en\ndehors de la droite $(AB)$.\n1. Construis $A'$ et $B'$, symétriques de $A$ et $B$ par rapport à $O$.\n2. Trace $[A'B']$ et donne sa longueur sans mesurer.\n3. Que peut-on dire des droites $(AB)$ et $(A'B')$ ?</p>",
   "modele": "<ol>\n<li>On construit $A'$ sur $[AO)$ prolongée avec $OA' = OA$, et $B'$ sur $[BO)$\n   prolongée avec $OB' = OB$.</li>\n<li>La symétrie centrale conserve les longueurs, donc $A'B' = AB = 5$ cm.</li>\n<li>L'image d'une droite par une symétrie centrale est une droite parallèle :\n   $(A'B') \\parallel (AB)$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Image d'un cercle",
   "diff": "facile",
   "q": "<p>Soit un cercle $(C)$ de centre $I$ et de rayon $2{,}5$ cm, et un point $O$ tel que\n$OI = 4$ cm.\n1. Construis le point $I'$, symétrique de $I$ par rapport à $O$.\n2. Trace le cercle $(C')$, image de $(C)$ par la symétrie de centre $O$. Précise\n   son centre et son rayon.\n3. Calcule $II'$.</p>",
   "modele": "<ol>\n<li>$I'$ est sur $[IO)$ prolongée, avec $OI' = OI = 4$ cm.</li>\n<li>$(C')$ est le cercle de centre $I'$ et de rayon $2{,}5$ cm : la symétrie centrale\n   conserve le rayon.</li>\n<li>$II' = 2 \\times OI = 2 \\times 4 = 8$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Centres de symétrie",
   "diff": "facile",
   "q": "<p>Pour chaque figure, indique si elle possède un centre de symétrie et, si oui, où\nil se trouve : un carré, un triangle équilatéral, un cercle, un segment, un\nlosange, un rectangle.</p>",
   "modele": "<table>\n<thead>\n<tr>\n<th>Figure</th>\n<th>Centre de symétrie</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Carré</td>\n<td>oui : intersection des diagonales</td>\n</tr>\n<tr>\n<td>Triangle équilatéral</td>\n<td>non</td>\n</tr>\n<tr>\n<td>Cercle</td>\n<td>oui : son centre</td>\n</tr>\n<tr>\n<td>Segment</td>\n<td>oui : son milieu</td>\n</tr>\n<tr>\n<td>Losange</td>\n<td>oui : intersection des diagonales</td>\n</tr>\n<tr>\n<td>Rectangle</td>\n<td>oui : intersection des diagonales</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Triangle image",
   "diff": "",
   "q": "<p>$ABC$ est un triangle tel que $AB = 4$ cm, $BC = 6$ cm, $AC = 5$ cm et\n$\\widehat{BAC} = 82°$. On note $A'B'C'$ son image par la symétrie de centre $O$,\npoint extérieur au triangle.\n1. Donne, sans mesurer, les longueurs $A'B'$, $B'C'$, $A'C'$.\n2. Donne la mesure de l'angle $\\widehat{B'A'C'}$.\n3. Calcule le périmètre du triangle $A'B'C'$.</p>",
   "modele": "<ol>\n<li>Les longueurs sont conservées : $A'B' = 4$ cm, $B'C' = 6$ cm, $A'C' = 5$ cm.</li>\n<li>Les angles sont conservés : $\\widehat{B'A'C'} = \\widehat{BAC} = 82°$.</li>\n<li>Périmètre : $4 + 6 + 5 = 15$ cm (le même que celui de $ABC$).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Le milieu conservé",
   "diff": "",
   "q": "<p>$[AB]$ est un segment de milieu $M$, avec $AB = 9$ cm. On construit les images\n$A'$, $B'$, $M'$ par la symétrie de centre $O$.\n1. Quelle est la nature du point $M'$ pour le segment $[A'B']$ ?\n2. Calcule $A'M'$.</p>",
   "modele": "<ol>\n<li>La symétrie centrale conserve les milieux : $M'$ est le <strong>milieu</strong> de $[A'B']$.</li>\n<li>$A'B' = AB = 9$ cm, donc $A'M' = \\dfrac{9}{2} = 4{,}5$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Symétrique par rapport à un sommet",
   "diff": "",
   "q": "<p>$ABC$ est un triangle avec $AB = 5{,}5$ cm, $AC = 4$ cm et $BC = 7$ cm.\nOn appelle $D$ le symétrique de $A$ par rapport à $B$.\n1. Que peut-on dire du point $B$ pour le segment $[AD]$ ?\n2. Calcule $AD$.\n3. Calcule le périmètre du triangle $ACD$ sachant que $CD = 8{,}2$ cm.</p>",
   "modele": "<ol>\n<li>Par définition du symétrique de $A$ par rapport à $B$, le point $B$ est le\n   <strong>milieu</strong> du segment $[AD]$.</li>\n<li>$AD = 2 \\times AB = 2 \\times 5{,}5 = 11$ cm.</li>\n<li>Périmètre de $ACD$ :\n$$AC + CD + DA = 4 + 8{,}2 + 11 = 23{,}2 \\text{ cm}.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Aires conservées",
   "diff": "",
   "q": "<p>Un triangle $EFG$ a une base $EF = 8$ cm et une hauteur relative à $[EF]$ égale à\n$5$ cm.\n1. Calcule l'aire du triangle $EFG$.\n2. On construit l'image $E'F'G'$ par une symétrie centrale. Donne son aire et\n   justifie.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = \\dfrac{8 \\times 5}{2} = \\dfrac{40}{2} = 20$ cm².</li>\n<li>L'aire de $E'F'G'$ est aussi $20$ cm², car la symétrie centrale conserve les\n   aires (les deux triangles sont superposables).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Distinguer les deux symétries",
   "diff": "",
   "q": "<p>Pour chacune des affirmations, dis s'il s'agit de la symétrie axiale, de la\nsymétrie centrale, ou des deux.\n1. Elle conserve les longueurs.\n2. L'image d'une droite est toujours parallèle à cette droite.\n3. Il n'y a qu'un seul point invariant.\n4. Tous les points d'une droite restent fixes.\n5. Elle conserve les mesures d'angles.</p>",
   "modele": "<ol>\n<li>Les <strong>deux</strong>.</li>\n<li>Symétrie <strong>centrale</strong> seulement.</li>\n<li>Symétrie <strong>centrale</strong> seulement (le centre $O$).</li>\n<li>Symétrie <strong>axiale</strong> seulement (les points de l'axe).</li>\n<li>Les <strong>deux</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Programme de construction",
   "diff": "",
   "q": "<p>Écris un programme de construction (liste d'instructions numérotées) permettant à\nun camarade de construire l'image d'un quadrilatère $MNPQ$ par la symétrie de\ncentre $O$, où $O$ est le milieu de $[MP]$. Précise en particulier ce que devient\nle point $M$ et ce que devient le point $P$.</p>",
   "modele": "<p>Programme de construction :\n1. Tracer le quadrilatère $MNPQ$.\n2. Placer $O$, milieu du segment $[MP]$.\n3. Le symétrique de $M$ par rapport à $O$ est <strong>$P$</strong> (car $O$ est le milieu de $[MP]$).\n4. Le symétrique de $P$ par rapport à $O$ est <strong>$M$</strong>.\n5. Tracer $[NO)$, la prolonger, reporter $ON' = ON$ : on obtient $N'$.\n6. Tracer $[QO)$, la prolonger, reporter $OQ' = OQ$ : on obtient $Q'$.\n7. Tracer le quadrilatère $PN'MQ'$ : c'est l'image de $MNPQ$.\n8. Contrôle : $N'Q' = NQ$ et $(MN) \\parallel (PN')$.</p>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le carrelage du hammam",
   "diff": "difficile",
   "q": "<p>Le sol d'une salle de hammam à Fès est décoré de carreaux carrés de $20$ cm de\ncôté. Le motif d'un carreau est un quart de disque de rayon $20$ cm.\n1. Le carreau possède-t-il un centre de symétrie ? Justifie.\n2. On assemble quatre carreaux pour former un grand carré de $40$ cm de côté, en\n   plaçant les quarts de disque de façon à dessiner un disque complet au centre.\n   Ce grand carré possède-t-il un centre de symétrie ? Où se trouve-t-il ?\n3. Calcule l'aire du grand carré.</p>",
   "modele": "<ol>\n<li><strong>Non.</strong> Un quart de disque n'a pas de centre de symétrie : le demi-tour autour\n   de n'importe quel point envoie l'arc « du mauvais côté ».</li>\n<li><strong>Oui.</strong> Le grand carré possède un centre de symétrie : c'est le point commun\n   aux quatre carreaux, autrement dit le <strong>centre du disque</strong> formé au milieu, qui\n   est aussi l'intersection des diagonales du grand carré.</li>\n<li>$\\mathcal{A} = 40 \\times 40 = 1\\,600$ cm².</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Démontrer un alignement",
   "diff": "difficile",
   "q": "<p>$O$ est un point. $A$, $B$, $C$ sont trois points alignés dans cet ordre, avec\n$AB = 3$ cm et $BC = 4$ cm. On note $A'$, $B'$, $C'$ leurs symétriques par rapport\nà $O$.\n1. Explique pourquoi $A'$, $B'$, $C'$ sont alignés.\n2. Donne $A'B'$, $B'C'$ et $A'C'$.\n3. Que peut-on dire des droites $(AC)$ et $(A'C')$ ?</p>",
   "modele": "<ol>\n<li>La symétrie centrale conserve l'<strong>alignement</strong> : puisque $A$, $B$, $C$ sont\n   alignés, leurs images $A'$, $B'$, $C'$ le sont aussi.</li>\n<li>Les longueurs sont conservées : $A'B' = 3$ cm, $B'C' = 4$ cm et\n   $A'C' = AC = 3 + 4 = 7$ cm.</li>\n<li>L'image d'une droite est une droite parallèle : $(A'C') \\parallel (AC)$.</li>\n</ol>",
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
   "q": "<p>Un terrain de handball rectangulaire d'un collège d'Agadir mesure $40$ m de long\net $20$ m de large. On note $O$ le point d'intersection de ses diagonales.\n1. Montre que $O$ est un centre de symétrie du terrain.\n2. Un but est placé au milieu d'un petit côté. Où se trouve l'image de ce but par\n   la symétrie de centre $O$ ?\n3. Calcule l'aire du terrain, puis l'aire de son image par la symétrie de centre $O$.\n4. Un joueur se trouve à $6$ m de $O$. À quelle distance de $O$ se trouve son image ?</p>",
   "modele": "<ol>\n<li>Dans un rectangle, les diagonales se coupent en leur milieu. Le point $O$ est\n   donc le milieu de chaque diagonale : le symétrique de chaque sommet par rapport\n   à $O$ est le sommet opposé. Le rectangle est donc son propre image : $O$ est un\n   centre de symétrie.</li>\n<li>L'image du milieu d'un petit côté est le <strong>milieu du petit côté opposé</strong> : c'est\n   la position de l'autre but.</li>\n<li>$\\mathcal{A} = 40 \\times 20 = 800$ m². L'image a la même aire : $800$ m².</li>\n<li>À $6$ m de $O$ également, car $OA' = OA$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Prix et symétrie du logo",
   "diff": "difficile",
   "q": "<p>Un artisan de Marrakech vend des plateaux gravés d'un logo. Il facture $45$ DH\npar plateau et il en vend $12$ le samedi.\n1. Calcule sa recette du samedi.\n2. Le logo est formé de deux triangles identiques, symétriques par rapport au\n   centre $O$ du plateau. Chaque triangle a une aire de $18$ cm². Quelle est l'aire\n   totale gravée ? Justifie par une propriété de la symétrie centrale.</p>",
   "modele": "<ol>\n<li>Recette : $45 \\times 12 = 540$ DH.</li>\n<li>Les deux triangles sont symétriques par rapport à $O$, donc superposables :\n   ils ont la même aire, $18$ cm². L'aire totale gravée vaut\n$$18 + 18 = 36 \\text{ cm}^2.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Chasse aux erreurs",
   "diff": "difficile",
   "q": "<p>Karim affirme : « Pour construire le symétrique de $A$ par rapport à $O$, je\nmesure $OA = 4$ cm, puis je place $A'$ sur la demi-droite $[OA)$ à $4$ cm de $A$.\nDonc $OA' = 8$ cm. »\n1. Repère l'erreur de Karim.\n2. Corrige son programme de construction.\n3. Quelle est la vraie valeur de $OA'$ et celle de $AA'$ ?</p>",
   "modele": "<ol>\n<li>Erreur : Karim place $A'$ <strong>du même côté</strong> que $A$ (sur $[OA)$) au lieu de\n   l'autre côté de $O$. Il confond aussi $OA'$ et $AA'$.</li>\n<li>Programme corrigé : tracer la demi-droite $[AO)$, la <strong>prolonger au-delà de $O$</strong>,\n   puis reporter $OA' = OA$ sur ce prolongement.</li>\n<li>On obtient $OA' = OA = 4$ cm et $AA' = 2 \\times 4 = 8$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Deux symétries de suite",
   "diff": "difficile",
   "q": "<p>On considère un point $A$ et deux points $O$ et $O'$ tels que $OO' = 5$ cm.\nOn note $A_1$ le symétrique de $A$ par rapport à $O$, puis $A_2$ le symétrique de\n$A_1$ par rapport à $O$.\n1. Où se trouve le point $A_2$ ? Justifie.\n2. Si maintenant $A_3$ est le symétrique de $A_1$ par rapport à $O'$, la longueur\n   $AA_3$ dépend-elle de la position de $A$ ? Teste avec $OA = 3$ cm puis\n   $OA = 6$ cm, les points $A$, $O$, $O'$ étant alignés dans cet ordre.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Connaître les définitions et propriétés</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Représenter : construire un symétrique</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer des longueurs</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Représenter : image d'un segment</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Représenter : image d'un cercle</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Reconnaître un centre de symétrie</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Utiliser les propriétés conservées</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Raisonner : conservation du milieu</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Calculer, représenter</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Calculer une aire, justifier</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Comparer axiale et centrale</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Communiquer : programme de construction</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser un motif, calculer</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Raisonner : alignement et parallélisme</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Résoudre un problème concret</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Modéliser, calculer une recette et une aire</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Analyser une erreur</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Chercher : composer deux symétries</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$A_2 = A$. En effet $O$ est le milieu de $[AA_1]$ ; le symétrique de $A_1$ par\n   rapport à $O$ est donc le point $A$ lui-même. Appliquer deux fois la même\n   symétrie centrale ramène au point de départ.</li>\n<li>Plaçons les points sur une droite graduée avec $O$ à l'abscisse $0$ et $O'$ à\n   l'abscisse $5$ ; comme $A$, $O$, $O'$ sont alignés dans cet ordre, $A$ a pour\n   abscisse $-d$ avec $d = OA$.\n   - $A_1$ a pour abscisse $+d$ (symétrique par rapport à $O$).\n   - $A_3$ a pour abscisse $2 \\times 5 - d = 10 - d$ (symétrique par rapport à $O'$).\n   - Donc $AA_3 = (10 - d) - (-d) = 10$ cm.</li>\n</ol>\n<p>Test avec $OA = 3$ cm : $A = -3$, $A_1 = 3$, $A_3 = 7$, d'où $AA_3 = 10$ cm.\n   Test avec $OA = 6$ cm : $A = -6$, $A_1 = 6$, $A_3 = 4$, d'où $AA_3 = 10$ cm.</p>\n<p>Conclusion : $AA_3$ <strong>ne dépend pas</strong> de la position de $A$ ; on trouve toujours\n   $AA_3 = 2 \\times OO' = 10$ cm.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M14",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Calculatrice autorisée · Matériel de géométrie exigé</p>\n<h2 id=\"exercice-1-6-points-constructions\">Exercice 1 (6 points) — Constructions</h2>\n<p>Sur ta copie, place un point $O$. Place ensuite un point $A$ tel que $OA = 4$ cm\net un point $B$ tel que $OB = 3$ cm, les points $A$, $O$, $B$ n'étant pas alignés.</p>\n<ol>\n<li>Construis $A'$, symétrique de $A$ par rapport à $O$. Donne $OA'$ et $AA'$.</li>\n<li>Construis $B'$, symétrique de $B$ par rapport à $O$. Donne $BB'$.</li>\n<li>Trace $[AB]$ et $[A'B']$. Que peut-on dire des droites $(AB)$ et $(A'B')$ ?</li>\n<li>Trace le cercle de centre $A$ et de rayon $2$ cm. Décris précisément son image\n   par la symétrie de centre $O$ (centre et rayon).</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Construction correcte de $A'$ ($1$ pt) ; $OA' = 4$ cm et $AA' = 8$ cm ($1$ pt)</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Construction de $B'$ ($0{,}5$ pt) ; $BB' = 6$ cm ($0{,}5$ pt)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Tracés ($1$ pt) ; droites parallèles avec justification ($1$ pt)</td>\n<td>2</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Cercle de centre $A'$ et de rayon $2$ cm</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-proprietes-conservees\">Exercice 2 (5 points) — Propriétés conservées</h2>\n<p>$ABC$ est un triangle tel que $AB = 6$ cm, $BC = 8$ cm, $AC = 5$ cm et\n$\\widehat{ABC} = 38°$. On note $A'B'C'$ son image par la symétrie de centre $O$.</p>\n<ol>\n<li>Donne les longueurs $A'B'$, $B'C'$ et $A'C'$ en justifiant.</li>\n<li>Donne la mesure de l'angle $\\widehat{A'B'C'}$.</li>\n<li>Calcule le périmètre du triangle $A'B'C'$.</li>\n<li>Le point $M$ est le milieu de $[BC]$ et $M'$ est son image. Que représente $M'$\n   pour le segment $[B'C']$ ? Calcule $B'M'$.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Les trois longueurs ($1{,}5$ pt) ; « conservation des longueurs » ($0{,}5$ pt)</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$38°$ avec justification</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Périmètre $= 19$ cm</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$M'$ milieu de $[B'C']$ ($0{,}5$ pt) ; $B'M' = 4$ cm ($0{,}5$ pt)</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-probleme-la-place-de-casablanca\">Exercice 3 (5 points) — Problème : la place de Casablanca</h2>\n<p>Une place rectangulaire de Casablanca mesure $50$ m de long et $30$ m de large. On\nnote $O$ le point d'intersection de ses diagonales. Quatre bancs identiques sont\ndisposés aux quatre sommets.</p>\n<ol>\n<li>Justifie que $O$ est un centre de symétrie de la place.</li>\n<li>Calcule l'aire de la place.</li>\n<li>La mairie repeint les bancs à $75$ DH par banc. Calcule le coût total.</li>\n<li>Une fontaine se trouve à $9$ m de $O$. À quelle distance de $O$ se trouve son\n   image par la symétrie de centre $O$ ? Cette image est-elle sur la place ?\n   Justifie brièvement.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Diagonales se coupant en leur milieu, sommets échangés deux à deux</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$1\\,500$ m²</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$300$ DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$9$ m ($1$ pt) ; oui, car la place est globalement invariante ($0{,}5$ pt)</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-4-points-raisonner-et-comparer\">Exercice 4 (4 points) — Raisonner et comparer</h2>\n<ol>\n<li>Recopie et complète : « $A'$ est le symétrique de $A$ par rapport à $O$ signifie\n   que $O$ est le … du segment … . »</li>\n<li>Cite deux propriétés conservées par la symétrie centrale.</li>\n<li>Donne une différence entre la symétrie axiale et la symétrie centrale.</li>\n<li>Amine dit : « Si $AA' = 10$ cm et $O$ est le centre de symétrie, alors\n   $OA = 10$ cm. » A-t-il raison ? Corrige si nécessaire.</li>\n</ol>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>« milieu » et « $[AA']$ »</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Deux propriétés correctes ($0{,}5$ pt chacune)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Une différence pertinente</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Erreur repérée et $OA = 5$ cm</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>On trace $[AO)$, on prolonge au-delà de $O$ et on reporte $4$ cm : $OA' = 4$ cm\n   et $AA' = 2 \\times 4 = 8$ cm.</li>\n<li>Même méthode : $OB' = 3$ cm et $BB' = 2 \\times 3 = 6$ cm.</li>\n<li>$(A'B')$ est l'image de $(AB)$ par la symétrie de centre $O$ : l'image d'une\n   droite est une droite parallèle, donc $(AB) \\parallel (A'B')$. De plus\n   $A'B' = AB$.</li>\n<li>L'image est le cercle de <strong>centre $A'$</strong> et de <strong>rayon $2$ cm</strong> : la symétrie\n   centrale conserve le rayon.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>La symétrie centrale conserve les longueurs, donc $A'B' = 6$ cm,\n   $B'C' = 8$ cm et $A'C' = 5$ cm.</li>\n<li>Elle conserve les mesures d'angles, donc $\\widehat{A'B'C'} = 38°$.</li>\n<li>Périmètre : $6 + 8 + 5 = 19$ cm.</li>\n<li>La symétrie centrale conserve les milieux, donc $M'$ est le <strong>milieu</strong> de\n   $[B'C']$. Ainsi\n$$B'M' = \\dfrac{B'C'}{2} = \\dfrac{8}{2} = 4 \\text{ cm}.$$</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>Dans un rectangle, les diagonales se coupent en leur milieu : $O$ est le milieu\n   de chaque diagonale. Le symétrique de chaque sommet par rapport à $O$ est donc\n   le sommet opposé, et la place est son propre image : $O$ est un centre de symétrie.</li>\n<li>$\\mathcal{A} = 50 \\times 30 = 1\\,500$ m².</li>\n<li>Coût : $75 \\times 4 = 300$ DH.</li>\n<li>$OA' = OA = 9$ m : l'image est à $9$ m de $O$. Elle se trouve bien sur la place,\n   car la place tout entière est invariante par la symétrie de centre $O$.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>« $O$ est le <strong>milieu</strong> du segment <strong>$[AA']$</strong>. »</li>\n<li>Par exemple : les longueurs et les mesures d'angles (on accepte aussi\n   alignement, milieux, parallélisme, aires).</li>\n<li>Par exemple : la symétrie axiale s'appuie sur une droite et laisse fixes tous\n   les points de l'axe, tandis que la symétrie centrale s'appuie sur un point et\n   ne laisse fixe que ce point. Autre réponse acceptée : l'image d'une droite par\n   une symétrie centrale est toujours parallèle à cette droite.</li>\n<li>Non, Amine se trompe. Comme $O$ est le milieu de $[AA']$ :\n$$OA = \\dfrac{AA'}{2} = \\dfrac{10}{2} = 5 \\text{ cm}.$$</li>\n</ol>"
 }
},

{
 "id": "m15",
 "domaine": "maths",
 "unite": 15,
 "theme": "Géométrie",
 "tag": "M15",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M15 — Parallélogramme et quadrilatères particuliers",
 "duree": "8 h",
 "semestre": "2",
 "objectifs": [
  "Reconnaître un parallélogramme et citer ses propriétés.",
  "Démontrer qu'un quadrilatère est un parallélogramme.",
  "Distinguer rectangle, losange et carré.",
  "Démontrer qu'un parallélogramme est un rectangle, un losange ou un carré.",
  "Calculer périmètres et aires."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Un menuisier de Salé assemble un portail avec deux barres de $180$ cm et deux\nbarres de $90$ cm, fixées par des boulons qui tournent. Le portail s'aplatit ou se\nredresse : sa forme change, mais les côtés opposés restent toujours <strong>de même\nlongueur</strong> et <strong>parallèles</strong>. Quand le menuisier vérifie que les deux\n<strong>diagonales</strong> ont la même longueur, il sait que son portail est parfaitement\n<strong>rectangle</strong>.</p>\n<p><strong>Question.</strong> Pourquoi cette astuce fonctionne-t-elle ? Comment reconnaître à coup\nsûr un parallélogramme, un rectangle, un losange, un carré ?</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Trace deux droites sécantes en $O$. Place $A$ et $C$ sur la\npremière avec $O$ milieu de $[AC]$ et $OA = 3$ cm ; place $B$ et $D$ sur la\nseconde avec $O$ milieu de $[BD]$ et $OB = 2$ cm. Trace $ABCD$.</p>\n<p><strong>Observation.</strong> On mesure $AB = DC$ et $AD = BC$, et on constate que\n$(AB) \\parallel (DC)$ et $(AD) \\parallel (BC)$.</p>\n<p><strong>Conclusion.</strong> Quand les diagonales se coupent en leur milieu, on obtient un\n<strong>parallélogramme</strong>, dont $O$ est le <strong>centre de symétrie</strong> (leçon M14).</p>\n<p><strong>Activité 2.</strong> Déplace $B$ et $D$ pour que $OB = OA = 3$ cm : les diagonales\ndeviennent <strong>de même longueur</strong> et on obtient un <strong>rectangle</strong>. Reviens à la\nfigure de départ et rends les deux droites <strong>perpendiculaires</strong> : on obtient un\n<strong>losange</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-le-parallelogramme\">3.1 Le parallélogramme</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>parallélogramme</strong> est un quadrilatère dont les côtés opposés\nsont parallèles deux à deux.</p>\n</blockquote>\n<p>Ainsi $ABCD$ est un parallélogramme lorsque $(AB) \\parallel (DC)$ et\n$(AD) \\parallel (BC)$.</p>\n<pre><code>       A ______________ B\n        /             /\n       /             /\n      /             /\n   D /_____________/ C\n</code></pre>\n<blockquote>\n<p><strong>Propriétés du parallélogramme.</strong> Si $ABCD$ est un parallélogramme, alors :\n1. ses côtés opposés sont <strong>de même longueur</strong> : $AB = DC$ et $AD = BC$ ;\n2. ses <strong>diagonales se coupent en leur milieu</strong> ;\n3. le point d'intersection des diagonales est son <strong>centre de symétrie</strong> ;\n4. ses <strong>angles opposés sont égaux</strong> : $\\widehat{A} = \\widehat{C}$ et\n   $\\widehat{B} = \\widehat{D}$ ;\n5. deux angles <strong>consécutifs</strong> sont <strong>supplémentaires</strong> :\n   $\\widehat{A} + \\widehat{B} = 180°$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Dans un parallélogramme $ABCD$, si $\\widehat{A} = 65°$, alors\n$\\widehat{C} = 65°$ et $\\widehat{B} = \\widehat{D} = 180° - 65° = 115°$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Écrire les sommets dans le mauvais ordre. Dans le\nparallélogramme $ABCD$, les côtés opposés sont $[AB]$ et $[DC]$, pas $[AB]$ et\n$[CD]$ lus « dans le même sens ». Les diagonales sont $[AC]$ et $[BD]$, jamais\n$[AB]$.</p>\n<h3 id=\"32-caracterisations-comment-demontrer-quun-quadrilatere-est-un-parallelogramme\">3.2 Caractérisations : comment démontrer qu'un quadrilatère est un parallélogramme</h3>\n<blockquote>\n<p><strong>Caractérisations.</strong> Un quadrilatère <strong>non croisé</strong> $ABCD$ est un\nparallélogramme si (au choix, une seule suffit) :\n- <strong>(C1)</strong> ses côtés opposés sont parallèles deux à deux ;\n- <strong>(C2)</strong> ses diagonales $[AC]$ et $[BD]$ se coupent en leur <strong>milieu</strong> ;\n- <strong>(C3)</strong> ses côtés opposés sont <strong>de même longueur</strong> deux à deux ;\n- <strong>(C4)</strong> deux côtés opposés sont <strong>à la fois parallèles et de même longueur</strong>\n  (par exemple $(AB) \\parallel (DC)$ et $AB = DC$).</p>\n</blockquote>\n<p><strong>Méthode (pas à pas) — rédiger une démonstration.</strong>\n1. Je repère les <strong>données</strong> (longueurs égales, milieux, parallélisme).\n2. Je choisis la <strong>caractérisation</strong> qui utilise ces données.\n3. Je l'énonce, puis je <strong>conclus</strong>.</p>\n<p><strong>Exemple.</strong> $O$ est le milieu de $[AC]$ et de $[BD]$ : les diagonales se coupent\nen leur milieu, donc (C2) $ABCD$ est un parallélogramme.</p>\n<h3 id=\"33-le-rectangle\">3.3 Le rectangle</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>rectangle</strong> est un quadrilatère qui a <strong>quatre angles droits</strong>.</p>\n<p><strong>Propriétés.</strong> Un rectangle est un parallélogramme particulier : il en possède\ntoutes les propriétés. De plus, ses <strong>diagonales sont de même longueur</strong>, elles\nse coupent en leur milieu, et il a <strong>deux axes de symétrie</strong> (les médiatrices\ndes côtés) et un centre de symétrie.</p>\n<p><strong>Caractérisations du rectangle.</strong> Un parallélogramme est un rectangle si :\n- il a <strong>un angle droit</strong> ; <strong>ou</strong>\n- ses <strong>diagonales ont la même longueur</strong>.</p>\n</blockquote>\n<p>C'est l'astuce du menuisier.</p>\n<h3 id=\"34-le-losange\">3.4 Le losange</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>losange</strong> est un quadrilatère qui a <strong>quatre côtés de même\nlongueur</strong>.</p>\n<p><strong>Propriétés.</strong> Un losange est un parallélogramme particulier. De plus, ses\n<strong>diagonales sont perpendiculaires</strong>, ce sont les <strong>médiatrices</strong> l'une de\nl'autre, elles forment ses <strong>deux axes de symétrie</strong> et sont les\n<strong>bissectrices</strong> de ses angles.</p>\n<p><strong>Caractérisations du losange.</strong> Un parallélogramme est un losange si :\n- il a <strong>deux côtés consécutifs de même longueur</strong> ; <strong>ou</strong>\n- ses <strong>diagonales sont perpendiculaires</strong>.</p>\n</blockquote>\n<h3 id=\"35-le-carre\">3.5 Le carré</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>carré</strong> est un quadrilatère qui a <strong>quatre angles droits et\nquatre côtés de même longueur</strong>.</p>\n</blockquote>\n<p>Un carré est <strong>à la fois</strong> un rectangle et un losange. Ses diagonales sont donc\nde même longueur, perpendiculaires, et se coupent en leur milieu. Il a <strong>quatre\naxes de symétrie</strong> et un centre de symétrie.</p>\n<blockquote>\n<p><strong>Caractérisations du carré.</strong> Un parallélogramme est un carré si ses diagonales\nsont <strong>de même longueur</strong> <strong>et</strong> <strong>perpendiculaires</strong>. On peut aussi dire : un\nrectangle qui a deux côtés consécutifs égaux est un carré ; un losange qui a un\nangle droit est un carré.</p>\n</blockquote>\n<h3 id=\"36-tableau-recapitulatif\">3.6 Tableau récapitulatif</h3>\n<table>\n<thead>\n<tr>\n<th>Propriété</th>\n<th>Parallélogramme</th>\n<th>Rectangle</th>\n<th>Losange</th>\n<th>Carré</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Côtés opposés parallèles</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Côtés opposés égaux</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Quatre côtés égaux</td>\n<td>non</td>\n<td>non</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Quatre angles droits</td>\n<td>non</td>\n<td>oui</td>\n<td>non</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Diagonales se coupant en leur milieu</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Diagonales de même longueur</td>\n<td>non</td>\n<td>oui</td>\n<td>non</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Diagonales perpendiculaires</td>\n<td>non</td>\n<td>non</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Nombre d'axes de symétrie</td>\n<td>$0$</td>\n<td>$2$</td>\n<td>$2$</td>\n<td>$4$</td>\n</tr>\n<tr>\n<td>Centre de symétrie</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"37-arbre-de-classification\">3.7 Arbre de classification</h3>\n<pre><code>                 QUADRILATÈRE\n                      |\n      côtés opposés parallèles deux à deux\n                      |\n              PARALLÉLOGRAMME\n               /            \\\n      un angle droit      deux côtés consécutifs égaux\n      ou diagonales       ou diagonales perpendiculaires\n      de même longueur              |\n             |                      |\n         RECTANGLE               LOSANGE\n             \\                      /\n       deux côtés consécutifs   un angle droit\n             égaux                  /\n               \\                   /\n                \\                 /\n                     CARRÉ\n</code></pre>\n<h3 id=\"38-perimetres-et-aires\">3.8 Périmètres et aires</h3>\n<blockquote>\n<p><strong>Formules.</strong> Pour un parallélogramme de côtés $a$ et $b$, de base $b$ et de\nhauteur $h$ relative à cette base :\n$$P = 2 \\times (a + b) \\qquad \\mathcal{A} = b \\times h$$\nPour un rectangle de longueur $L$ et de largeur $\\ell$ :\n$$P = 2 \\times (L + \\ell) \\qquad \\mathcal{A} = L \\times \\ell$$\nPour un losange de côté $c$ et de diagonales $d_1$ et $d_2$ :\n$$P = 4 \\times c \\qquad \\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$$\nPour un carré de côté $c$ :\n$$P = 4 \\times c \\qquad \\mathcal{A} = c \\times c$$</p>\n</blockquote>\n<p>⚠️ <strong>Erreur fréquente.</strong> Utiliser un côté oblique du parallélogramme comme\nhauteur. La <strong>hauteur</strong> est la distance entre les deux côtés parallèles, mesurée\n<strong>perpendiculairement</strong>. Elle est toujours plus petite que le côté oblique.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> $ABCD$ est un parallélogramme avec $AB = 7$ cm, $BC = 4{,}5$ cm et\n$\\widehat{DAB} = 72°$.</p>\n<p><em>Solution.</em> $P = 2 \\times (7 + 4{,}5) = 23$ cm. Angles opposés égaux :\n$\\widehat{BCD} = 72°$. Angles consécutifs supplémentaires :\n$\\widehat{ABC} = \\widehat{CDA} = 180° - 72° = 108°$.</p>\n<p><strong>Exemple 2.</strong> $MNPQ$ est un quadrilatère tel que $MN = PQ = 6$ cm et\n$MQ = NP = 4$ cm. Démontre que $MNPQ$ est un parallélogramme.</p>\n<p><em>Solution.</em> Les côtés opposés sont égaux deux à deux. Or, si un quadrilatère non\ncroisé a ses côtés opposés de même longueur deux à deux, alors c'est un\nparallélogramme (C3). Donc $MNPQ$ est un parallélogramme.</p>\n<p><strong>Exemple 3.</strong> $EFGH$ est un parallélogramme dont les diagonales mesurent chacune\n$10$ cm et sont perpendiculaires.</p>\n<p><em>Solution.</em> Diagonales de même longueur : c'est un rectangle. Diagonales\nperpendiculaires : c'est un losange. Donc $EFGH$ est un <strong>carré</strong>.</p>\n<p><strong>Exemple 4.</strong> Jardin en losange de diagonales $12$ m et $9$ m :\n$\\mathcal{A} = \\dfrac{12 \\times 9}{2} = 54$ m². Gazon à $85$ DH/m² :\n$54 \\times 85 = 4\\,590$ DH.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Parallélogramme : côtés opposés parallèles et égaux ; diagonales se coupant en\n  leur milieu ; angles opposés égaux ; angles consécutifs supplémentaires.</li>\n<li>Pour <strong>démontrer</strong> : (C1) parallélisme, (C2) diagonales, (C3) côtés opposés\n  égaux, (C4) deux côtés parallèles et égaux.</li>\n<li>Rectangle $=$ parallélogramme $+$ un angle droit (ou diagonales égales).</li>\n<li>Losange $=$ parallélogramme $+$ deux côtés consécutifs égaux (ou diagonales\n  perpendiculaires).</li>\n<li>Carré $=$ rectangle $+$ losange.</li>\n<li>Aires : $b \\times h$ (parallélogramme), $L \\times \\ell$ (rectangle),\n  $\\dfrac{d_1 \\times d_2}{2}$ (losange), $c \\times c$ (carré).</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Cherche des losanges et des carrés dans un zellige ; vérifie leurs diagonales.</li>\n<li>Le losange a-t-il une aire plus petite que le carré de même périmètre ? Essaie\n  avec $P = 40$ cm.</li>\n<li>Un cerf-volant est-il toujours un losange ? Fais un dessin.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Curricula.aspx\">Ministère de l'Éducation nationale du Maroc — programmes et curricula</a></li>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"definitions-cles\">Définitions clés</h2>\n<ul>\n<li><strong>Parallélogramme</strong> : côtés opposés parallèles deux à deux.</li>\n<li><strong>Rectangle</strong> : quatre angles droits.</li>\n<li><strong>Losange</strong> : quatre côtés de même longueur.</li>\n<li><strong>Carré</strong> : quatre angles droits <strong>et</strong> quatre côtés égaux.</li>\n</ul>\n<h2 id=\"tableau-des-proprietes\">Tableau des propriétés</h2>\n<table>\n<thead>\n<tr>\n<th>Propriété</th>\n<th>Parall.</th>\n<th>Rect.</th>\n<th>Los.</th>\n<th>Carré</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Côtés opposés parallèles</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Côtés opposés égaux</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Quatre côtés égaux</td>\n<td>non</td>\n<td>non</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Quatre angles droits</td>\n<td>non</td>\n<td>oui</td>\n<td>non</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Angles opposés égaux</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Diagonales se coupant en leur milieu</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Diagonales de même longueur</td>\n<td>non</td>\n<td>oui</td>\n<td>non</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Diagonales perpendiculaires</td>\n<td>non</td>\n<td>non</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n<tr>\n<td>Axes de symétrie</td>\n<td>$0$</td>\n<td>$2$</td>\n<td>$2$</td>\n<td>$4$</td>\n</tr>\n<tr>\n<td>Centre de symétrie</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n<td>oui</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"caracterisations-pour-demontrer\">Caractérisations (pour démontrer)</h2>\n<p><strong>Un quadrilatère non croisé est un parallélogramme si :</strong> (1) côtés opposés\nparallèles ; (2) diagonales se coupant en leur milieu ; (3) côtés opposés de même\nlongueur ; (4) deux côtés opposés parallèles <strong>et</strong> de même longueur.</p>\n<p><strong>Un parallélogramme est un rectangle si :</strong> il a un angle droit, <strong>ou</strong> ses\ndiagonales sont de même longueur.</p>\n<p><strong>Un parallélogramme est un losange si :</strong> deux côtés consécutifs sont égaux,\n<strong>ou</strong> ses diagonales sont perpendiculaires.</p>\n<p><strong>Un parallélogramme est un carré si :</strong> ses diagonales sont de même longueur\n<strong>et</strong> perpendiculaires.</p>\n<h2 id=\"tableau-des-formules\">Tableau des formules</h2>\n<table>\n<thead>\n<tr>\n<th>Figure</th>\n<th>Périmètre</th>\n<th>Aire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Parallélogramme (côtés $a$, $b$ ; base $b$, hauteur $h$)</td>\n<td>$P = 2(a+b)$</td>\n<td>$\\mathcal{A} = b \\times h$</td>\n</tr>\n<tr>\n<td>Rectangle ($L$, $\\ell$)</td>\n<td>$P = 2(L+\\ell)$</td>\n<td>$\\mathcal{A} = L \\times \\ell$</td>\n</tr>\n<tr>\n<td>Losange (côté $c$, diagonales $d_1$, $d_2$)</td>\n<td>$P = 4c$</td>\n<td>$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$</td>\n</tr>\n<tr>\n<td>Carré (côté $c$)</td>\n<td>$P = 4c$</td>\n<td>$\\mathcal{A} = c \\times c$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"angles-dun-parallelogramme\">Angles d'un parallélogramme</h2>\n<p>Angles opposés égaux ; angles consécutifs supplémentaires. Si $\\widehat{A} = 70°$,\nalors $\\widehat{C} = 70°$ et $\\widehat{B} = \\widehat{D} = 110°$.</p>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Prendre le côté oblique pour la hauteur : la hauteur est <strong>perpendiculaire</strong> à\n   la base, donc plus courte.</li>\n<li>Confondre côtés et diagonales : dans $ABCD$, les diagonales sont $[AC]$ et $[BD]$.</li>\n<li>Croire qu'un quadrilatère à diagonales perpendiculaires est forcément un\n   losange : il faut d'abord savoir que c'est un <strong>parallélogramme</strong>.</li>\n</ol>\n<h2 id=\"mini-memo-de-redaction\">Mini-mémo de rédaction</h2>\n<p>« On sait que … . Or, si un quadrilatère …, alors c'est un … . Donc $ABCD$ est\nun … . »</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Vrai ou faux",
   "diff": "facile",
   "q": "<p>Réponds et justifie brièvement.\n1. Un carré est un losange.\n2. Les diagonales d'un parallélogramme sont toujours de même longueur.\n3. Un rectangle possède un centre de symétrie.\n4. Les diagonales d'un losange sont perpendiculaires.\n5. Un parallélogramme possède deux axes de symétrie.</p>",
   "modele": "<ol>\n<li><strong>Vrai.</strong> Un carré a quatre côtés de même longueur : c'est un losange (particulier).</li>\n<li><strong>Faux.</strong> Elles se coupent en leur milieu, mais ne sont égales que dans le cas\n   du rectangle (et du carré).</li>\n<li><strong>Vrai.</strong> C'est l'intersection de ses diagonales.</li>\n<li><strong>Vrai.</strong> C'est une propriété du losange.</li>\n<li><strong>Faux.</strong> Un parallélogramme quelconque n'a <strong>aucun</strong> axe de symétrie ; il a\n   seulement un centre de symétrie.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Angles d'un parallélogramme",
   "diff": "facile",
   "q": "<p>$ABCD$ est un parallélogramme tel que $\\widehat{DAB} = 58°$.\nCalcule $\\widehat{ABC}$, $\\widehat{BCD}$ et $\\widehat{CDA}$.</p>",
   "modele": "<p>Angles opposés égaux : $\\widehat{BCD} = \\widehat{DAB} = 58°$.\nAngles consécutifs supplémentaires :\n$$\\widehat{ABC} = 180° - 58° = 122°, \\qquad \\widehat{CDA} = 122°.$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Périmètre",
   "diff": "facile",
   "q": "<p>$EFGH$ est un parallélogramme avec $EF = 8{,}4$ cm et $FG = 5{,}6$ cm.\n1. Donne les longueurs $GH$ et $HE$.\n2. Calcule le périmètre de $EFGH$.</p>",
   "modele": "<ol>\n<li>Côtés opposés égaux : $GH = EF = 8{,}4$ cm et $HE = FG = 5{,}6$ cm.</li>\n<li>$P = 2 \\times (8{,}4 + 5{,}6) = 2 \\times 14 = 28$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Diagonales",
   "diff": "facile",
   "q": "<p>$ABCD$ est un parallélogramme de centre $O$. On sait que $AC = 10$ cm et\n$BD = 14$ cm.\n1. Calcule $OA$ et $OB$.\n2. $ABCD$ peut-il être un rectangle ? Justifie.</p>",
   "modele": "<ol>\n<li>Les diagonales se coupent en leur milieu :\n$$OA = \\dfrac{AC}{2} = \\dfrac{10}{2} = 5 \\text{ cm}, \\qquad OB = \\dfrac{BD}{2} = \\dfrac{14}{2} = 7 \\text{ cm}.$$</li>\n<li><strong>Non.</strong> Dans un rectangle, les diagonales sont de même longueur. Ici\n   $10 \\ne 14$, donc $ABCD$ n'est pas un rectangle.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Aires",
   "diff": "facile",
   "q": "<p>Calcule l'aire de chaque figure.\n1. Un parallélogramme de base $12$ cm et de hauteur $5$ cm.\n2. Un rectangle de $9$ cm sur $6{,}5$ cm.\n3. Un losange dont les diagonales mesurent $8$ cm et $6$ cm.\n4. Un carré de côté $7$ cm.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = 12 \\times 5 = 60$ cm².</li>\n<li>$\\mathcal{A} = 9 \\times 6{,}5 = 58{,}5$ cm².</li>\n<li>$\\mathcal{A} = \\dfrac{8 \\times 6}{2} = \\dfrac{48}{2} = 24$ cm².</li>\n<li>$\\mathcal{A} = 7 \\times 7 = 49$ cm².</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Reconnaître la nature",
   "diff": "facile",
   "q": "<p>Donne la nature la plus précise de chaque quadrilatère.\n1. $ABCD$ : côtés opposés parallèles, un angle droit.\n2. $EFGH$ : quatre côtés de $5$ cm, un angle de $90°$.\n3. $IJKL$ : diagonales se coupant en leur milieu, perpendiculaires, de longueurs\n   $6$ cm et $10$ cm.\n4. $MNPQ$ : diagonales se coupant en leur milieu, de même longueur $8$ cm, non\n   perpendiculaires.</p>",
   "modele": "<ol>\n<li>Parallélogramme avec un angle droit : <strong>rectangle</strong>.</li>\n<li>Quatre côtés égaux et un angle droit : <strong>carré</strong>.</li>\n<li>Diagonales se coupant en leur milieu (parallélogramme) et perpendiculaires,\n   mais de longueurs différentes : <strong>losange</strong> (non carré).</li>\n<li>Diagonales se coupant en leur milieu et de même longueur, non perpendiculaires :\n   <strong>rectangle</strong> (non carré).</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Démonstration guidée",
   "diff": "",
   "q": "<p>$ABCD$ est un quadrilatère non croisé tel que $AB = DC = 6$ cm et\n$(AB) \\parallel (DC)$.\n1. Quelle caractérisation permet de conclure ?\n2. Rédige la démonstration complète : $ABCD$ est un parallélogramme.\n3. En déduis $AD$ sachant que $BC = 4{,}2$ cm.</p>",
   "modele": "<ol>\n<li>La caractérisation <strong>(C4)</strong> : deux côtés opposés parallèles <strong>et</strong> de même longueur.</li>\n<li>Démonstration : « On sait que $(AB) \\parallel (DC)$ et $AB = DC = 6$ cm. Or, si\n   un quadrilatère non croisé a deux côtés opposés parallèles et de même longueur,\n   alors c'est un parallélogramme. Donc $ABCD$ est un parallélogramme. »</li>\n<li>Dans un parallélogramme, les côtés opposés sont égaux : $AD = BC = 4{,}2$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Construction",
   "diff": "",
   "q": "<p>Construis le parallélogramme $ABCD$ tel que $AB = 6$ cm, $AD = 4$ cm et\n$\\widehat{DAB} = 60°$.\n1. Décris ta construction en trois étapes.\n2. Mesure les diagonales $[AC]$ et $[BD]$. Sont-elles égales ?\n3. $ABCD$ est-il un rectangle ? Justifie.</p>",
   "modele": "<ol>\n<li>Construction : (a) tracer $[AB]$ de $6$ cm ; (b) tracer une demi-droite\n   d'origine $A$ formant un angle de $60°$ avec $[AB)$ et placer $D$ à $4$ cm de\n   $A$ ; (c) tracer la parallèle à $(AB)$ passant par $D$ et la parallèle à $(AD)$\n   passant par $B$ : leur intersection est $C$.</li>\n<li>Par mesure : $AC \\approx 8{,}7$ cm et $BD \\approx 5{,}3$ cm. Elles <strong>ne sont pas</strong>\n   égales.</li>\n<li><strong>Non.</strong> Dans un rectangle les diagonales sont égales ; ce n'est pas le cas ici.\n   D'ailleurs $\\widehat{DAB} = 60° \\ne 90°$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Devenir un rectangle",
   "diff": "",
   "q": "<p>$ABCD$ est un parallélogramme de centre $O$ avec $OA = 4{,}5$ cm et\n$OB = 4{,}5$ cm.\n1. Calcule $AC$ et $BD$.\n2. Démontre que $ABCD$ est un rectangle.</p>",
   "modele": "<ol>\n<li>$AC = 2 \\times OA = 2 \\times 4{,}5 = 9$ cm et $BD = 2 \\times OB = 9$ cm.</li>\n<li>On sait que $ABCD$ est un parallélogramme et que $AC = BD = 9$ cm. Or, si un\n   parallélogramme a ses diagonales de même longueur, alors c'est un rectangle.\n   Donc $ABCD$ est un rectangle.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Devenir un losange",
   "diff": "",
   "q": "<p>$MNPQ$ est un parallélogramme tel que $MN = 5$ cm et $NP = 5$ cm.\n1. Donne les longueurs des quatre côtés.\n2. Démontre que $MNPQ$ est un losange.\n3. Que peut-on dire de ses diagonales ?</p>",
   "modele": "<ol>\n<li>$MN = PQ = 5$ cm et $NP = QM = 5$ cm : les quatre côtés mesurent $5$ cm.</li>\n<li>On sait que $MNPQ$ est un parallélogramme et que $MN = NP$ ($5$ cm), donc deux\n   côtés <strong>consécutifs</strong> sont égaux. Or, si un parallélogramme a deux côtés\n   consécutifs de même longueur, alors c'est un losange. Donc $MNPQ$ est un losange.</li>\n<li>Ses diagonales sont <strong>perpendiculaires</strong>, se coupent en leur milieu, et sont\n   les bissectrices de ses angles.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Hauteur du parallélogramme",
   "diff": "",
   "q": "<p>Un parallélogramme $ABCD$ a pour base $AB = 15$ cm. Son aire vaut $90$ cm².\n1. Calcule la hauteur relative à la base $[AB]$.\n2. Le côté $[AD]$ mesure $8$ cm. Explique pourquoi la hauteur trouvée est\n   forcément inférieure à $8$ cm.\n3. Calcule le périmètre de $ABCD$.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = b \\times h$ donc $h = \\dfrac{\\mathcal{A}}{b} = \\dfrac{90}{15} = 6$ cm.</li>\n<li>La hauteur est la distance mesurée <strong>perpendiculairement</strong> entre les deux côtés\n   parallèles. Le côté oblique $[AD]$ est toujours plus long que cette distance\n   (sauf si le parallélogramme est un rectangle, où ils sont égaux). Ici\n   $6 &lt; 8$ : c'est cohérent.</li>\n<li>$P = 2 \\times (15 + 8) = 2 \\times 23 = 46$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Losange et diagonales",
   "diff": "",
   "q": "<p>Un losange $RSTU$ a une aire de $84$ cm² et une diagonale $RT = 14$ cm.\n1. Calcule la seconde diagonale $SU$.\n2. Calcule $OR$ et $OS$, où $O$ est le centre du losange.\n3. Quelle est la mesure de l'angle $\\widehat{ROS}$ ? Justifie.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$ donc\n$$84 = \\dfrac{14 \\times SU}{2} = 7 \\times SU, \\qquad SU = \\dfrac{84}{7} = 12 \\text{ cm}.$$</li>\n<li>$OR = \\dfrac{RT}{2} = \\dfrac{14}{2} = 7$ cm et $OS = \\dfrac{SU}{2} = \\dfrac{12}{2} = 6$ cm.</li>\n<li>$\\widehat{ROS} = 90°$, car les diagonales d'un losange sont perpendiculaires.</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "La terrasse de Fès",
   "diff": "difficile",
   "q": "<p>Une terrasse en forme de parallélogramme a une base de $7{,}5$ m et une hauteur de\n$4$ m. Les côtés obliques mesurent $4{,}8$ m.\n1. Calcule l'aire de la terrasse.\n2. Calcule son périmètre.\n3. Le carrelage coûte $120$ DH le mètre carré. Calcule le prix du carrelage.\n4. Une plinthe coûte $35$ DH le mètre linéaire et sera posée sur tout le\n   périmètre. Calcule le prix des plinthes, puis le coût total des travaux.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = 7{,}5 \\times 4 = 30$ m².</li>\n<li>$P = 2 \\times (7{,}5 + 4{,}8) = 2 \\times 12{,}3 = 24{,}6$ m.</li>\n<li>Carrelage : $30 \\times 120 = 3\\,600$ DH.</li>\n<li>Plinthes : $24{,}6 \\times 35 = 861$ DH.\n   Coût total : $3\\,600 + 861 = 4\\,461$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Le cadre du menuisier",
   "diff": "difficile",
   "q": "<p>Un menuisier de Salé assemble un cadre articulé avec deux barres de $120$ cm et\ndeux barres de $70$ cm.\n1. Quelle est la nature du quadrilatère obtenu ? Justifie.\n2. Calcule son périmètre.\n3. Le menuisier mesure les deux diagonales : il trouve $138{,}9$ cm et $138{,}9$ cm.\n   Que peut-il conclure ? Cite la propriété utilisée.\n4. Peut-il obtenir un carré avec ces quatre barres ? Justifie.</p>",
   "modele": "<ol>\n<li>Les côtés opposés sont égaux deux à deux ($120$ cm et $120$ cm ; $70$ cm et\n   $70$ cm). Or un quadrilatère non croisé dont les côtés opposés sont égaux deux\n   à deux est un <strong>parallélogramme</strong>.</li>\n<li>$P = 2 \\times (120 + 70) = 2 \\times 190 = 380$ cm, soit $3{,}80$ m.</li>\n<li>Les deux diagonales sont égales. Or, si un parallélogramme a ses diagonales de\n   même longueur, alors c'est un <strong>rectangle</strong>. Le cadre est donc bien d'équerre.</li>\n<li><strong>Non.</strong> Un carré a ses quatre côtés égaux ; ici deux côtés mesurent $120$ cm et\n   deux autres $70$ cm, et $120 \\ne 70$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Panneau en losange",
   "diff": "difficile",
   "q": "<p>Un panneau de signalisation en losange a des diagonales de $80$ cm et $60$ cm.\n1. Calcule son aire en cm², puis en m² (arrondi au centième).\n2. Calcule $OA$ et $OB$ si $O$ est le centre et $[AC]$, $[BD]$ les diagonales avec\n   $AC = 80$ cm.\n3. Le panneau est peint sur ses deux faces. La peinture couvre $2$ m² par pot.\n   Combien de pots faut-il au minimum ?</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = \\dfrac{80 \\times 60}{2} = \\dfrac{4\\,800}{2} = 2\\,400$ cm².\n   Comme $1$ m² $= 10\\,000$ cm² : $\\mathcal{A} = 2\\,400 \\div 10\\,000 = 0{,}24$ m².</li>\n<li>$OA = \\dfrac{80}{2} = 40$ cm et $OB = \\dfrac{60}{2} = 30$ cm.</li>\n<li>Surface à peindre : $2 \\times 0{,}24 = 0{,}48$ m². Comme $0{,}48 &lt; 2$, un seul\n   pot suffit : <strong>1 pot</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Classer et justifier",
   "diff": "difficile",
   "q": "<p>Pour chaque affirmation, dis si elle est vraie ou fausse et justifie par un\ncontre-exemple si elle est fausse.\n1. Tout losange est un rectangle.\n2. Tout carré est un parallélogramme.\n3. Un parallélogramme dont les diagonales mesurent $12$ cm et $12$ cm est un carré.\n4. Un quadrilatère dont les diagonales sont perpendiculaires est un losange.\n5. Un rectangle dont deux côtés consécutifs mesurent $6$ cm et $6$ cm est un carré.</p>",
   "modele": "<ol>\n<li><strong>Faux.</strong> Un losange de côté $5$ cm avec un angle de $60°$ a quatre côtés égaux\n   mais aucun angle droit : ce n'est pas un rectangle.</li>\n<li><strong>Vrai.</strong> Un carré a ses côtés opposés parallèles.</li>\n<li><strong>Faux.</strong> Des diagonales de même longueur donnent seulement un <strong>rectangle</strong>.\n   Un rectangle de $8$ cm sur $6$ cm a deux diagonales de $10$ cm et n'est pas un carré.</li>\n<li><strong>Faux.</strong> Contre-exemple : un « cerf-volant » $ABCD$ avec $AB = AD = 5$ cm et\n   $CB = CD = 9$ cm a des diagonales perpendiculaires, mais ses quatre côtés ne\n   sont pas égaux : ce n'est pas un losange.</li>\n<li><strong>Vrai.</strong> Un rectangle avec deux côtés consécutifs égaux a ses quatre côtés\n   égaux et quatre angles droits : c'est un carré.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Chasse aux erreurs",
   "diff": "difficile",
   "q": "<p>Salma écrit : « $ABCD$ est un parallélogramme, sa base $AB$ mesure $10$ cm et son\ncôté $AD$ mesure $6$ cm. Donc son aire vaut $10 \\times 6 = 60$ cm². »\n1. Repère l'erreur.\n2. On mesure la hauteur relative à $[AB]$ : elle vaut $5{,}4$ cm. Calcule la vraie aire.\n3. De combien de cm² Salma s'est-elle trompée ?</p>",
   "modele": "<ol>\n<li>Erreur : Salma a utilisé le <strong>côté oblique</strong> $AD$ comme hauteur. Dans un\n   parallélogramme, l'aire est base $\\times$ <strong>hauteur perpendiculaire</strong>, pas\n   base $\\times$ côté.</li>\n<li>$\\mathcal{A} = 10 \\times 5{,}4 = 54$ cm².</li>\n<li>Écart : $60 - 54 = 6$ cm². Elle a surestimé l'aire de $6$ cm².</li>\n</ol>",
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
   "q": "<p>Sur un terrain d'Agadir, on trace un quadrilatère $ABCD$ tel que les diagonales\n$[AC]$ et $[BD]$ se coupent en leur milieu $O$, avec $AC = 24$ m et $BD = 18$ m,\nles diagonales étant perpendiculaires.\n1. Démontre que $ABCD$ est un parallélogramme.\n2. Démontre que $ABCD$ est un losange.\n3. Calcule l'aire de $ABCD$.\n4. On veut clôturer le terrain. Un côté du losange mesure $15$ m. Calcule la\n   longueur de clôture nécessaire, puis son prix à $60$ DH le mètre.\n5. $ABCD$ est-il un carré ? Justifie.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Connaître les propriétés</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Calculer des angles</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer un périmètre</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Utiliser les diagonales</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Appliquer les formules d'aire</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Reconnaître la nature d'un quadrilatère</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Raisonner : rédiger une démonstration</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Représenter : construire</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Démontrer qu'un parallélogramme est un rectangle</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Démontrer qu'un parallélogramme est un losange</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Calculer une hauteur, raisonner</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Calculer avec les diagonales</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Résoudre un problème de coût</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Modéliser et justifier</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Convertir, calculer, décider</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Raisonner par contre-exemple</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Analyser une erreur</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Synthèse : démontrer et calculer</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>On sait que les diagonales $[AC]$ et $[BD]$ se coupent en leur milieu $O$. Or,\n   si les diagonales d'un quadrilatère se coupent en leur milieu, alors c'est un\n   parallélogramme. Donc $ABCD$ est un parallélogramme.</li>\n<li>On sait de plus que $(AC) \\perp (BD)$. Or, si un parallélogramme a ses\n   diagonales perpendiculaires, alors c'est un losange. Donc $ABCD$ est un losange.</li>\n<li>$\\mathcal{A} = \\dfrac{24 \\times 18}{2} = \\dfrac{432}{2} = 216$ m².</li>\n<li>Un losange a quatre côtés égaux : $P = 4 \\times 15 = 60$ m.\n   Prix : $60 \\times 60 = 3\\,600$ DH.</li>\n<li><strong>Non.</strong> Dans un carré, les diagonales ont la même longueur. Ici $24 \\ne 18$,\n   donc $ABCD$ est un losange mais pas un carré.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M15",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Matériel de géométrie exigé</p>\n<h2 id=\"exercice-1-5-points-proprietes-et-angles\">Exercice 1 (5 points) — Propriétés et angles</h2>\n<p>$ABCD$ est un parallélogramme de centre $O$ tel que $AB = 9$ cm, $BC = 5$ cm,\n$AC = 12$ cm et $\\widehat{DAB} = 64°$.</p>\n<ol>\n<li>Donne les longueurs $DC$ et $AD$ en citant la propriété utilisée.</li>\n<li>Calcule le périmètre de $ABCD$.</li>\n<li>Calcule $OA$.</li>\n<li>Calcule les trois autres angles du parallélogramme.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$DC = 9$ cm, $AD = 5$ cm ($1$ pt) ; propriété citée ($0{,}5$ pt)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$P = 28$ cm</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$OA = 6$ cm avec justification</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$\\widehat{BCD} = 64°$, $\\widehat{ABC} = \\widehat{CDA} = 116°$</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-demontrer-la-nature-dun-quadrilatere\">Exercice 2 (5 points) — Démontrer la nature d'un quadrilatère</h2>\n<p>$MNPQ$ est un quadrilatère non croisé. Ses diagonales $[MP]$ et $[NQ]$ se coupent\nen leur milieu $O$. On sait de plus que $MP = 10$ cm et $NQ = 10$ cm.</p>\n<ol>\n<li>Démontre que $MNPQ$ est un parallélogramme.</li>\n<li>Démontre que $MNPQ$ est un rectangle.</li>\n<li>On apprend enfin que $(MP) \\perp (NQ)$. Quelle est alors la nature exacte de\n   $MNPQ$ ? Justifie.</li>\n<li>Combien d'axes de symétrie possède cette figure ?</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Caractérisation « diagonales se coupant en leur milieu » + conclusion</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Caractérisation « diagonales de même longueur » + conclusion</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Carré, avec justification (rectangle + losange)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$4$ axes</td>\n<td>0,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-6-points-probleme-la-salle-de-sport-de-casablanca\">Exercice 3 (6 points) — Problème : la salle de sport de Casablanca</h2>\n<p>Le sol d'une salle de sport de Casablanca a la forme d'un parallélogramme de base\n$18$ m et de hauteur $10$ m. Ses côtés obliques mesurent $12$ m.</p>\n<ol>\n<li>Calcule l'aire du sol.</li>\n<li>Calcule le périmètre du sol.</li>\n<li>Le revêtement coûte $145$ DH le mètre carré. Calcule le prix du revêtement.</li>\n<li>On pose une bande de protection sur tout le périmètre, à $48$ DH le mètre.\n   Calcule le prix de cette bande.</li>\n<li>Calcule le coût total des travaux.</li>\n<li>Rachid dit : « L'aire est $18 \\times 12 = 216$ m². » Explique son erreur en une\n   phrase.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$180$ m²</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$60$ m</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$26\\,100$ DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$2\\,880$ DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>5</td>\n<td>$28\\,980$ DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Confusion côté oblique / hauteur</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-4-points-losange-et-classification\">Exercice 4 (4 points) — Losange et classification</h2>\n<p>Un losange $ABCD$ a des diagonales $AC = 16$ cm et $BD = 12$ cm, de centre $O$.</p>\n<ol>\n<li>Calcule $OA$ et $OB$.</li>\n<li>Donne la mesure de l'angle $\\widehat{AOB}$ et justifie.</li>\n<li>Calcule l'aire du losange.</li>\n<li>Ce losange est-il un carré ? Justifie.</li>\n</ol>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$OA = 8$ cm, $OB = 6$ cm</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$90°$, diagonales perpendiculaires</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$96$ cm²</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Non, diagonales de longueurs différentes</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>Dans un parallélogramme, les côtés opposés sont de même longueur :\n   $DC = AB = 9$ cm et $AD = BC = 5$ cm.</li>\n<li>$P = 2 \\times (9 + 5) = 2 \\times 14 = 28$ cm.</li>\n<li>Les diagonales se coupent en leur milieu, donc\n$$OA = \\dfrac{AC}{2} = \\dfrac{12}{2} = 6 \\text{ cm}.$$</li>\n<li>Angles opposés égaux : $\\widehat{BCD} = \\widehat{DAB} = 64°$.\n   Angles consécutifs supplémentaires :\n   $\\widehat{ABC} = \\widehat{CDA} = 180° - 64° = 116°$.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>On sait que les diagonales $[MP]$ et $[NQ]$ se coupent en leur milieu $O$. Or,\n   si les diagonales d'un quadrilatère non croisé se coupent en leur milieu, alors\n   ce quadrilatère est un parallélogramme. Donc $MNPQ$ est un parallélogramme.</li>\n<li>On sait que $MP = NQ = 10$ cm. Or, si un parallélogramme a ses diagonales de\n   même longueur, alors c'est un rectangle. Donc $MNPQ$ est un rectangle.</li>\n<li>Comme $(MP) \\perp (NQ)$ et que $MNPQ$ est un parallélogramme, $MNPQ$ est aussi\n   un losange. Étant à la fois rectangle et losange, $MNPQ$ est un <strong>carré</strong>.</li>\n<li>Un carré possède <strong>4</strong> axes de symétrie (ses deux diagonales et les deux\n   médiatrices de ses côtés).</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$\\mathcal{A} = 18 \\times 10 = 180$ m².</li>\n<li>$P = 2 \\times (18 + 12) = 2 \\times 30 = 60$ m.</li>\n<li>Revêtement : $180 \\times 145 = 26\\,100$ DH.</li>\n<li>Bande : $60 \\times 48 = 2\\,880$ DH.</li>\n<li>Total : $26\\,100 + 2\\,880 = 28\\,980$ DH.</li>\n<li>Rachid a multiplié la base par le <strong>côté oblique</strong> au lieu de la <strong>hauteur</strong>\n   perpendiculaire : la hauteur vaut $10$ m, pas $12$ m.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>$OA = \\dfrac{16}{2} = 8$ cm et $OB = \\dfrac{12}{2} = 6$ cm.</li>\n<li>$\\widehat{AOB} = 90°$, car les diagonales d'un losange sont perpendiculaires.</li>\n<li>$\\mathcal{A} = \\dfrac{16 \\times 12}{2} = \\dfrac{192}{2} = 96$ cm².</li>\n<li><strong>Non.</strong> Dans un carré, les deux diagonales ont la même longueur. Ici\n   $16 \\ne 12$, donc $ABCD$ est un losange mais pas un carré.</li>\n</ol>"
 }
},

{
 "id": "m16",
 "domaine": "maths",
 "unite": 16,
 "theme": "Géométrie",
 "tag": "M16",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M16 — Angles formés par deux droites parallèles et une sécante",
 "duree": "6 h",
 "semestre": "2",
 "objectifs": [
  "Nommer les angles correspondants, alternes-internes et alternes-externes.",
  "Calculer des mesures d'angles lorsque deux droites parallèles sont coupées par\n  une sécante.",
  "Démontrer que deux droites sont parallèles à l'aide d'une propriété réciproque.",
  "Enchaîner plusieurs propriétés pour trouver un angle inconnu."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Sur la corniche d'Agadir, deux longues rues parallèles sont traversées par une\navenue en diagonale. À chaque croisement, l'avenue forme des angles avec la rue.</p>\n<p>Un technicien de la voirie doit peindre les marquages au sol. Il mesure au premier\ncroisement un angle de $63°$ entre l'avenue et la rue. Il se rend au second\ncroisement : sans même mesurer, il sait déjà qu'il retrouvera $63°$.</p>\n<p><strong>Question.</strong> Comment peut-il en être sûr ? Quels angles se répètent d'un\ncroisement à l'autre, et pourquoi ?</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Trace deux droites parallèles $(d_1)$ et $(d_2)$ (à $4$ cm l'une de\nl'autre) puis une droite $(s)$ qui les coupe, appelée <strong>sécante</strong>. Note $A$ le\npoint d'intersection de $(s)$ et $(d_1)$, et $B$ celui de $(s)$ et $(d_2)$.</p>\n<p>Huit angles apparaissent : quatre autour de $A$, quatre autour de $B$. Mesure-les\ntous au rapporteur.</p>\n<p><strong>Observation.</strong> On ne trouve que <strong>deux</strong> valeurs différentes, par exemple $63°$\net $117°$. De plus $63° + 117° = 180°$.</p>\n<p><strong>Conclusion.</strong> Certains couples d'angles sont toujours <strong>égaux</strong>, d'autres sont\ntoujours <strong>supplémentaires</strong>. Il suffit de savoir les reconnaître et de leur donner\nun nom.</p>\n<p><strong>Activité 2.</strong> Reprends la figure, mais avec deux droites <strong>non parallèles</strong>\ncoupées par une sécante. Mesure à nouveau. Cette fois les angles correspondants\nsont <strong>différents</strong>. C'est donc bien le parallélisme qui crée l'égalité.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-vocabulaire\">3.1 Vocabulaire</h3>\n<p>Deux droites $(d_1)$ et $(d_2)$ sont coupées par une sécante $(s)$ en $A$ et $B$.</p>\n<pre><code>                        (s)\n                         |\n        1 \\  2           |\n  (d1) ----A----         |\n        4 \\  3           |\n           \\             |\n        5 \\  6           |\n  (d2) ----B----         |\n        8 \\  7           |\n</code></pre>\n<p>La <strong>bande intérieure</strong> est la zone située entre $(d_1)$ et $(d_2)$. Les angles\n$3$, $4$, $5$, $6$ sont <strong>internes</strong> ; les angles $1$, $2$, $7$, $8$ sont\n<strong>externes</strong>.</p>\n<blockquote>\n<p><strong>Définitions.</strong>\n- Deux angles sont <strong>correspondants</strong> s'ils sont situés du <strong>même côté</strong> de la\n  sécante, l'un interne et l'autre externe (l'un « en haut » de $A$, l'autre\n  « en haut » de $B$). Exemples : $2$ et $6$ ; $1$ et $5$ ; $3$ et $7$ ; $4$ et $8$.\n- Deux angles sont <strong>alternes-internes</strong> s'ils sont tous les deux internes et de\n  <strong>part et d'autre</strong> de la sécante. Exemples : $3$ et $5$ ; $4$ et $6$.\n- Deux angles sont <strong>alternes-externes</strong> s'ils sont tous les deux externes et de\n  part et d'autre de la sécante. Exemples : $1$ et $7$ ; $2$ et $8$.</p>\n</blockquote>\n<p>Rappel de M06 : deux angles <strong>opposés par le sommet</strong> sont toujours égaux (par\nexemple $1$ et $3$), qu'il y ait parallélisme ou non. Deux angles <strong>adjacents\nsupplémentaires</strong> ont une somme de $180°$ (par exemple $1$ et $2$).</p>\n<p><strong>Astuce de repérage.</strong> Les angles correspondants dessinent un <strong>F</strong> (éventuellement\nretourné). Les angles alternes-internes dessinent un <strong>Z</strong> (éventuellement\nretourné). Les angles alternes-externes dessinent un <strong>Z allongé</strong> hors de la bande.</p>\n<h3 id=\"32-proprietes-directes-les-droites-sont-paralleles\">3.2 Propriétés directes (les droites sont parallèles)</h3>\n<blockquote>\n<p><strong>Propriété 1.</strong> Si deux droites <strong>parallèles</strong> sont coupées par une sécante,\nalors les angles <strong>correspondants</strong> sont <strong>de même mesure</strong>.</p>\n<p><strong>Propriété 2.</strong> Si deux droites <strong>parallèles</strong> sont coupées par une sécante,\nalors les angles <strong>alternes-internes</strong> sont <strong>de même mesure</strong>.</p>\n<p><strong>Propriété 3.</strong> Si deux droites <strong>parallèles</strong> sont coupées par une sécante,\nalors les angles <strong>alternes-externes</strong> sont <strong>de même mesure</strong>.</p>\n<p><strong>Propriété 4.</strong> Si deux droites parallèles sont coupées par une sécante, alors\ndeux angles internes situés <strong>du même côté</strong> de la sécante sont\n<strong>supplémentaires</strong> : leur somme vaut $180°$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Sur la figure, $(d_1) \\parallel (d_2)$ et l'angle $2$ mesure $63°$.\nAlors l'angle $6$ (correspondant) mesure $63°$, l'angle $4$ (alterne-interne de\n$6$) mesure $63°$, et l'angle $3$ mesure $180° - 63° = 117°$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Appliquer ces propriétés <strong>sans</strong> avoir vérifié que les\ndeux droites sont parallèles. Sans parallélisme, les angles correspondants n'ont\naucune raison d'être égaux.</p>\n<h3 id=\"33-proprietes-reciproques-pour-demontrer-un-parallelisme\">3.3 Propriétés réciproques (pour démontrer un parallélisme)</h3>\n<blockquote>\n<p><strong>Propriété réciproque.</strong> Si deux droites coupées par une sécante forment :\n- des angles <strong>correspondants</strong> de même mesure, <strong>ou</strong>\n- des angles <strong>alternes-internes</strong> de même mesure, <strong>ou</strong>\n- des angles <strong>alternes-externes</strong> de même mesure,</p>\n<p>alors ces deux droites sont <strong>parallèles</strong>.</p>\n</blockquote>\n<p><strong>Méthode (pas à pas) — démontrer que $(d_1) \\parallel (d_2)$.</strong>\n1. Je repère la <strong>sécante</strong> commune aux deux droites.\n2. Je repère les deux angles donnés et je précise leur <strong>nom</strong> (correspondants,\n   alternes-internes ou alternes-externes).\n3. Je vérifie qu'ils ont la <strong>même mesure</strong>.\n4. J'énonce la réciproque et je <strong>conclus</strong> : « Donc $(d_1) \\parallel (d_2)$. »</p>\n<p><strong>Exemple.</strong> $(AB)$ est une sécante à $(d_1)$ et $(d_2)$. Les angles\n$\\widehat{xAB} = 74°$ et $\\widehat{yBA} = 74°$ sont alternes-internes.\nOr, si deux droites coupées par une sécante forment des angles alternes-internes\nde même mesure, alors elles sont parallèles. Donc $(d_1) \\parallel (d_2)$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Utiliser deux angles qui ne forment pas un couple\nreconnu. Par exemple, deux angles internes du même côté qui sont <strong>égaux</strong> ne\nprouvent le parallélisme que s'ils valent $90°$ chacun ; en général il faut qu'ils\nsoient <strong>supplémentaires</strong>, pas égaux.</p>\n<h3 id=\"34-calculs-enchaines\">3.4 Calculs enchaînés</h3>\n<p>Souvent, on ne peut pas répondre en une seule étape : il faut passer par un angle\nintermédiaire.</p>\n<p><strong>Méthode.</strong>\n1. J'écris toutes les mesures connues sur la figure.\n2. Je cherche un angle que je peux calculer <strong>immédiatement</strong> (opposé par le\n   sommet, supplémentaire, correspondant…).\n3. Je répète l'opération jusqu'à atteindre l'angle demandé.\n4. À chaque étape, je note la <strong>propriété</strong> utilisée.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> $(d_1) \\parallel (d_2)$, coupées par la sécante $(s)$ en $A$ et $B$.\nL'angle $\\widehat{1} = 118°$ (angle externe en $A$, au-dessus à gauche).\nCalcule les angles $3$, $5$ et $6$ de la figure de la partie 3.1.</p>\n<p><em>Solution.</em>\n- Angle $3$ : opposé par le sommet à l'angle $1$, donc $\\widehat{3} = 118°$.\n- Angle $5$ : correspondant de l'angle $1$, donc $\\widehat{5} = 118°$.\n- Angle $6$ : adjacent supplémentaire de l'angle $5$, donc\n  $\\widehat{6} = 180° - 118° = 62°$.</p>\n<p><strong>Exemple 2.</strong> Deux droites $(MN)$ et $(PQ)$ sont coupées par la sécante $(MP)$.\nOn mesure $\\widehat{NMP} = 56°$ et $\\widehat{QPM} = 56°$. Ces deux angles sont\nalternes-internes. Que peut-on conclure ?</p>\n<p><em>Solution.</em> Les angles $\\widehat{NMP}$ et $\\widehat{QPM}$ sont alternes-internes et\nde même mesure. Or, si deux droites coupées par une sécante forment des angles\nalternes-internes égaux, alors ces droites sont parallèles.\nDonc $(MN) \\parallel (PQ)$.</p>\n<p><strong>Exemple 3 (calcul enchaîné).</strong> Trois droites : $(d_1) \\parallel (d_2)$ et\n$(d_3) \\parallel (d_2)$. Une sécante $(s)$ coupe les trois. Elle forme avec\n$(d_1)$ un angle de $41°$. Quel angle forme-t-elle avec $(d_3)$ ?</p>\n<p><em>Solution.</em> Comme $(d_1) \\parallel (d_2)$, l'angle correspondant sur $(d_2)$ vaut\n$41°$. Comme $(d_2) \\parallel (d_3)$, l'angle correspondant sur $(d_3)$ vaut aussi\n$41°$. Donc la sécante forme un angle de $41°$ avec $(d_3)$.</p>\n<p><strong>Exemple 4.</strong> Dans un parallélogramme $ABCD$, $\\widehat{DAB} = 68°$. Utilise les\nangles alternes-internes pour retrouver $\\widehat{ABC}$.</p>\n<p><em>Solution.</em> $(AD) \\parallel (BC)$ et $(AB)$ est une sécante. Les angles\n$\\widehat{DAB}$ et $\\widehat{ABC}$ sont deux angles internes du même côté de la\nsécante $(AB)$ : ils sont donc supplémentaires. Ainsi\n$$\\widehat{ABC} = 180° - 68° = 112°.$$</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li><strong>Correspondants</strong> : même côté de la sécante, l'un interne et l'autre externe\n  (figure en <strong>F</strong>).</li>\n<li><strong>Alternes-internes</strong> : dans la bande, de part et d'autre de la sécante\n  (figure en <strong>Z</strong>).</li>\n<li><strong>Alternes-externes</strong> : hors de la bande, de part et d'autre de la sécante.</li>\n<li><strong>Si les droites sont parallèles</strong> : correspondants égaux, alternes-internes\n  égaux, alternes-externes égaux, internes du même côté supplémentaires.</li>\n<li><strong>Réciproque</strong> : si des angles correspondants (ou alternes-internes, ou\n  alternes-externes) sont égaux, alors les droites sont parallèles.</li>\n<li>Sur une même figure, il n'y a que <strong>deux</strong> valeurs d'angles : $x$ et $180° - x$.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Repère sur une photo de rails de tramway de Casablanca les angles\n  alternes-internes formés par une traverse.</li>\n<li>Vérifie sur un plan de quartier que deux rues sont parallèles en mesurant deux\n  angles correspondants avec une troisième rue.</li>\n<li>Que se passe-t-il si la sécante est <strong>perpendiculaire</strong> aux deux parallèles ?\n  Tous les angles valent $90°$.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Curricula.aspx\">Ministère de l'Éducation nationale du Maroc — programmes et curricula</a></li>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"la-figure-de-reference\">La figure de référence</h2>\n<pre><code>        1 \\  2\n  (d1) ----A----\n        4 \\  3\n           \\\n        5 \\  6\n  (d2) ----B----\n        8 \\  7\n</code></pre>\n<p>Angles <strong>internes</strong> (dans la bande) : $3$, $4$, $5$, $6$.\nAngles <strong>externes</strong> : $1$, $2$, $7$, $8$.</p>\n<h2 id=\"vocabulaire\">Vocabulaire</h2>\n<table>\n<thead>\n<tr>\n<th>Couple</th>\n<th>Définition</th>\n<th>Exemples</th>\n<th>Repère visuel</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Opposés par le sommet</td>\n<td>même sommet, côtés opposés</td>\n<td>$1$ et $3$ ; $2$ et $4$</td>\n<td><strong>X</strong></td>\n</tr>\n<tr>\n<td>Adjacents supplémentaires</td>\n<td>même sommet, un côté commun</td>\n<td>$1$ et $2$</td>\n<td>ligne droite</td>\n</tr>\n<tr>\n<td>Correspondants</td>\n<td>même côté de la sécante, un interne + un externe</td>\n<td>$1$ et $5$ ; $2$ et $6$ ; $3$ et $7$ ; $4$ et $8$</td>\n<td><strong>F</strong></td>\n</tr>\n<tr>\n<td>Alternes-internes</td>\n<td>tous deux internes, de part et d'autre</td>\n<td>$3$ et $5$ ; $4$ et $6$</td>\n<td><strong>Z</strong></td>\n</tr>\n<tr>\n<td>Alternes-externes</td>\n<td>tous deux externes, de part et d'autre</td>\n<td>$1$ et $7$ ; $2$ et $8$</td>\n<td><strong>Z</strong> allongé</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"proprietes-directes-si-d_1-parallel-d_2\">Propriétés directes (si $(d_1) \\parallel (d_2)$)</h2>\n<table>\n<thead>\n<tr>\n<th>Couple d'angles</th>\n<th>Relation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Correspondants</td>\n<td><strong>égaux</strong></td>\n</tr>\n<tr>\n<td>Alternes-internes</td>\n<td><strong>égaux</strong></td>\n</tr>\n<tr>\n<td>Alternes-externes</td>\n<td><strong>égaux</strong></td>\n</tr>\n<tr>\n<td>Internes du même côté</td>\n<td><strong>supplémentaires</strong> ($180°$)</td>\n</tr>\n<tr>\n<td>Opposés par le sommet</td>\n<td>égaux (toujours vrai)</td>\n</tr>\n</tbody>\n</table>\n<p>Sur toute la figure, il n'y a que deux valeurs : $x$ et $180° - x$.</p>\n<h2 id=\"proprietes-reciproques-pour-demontrer-le-parallelisme\">Propriétés réciproques (pour démontrer le parallélisme)</h2>\n<p>Si deux droites coupées par une sécante forment des angles <strong>correspondants</strong>\négaux, <strong>ou</strong> des angles <strong>alternes-internes</strong> égaux, <strong>ou</strong> des angles\n<strong>alternes-externes</strong> égaux, <strong>alors</strong> ces deux droites sont <strong>parallèles</strong>.</p>\n<h2 id=\"mini-memo-de-redaction\">Mini-mémo de rédaction</h2>\n<p>« Les angles $\\widehat{\\ldots}$ et $\\widehat{\\ldots}$ sont <strong>alternes-internes</strong>\nformés par les droites $(d_1)$ et $(d_2)$ et la sécante $(s)$.\nOr $(d_1) \\parallel (d_2)$. Donc ces deux angles ont la même mesure. »</p>\n<p>Pour un parallélisme : « Ces deux angles sont correspondants et de même mesure.\nOr, si deux droites coupées par une sécante forment des angles correspondants\négaux, alors elles sont parallèles. Donc $(d_1) \\parallel (d_2)$. »</p>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Appliquer une propriété directe <strong>sans</strong> savoir que les droites sont\n   parallèles : c'est faux.</li>\n<li>Confondre alternes-internes (<strong>Z</strong>) et correspondants (<strong>F</strong>) : regarde si les\n   deux angles sont du même côté de la sécante ou non.</li>\n<li>Croire que deux angles internes du même côté sont <strong>égaux</strong> : ils sont\n   <strong>supplémentaires</strong> (leur somme fait $180°$).</li>\n</ol>\n<h2 id=\"astuce-de-controle\">Astuce de contrôle</h2>\n<p>Après un calcul, vérifie que toutes tes valeurs se répartissent bien en deux\ngroupes : $x$ et $180° - x$. Si tu obtiens trois valeurs différentes, il y a une\nerreur.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Nommer les couples",
   "diff": "facile",
   "q": "<p>Sur la figure de référence, donne le nom du couple d'angles :\n1. $2$ et $6$ ;\n2. $4$ et $6$ ;\n3. $1$ et $3$ ;\n4. $2$ et $8$ ;\n5. $3$ et $4$ ;\n6. $3$ et $5$.</p>",
   "modele": "<ol>\n<li>$2$ et $6$ : <strong>correspondants</strong>.</li>\n<li>$4$ et $6$ : <strong>alternes-internes</strong>.</li>\n<li>$1$ et $3$ : <strong>opposés par le sommet</strong>.</li>\n<li>$2$ et $8$ : <strong>alternes-externes</strong>.</li>\n<li>$3$ et $4$ : <strong>adjacents supplémentaires</strong>.</li>\n<li>$3$ et $5$ : <strong>alternes-internes</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Angles correspondants",
   "diff": "facile",
   "q": "<p>On suppose $(d_1) \\parallel (d_2)$ et $\\widehat{2} = 55°$.\nCalcule $\\widehat{6}$ en citant la propriété utilisée.</p>",
   "modele": "<p>Les angles $\\widehat{2}$ et $\\widehat{6}$ sont correspondants. Or, si deux droites\nparallèles sont coupées par une sécante, alors les angles correspondants sont de\nmême mesure. Donc $\\widehat{6} = 55°$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Angles alternes-internes",
   "diff": "facile",
   "q": "<p>On suppose $(d_1) \\parallel (d_2)$ et $\\widehat{3} = 104°$.\n1. Calcule $\\widehat{5}$.\n2. Calcule $\\widehat{6}$.</p>",
   "modele": "<ol>\n<li>$\\widehat{3}$ et $\\widehat{5}$ sont alternes-internes et les droites sont\n   parallèles, donc $\\widehat{5} = 104°$.</li>\n<li>$\\widehat{5}$ et $\\widehat{6}$ sont adjacents supplémentaires, donc\n$$\\widehat{6} = 180° - 104° = 76°.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Tous les angles",
   "diff": "facile",
   "q": "<p>On suppose $(d_1) \\parallel (d_2)$ et $\\widehat{1} = 47°$.\nCalcule les sept autres angles de la figure et présente tes résultats dans un\ntableau.</p>",
   "modele": "<p>Avec $\\widehat{1} = 47°$ :</p>\n<table>\n<thead>\n<tr>\n<th>Angle</th>\n<th>Mesure</th>\n<th>Justification</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$\\widehat{2}$</td>\n<td>$133°$</td>\n<td>adjacent supplémentaire de $\\widehat{1}$</td>\n</tr>\n<tr>\n<td>$\\widehat{3}$</td>\n<td>$47°$</td>\n<td>opposé par le sommet à $\\widehat{1}$</td>\n</tr>\n<tr>\n<td>$\\widehat{4}$</td>\n<td>$133°$</td>\n<td>opposé par le sommet à $\\widehat{2}$</td>\n</tr>\n<tr>\n<td>$\\widehat{5}$</td>\n<td>$47°$</td>\n<td>correspondant de $\\widehat{1}$</td>\n</tr>\n<tr>\n<td>$\\widehat{6}$</td>\n<td>$133°$</td>\n<td>correspondant de $\\widehat{2}$</td>\n</tr>\n<tr>\n<td>$\\widehat{7}$</td>\n<td>$47°$</td>\n<td>correspondant de $\\widehat{3}$</td>\n</tr>\n<tr>\n<td>$\\widehat{8}$</td>\n<td>$133°$</td>\n<td>correspondant de $\\widehat{4}$</td>\n</tr>\n</tbody>\n</table>\n<p>Contrôle : deux valeurs seulement, $47°$ et $133°$, avec $47 + 133 = 180$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Internes du même côté",
   "diff": "facile",
   "q": "<p>On suppose $(d_1) \\parallel (d_2)$ et $\\widehat{4} = 121°$.\n1. Quelle est la relation entre $\\widehat{4}$ et $\\widehat{5}$ ?\n2. Calcule $\\widehat{5}$.</p>",
   "modele": "<ol>\n<li>$\\widehat{4}$ et $\\widehat{5}$ sont deux angles <strong>internes situés du même côté</strong>\n   de la sécante : ils sont <strong>supplémentaires</strong>.</li>\n<li>$\\widehat{5} = 180° - 121° = 59°$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Vrai ou faux",
   "diff": "facile",
   "q": "<p>Réponds et justifie.\n1. Deux angles opposés par le sommet sont toujours égaux.\n2. Deux angles correspondants sont toujours égaux.\n3. Si deux angles alternes-internes mesurent $70°$ chacun, les droites sont parallèles.\n4. Si deux droites parallèles sont coupées par une sécante, on obtient au plus\n   deux valeurs d'angles différentes.\n5. Deux angles internes du même côté de la sécante sont toujours égaux.</p>",
   "modele": "<ol>\n<li><strong>Vrai.</strong> C'est vrai sur toute figure, sans condition.</li>\n<li><strong>Faux.</strong> Ils sont égaux <strong>uniquement</strong> si les deux droites sont parallèles.</li>\n<li><strong>Vrai.</strong> C'est la réciproque pour les angles alternes-internes.</li>\n<li><strong>Vrai.</strong> On n'obtient que $x$ et $180° - x$.</li>\n<li><strong>Faux.</strong> Ils sont supplémentaires, donc égaux seulement s'ils valent $90°$.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Démontrer un parallélisme",
   "diff": "",
   "q": "<p>Deux droites $(d_1)$ et $(d_2)$ sont coupées par une sécante en $A$ et $B$. On\nmesure $\\widehat{3} = 68°$ et $\\widehat{5} = 68°$.\n1. Nomme le couple formé par $\\widehat{3}$ et $\\widehat{5}$.\n2. Rédige la démonstration complète montrant que $(d_1) \\parallel (d_2)$.</p>",
   "modele": "<ol>\n<li>$\\widehat{3}$ et $\\widehat{5}$ sont des angles <strong>alternes-internes</strong>.</li>\n<li>Démonstration : « On sait que $\\widehat{3} = \\widehat{5} = 68°$ et que ces deux\n   angles sont alternes-internes, formés par les droites $(d_1)$ et $(d_2)$ et la\n   sécante $(s)$. Or, si deux droites coupées par une sécante forment des angles\n   alternes-internes de même mesure, alors ces droites sont parallèles.\n   Donc $(d_1) \\parallel (d_2)$. »</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Droites non parallèles",
   "diff": "",
   "q": "<p>Sur une figure, on mesure $\\widehat{2} = 64°$ et $\\widehat{6} = 71°$.\n1. Ces deux angles sont-ils correspondants ?\n2. Que peut-on en conclure sur $(d_1)$ et $(d_2)$ ? Justifie.</p>",
   "modele": "<ol>\n<li><strong>Oui</strong>, $\\widehat{2}$ et $\\widehat{6}$ sont correspondants.</li>\n<li>Si $(d_1)$ et $(d_2)$ étaient parallèles, ces angles seraient égaux. Or\n   $64° \\ne 71°$. Donc $(d_1)$ et $(d_2)$ <strong>ne sont pas parallèles</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Calcul enchaîné",
   "diff": "",
   "q": "<p>$(d_1) \\parallel (d_2)$ et $\\widehat{7} = 133°$.\n1. Calcule $\\widehat{5}$ en utilisant les angles opposés par le sommet.\n2. Calcule $\\widehat{3}$.\n3. Calcule $\\widehat{2}$.\n4. Vérifie que tes résultats ne comportent que deux valeurs distinctes.</p>",
   "modele": "<ol>\n<li>$\\widehat{5}$ est opposé par le sommet à $\\widehat{7}$, donc $\\widehat{5} = 133°$.</li>\n<li>$\\widehat{3}$ et $\\widehat{5}$ sont alternes-internes et les droites sont\n   parallèles : $\\widehat{3} = 133°$.</li>\n<li>$\\widehat{2}$ et $\\widehat{3}$ sont adjacents supplémentaires :\n$$\\widehat{2} = 180° - 133° = 47°.$$</li>\n<li>On n'a obtenu que $133°$ et $47°$, et $133 + 47 = 180$ : c'est cohérent.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Trouver l'inconnue",
   "diff": "",
   "q": "<p>$(d_1) \\parallel (d_2)$. On sait que $\\widehat{2} = (2 \\times x + 10)°$ et\n$\\widehat{6} = 74°$.\n1. Écris l'équation vérifiée par $x$.\n2. Résous-la.\n3. Calcule $\\widehat{3}$.</p>",
   "modele": "<ol>\n<li>$\\widehat{2}$ et $\\widehat{6}$ sont correspondants et les droites sont\n   parallèles, donc $2 \\times x + 10 = 74$.</li>\n<li>$2 \\times x = 74 - 10 = 64$, donc $x = \\dfrac{64}{2} = 32$.\n   Vérification : $2 \\times 32 + 10 = 74$.</li>\n<li>$\\widehat{2} = 74°$ et $\\widehat{3}$ est son adjacent supplémentaire :\n   $\\widehat{3} = 180° - 74° = 106°$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Trois parallèles",
   "diff": "",
   "q": "<p>Trois droites $(d_1)$, $(d_2)$, $(d_3)$ sont parallèles entre elles. Une sécante\n$(s)$ les coupe en $A$, $B$, $C$. La sécante forme avec $(d_1)$ un angle de $38°$\n(angle « en haut à droite »).\n1. Quelle est la mesure de l'angle « en haut à droite » formé avec $(d_2)$ ?\n2. Et avec $(d_3)$ ? Justifie par un enchaînement de propriétés.\n3. Quelle est la mesure de l'angle « en bas à droite » formé avec $(d_3)$ ?</p>",
   "modele": "<ol>\n<li>Les deux angles sont correspondants et $(d_1) \\parallel (d_2)$ : la mesure est\n   $38°$.</li>\n<li>De même, $(d_2) \\parallel (d_3)$ donne encore $38°$ pour l'angle correspondant\n   sur $(d_3)$. Enchaînement : $38° \\to 38° \\to 38°$.</li>\n<li>L'angle « en bas à droite » sur $(d_3)$ est adjacent supplémentaire de celui\n   « en haut à droite » :\n$$180° - 38° = 142°.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Parallélogramme et angles",
   "diff": "",
   "q": "<p>$ABCD$ est un parallélogramme tel que $\\widehat{DAB} = 73°$.\n1. Précise pourquoi $(AD) \\parallel (BC)$.\n2. En considérant $(AB)$ comme sécante, calcule $\\widehat{ABC}$ à l'aide des\n   angles internes du même côté.\n3. Calcule $\\widehat{BCD}$ et $\\widehat{CDA}$.</p>",
   "modele": "<ol>\n<li>Dans un parallélogramme, les côtés opposés sont parallèles, donc\n   $(AD) \\parallel (BC)$.</li>\n<li>Avec la sécante $(AB)$, les angles $\\widehat{DAB}$ et $\\widehat{ABC}$ sont deux\n   angles internes du même côté : ils sont supplémentaires, donc\n$$\\widehat{ABC} = 180° - 73° = 107°.$$</li>\n<li>Les angles opposés d'un parallélogramme sont égaux :\n   $\\widehat{BCD} = \\widehat{DAB} = 73°$ et $\\widehat{CDA} = \\widehat{ABC} = 107°$.</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Les rues d'Agadir",
   "diff": "difficile",
   "q": "<p>Deux rues parallèles de la corniche d'Agadir sont traversées par une avenue en\ndiagonale. Au premier croisement, l'angle entre l'avenue et la rue (côté mer, à\ndroite) mesure $57°$.\n1. Quelle est la mesure de l'angle correspondant au second croisement ? Justifie.\n2. Quelle est la mesure de l'angle alterne-interne du premier angle ?\n3. Un technicien mesure au second croisement un angle de $61°$ à l'endroit où il\n   attendait $57°$. Que peut-il en déduire sur les deux rues ?</p>",
   "modele": "<ol>\n<li>$57°$. Les deux rues sont parallèles et l'avenue est une sécante : les angles\n   correspondants sont de même mesure.</li>\n<li>L'angle alterne-interne mesure aussi $57°$ (propriété des alternes-internes\n   entre deux parallèles).</li>\n<li>Les angles correspondants devraient être égaux. Comme $61° \\ne 57°$, les deux\n   rues <strong>ne sont pas exactement parallèles</strong> (ou bien la mesure comporte une\n   erreur).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Les rails du tramway",
   "diff": "difficile",
   "q": "<p>Deux rails parallèles d'un tramway de Casablanca sont reliés par une traverse\noblique. La traverse forme avec le premier rail un angle de $68°$ d'un côté.\n1. Calcule les quatre angles formés au premier croisement.\n2. Calcule les quatre angles formés au second croisement.\n3. Explique en une phrase pourquoi l'ouvrier n'a besoin de mesurer qu'un seul\n   angle.</p>",
   "modele": "<ol>\n<li>Au premier croisement : $68°$, puis $180° - 68° = 112°$ pour l'angle adjacent,\n   puis $68°$ et $112°$ pour les deux angles opposés par le sommet. Les quatre\n   angles sont donc $68°$, $112°$, $68°$, $112°$.</li>\n<li>Au second croisement, les angles correspondants sont égaux à ceux du premier :\n   on retrouve $68°$, $112°$, $68°$, $112°$.</li>\n<li>Une seule mesure suffit : les rails étant parallèles, tous les autres angles\n   s'en déduisent, car ils valent $68°$ ou $180° - 68° = 112°$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Démonstration en deux temps",
   "diff": "difficile",
   "q": "<p>Sur une figure, $(d_1)$ et $(d_2)$ sont coupées par la sécante $(s)$. On mesure\n$\\widehat{1} = 112°$ et $\\widehat{6} = 68°$.\n1. Calcule $\\widehat{4}$ (adjacent supplémentaire de $\\widehat{1}$).\n2. Nomme le couple formé par $\\widehat{4}$ et $\\widehat{6}$ et compare leurs mesures.\n3. Conclus sur le parallélisme de $(d_1)$ et $(d_2)$.</p>",
   "modele": "<ol>\n<li>$\\widehat{4} = 180° - 112° = 68°$.</li>\n<li>$\\widehat{4}$ et $\\widehat{6}$ sont <strong>alternes-internes</strong>, et\n   $\\widehat{4} = \\widehat{6} = 68°$ : ils sont égaux.</li>\n<li>Or, si deux droites coupées par une sécante forment des angles\n   alternes-internes de même mesure, alors elles sont parallèles.\n   Donc $(d_1) \\parallel (d_2)$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Chasse aux erreurs",
   "diff": "difficile",
   "q": "<p>Youssef écrit : « Sur ma figure, $\\widehat{4} = 80°$ et $\\widehat{5} = 80°$. Ces\ndeux angles sont internes du même côté de la sécante et ils sont égaux, donc\n$(d_1) \\parallel (d_2)$. »\n1. Repère l'erreur de raisonnement.\n2. Quelle relation devraient vérifier $\\widehat{4}$ et $\\widehat{5}$ si les droites\n   étaient parallèles ?\n3. Si $\\widehat{4} = 80°$ et si les droites sont parallèles, quelle est la vraie\n   valeur de $\\widehat{5}$ ?</p>",
   "modele": "<ol>\n<li>Erreur : $\\widehat{4}$ et $\\widehat{5}$ sont deux angles internes <strong>du même\n   côté</strong> de la sécante. Ce couple ne sert pas à prouver le parallélisme par\n   égalité : la réciproque s'applique aux correspondants, aux alternes-internes ou\n   aux alternes-externes.</li>\n<li>Si les droites étaient parallèles, $\\widehat{4}$ et $\\widehat{5}$ seraient\n   <strong>supplémentaires</strong> : $\\widehat{4} + \\widehat{5} = 180°$.</li>\n<li>Si $\\widehat{4} = 80°$ et si les droites sont parallèles, alors\n$$\\widehat{5} = 180° - 80° = 100°.$$\n   Le fait que Youssef ait mesuré $80°$ montre au contraire que ses droites ne\n   sont pas parallèles.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Le toit et la charpente",
   "diff": "difficile",
   "q": "<p>Sur la charpente d'un riad de Fès, deux poutres $(P_1)$ et $(P_2)$ sont parallèles.\nUne entretoise oblique les relie. Elle forme avec $(P_1)$ deux angles dont l'un\nmesure $34°$.\n1. Donne la mesure du second angle formé avec $(P_1)$.\n2. Donne les mesures des deux angles formés avec $(P_2)$.\n3. Le charpentier veut que l'entretoise forme un angle de $90°$ avec les deux\n   poutres. Est-ce possible ? Que devient alors la figure ?</p>",
   "modele": "<ol>\n<li>Les deux angles formés avec $(P_1)$ sont adjacents supplémentaires :\n$$180° - 34° = 146°.$$</li>\n<li>Avec $(P_2)$, les angles correspondants sont égaux à ceux formés avec $(P_1)$ :\n   on retrouve $34°$ et $146°$.</li>\n<li><strong>Oui, c'est possible</strong> : il suffit que l'entretoise soit perpendiculaire à\n   $(P_1)$. Comme $(P_1) \\parallel (P_2)$, elle est alors aussi perpendiculaire à\n   $(P_2)$. Les huit angles de la figure valent tous $90°$ : la figure devient un\n   rectangle.</li>\n</ol>",
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
   "q": "<p>$(d_1) \\parallel (d_2)$, coupées par une sécante $(s)$ en $A$ et $B$. On note\n$\\widehat{4} = (3 \\times x)°$ et $\\widehat{6} = (x + 40)°$ (la numérotation est celle\nde la figure de référence).\n1. Précise le nom du couple $(\\widehat{4}, \\widehat{6})$ et la relation qui les lie.\n2. Écris l'équation vérifiée par $x$ et résous-la.\n3. Calcule $\\widehat{4}$ et $\\widehat{6}$, puis vérifie ta réponse.\n4. Calcule $\\widehat{3}$ et $\\widehat{5}$.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Connaître le vocabulaire</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Appliquer la propriété des correspondants</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Appliquer la propriété des alternes-internes</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Calculer tous les angles d'une figure</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Utiliser les angles internes du même côté</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Distinguer propriété et réciproque</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Raisonner : démontrer un parallélisme</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Raisonner : conclure une non-égalité</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Enchaîner des propriétés</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Calculer avec une inconnue</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Enchaîner sur trois parallèles</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Relier au parallélogramme</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser une situation réelle</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Calculer huit angles, communiquer</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Démonstration en deux étapes</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Analyser une erreur de raisonnement</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Résoudre un problème technique</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Synthèse : équation et angles</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$\\widehat{4}$ et $\\widehat{6}$ sont <strong>alternes-internes</strong>. Comme\n   $(d_1) \\parallel (d_2)$, ils sont <strong>de même mesure</strong>.</li>\n<li>Équation : $3 \\times x = x + 40$.\n   Donc $3x - x = 40$, soit $2x = 40$ et $x = \\dfrac{40}{2} = 20$.</li>\n<li>$\\widehat{4} = 3 \\times 20 = 60°$ et $\\widehat{6} = 20 + 40 = 60°$.\n   Vérification : les deux mesures sont bien égales.</li>\n<li>$\\widehat{3}$ est adjacent supplémentaire de $\\widehat{4}$ :\n   $\\widehat{3} = 180° - 60° = 120°$.\n   $\\widehat{5}$ est adjacent supplémentaire de $\\widehat{6}$ :\n   $\\widehat{5} = 180° - 60° = 120°$.\n   Contrôle : la figure ne comporte que les valeurs $60°$ et $120°$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M16",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Rapporteur et règle exigés</p>\n<p>Pour tout le devoir, on utilise la numérotation suivante : deux droites $(d_1)$ et\n$(d_2)$ sont coupées par une sécante $(s)$ en $A$ et $B$.</p>\n<pre><code>        1 \\  2\n  (d1) ----A----\n        4 \\  3\n           \\\n        5 \\  6\n  (d2) ----B----\n        8 \\  7\n</code></pre>\n<h2 id=\"exercice-1-6-points-calculer-tous-les-angles\">Exercice 1 (6 points) — Calculer tous les angles</h2>\n<p>On suppose $(d_1) \\parallel (d_2)$ et $\\widehat{2} = 126°$.</p>\n<ol>\n<li>Nomme le couple formé par $\\widehat{2}$ et $\\widehat{6}$, puis donne $\\widehat{6}$.</li>\n<li>Nomme le couple formé par $\\widehat{3}$ et $\\widehat{5}$.</li>\n<li>Calcule $\\widehat{3}$, $\\widehat{5}$, $\\widehat{1}$ et $\\widehat{7}$ en citant à\n   chaque fois la propriété utilisée.</li>\n<li>Vérifie que la figure ne comporte que deux valeurs d'angles.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>« correspondants » ($0{,}5$ pt) ; $\\widehat{6} = 126°$ ($0{,}5$ pt)</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>« alternes-internes »</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$\\widehat{3} = 54°$, $\\widehat{5} = 54°$, $\\widehat{1} = 54°$, $\\widehat{7} = 54°$ ($0{,}75$ pt chacun)</td>\n<td>3</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Deux valeurs : $54°$ et $126°$, somme $180°$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-demontrer-un-parallelisme\">Exercice 2 (5 points) — Démontrer un parallélisme</h2>\n<p>Sur une figure, on mesure $\\widehat{1} = 105°$ et $\\widehat{6} = 75°$. On ne sait\npas encore si $(d_1)$ et $(d_2)$ sont parallèles.</p>\n<ol>\n<li>Calcule $\\widehat{4}$ en justifiant.</li>\n<li>Nomme le couple formé par $\\widehat{4}$ et $\\widehat{6}$.</li>\n<li>Compare leurs mesures, puis démontre que $(d_1) \\parallel (d_2)$.</li>\n<li>Ali affirme : « Comme $\\widehat{1} \\ne \\widehat{6}$, les droites ne sont pas\n   parallèles. » Explique pourquoi son raisonnement est faux.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$\\widehat{4} = 75°$ avec justification</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>« alternes-internes »</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Égalité constatée + réciproque énoncée + conclusion</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$\\widehat{1}$ et $\\widehat{6}$ ne forment pas un couple utilisable</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-probleme-la-route-de-fes\">Exercice 3 (5 points) — Problème : la route de Fès</h2>\n<p>Deux routes parallèles de la périphérie de Fès sont traversées par une piste\ncyclable rectiligne. Au premier croisement, la piste forme avec la route un angle\nde $49°$ du côté de la ville.</p>\n<ol>\n<li>Quelle est la mesure de l'autre angle formé au premier croisement ? Justifie.</li>\n<li>Quelle est la mesure de l'angle correspondant au second croisement ? Justifie.</li>\n<li>Un géomètre mesure au second croisement $52°$ à cet endroit. Que peut-il\n   conclure sur les deux routes ?</li>\n<li>Le géomètre facture $250$ DH par croisement contrôlé et il en contrôle $6$.\n   Calcule le montant de sa facture.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$131°$ (angles adjacents supplémentaires)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$49°$ (angles correspondants entre parallèles)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Les routes ne sont pas exactement parallèles</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$1\\,500$ DH</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-4-points-equation-et-angles\">Exercice 4 (4 points) — Équation et angles</h2>\n<p>$(d_1) \\parallel (d_2)$. On donne $\\widehat{2} = (4 \\times x + 6)°$ et\n$\\widehat{6} = (2 \\times x + 40)°$.</p>\n<ol>\n<li>Nomme le couple formé par ces deux angles et écris l'équation vérifiée par $x$.</li>\n<li>Résous l'équation.</li>\n<li>Calcule $\\widehat{2}$ et $\\widehat{6}$, puis vérifie.</li>\n<li>Calcule $\\widehat{5}$.</li>\n</ol>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>« correspondants » + équation $4x + 6 = 2x + 40$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$x = 17$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$\\widehat{2} = \\widehat{6} = 74°$ + vérification</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$\\widehat{5} = 106°$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>$\\widehat{2}$ et $\\widehat{6}$ sont <strong>correspondants</strong>. Comme\n   $(d_1) \\parallel (d_2)$, ils sont égaux : $\\widehat{6} = 126°$.</li>\n<li>$\\widehat{3}$ et $\\widehat{5}$ sont <strong>alternes-internes</strong>.</li>\n<li>\n<ul>\n<li>$\\widehat{3} = 180° - 126° = 54°$ (adjacent supplémentaire de $\\widehat{2}$).</li>\n<li>$\\widehat{5} = 54°$ (alterne-interne de $\\widehat{3}$, droites parallèles).</li>\n<li>$\\widehat{1} = 54°$ (adjacent supplémentaire de $\\widehat{2}$).</li>\n<li>$\\widehat{7} = 54°$ (correspondant de $\\widehat{3}$).</li>\n</ul>\n</li>\n<li>La figure ne contient que $54°$ et $126°$, et $54 + 126 = 180$ : cohérent.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$\\widehat{1}$ et $\\widehat{4}$ sont adjacents supplémentaires, donc\n$$\\widehat{4} = 180° - 105° = 75°.$$</li>\n<li>$\\widehat{4}$ et $\\widehat{6}$ sont <strong>alternes-internes</strong>.</li>\n<li>On constate $\\widehat{4} = \\widehat{6} = 75°$. Or, si deux droites coupées par\n   une sécante forment des angles alternes-internes de même mesure, alors elles\n   sont parallèles. Donc $(d_1) \\parallel (d_2)$.</li>\n<li>$\\widehat{1}$ est externe et $\\widehat{6}$ est interne, mais ils sont de part et\n   d'autre de la sécante : ils ne forment ni un couple d'angles correspondants, ni\n   d'alternes-internes, ni d'alternes-externes. Aucune propriété ne dit qu'ils\n   devraient être égaux ; entre deux parallèles ils sont d'ailleurs\n   supplémentaires ($105° + 75° = 180°$).</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>Les deux angles formés au premier croisement sont adjacents supplémentaires :\n$$180° - 49° = 131°.$$</li>\n<li>$49°$ : les deux routes sont parallèles et la piste est une sécante, donc les\n   angles correspondants sont de même mesure.</li>\n<li>Il devrait trouver $49°$. Comme $52° \\ne 49°$, les deux routes <strong>ne sont pas\n   exactement parallèles</strong>.</li>\n<li>Facture : $250 \\times 6 = 1\\,500$ DH.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>$\\widehat{2}$ et $\\widehat{6}$ sont <strong>correspondants</strong> ; comme\n   $(d_1) \\parallel (d_2)$, ils sont égaux :\n$$4 \\times x + 6 = 2 \\times x + 40.$$</li>\n<li>$4x - 2x = 40 - 6$, donc $2x = 34$ et $x = \\dfrac{34}{2} = 17$.</li>\n<li>$\\widehat{2} = 4 \\times 17 + 6 = 68 + 6 = 74°$ et\n   $\\widehat{6} = 2 \\times 17 + 40 = 34 + 40 = 74°$. Les deux valeurs sont bien\n   égales : la solution est correcte.</li>\n<li>$\\widehat{5}$ est l'adjacent supplémentaire de $\\widehat{6}$ :\n$$\\widehat{5} = 180° - 74° = 106°.$$</li>\n</ol>"
 }
},

{
 "id": "m17",
 "domaine": "maths",
 "unite": 17,
 "theme": "Géométrie",
 "tag": "M17",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M17 — Cercle et disque",
 "duree": "6 h",
 "semestre": "2",
 "objectifs": [
  "Distinguer cercle et disque, et utiliser le vocabulaire exact.",
  "Déterminer la position d'un point, puis d'une droite, par rapport à un cercle.",
  "Calculer le périmètre d'un cercle et l'aire d'un disque.",
  "Calculer la longueur d'un arc et l'aire d'un secteur.",
  "Reconnaître les positions relatives de deux cercles."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Sur la place Jemaa el-Fna à Marrakech, un vendeur installe une table ronde de\n$1{,}20$ m de diamètre. Il veut entourer le <strong>bord</strong> d'une bande de cuivre (il a\nbesoin du <strong>périmètre</strong>) et recouvrir le <strong>dessus</strong> d'une plaque de verre (il a\nbesoin de l'<strong>aire</strong>). Le bord, c'est un <strong>cercle</strong> ; le dessus, c'est un\n<strong>disque</strong>.</p>\n<p><strong>Question.</strong> Combien de mètres de cuivre et combien de mètres carrés de verre\nfaut-il ?</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Prends trois objets ronds (pièce de $1$ DH, couvercle, assiette).\nMesure le <strong>diamètre</strong> $d$ et le <strong>périmètre</strong> $P$ (avec un fil déroulé sur la\nrègle), puis calcule $\\dfrac{P}{d}$.</p>\n<p><strong>Observation.</strong> On trouve à chaque fois un nombre proche de $3{,}14$, quel que\nsoit l'objet.</p>\n<p><strong>Conclusion.</strong> Le quotient du périmètre par le diamètre est <strong>toujours le même</strong>.\nOn l'appelle <strong>pi</strong> et on le note $\\pi$. On retient $\\pi \\approx 3{,}14$.</p>\n<p><strong>Activité 2.</strong> Trace un cercle de centre $O$ et de rayon $3$ cm, puis place $A$\navec $OA = 2$ cm, $B$ avec $OB = 3$ cm, $C$ avec $OC = 5$ cm.</p>\n<p><strong>Observation.</strong> $A$ est <strong>à l'intérieur</strong>, $B$ est <strong>sur</strong> le cercle, $C$ est\n<strong>à l'extérieur</strong> : tout se joue sur la comparaison de la distance au centre et\ndu rayon.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-vocabulaire\">3.1 Vocabulaire</h3>\n<blockquote>\n<p><strong>Définitions.</strong> Soit $O$ un point et $r$ un nombre positif.\n- Le <strong>cercle</strong> de centre $O$ et de rayon $r$, noté $(\\mathcal{C})$, est\n  l'ensemble des points situés <strong>à la distance $r$</strong> de $O$. C'est une <strong>ligne</strong>.\n- Le <strong>disque</strong> de centre $O$ et de rayon $r$ est l'ensemble des points situés\n  à une distance <strong>inférieure ou égale</strong> à $r$ de $O$. C'est une <strong>surface</strong>.</p>\n<p><strong>Vocabulaire.</strong>\n- <strong>Rayon</strong> : segment du centre à un point du cercle, $[OA]$.\n- <strong>Corde</strong> : segment joignant deux points du cercle, $[AB]$.\n- <strong>Diamètre</strong> : corde passant par le centre ; $d = 2 \\times r$ et $r = \\dfrac{d}{2}$.\n- <strong>Arc</strong> $\\overset{\\frown}{AB}$ : portion de cercle entre deux points.\n- <strong>Secteur circulaire</strong> : portion de disque limitée par deux rayons et un arc.</p>\n</blockquote>\n<pre><code>                 A\n            __---*---__\n         /       |       \\\n       /         |         \\        [OA] : un rayon\n   M *-----------O----------* N     [MN] : un diametre (passe par O)\n       \\                   /        [AB] : une corde\n         \\                /         arc AB : portion de cercle de A a B\n            __---*---__\n                 B\n</code></pre>\n<p>Sur ce schema : $O$ est le centre ; $A$, $B$, $M$, $N$ sont des points du cercle ;\n$OA = OB = OM = ON = r$ et $MN = 2 \\times r$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Confondre <strong>cercle</strong> et <strong>disque</strong>. On parle du\n<strong>périmètre du cercle</strong> (une longueur, en cm) et de l'<strong>aire du disque</strong> (une\nsurface, en cm²). Le mot « rayon » désigne aussi bien le segment que sa longueur.</p>\n<h3 id=\"32-position-dun-point-et-dun-cercle\">3.2 Position d'un point et d'un cercle</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Soit $(\\mathcal{C})$ le cercle de centre $O$ et de rayon $r$, et\n$M$ un point du plan.\n- Si $OM &lt; r$, alors $M$ est <strong>à l'intérieur</strong> du cercle.\n- Si $OM = r$, alors $M$ <strong>appartient</strong> au cercle.\n- Si $OM &gt; r$, alors $M$ est <strong>à l'extérieur</strong> du cercle.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Cercle de rayon $4{,}5$ cm : si $OM = 4{,}5$ cm, $M$ est sur le\ncercle ; si $ON = 6$ cm, $N$ est à l'extérieur car $6 &gt; 4{,}5$.</p>\n<h3 id=\"33-position-dune-droite-et-dun-cercle\">3.3 Position d'une droite et d'un cercle</h3>\n<p>On appelle $H$ le pied de la perpendiculaire menée de $O$ à la droite $(d)$. La\nlongueur $OH$ est la <strong>distance du centre à la droite</strong>.</p>\n<blockquote>\n<p><strong>Propriété.</strong> Soit $(\\mathcal{C})$ de centre $O$ et de rayon $r$, et $(d)$ une\ndroite. On note $OH$ la distance de $O$ à $(d)$.\n- Si $OH &lt; r$ : la droite est <strong>sécante</strong> au cercle. Elle le coupe en <strong>deux\n  points</strong>.\n- Si $OH = r$ : la droite est <strong>tangente</strong> au cercle. Elle le touche en <strong>un\n  seul point</strong>, appelé <strong>point de contact</strong>.\n- Si $OH &gt; r$ : la droite est <strong>extérieure</strong> au cercle. Aucun point commun.</p>\n<p><strong>Propriété (tangente et rayon).</strong> Une droite tangente à un cercle en un point\n$T$ est <strong>perpendiculaire</strong> au rayon $[OT]$ en $T$.</p>\n<p>Réciproquement, la droite perpendiculaire au rayon $[OT]$ en $T$ est la\n<strong>tangente</strong> au cercle en $T$.</p>\n</blockquote>\n<p><strong>Méthode (pas à pas) — construire la tangente en $T$.</strong>\n1. Placer le point $T$ sur le cercle.\n2. Tracer le rayon $[OT]$.\n3. Tracer la perpendiculaire à $(OT)$ passant par $T$ : c'est la tangente.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire qu'une droite qui « frôle » le cercle est\ntangente. Il faut le vérifier : la distance $OH$ doit être <strong>exactement</strong> égale au\nrayon.</p>\n<h3 id=\"34-perimetre-du-cercle-et-aire-du-disque\">3.4 Périmètre du cercle et aire du disque</h3>\n<blockquote>\n<p><strong>Formules.</strong> Pour un cercle de rayon $r$ et de diamètre $d = 2r$ :\n$$P = 2 \\times \\pi \\times r = \\pi \\times d$$\nPour le disque correspondant :\n$$\\mathcal{A} = \\pi \\times r \\times r$$\nOn prendra $\\pi \\approx 3{,}14$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Table de diamètre $1{,}20$ m, donc $r = 0{,}60$ m. Cuivre du bord :\n$P = 3{,}14 \\times 1{,}20 \\approx 3{,}77$ m. Verre du dessus :\n$\\mathcal{A} = 3{,}14 \\times 0{,}60 \\times 0{,}60 \\approx 1{,}13$ m².</p>\n<h3 id=\"35-longueur-dun-arc-et-aire-dun-secteur\">3.5 Longueur d'un arc et aire d'un secteur</h3>\n<p>Un tour complet vaut $360°$. Un arc d'angle au centre $\\alpha$ représente donc la\nfraction $\\dfrac{\\alpha}{360}$ du cercle.</p>\n<blockquote>\n<p><strong>Formules.</strong> Pour un angle au centre de $\\alpha$ degrés dans un cercle de rayon $r$ :\n$$L_{\\text{arc}} = \\dfrac{\\alpha}{360} \\times 2 \\times \\pi \\times r$$\n$$\\mathcal{A}_{\\text{secteur}} = \\dfrac{\\alpha}{360} \\times \\pi \\times r \\times r$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> Cercle de rayon $10$ cm et angle au centre $\\alpha = 90°$.\nComme $\\dfrac{90}{360} = \\dfrac{1}{4}$ :\n$$L = \\dfrac{1}{4} \\times 2 \\times 3{,}14 \\times 10 = \\dfrac{62{,}8}{4} = 15{,}7 \\text{ cm},$$\n$$\\mathcal{A} = \\dfrac{1}{4} \\times 3{,}14 \\times 10 \\times 10 = \\dfrac{314}{4} = 78{,}5 \\text{ cm}^2.$$</p>\n<h3 id=\"36-positions-relatives-de-deux-cercles\">3.6 Positions relatives de deux cercles</h3>\n<p>Soient deux cercles de centres $O$ et $O'$, de rayons $R$ et $r$ (avec $R \\ge r$).\nOn note $d = OO'$.</p>\n<table>\n<thead>\n<tr>\n<th>Condition sur $d$</th>\n<th>Position</th>\n<th>Points communs</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$d &gt; R + r$</td>\n<td>cercles <strong>extérieurs</strong></td>\n<td>$0$</td>\n</tr>\n<tr>\n<td>$d = R + r$</td>\n<td><strong>tangents extérieurement</strong></td>\n<td>$1$</td>\n</tr>\n<tr>\n<td>$R - r &lt; d &lt; R + r$</td>\n<td>cercles <strong>sécants</strong></td>\n<td>$2$</td>\n</tr>\n<tr>\n<td>$d = R - r$ (avec $d \\ne 0$)</td>\n<td><strong>tangents intérieurement</strong></td>\n<td>$1$</td>\n</tr>\n<tr>\n<td>$d &lt; R - r$</td>\n<td>l'un est <strong>intérieur</strong> à l'autre</td>\n<td>$0$</td>\n</tr>\n<tr>\n<td>$d = 0$</td>\n<td>cercles <strong>concentriques</strong></td>\n<td>$0$</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Exemple.</strong> $R = 5$ cm et $r = 3$ cm. Si $d = 8 = R + r$ : tangents\nextérieurement. Si $d = 6$, comme $2 &lt; 6 &lt; 8$ : sécants.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Une roue de vélo a un diamètre de $70$ cm. Un tour correspond au\npérimètre : $P = 3{,}14 \\times 70 = 219{,}8$ cm. En $10$ tours :\n$219{,}8 \\times 10 = 2\\,198$ cm, soit $21{,}98$ m.</p>\n<p><strong>Exemple 2.</strong> Un bassin circulaire d'un jardin de Rabat a un rayon de $4$ m.\nCalcule l'aire de sa surface, puis le coût du bâchage à $95$ DH le mètre carré.</p>\n<p><em>Solution.</em> $\\mathcal{A} = 3{,}14 \\times 4 \\times 4 = 50{,}24$ m².\nCoût : $50{,}24 \\times 95 = 4\\,772{,}80$ DH.</p>\n<p><strong>Exemple 3.</strong> Cercle de rayon $6$ cm ; une droite $(d)$ vérifie $OH = 6$ cm.</p>\n<p><em>Solution.</em> Comme $OH = r$, la droite est <strong>tangente</strong> au cercle en $H$. La\ntangente étant perpendiculaire au rayon au point de contact, l'angle entre $[OH]$\net $(d)$ mesure $90°$.</p>\n<p><strong>Exemple 4.</strong> Une part de pizza est un secteur de rayon $15$ cm et d'angle au\ncentre $60°$. Calcule la longueur de sa croûte (l'arc) et son aire.</p>\n<p><em>Solution.</em> $\\dfrac{60}{360} = \\dfrac{1}{6}$.\n$$L = \\dfrac{1}{6} \\times 2 \\times 3{,}14 \\times 15 = \\dfrac{94{,}2}{6} = 15{,}7 \\text{ cm}.$$\n$$\\mathcal{A} = \\dfrac{1}{6} \\times 3{,}14 \\times 15 \\times 15 = \\dfrac{706{,}5}{6} = 117{,}75 \\text{ cm}^2.$$</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Le <strong>cercle</strong> est une ligne ; le <strong>disque</strong> est une surface.</li>\n<li>$d = 2 \\times r$ et $r = \\dfrac{d}{2}$.</li>\n<li>Point $M$ : $OM &lt; r$ intérieur, $OM = r$ sur le cercle, $OM &gt; r$ extérieur.</li>\n<li>Droite : $OH &lt; r$ sécante, $OH = r$ tangente, $OH &gt; r$ extérieure.</li>\n<li>La tangente en $T$ est <strong>perpendiculaire</strong> au rayon $[OT]$.</li>\n<li>$P = 2 \\pi r = \\pi d$ et $\\mathcal{A} = \\pi r r$, avec $\\pi \\approx 3{,}14$.</li>\n<li>Arc et secteur : on multiplie par la fraction $\\dfrac{\\alpha}{360}$.</li>\n<li>Deux cercles : comparer $d = OO'$ avec $R + r$ et $R - r$.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Mesure le diamètre d'un pneu, puis la distance parcourue en $100$ tours.</li>\n<li>Cherche dans un zellige deux cercles tangents et deux cercles sécants.</li>\n<li>Le nombre $\\pi$ ne s'écrit pas exactement : on utilise $3{,}14$ ou $\\dfrac{22}{7}$.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/Fr/Pages/Curricula.aspx\">Ministère de l'Éducation nationale du Maroc — programmes et curricula</a></li>\n<li><a href=\"https://www.men.gov.ma/\">Ministère de l'Éducation nationale du Maroc</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"definitions-cles\">Définitions clés</h2>\n<ul>\n<li><strong>Cercle</strong> de centre $O$, rayon $r$ : points à la distance $r$ de $O$ ; c'est\n  une <strong>ligne</strong>.</li>\n<li><strong>Disque</strong> : points à une distance inférieure ou égale à $r$ ; c'est une\n  <strong>surface</strong>.</li>\n<li><strong>Rayon</strong> $[OA]$ ; <strong>corde</strong> $[AB]$ ; <strong>diamètre</strong> (corde passant par le centre)\n  avec $d = 2 \\times r$ et $r = \\dfrac{d}{2}$.</li>\n<li><strong>Arc</strong> $\\overset{\\frown}{AB}$ : portion de cercle. <strong>Secteur</strong> : portion de\n  disque entre deux rayons.</li>\n</ul>\n<h2 id=\"position-dun-point-m\">Position d'un point $M$</h2>\n<table>\n<thead>\n<tr>\n<th>Condition</th>\n<th>Position de $M$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$OM &lt; r$</td>\n<td>intérieur au cercle</td>\n</tr>\n<tr>\n<td>$OM = r$</td>\n<td>sur le cercle</td>\n</tr>\n<tr>\n<td>$OM &gt; r$</td>\n<td>extérieur au cercle</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"position-dune-droite-d\">Position d'une droite $(d)$</h2>\n<p>$H$ est le pied de la perpendiculaire à $(d)$ passant par $O$.</p>\n<table>\n<thead>\n<tr>\n<th>Condition</th>\n<th>Position</th>\n<th>Points communs</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$OH &lt; r$</td>\n<td><strong>sécante</strong></td>\n<td>$2$</td>\n</tr>\n<tr>\n<td>$OH = r$</td>\n<td><strong>tangente</strong></td>\n<td>$1$</td>\n</tr>\n<tr>\n<td>$OH &gt; r$</td>\n<td><strong>extérieure</strong></td>\n<td>$0$</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Propriété de la tangente.</strong> La tangente en $T$ est <strong>perpendiculaire</strong> au rayon\n$[OT]$. Réciproquement, la perpendiculaire à $[OT]$ en $T$ est la tangente en $T$.</p>\n<h2 id=\"tableau-des-formules-pi-approx-314\">Tableau des formules ($\\pi \\approx 3{,}14$)</h2>\n<table>\n<thead>\n<tr>\n<th>Grandeur</th>\n<th>Formule</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Périmètre du cercle</td>\n<td>$P = 2 \\times \\pi \\times r = \\pi \\times d$</td>\n</tr>\n<tr>\n<td>Aire du disque</td>\n<td>$\\mathcal{A} = \\pi \\times r \\times r$</td>\n</tr>\n<tr>\n<td>Longueur d'un arc (angle $\\alpha$)</td>\n<td>$L = \\dfrac{\\alpha}{360} \\times 2 \\times \\pi \\times r$</td>\n</tr>\n<tr>\n<td>Aire d'un secteur (angle $\\alpha$)</td>\n<td>$\\mathcal{A} = \\dfrac{\\alpha}{360} \\times \\pi \\times r \\times r$</td>\n</tr>\n</tbody>\n</table>\n<p>Fractions utiles : $\\dfrac{90}{360} = \\dfrac{1}{4}$, $\\dfrac{60}{360} = \\dfrac{1}{6}$,\n$\\dfrac{45}{360} = \\dfrac{1}{8}$.</p>\n<h2 id=\"positions-relatives-de-deux-cercles-r-ge-r-d-oo\">Positions relatives de deux cercles ($R \\ge r$, $d = OO'$)</h2>\n<table>\n<thead>\n<tr>\n<th>Condition</th>\n<th>Position</th>\n<th>Points communs</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$d &gt; R + r$</td>\n<td>extérieurs</td>\n<td>$0$</td>\n</tr>\n<tr>\n<td>$d = R + r$</td>\n<td>tangents extérieurement</td>\n<td>$1$</td>\n</tr>\n<tr>\n<td>$R - r &lt; d &lt; R + r$</td>\n<td>sécants</td>\n<td>$2$</td>\n</tr>\n<tr>\n<td>$d = R - r$, $d \\ne 0$</td>\n<td>tangents intérieurement</td>\n<td>$1$</td>\n</tr>\n<tr>\n<td>$d &lt; R - r$</td>\n<td>l'un intérieur à l'autre</td>\n<td>$0$</td>\n</tr>\n<tr>\n<td>$d = 0$</td>\n<td>concentriques</td>\n<td>$0$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Confondre <strong>périmètre du cercle</strong> (cm) et <strong>aire du disque</strong> (cm²).</li>\n<li>Utiliser le <strong>diamètre</strong> au lieu du rayon dans $\\mathcal{A} = \\pi r r$.</li>\n<li>Oublier la fraction $\\dfrac{\\alpha}{360}$ pour un arc ou un secteur.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Aire d'une couronne (rayons $R$ et $r$, même centre) :\n$\\pi \\times R \\times R - \\pi \\times r \\times r$.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Vrai ou faux",
   "diff": "facile",
   "q": "<p>Réponds et justifie brièvement.\n1. Un diamètre est une corde.\n2. Toute corde passe par le centre du cercle.\n3. Le disque est une ligne.\n4. La tangente à un cercle en $T$ est perpendiculaire au rayon $[OT]$.\n5. Si $OM = r$, le point $M$ est à l'intérieur du cercle.</p>",
   "modele": "<ol>\n<li><strong>Vrai.</strong> Un diamètre joint deux points du cercle : c'est une corde\n   particulière, celle qui passe par le centre.</li>\n<li><strong>Faux.</strong> Seule la corde passant par le centre est un diamètre ; les autres\n   cordes ne passent pas par le centre.</li>\n<li><strong>Faux.</strong> Le disque est une <strong>surface</strong> ; c'est le cercle qui est une ligne.</li>\n<li><strong>Vrai.</strong> C'est la propriété de la tangente.</li>\n<li><strong>Faux.</strong> Si $OM = r$, le point $M$ est <strong>sur</strong> le cercle.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Périmètre et aire (rayon donné)",
   "diff": "facile",
   "q": "<p>Un cercle a pour centre $O$ et pour rayon $r = 5$ cm.\n1. Calcule son périmètre.\n2. Calcule l'aire du disque correspondant.</p>",
   "modele": "<ol>\n<li>$P = 2 \\times 3{,}14 \\times 5 = 31{,}4$ cm.</li>\n<li>$\\mathcal{A} = 3{,}14 \\times 5 \\times 5 = 3{,}14 \\times 25 = 78{,}5$ cm².</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Périmètre et aire (diamètre donné)",
   "diff": "facile",
   "q": "<p>Un cercle a pour diamètre $18$ cm.\n1. Calcule son rayon.\n2. Calcule son périmètre.\n3. Calcule l'aire du disque correspondant.</p>",
   "modele": "<ol>\n<li>$r = \\dfrac{18}{2} = 9$ cm.</li>\n<li>$P = 3{,}14 \\times 18 = 56{,}52$ cm.</li>\n<li>$\\mathcal{A} = 3{,}14 \\times 9 \\times 9 = 3{,}14 \\times 81 = 254{,}34$ cm².</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Position d'un point",
   "diff": "facile",
   "q": "<p>Soit $(\\mathcal{C})$ le cercle de centre $O$ et de rayon $6$ cm. Précise la\nposition de chaque point.\n1. $A$ tel que $OA = 4$ cm.\n2. $B$ tel que $OB = 6$ cm.\n3. $C$ tel que $OC = 7{,}5$ cm.\n4. $D$ tel que $OD = 2{,}9$ cm.</p>",
   "modele": "<ol>\n<li>$4 &lt; 6$ : $A$ est <strong>à l'intérieur</strong> du cercle.</li>\n<li>$6 = 6$ : $B$ <strong>appartient</strong> au cercle.</li>\n<li>$7{,}5 &gt; 6$ : $C$ est <strong>à l'extérieur</strong> du cercle.</li>\n<li>$2{,}9 &lt; 6$ : $D$ est <strong>à l'intérieur</strong> du cercle.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Position d'une droite",
   "diff": "facile",
   "q": "<p>Soit $(\\mathcal{C})$ de centre $O$ et de rayon $5$ cm. On note $OH$ la distance de\n$O$ à une droite. Précise la position de la droite et le nombre de points communs.\n1. $OH = 3$ cm.\n2. $OH = 5$ cm.\n3. $OH = 8$ cm.\n4. $OH = 4{,}9$ cm.</p>",
   "modele": "<ol>\n<li>$3 &lt; 5$ : la droite est <strong>sécante</strong>, $2$ points communs.</li>\n<li>$5 = 5$ : la droite est <strong>tangente</strong>, $1$ point commun.</li>\n<li>$8 &gt; 5$ : la droite est <strong>extérieure</strong>, $0$ point commun.</li>\n<li>$4{,}9 &lt; 5$ : la droite est <strong>sécante</strong>, $2$ points communs.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Vocabulaire",
   "diff": "facile",
   "q": "<p>Trace un cercle de centre $O$ et de rayon $3{,}5$ cm. Place les points $A$, $B$,\n$M$, $N$ sur le cercle de façon que $[MN]$ passe par $O$.\n1. Nomme un rayon, une corde qui n'est pas un diamètre, et un diamètre.\n2. Donne la longueur $MN$.\n3. Donne la longueur $OA$.</p>",
   "modele": "<ol>\n<li>Par exemple : rayon $[OA]$ ; corde qui n'est pas un diamètre $[AB]$ ; diamètre\n   $[MN]$.</li>\n<li>$MN = 2 \\times 3{,}5 = 7$ cm.</li>\n<li>$OA = r = 3{,}5$ cm.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Arc et secteur",
   "diff": "",
   "q": "<p>Dans un cercle de centre $O$ et de rayon $12$ cm, on considère un angle au centre\n$\\widehat{AOB} = 45°$.\n1. Écris la fraction du cercle représentée par cet angle, sous forme simplifiée.\n2. Calcule la longueur de l'arc $\\overset{\\frown}{AB}$.\n3. Calcule l'aire du secteur $AOB$.</p>",
   "modele": "<ol>\n<li>$\\dfrac{45}{360} = \\dfrac{1}{8}$.</li>\n<li>$L = \\dfrac{1}{8} \\times 2 \\times 3{,}14 \\times 12 = \\dfrac{75{,}36}{8} = 9{,}42$ cm.</li>\n<li>$\\mathcal{A} = \\dfrac{1}{8} \\times 3{,}14 \\times 12 \\times 12 = \\dfrac{452{,}16}{8} = 56{,}52$ cm².</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Deux cercles",
   "diff": "",
   "q": "<p>Deux cercles ont pour rayons $R = 7$ cm et $r = 4$ cm. Pour chaque valeur de\n$d = OO'$, donne la position relative des deux cercles et le nombre de points\ncommuns.\n1. $d = 11$ cm.\n2. $d = 3$ cm.\n3. $d = 9$ cm.\n4. $d = 13$ cm.\n5. $d = 2$ cm.</p>",
   "modele": "<p>On calcule d'abord $R + r = 7 + 4 = 11$ cm et $R - r = 7 - 4 = 3$ cm.\n1. $d = 11 = R + r$ : <strong>tangents extérieurement</strong>, $1$ point commun.\n2. $d = 3 = R - r$ : <strong>tangents intérieurement</strong>, $1$ point commun.\n3. $3 &lt; 9 &lt; 11$ : cercles <strong>sécants</strong>, $2$ points communs.\n4. $13 &gt; 11$ : cercles <strong>extérieurs</strong>, $0$ point commun.\n5. $2 &lt; 3$ : le petit cercle est <strong>intérieur</strong> au grand, $0$ point commun.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "La roue",
   "diff": "",
   "q": "<p>La roue avant d'un vélo a un diamètre de $60$ cm.\n1. Calcule le périmètre de la roue.\n2. Quelle distance, en cm, parcourt le vélo en $25$ tours de roue ?\n3. Convertis ce résultat en mètres.</p>",
   "modele": "<ol>\n<li>$P = 3{,}14 \\times 60 = 188{,}4$ cm.</li>\n<li>$188{,}4 \\times 25 = 4\\,710$ cm.</li>\n<li>$4\\,710$ cm $= 47{,}10$ m.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Tangente",
   "diff": "",
   "q": "<p>$(\\mathcal{C})$ est le cercle de centre $O$ et de rayon $4{,}5$ cm. $T$ est un point\nde $(\\mathcal{C})$ et $(t)$ est la tangente à $(\\mathcal{C})$ en $T$.\n1. Décris en trois étapes la construction de $(t)$.\n2. Quelle est la mesure de l'angle entre $[OT]$ et $(t)$ ?\n3. $M$ est un point de $(t)$ différent de $T$. Quelle est la nature du triangle\n   $OTM$ ? Justifie.\n4. Le point $M$ est-il à l'intérieur, sur, ou à l'extérieur du cercle ? Justifie.</p>",
   "modele": "<ol>\n<li>Construction : (a) placer $T$ sur le cercle ; (b) tracer le rayon $[OT]$ ;\n   (c) tracer la perpendiculaire à $(OT)$ passant par $T$ : c'est $(t)$.</li>\n<li>L'angle mesure $90°$, car la tangente est perpendiculaire au rayon au point de\n   contact.</li>\n<li>Le triangle $OTM$ est <strong>rectangle en $T$</strong>, puisque $(OT) \\perp (t)$ et que $M$\n   appartient à $(t)$.</li>\n<li>$M$ est <strong>à l'extérieur</strong> du cercle. En effet, la tangente n'a qu'<strong>un seul</strong>\n   point commun avec le cercle, le point $T$. Comme $M \\ne T$, le point $M$ n'est\n   pas sur le cercle ; et tous les autres points de la tangente sont plus éloignés\n   de $O$ que $T$, donc $OM &gt; r$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Couronne",
   "diff": "",
   "q": "<p>Deux cercles de même centre $O$ ont pour rayons $10$ cm et $6$ cm.\n1. Comment appelle-t-on ces deux cercles ?\n2. Calcule l'aire du grand disque.\n3. Calcule l'aire du petit disque.\n4. Déduis-en l'aire de la couronne comprise entre les deux cercles.</p>",
   "modele": "<ol>\n<li>Ce sont des cercles <strong>concentriques</strong> (même centre).</li>\n<li>$\\mathcal{A}_1 = 3{,}14 \\times 10 \\times 10 = 314$ cm².</li>\n<li>$\\mathcal{A}_2 = 3{,}14 \\times 6 \\times 6 = 3{,}14 \\times 36 = 113{,}04$ cm².</li>\n<li>Aire de la couronne :\n$$314 - 113{,}04 = 200{,}96 \\text{ cm}^2.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Retrouver le rayon",
   "diff": "",
   "q": "<p>Le périmètre d'un cercle vaut $43{,}96$ cm.\n1. Calcule son rayon.\n2. Calcule son diamètre.\n3. Calcule l'aire du disque correspondant.</p>",
   "modele": "<ol>\n<li>$P = 2 \\times \\pi \\times r$, donc\n$$r = \\dfrac{43{,}96}{2 \\times 3{,}14} = \\dfrac{43{,}96}{6{,}28} = 7 \\text{ cm}.$$</li>\n<li>$d = 2 \\times 7 = 14$ cm.</li>\n<li>$\\mathcal{A} = 3{,}14 \\times 7 \\times 7 = 3{,}14 \\times 49 = 153{,}86$ cm².</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Le bassin de Rabat",
   "diff": "difficile",
   "q": "<p>Un bassin circulaire d'un jardin de Rabat a un rayon de $5$ m.\n1. Calcule l'aire de sa surface d'eau.\n2. Calcule la longueur de sa margelle (le bord du bassin).\n3. La margelle coûte $140$ DH le mètre. Calcule son prix.\n4. Une bâche de protection coûte $60$ DH le mètre carré. Calcule son prix.\n5. Calcule le coût total.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = 3{,}14 \\times 5 \\times 5 = 78{,}5$ m².</li>\n<li>$P = 2 \\times 3{,}14 \\times 5 = 31{,}4$ m.</li>\n<li>Margelle : $31{,}4 \\times 140 = 4\\,396$ DH.</li>\n<li>Bâche : $78{,}5 \\times 60 = 4\\,710$ DH.</li>\n<li>Total : $4\\,396 + 4\\,710 = 9\\,106$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Le msemen partagé",
   "diff": "difficile",
   "q": "<p>Un grand msemen circulaire de rayon $18$ cm est découpé en parts identiques.\nChaque part est un secteur d'angle au centre $40°$.\n1. Combien de parts obtient-on ?\n2. Calcule la longueur du bord arrondi d'une part (l'arc).\n3. Calcule l'aire d'une part.\n4. Vérifie ton résultat en calculant l'aire totale du msemen puis en la divisant\n   par le nombre de parts.</p>",
   "modele": "<ol>\n<li>$360 \\div 40 = 9$ parts.</li>\n<li>$L = \\dfrac{40}{360} \\times 2 \\times 3{,}14 \\times 18 = \\dfrac{1}{9} \\times 113{,}04 = 12{,}56$ cm.</li>\n<li>$\\mathcal{A} = \\dfrac{1}{9} \\times 3{,}14 \\times 18 \\times 18 = \\dfrac{1\\,017{,}36}{9} = 113{,}04$ cm².</li>\n<li>Aire totale : $3{,}14 \\times 18 \\times 18 = 1\\,017{,}36$ cm².\n   Division : $1\\,017{,}36 \\div 9 = 113{,}04$ cm². On retrouve bien le résultat de\n   la question 3.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Deux cercles à Casablanca",
   "diff": "difficile",
   "q": "<p>Sur un plan, deux ronds-points circulaires ont pour centres $O$ et $O'$ avec\n$OO' = 12$ cm. Leurs rayons sont $R = 8$ cm et $r = 5$ cm.\n1. Calcule $R + r$ et $R - r$.\n2. Détermine la position relative des deux cercles. Justifie.\n3. Quelle devrait être la valeur de $OO'$ pour que les deux cercles soient\n   tangents extérieurement ?\n4. Quelle devrait être la valeur de $OO'$ pour qu'ils soient tangents\n   intérieurement ?</p>",
   "modele": "<ol>\n<li>$R + r = 8 + 5 = 13$ cm et $R - r = 8 - 5 = 3$ cm.</li>\n<li>Comme $3 &lt; 12 &lt; 13$, c'est-à-dire $R - r &lt; OO' &lt; R + r$, les deux cercles sont\n   <strong>sécants</strong> : ils ont $2$ points communs.</li>\n<li>Tangents extérieurement : $OO' = R + r = 13$ cm.</li>\n<li>Tangents intérieurement : $OO' = R - r = 3$ cm.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Chasse aux erreurs",
   "diff": "difficile",
   "q": "<p>Nadia écrit : « Le cercle a un rayon de $8$ cm, donc son périmètre vaut\n$P = 3{,}14 \\times 8 = 25{,}12$ cm. »\n1. Repère l'erreur de Nadia.\n2. Calcule le vrai périmètre.\n3. De combien de cm s'est-elle trompée ?\n4. Nadia calcule ensuite l'aire : $\\mathcal{A} = 3{,}14 \\times 16 = 50{,}24$ cm².\n   Est-ce correct ? Sinon, corrige.</p>",
   "modele": "<ol>\n<li>Erreur : Nadia a utilisé la formule $P = \\pi \\times d$ avec le <strong>rayon</strong> au lieu\n   du diamètre. Il faut soit $P = 2 \\times \\pi \\times r$, soit $P = \\pi \\times d$\n   avec $d = 16$ cm.</li>\n<li>$P = 2 \\times 3{,}14 \\times 8 = 50{,}24$ cm.</li>\n<li>Écart : $50{,}24 - 25{,}12 = 25{,}12$ cm. Elle a trouvé la moitié du périmètre.</li>\n<li><strong>Non</strong>, c'est faux : elle a multiplié par $16$ (le diamètre) au lieu de\n   $8 \\times 8 = 64$. L'aire correcte est\n$$\\mathcal{A} = 3{,}14 \\times 8 \\times 8 = 3{,}14 \\times 64 = 200{,}96 \\text{ cm}^2.$$</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "La piste d'athlétisme",
   "diff": "difficile",
   "q": "<p>La piste circulaire d'un stade d'Agadir a un bord intérieur de rayon $30$ m. La\npiste a une largeur de $4$ m.\n1. Calcule le rayon du bord extérieur.\n2. Calcule la longueur du bord intérieur, puis celle du bord extérieur.\n3. De combien de mètres le couloir extérieur est-il plus long que le couloir\n   intérieur ?\n4. Calcule l'aire de la piste (la couronne).\n5. Le revêtement coûte $210$ DH le mètre carré. Calcule le coût total, arrondi au\n   dirham.</p>",
   "modele": "<ol>\n<li>Rayon extérieur : $30 + 4 = 34$ m.</li>\n<li>Bord intérieur : $2 \\times 3{,}14 \\times 30 = 188{,}4$ m.\n   Bord extérieur : $2 \\times 3{,}14 \\times 34 = 213{,}52$ m.</li>\n<li>Différence : $213{,}52 - 188{,}4 = 25{,}12$ m.</li>\n<li>Aire de la couronne :\n$$3{,}14 \\times 34 \\times 34 - 3{,}14 \\times 30 \\times 30 = 3\\,629{,}84 - 2\\,826 = 803{,}84 \\text{ m}^2.$$</li>\n<li>Coût : $803{,}84 \\times 210 = 168\\,806{,}4$ DH, soit environ $168\\,806$ DH.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "L'horloge de la médersa",
   "diff": "difficile",
   "q": "<p>La grande aiguille (des minutes) d'une horloge de médersa mesure $15$ cm.\n1. Calcule la longueur du chemin parcouru par la pointe de l'aiguille en une\n   heure complète.\n2. En $20$ minutes, l'aiguille balaie un angle au centre de $120°$. Calcule la\n   longueur de l'arc parcouru par la pointe.\n3. Calcule l'aire du secteur balayé en $20$ minutes.\n4. Calcule l'aire totale du cadran (disque de rayon $15$ cm) et vérifie que l'aire\n   du secteur en vaut bien le tiers.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Connaître le vocabulaire et les propriétés</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Appliquer $P$ et $\\mathcal{A}$</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Passer du diamètre au rayon</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Position d'un point et d'un cercle</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Position d'une droite et d'un cercle</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Représenter et nommer</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Calculer arc et secteur</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Positions relatives de deux cercles</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Modéliser, convertir</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Représenter, raisonner sur la tangente</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Calculer l'aire d'une couronne</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Calculer à l'envers (retrouver le rayon)</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Résoudre un problème de coût</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Partager un disque, vérifier</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Raisonner sur deux cercles</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Analyser une erreur</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Problème de couronne et de coût</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Synthèse : arc, secteur, contrôle</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>En une heure, la pointe fait un tour complet :\n$$P = 2 \\times 3{,}14 \\times 15 = 94{,}2 \\text{ cm}.$$</li>\n<li>$\\dfrac{120}{360} = \\dfrac{1}{3}$, donc\n$$L = \\dfrac{1}{3} \\times 94{,}2 = 31{,}4 \\text{ cm}.$$</li>\n<li>$\\mathcal{A}_{\\text{secteur}} = \\dfrac{1}{3} \\times 3{,}14 \\times 15 \\times 15 = \\dfrac{706{,}5}{3} = 235{,}5$ cm².</li>\n<li>Aire du cadran : $3{,}14 \\times 15 \\times 15 = 706{,}5$ cm².\n   Vérification : $706{,}5 \\div 3 = 235{,}5$ cm². C'est bien le tiers.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M17",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · Calculatrice et compas autorisés · $\\pi \\approx 3{,}14$</p>\n<h2 id=\"exercice-1-5-points-vocabulaire-et-positions\">Exercice 1 (5 points) — Vocabulaire et positions</h2>\n<p>$(\\mathcal{C})$ est le cercle de centre $O$ et de rayon $7$ cm.</p>\n<ol>\n<li>Donne la longueur d'un diamètre de $(\\mathcal{C})$.</li>\n<li>Précise la position des points suivants : $A$ tel que $OA = 5$ cm ; $B$ tel que\n   $OB = 7$ cm ; $C$ tel que $OC = 9{,}2$ cm.</li>\n<li>Une droite $(d)$ est telle que la distance de $O$ à $(d)$ vaut $7$ cm. Quelle\n   est la position de $(d)$ par rapport à $(\\mathcal{C})$ ? Combien ont-elles de\n   points communs ?</li>\n<li>On note $T$ le point de contact. Quelle est la mesure de l'angle entre $[OT]$\n   et $(d)$ ? Cite la propriété utilisée.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$14$ cm</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Intérieur, sur le cercle, extérieur ($0{,}5$ pt chacun)</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Tangente, $1$ point commun</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$90°$ + propriété de la tangente</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-perimetre-aire-arc-et-secteur\">Exercice 2 (5 points) — Périmètre, aire, arc et secteur</h2>\n<p>Un cercle a pour diamètre $20$ cm.</p>\n<ol>\n<li>Calcule son rayon.</li>\n<li>Calcule son périmètre.</li>\n<li>Calcule l'aire du disque correspondant.</li>\n<li>On considère un angle au centre de $72°$. Écris la fraction du cercle\n   correspondante, sous forme simplifiée.</li>\n<li>Calcule la longueur de l'arc, puis l'aire du secteur.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$r = 10$ cm</td>\n<td>0,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$P = 62{,}8$ cm</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$\\mathcal{A} = 314$ cm²</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$\\dfrac{72}{360} = \\dfrac{1}{5}$</td>\n<td>0,5</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Arc $= 12{,}56$ cm ($1$ pt) ; secteur $= 62{,}8$ cm² ($1$ pt)</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-6-points-probleme-le-rond-point-de-casablanca\">Exercice 3 (6 points) — Problème : le rond-point de Casablanca</h2>\n<p>Un rond-point circulaire de Casablanca a un rayon de $12$ m. Il est entouré d'une\nbordure en pierre, et son intérieur est planté de gazon. Une allée circulaire de\n$2$ m de large longe l'extérieur de la bordure.</p>\n<ol>\n<li>Calcule la longueur de la bordure.</li>\n<li>Calcule l'aire du gazon.</li>\n<li>Le gazon coûte $55$ DH le mètre carré. Calcule le prix du gazon, arrondi au\n   dirham.</li>\n<li>Calcule le rayon du bord extérieur de l'allée.</li>\n<li>Calcule l'aire de l'allée (la couronne de $2$ m de large).</li>\n<li>Le pavage de l'allée coûte $180$ DH le mètre carré. Calcule son prix, arrondi\n   au dirham.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$75{,}36$ m</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$452{,}16$ m²</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$\\approx 24\\,869$ DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$14$ m</td>\n<td>0,5</td>\n</tr>\n<tr>\n<td>5</td>\n<td>$163{,}28$ m²</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>6</td>\n<td>$\\approx 29\\,390$ DH</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-4-points-deux-cercles\">Exercice 4 (4 points) — Deux cercles</h2>\n<p>Deux cercles ont pour centres $O$ et $O'$, et pour rayons $R = 9$ cm et\n$r = 4$ cm.</p>\n<ol>\n<li>Calcule $R + r$ et $R - r$.</li>\n<li>Donne la position relative des deux cercles si $OO' = 13$ cm.</li>\n<li>Donne la position relative des deux cercles si $OO' = 7$ cm.</li>\n<li>Donne la position relative des deux cercles si $OO' = 2$ cm.</li>\n</ol>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$13$ cm et $5$ cm</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Tangents extérieurement, $1$ point commun</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Sécants, $2$ points communs</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Petit cercle intérieur au grand, $0$ point commun</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>$d = 2 \\times 7 = 14$ cm.</li>\n<li>\n<ul>\n<li>$OA = 5 &lt; 7$ : $A$ est <strong>à l'intérieur</strong> du cercle.</li>\n<li>$OB = 7 = 7$ : $B$ <strong>appartient</strong> au cercle.</li>\n<li>$OC = 9{,}2 &gt; 7$ : $C$ est <strong>à l'extérieur</strong> du cercle.</li>\n</ul>\n</li>\n<li>La distance de $O$ à $(d)$ est égale au rayon : $(d)$ est <strong>tangente</strong> à\n   $(\\mathcal{C})$. Elles ont <strong>un seul</strong> point commun.</li>\n<li>L'angle mesure $90°$ : la tangente à un cercle en un point $T$ est\n   perpendiculaire au rayon $[OT]$.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$r = \\dfrac{20}{2} = 10$ cm.</li>\n<li>$P = 2 \\times 3{,}14 \\times 10 = 62{,}8$ cm.</li>\n<li>$\\mathcal{A} = 3{,}14 \\times 10 \\times 10 = 314$ cm².</li>\n<li>$\\dfrac{72}{360} = \\dfrac{1}{5}$.</li>\n<li>Arc : $L = \\dfrac{1}{5} \\times 62{,}8 = 12{,}56$ cm.\n   Secteur : $\\mathcal{A} = \\dfrac{1}{5} \\times 314 = 62{,}8$ cm².</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$P = 2 \\times 3{,}14 \\times 12 = 75{,}36$ m.</li>\n<li>$\\mathcal{A} = 3{,}14 \\times 12 \\times 12 = 3{,}14 \\times 144 = 452{,}16$ m².</li>\n<li>$452{,}16 \\times 55 = 24\\,868{,}8$ DH, soit environ $24\\,869$ DH.</li>\n<li>Rayon extérieur : $12 + 2 = 14$ m.</li>\n<li>Aire de l'allée :\n$$3{,}14 \\times 14 \\times 14 - 3{,}14 \\times 12 \\times 12 = 615{,}44 - 452{,}16 = 163{,}28 \\text{ m}^2.$$</li>\n<li>$163{,}28 \\times 180 = 29\\,390{,}4$ DH, soit environ $29\\,390$ DH.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<ol>\n<li>$R + r = 9 + 4 = 13$ cm et $R - r = 9 - 4 = 5$ cm.</li>\n<li>$OO' = 13 = R + r$ : les cercles sont <strong>tangents extérieurement</strong>, $1$ point\n   commun.</li>\n<li>$5 &lt; 7 &lt; 13$ : les cercles sont <strong>sécants</strong>, $2$ points communs.</li>\n<li>$2 &lt; 5 = R - r$ : le petit cercle est <strong>intérieur</strong> au grand, $0$ point commun.</li>\n</ol>"
 }
},

{
 "id": "m18",
 "domaine": "maths",
 "unite": 18,
 "theme": "Géométrie",
 "tag": "M18",
 "icone": "📐",
 "niveau": "1re année collège · Maroc",
 "titre": "M18 — Prisme droit et cylindre de révolution",
 "duree": "6 h",
 "semestre": "2",
 "objectifs": [
  "Décrire un prisme droit : bases, faces latérales, arêtes, sommets, hauteur.",
  "Reconnaître le parallélépipède rectangle et le cube comme prismes droits particuliers.",
  "Décrire un cylindre de révolution et son patron.",
  "Calculer une aire latérale, une aire totale et un volume.",
  "Convertir des unités de volume et de capacité."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Au souk de Fès, un marchand vend de l'huile d'olive. Il possède deux récipients :\nune boîte métallique en forme de pavé de 20 cm de long, 15 cm de large et 10 cm de haut,\net un bidon cylindrique de 10 cm de rayon et 30 cm de hauteur.\nLe client demande : « lequel contient le plus d'huile ? »\nPour répondre, il faut savoir calculer le <strong>volume</strong> de chaque solide, puis le convertir en litres.\nC'est le but de cette leçon.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Prends une boîte de thé en carton, en forme de pavé. Découpe-la le long de\nquelques arêtes puis étale-la à plat sur la table.</p>\n<p><strong>Observation.</strong> On obtient une figure plane formée de 6 rectangles : les 2 bases et les\n4 faces latérales. Les 4 faces latérales, mises côte à côte, forment un <strong>grand rectangle</strong>.\nLa longueur de ce grand rectangle est le <strong>périmètre de la base</strong> ; sa largeur est la\n<strong>hauteur</strong> de la boîte.</p>\n<p><strong>Conclusion.</strong> L'aire des faces latérales se calcule en une seule multiplication :\n$$\\text{aire latérale} = \\text{périmètre de la base} \\times \\text{hauteur}$$</p>\n<p><strong>Activité 2.</strong> Enroule une feuille A4 pour former un tube, puis pose ce tube sur une feuille\net trace le cercle obtenu. Déroule ensuite le tube.\n<strong>Observation.</strong> La surface latérale d'un cylindre, une fois déroulée, est un rectangle.\nSa longueur est la longueur du cercle de base, sa largeur est la hauteur du cylindre.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-le-prisme-droit\">3.1 Le prisme droit</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>prisme droit</strong> est un solide formé de :\n- deux <strong>bases</strong> superposables et parallèles, qui sont des polygones ;\n- des <strong>faces latérales</strong> qui sont toutes des <strong>rectangles</strong>, perpendiculaires aux bases.</p>\n<p>La <strong>hauteur</strong> du prisme est la distance entre les deux bases : c'est la longueur d'une\narête latérale.</p>\n</blockquote>\n<p>Si la base est un polygone à $n$ côtés, le prisme droit possède :\n$n + 2$ faces, $3n$ arêtes et $2n$ sommets.\nPar exemple, un prisme droit à base triangulaire ($n = 3$) a 5 faces, 9 arêtes, 6 sommets.</p>\n<pre><code>Prisme droit à base triangulaire (vue en perspective)\n\n        D'________ E'\n        /\\         .\n       /  \\      .\n      /    \\   .\n    F'------ .            bases : DEF et D'E'F'\n     |\\      |            faces latérales : DEE'D', EFF'E', FDD'F'\n     | \\     |            hauteur = DD' = EE' = FF'\n     D--\\----E\n      \\  \\  /\n       \\  \\/\n        \\ /\n         F\n</code></pre>\n<h3 id=\"32-deux-cas-particuliers\">3.2 Deux cas particuliers</h3>\n<blockquote>\n<p><strong>Définition.</strong> Le <strong>parallélépipède rectangle</strong> (ou pavé droit) est un prisme droit dont\ntoutes les faces sont des rectangles. Il a 6 faces, 12 arêtes, 8 sommets.\nLe <strong>cube</strong> est un parallélépipède rectangle dont les 12 arêtes ont la même longueur ;\nses 6 faces sont des carrés.</p>\n</blockquote>\n<h3 id=\"33-le-cylindre-de-revolution\">3.3 Le cylindre de révolution</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>cylindre de révolution</strong> est le solide obtenu en faisant tourner un\nrectangle autour d'un de ses côtés. Ses deux bases sont deux <strong>disques</strong> superposables\net parallèles, de rayon $r$. La <strong>hauteur</strong> $h$ est la distance entre les deux bases.</p>\n</blockquote>\n<p>Son <strong>patron</strong> est formé de deux disques de rayon $r$ et d'un rectangle de dimensions\n$2 \\times \\pi \\times r$ (longueur du cercle) et $h$.</p>\n<pre><code>Patron d'un cylindre :\n\n      (  )            &lt;- disque de rayon r\n   ______________\n  |              |    largeur = h\n  |______________|    longueur = 2 x pi x r\n      (  )            &lt;- disque de rayon r\n</code></pre>\n<h3 id=\"34-aires\">3.4 Aires</h3>\n<blockquote>\n<p><strong>Propriété (prisme droit).</strong>\n$$\\mathcal{A}<em _text_base=\"\\text{base\">{\\text{latérale}} = P</em> \\times h\n\\qquad\n\\mathcal{A}}<em _text_latérale=\"\\text{latérale\">{\\text{totale}} = \\mathcal{A}</em>$$}} + 2 \\times \\mathcal{A}_{\\text{base}</p>\n<p><strong>Propriété (cylindre de révolution).</strong>\n$$\\mathcal{A}<em _text_totale=\"\\text{totale\">{\\text{latérale}} = 2 \\times \\pi \\times r \\times h\n\\qquad\n\\mathcal{A}</em>$$}} = 2 \\times \\pi \\times r \\times h + 2 \\times \\pi \\times r^{2</p>\n</blockquote>\n<p><strong>Méthode (pas à pas) pour une aire totale.</strong>\n1. J'identifie la base et je calcule son aire.\n2. Je calcule le périmètre de la base.\n3. Je multiplie ce périmètre par la hauteur : c'est l'aire latérale.\n4. J'ajoute deux fois l'aire de la base.\n5. J'écris l'unité en $\\text{cm}^{2}$ ou $\\text{m}^{2}$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Oublier le facteur 2 devant l'aire de la base : un prisme a <strong>deux</strong>\nbases, pas une seule.</p>\n<h3 id=\"35-volumes\">3.5 Volumes</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Pour un prisme droit <strong>et</strong> pour un cylindre de révolution :\n$$V = \\mathcal{A}_{\\text{base}} \\times h$$\nEn particulier : pavé droit $V = L \\times l \\times h$ ; cube d'arête $a$ : $V = a \\times a \\times a$ ;\ncylindre : $V = \\pi \\times r^{2} \\times h$.</p>\n</blockquote>\n<h3 id=\"36-unites-de-volume-et-de-capacite\">3.6 Unités de volume et de capacité</h3>\n<p>Chaque unité de volume vaut <strong>1000 fois</strong> la suivante :\n$$1\\ \\text{m}^{3} = 1000\\ \\text{dm}^{3} \\qquad 1\\ \\text{dm}^{3} = 1000\\ \\text{cm}^{3}$$</p>\n<p>Correspondance avec les capacités :\n$$1\\ \\text{dm}^{3} = 1\\ \\text{L} \\qquad 1\\ \\text{cm}^{3} = 1\\ \\text{mL} \\qquad 1\\ \\text{m}^{3} = 1000\\ \\text{L}$$</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Écrire $1\\ \\text{m}^{3} = 100\\ \\text{dm}^{3}$. Pour les volumes,\non change de rang <strong>de 1000 en 1000</strong>, pas de 10 en 10.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Prisme droit de 12 cm de hauteur ; sa base est un triangle de côtés\n8 cm, 10 cm et 10 cm, dont l'aire vaut $24\\ \\text{cm}^{2}$.\n<em>Solution.</em> Périmètre de la base : $8 + 10 + 10 = 28\\ \\text{cm}$.\nAire latérale : $28 \\times 12 = 336\\ \\text{cm}^{2}$.\nAire totale : $336 + 2 \\times 24 = 336 + 48 = 384\\ \\text{cm}^{2}$.\nVolume : $V = 24 \\times 12 = 288\\ \\text{cm}^{3}$.</p>\n<p><strong>Exemple 2.</strong> Boîte du souk : pavé de 20 cm, 15 cm et 10 cm.\n<em>Solution.</em> $V = 20 \\times 15 \\times 10 = 3000\\ \\text{cm}^{3} = 3000\\ \\text{mL} = 3\\ \\text{L}$.</p>\n<p><strong>Exemple 3.</strong> Bidon cylindrique de rayon 10 cm et de hauteur 30 cm (on prend $\\pi \\approx 3{,}14$).\n<em>Solution.</em> Aire de base : $3{,}14 \\times 10 \\times 10 = 314\\ \\text{cm}^{2}$.\n$V = 314 \\times 30 = 9420\\ \\text{cm}^{3} = 9{,}42\\ \\text{L}$.\nLe bidon contient donc plus d'huile que la boîte.</p>\n<p><strong>Exemple 4.</strong> Une citerne cylindrique d'un immeuble de Casablanca a un diamètre de 2 m et\nune hauteur de 1,5 m. Quelle est sa capacité en litres ?\n<em>Solution.</em> Rayon : $2 \\div 2 = 1\\ \\text{m}$. Aire de base : $3{,}14 \\times 1 \\times 1 = 3{,}14\\ \\text{m}^{2}$.\n$V = 3{,}14 \\times 1{,}5 = 4{,}71\\ \\text{m}^{3}$, soit $4{,}71 \\times 1000 = 4710\\ \\text{L}$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Prisme droit : 2 bases polygonales superposables, faces latérales rectangulaires.</li>\n<li>Pavé droit et cube sont des prismes droits particuliers.</li>\n<li>Cylindre de révolution : 2 disques de rayon $r$ et une surface latérale rectangulaire déroulée.</li>\n<li>$\\mathcal{A}<em _text_base=\"\\text{base\">{\\text{latérale}} = P</em> \\times h$.}} \\times h$ et $V = \\mathcal{A}_{\\text{base}</li>\n<li>$1\\ \\text{dm}^{3} = 1\\ \\text{L}$ et $1\\ \\text{m}^{3} = 1000\\ \\text{L}$.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Compare le volume de deux cylindres de même hauteur dont l'un a un rayon deux fois plus grand.</li>\n<li>Cherche pourquoi une canalisation d'eau de 20 cm de diamètre transporte bien plus d'eau\n  qu'une canalisation de 10 cm de diamètre de même longueur.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques 1AC — MEN Maroc</a></li>\n<li><a href=\"https://fr.wikipedia.org/wiki/Prisme_(solide)\">Prisme (solide)</a></li>\n<li><a href=\"https://fr.wikipedia.org/wiki/Cylindre\">Cylindre de révolution</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"vocabulaire\">Vocabulaire</h2>\n<ul>\n<li><strong>Prisme droit</strong> : deux bases polygonales superposables et parallèles ; faces latérales rectangulaires.</li>\n<li><strong>Hauteur</strong> $h$ : distance entre les deux bases (longueur d'une arête latérale).</li>\n<li><strong>Pavé droit</strong> : prisme droit dont toutes les faces sont des rectangles (6 faces, 12 arêtes, 8 sommets).</li>\n<li><strong>Cube</strong> : pavé droit dont les 12 arêtes sont égales (6 faces carrées).</li>\n<li><strong>Cylindre de révolution</strong> : deux bases en forme de disque de rayon $r$, hauteur $h$.</li>\n</ul>\n<h2 id=\"denombrement-base-a-n-cotes\">Dénombrement (base à $n$ côtés)</h2>\n<table>\n<thead>\n<tr>\n<th>Élément</th>\n<th>Nombre</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Faces</td>\n<td>$n + 2$</td>\n</tr>\n<tr>\n<td>Arêtes</td>\n<td>$3n$</td>\n</tr>\n<tr>\n<td>Sommets</td>\n<td>$2n$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"formules\">Formules</h2>\n<table>\n<thead>\n<tr>\n<th>Solide</th>\n<th>Aire latérale</th>\n<th>Aire totale</th>\n<th>Volume</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prisme droit</td>\n<td>$P_{\\text{base}} \\times h$</td>\n<td>$P_{\\text{base}} \\times h + 2 \\times \\mathcal{A}_{\\text{base}}$</td>\n<td>$\\mathcal{A}_{\\text{base}} \\times h$</td>\n</tr>\n<tr>\n<td>Pavé droit ($L, l, h$)</td>\n<td>$2 \\times (L + l) \\times h$</td>\n<td>$2 \\times (L \\times l + L \\times h + l \\times h)$</td>\n<td>$L \\times l \\times h$</td>\n</tr>\n<tr>\n<td>Cube d'arête $a$</td>\n<td>$4 \\times a \\times a$</td>\n<td>$6 \\times a \\times a$</td>\n<td>$a \\times a \\times a$</td>\n</tr>\n<tr>\n<td>Cylindre ($r, h$)</td>\n<td>$2 \\times \\pi \\times r \\times h$</td>\n<td>$2 \\times \\pi \\times r \\times h + 2 \\times \\pi \\times r^{2}$</td>\n<td>$\\pi \\times r^{2} \\times h$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"patrons\">Patrons</h2>\n<ul>\n<li><strong>Pavé droit</strong> : 6 rectangles (les faces opposées sont identiques deux à deux).</li>\n<li><strong>Cube</strong> : 6 carrés identiques.</li>\n<li><strong>Prisme droit à base triangulaire</strong> : 2 triangles + 3 rectangles ; les 3 rectangles collés\n  forment un grand rectangle de longueur $P_{\\text{base}}$ et de largeur $h$.</li>\n<li><strong>Cylindre</strong> : 2 disques de rayon $r$ + 1 rectangle de dimensions $2 \\times \\pi \\times r$ et $h$.</li>\n</ul>\n<h2 id=\"unites\">Unités</h2>\n<p>$$1\\ \\text{m}^{3} = 1000\\ \\text{dm}^{3} = 1\\,000\\,000\\ \\text{cm}^{3}$$\n$$1\\ \\text{m}^{3} = 1000\\ \\text{L} \\qquad 1\\ \\text{dm}^{3} = 1\\ \\text{L} \\qquad 1\\ \\text{cm}^{3} = 1\\ \\text{mL}$$</p>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Oublier la <strong>deuxième base</strong> dans l'aire totale.</li>\n<li>Confondre <strong>rayon</strong> et <strong>diamètre</strong> dans un cylindre : $r = d \\div 2$.</li>\n<li>Passer d'une unité de volume à la suivante en multipliant par 10 : c'est <strong>1000</strong>.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Une seule idée sert partout : <strong>volume = aire de la base × hauteur</strong>.\nUne seule autre idée pour le côté : <strong>aire latérale = périmètre de la base × hauteur</strong>.\nAvant tout calcul, je convertis toutes les longueurs dans la <strong>même unité</strong>.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Décrire un prisme",
   "diff": "facile",
   "q": "<p>Un prisme droit a pour bases deux pentagones (polygones à 5 côtés).\n1. Combien a-t-il de faces ? de faces latérales ?\n2. Combien a-t-il d'arêtes ? de sommets ?\n3. Quelle est la forme de chaque face latérale ?</p>",
   "modele": "<ol>\n<li>Un prisme à base pentagonale a $5 + 2 = 7$ faces, dont <strong>5 faces latérales</strong> et 2 bases.</li>\n<li>Arêtes : $3 \\times 5 = 15$. Sommets : $2 \\times 5 = 10$.</li>\n<li>Chaque face latérale est un <strong>rectangle</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Reconnaître un patron",
   "diff": "facile",
   "q": "<p>Associe chaque description à un solide (cube, pavé droit non cube, cylindre de révolution,\nprisme droit à base triangulaire).\n- <strong>(a)</strong> 6 carrés identiques de 5 cm de côté.\n- <strong>(b)</strong> 2 disques de 3 cm de rayon et un rectangle de 18,84 cm sur 7 cm.\n- <strong>(c)</strong> 2 triangles identiques et 3 rectangles de même largeur.\n- <strong>(d)</strong> 6 rectangles, identiques deux à deux, de dimensions 8 cm × 5 cm, 8 cm × 4 cm et 5 cm × 4 cm.</p>",
   "modele": "<ul>\n<li><strong>(a)</strong> cube (6 carrés identiques).</li>\n<li><strong>(b)</strong> cylindre de révolution : $2 \\times 3{,}14 \\times 3 = 18{,}84\\ \\text{cm}$ est bien la\n  longueur du cercle de rayon 3 cm.</li>\n<li><strong>(c)</strong> prisme droit à base triangulaire.</li>\n<li><strong>(d)</strong> pavé droit non cube (dimensions 8 cm, 5 cm, 4 cm).</li>\n</ul>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Pavé droit",
   "diff": "facile",
   "q": "<p>Une boîte de biscuits a la forme d'un pavé droit de 8 cm de longueur, 5 cm de largeur\net 4 cm de hauteur.\n1. Calcule son volume en $\\text{cm}^{3}$.\n2. Calcule son aire totale en $\\text{cm}^{2}$.</p>",
   "modele": "<ol>\n<li>$V = 8 \\times 5 \\times 4 = 160\\ \\text{cm}^{3}$.</li>\n<li>$\\mathcal{A} = 2 \\times (8 \\times 5 + 8 \\times 4 + 5 \\times 4) = 2 \\times (40 + 32 + 20) = 2 \\times 92 = 184\\ \\text{cm}^{2}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Cube",
   "diff": "facile",
   "q": "<p>Un cube en bois a une arête de 7 cm.\n1. Calcule son volume.\n2. Calcule son aire totale.</p>",
   "modele": "<ol>\n<li>$V = 7 \\times 7 \\times 7 = 343\\ \\text{cm}^{3}$.</li>\n<li>Une face : $7 \\times 7 = 49\\ \\text{cm}^{2}$ ; aire totale : $6 \\times 49 = 294\\ \\text{cm}^{2}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Cylindre",
   "diff": "facile",
   "q": "<p>Un cylindre de révolution a un rayon de 4 cm et une hauteur de 9 cm.\n1. Calcule son aire latérale.\n2. Calcule son volume.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A}_{\\text{lat}} = 2 \\times 3{,}14 \\times 4 \\times 9 = 226{,}08\\ \\text{cm}^{2}$.</li>\n<li>Aire de base : $3{,}14 \\times 4 \\times 4 = 50{,}24\\ \\text{cm}^{2}$ ;\n   $V = 50{,}24 \\times 9 = 452{,}16\\ \\text{cm}^{3}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Conversions",
   "diff": "facile",
   "q": "<p>Complète :\n1. $2{,}5\\ \\text{m}^{3} = \\ldots\\ \\text{dm}^{3}$\n2. $3400\\ \\text{cm}^{3} = \\ldots\\ \\text{dm}^{3}$\n3. $7\\ \\text{L} = \\ldots\\ \\text{cm}^{3}$\n4. $0{,}45\\ \\text{m}^{3} = \\ldots\\ \\text{L}$\n5. $1250\\ \\text{mL} = \\ldots\\ \\text{dm}^{3}$</p>",
   "modele": "<ol>\n<li>$2{,}5\\ \\text{m}^{3} = 2500\\ \\text{dm}^{3}$.</li>\n<li>$3400\\ \\text{cm}^{3} = 3{,}4\\ \\text{dm}^{3}$.</li>\n<li>$7\\ \\text{L} = 7\\ \\text{dm}^{3} = 7000\\ \\text{cm}^{3}$.</li>\n<li>$0{,}45\\ \\text{m}^{3} = 450\\ \\text{dm}^{3} = 450\\ \\text{L}$.</li>\n<li>$1250\\ \\text{mL} = 1250\\ \\text{cm}^{3} = 1{,}25\\ \\text{dm}^{3}$.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Prisme à base triangulaire",
   "diff": "",
   "q": "<p>Un prisme droit a pour base un triangle de côtés 5 cm, 12 cm et 13 cm ; l'aire de ce triangle\nvaut $30\\ \\text{cm}^{2}$. La hauteur du prisme est de 10 cm.\n1. Calcule le périmètre de la base.\n2. Calcule l'aire latérale, puis l'aire totale.\n3. Calcule le volume.</p>",
   "modele": "<ol>\n<li>$P = 5 + 12 + 13 = 30\\ \\text{cm}$.</li>\n<li>$\\mathcal{A}<em _text_tot=\"\\text{tot\">{\\text{lat}} = 30 \\times 10 = 300\\ \\text{cm}^{2}$ ;\n   $\\mathcal{A}</em>$.}} = 300 + 2 \\times 30 = 360\\ \\text{cm}^{2</li>\n<li>$V = 30 \\times 10 = 300\\ \\text{cm}^{3}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Prisme à base pentagonale",
   "diff": "",
   "q": "<p>Un prisme droit a pour base un pentagone régulier de 4 cm de côté, d'aire $27{,}5\\ \\text{cm}^{2}$.\nSa hauteur mesure 11 cm.\n1. Calcule l'aire latérale.\n2. Calcule l'aire totale.\n3. Calcule le volume.</p>",
   "modele": "<ol>\n<li>Périmètre de la base : $5 \\times 4 = 20\\ \\text{cm}$ ;\n   $\\mathcal{A}_{\\text{lat}} = 20 \\times 11 = 220\\ \\text{cm}^{2}$.</li>\n<li>$\\mathcal{A}_{\\text{tot}} = 220 + 2 \\times 27{,}5 = 220 + 55 = 275\\ \\text{cm}^{2}$.</li>\n<li>$V = 27{,}5 \\times 11 = 302{,}5\\ \\text{cm}^{3}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Du diamètre au volume",
   "diff": "",
   "q": "<p>Un pot de peinture cylindrique a un diamètre de 14 cm et une hauteur de 20 cm.\n1. Donne son rayon.\n2. Calcule l'aire d'une base.\n3. Calcule son volume, puis convertis-le en litres (arrondi au centième).</p>",
   "modele": "<ol>\n<li>$r = 14 \\div 2 = 7\\ \\text{cm}$.</li>\n<li>$\\mathcal{A}_{\\text{base}} = 3{,}14 \\times 7 \\times 7 = 153{,}86\\ \\text{cm}^{2}$.</li>\n<li>$V = 153{,}86 \\times 20 = 3077{,}2\\ \\text{cm}^{3}$, soit $3077{,}2\\ \\text{mL} \\approx 3{,}08\\ \\text{L}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Patron d'un cylindre",
   "diff": "",
   "q": "<p>On veut dessiner le patron d'un cylindre de révolution de rayon 5 cm et de hauteur 12 cm.\n1. Quelles sont les dimensions exactes du rectangle du patron ?\n2. Quelle est l'aire de ce rectangle ?\n3. Quelle est l'aire totale du cylindre ?</p>",
   "modele": "<ol>\n<li>Longueur : $2 \\times 3{,}14 \\times 5 = 31{,}4\\ \\text{cm}$ ; largeur : 12 cm.</li>\n<li>$31{,}4 \\times 12 = 376{,}8\\ \\text{cm}^{2}$.</li>\n<li>Aire d'un disque : $3{,}14 \\times 5 \\times 5 = 78{,}5\\ \\text{cm}^{2}$ ;\n   aire totale : $376{,}8 + 2 \\times 78{,}5 = 376{,}8 + 157 = 533{,}8\\ \\text{cm}^{2}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Retrouver une hauteur",
   "diff": "",
   "q": "<p>Un aquarium a la forme d'un pavé droit. Sa base est un rectangle de 15 cm sur 8 cm et son\nvolume est de $960\\ \\text{cm}^{3}$.\n1. Calcule l'aire de la base.\n2. Déduis-en la hauteur de l'aquarium.</p>",
   "modele": "<ol>\n<li>$\\mathcal{A}_{\\text{base}} = 15 \\times 8 = 120\\ \\text{cm}^{2}$.</li>\n<li>$h = 960 \\div 120 = 8\\ \\text{cm}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Retrouver une arête",
   "diff": "",
   "q": "<p>Un cube a un volume de $1000\\ \\text{cm}^{3}$.\n1. Quelle est la longueur de son arête ?\n2. Calcule son aire totale.\n3. Combien de litres d'eau ce cube peut-il contenir ?</p>",
   "modele": "<ol>\n<li>On cherche le nombre qui, multiplié trois fois par lui-même, donne 1000 :\n   $10 \\times 10 \\times 10 = 1000$, donc l'arête mesure <strong>10 cm</strong>.</li>\n<li>$\\mathcal{A}_{\\text{tot}} = 6 \\times 10 \\times 10 = 600\\ \\text{cm}^{2}$.</li>\n<li>$1000\\ \\text{cm}^{3} = 1\\ \\text{dm}^{3} = 1\\ \\text{L}$.</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "La citerne de la terrasse",
   "diff": "difficile",
   "q": "<p>Sur une terrasse de Casablanca, une citerne cylindrique a un diamètre de 1,2 m et une\nhauteur de 2 m.\n1. Calcule le volume de la citerne en $\\text{m}^{3}$.\n2. Convertis ce volume en litres.\n3. La famille consomme 120 L d'eau par jour. Pendant combien de jours entiers la citerne\n   pleine suffit-elle ?</p>",
   "modele": "<ol>\n<li>$r = 1{,}2 \\div 2 = 0{,}6\\ \\text{m}$ ; $\\mathcal{A}_{\\text{base}} = 3{,}14 \\times 0{,}6 \\times 0{,}6 = 1{,}1304\\ \\text{m}^{2}$ ;\n   $V = 1{,}1304 \\times 2 = 2{,}2608\\ \\text{m}^{3}$.</li>\n<li>$2{,}2608\\ \\text{m}^{3} = 2{,}2608 \\times 1000 = 2260{,}8\\ \\text{L}$.</li>\n<li>$2260{,}8 \\div 120 = 18{,}84$ : la citerne suffit pendant <strong>18 jours entiers</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "La canalisation",
   "diff": "difficile",
   "q": "<p>Une canalisation d'eau rectiligne est un cylindre de 20 cm de diamètre et de 15 m de longueur.\n1. Exprime le rayon en mètres.\n2. Calcule l'aire d'une base en $\\text{m}^{2}$.\n3. Calcule le volume d'eau contenu dans la canalisation pleine, en $\\text{m}^{3}$ puis en litres.</p>",
   "modele": "<ol>\n<li>$20\\ \\text{cm} = 0{,}2\\ \\text{m}$, donc $r = 0{,}2 \\div 2 = 0{,}1\\ \\text{m}$.</li>\n<li>$\\mathcal{A}_{\\text{base}} = 3{,}14 \\times 0{,}1 \\times 0{,}1 = 0{,}0314\\ \\text{m}^{2}$.</li>\n<li>$V = 0{,}0314 \\times 15 = 0{,}471\\ \\text{m}^{3}$, soit $0{,}471 \\times 1000 = 471\\ \\text{L}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Emballer une boîte",
   "diff": "difficile",
   "q": "<p>Une boîte-cadeau est un pavé droit de 25 cm de longueur, 18 cm de largeur et 10 cm de hauteur.\n1. Calcule l'aire totale de la boîte.\n2. Le vendeur ajoute 10 % de papier en plus pour les recouvrements. Quelle aire de papier\n   doit-il prévoir ?\n3. Le papier coûte 15 DH le mètre carré. Quel est le prix payé, arrondi au dirham ?</p>",
   "modele": "<ol>\n<li>$\\mathcal{A} = 2 \\times (25 \\times 18 + 25 \\times 10 + 18 \\times 10) = 2 \\times (450 + 250 + 180) = 2 \\times 880 = 1760\\ \\text{cm}^{2}$.</li>\n<li>$10\\ \\%$ de 1760 : $1760 \\div 10 = 176$ ; aire à prévoir : $1760 + 176 = 1936\\ \\text{cm}^{2}$.</li>\n<li>$1936\\ \\text{cm}^{2} = 0{,}1936\\ \\text{m}^{2}$ ; prix : $0{,}1936 \\times 15 = 2{,}904$, soit\n   environ <strong>3 DH</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Le bassin",
   "diff": "difficile",
   "q": "<p>Un bassin de la piscine municipale d'Agadir a la forme d'un pavé droit de 8 m de longueur,\n4 m de largeur et 1,5 m de profondeur.\n1. Calcule le volume du bassin en $\\text{m}^{3}$, puis en litres.\n2. Un tuyau débite 30 L par minute. Combien de temps faut-il pour remplir le bassin ?\n   Donne la réponse en heures et minutes.</p>",
   "modele": "<ol>\n<li>$V = 8 \\times 4 \\times 1{,}5 = 48\\ \\text{m}^{3} = 48 \\times 1000 = 48\\,000\\ \\text{L}$.</li>\n<li>$48\\,000 \\div 30 = 1600$ minutes.\n   $1600 \\div 60 = 26$ avec un reste de 40, soit <strong>26 h 40 min</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Doubler le rayon",
   "diff": "difficile",
   "q": "<p>Le cylindre A a un rayon de 5 cm et une hauteur de 10 cm.\nLe cylindre B a un rayon de 10 cm et la même hauteur de 10 cm.\n1. Calcule les volumes de A et de B.\n2. Par combien le volume est-il multiplié quand on double le rayon ?\n3. Que se passerait-il si l'on doublait seulement la hauteur ?</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Décrire un solide</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Reconnaître un patron</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer volume et aire d'un pavé</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Calculer volume et aire d'un cube</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Appliquer les formules du cylindre</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Convertir volumes et capacités</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Aire latérale et volume d'un prisme</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Prisme à base pentagonale</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Passer du diamètre au volume</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Construire un patron</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Retrouver une dimension manquante</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Raisonner sur le cube</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser une situation de capacité</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Modéliser une canalisation</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Aire totale et coût</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Volume, débit et durée</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Comparer et raisonner</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$V_{A} = 3{,}14 \\times 5 \\times 5 \\times 10 = 785\\ \\text{cm}^{3}$ ;\n   $V_{B} = 3{,}14 \\times 10 \\times 10 \\times 10 = 3140\\ \\text{cm}^{3}$.</li>\n<li>$3140 \\div 785 = 4$ : le volume est multiplié par <strong>4</strong> quand on double le rayon\n   (car le rayon intervient deux fois dans le calcul).</li>\n<li>En doublant seulement la hauteur, le volume serait seulement multiplié par <strong>2</strong>\n   (on obtiendrait $1570\\ \\text{cm}^{3}$ pour le cylindre A).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M18",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20 · On prend $\\pi \\approx 3{,}14$.</p>\n<h2 id=\"exercice-1-6-points-un-prisme-droit\">Exercice 1 (6 points) — Un prisme droit</h2>\n<p>Un prisme droit a pour bases deux triangles de côtés 9 cm, 12 cm et 15 cm.\nL'aire d'un de ces triangles vaut $54\\ \\text{cm}^{2}$. La hauteur du prisme est de 8 cm.</p>\n<ol>\n<li>Combien ce prisme a-t-il de faces, d'arêtes et de sommets ?</li>\n<li>Calcule le périmètre d'une base.</li>\n<li>Calcule l'aire latérale du prisme.</li>\n<li>Calcule son aire totale.</li>\n<li>Calcule son volume.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5 faces, 9 arêtes, 6 sommets</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$P = 36\\ \\text{cm}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$\\mathcal{A}_{\\text{lat}} = 288\\ \\text{cm}^{2}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$\\mathcal{A}_{\\text{tot}} = 396\\ \\text{cm}^{2}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>5</td>\n<td>$V = 432\\ \\text{cm}^{3}$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-7-points-la-citerne\">Exercice 2 (7 points) — La citerne</h2>\n<p>Une citerne cylindrique de la terrasse d'un immeuble de Fès a un diamètre de 1,6 m\net une hauteur de 2,5 m.</p>\n<ol>\n<li>Donne le rayon de la citerne.</li>\n<li>Calcule l'aire d'une base, en $\\text{m}^{2}$.</li>\n<li>Calcule le volume de la citerne, en $\\text{m}^{3}$.</li>\n<li>Convertis ce volume en litres.</li>\n<li>La famille consomme 160 L d'eau par jour. Pendant combien de jours entiers la citerne\n   pleine suffit-elle ?</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$r = 0{,}8\\ \\text{m}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$2{,}0096\\ \\text{m}^{2}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$5{,}024\\ \\text{m}^{3}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$5024\\ \\text{L}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>5</td>\n<td>31 jours entiers</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-7-points-la-boite-du-patissier\">Exercice 3 (7 points) — La boîte du pâtissier</h2>\n<p>Une boîte à gâteaux est un pavé droit de 30 cm de longueur, 20 cm de largeur\net 12 cm de hauteur.</p>\n<ol>\n<li>Calcule le volume de la boîte en $\\text{cm}^{3}$.</li>\n<li>Convertis ce volume en litres.</li>\n<li>Calcule l'aire totale de la boîte.</li>\n<li>Convertis cette aire en $\\text{m}^{2}$.</li>\n<li>Le pâtissier recouvre la boîte d'un papier vendu 12 DH le mètre carré.\n   Quel est le prix du papier utilisé, arrondi au centime ?</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$7200\\ \\text{cm}^{3}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$7{,}2\\ \\text{L}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$2400\\ \\text{cm}^{2}$</td>\n<td>2</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$0{,}24\\ \\text{m}^{2}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>5</td>\n<td>$2{,}88\\ \\text{DH}$</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>Base à 3 côtés : $3 + 2 = 5$ faces, $3 \\times 3 = 9$ arêtes, $2 \\times 3 = 6$ sommets.</li>\n<li>$P = 9 + 12 + 15 = 36\\ \\text{cm}$.</li>\n<li>$\\mathcal{A}_{\\text{lat}} = P \\times h = 36 \\times 8 = 288\\ \\text{cm}^{2}$.</li>\n<li>$\\mathcal{A}_{\\text{tot}} = 288 + 2 \\times 54 = 288 + 108 = 396\\ \\text{cm}^{2}$.</li>\n<li>$V = \\mathcal{A}_{\\text{base}} \\times h = 54 \\times 8 = 432\\ \\text{cm}^{3}$.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$r = 1{,}6 \\div 2 = 0{,}8\\ \\text{m}$.</li>\n<li>$\\mathcal{A}_{\\text{base}} = 3{,}14 \\times 0{,}8 \\times 0{,}8 = 3{,}14 \\times 0{,}64 = 2{,}0096\\ \\text{m}^{2}$.</li>\n<li>$V = 2{,}0096 \\times 2{,}5 = 5{,}024\\ \\text{m}^{3}$.</li>\n<li>$5{,}024\\ \\text{m}^{3} = 5{,}024 \\times 1000 = 5024\\ \\text{L}$.</li>\n<li>$5024 \\div 160 = 31{,}4$ : la citerne suffit <strong>31 jours entiers</strong>.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$V = 30 \\times 20 \\times 12 = 7200\\ \\text{cm}^{3}$.</li>\n<li>$7200\\ \\text{cm}^{3} = 7{,}2\\ \\text{dm}^{3} = 7{,}2\\ \\text{L}$.</li>\n<li>$\\mathcal{A}_{\\text{tot}} = 2 \\times (30 \\times 20 + 30 \\times 12 + 20 \\times 12)\n   = 2 \\times (600 + 360 + 240) = 2 \\times 1200 = 2400\\ \\text{cm}^{2}$.</li>\n<li>$1\\ \\text{m}^{2} = 10\\,000\\ \\text{cm}^{2}$, donc $2400\\ \\text{cm}^{2} = 0{,}24\\ \\text{m}^{2}$.</li>\n<li>$0{,}24 \\times 12 = 2{,}88$, soit <strong>2,88 DH</strong>.</li>\n</ol>"
 }
},

{
 "id": "m19",
 "domaine": "maths",
 "unite": 19,
 "theme": "Numérique et calcul",
 "tag": "M19",
 "icone": "🔢",
 "niveau": "1re année collège · Maroc",
 "titre": "M19 — Droite graduée et repérage dans le plan",
 "duree": "6 h",
 "semestre": "2",
 "objectifs": [
  "Graduer une droite, reconnaître l'origine et l'unité.",
  "Lire et écrire l'abscisse d'un point.",
  "Calculer la distance entre deux points d'une droite graduée.",
  "Lire et placer des points dans un repère orthogonal du plan.",
  "Utiliser les symétries dans un repère."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Sur la route entre Casablanca et Settat, des bornes indiquent le kilométrage.\nLa borne « 0 » est placée à la sortie de Casablanca. Une station-service se trouve\nà la borne 23, un péage à la borne 41.\nPour dire où l'on se trouve, un seul nombre suffit : c'est le principe de la <strong>droite graduée</strong>.</p>\n<p>Mais si l'on cherche une maison dans un lotissement d'Agadir, un seul nombre ne suffit plus :\nil faut la <strong>rue</strong> (numéro d'avenue) <strong>et</strong> le <strong>numéro</strong> dans cette rue. Il faut donc <strong>deux</strong>\nnombres. C'est le principe du <strong>repère du plan</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Trace une droite. Place un point $O$ dessus, puis un point $I$ à 1 cm à droite\nde $O$. Reporte cette longueur plusieurs fois à droite et à gauche de $O$, et écris sous les\ngraduations : $0, 1, 2, 3, \\ldots$ à droite et $-1, -2, -3, \\ldots$ à gauche.</p>\n<p><strong>Observation.</strong> Chaque point de la droite correspond à un nombre, et un seul.\n<strong>Conclusion.</strong> On dit que la droite est <strong>graduée</strong> : $O$ est l'<strong>origine</strong> et $OI$ est\nl'<strong>unité</strong>.</p>\n<p><strong>Activité 2.</strong> Sur une feuille quadrillée, trace deux droites graduées perpendiculaires qui\nse croisent en $O$, avec la même origine. Place un pion sur un nœud du quadrillage et demande\nà ton voisin de le retrouver en donnant deux nombres seulement.</p>\n<p><strong>Observation.</strong> Deux nombres suffisent, à condition de toujours donner d'abord le nombre lu\nsur la droite horizontale.\n<strong>Conclusion.</strong> Ce couple de nombres s'appelle le couple de <strong>coordonnées</strong> du point.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-droite-graduee-et-abscisse\">3.1 Droite graduée et abscisse</h3>\n<blockquote>\n<p><strong>Définition.</strong> Une <strong>droite graduée</strong> est une droite sur laquelle on a choisi :\nun point <strong>origine</strong> noté $O$, un <strong>sens</strong> (indiqué par une flèche) et une <strong>unité</strong> de longueur.\nLe nombre associé à un point $A$ s'appelle l'<strong>abscisse</strong> de $A$. On écrit $A(-3)$ pour dire\n« le point $A$ a pour abscisse $-3$ ».</p>\n</blockquote>\n<pre><code>   B         A              O         C         D\n---+----+----+----+----+----+----+----+----+----+---&gt;\n  -5   -4   -3   -2   -1    0    1    2    3    4\n\n  A(-3)   B(-5)   C(2)   D(4)   et l'origine O(0)\n</code></pre>\n<p>⚠️ <strong>Erreur fréquente.</strong> Compter les graduations à partir de 1 au lieu de 0.\nL'origine porte toujours l'abscisse $0$.</p>\n<h3 id=\"32-distance-entre-deux-points\">3.2 Distance entre deux points</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Sur une droite graduée, la distance entre deux points est égale à\n<strong>la plus grande abscisse moins la plus petite</strong>. Une distance est toujours <strong>positive</strong>.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $A(-3)$ et $C(2)$ : $AC = 2 - (-3) = 2 + 3 = 5$ unités.\n<strong>Exemple.</strong> $C(2)$ et $D(4)$ : $CD = 4 - 2 = 2$ unités.</p>\n<p><strong>Méthode (pas à pas).</strong>\n1. Je repère les deux abscisses.\n2. Je compare : laquelle est la plus grande ?\n3. Je calcule : grande abscisse $-$ petite abscisse.\n4. Je vérifie que le résultat est positif.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Écrire $AC = -3 - 2 = -5$. Une distance ne peut jamais être négative :\nil faut soustraire dans le bon ordre.</p>\n<h3 id=\"33-repere-orthogonal-du-plan\">3.3 Repère orthogonal du plan</h3>\n<blockquote>\n<p><strong>Définition.</strong> Un <strong>repère orthogonal</strong> du plan est formé de deux droites graduées\n<strong>perpendiculaires</strong> qui ont la même origine $O$ :\n- l'<strong>axe des abscisses</strong>, horizontal, orienté vers la droite ;\n- l'<strong>axe des ordonnées</strong>, vertical, orienté vers le haut.</p>\n<p>Le point $O$ s'appelle l'<strong>origine du repère</strong>.</p>\n<p><strong>Définition.</strong> Tout point $M$ du plan est repéré par un couple de nombres $(x\\ ;\\ y)$ :\n$x$ est son <strong>abscisse</strong> (lue sur l'axe horizontal), $y$ est son <strong>ordonnée</strong>\n(lue sur l'axe vertical). On écrit $M(x\\ ;\\ y)$.</p>\n</blockquote>\n<pre><code>              y\n              ^\n            4 |\n            3 |        . B(3 ; 3)\n            2 |\n            1 |\n       -------+---+---+---+---+---&gt; x\n           O  |   1   2   3   4\n           -1 |\n           -2 |    . C(1 ; -2)\n   A(-3 ; -3) est en bas à gauche\n</code></pre>\n<p><strong>Méthode pour placer $M(4\\ ;\\ -2)$.</strong>\n1. Je pars de l'origine $O$.\n2. J'avance de 4 unités <strong>vers la droite</strong> (abscisse positive).\n3. Je descends de 2 unités (ordonnée négative).\n4. Je marque le point et j'écris son nom.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Inverser les deux nombres. Le point $(5\\ ;\\ 2)$ n'est pas le point\n$(2\\ ;\\ 5)$. On lit <strong>toujours l'abscisse d'abord</strong>, comme dans l'ordre alphabétique :\n<strong>a</strong>bscisse avant <strong>o</strong>rdonnée.</p>\n<h3 id=\"34-points-particuliers\">3.4 Points particuliers</h3>\n<blockquote>\n<p><strong>Propriétés.</strong>\n- Un point de l'axe des abscisses a une <strong>ordonnée nulle</strong> : $(x\\ ;\\ 0)$.\n- Un point de l'axe des ordonnées a une <strong>abscisse nulle</strong> : $(0\\ ;\\ y)$.\n- L'origine a pour coordonnées $(0\\ ;\\ 0)$.</p>\n</blockquote>\n<h3 id=\"35-symetries-dans-le-repere\">3.5 Symétries dans le repère</h3>\n<blockquote>\n<p><strong>Propriétés.</strong> Soit $M(x\\ ;\\ y)$.\n- Le symétrique de $M$ par rapport à l'<strong>axe des abscisses</strong> a pour coordonnées $(x\\ ;\\ -y)$.\n- Le symétrique de $M$ par rapport à l'<strong>axe des ordonnées</strong> a pour coordonnées $(-x\\ ;\\ y)$.\n- Le symétrique de $M$ par rapport à l'<strong>origine</strong> $O$ a pour coordonnées $(-x\\ ;\\ -y)$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Pour $M(3\\ ;\\ 5)$ : symétrique par rapport à l'axe des abscisses $(3\\ ;\\ -5)$ ;\npar rapport à l'axe des ordonnées $(-3\\ ;\\ 5)$ ; par rapport à $O$ : $(-3\\ ;\\ -5)$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Sur une droite graduée d'unité 1 cm, $E$ a pour abscisse $-7$ et $F$ pour\nabscisse $5$. Calcule $EF$.\n<em>Solution.</em> $5 &gt; -7$, donc $EF = 5 - (-7) = 5 + 7 = 12$ unités, soit 12 cm.</p>\n<p><strong>Exemple 2.</strong> Dans un repère, place $A(-2\\ ;\\ 3)$, $B(4\\ ;\\ 3)$ et $C(4\\ ;\\ -1)$.\nQuelle est la nature du triangle formé par les segments tracés en $B$ ?\n<em>Solution.</em> $A$ et $B$ ont la même ordonnée : $[AB]$ est horizontal, $AB = 4 - (-2) = 6$.\n$B$ et $C$ ont la même abscisse : $[BC]$ est vertical, $BC = 3 - (-1) = 4$.\nLes deux segments sont perpendiculaires : l'angle en $B$ est droit.</p>\n<p><strong>Exemple 3.</strong> Un graphique donne la température à Ifrane : à 6 h il fait $-2$ °C,\nà 12 h il fait $9$ °C. Lis les coordonnées des deux points.\n<em>Solution.</em> Les points sont $(6\\ ;\\ -2)$ et $(12\\ ;\\ 9)$. L'abscisse est l'heure,\nl'ordonnée est la température. La hausse est de $9 - (-2) = 11$ °C.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Droite graduée : une origine, un sens, une unité ; chaque point a une <strong>abscisse</strong>.</li>\n<li>Distance = plus grande abscisse $-$ plus petite abscisse ; toujours positive.</li>\n<li>Repère orthogonal : deux axes gradués perpendiculaires de même origine.</li>\n<li>$M(x\\ ;\\ y)$ : $x$ abscisse d'abord, $y$ ordonnée ensuite.</li>\n<li>Symétries : $(x\\ ;\\ -y)$, $(-x\\ ;\\ y)$, $(-x\\ ;\\ -y)$.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Cherche comment les cartes utilisent la latitude et la longitude : c'est un repère sur la Terre.</li>\n<li>Sur un jeu de bataille navale, explique pourquoi l'ordre des deux repères est essentiel.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques 1AC — MEN Maroc</a></li>\n<li><a href=\"https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_cart%C3%A9siennes\">Coordonnées cartésiennes</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"droite-graduee\">Droite graduée</h2>\n<table>\n<thead>\n<tr>\n<th>Mot</th>\n<th>Signification</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Origine $O$</td>\n<td>point d'abscisse $0$</td>\n</tr>\n<tr>\n<td>Unité</td>\n<td>longueur $OI$ reportée régulièrement</td>\n</tr>\n<tr>\n<td>Sens</td>\n<td>flèche vers la droite (sens croissant)</td>\n</tr>\n<tr>\n<td>Abscisse de $A$</td>\n<td>nombre associé au point $A$, noté $A(a)$</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p><strong>Distance.</strong> Si $A(a)$ et $B(b)$ avec $b &gt; a$, alors $AB = b - a$.\nUne distance est <strong>toujours positive</strong>.</p>\n</blockquote>\n<p>Exemple : $A(-4)$ et $B(3)$ donnent $AB = 3 - (-4) = 7$ unités.</p>\n<h2 id=\"repere-orthogonal-du-plan\">Repère orthogonal du plan</h2>\n<ul>\n<li>Deux droites graduées <strong>perpendiculaires</strong>, même origine $O$.</li>\n<li>Axe horizontal = <strong>axe des abscisses</strong> ; axe vertical = <strong>axe des ordonnées</strong>.</li>\n<li>Un point s'écrit $M(x\\ ;\\ y)$ : <strong>abscisse d'abord</strong>, ordonnée ensuite.</li>\n</ul>\n<pre><code>        y\n        ^\n      3 |    . M(2 ; 3)\n      2 |\n      1 |\n  ------+---+---+---&gt; x\n     O  |   1   2\n     -1 |\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>Position du point</th>\n<th>Coordonnées</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Origine</td>\n<td>$(0\\ ;\\ 0)$</td>\n</tr>\n<tr>\n<td>Sur l'axe des abscisses</td>\n<td>$(x\\ ;\\ 0)$</td>\n</tr>\n<tr>\n<td>Sur l'axe des ordonnées</td>\n<td>$(0\\ ;\\ y)$</td>\n</tr>\n<tr>\n<td>En haut à droite</td>\n<td>$x &gt; 0$ et $y &gt; 0$</td>\n</tr>\n<tr>\n<td>En bas à gauche</td>\n<td>$x &lt; 0$ et $y &lt; 0$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"symetries-pour-mx-y\">Symétries (pour $M(x\\ ;\\ y)$)</h2>\n<table>\n<thead>\n<tr>\n<th>Symétrie par rapport à</th>\n<th>Coordonnées de l'image</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>l'axe des abscisses</td>\n<td>$(x\\ ;\\ -y)$</td>\n</tr>\n<tr>\n<td>l'axe des ordonnées</td>\n<td>$(-x\\ ;\\ y)$</td>\n</tr>\n<tr>\n<td>l'origine $O$</td>\n<td>$(-x\\ ;\\ -y)$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"deux-reperes-utiles\">Deux repères utiles</h2>\n<ul>\n<li>Deux points de <strong>même ordonnée</strong> : le segment qui les joint est <strong>horizontal</strong>,\n  sa longueur est la différence des abscisses.</li>\n<li>Deux points de <strong>même abscisse</strong> : le segment est <strong>vertical</strong>,\n  sa longueur est la différence des ordonnées.</li>\n</ul>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Inverser abscisse et ordonnée : $(5\\ ;\\ 2)$ n'est pas $(2\\ ;\\ 5)$.</li>\n<li>Trouver une distance négative : on soustrait la plus petite abscisse à la plus grande.</li>\n<li>Oublier de compter les graduations à partir de l'origine $0$, et non de 1.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p><strong>A</strong> avant <strong>O</strong> : <strong>A</strong>bscisse (horizontale) puis <strong>O</strong>rdonnée (verticale).\nSur un graphique, l'axe horizontal porte souvent le temps, l'axe vertical la grandeur mesurée.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Lire des abscisses",
   "diff": "facile",
   "q": "<p>On donne la droite graduée suivante (unité : 1 carreau).</p>\n<pre><code>   M         N         P              Q         R\n---+----+----+----+----+----+----+----+----+----+---&gt;\n  -6   -5   -4   -3   -2   -1    0    1    2    3\n</code></pre>\n<p>Écris l'abscisse de chacun des points $M$, $N$, $P$, $Q$ et $R$.</p>",
   "modele": "<p>$M(-6)$, $N(-4)$, $P(-2)$, $Q(1)$, $R(3)$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Placer sur une droite graduée",
   "diff": "facile",
   "q": "<p>Trace une droite graduée d'origine $O$ et d'unité 1 cm, allant de $-6$ à $6$.\nPlace les points : $A(4)$, $B(-3)$, $C(0)$, $D(-5)$, $E(2)$.</p>",
   "modele": "<p>On trace la droite, on place l'origine $O$ puis on reporte l'unité de 1 cm de part et d'autre.\n- $A$ est à 4 cm à droite de $O$ ;\n- $B$ est à 3 cm à gauche de $O$ ;\n- $C$ est confondu avec l'origine $O$ ;\n- $D$ est à 5 cm à gauche de $O$ ;\n- $E$ est à 2 cm à droite de $O$.</p>\n<pre><code>   D         B         O    E         A\n---+----+----+----+----+----+----+----+----+---&gt;\n  -5   -4   -3   -2   -1    0    1    2    3    4\n</code></pre>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Distances sur une droite",
   "diff": "facile",
   "q": "<p>Sur une droite graduée, on donne $A(-6)$, $B(-1)$, $C(3)$ et $D(7)$.\nCalcule $AB$, $BC$, $CD$, $BD$ et $AD$.</p>",
   "modele": "<ul>\n<li>$AB = -1 - (-6) = -1 + 6 = 5$</li>\n<li>$BC = 3 - (-1) = 3 + 1 = 4$</li>\n<li>$CD = 7 - 3 = 4$</li>\n<li>$BD = 7 - (-1) = 8$</li>\n<li>$AD = 7 - (-6) = 13$</li>\n</ul>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Lire des coordonnées",
   "diff": "facile",
   "q": "<p>Dans le repère ci-dessous, donne les coordonnées des points $A$, $B$, $C$ et $D$.</p>\n<pre><code>        y\n        ^\n      4 |         . B\n      3 |\n      2 | . A\n      1 |\n  ------+---+---+---+---&gt; x\n     O  |   1   2   3\n     -1 |             . D\n     -2 |\n     -3 |     . C\n\n  A est à 1 carreau à droite de O et 2 carreaux au-dessus.\n  B est à 2 carreaux à droite de O et 4 carreaux au-dessus.\n  C est à 1 carreau à droite de O et 3 carreaux en dessous.\n  D est à 3 carreaux à droite de O et 1 carreau en dessous.\n</code></pre>",
   "modele": "<p>$A(1\\ ;\\ 2)$, $B(2\\ ;\\ 4)$, $C(1\\ ;\\ -3)$, $D(3\\ ;\\ -1)$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Placer des points",
   "diff": "facile",
   "q": "<p>Dans un repère orthogonal (unité : 1 cm sur chaque axe), place les points :\n$A(3\\ ;\\ 2)$, $B(-2\\ ;\\ 4)$, $C(0\\ ;\\ -3)$, $D(-4\\ ;\\ -1)$, $E(5\\ ;\\ 0)$.</p>",
   "modele": "<ul>\n<li>$A(3\\ ;\\ 2)$ : 3 carreaux à droite, 2 vers le haut.</li>\n<li>$B(-2\\ ;\\ 4)$ : 2 carreaux à gauche, 4 vers le haut.</li>\n<li>$C(0\\ ;\\ -3)$ : sur l'axe des ordonnées, 3 carreaux vers le bas.</li>\n<li>$D(-4\\ ;\\ -1)$ : 4 carreaux à gauche, 1 vers le bas.</li>\n<li>$E(5\\ ;\\ 0)$ : sur l'axe des abscisses, 5 carreaux à droite.</li>\n</ul>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Points sur les axes",
   "diff": "facile",
   "q": "<p>Parmi les points $F(0\\ ;\\ 5)$, $G(-3\\ ;\\ 0)$, $H(2\\ ;\\ 2)$, $I(0\\ ;\\ 0)$ et $J(0\\ ;\\ -4)$ :\n1. Lesquels sont sur l'axe des abscisses ?\n2. Lesquels sont sur l'axe des ordonnées ?\n3. Lequel est l'origine du repère ?</p>",
   "modele": "<ol>\n<li>Sur l'axe des abscisses (ordonnée nulle) : $G(-3\\ ;\\ 0)$ et $I(0\\ ;\\ 0)$.</li>\n<li>Sur l'axe des ordonnées (abscisse nulle) : $F(0\\ ;\\ 5)$, $J(0\\ ;\\ -4)$ et $I(0\\ ;\\ 0)$.</li>\n<li>L'origine est $I(0\\ ;\\ 0)$.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Abscisse manquante",
   "diff": "",
   "q": "<p>Sur une droite graduée, $A$ a pour abscisse $-2$ et $B$ a pour abscisse $6$.\n1. Calcule $AB$.\n2. Quelle est l'abscisse du milieu $M$ du segment $[AB]$ ?\n3. Trouve les deux abscisses possibles d'un point $C$ tel que $AC = 5$.</p>",
   "modele": "<ol>\n<li>$AB = 6 - (-2) = 8$ unités.</li>\n<li>Le milieu se trouve à 4 unités de chacun : $-2 + 4 = 2$, donc $M(2)$.</li>\n<li>En allant vers la droite : $-2 + 5 = 3$ ; en allant vers la gauche : $-2 - 5 = -7$.\n   Donc $C(3)$ ou $C(-7)$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Changer d'unité",
   "diff": "",
   "q": "<p>Une droite est graduée avec une unité de 2 cm. Le point $P$ a pour abscisse $-3$\net le point $Q$ a pour abscisse $4$.\n1. Calcule $PQ$ en unités.\n2. Calcule $PQ$ en centimètres.</p>",
   "modele": "<ol>\n<li>$PQ = 4 - (-3) = 7$ unités.</li>\n<li>Chaque unité vaut 2 cm : $PQ = 7 \\times 2 = 14\\ \\text{cm}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Un rectangle dans le repère",
   "diff": "",
   "q": "<p>On donne $A(-3\\ ;\\ 2)$, $B(4\\ ;\\ 2)$ et $C(4\\ ;\\ -1)$.\n1. Que peux-tu dire du segment $[AB]$ ? Calcule sa longueur.\n2. Que peux-tu dire du segment $[BC]$ ? Calcule sa longueur.\n3. Donne les coordonnées du point $D$ tel que $ABCD$ soit un rectangle.\n4. Calcule le périmètre et l'aire de ce rectangle (unité : le centimètre).</p>",
   "modele": "<ol>\n<li>$A$ et $B$ ont la même ordonnée $2$ : $[AB]$ est <strong>horizontal</strong> et $AB = 4 - (-3) = 7$.</li>\n<li>$B$ et $C$ ont la même abscisse $4$ : $[BC]$ est <strong>vertical</strong> et $BC = 2 - (-1) = 3$.</li>\n<li>$D$ doit avoir l'abscisse de $A$ et l'ordonnée de $C$ : $D(-3\\ ;\\ -1)$.</li>\n<li>Périmètre : $2 \\times (7 + 3) = 20\\ \\text{cm}$ ; aire : $7 \\times 3 = 21\\ \\text{cm}^{2}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Symétriques",
   "diff": "",
   "q": "<p>On donne $A(2\\ ;\\ 5)$, $B(-3\\ ;\\ 1)$ et $C(0\\ ;\\ -4)$.\nPour chacun de ces points, donne les coordonnées de son symétrique :\n1. par rapport à l'axe des abscisses ;\n2. par rapport à l'axe des ordonnées ;\n3. par rapport à l'origine $O$.</p>",
   "modele": "<table>\n<thead>\n<tr>\n<th>Point</th>\n<th>/ axe des abscisses</th>\n<th>/ axe des ordonnées</th>\n<th>/ origine</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$A(2\\ ;\\ 5)$</td>\n<td>$(2\\ ;\\ -5)$</td>\n<td>$(-2\\ ;\\ 5)$</td>\n<td>$(-2\\ ;\\ -5)$</td>\n</tr>\n<tr>\n<td>$B(-3\\ ;\\ 1)$</td>\n<td>$(-3\\ ;\\ -1)$</td>\n<td>$(3\\ ;\\ 1)$</td>\n<td>$(3\\ ;\\ -1)$</td>\n</tr>\n<tr>\n<td>$C(0\\ ;\\ -4)$</td>\n<td>$(0\\ ;\\ 4)$</td>\n<td>$(0\\ ;\\ -4)$</td>\n<td>$(0\\ ;\\ 4)$</td>\n</tr>\n</tbody>\n</table>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Lecture d'un graphique de température",
   "diff": "",
   "q": "<p>À Ifrane, un relevé donne les points suivants (abscisse : l'heure, ordonnée : la température\nen degrés Celsius) : $(0\\ ;\\ -5)$, $(6\\ ;\\ -2)$, $(12\\ ;\\ 7)$, $(18\\ ;\\ 3)$, $(24\\ ;\\ -4)$.\n1. Quelle est la température à 12 h ?\n2. À quelle heure la température est-elle la plus basse ?\n3. De combien de degrés la température a-t-elle augmenté entre 6 h et 12 h ?</p>",
   "modele": "<ol>\n<li>À 12 h, l'ordonnée du point $(12\\ ;\\ 7)$ vaut 7 : il fait $7$ °C.</li>\n<li>La plus petite ordonnée est $-5$ : c'est à 0 h.</li>\n<li>$7 - (-2) = 9$ : la température a augmenté de 9 °C.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Un carré",
   "diff": "",
   "q": "<p>On donne $A(1\\ ;\\ 1)$, $B(5\\ ;\\ 1)$, $C(5\\ ;\\ 5)$ et $D(1\\ ;\\ 5)$ (unité : 1 cm).\n1. Calcule $AB$ et $BC$.\n2. Quelle est la nature du quadrilatère $ABCD$ ?\n3. Calcule son périmètre et son aire.</p>",
   "modele": "<ol>\n<li>$A$ et $B$ ont la même ordonnée : $AB = 5 - 1 = 4\\ \\text{cm}$.\n   $B$ et $C$ ont la même abscisse : $BC = 5 - 1 = 4\\ \\text{cm}$.</li>\n<li>Les côtés sont horizontaux ou verticaux, donc perpendiculaires, et de même longueur :\n   $ABCD$ est un <strong>carré</strong> de côté 4 cm.</li>\n<li>Périmètre : $4 \\times 4 = 16\\ \\text{cm}$ ; aire : $4 \\times 4 = 16\\ \\text{cm}^{2}$.</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Les bornes de la route",
   "diff": "difficile",
   "q": "<p>Sur la route de Casablanca à Settat, la borne 0 est à la sortie de Casablanca.\nUne station-service est à la borne 23, un péage à la borne 41, un restaurant à la borne 58.\n1. Représente la situation par une droite graduée (unité : 1 cm pour 10 km).\n2. Quelle distance sépare la station-service du péage ?\n3. Quelle distance sépare la station-service du restaurant ?\n4. Un automobiliste part du péage et roule 25 km vers Casablanca. À quelle borne se trouve-t-il ?</p>",
   "modele": "<ol>\n<li>On gradue une droite de 0 à 60 (1 cm pour 10 km) et on place les points d'abscisses\n   23, 41 et 58.</li>\n</ol>\n<pre><code> Casa                 station      péage        restaurant\n---+---------+---------+---+---------+---+---------+---&gt;\n   0        10        20  23       40 41       58\n</code></pre>\n<ol start=\"2\">\n<li>$41 - 23 = 18\\ \\text{km}$.</li>\n<li>$58 - 23 = 35\\ \\text{km}$.</li>\n<li>Rouler vers Casablanca fait <strong>diminuer</strong> le kilométrage : $41 - 25 = 16$.\n   Il se trouve à la borne <strong>16</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Le drapeau symétrique",
   "diff": "difficile",
   "q": "<p>Dans un repère, on place $A(1\\ ;\\ 2)$, $B(4\\ ;\\ 2)$ et $C(4\\ ;\\ 5)$.\n1. Donne les coordonnées de $A'$, $B'$, $C'$, symétriques de $A$, $B$, $C$ par rapport\n   à l'axe des ordonnées.\n2. Donne les coordonnées de $A''$, $B''$, $C''$, symétriques de $A$, $B$, $C$ par rapport\n   à l'origine.\n3. Compare la longueur $AB$ et la longueur $A'B'$. Que remarques-tu ?</p>",
   "modele": "<ol>\n<li>Symétrie par rapport à l'axe des ordonnées : on change le signe de l'abscisse.\n   $A'(-1\\ ;\\ 2)$, $B'(-4\\ ;\\ 2)$, $C'(-4\\ ;\\ 5)$.</li>\n<li>Symétrie par rapport à l'origine : on change les deux signes.\n   $A''(-1\\ ;\\ -2)$, $B''(-4\\ ;\\ -2)$, $C''(-4\\ ;\\ -5)$.</li>\n<li>$AB = 4 - 1 = 3$ et $A'B' = -1 - (-4) = 3$. Les deux longueurs sont égales :\n   une symétrie <strong>conserve les longueurs</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Le parallélogramme",
   "diff": "difficile",
   "q": "<p>On donne $A(-2\\ ;\\ 1)$, $B(3\\ ;\\ 1)$ et $C(5\\ ;\\ 4)$.\n1. Calcule $AB$.\n2. Pour que $ABCD$ soit un parallélogramme, le segment $[DC]$ doit être horizontal,\n   de même longueur que $[AB]$ et situé à la même hauteur que $C$.\n   Donne les coordonnées de $D$.\n3. Vérifie que $DC = AB$.</p>",
   "modele": "<ol>\n<li>$A$ et $B$ ont la même ordonnée : $AB = 3 - (-2) = 5$.</li>\n<li>$D$ a la même ordonnée que $C$, c'est-à-dire 4, et $DC$ doit valoir 5.\n   Comme $C$ a pour abscisse 5, on prend $5 - 5 = 0$ : $D(0\\ ;\\ 4)$.</li>\n<li>$DC = 5 - 0 = 5 = AB$. Les côtés $[AB]$ et $[DC]$ sont parallèles et de même longueur :\n   $ABCD$ est bien un parallélogramme.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "La croissance d'un plant de menthe",
   "diff": "difficile",
   "q": "<p>Un élève de Fès mesure chaque semaine un plant de menthe. Il obtient les points\n$(0\\ ;\\ 4)$, $(1\\ ;\\ 7)$, $(2\\ ;\\ 11)$, $(3\\ ;\\ 14)$, $(4\\ ;\\ 20)$\n(abscisse : semaine, ordonnée : hauteur en cm).\n1. Quelle était la hauteur du plant au départ ?\n2. De combien a-t-il grandi entre la semaine 1 et la semaine 4 ?\n3. Pendant quelle semaine la croissance a-t-elle été la plus forte ?</p>",
   "modele": "<ol>\n<li>Au départ (semaine 0), l'ordonnée vaut 4 : le plant mesurait <strong>4 cm</strong>.</li>\n<li>Semaine 1 : 7 cm ; semaine 4 : 20 cm. Il a grandi de $20 - 7 = 13\\ \\text{cm}$.</li>\n<li>Croissances successives : $7 - 4 = 3$ ; $11 - 7 = 4$ ; $14 - 11 = 3$ ; $20 - 14 = 6$.\n   La plus forte croissance a eu lieu <strong>entre la semaine 3 et la semaine 4</strong> ($+6$ cm).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "La chasse au trésor",
   "diff": "difficile",
   "q": "<p>Sur le plan d'une plage d'Essaouira, le parasol est au point $P(-4\\ ;\\ 3)$\net la barque au point $B(6\\ ;\\ 3)$ (unité : 1 carreau pour 10 m).\n1. Ces deux points ont la même ordonnée : que peux-tu en déduire ?\n2. Calcule la distance $PB$ en carreaux, puis en mètres.\n3. Le trésor est au milieu de $[PB]$. Donne ses coordonnées.\n4. Un second trésor est le symétrique du premier par rapport à l'origine.\n   Donne ses coordonnées.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Lire une abscisse</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Placer sur une droite graduée</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer une distance</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Lire des coordonnées</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Placer des points dans un repère</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Reconnaître les points des axes</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Raisonner sur les abscisses</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Utiliser l'unité de graduation</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Repérer un rectangle</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Appliquer les symétries</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Lire un graphique</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Reconnaître un carré</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser par une droite graduée</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Symétries et conservation des longueurs</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Construire un parallélogramme</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Lire et interpréter un graphique</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Résoudre un problème de repérage</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>Même ordonnée $3$ : le segment $[PB]$ est <strong>horizontal</strong> (parallèle à l'axe des abscisses).</li>\n<li>$PB = 6 - (-4) = 10$ carreaux, soit $10 \\times 10 = 100\\ \\text{m}$.</li>\n<li>Le milieu a la même ordonnée 3 et pour abscisse $-4 + 5 = 1$ : le trésor est en $(1\\ ;\\ 3)$.</li>\n<li>Symétrique par rapport à l'origine : on change les deux signes, on obtient $(-1\\ ;\\ -3)$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M19",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20</p>\n<h2 id=\"exercice-1-6-points-sur-une-droite-graduee\">Exercice 1 (6 points) — Sur une droite graduée</h2>\n<p>Sur une droite graduée d'origine $O$ et d'unité 1 cm, on place $A(-5)$, $B(-2)$ et $C(4)$.</p>\n<ol>\n<li>Trace la droite et place les trois points.</li>\n<li>Calcule $AB$.</li>\n<li>Calcule $AC$.</li>\n<li>Calcule $BC$.</li>\n<li>Donne l'abscisse du milieu $M$ du segment $[AC]$.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Droite graduée correcte, 3 points placés</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$AB = 3$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$AC = 9$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$BC = 6$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>5</td>\n<td>$M(-0{,}5)$</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-7-points-dans-un-repere\">Exercice 2 (7 points) — Dans un repère</h2>\n<p>Dans un repère orthogonal (unité : 1 cm), on donne $A(-3\\ ;\\ 4)$, $B(2\\ ;\\ 4)$ et $C(2\\ ;\\ -1)$.</p>\n<ol>\n<li>Place ces trois points.</li>\n<li>Calcule $AB$ et justifie que $[AB]$ est horizontal.</li>\n<li>Calcule $BC$ et justifie que $[BC]$ est vertical.</li>\n<li>Donne les coordonnées de $D$ pour que $ABCD$ soit un quadrilatère à quatre angles droits.</li>\n<li>Quelle est la nature exacte de $ABCD$ ? Calcule son aire.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>3 points correctement placés</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$AB = 5$, même ordonnée</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$BC = 5$, même abscisse</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$D(-3\\ ;\\ -1)$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Carré, aire $25\\ \\text{cm}^{2}$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-7-points-symetries-et-lecture-de-graphique\">Exercice 3 (7 points) — Symétries et lecture de graphique</h2>\n<p><strong>Partie A.</strong> On reprend le point $A(-3\\ ;\\ 4)$.\n1. Donne les coordonnées de son symétrique par rapport à l'axe des abscisses.\n2. Donne les coordonnées de son symétrique par rapport à l'axe des ordonnées.\n3. Donne les coordonnées de son symétrique par rapport à l'origine.</p>\n<p><strong>Partie B.</strong> Un compteur d'eau d'un logement de Marrakech donne, mois par mois, les points\n$(1\\ ;\\ 12)$, $(2\\ ;\\ 15)$, $(3\\ ;\\ 14)$, $(4\\ ;\\ 21)$\n(abscisse : numéro du mois, ordonnée : consommation en $\\text{m}^{3}$).\n4. Quelle est la consommation du mois 3 ?\n5. Quel mois la consommation est-elle la plus forte ?\n6. Calcule la consommation totale des 4 mois.\n7. L'eau coûte 6 DH le mètre cube. Quel est le montant total payé ?</p>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$(-3\\ ;\\ -4)$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$(3\\ ;\\ 4)$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3</td>\n<td>$(3\\ ;\\ -4)$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>4</td>\n<td>$14\\ \\text{m}^{3}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Mois 4</td>\n<td>1</td>\n</tr>\n<tr>\n<td>6</td>\n<td>$62\\ \\text{m}^{3}$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>7</td>\n<td>$372\\ \\text{DH}$</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>Placement :</li>\n</ol>\n<pre><code>   A         B              O              C\n---+----+----+----+----+----+----+----+----+---&gt;\n  -5   -4   -3   -2   -1    0    1    2    3    4\n</code></pre>\n<ol start=\"2\">\n<li>$AB = -2 - (-5) = -2 + 5 = 3$ cm.</li>\n<li>$AC = 4 - (-5) = 4 + 5 = 9$ cm.</li>\n<li>$BC = 4 - (-2) = 4 + 2 = 6$ cm.</li>\n<li>Le milieu est à $9 \\div 2 = 4{,}5$ cm de $A$ : $-5 + 4{,}5 = -0{,}5$, donc $M(-0{,}5)$.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$A$ : 3 carreaux à gauche et 4 vers le haut ; $B$ : 2 à droite et 4 vers le haut ;\n   $C$ : 2 à droite et 1 vers le bas.</li>\n<li>$A$ et $B$ ont la même ordonnée 4, donc $[AB]$ est horizontal ; $AB = 2 - (-3) = 5$ cm.</li>\n<li>$B$ et $C$ ont la même abscisse 2, donc $[BC]$ est vertical ; $BC = 4 - (-1) = 5$ cm.</li>\n<li>$D$ a l'abscisse de $A$ et l'ordonnée de $C$ : $D(-3\\ ;\\ -1)$.</li>\n<li>Les quatre angles sont droits et $AB = BC = 5$ cm : $ABCD$ est un <strong>carré</strong>.\n   Aire : $5 \\times 5 = 25\\ \\text{cm}^{2}$.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<p><strong>Partie A.</strong>\n1. Par rapport à l'axe des abscisses, on change le signe de l'ordonnée : $(-3\\ ;\\ -4)$.\n2. Par rapport à l'axe des ordonnées, on change le signe de l'abscisse : $(3\\ ;\\ 4)$.\n3. Par rapport à l'origine, on change les deux signes : $(3\\ ;\\ -4)$.</p>\n<p><strong>Partie B.</strong>\n4. Le point $(3\\ ;\\ 14)$ donne une consommation de $14\\ \\text{m}^{3}$.\n5. La plus grande ordonnée est 21 : c'est le <strong>mois 4</strong>.\n6. $12 + 15 + 14 + 21 = 62\\ \\text{m}^{3}$.\n7. $62 \\times 6 = 372$, soit <strong>372 DH</strong>.</p>"
 }
},

{
 "id": "m20",
 "domaine": "maths",
 "unite": 20,
 "theme": "Proportionnalité et statistiques",
 "tag": "M20",
 "icone": "📊",
 "niveau": "1re année collège · Maroc",
 "titre": "M20 — La proportionnalité",
 "duree": "8 h",
 "semestre": "2",
 "objectifs": [
  "Reconnaître une situation de proportionnalité.",
  "Utiliser un tableau et un coefficient de proportionnalité.",
  "Calculer une quatrième proportionnelle (produit en croix).",
  "Travailler avec les pourcentages, les échelles et les vitesses moyennes.",
  "Représenter graphiquement une situation de proportionnalité."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Au marché de gros de Casablanca, un vendeur affiche : « oranges : 3 kg pour 24 DH ».\nUne cliente veut 5 kg, une autre 7,5 kg. Le vendeur ne sort pas sa calculatrice :\nil sait que <strong>1 kg coûte 8 DH</strong>, alors il multiplie. C'est exactement une situation de\n<strong>proportionnalité</strong> : le prix payé est proportionnel à la masse achetée.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Complète ce tableau des prix des oranges.</p>\n<table>\n<thead>\n<tr>\n<th>Masse (kg)</th>\n<th>1</th>\n<th>3</th>\n<th>5</th>\n<th>7,5</th>\n<th>10</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>?</td>\n<td>24</td>\n<td>?</td>\n<td>?</td>\n<td>?</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Observation.</strong> $24 \\div 3 = 8$ : chaque kilogramme coûte 8 DH.\nOn obtient : 8 DH, 24 DH, 40 DH, 60 DH, 80 DH.\nEn passant de la première ligne à la deuxième, on multiplie <strong>toujours par 8</strong>.</p>\n<p><strong>Conclusion.</strong> Ce nombre 8 s'appelle le <strong>coefficient de proportionnalité</strong>.</p>\n<p><strong>Activité 2.</strong> Un taxi de Rabat demande 10 DH de prise en charge, puis 5 DH par kilomètre.</p>\n<table>\n<thead>\n<tr>\n<th>Distance (km)</th>\n<th>1</th>\n<th>2</th>\n<th>4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>15</td>\n<td>20</td>\n<td>30</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Observation.</strong> $15 \\div 1 = 15$ mais $20 \\div 2 = 10$ : les quotients sont différents.\n<strong>Conclusion.</strong> Ce n'est <strong>pas</strong> une situation de proportionnalité, à cause du prix fixe de départ.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-definition\">3.1 Définition</h3>\n<blockquote>\n<p><strong>Définition.</strong> Deux grandeurs sont <strong>proportionnelles</strong> lorsqu'on passe des valeurs de\nla première aux valeurs de la seconde en multipliant <strong>toujours par le même nombre</strong>.\nCe nombre s'appelle le <strong>coefficient de proportionnalité</strong>.</p>\n<p><strong>Propriété (reconnaître).</strong> Un tableau est un tableau de proportionnalité si tous les\nquotients « deuxième ligne $\\div$ première ligne » sont égaux.</p>\n</blockquote>\n<p><strong>Exemple.</strong> $\\dfrac{24}{3} = \\dfrac{40}{5} = \\dfrac{80}{10} = 8$ : le tableau des oranges est\nbien un tableau de proportionnalité.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Croire que « plus il y en a, plus c'est cher » suffit pour affirmer\nqu'il y a proportionnalité. Le taxi coûte plus cher quand on va plus loin, et pourtant\nil n'y a pas proportionnalité.</p>\n<h3 id=\"32-proprietes-utiles\">3.2 Propriétés utiles</h3>\n<blockquote>\n<p><strong>Propriétés.</strong> Dans un tableau de proportionnalité :\n- si on multiplie une valeur par $k$, la valeur correspondante est aussi multipliée par $k$ ;\n- la somme de deux colonnes donne encore une colonne du tableau.</p>\n</blockquote>\n<p><strong>Exemple.</strong> 3 kg coûtent 24 DH, donc 6 kg coûtent $24 \\times 2 = 48$ DH,\net 9 kg coûtent $24 + 48 = 72$ DH.</p>\n<h3 id=\"33-quatrieme-proportionnelle-et-produit-en-croix\">3.3 Quatrième proportionnelle et produit en croix</h3>\n<blockquote>\n<p><strong>Méthode (produit en croix).</strong> Dans un tableau de proportionnalité</p>\n<table>\n<thead>\n<tr>\n<th>$a$</th>\n<th>$c$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$b$</td>\n<td>$x$</td>\n</tr>\n</tbody>\n</table>\n<p>on a $a \\times x = b \\times c$, donc $x = \\dfrac{b \\times c}{a}$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> 4 cahiers coûtent 26 DH. Combien coûtent 7 cahiers ?\n$$x = \\dfrac{26 \\times 7}{4} = \\dfrac{182}{4} = 45{,}5\\ \\text{DH}$$</p>\n<p><strong>Méthode (pas à pas).</strong>\n1. Je range les données dans un tableau à deux lignes, en respectant les unités.\n2. Je vérifie que la situation est bien proportionnelle.\n3. Je multiplie « en croix » les deux nombres connus placés en diagonale.\n4. Je divise par le troisième nombre connu.\n5. J'écris la réponse avec son unité.</p>\n<h3 id=\"34-les-pourcentages\">3.4 Les pourcentages</h3>\n<blockquote>\n<p><strong>Définition.</strong> Prendre $p\\ \\%$ d'un nombre, c'est le multiplier par $\\dfrac{p}{100}$.</p>\n</blockquote>\n<p><strong>Exemple (appliquer).</strong> $15\\ \\%$ de 240 DH : $240 \\times \\dfrac{15}{100} = \\dfrac{3600}{100} = 36$ DH.</p>\n<p><strong>Exemple (calculer un pourcentage).</strong> Dans une classe de 40 élèves, 18 font du sport.\nProportion : $\\dfrac{18}{40} = \\dfrac{45}{100} = 45\\ \\%$.</p>\n<blockquote>\n<p><strong>Propriétés.</strong>\n- <strong>Réduction</strong> de $p\\ \\%$ : nouveau prix $=$ prix $-$ $p\\ \\%$ du prix.\n- <strong>Augmentation</strong> de $p\\ \\%$ : nouveau prix $=$ prix $+$ $p\\ \\%$ du prix.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Un manteau à 240 DH soldé à $-15\\ \\%$ coûte $240 - 36 = 204$ DH.\nUn loyer de 500 DH augmenté de $8\\ \\%$ devient $500 + 40 = 540$ DH.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Après une réduction de $20\\ \\%$, augmenter de $20\\ \\%$ ne redonne\n<strong>pas</strong> le prix de départ : $100 \\to 80 \\to 96$ DH.</p>\n<h3 id=\"35-les-echelles\">3.5 Les échelles</h3>\n<blockquote>\n<p><strong>Définition.</strong> L'<strong>échelle</strong> d'une carte est le quotient\n$$\\text{échelle} = \\dfrac{\\text{distance sur la carte}}{\\text{distance réelle}}$$\nles deux distances étant exprimées dans la <strong>même unité</strong>.</p>\n</blockquote>\n<p>Une échelle $\\dfrac{1}{200\\,000}$ signifie : 1 cm sur la carte représente 200 000 cm en réalité,\nsoit 2 km.</p>\n<p><strong>Exemple.</strong> Sur cette carte, deux villages sont distants de 4,5 cm.\nDistance réelle : $4{,}5 \\times 200\\,000 = 900\\,000\\ \\text{cm} = 9\\ \\text{km}$.</p>\n<h3 id=\"36-la-vitesse-moyenne\">3.6 La vitesse moyenne</h3>\n<blockquote>\n<p><strong>Définition.</strong> $$v = \\dfrac{d}{t}$$ où $d$ est la distance parcourue et $t$ la durée.\nOn en déduit $d = v \\times t$ et $t = \\dfrac{d}{v}$.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Un car relie Marrakech à Agadir : 240 km en 3 h.\n$v = \\dfrac{240}{3} = 80\\ \\text{km/h}$. En 2 h 30 min $= 2{,}5$ h, il parcourrait\n$80 \\times 2{,}5 = 200\\ \\text{km}$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Utiliser 2 h 30 min comme « 2,30 h ». Il faut convertir :\n30 min $= 0{,}5$ h, donc 2 h 30 min $= 2{,}5$ h.</p>\n<h3 id=\"37-representation-graphique\">3.7 Représentation graphique</h3>\n<blockquote>\n<p><strong>Propriété.</strong> Dans un repère, les points d'une situation de proportionnalité sont\n<strong>alignés avec l'origine</strong> : ils appartiennent à une droite qui passe par le point $(0\\ ;\\ 0)$.\nSi les points ne sont pas alignés, ou si la droite ne passe pas par l'origine,\nil n'y a <strong>pas</strong> proportionnalité.</p>\n</blockquote>\n<pre><code> Prix (DH)\n   ^\n40 |                 .\n32 |            .\n24 |       .\n16 |    .\n 8 | .\n   +---+---+---+---+---&gt; masse (kg)\n   O   1   2   3   4   5      droite passant par l'origine\n</code></pre>\n<p>Pour le taxi (10 DH + 5 DH/km), les points sont alignés mais la droite coupe l'axe vertical\nen 10 : ce n'est pas de la proportionnalité.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> 6 m de tissu coûtent 132 DH. Quel est le prix de 10 m ?\n<em>Solution.</em> Prix de 1 m : $132 \\div 6 = 22$ DH. Prix de 10 m : $22 \\times 10 = 220$ DH.</p>\n<p><strong>Exemple 2.</strong> Un vélo coûte 1 250 DH. Le vendeur accorde une remise de $12\\ \\%$.\n<em>Solution.</em> Remise : $1250 \\times \\dfrac{12}{100} = 150$ DH. Prix payé : $1250 - 150 = 1100$ DH.</p>\n<p><strong>Exemple 3.</strong> Sur une carte à l'échelle $\\dfrac{1}{50\\,000}$, une piste mesure 8 cm.\n<em>Solution.</em> $8 \\times 50\\,000 = 400\\,000\\ \\text{cm} = 4000\\ \\text{m} = 4\\ \\text{km}$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Proportionnalité : on multiplie toujours par le <strong>même</strong> coefficient.</li>\n<li>Produit en croix : $x = \\dfrac{b \\times c}{a}$.</li>\n<li>$p\\ \\%$ d'un nombre : on multiplie par $\\dfrac{p}{100}$.</li>\n<li>Échelle : rapport de deux distances exprimées dans la même unité.</li>\n<li>$v = \\dfrac{d}{t}$, avec le temps en heures pour des km/h.</li>\n<li>Graphiquement : droite passant par l'origine.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Cherche des situations de la vie courante qui ne sont <strong>pas</strong> proportionnelles :\n  l'âge et la taille d'une personne, l'aire d'un carré et la longueur de son côté.</li>\n<li>Compare deux offres d'un opérateur téléphonique : forfait fixe ou prix à la minute.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques 1AC — MEN Maroc</a></li>\n<li><a href=\"https://fr.wikipedia.org/wiki/Proportionnalit%C3%A9\">Proportionnalité</a></li>\n<li><a href=\"https://fr.wikipedia.org/wiki/Pourcentage\">Pourcentage</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"definition\">Définition</h2>\n<p>Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant\n<strong>toujours par le même nombre</strong> : le <strong>coefficient de proportionnalité</strong> $k$.</p>\n<p>Test : tous les quotients « 2e ligne $\\div$ 1re ligne » doivent être <strong>égaux</strong>.</p>\n<table>\n<thead>\n<tr>\n<th>Masse (kg)</th>\n<th>2</th>\n<th>5</th>\n<th>8</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>16</td>\n<td>40</td>\n<td>64</td>\n</tr>\n</tbody>\n</table>\n<p>$\\dfrac{16}{2} = \\dfrac{40}{5} = \\dfrac{64}{8} = 8$ : coefficient $k = 8$ (DH par kg).</p>\n<h2 id=\"formules-essentielles\">Formules essentielles</h2>\n<table>\n<thead>\n<tr>\n<th>Situation</th>\n<th>Formule</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Quatrième proportionnelle</td>\n<td>$x = \\dfrac{b \\times c}{a}$ (produit en croix)</td>\n</tr>\n<tr>\n<td>Appliquer $p\\ \\%$</td>\n<td>valeur $\\times \\dfrac{p}{100}$</td>\n</tr>\n<tr>\n<td>Calculer un pourcentage</td>\n<td>$\\dfrac{\\text{partie}}{\\text{total}}$ ramené sur 100</td>\n</tr>\n<tr>\n<td>Augmentation de $p\\ \\%$</td>\n<td>valeur $+$ $p\\ \\%$ de la valeur</td>\n</tr>\n<tr>\n<td>Réduction de $p\\ \\%$</td>\n<td>valeur $-$ $p\\ \\%$ de la valeur</td>\n</tr>\n<tr>\n<td>Échelle</td>\n<td>$\\dfrac{\\text{distance carte}}{\\text{distance réelle}}$ (même unité)</td>\n</tr>\n<tr>\n<td>Vitesse moyenne</td>\n<td>$v = \\dfrac{d}{t}$, $d = v \\times t$, $t = \\dfrac{d}{v}$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"graphique\">Graphique</h2>\n<p>Situation proportionnelle $\\Longleftrightarrow$ points <strong>alignés</strong> sur une droite qui passe\npar l'<strong>origine</strong> $(0\\ ;\\ 0)$.</p>\n<pre><code>   ^                .\n   |           .\n   |      .\n   |  .\n   O------------------&gt;\n</code></pre>\n<h2 id=\"conversions-de-duree\">Conversions de durée</h2>\n<p>$30\\ \\text{min} = 0{,}5\\ \\text{h}$ · $15\\ \\text{min} = 0{,}25\\ \\text{h}$ ·\n$45\\ \\text{min} = 0{,}75\\ \\text{h}$ · $20\\ \\text{min} = \\dfrac{1}{3}\\ \\text{h}$.</p>\n<h2 id=\"contre-exemples-classiques-pas-de-proportionnalite\">Contre-exemples classiques (pas de proportionnalité)</h2>\n<ul>\n<li>Taxi : 10 DH de prise en charge $+$ 5 DH par km.</li>\n<li>L'âge et la taille d'un enfant.</li>\n<li>L'aire d'un carré et la longueur de son côté.</li>\n</ul>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Croire que « quand l'un augmente, l'autre augmente » suffit : il faut le <strong>même</strong> coefficient.</li>\n<li>Enchaîner $-20\\ \\%$ puis $+20\\ \\%$ et croire revenir au prix de départ ($100 \\to 80 \\to 96$).</li>\n<li>Oublier de convertir les unités : minutes en heures, cm en km pour les échelles.</li>\n</ol>\n<h2 id=\"mini-memo\">Mini-mémo</h2>\n<p>Un tableau, deux lignes, un coefficient : tout le chapitre tient dans ces trois mots.\nQuand une valeur manque, je pense <strong>produit en croix</strong>.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Reconnaître un tableau de proportionnalité",
   "diff": "facile",
   "q": "<p>Pour chacun des tableaux, dis s'il s'agit d'un tableau de proportionnalité.\nJustifie par des quotients.</p>\n<p><strong>(a)</strong></p>\n<table>\n<thead>\n<tr>\n<th>3</th>\n<th>5</th>\n<th>8</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>21</td>\n<td>35</td>\n<td>56</td>\n</tr>\n</tbody>\n</table>\n<p><strong>(b)</strong></p>\n<table>\n<thead>\n<tr>\n<th>2</th>\n<th>4</th>\n<th>6</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>10</td>\n<td>18</td>\n<td>26</td>\n</tr>\n</tbody>\n</table>\n<p><strong>(c)</strong></p>\n<table>\n<thead>\n<tr>\n<th>6</th>\n<th>10</th>\n<th>14</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>9</td>\n<td>15</td>\n<td>21</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ul>\n<li><strong>(a)</strong> $\\dfrac{21}{3} = 7$, $\\dfrac{35}{5} = 7$, $\\dfrac{56}{8} = 7$ : <strong>tableau de proportionnalité</strong>, $k = 7$.</li>\n<li><strong>(b)</strong> $\\dfrac{10}{2} = 5$ mais $\\dfrac{18}{4} = 4{,}5$ : les quotients diffèrent, <strong>ce n'est pas</strong>\n  un tableau de proportionnalité.</li>\n<li><strong>(c)</strong> $\\dfrac{9}{6} = 1{,}5$, $\\dfrac{15}{10} = 1{,}5$, $\\dfrac{21}{14} = 1{,}5$ :\n  <strong>tableau de proportionnalité</strong>, $k = 1{,}5$.</li>\n</ul>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Compléter un tableau",
   "diff": "facile",
   "q": "<p>Le prix des pommes est proportionnel à la masse achetée. 4 kg coûtent 52 DH.</p>\n<table>\n<thead>\n<tr>\n<th>Masse (kg)</th>\n<th>1</th>\n<th>4</th>\n<th>7</th>\n<th>12</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>?</td>\n<td>52</td>\n<td>?</td>\n<td>?</td>\n</tr>\n</tbody>\n</table>\n<ol>\n<li>Calcule le coefficient de proportionnalité.</li>\n<li>Complète le tableau.</li>\n</ol>",
   "modele": "<ol>\n<li>$k = 52 \\div 4 = 13$ (13 DH par kilogramme).\n2.</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Masse (kg)</th>\n<th>1</th>\n<th>4</th>\n<th>7</th>\n<th>12</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>13</td>\n<td>52</td>\n<td>91</td>\n<td>156</td>\n</tr>\n</tbody>\n</table>\n<p>$1 \\times 13 = 13$ ; $7 \\times 13 = 91$ ; $12 \\times 13 = 156$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Produit en croix",
   "diff": "facile",
   "q": "<p>5 stylos identiques coûtent 17,50 DH.\nCalcule le prix de 8 stylos en utilisant le produit en croix.</p>",
   "modele": "<p>$$x = \\dfrac{17{,}50 \\times 8}{5} = \\dfrac{140}{5} = 28$$\n8 stylos coûtent <strong>28 DH</strong>.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Appliquer un pourcentage",
   "diff": "facile",
   "q": "<p>Calcule :\n1. $20\\ \\%$ de 350 DH ;\n2. $5\\ \\%$ de 80 DH ;\n3. $25\\ \\%$ de 600 DH ;\n4. $30\\ \\%$ de 250 DH.</p>",
   "modele": "<ol>\n<li>$350 \\times \\dfrac{20}{100} = 70\\ \\text{DH}$.</li>\n<li>$80 \\times \\dfrac{5}{100} = 4\\ \\text{DH}$.</li>\n<li>$600 \\times \\dfrac{25}{100} = 150\\ \\text{DH}$.</li>\n<li>$250 \\times \\dfrac{30}{100} = 75\\ \\text{DH}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Une réduction",
   "diff": "facile",
   "q": "<p>Un cartable coûte 400 DH. Le commerçant applique une réduction de $10\\ \\%$.\n1. Calcule le montant de la réduction.\n2. Calcule le prix payé.</p>",
   "modele": "<ol>\n<li>$400 \\times \\dfrac{10}{100} = 40\\ \\text{DH}$.</li>\n<li>$400 - 40 = 360\\ \\text{DH}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Vitesse moyenne",
   "diff": "facile",
   "q": "<p>Un autocar parcourt 150 km en 2 h.\n1. Calcule sa vitesse moyenne.\n2. Quelle distance parcourt-il en 3 h à cette vitesse ?</p>",
   "modele": "<ol>\n<li>$v = \\dfrac{150}{2} = 75\\ \\text{km/h}$.</li>\n<li>$d = 75 \\times 3 = 225\\ \\text{km}$.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Calculer un pourcentage",
   "diff": "",
   "q": "<p>Exprime chaque proportion en pourcentage.\n1. 24 élèves sur 80 pratiquent le football.\n2. 9 vélos sur 60 sont électriques.\n3. 63 places occupées sur 300.</p>",
   "modele": "<ol>\n<li>$\\dfrac{24}{80} = 0{,}30 = \\dfrac{30}{100} = 30\\ \\%$.</li>\n<li>$\\dfrac{9}{60} = 0{,}15 = 15\\ \\%$.</li>\n<li>$\\dfrac{63}{300} = 0{,}21 = 21\\ \\%$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Une augmentation",
   "diff": "",
   "q": "<p>Le salaire mensuel d'un employé est de 4 200 DH. Il augmente de $6\\ \\%$.\n1. Calcule le montant de l'augmentation.\n2. Calcule le nouveau salaire.</p>",
   "modele": "<ol>\n<li>$4200 \\times \\dfrac{6}{100} = 252\\ \\text{DH}$.</li>\n<li>$4200 + 252 = 4452\\ \\text{DH}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Échelle d'une carte",
   "diff": "",
   "q": "<p>Une carte est à l'échelle $\\dfrac{1}{25\\,000}$.\n1. Deux mosquées sont distantes de 6 cm sur la carte. Quelle est la distance réelle\n   en cm, puis en km ?\n2. Une route mesure 5 km en réalité. Quelle est sa longueur sur la carte ?</p>",
   "modele": "<ol>\n<li>$6 \\times 25\\,000 = 150\\,000\\ \\text{cm}$, soit $1500\\ \\text{m} = 1{,}5\\ \\text{km}$.</li>\n<li>$5\\ \\text{km} = 500\\,000\\ \\text{cm}$ ; $500\\,000 \\div 25\\,000 = 20\\ \\text{cm}$ sur la carte.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Durées et vitesse",
   "diff": "",
   "q": "<p>Un camion parcourt 180 km en 2 h 15 min.\n1. Convertis la durée en heures (en écriture décimale).\n2. Calcule sa vitesse moyenne.</p>",
   "modele": "<ol>\n<li>$15\\ \\text{min} = 0{,}25\\ \\text{h}$, donc 2 h 15 min $= 2{,}25\\ \\text{h}$.</li>\n<li>$v = \\dfrac{180}{2{,}25} = 80\\ \\text{km/h}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Lecture d'un graphique",
   "diff": "",
   "q": "<p>Dans un repère, on a placé les points $(0\\ ;\\ 0)$, $(2\\ ;\\ 30)$, $(5\\ ;\\ 75)$ et $(8\\ ;\\ 120)$\nreprésentant le prix (en DH) en fonction du nombre de kilogrammes de dattes.\n1. Vérifie que la situation est proportionnelle et donne le coefficient.\n2. Que représente ce coefficient concrètement ?\n3. Quel est le prix de 6 kg de dattes ?</p>",
   "modele": "<ol>\n<li>$\\dfrac{30}{2} = 15$, $\\dfrac{75}{5} = 15$, $\\dfrac{120}{8} = 15$ : situation proportionnelle,\n   $k = 15$. De plus le point $(0\\ ;\\ 0)$ appartient au graphique.</li>\n<li>Le coefficient est le <strong>prix d'un kilogramme</strong> : 15 DH/kg.</li>\n<li>$6 \\times 15 = 90\\ \\text{DH}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Le taxi",
   "diff": "",
   "q": "<p>Un taxi de Rabat facture 12 DH de prise en charge puis 4 DH par kilomètre.\n1. Complète le tableau.</p>\n<table>\n<thead>\n<tr>\n<th>Distance (km)</th>\n<th>1</th>\n<th>3</th>\n<th>5</th>\n<th>10</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>?</td>\n<td>?</td>\n<td>?</td>\n<td>?</td>\n</tr>\n</tbody>\n</table>\n<ol start=\"2\">\n<li>Ce tableau est-il un tableau de proportionnalité ? Justifie par deux quotients.</li>\n<li>Décris l'allure du graphique correspondant.</li>\n</ol>",
   "modele": "<p>1.</p>\n<table>\n<thead>\n<tr>\n<th>Distance (km)</th>\n<th>1</th>\n<th>3</th>\n<th>5</th>\n<th>10</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>16</td>\n<td>24</td>\n<td>32</td>\n<td>52</td>\n</tr>\n</tbody>\n</table>\n<p>($12 + 4 \\times 1 = 16$ ; $12 + 12 = 24$ ; $12 + 20 = 32$ ; $12 + 40 = 52$.)</p>\n<ol start=\"2\">\n<li>$\\dfrac{16}{1} = 16$ mais $\\dfrac{24}{3} = 8$ : les quotients sont différents,\n   <strong>ce n'est pas</strong> une situation de proportionnalité.</li>\n<li>Les points sont alignés, mais la droite coupe l'axe vertical au point $(0\\ ;\\ 12)$ :\n   elle ne passe <strong>pas</strong> par l'origine.</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "La recette du couscous",
   "diff": "difficile",
   "q": "<p>Pour 6 personnes, il faut 450 g de semoule, 3 oignons et 900 mL de bouillon.\n1. Calcule les quantités nécessaires pour 15 personnes.\n2. Pour combien de personnes peut-on préparer le plat avec 1 200 g de semoule ?</p>",
   "modele": "<ol>\n<li>$15 \\div 6 = 2{,}5$ : on multiplie toutes les quantités par 2,5.\n   - Semoule : $450 \\times 2{,}5 = 1125\\ \\text{g}$.\n   - Oignons : $3 \\times 2{,}5 = 7{,}5$, on prendra 8 oignons en pratique.\n   - Bouillon : $900 \\times 2{,}5 = 2250\\ \\text{mL} = 2{,}25\\ \\text{L}$.</li>\n<li>Semoule par personne : $450 \\div 6 = 75\\ \\text{g}$.\n   $1200 \\div 75 = 16$ : on peut préparer le plat pour <strong>16 personnes</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Les soldes en deux temps",
   "diff": "difficile",
   "q": "<p>Une veste coûte 800 DH. Elle est d'abord soldée à $-25\\ \\%$, puis une seconde démarque\nde $-10\\ \\%$ est appliquée sur le prix soldé.\n1. Calcule le prix après la première démarque.\n2. Calcule le prix final.\n3. Quelle est la réduction totale en dirhams ? En pourcentage du prix initial ?\n4. La réduction totale est-elle égale à $35\\ \\%$ ? Explique.</p>",
   "modele": "<ol>\n<li>Première démarque : $800 \\times \\dfrac{25}{100} = 200\\ \\text{DH}$ ; prix $= 800 - 200 = 600\\ \\text{DH}$.</li>\n<li>Seconde démarque : $600 \\times \\dfrac{10}{100} = 60\\ \\text{DH}$ ; prix final $= 600 - 60 = 540\\ \\text{DH}$.</li>\n<li>Réduction totale : $800 - 540 = 260\\ \\text{DH}$, soit $\\dfrac{260}{800} = 0{,}325 = 32{,}5\\ \\%$.</li>\n<li>Non : $25\\ \\% + 10\\ \\% = 35\\ \\%$ serait faux, car la deuxième réduction porte sur\n   600 DH et non sur 800 DH. La réduction réelle est de $32{,}5\\ \\%$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Sur la carte du Maroc",
   "diff": "difficile",
   "q": "<p>Sur une carte à l'échelle $\\dfrac{1}{1\\,000\\,000}$, la distance entre Casablanca et Rabat\nmesure 9 cm.\n1. Calcule la distance réelle en km.\n2. Un car roule à 60 km/h en moyenne. Combien de temps met-il pour ce trajet ?\n3. Quelle serait la longueur, sur la même carte, d'un trajet réel de 240 km ?</p>",
   "modele": "<ol>\n<li>$9 \\times 1\\,000\\,000 = 9\\,000\\,000\\ \\text{cm} = 90\\,000\\ \\text{m} = 90\\ \\text{km}$.</li>\n<li>$t = \\dfrac{90}{60} = 1{,}5\\ \\text{h}$, soit <strong>1 h 30 min</strong>.</li>\n<li>$240\\ \\text{km} = 24\\,000\\,000\\ \\text{cm}$ ; $24\\,000\\,000 \\div 1\\,000\\,000 = 24\\ \\text{cm}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Le trajet d'un car",
   "diff": "difficile",
   "q": "<p>Un car part de Fès. Il parcourt d'abord 120 km en 1 h 30 min, puis 180 km en 2 h 30 min.\n1. Calcule la vitesse moyenne sur la première partie.\n2. Calcule la vitesse moyenne sur la seconde partie.\n3. Calcule la vitesse moyenne sur l'ensemble du trajet.\n4. La vitesse moyenne totale est-elle la moyenne des deux vitesses précédentes ?</p>",
   "modele": "<ol>\n<li>1 h 30 min $= 1{,}5\\ \\text{h}$ ; $v_{1} = \\dfrac{120}{1{,}5} = 80\\ \\text{km/h}$.</li>\n<li>2 h 30 min $= 2{,}5\\ \\text{h}$ ; $v_{2} = \\dfrac{180}{2{,}5} = 72\\ \\text{km/h}$.</li>\n<li>Distance totale : $120 + 180 = 300\\ \\text{km}$ ; durée totale : $1{,}5 + 2{,}5 = 4\\ \\text{h}$ ;\n   $v = \\dfrac{300}{4} = 75\\ \\text{km/h}$.</li>\n<li>Non : $\\dfrac{80 + 72}{2} = 76 \\neq 75$. La vitesse moyenne se calcule toujours avec\n   la distance <strong>totale</strong> et la durée <strong>totale</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "La facture d'eau",
   "diff": "difficile",
   "q": "<p>Dans une commune, le prix de l'eau est proportionnel au volume consommé.\nUne famille a payé 108 DH pour $18\\ \\text{m}^{3}$.\n1. Calcule le prix d'un mètre cube.\n2. Quelle sera la facture pour $25\\ \\text{m}^{3}$ ?\n3. Avec un budget de 90 DH, quel volume peut-on consommer ?</p>",
   "modele": "<ol>\n<li>$108 \\div 18 = 6\\ \\text{DH}$ par mètre cube.</li>\n<li>$25 \\times 6 = 150\\ \\text{DH}$.</li>\n<li>$90 \\div 6 = 15$, soit $15\\ \\text{m}^{3}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 18,
   "consigne": "Comparer deux offres",
   "diff": "difficile",
   "q": "<p>Au souk, deux vendeurs proposent des amandes :\n- vendeur A : 2 kg pour 34 DH ;\n- vendeur B : 5 kg pour 82,50 DH.</p>\n<ol>\n<li>Calcule le prix d'un kilogramme chez chaque vendeur.</li>\n<li>Quel vendeur est le moins cher ?</li>\n<li>Une pâtissière achète 12 kg chez le moins cher. Combien paie-t-elle ?</li>\n<li>Combien a-t-elle économisé par rapport à l'autre vendeur ?</li>\n</ol>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Reconnaître la proportionnalité</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Utiliser un coefficient</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Produit en croix</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Appliquer un pourcentage</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Calculer une réduction</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Calculer une vitesse moyenne</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Calculer un pourcentage</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Calculer une augmentation</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Utiliser une échelle</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Convertir une durée et calculer $v$</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Lire un graphique proportionnel</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Reconnaître une non-proportionnalité</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Modéliser une recette</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Enchaîner deux pourcentages</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Échelle, distance et durée</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Raisonner sur les vitesses moyennes</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Résoudre un problème de facture</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3</td>\n<td>Comparer deux offres</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>Vendeur A : $34 \\div 2 = 17\\ \\text{DH/kg}$. Vendeur B : $82{,}50 \\div 5 = 16{,}50\\ \\text{DH/kg}$.</li>\n<li>Le <strong>vendeur B</strong> est le moins cher (16,50 DH contre 17 DH).</li>\n<li>$12 \\times 16{,}50 = 198\\ \\text{DH}$.</li>\n<li>Chez A : $12 \\times 17 = 204\\ \\text{DH}$ ; économie : $204 - 198 = 6\\ \\text{DH}$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M20",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20</p>\n<h2 id=\"exercice-1-5-points-tableau-de-proportionnalite\">Exercice 1 (5 points) — Tableau de proportionnalité</h2>\n<p>Le prix d'un tissu est proportionnel à sa longueur. 7 m de ce tissu coûtent 154 DH.</p>\n<ol>\n<li>Calcule le prix d'un mètre de tissu.</li>\n<li>Recopie et complète le tableau.</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Longueur (m)</th>\n<th>1</th>\n<th>3</th>\n<th>7</th>\n<th>12</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>?</td>\n<td>?</td>\n<td>154</td>\n<td>?</td>\n</tr>\n</tbody>\n</table>\n<ol start=\"3\">\n<li>Avec 330 DH, quelle longueur de tissu peut-on acheter ?</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$k = 22$ DH/m</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>22 ; 66 ; 154 ; 264</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3</td>\n<td>15 m</td>\n<td>1,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-5-points-pourcentages\">Exercice 2 (5 points) — Pourcentages</h2>\n<p>Un téléviseur est affiché à 1 200 DH.</p>\n<ol>\n<li>Le vendeur applique une réduction de $15\\ \\%$. Calcule le montant de la réduction.</li>\n<li>Calcule le prix payé après cette réduction.</li>\n<li>Un mois plus tard, ce prix réduit augmente de $5\\ \\%$. Calcule le nouveau prix.</li>\n<li>Le prix final est-il revenu à 1 200 DH ? Explique en une phrase.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>180 DH</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1 020 DH</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1 071 DH</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Non, car les pourcentages portent sur des valeurs différentes</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-5-points-carte-et-vitesse\">Exercice 3 (5 points) — Carte et vitesse</h2>\n<p>Sur une carte à l'échelle $\\dfrac{1}{200\\,000}$, la distance entre deux villes mesure 7,5 cm.</p>\n<ol>\n<li>Calcule la distance réelle en cm.</li>\n<li>Convertis-la en km.</li>\n<li>Un car roule à 60 km/h. Calcule la durée du trajet, en heures puis en heures et minutes.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$1\\,500\\,000\\ \\text{cm}$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>15 km</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>0,25 h, soit 15 min</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-4-5-points-une-situation-non-proportionnelle\">Exercice 4 (5 points) — Une situation non proportionnelle</h2>\n<p>Une salle de sport d'Agadir demande 150 DH d'inscription, puis 25 DH par séance.</p>\n<ol>\n<li>Recopie et complète le tableau.</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Nombre de séances</th>\n<th>2</th>\n<th>4</th>\n<th>8</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix payé (DH)</td>\n<td>?</td>\n<td>?</td>\n<td>?</td>\n</tr>\n</tbody>\n</table>\n<ol start=\"2\">\n<li>Montre, à l'aide de deux quotients, que ce n'est pas une situation de proportionnalité.</li>\n<li>Un adhérent a payé 500 DH. Combien de séances a-t-il suivies ?</li>\n<li>Décris l'allure du graphique de cette situation.</li>\n</ol>\n<h3 id=\"bareme-detaille_3\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>200 ; 250 ; 350</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$100 \\neq 62{,}5$</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>14 séances</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Points alignés mais droite ne passant pas par l'origine</td>\n<td>0,5</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>$154 \\div 7 = 22\\ \\text{DH}$ par mètre.\n2.</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Longueur (m)</th>\n<th>1</th>\n<th>3</th>\n<th>7</th>\n<th>12</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix (DH)</td>\n<td>22</td>\n<td>66</td>\n<td>154</td>\n<td>264</td>\n</tr>\n</tbody>\n</table>\n<p>($3 \\times 22 = 66$ ; $12 \\times 22 = 264$.)\n3. $330 \\div 22 = 15$ : on peut acheter <strong>15 m</strong> de tissu.</p>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$1200 \\times \\dfrac{15}{100} = 180\\ \\text{DH}$.</li>\n<li>$1200 - 180 = 1020\\ \\text{DH}$.</li>\n<li>$1020 \\times \\dfrac{5}{100} = 51\\ \\text{DH}$ ; nouveau prix : $1020 + 51 = 1071\\ \\text{DH}$.</li>\n<li>Non : la réduction de $15\\ \\%$ portait sur 1 200 DH alors que l'augmentation de $5\\ \\%$\n   porte sur 1 020 DH ; le prix final (1 071 DH) reste inférieur au prix de départ.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$7{,}5 \\times 200\\,000 = 1\\,500\\,000\\ \\text{cm}$.</li>\n<li>$1\\,500\\,000\\ \\text{cm} = 15\\,000\\ \\text{m} = 15\\ \\text{km}$.</li>\n<li>$t = \\dfrac{15}{60} = 0{,}25\\ \\text{h}$, soit $0{,}25 \\times 60 = 15$ minutes.</li>\n</ol>\n<h3 id=\"exercice-4\">Exercice 4</h3>\n<p>1.</p>\n<table>\n<thead>\n<tr>\n<th>Nombre de séances</th>\n<th>2</th>\n<th>4</th>\n<th>8</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prix payé (DH)</td>\n<td>200</td>\n<td>250</td>\n<td>350</td>\n</tr>\n</tbody>\n</table>\n<p>($150 + 2 \\times 25 = 200$ ; $150 + 100 = 250$ ; $150 + 200 = 350$.)\n2. $\\dfrac{200}{2} = 100$ et $\\dfrac{250}{4} = 62{,}5$ : les quotients sont différents,\n   il n'y a donc pas proportionnalité.\n3. $500 - 150 = 350$ ; $350 \\div 25 = 14$ : il a suivi <strong>14 séances</strong>.\n4. Les points sont alignés, mais la droite coupe l'axe vertical en $(0\\ ;\\ 150)$ :\n   elle ne passe pas par l'origine.</p>"
 }
},

{
 "id": "m21",
 "domaine": "maths",
 "unite": 21,
 "theme": "Proportionnalité et statistiques",
 "tag": "M21",
 "icone": "📊",
 "niveau": "1re année collège · Maroc",
 "titre": "M21 — Statistiques",
 "duree": "6 h",
 "semestre": "2",
 "objectifs": [
  "Employer le vocabulaire statistique de base.",
  "Construire un tableau d'effectifs, de fréquences et d'effectifs cumulés.",
  "Représenter une série par différents diagrammes.",
  "Calculer une moyenne (simple et pondérée) et une étendue.",
  "Lire un graphique avec un regard critique."
 ],
 "cours": [
  {
   "t": "htmlcard",
   "titre": "1. Situation d'entrée",
   "x": "<p>Le professeur principal d'une classe de 1AC à Fès veut préparer la réunion des parents.\nIl a relevé, pour ses 25 élèves, le nombre de frères et sœurs de chacun :</p>\n<p>0, 2, 1, 3, 2, 1, 2, 4, 0, 1, 2, 3, 1, 2, 0, 1, 3, 2, 1, 4, 2, 3, 1, 3, 2.</p>\n<p>Cette longue liste ne dit rien au premier coup d'œil. Pour la rendre parlante, il faut\nl'<strong>organiser</strong> dans un tableau, la <strong>représenter</strong> par un diagramme et la <strong>résumer</strong>\npar quelques nombres. C'est le travail des statistiques.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "2. Activité de découverte",
   "x": "<p><strong>Activité 1.</strong> Compte combien d'élèves ont 0, 1, 2, 3 puis 4 frères et sœurs.</p>\n<p><strong>Observation.</strong> On obtient :</p>\n<table>\n<thead>\n<tr>\n<th>Nombre de frères et sœurs</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>Total</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Nombre d'élèves</td>\n<td>3</td>\n<td>7</td>\n<td>8</td>\n<td>5</td>\n<td>2</td>\n<td>25</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Conclusion.</strong> Le tableau tient en une ligne ce que la liste disait en 25 nombres.\nChaque nombre de la deuxième ligne s'appelle un <strong>effectif</strong> ; 25 est l'<strong>effectif total</strong>.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "3. Cours",
   "x": "<h3 id=\"31-vocabulaire\">3.1 Vocabulaire</h3>\n<blockquote>\n<p><strong>Définitions.</strong>\n- La <strong>population</strong> est l'ensemble étudié (ici : les 25 élèves de la classe).\n- Un <strong>individu</strong> est un élément de cette population (ici : un élève).\n- Le <strong>caractère</strong> est ce que l'on étudie sur chaque individu.\n  Il est <strong>quantitatif</strong> s'il s'exprime par un nombre (âge, taille, note),\n  <strong>qualitatif</strong> sinon (couleur préférée, sport pratiqué, ville).\n- L'<strong>effectif</strong> d'une valeur est le nombre d'individus qui possèdent cette valeur.\n- L'<strong>effectif total</strong> $N$ est le nombre d'individus de la population.</p>\n</blockquote>\n<p>⚠️ <strong>Erreur fréquente.</strong> Confondre la <strong>valeur</strong> du caractère (0, 1, 2, 3, 4 frères et sœurs)\net son <strong>effectif</strong> (3, 7, 8, 5, 2 élèves). La question « combien ? » porte sur l'effectif.</p>\n<h3 id=\"32-frequences\">3.2 Fréquences</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>fréquence</strong> d'une valeur est le quotient\n$$f = \\dfrac{\\text{effectif de la valeur}}{\\text{effectif total}}$$\nOn peut l'écrire en fraction, en nombre décimal ou en pourcentage\n(on multiplie alors le décimal par 100).</p>\n</blockquote>\n<p><strong>Exemple.</strong> Pour la valeur « 2 frères et sœurs » : $f = \\dfrac{8}{25} = 0{,}32 = 32\\ \\%$.</p>\n<blockquote>\n<p><strong>Propriété.</strong> La somme de toutes les fréquences vaut $1$, soit $100\\ \\%$.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>Valeur</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>Total</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>3</td>\n<td>7</td>\n<td>8</td>\n<td>5</td>\n<td>2</td>\n<td>25</td>\n</tr>\n<tr>\n<td>Fréquence</td>\n<td>0,12</td>\n<td>0,28</td>\n<td>0,32</td>\n<td>0,20</td>\n<td>0,08</td>\n<td>1</td>\n</tr>\n<tr>\n<td>Pourcentage</td>\n<td>12 %</td>\n<td>28 %</td>\n<td>32 %</td>\n<td>20 %</td>\n<td>8 %</td>\n<td>100 %</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"33-effectifs-cumules\">3.3 Effectifs cumulés</h3>\n<blockquote>\n<p><strong>Définition.</strong> L'<strong>effectif cumulé croissant</strong> d'une valeur est la somme des effectifs\nde cette valeur et de toutes celles qui la précèdent.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>Valeur</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>3</td>\n<td>7</td>\n<td>8</td>\n<td>5</td>\n<td>2</td>\n</tr>\n<tr>\n<td>Effectif cumulé</td>\n<td>3</td>\n<td>10</td>\n<td>18</td>\n<td>23</td>\n<td>25</td>\n</tr>\n</tbody>\n</table>\n<p>Lecture : 18 élèves ont <strong>au plus</strong> 2 frères et sœurs.</p>\n<h3 id=\"34-representations-graphiques\">3.4 Représentations graphiques</h3>\n<p><strong>a) Diagramme en bâtons</strong> (caractère quantitatif discret) : la hauteur de chaque bâton est\nproportionnelle à l'effectif.</p>\n<pre><code> effectif\n   8 |         ###\n   7 |    ###  ###\n   6 |    ###  ###\n   5 |    ###  ###  ###\n   4 |    ###  ###  ###\n   3 |###  ###  ###  ###\n   2 |###  ###  ###  ###  ###\n   1 |###  ###  ###  ###  ###\n     +----+----+----+----+----&gt; valeur\n       0    1    2    3    4\n</code></pre>\n<p><strong>b) Diagramme circulaire</strong> : le disque entier (360°) représente l'effectif total.</p>\n<blockquote>\n<p><strong>Propriété.</strong> $$\\text{angle} = \\dfrac{\\text{effectif}}{\\text{effectif total}} \\times 360^\\circ$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> Pour la valeur 2 : $\\dfrac{8}{25} \\times 360 = 0{,}32 \\times 360 = 115{,}2^\\circ$.\nPour la valeur 3 : $\\dfrac{5}{25} \\times 360 = 72^\\circ$.\nLa somme de tous les angles doit donner $360^\\circ$.</p>\n<p><strong>c) Histogramme</strong> : on l'utilise quand les valeurs sont regroupées en <strong>classes</strong>.\nChaque classe est représentée par un rectangle dont la hauteur donne l'effectif.</p>\n<table>\n<thead>\n<tr>\n<th>Taille (cm)</th>\n<th>$[140\\ ;\\ 150[$</th>\n<th>$[150\\ ;\\ 160[$</th>\n<th>$[160\\ ;\\ 170[$</th>\n<th>$[170\\ ;\\ 180[$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>4</td>\n<td>11</td>\n<td>8</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<p>⚠️ <strong>Erreur fréquente.</strong> Laisser des espaces entre les rectangles d'un histogramme :\nles classes se suivent, les rectangles sont <strong>collés</strong>.</p>\n<h3 id=\"35-moyenne-et-etendue\">3.5 Moyenne et étendue</h3>\n<blockquote>\n<p><strong>Définition.</strong> La <strong>moyenne</strong> d'une série est la somme de toutes les valeurs divisée par\nleur nombre.</p>\n</blockquote>\n<p><strong>Exemple.</strong> Notes 12, 15, 9, 14 et 10 : $\\dfrac{12 + 15 + 9 + 14 + 10}{5} = \\dfrac{60}{5} = 12$.</p>\n<blockquote>\n<p><strong>Propriété (moyenne pondérée).</strong> Quand les valeurs sont données avec leurs effectifs :\n$$\\overline{x} = \\dfrac{n_{1} \\times x_{1} + n_{2} \\times x_{2} + \\ldots + n_{p} \\times x_{p}}{N}$$</p>\n</blockquote>\n<p><strong>Exemple.</strong> Frères et sœurs :\n$$\\overline{x} = \\dfrac{3 \\times 0 + 7 \\times 1 + 8 \\times 2 + 5 \\times 3 + 2 \\times 4}{25}\n= \\dfrac{0 + 7 + 16 + 15 + 8}{25} = \\dfrac{46}{25} = 1{,}84$$\nEn moyenne, chaque élève a 1,84 frère ou sœur.</p>\n<blockquote>\n<p><strong>Définition.</strong> L'<strong>étendue</strong> est la différence entre la plus grande et la plus petite valeur.</p>\n</blockquote>\n<p>Ici : $4 - 0 = 4$.</p>\n<p>⚠️ <strong>Erreur fréquente.</strong> Calculer $\\dfrac{0 + 1 + 2 + 3 + 4}{5} = 2$ pour la moyenne :\nc'est faux, car il faut tenir compte des <strong>effectifs</strong> de chaque valeur.</p>\n<h3 id=\"36-lire-un-graphique-avec-esprit-critique\">3.6 Lire un graphique avec esprit critique</h3>\n<p>Un graphique peut tromper si l'axe vertical ne commence pas à zéro, si les unités sont\nabsentes ou si les classes n'ont pas la même largeur. Avant de conclure, il faut se demander :\nque représente chaque axe ? quel est l'effectif total ? le titre est-il exact ?</p>"
  },
  {
   "t": "htmlcard",
   "titre": "4. Exemples résolus",
   "x": "<p><strong>Exemple 1.</strong> Dans une classe de 25 élèves, les sports pratiqués sont : football 12,\nbasket-ball 6, natation 4, athlétisme 3. Construis le tableau des angles du diagramme circulaire.\n<em>Solution.</em> Football : $\\dfrac{12}{25} \\times 360 = 172{,}8^\\circ$ ;\nbasket-ball : $\\dfrac{6}{25} \\times 360 = 86{,}4^\\circ$ ;\nnatation : $\\dfrac{4}{25} \\times 360 = 57{,}6^\\circ$ ;\nathlétisme : $\\dfrac{3}{25} \\times 360 = 43{,}2^\\circ$.\nVérification : $172{,}8 + 86{,}4 + 57{,}6 + 43{,}2 = 360^\\circ$.</p>\n<p><strong>Exemple 2.</strong> Un élève a obtenu 14 en devoir 1 (coefficient 1), 11 en devoir 2 (coefficient 1)\net 13 à l'examen (coefficient 2). Calcule sa moyenne.\n<em>Solution.</em> $\\overline{x} = \\dfrac{1 \\times 14 + 1 \\times 11 + 2 \\times 13}{1 + 1 + 2}\n= \\dfrac{14 + 11 + 26}{4} = \\dfrac{51}{4} = 12{,}75$.</p>"
  },
  {
   "t": "htmlcard",
   "titre": "5. À retenir",
   "x": "<ul>\n<li>Population, individu, caractère (qualitatif ou quantitatif), effectif, effectif total.</li>\n<li>Fréquence $= \\dfrac{\\text{effectif}}{N}$ ; somme des fréquences $= 100\\ \\%$.</li>\n<li>Angle du diagramme circulaire $= $ fréquence $\\times\\ 360^\\circ$.</li>\n<li>Moyenne pondérée : on multiplie chaque valeur par son effectif avant de diviser par $N$.</li>\n<li>Étendue $=$ valeur maximale $-$ valeur minimale.</li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "6. Pour aller plus loin",
   "x": "<ul>\n<li>Réalise une enquête dans ta classe (moyen de transport, temps d'écran) et construis\n  le tableau puis le diagramme correspondant.</li>\n<li>Cherche un graphique dans un journal et vérifie si son axe vertical part bien de zéro.</li>\n</ul>\n<hr />\n<h3 id=\"sources\">Sources</h3>\n<ul>\n<li><a href=\"https://www.men.gov.ma/\">Programme officiel de mathématiques 1AC — MEN Maroc</a></li>\n<li><a href=\"https://fr.wikipedia.org/wiki/Statistique_descriptive\">Statistique descriptive</a></li>\n<li><a href=\"https://www.hcp.ma/\">Haut-Commissariat au Plan — données statistiques du Maroc</a></li>\n</ul>"
  },
  {
   "t": "htmlcard",
   "titre": "📌 Fiche résumé",
   "x": "<h2 id=\"vocabulaire\">Vocabulaire</h2>\n<table>\n<thead>\n<tr>\n<th>Mot</th>\n<th>Signification</th>\n<th>Exemple</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Population</td>\n<td>ensemble étudié</td>\n<td>les 25 élèves de la classe</td>\n</tr>\n<tr>\n<td>Individu</td>\n<td>un élément de la population</td>\n<td>un élève</td>\n</tr>\n<tr>\n<td>Caractère quantitatif</td>\n<td>s'exprime par un nombre</td>\n<td>taille, note, âge</td>\n</tr>\n<tr>\n<td>Caractère qualitatif</td>\n<td>ne s'exprime pas par un nombre</td>\n<td>sport pratiqué, couleur</td>\n</tr>\n<tr>\n<td>Effectif</td>\n<td>nombre d'individus ayant une valeur</td>\n<td>8 élèves ont 2 frères et sœurs</td>\n</tr>\n<tr>\n<td>Effectif total $N$</td>\n<td>nombre total d'individus</td>\n<td>$N = 25$</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"formules\">Formules</h2>\n<table>\n<thead>\n<tr>\n<th>Notion</th>\n<th>Formule</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Fréquence</td>\n<td>$f = \\dfrac{\\text{effectif}}{N}$ (fraction, décimal, pourcentage)</td>\n</tr>\n<tr>\n<td>Somme des fréquences</td>\n<td>$1$, soit $100\\ \\%$</td>\n</tr>\n<tr>\n<td>Effectif cumulé croissant</td>\n<td>somme des effectifs jusqu'à la valeur</td>\n</tr>\n<tr>\n<td>Angle (diagramme circulaire)</td>\n<td>$\\dfrac{\\text{effectif}}{N} \\times 360^\\circ$</td>\n</tr>\n<tr>\n<td>Moyenne simple</td>\n<td>$\\dfrac{\\text{somme des valeurs}}{\\text{nombre de valeurs}}$</td>\n</tr>\n<tr>\n<td>Moyenne pondérée</td>\n<td>$\\dfrac{n_{1}x_{1} + n_{2}x_{2} + \\ldots + n_{p}x_{p}}{N}$</td>\n</tr>\n<tr>\n<td>Étendue</td>\n<td>valeur maximale $-$ valeur minimale</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exemple-de-reference\">Exemple de référence</h2>\n<table>\n<thead>\n<tr>\n<th>Valeur</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>Total</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>3</td>\n<td>7</td>\n<td>8</td>\n<td>5</td>\n<td>2</td>\n<td>25</td>\n</tr>\n<tr>\n<td>Fréquence</td>\n<td>12 %</td>\n<td>28 %</td>\n<td>32 %</td>\n<td>20 %</td>\n<td>8 %</td>\n<td>100 %</td>\n</tr>\n<tr>\n<td>Effectif cumulé</td>\n<td>3</td>\n<td>10</td>\n<td>18</td>\n<td>23</td>\n<td>25</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>Moyenne : $\\dfrac{46}{25} = 1{,}84$ · Étendue : $4 - 0 = 4$.</p>\n<h2 id=\"choisir-la-bonne-representation\">Choisir la bonne représentation</h2>\n<ul>\n<li><strong>Diagramme en bâtons</strong> : caractère quantitatif avec peu de valeurs.</li>\n<li><strong>Diagramme circulaire</strong> : pour comparer des parts d'un tout (caractère qualitatif ou non).</li>\n<li><strong>Histogramme</strong> : valeurs regroupées en <strong>classes</strong> ; rectangles <strong>collés</strong>.</li>\n</ul>\n<h2 id=\"trois-pieges-a-eviter\">Trois pièges à éviter</h2>\n<ol>\n<li>Confondre valeur et effectif.</li>\n<li>Calculer la moyenne sans tenir compte des effectifs.</li>\n<li>Oublier de vérifier que la somme des angles fait $360^\\circ$ (ou des fréquences $100\\ \\%$).</li>\n</ol>\n<h2 id=\"regard-critique\">Regard critique</h2>\n<p>Vérifie toujours : le titre, les unités, l'effectif total, et si l'axe vertical part de zéro.\nUn pourcentage élevé sur un très petit effectif n'a pas la même valeur qu'un pourcentage\ncalculé sur des milliers d'individus.</p>"
  }
 ],
 "exercices": [
  {
   "type": "ouverte",
   "badge": 1,
   "consigne": "Vocabulaire",
   "diff": "facile",
   "q": "<p>Pour chaque situation, indique la population, l'individu étudié, le caractère,\net précise s'il est qualitatif ou quantitatif.\n1. On relève la taille des 30 élèves d'une classe de 1AC.\n2. On demande à 200 habitants de Casablanca leur moyen de transport préféré.\n3. On note le nombre de buts marqués par chacun des 22 joueurs d'un tournoi.</p>",
   "modele": "<ol>\n<li>Population : les 30 élèves de la classe ; individu : un élève ;\n   caractère : la taille ; <strong>quantitatif</strong>.</li>\n<li>Population : les 200 habitants interrogés ; individu : un habitant ;\n   caractère : le moyen de transport préféré ; <strong>qualitatif</strong>.</li>\n<li>Population : les 22 joueurs ; individu : un joueur ;\n   caractère : le nombre de buts marqués ; <strong>quantitatif</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 2,
   "consigne": "Construire un tableau d'effectifs",
   "diff": "facile",
   "q": "<p>Voici les notes obtenues par 20 élèves à un contrôle :\n8 ; 12 ; 15 ; 12 ; 10 ; 8 ; 15 ; 14 ; 12 ; 10 ; 15 ; 12 ; 8 ; 10 ; 14 ; 12 ; 15 ; 10 ; 12 ; 14.\n1. Construis le tableau des effectifs.\n2. Vérifie que la somme des effectifs vaut 20.\n3. Donne l'étendue de cette série.</p>",
   "modele": "<p>1.</p>\n<table>\n<thead>\n<tr>\n<th>Note</th>\n<th>8</th>\n<th>10</th>\n<th>12</th>\n<th>14</th>\n<th>15</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>3</td>\n<td>4</td>\n<td>6</td>\n<td>3</td>\n<td>4</td>\n</tr>\n</tbody>\n</table>\n<ol start=\"2\">\n<li>$3 + 4 + 6 + 3 + 4 = 20$ : l'effectif total est bien 20.</li>\n<li>Étendue : $15 - 8 = 7$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 3,
   "consigne": "Calculer des fréquences",
   "diff": "facile",
   "q": "<p>Dans un club de 50 membres, on relève le sport pratiqué :\nathlétisme 10, football 15, natation 20, judo 5.\nCalcule la fréquence de chaque sport en pourcentage, puis vérifie que la somme vaut 100 %.</p>",
   "modele": "<ul>\n<li>Athlétisme : $\\dfrac{10}{50} = 0{,}20 = 20\\ \\%$.</li>\n<li>Football : $\\dfrac{15}{50} = 0{,}30 = 30\\ \\%$.</li>\n<li>Natation : $\\dfrac{20}{50} = 0{,}40 = 40\\ \\%$.</li>\n<li>Judo : $\\dfrac{5}{50} = 0{,}10 = 10\\ \\%$.</li>\n</ul>\n<p>Somme : $20 + 30 + 40 + 10 = 100\\ \\%$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 4,
   "consigne": "Angles d'un diagramme circulaire",
   "diff": "facile",
   "q": "<p>Reprends les données de l'exercice 3.\nCalcule l'angle correspondant à chaque sport dans un diagramme circulaire,\npuis vérifie que la somme des angles vaut $360^\\circ$.</p>",
   "modele": "<ul>\n<li>Athlétisme : $0{,}20 \\times 360 = 72^\\circ$.</li>\n<li>Football : $0{,}30 \\times 360 = 108^\\circ$.</li>\n<li>Natation : $0{,}40 \\times 360 = 144^\\circ$.</li>\n<li>Judo : $0{,}10 \\times 360 = 36^\\circ$.</li>\n</ul>\n<p>Somme : $72 + 108 + 144 + 36 = 360^\\circ$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 5,
   "consigne": "Moyenne simple",
   "diff": "facile",
   "q": "<p>Un élève a obtenu les notes suivantes : 14 ; 9 ; 11 ; 16 ; 10.\nCalcule sa moyenne.</p>",
   "modele": "<p>$$\\dfrac{14 + 9 + 11 + 16 + 10}{5} = \\dfrac{60}{5} = 12$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 6,
   "consigne": "Étendue",
   "diff": "facile",
   "q": "<p>Une série statistique est : 7 ; 12 ; 3 ; 18 ; 9.\n1. Donne la plus petite et la plus grande valeur.\n2. Calcule l'étendue.</p>",
   "modele": "<ol>\n<li>Plus petite valeur : 3 ; plus grande valeur : 18.</li>\n<li>Étendue : $18 - 3 = 15$.</li>\n</ol>\n<h2 id=\"niveau-2\">Niveau 2</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 7,
   "consigne": "Effectifs cumulés",
   "diff": "",
   "q": "<p>On a relevé le nombre de livres lus pendant l'année par 40 élèves.</p>\n<table>\n<thead>\n<tr>\n<th>Nombre de livres</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>5</td>\n<td>11</td>\n<td>13</td>\n<td>8</td>\n<td>3</td>\n</tr>\n</tbody>\n</table>\n<ol>\n<li>Calcule les effectifs cumulés croissants.</li>\n<li>Combien d'élèves ont lu au plus 2 livres ?</li>\n<li>Combien d'élèves ont lu au moins 3 livres ?</li>\n</ol>",
   "modele": "<p>1.</p>\n<table>\n<thead>\n<tr>\n<th>Nombre de livres</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>5</td>\n<td>11</td>\n<td>13</td>\n<td>8</td>\n<td>3</td>\n</tr>\n<tr>\n<td>Effectif cumulé</td>\n<td>5</td>\n<td>16</td>\n<td>29</td>\n<td>37</td>\n<td>40</td>\n</tr>\n</tbody>\n</table>\n<ol start=\"2\">\n<li>« Au plus 2 livres » correspond à l'effectif cumulé de la valeur 2 : <strong>29 élèves</strong>.</li>\n<li>« Au moins 3 livres » : $8 + 3 = 11$ élèves (ou $40 - 29 = 11$).</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 8,
   "consigne": "Trois écritures d'une fréquence",
   "diff": "",
   "q": "<p>Sur 30 élèves, 6 viennent à vélo, 9 à pied et 15 en bus.\nPour chaque moyen de transport, donne la fréquence :\n1. sous forme de fraction simplifiée ;\n2. sous forme décimale ;\n3. sous forme de pourcentage.</p>",
   "modele": "<table>\n<thead>\n<tr>\n<th>Transport</th>\n<th>Fraction</th>\n<th>Décimal</th>\n<th>Pourcentage</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Vélo</td>\n<td>$\\dfrac{6}{30} = \\dfrac{1}{5}$</td>\n<td>0,2</td>\n<td>20 %</td>\n</tr>\n<tr>\n<td>À pied</td>\n<td>$\\dfrac{9}{30} = \\dfrac{3}{10}$</td>\n<td>0,3</td>\n<td>30 %</td>\n</tr>\n<tr>\n<td>Bus</td>\n<td>$\\dfrac{15}{30} = \\dfrac{1}{2}$</td>\n<td>0,5</td>\n<td>50 %</td>\n</tr>\n</tbody>\n</table>\n<p>Somme : $20 + 30 + 50 = 100\\ \\%$.</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 9,
   "consigne": "Moyenne pondérée",
   "diff": "",
   "q": "<p>Un élève obtient 12 au premier devoir (coefficient 1), 15 au second devoir (coefficient 2)\net 9 à l'examen (coefficient 3).\nCalcule sa moyenne pondérée.</p>",
   "modele": "<p>$$\\overline{x} = \\dfrac{1 \\times 12 + 2 \\times 15 + 3 \\times 9}{1 + 2 + 3}\n= \\dfrac{12 + 30 + 27}{6} = \\dfrac{69}{6} = 11{,}5$$</p>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 10,
   "consigne": "Classes et histogramme",
   "diff": "",
   "q": "<p>On a mesuré la taille (en cm) de 30 élèves.</p>\n<table>\n<thead>\n<tr>\n<th>Taille</th>\n<th>$[140\\ ;\\ 150[$</th>\n<th>$[150\\ ;\\ 160[$</th>\n<th>$[160\\ ;\\ 170[$</th>\n<th>$[170\\ ;\\ 180[$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>5</td>\n<td>12</td>\n<td>9</td>\n<td>4</td>\n</tr>\n</tbody>\n</table>\n<ol>\n<li>Vérifie l'effectif total.</li>\n<li>Quel pourcentage d'élèves mesure entre 150 cm et 160 cm ?</li>\n<li>Combien d'élèves mesurent moins de 160 cm ?</li>\n<li>Décris l'histogramme que tu tracerais (largeur et hauteur des rectangles).</li>\n</ol>",
   "modele": "<ol>\n<li>$5 + 12 + 9 + 4 = 30$ : effectif total confirmé.</li>\n<li>$\\dfrac{12}{30} = 0{,}40 = 40\\ \\%$.</li>\n<li>$5 + 12 = 17$ élèves mesurent moins de 160 cm.</li>\n<li>Quatre rectangles <strong>collés</strong>, tous de même largeur (une classe de 10 cm),\n   de hauteurs proportionnelles à 5, 12, 9 et 4.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 11,
   "consigne": "Effectif manquant",
   "diff": "",
   "q": "<p>Une enquête porte sur 40 personnes réparties en quatre catégories.\nLes effectifs connus sont 8, 12 et 6.\n1. Calcule l'effectif de la quatrième catégorie.\n2. Calcule sa fréquence en pourcentage.</p>",
   "modele": "<ol>\n<li>$8 + 12 + 6 = 26$ ; $40 - 26 = 14$.</li>\n<li>$\\dfrac{14}{40} = 0{,}35 = 35\\ \\%$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 12,
   "consigne": "Lire un diagramme en bâtons",
   "diff": "",
   "q": "<p>Le diagramme ci-dessous donne le nombre de frères et sœurs des élèves d'une classe.</p>\n<pre><code> effectif\n   9 |              ###\n   8 |              ###\n   7 |         ###  ###\n   6 |         ###  ###\n   5 |         ###  ###   ###\n   4 |    ###  ###  ###   ###\n   3 |    ###  ###  ###   ###\n   2 |    ###  ###  ###   ###   ###\n   1 |    ###  ###  ###   ###   ###\n     +----+----+----+-----+-----+---&gt; valeur\n        0    1    2     3     4\n\n  effectifs : 0 -&gt; 4 ; 1 -&gt; 7 ; 2 -&gt; 9 ; 3 -&gt; 5 ; 4 -&gt; 2\n</code></pre>\n<ol>\n<li>Quel est l'effectif total de la classe ?</li>\n<li>Quelle est la valeur la plus fréquente ?</li>\n<li>Calcule la moyenne du nombre de frères et sœurs (arrondie au centième).</li>\n<li>Calcule l'étendue.</li>\n</ol>",
   "modele": "<ol>\n<li>$4 + 7 + 9 + 5 + 2 = 27$ élèves.</li>\n<li>La valeur la plus fréquente est <strong>2</strong> (effectif 9).</li>\n<li>$\\overline{x} = \\dfrac{4 \\times 0 + 7 \\times 1 + 9 \\times 2 + 5 \\times 3 + 2 \\times 4}{27}\n   = \\dfrac{0 + 7 + 18 + 15 + 8}{27} = \\dfrac{48}{27} \\approx 1{,}78$.</li>\n<li>Étendue : $4 - 0 = 4$.</li>\n</ol>\n<h2 id=\"niveau-3\">Niveau 3</h2>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 13,
   "consigne": "Enquête sur les transports",
   "diff": "difficile",
   "q": "<p>Dans un collège de Casablanca, on interroge 120 élèves sur leur mode de transport :\nbus 45, à pied 30, vélo 15, voiture 30.\n1. Calcule la fréquence de chaque mode, en pourcentage.\n2. Calcule l'angle correspondant dans un diagramme circulaire.\n3. Vérifie la somme des angles.\n4. Quel mode de transport représente plus du tiers des élèves ?</p>",
   "modele": "<ol>\n<li>Bus : $\\dfrac{45}{120} = 0{,}375 = 37{,}5\\ \\%$ ; à pied : $\\dfrac{30}{120} = 25\\ \\%$ ;\n   vélo : $\\dfrac{15}{120} = 12{,}5\\ \\%$ ; voiture : $\\dfrac{30}{120} = 25\\ \\%$.</li>\n<li>Bus : $0{,}375 \\times 360 = 135^\\circ$ ; à pied : $0{,}25 \\times 360 = 90^\\circ$ ;\n   vélo : $0{,}125 \\times 360 = 45^\\circ$ ; voiture : $90^\\circ$.</li>\n<li>$135 + 90 + 45 + 90 = 360^\\circ$ : le diagramme est correct.</li>\n<li>Un tiers vaut environ $33{,}3\\ \\%$ : seul le <strong>bus</strong> ($37{,}5\\ \\%$) dépasse le tiers.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 14,
   "consigne": "Deux groupes",
   "diff": "difficile",
   "q": "<p>Dans une classe, 12 élèves ont obtenu une moyenne de 13 et les 18 autres une moyenne de 11.\n1. Calcule la somme des notes du premier groupe, puis celle du second.\n2. Calcule la moyenne de la classe entière.\n3. Cette moyenne est-elle égale à $\\dfrac{13 + 11}{2}$ ? Explique.</p>",
   "modele": "<ol>\n<li>Premier groupe : $12 \\times 13 = 156$ ; second groupe : $18 \\times 11 = 198$.</li>\n<li>$\\overline{x} = \\dfrac{156 + 198}{12 + 18} = \\dfrac{354}{30} = 11{,}8$.</li>\n<li>Non : $\\dfrac{13 + 11}{2} = 12 \\neq 11{,}8$. Les deux groupes n'ont pas le même effectif ;\n   le groupe de 18 élèves « pèse » davantage dans la moyenne.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 15,
   "consigne": "Températures à Ifrane",
   "diff": "difficile",
   "q": "<p>Voici les températures relevées à midi pendant 7 jours (en °C) :\n18 ; 21 ; 19 ; 24 ; 22 ; 20 ; 26.\n1. Calcule la moyenne de cette série, arrondie au dixième.\n2. Calcule l'étendue.\n3. Combien de jours la température a-t-elle dépassé la moyenne ?</p>",
   "modele": "<ol>\n<li>Somme : $18 + 21 + 19 + 24 + 22 + 20 + 26 = 150$ ;\n   $\\overline{x} = \\dfrac{150}{7} \\approx 21{,}4$ °C.</li>\n<li>Étendue : $26 - 18 = 8$ °C.</li>\n<li>Températures supérieures à 21,4 : 24 ; 22 ; 26, soit <strong>3 jours</strong>.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 16,
   "consigne": "Une note manquante",
   "diff": "difficile",
   "q": "<p>La moyenne des 5 notes d'un élève est exactement 12.\nQuatre de ses notes sont : 10 ; 14 ; 9 ; 13.\n1. Calcule la somme des 5 notes.\n2. Déduis-en la cinquième note.</p>",
   "modele": "<ol>\n<li>Moyenne $\\times$ nombre de notes : $12 \\times 5 = 60$.</li>\n<li>$10 + 14 + 9 + 13 = 46$ ; cinquième note : $60 - 46 = 14$.</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  },
  {
   "type": "ouverte",
   "badge": 17,
   "consigne": "Regard critique sur un graphique",
   "diff": "difficile",
   "q": "<p>Un commerçant affiche un graphique de ses ventes mensuelles. L'axe vertical commence\nà 90 et se termine à 110. Les ventes valent 95, 99, 102 et 105 unités.\nLe titre annonce « Explosion des ventes ! ».\n1. Calcule l'augmentation réelle entre le premier et le dernier mois, en unités.\n2. Calcule cette augmentation en pourcentage du premier mois (arrondi au dixième).\n3. Le titre te paraît-il honnête ? Explique en deux phrases ce que le graphique\n   devrait montrer pour être loyal.</p>\n<hr />\n<table>\n<thead>\n<tr>\n<th>Ex.</th>\n<th>Niveau</th>\n<th>Compétence visée</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1</td>\n<td>Employer le vocabulaire statistique</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1</td>\n<td>Construire un tableau d'effectifs</td>\n</tr>\n<tr>\n<td>3</td>\n<td>1</td>\n<td>Calculer des fréquences</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1</td>\n<td>Calculer des angles</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1</td>\n<td>Calculer une moyenne</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1</td>\n<td>Calculer une étendue</td>\n</tr>\n<tr>\n<td>7</td>\n<td>2</td>\n<td>Utiliser les effectifs cumulés</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2</td>\n<td>Écrire une fréquence de trois façons</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2</td>\n<td>Calculer une moyenne pondérée</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2</td>\n<td>Travailler avec des classes</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2</td>\n<td>Retrouver un effectif manquant</td>\n</tr>\n<tr>\n<td>12</td>\n<td>2</td>\n<td>Lire un diagramme en bâtons</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3</td>\n<td>Construire un diagramme circulaire</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3</td>\n<td>Raisonner sur les moyennes</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3</td>\n<td>Analyser une série de mesures</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3</td>\n<td>Résoudre un problème de moyenne</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3</td>\n<td>Porter un regard critique</td>\n</tr>\n</tbody>\n</table>",
   "modele": "<ol>\n<li>$105 - 95 = 10$ unités.</li>\n<li>$\\dfrac{10}{95} \\approx 0{,}105 = 10{,}5\\ \\%$ environ.</li>\n<li>Le titre est trompeur : une hausse d'environ $10{,}5\\ \\%$ n'est pas une « explosion ».\n   L'axe vertical, qui commence à 90 au lieu de 0, exagère fortement les écarts ;\n   un graphique loyal partirait de 0 et porterait un titre neutre du type\n   « Évolution des ventes mensuelles ».</li>\n</ol>",
   "criteres": [
    "Compare chaque calcul ligne par ligne avec la correction",
    "Encadre chaque résultat",
    "Rédige sur ton cahier"
   ]
  }
 ],
 "devoir": {
  "titre": "Devoir — M21",
  "consigne": "<p><strong>Durée</strong> 1 h · <strong>Barème</strong> /20</p>\n<h2 id=\"exercice-1-8-points-heures-de-sport-par-semaine\">Exercice 1 (8 points) — Heures de sport par semaine</h2>\n<p>On a interrogé les 40 élèves d'un collège d'Agadir sur le nombre d'heures de sport\npratiquées chaque semaine.</p>\n<table>\n<thead>\n<tr>\n<th>Nombre d'heures</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>4</td>\n<td>10</td>\n<td>14</td>\n<td>8</td>\n<td>4</td>\n</tr>\n</tbody>\n</table>\n<ol>\n<li>Précise la population, l'individu et le caractère étudié (type compris).</li>\n<li>Vérifie l'effectif total.</li>\n<li>Calcule la fréquence de chaque valeur, en pourcentage.</li>\n<li>Calcule les effectifs cumulés croissants et dis combien d'élèves font au plus 2 h de sport.</li>\n<li>Calcule les angles d'un diagramme circulaire représentant cette série.</li>\n<li>Calcule la moyenne du nombre d'heures de sport.</li>\n<li>Calcule l'étendue.</li>\n</ol>\n<h3 id=\"bareme-detaille\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>40 élèves ; un élève ; nombre d'heures, quantitatif</td>\n<td>1</td>\n</tr>\n<tr>\n<td>2</td>\n<td>$N = 40$</td>\n<td>0,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>10 % ; 25 % ; 35 % ; 20 % ; 10 %</td>\n<td>2</td>\n</tr>\n<tr>\n<td>4</td>\n<td>4 ; 14 ; 28 ; 36 ; 40 — et 28 élèves</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>5</td>\n<td>36° ; 90° ; 126° ; 72° ; 36°</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>6</td>\n<td>$\\overline{x} = 1{,}95$</td>\n<td>1</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Étendue $= 4$</td>\n<td>0,5</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-2-6-points-moyenne-ponderee\">Exercice 2 (6 points) — Moyenne pondérée</h2>\n<p>Un élève doit obtenir une moyenne de 13 en mathématiques.\nIl a eu 11 au devoir 1 (coefficient 1) et 14 au devoir 2 (coefficient 2).\nLa note de l'examen compte avec le coefficient 3.</p>\n<ol>\n<li>Calcule la somme des points déjà obtenus (note $\\times$ coefficient).</li>\n<li>Quelle somme totale de points faut-il atteindre pour avoir 13 de moyenne ?</li>\n<li>Déduis-en la note nécessaire à l'examen.</li>\n</ol>\n<h3 id=\"bareme-detaille_1\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>39 points</td>\n<td>2</td>\n</tr>\n<tr>\n<td>2</td>\n<td>78 points</td>\n<td>2</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Note de 13</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"exercice-3-6-points-temps-de-trajet-et-lecture-critique\">Exercice 3 (6 points) — Temps de trajet et lecture critique</h2>\n<p>On a mesuré le temps de trajet (en minutes) de 40 élèves pour venir au collège.</p>\n<table>\n<thead>\n<tr>\n<th>Temps (min)</th>\n<th>$[0\\ ;\\ 10[$</th>\n<th>$[10\\ ;\\ 20[$</th>\n<th>$[20\\ ;\\ 30[$</th>\n<th>$[30\\ ;\\ 40[$</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effectif</td>\n<td>6</td>\n<td>14</td>\n<td>12</td>\n<td>8</td>\n</tr>\n</tbody>\n</table>\n<ol>\n<li>Vérifie l'effectif total.</li>\n<li>Quel pourcentage d'élèves met moins de 20 minutes ?</li>\n<li>Combien d'élèves mettent au moins 30 minutes ? Donne la fréquence en pourcentage.</li>\n<li>Quelle représentation graphique convient à ces données ? Décris-la en une phrase.</li>\n<li>Un journal titre : « La majorité des élèves met plus d'une demi-heure pour venir ».\n   Ce titre est-il correct ? Justifie par un calcul.</li>\n</ol>\n<h3 id=\"bareme-detaille_2\">Barème détaillé</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Attendu</th>\n<th>Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>$N = 40$</td>\n<td>0,5</td>\n</tr>\n<tr>\n<td>2</td>\n<td>50 %</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>3</td>\n<td>8 élèves, soit 20 %</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Histogramme, rectangles collés de même largeur</td>\n<td>1,5</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Faux : 20 % seulement</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<hr />",
  "criteres": [
   "Montre toutes les étapes de calcul",
   "Respecte le barème de chaque exercice",
   "Relis-toi avant de voir la correction"
  ],
  "modele": "<h3 id=\"exercice-1\">Exercice 1</h3>\n<ol>\n<li>Population : les 40 élèves interrogés ; individu : un élève ;\n   caractère : le nombre d'heures de sport par semaine, <strong>quantitatif</strong>.</li>\n<li>$4 + 10 + 14 + 8 + 4 = 40$.</li>\n<li>$\\dfrac{4}{40} = 10\\ \\%$ ; $\\dfrac{10}{40} = 25\\ \\%$ ; $\\dfrac{14}{40} = 35\\ \\%$ ;\n   $\\dfrac{8}{40} = 20\\ \\%$ ; $\\dfrac{4}{40} = 10\\ \\%$. Somme : $100\\ \\%$.</li>\n<li>Effectifs cumulés : 4 ; 14 ; 28 ; 36 ; 40.\n   <strong>28 élèves</strong> font au plus 2 h de sport par semaine.</li>\n<li>$0{,}10 \\times 360 = 36^\\circ$ ; $0{,}25 \\times 360 = 90^\\circ$ ; $0{,}35 \\times 360 = 126^\\circ$ ;\n   $0{,}20 \\times 360 = 72^\\circ$ ; $0{,}10 \\times 360 = 36^\\circ$.\n   Vérification : $36 + 90 + 126 + 72 + 36 = 360^\\circ$.</li>\n<li>$\\overline{x} = \\dfrac{4 \\times 0 + 10 \\times 1 + 14 \\times 2 + 8 \\times 3 + 4 \\times 4}{40}\n   = \\dfrac{0 + 10 + 28 + 24 + 16}{40} = \\dfrac{78}{40} = 1{,}95$ heure.</li>\n<li>Étendue : $4 - 0 = 4$ heures.</li>\n</ol>\n<h3 id=\"exercice-2\">Exercice 2</h3>\n<ol>\n<li>$1 \\times 11 + 2 \\times 14 = 11 + 28 = 39$ points.</li>\n<li>Somme des coefficients : $1 + 2 + 3 = 6$. Pour une moyenne de 13, il faut\n   $13 \\times 6 = 78$ points.</li>\n<li>Points manquants : $78 - 39 = 39$. Comme l'examen a le coefficient 3 :\n   $39 \\div 3 = 13$. Il doit obtenir <strong>13</strong> à l'examen.</li>\n</ol>\n<h3 id=\"exercice-3\">Exercice 3</h3>\n<ol>\n<li>$6 + 14 + 12 + 8 = 40$.</li>\n<li>Moins de 20 min : $6 + 14 = 20$ élèves, soit $\\dfrac{20}{40} = 0{,}5 = 50\\ \\%$.</li>\n<li>Au moins 30 min : 8 élèves, soit $\\dfrac{8}{40} = 0{,}2 = 20\\ \\%$.</li>\n<li>Un <strong>histogramme</strong> : quatre rectangles collés, de même largeur (classe de 10 min),\n   de hauteurs proportionnelles à 6, 14, 12 et 8.</li>\n<li>Non : « plus d'une demi-heure » correspond à la classe $[30\\ ;\\ 40[$, soit 8 élèves,\n   c'est-à-dire $20\\ \\%$ du total. Ce n'est pas la majorité, qui exigerait plus de $50\\ \\%$.</li>\n</ol>"
 }
}
);
