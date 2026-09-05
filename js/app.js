/* ============================================================
   Les Révisions d'Hidaya — moteur de l'application
   Fonctionne hors-ligne (double-clic sur index.html) et en ligne.
   ============================================================ */
"use strict";

/* ---------- Fusion des données ---------- */
const MATIERES = [
  { id: "francais", nom: "Français", icone: "📖", desc: "20 unités du manuel + grammaire, conjugaison, orthographe", ok: true,
    domaines: ["textes", "grammaire", "conjugaison", "orthographe", "defis"] },
  { id: "maths", nom: "Mathématiques", icone: "🔢", desc: "21 chapitres du programme 1AC (Maroc)", ok: true,
    domaines: ["maths"] },
  { id: "anglais",  nom: "Anglais", icone: "🇬🇧", desc: "Bientôt disponible…", ok: false },
  { id: "sciences", nom: "Sciences", icone: "🔬", desc: "Bientôt disponible…", ok: false }
];

const DOMAINES = {
  textes:      { nom: "Textes & Expression", icone: "📜", desc: "Les 20 unités du manuel, thème par thème" },
  grammaire:   { nom: "Grammaire",           icone: "🧩", desc: "La phrase, les classes, les fonctions" },
  conjugaison: { nom: "Conjugaison",         icone: "⏰", desc: "Les temps avec tableaux et exercices" },
  orthographe: { nom: "Orthographe & Vocabulaire", icone: "🔤", desc: "Homophones, accords, mots" },
  defis:       { nom: "Défis & Évaluations", icone: "🎯", desc: "Évaluations blanches et dictées" },
  maths:       { nom: "Programme 1AC",       icone: "📐", desc: "21 chapitres : numérique, algèbre, géométrie, statistiques" }
};

const ORDRE_DOMAINES = ["textes", "grammaire", "conjugaison", "orthographe", "defis", "maths"];

/* Domaines à afficher pour une matière */
function domainesDe(idMatiere) {
  const m = MATIERES.find(x => x.id === idMatiere);
  if (m && m.domaines) return m.domaines;
  return ORDRE_DOMAINES.filter(d => leconsDuDomaine(d).length > 0);
}

/* ---------- Progression (localStorage) ---------- */
const CLE_PROGRESS = "hidaya_progress_v1";

function chargerProgress() {
  try { return JSON.parse(localStorage.getItem(CLE_PROGRESS)) || { points: 0, lecons: {} }; }
  catch { return { points: 0, lecons: {} }; }
}
function sauverProgress(p) { localStorage.setItem(CLE_PROGRESS, JSON.stringify(p)); }

function majScore() {
  const p = chargerProgress();
  const el = document.getElementById("score-badge");
  el.textContent = "⭐ " + p.points;
  el.classList.remove("pulse"); void el.offsetWidth; el.classList.add("pulse");
}
function ajouterPoints(n) {
  const p = chargerProgress();
  p.points = Math.max(0, p.points + n);
  sauverProgress(p); majScore();
}

/* ---------- Index des leçons ---------- */
let INDEX_LECONS = {}; // id -> lecon
function construireIndex() {
  INDEX_LECONS = {};
  (window.HIDAYA_DATA || []).forEach(l => { INDEX_LECONS[l.id] = l; });
}

function leconsDuDomaine(dom) { return (window.HIDAYA_DATA || []).filter(l => l.domaine === dom); }

/* ---------- Utilitaires ---------- */
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
/* comparaison souple : minuscules, ponctuation et accents ignorés */
function norm(s) {
  return String(s || "").toLowerCase().trim()
    .replace(/[.,!?;:"'’«»()\-]/g, " ")
    .replace(/\s+/g, " ")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
/* comparaison stricte : les accents comptent (pour les homophones a/à, ou/où…) */
function normStrict(s) {
  return String(s || "").toLowerCase().trim()
    .replace(/[.,!?;:"'’«»()\-]/g, " ")
    .replace(/\s+/g, " ").trim();
}
function melanger(tab) {
  const t = tab.slice();
  for (let i = t.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [t[i], t[j]] = [t[j], t[i]];
  }
  return t;
}
function etoilesLecon(id) {
  const p = chargerProgress();
  const st = p.lecons[id];
  if (!st || !st.exosFaits) return 0;
  if (st.exosFaits === 0) return 0;
  const ratio = st.exosReussis / st.exosFaits;
  if (ratio >= 0.9) return 3;
  if (ratio >= 0.6) return 2;
  return 1;
}
function enregistrerExo(idLecon, reussi) {
  const p = chargerProgress();
  const st = p.lecons[idLecon] || (p.lecons[idLecon] = { exosFaits: 0, exosReussis: 0, devoir: false });
  st.exosFaits++;
  if (reussi) st.exosReussis++;
  sauverProgress(p);
}
function enregistrerDevoir(idLecon, reussi) {
  const p = chargerProgress();
  const st = p.lecons[idLecon] || (p.lecons[idLecon] = { exosFaits: 0, exosReussis: 0, devoir: false });
  st.devoir = true;
  sauverProgress(p);
}

/* Confettis de félicitations */
function confettis() {
  const emojis = ["🎉", "⭐", "✨", "🎊", "🌟"];
  for (let i = 0; i < 14; i++) {
    const e = document.createElement("span");
    e.className = "confetti";
    e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = (5 + Math.random() * 90) + "vw";
    e.style.animationDelay = (Math.random() * 0.6) + "s";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 3000);
  }
}

/* ---------- Routage ---------- */
const APP = document.getElementById("app");
let routePrecedente = "";

function naviguer() {
  const hash = location.hash || "#/";
  const parts = hash.slice(2).split("/").filter(Boolean);
  window.scrollTo(0, 0);
  if (parts.length === 0) return pageAccueil();
  if (parts[0] === "reglages") return pageReglages();
  if (parts[0] === "matiere" && parts[1]) return pageMatiere(parts[1]);
  if (parts[0] === "domaine" && parts[1]) return pageDomaine(parts[1]);
  if (parts[0] === "lecon" && parts[1]) return pageLecon(parts[1]);
  return pageAccueil();
}

function aller(hash) { location.hash = hash; }

function majBoutonRetour(cible) {
  const btn = document.getElementById("btn-retour");
  if (cible) { btn.hidden = false; btn.onclick = () => aller(cible); }
  else btn.hidden = true;
}

/* ---------- Page : Accueil ---------- */
function pageAccueil() {
  majBoutonRetour(null);
  document.title = "Les Révisions d'Hidaya 📚";
  const p = chargerProgress();
  const badges = calculerBadges(p);
  const dernier = localStorage.getItem("hidaya_last");
  const derniereLecon = dernier && INDEX_LECONS[dernier] ? INDEX_LECONS[dernier] : null;
  APP.innerHTML = `
    <section class="accueil-hero">
      <span class="hero-emoji" style="top:14px;left:22px">✨</span>
      <span class="hero-emoji" style="bottom:18px;right:26px;animation-delay:1.2s">📚</span>
      <span class="hero-emoji" style="top:40px;right:80px;animation-delay:.6s">🌟</span>
      <h1>Bonjour Hidaya ! 👋</h1>
      <p>Choisis la matière que tu veux préparer, puis la leçon que tu as vue en classe —
         ou celle qui arrive. Tu trouveras le cours, des exercices et des devoirs
         <span class="marque">avec les corrections cachées</span> : tu ne les regardes que quand tu as fini !</p>
      <div class="accueil-stats">
        <span class="stat-chip">⭐ ${p.points} points</span>
        <span class="stat-chip">🏅 ${badges.gagnes.length} badge${badges.gagnes.length > 1 ? "s" : ""}</span>
        <span class="stat-chip">📚 ${compterLeconsFaites()} leçon${compterLeconsFaites() > 1 ? "s" : ""} révisée${compterLeconsFaites() > 1 ? "s" : ""}</span>
      </div>
      <div class="badges-ligne">
        ${badges.tous.map(b => `<span class="badge ${badges.gagnes.includes(b.id) ? "" : "verrouille"}" title="${esc(b.titre)}">${b.icone} ${esc(b.nom)}</span>`).join("")}
      </div>
    </section>
    ${derniereLecon ? `
    <a class="carte-continuer" href="#/lecon/${derniereLecon.id}">
      <span class="play">▶</span>
      <span>Reprends ta révision
        <span class="petit">${esc(derniereLecon.icone || "")} ${esc(derniereLecon.titre)}</span>
      </span>
    </a>` : ""}
    <section class="grille-cartes">
      ${MATIERES.map(m => `
        <a class="carte-matiere ${m.ok ? "" : "bientot"}" ${m.ok ? `href="#/matiere/${m.id}"` : ""}>
          ${m.ok ? "" : `<span class="badge-verrou">🔒 bientôt</span>`}
          <span class="rond-icone">${m.icone}</span>
          <span class="nom">${m.nom}</span>
          <span class="desc">${m.desc}</span>
        </a>`).join("")}
    </section>
  `;
}

function compterLeconsFaites() {
  const p = chargerProgress();
  return Object.values(p.lecons).filter(st => st.exosFaits > 0 || st.devoir).length;
}

function calculerBadges(p) {
  const tous = [
    { id: "b50",  nom: "50 points",  icone: "🥉", titre: "Atteindre 50 points",  test: pp => pp.points >= 50 },
    { id: "b150", nom: "150 points", icone: "🥈", titre: "Atteindre 150 points", test: pp => pp.points >= 150 },
    { id: "b300", nom: "300 points", icone: "🥇", titre: "Atteindre 300 points", test: pp => pp.points >= 300 },
    { id: "b500", nom: "500 points", icone: "🏆", titre: "Atteindre 500 points", test: pp => pp.points >= 500 },
    { id: "d10",  nom: "10 leçons",  icone: "📚", titre: "Réviser 10 leçons", test: pp => Object.values(pp.lecons).filter(s => s.exosFaits > 0).length >= 10 },
    { id: "dv5",  nom: "5 devoirs",  icone: "✍️", titre: "Faire 5 devoirs", test: pp => Object.values(pp.lecons).filter(s => s.devoir).length >= 5 }
  ];
  return { tous, gagnes: tous.filter(b => b.test(p)).map(b => b.id) };
}

/* ---------- Page : Réglages ---------- */
function pageReglages() {
  majBoutonRetour("#/");
  document.title = "Réglages — Révisions d'Hidaya";
  const p = chargerProgress();
  const badges = calculerBadges(p);
  const nDevoirs = Object.values(p.lecons).filter(s => s.devoir).length;
  APP.innerHTML = `
    <h1 class="titre-page">⚙️ Réglages</h1>
    <p class="sous-titre">Ta progression et les réglages de l'application</p>

    <section class="reglages-section">
      <h2>📊 Ma progression</h2>
      <div class="reglages-ligne"><span>⭐ Points</span><span class="valeur">${p.points}</span></div>
      <div class="reglages-ligne"><span>📚 Leçons révisées</span><span class="valeur">${compterLeconsFaites()} / ${Object.keys(INDEX_LECONS).length}</span></div>
      <div class="reglages-ligne"><span>✍️ Devoirs terminés</span><span class="valeur">${nDevoirs}</span></div>
      <div class="reglages-ligne"><span>🏅 Badges gagnés</span><span class="valeur">${badges.gagnes.length} / ${badges.tous.length}</span></div>
    </section>

    <section class="reglages-section">
      <h2>ℹ️ À propos</h2>
      <div class="reglages-ligne"><span>🎒 Niveau</span><span class="valeur">5e / EB7 · 1AC</span></div>
      <div class="reglages-ligne"><span>📴 Mode hors-ligne</span><span class="valeur">Télécharge le ZIP → double-clic sur index.html</span></div>
      <div class="reglages-ligne"><span>💾 Où sont mes points ?</span><span class="valeur">Dans ce navigateur (rien n'est envoyé nulle part)</span></div>
    </section>

    <section class="reglages-section">
      <h2>🔄 Réinitialiser</h2>
      <div class="zone-danger">
        <p>Attention : cela efface <strong>tous tes points, tes étoiles et tes badges</strong>.
           Tes leçons repartiront de zéro. On ne peut pas annuler !</p>
        <button class="btn btn-danger" id="btn-reset">🔄 Réinitialiser ma progression</button>
        <div class="confirmation-suppr" id="zone-confirm-reset" hidden>
          <button class="btn btn-danger btn-petit" id="btn-reset-oui">Oui, tout effacer !</button>
          <button class="btn btn-secondaire btn-petit" id="btn-reset-non">Annuler</button>
        </div>
      </div>
    </section>
  `;
  document.getElementById("btn-reset").addEventListener("click", () => {
    document.getElementById("zone-confirm-reset").hidden = false;
    document.getElementById("btn-reset").hidden = true;
  });
  document.getElementById("btn-reset-non").addEventListener("click", () => {
    document.getElementById("zone-confirm-reset").hidden = true;
    document.getElementById("btn-reset").hidden = false;
  });
  document.getElementById("btn-reset-oui").addEventListener("click", () => {
    localStorage.removeItem(CLE_PROGRESS);
    localStorage.removeItem("hidaya_last");
    majScore();
    confettis();
    pageAccueil();
  });
}

/* ---------- Page : Matière ---------- */
function pageMatiere(idMatiere) {
  const m = MATIERES.find(x => x.id === idMatiere);
  if (!m) return pageAccueil();
  majBoutonRetour("#/");
  document.title = m.nom + " — Révisions d'Hidaya";
  if (!m.ok) return pageAccueil();

  APP.innerHTML = `
    <h1 class="titre-page">${m.icone} ${m.nom}</h1>
    <p class="sous-titre">Que veux-tu réviser aujourd'hui ?</p>
    ${domainesDe(idMatiere).map(did => {
      const d = DOMAINES[did];
      const lecons = leconsDuDomaine(did);
      const faites = lecons.filter(l => etoilesLecon(l.id) > 0).length;
      return `
        <a class="carte-domaine" href="#/domaine/${did}">
          <span class="icone">${d.icone}</span>
          <span class="infos">
            <span class="nom">${d.nom}</span><br>
            <span class="desc">${d.desc}</span>
          </span>
          <span class="nb">${faites}/${lecons.length} ✅</span>
        </a>`;
    }).join("")}
  `;
}

/* ---------- Page : Domaine (liste des leçons) ---------- */
function pageDomaine(idDomaine) {
  const d = DOMAINES[idDomaine];
  if (!d) return pageMatiere("francais");
  const matiere = MATIERES.find(m => domainesDe(m.id).includes(idDomaine)) || MATIERES[0];
  majBoutonRetour("#/matiere/" + matiere.id);
  document.title = d.nom + " — Révisions d'Hidaya";
  const lecons = leconsDuDomaine(idDomaine);

  // Regroupement par thème si présent
  const avecTheme = lecons.some(l => l.theme);
  let html = `<h1 class="titre-page">${d.icone} ${d.nom}</h1><p class="sous-titre">${d.desc}</p>`;

  if (avecTheme) {
    const themes = [];
    lecons.forEach(l => { if (!themes.includes(l.theme)) themes.push(l.theme); });
    html += themes.map(th => `
      <div class="theme-bloc">
        <div class="theme-titre">${esc(th)}</div>
        <div class="grille-lecons">
          ${lecons.filter(l => l.theme === th).map(l => carteLecon(l)).join("")}
        </div>
      </div>`).join("");
  } else {
    html += `<div class="grille-lecons">${lecons.map(l => carteLecon(l)).join("")}</div>`;
  }
  APP.innerHTML = html;
}

function carteLecon(l) {
  const et = etoilesLecon(l.id);
  const fait = et > 0 ? " fait" : "";
  const p = chargerProgress();
  const st = p.lecons[l.id];
  const mini = st ? `<span class="pts-lecon">${"⭐".repeat(et)}${st.devoir ? " ✍️" : ""}</span>` : "";
  const num = l.unite ? `Unité ${l.unite} · ` : (l.tag ? l.tag + " · " : "");
  return `
    <a class="carte-lecon${fait}" href="#/lecon/${l.id}">
      ${mini}
      <span class="num">${esc(num)}${esc(l.texte || "")}</span>
      <div class="titre">${esc(l.titre)}</div>
    </a>`;
}

/* ---------- Page : Leçon ---------- */
let ongletActif = "cours";

function pageLecon(idLecon) {
  const l = INDEX_LECONS[idLecon];
  if (!l) return pageMatiere("francais");
  majBoutonRetour(leconsDuDomaine(l.domaine).length ? "#/domaine/" + l.domaine : "#/matiere/francais");
  ongletActif = "cours";
  localStorage.setItem("hidaya_last", idLecon);
  rendreLecon(l);
}

function rendreLecon(l) {
  document.title = l.titre + " — Révisions d'Hidaya";
  const st = chargerProgress().lecons[l.id] || { exosFaits: 0, exosReussis: 0, devoir: false };
  const nExos = l.exercices ? l.exercices.length : 0;

  APP.innerHTML = `
    <header class="lecon-entete">
      <h1>${l.icone ? l.icone + " " : ""}${esc(l.titre)}</h1>
      <div class="meta">
        ${l.texte ? "Texte : « " + esc(l.texte) + " » · " : ""}
        ${l.theme ? esc(l.theme) + " · " : ""}${l.niveau || "5e / EB7"}${l.duree ? " · ⏱ " + esc(l.duree) : ""}
      </div>
    </header>
    <div class="lecon-objectifs">
      <strong>🎯 Dans cette leçon, tu vas apprendre à :</strong>
      <ul>${(l.objectifs || []).map(o => `<li>${esc(o)}</li>`).join("")}</ul>
    </div>
    <nav class="onglets">
      <button class="onglet ${ongletActif === "cours" ? "actif" : ""}" data-onglet="cours">📘 Le cours</button>
      <button class="onglet ${ongletActif === "exercices" ? "actif" : ""}" data-onglet="exercices">✍️ Les exercices <span class="mini-score">${st.exosReussis}/${nExos}</span></button>
      <button class="onglet ${ongletActif === "devoir" ? "actif" : ""}" data-onglet="devoir">📝 Le devoir ${st.devoir ? "✅" : ""}</button>
    </nav>
    <div id="zone-onglet"></div>
  `;
  document.querySelectorAll(".onglet").forEach(b => {
    b.addEventListener("click", () => { ongletActif = b.dataset.onglet; rendreLecon(l); });
  });
  const zone = document.getElementById("zone-onglet");
  if (ongletActif === "cours") rendreCours(zone, l);
  else if (ongletActif === "exercices") rendreExercices(zone, l);
  else rendreDevoir(zone, l);
  appliquerKaTeX(zone);
}

/* Rendu des formules mathématiques (KaTeX, si disponible) */
function appliquerKaTeX(cible) {
  if (!window.renderMathInElement || !cible) return;
  window.renderMathInElement(cible, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  });
}

/* ---------- Onglet Cours ---------- */
function rendreCours(zone, l) {
  zone.innerHTML = (l.cours || []).map(b => blocCours(b)).join("") + `
    <div class="encouragement">📖 Bien lu le cours ? Passe aux exercices ! 💪</div>
    <div style="text-align:center"><button class="btn btn-primaire" onclick="ongletActif='exercices';rendreLecon(INDEX_LECONS['${l.id}'])">✍️ Faire les exercices</button></div>
  `;
}

function blocCours(b) {
  switch (b.t) {
    case "h":  return `<div class="bloc-cours"><h2>${esc(b.x)}</h2>${b.sous ? `<p>${b.sous}</p>` : ""}</div>`;
    case "h3": return `<h3>${esc(b.x)}</h3>`;
    case "htmlcard": return `<div class="bloc-cours"><h2>${b.titre}</h2>${b.x}</div>`;
    case "htmltable": return `<div class="tableau-wrap">${b.x}</div>`;
    case "p":  return `<p>${b.x}</p>`;
    case "ul": return `<ul>${b.items.map(i => `<li>${i}</li>`).join("")}</ul>`;
    case "ol": return `<ol>${b.items.map(i => `<li>${i}</li>`).join("")}</ol>`;
    case "regle":     return `<div class="encadre regle">${b.x}</div>`;
    case "astuce":    return `<div class="encadre astuce">${b.x}</div>`;
    case "attention": return `<div class="encadre attention">${b.x}</div>`;
    case "exemple":   return `<div class="encadre exemple">${b.x}</div>`;
    case "table": return `
      <div class="tableau-wrap"><table class="tableau">
        <thead><tr>${b.head.map(h => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>`;
    default: return `<p>${esc(b.x || "")}</p>`;
  }
}

/* ---------- Onglet Exercices ---------- */
function rendreExercices(zone, l) {
  const exos = l.exercices || [];
  if (exos.length === 0) { zone.innerHTML = `<p class="vide-info">Aucun exercice pour l'instant.</p>`; return; }
  zone.innerHTML = `<p class="sous-titre">Réponds d'abord seul(e) ! La correction apparaît seulement quand tu cliques sur « Corriger ». 😉</p>` +
    exos.map((e, i) => renduExercice(e, i, l)).join("");
  exos.forEach((e, i) => brancherExercice(e, i, l));
}

function renduExercice(e, i, l) {
  const num = `<span class="exo-num">${e.badge || i + 1}</span>`;
  const diffLabel = e.diff === "facile" ? "Facile" : (e.diff === "difficile" ? "Défi" : "Moyen");
  const consigne = `<div class="exo-tete">${num}<span class="exo-consigne">${esc(e.consigne)}</span><span class="diff-chip ${e.diff || "moyen"}">${diffLabel}</span></div>`;
  let corps = "";
  if (e.type === "qcm") {
    corps = `<div class="exo-question">${e.q}</div>
      <div class="options" data-i="${i}">
        ${e.options.map((o, j) => `<button class="option" data-j="${j}">${esc(o)}</button>`).join("")}
      </div>`;
  } else if (e.type === "gap") {
    corps = `<div class="exo-question">${parseGaps(e.q, i)}</div>`;
  } else if (e.type === "ordre") {    corps = `<div class="exo-question">${esc(e.q || "Reconstruis la phrase correcte :")}</div>
      <div class="zone-phrase vide" id="zone-${i}"></div>
      <div class="chips" id="chips-${i}">
        ${melanger(e.mots).map((m, j) => `<button class="chip" data-j="${j}" data-mot="${esc(m)}">${esc(m)}</button>`).join("")}
      </div>`;
  } else if (e.type === "ouverte") {
    corps = `<div class="exo-question">${e.q}</div>
      <textarea class="reponse-libre" id="libre-${i}" placeholder="Écris ta réponse ici…"></textarea>`;
  }
  return `
    <div class="exercice ${e.diff || ""}" id="exo-${i}">
      ${consigne}${corps}
      <div style="margin-top:12px">
        ${e.type === "ouverte"
          ? `<button class="btn btn-correction" data-corriger="${i}">👀 Voir la correction</button>`
          : `<button class="btn btn-primaire" data-corriger="${i}">✅ Corriger</button>`}
      </div>
      <div class="zone-resultat" id="res-${i}"></div>
    </div>`;
}

/* Transforme « texte [[rep1|rep2]] suite » en champ de saisie */
function parseGaps(q, i) {
  let idx = 0;
  return esc(q).replace(/&amp;nbsp;/g, "\u00A0").replace(/\[\[([^\]]+)\]\]/g, (_, reps) => {
    const att = `<input class="gap-input" data-gap="${i}-${idx}" placeholder="…" autocomplete="off">`;
    idx++;
    return ` ${att} `;
  });
}
function gapsDe(q) {
  const reps = [];
  q.replace(/\[\[([^\]]+)\]\]/g, (_, r) => { reps.push(r.split("|").map(x => x.trim())); return ""; });
  return reps;
}

function brancherExercice(e, i, l) {
  // Sélection QCM
  if (e.type === "qcm") {
    document.querySelectorAll(`#exo-${i} .option`).forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(`#exo-${i} .option`).forEach(b => b.classList.remove("choisie"));
        btn.classList.add("choisie");
      });
    });
  }
  // Mots à remettre en ordre
  if (e.type === "ordre") {
    const zone = document.getElementById("zone-" + i);
    const chips = document.querySelectorAll(`#chips-${i} .chip`);
    chips.forEach(c => c.addEventListener("click", () => {
      const ch = document.createElement("button");
      ch.className = "chip"; ch.textContent = c.dataset.mot;
      ch.addEventListener("click", () => { ch.remove(); c.disabled = false; if (!zone.children.length) zone.classList.add("vide"); });
      zone.appendChild(ch);
      c.disabled = true;
      zone.classList.remove("vide");
    }));
  }
  // Bouton corriger / voir la correction
  const btnCorr = document.querySelector(`#exo-${i} [data-corriger="${i}"]`);
  btnCorr.addEventListener("click", () => corrigerExercice(e, i, l));
}

function corrigerExercice(e, i, l) {
  const res = document.getElementById("res-" + i);
  const btnCorr = document.querySelector(`#exo-${i} [data-corriger="${i}"]`);
  // La correction a déjà été affichée une fois : le bouton bascule entre
  // « cacher » et « revoir » la correction.
  if (res.dataset.fait) {
    const cache = res.classList.toggle("cache");
    if (btnCorr) btnCorr.innerHTML = cache ? "👀 Revoir la correction" : "🙈 Cacher la correction";
    return;
  }
  let reussi = false;
  let htmlCorr = "";

  if (e.type === "qcm") {
    const choisie = document.querySelector(`#exo-${i} .option.choisie`);
    if (!choisie) { res.innerHTML = `<div class="resultat ko">Choisis d'abord une réponse ! 😊</div>`; return; }
    reussi = (parseInt(choisie.dataset.j, 10) === e.rep);
    document.querySelectorAll(`#exo-${i} .option`).forEach(b => {
      b.disabled = true;
      if (parseInt(b.dataset.j, 10) === e.rep) b.classList.add("bonne");
      else if (b === choisie) b.classList.add("mauvaise");
    });
  }

  if (e.type === "gap") {
    const attends = gapsDe(e.q);
    const inputs = document.querySelectorAll(`#exo-${i} .gap-input`);
    let tousBons = true;
    inputs.forEach((inp, k) => {
      const reps = attends[k] || [];
      // si l’exercice est marqué « strict » ou si deux réponses acceptées ne
      // diffèrent que par les accents (a/à, ou/où), les accents comptent !
      const homophones = e.strict || reps.some(r1 => reps.some(r2 => r1 !== r2 && norm(r1) === norm(r2)));
      const ok = homophones
        ? reps.some(r => normStrict(r) === normStrict(inp.value))
        : reps.some(r => norm(r) === norm(inp.value));
      inp.classList.add(ok ? "bonne" : "mauvaise");
      inp.disabled = true;
      if (!ok) { inp.value = reps[0] !== undefined ? reps[0] : inp.value; }
      if (!ok) tousBons = false;
    });
    reussi = tousBons;
  }

  if (e.type === "ordre") {
    const construit = [...document.querySelectorAll(`#zone-${i} .chip`)].map(c => c.textContent).join(" ");
    const attendu = e.mots.join(" ");
    reussi = norm(construit) === norm(attendu);
    if (!reussi) {
      document.getElementById("zone-" + i).innerHTML =
        e.mots.map(m => `<span class="chip" style="cursor:default">${esc(m)}</span>`).join("");
    }
    document.querySelectorAll(`#chips-${i} .chip`).forEach(c => c.disabled = true);
  }

  if (e.type === "ouverte") {
    // Pas d'auto-correction : modèle caché + auto-évaluation
    htmlCorr = `<div class="correction"><div class="titre-corr">🔓 Correction (modèle)</div>${e.modele}
      ${e.criteres ? `<div style="margin-top:6px"><strong>Vérifie bien :</strong><ul>${e.criteres.map(c => `<li>${c}</li>`).join("")}</ul></div>` : ""}
    </div>`;
    res.innerHTML = htmlCorr + `<div class="auto-eval" id="eval-${i}" style="display:flex">
        <button class="btn btn-oui btn-petit" data-rep="1">✔ J'ai réussi (+10 ⭐)</button>
        <button class="btn btn-non btn-petit" data-rep="0">↺ Je réessaierai</button>
      </div>`;
    document.querySelectorAll(`#eval-${i} [data-rep]`).forEach(b => b.addEventListener("click", () => {
      const bon = b.dataset.rep === "1";
      enregistrerExo(l.id, bon);
      ajouterPoints(bon ? 10 : 2);
      document.getElementById(`eval-${i}`).innerHTML = bon
        ? `<span class="resultat ok"> Bravo ! ✨</span>`
        : `<span class="resultat ko"> Courage, relis le cours et retente ! 💪</span>`;
      const st = chargerProgress().lecons[l.id] || { exosFaits: 0, exosReussis: 0 };
      majMiniScoreOnglet(st);
    }));
    res.dataset.fait = "1";
    if (btnCorr) btnCorr.innerHTML = "🙈 Cacher la correction";
    appliquerKaTeX(res);
    return;
  }

  // Exercices auto-corrigés : explication = la correction consultable
  const explication = e.expl ? `<div class="correction"><div class="titre-corr">🔓 Correction</div>${e.expl}</div>` : "";
  res.innerHTML = `
    <div class="resultat ${reussi ? "ok" : "ko"}">${reussi ? "Bravo, c'est correct ! ✨" : "Presque ! Regarde la correction ci-dessous. 💡"}</div>
    ${explication}`;
  res.dataset.fait = "1";
  if (btnCorr) btnCorr.innerHTML = "🙈 Cacher la correction";
  enregistrerExo(l.id, reussi);
  ajouterPoints(reussi ? 10 : 2);
  if (reussi) confettis();
  const st = chargerProgress().lecons[l.id] || { exosFaits: 0, exosReussis: 0 };
  majMiniScoreOnglet(st);
}

function majMiniScoreOnglet(st) {
  const nExos = (INDEX_LECONS[document.location.hash.split("/")[2]] || {}).exercices?.length || 0;
  const ong = document.querySelector('[data-onglet="exercices"]');
  if (ong) ong.innerHTML = `✍️ Les exercices <span class="mini-score">${st.exosReussis}/${nExos}</span>`;
}

/* ---------- Onglet Devoir ---------- */
function rendreDevoir(zone, l) {
  const d = l.devoir;
  if (!d) { zone.innerHTML = `<p class="vide-info">Pas de devoir pour cette leçon.</p>`; return; }
  const st = chargerProgress().lecons[l.id] || {};
  zone.innerHTML = `
    <div class="devoir-bloc">
      <h2>📝 ${esc(d.titre || "Devoir")}</h2>
      <p>${d.consigne}</p>
      ${d.etapes ? `<ol class="devoir-etapes">${d.etapes.map(e => `<li>${e}</li>`).join("")}</ol>` : ""}
      <div class="criteres">
        <strong>✔ Grille d'auto-évaluation — avant de voir la correction, vérifie que :</strong>
        <ul>${(d.criteres || []).map(c => `<li>${c}</li>`).join("")}</ul>
      </div>
      <textarea class="reponse-libre" id="devoir-rep" placeholder="Rédige ton devoir ici (ou sur ton cahier)…">${st.devoir ? "" : ""}</textarea>
      <div style="margin-top:12px">
        <button class="btn btn-correction" id="devoir-corr">👀 Voir la correction du devoir</button>
      </div>
      <div id="devoir-zone-corr"></div>
    </div>
  `;
  document.getElementById("devoir-corr").addEventListener("click", () => {
    const zc = document.getElementById("devoir-zone-corr");
    const btnDv = document.getElementById("devoir-corr");
    if (zc.dataset.fait) {
      const cache = zc.classList.toggle("cache");
      btnDv.innerHTML = cache ? "👀 Revoir la correction" : "🙈 Cacher la correction";
      return;
    }
    zc.innerHTML = `
      <div class="correction" style="margin-top:12px">
        <div class="titre-corr">🔓 Correction du devoir (modèle)</div>
        ${d.modele}
      </div>
      <div class="auto-eval" style="margin-top:10px">
        <button class="btn btn-oui btn-petit" id="dv-oui">✔ Devoir terminé (+15 ⭐)</button>
      </div>`;
    zc.dataset.fait = "1";
    btnDv.innerHTML = "🙈 Cacher la correction";
    appliquerKaTeX(zc);
    document.getElementById("dv-oui").addEventListener("click", () => {
      enregistrerDevoir(l.id, true);
      ajouterPoints(15);
      confettis();
      document.getElementById("dv-oui").outerHTML = `<span class="resultat ok">Devoir enregistré, bravo ! 🎉</span>`;
      const ong = document.querySelector('[data-onglet="devoir"]');
      if (ong) ong.innerHTML = `📝 Le devoir ✅`;
    });
  });
}

/* ---------- Démarrage ---------- */
construireIndex();
window.addEventListener("hashchange", naviguer);
document.getElementById("annee").textContent = new Date().getFullYear();
document.getElementById("btn-reglages").addEventListener("click", () => aller("#/reglages"));
document.getElementById("logo").addEventListener("click", () => aller("#/"));
naviguer();
majScore();
