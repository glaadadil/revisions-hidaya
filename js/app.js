/* ============================================================
   Les Révisions d'Hidaya — moteur de l'application
   Fonctionne hors-ligne (double-clic sur index.html) et en ligne.
   ============================================================ */
"use strict";

/* ---------- Profils des matières ----------
   Chaque matière est une branche avec sa propre identité :
   ses couleurs, son slogan, sa langue et SA méthode de révision. */
const PROFILS = {
  francais:    { nom: "Français", icone: "📖", couleur: "#7c3aed", couleur2: "#ec4899", tint: "#ede9fe",
                 etiquette: "Lecture & expression", rtl: false,
                 methode: "① Lis le cours en surlignant les règles. ② Fais les exercices <strong>par écrit</strong>, sans regarder la correction. ③ Compare, puis note tes erreurs pour ne plus les refaire." },
  maths:       { nom: "Mathématiques", icone: "🔢", couleur: "#2563eb", couleur2: "#0ea5e9", tint: "#dbeafe",
                 etiquette: "Calcul & logique", rtl: false,
                 methode: "① Refais l'exemple du cours sur papier sans le regarder. ② Traite les exercices <strong>en détaillant chaque étape</strong>. ③ Vérifie ligne par ligne avec le corrigé." },
  arabe:       { nom: "اللغة العربية", nomFr: "Langue arabe", icone: "🕌", couleur: "#0f766e", couleur2: "#14b8a6", tint: "#ccfbf1",
                 etiquette: "قراءة · قواعد · تعبير", rtl: true,
                 methode: "① اقرأ الدرس بصوت عالٍ مرتين. ② احفظ المفردات بالبطاقات 🃏 كل يوم خمس دقائق. ③ أجب عن التمارين كتابةً ثم قارن بالتصحيح." },
  islamique:   { nom: "التربية الإسلامية", nomFr: "Éducation islamique", icone: "🕋", couleur: "#047857", couleur2: "#34d399", tint: "#d1fae5",
                 etiquette: "التزكية · الاقتداء · الاستجابة · الحكمة", rtl: true,
                 methode: "① احفظ الآيات والأحاديث بالتكرار اليومي القصير. ② استعمل البطاقات 🃏 لتثبيت المصطلحات والمفاهيم. ③ أجب عن أسئلة الفهم كتابةً، ثم صحّح." },
  anglais:     { nom: "English", nomFr: "Anglais", icone: "🇬🇧", couleur: "#d97706", couleur2: "#fbbf24", tint: "#fef3c7",
                 etiquette: "Words · Grammar · Say it aloud!", rtl: false,
                 methode: "① Learn the new words with the flashcards 🃏 — say each word <strong>aloud</strong>. ② Read the grammar box twice. ③ Do the exercises, then check yourself." },
  francais1ac: { nom: "Français 1AC", icone: "🇫🇷", couleur: "#be185d", couleur2: "#f472b6", tint: "#fce7f3",
                 etiquette: "Langue, textes & expression (Maroc)", rtl: false,
                 methode: "① Lis le texte et le cours en repérant les notions clés. ② Mémorise les définitions avec les flashcards 🃏. ③ Rédige les exercices puis compare avec le corrigé." },
  svt:         { nom: "SVT", nomFr: "Sciences de la vie et de la Terre", icone: "🌱", couleur: "#16a34a", couleur2: "#4ade80", tint: "#dcfce7",
                 etiquette: "Comprendre le vivant et la Terre", rtl: false,
                 methode: "① Explique le phénomène <strong>avec tes propres mots</strong> avant tout. ② Retiens les définitions avec les flashcards 🃏. ③ Refais les schémas et les classements de mémoire." },
  pc:          { nom: "Physique-Chimie", icone: "⚗️", couleur: "#0891b2", couleur2: "#22d3ee", tint: "#cffafe",
                 etiquette: "Matière, énergie & univers", rtl: false,
                 methode: "① Comprends la loi ou l'expérience avant de calculer. ② Rédige les exercices <strong>avec unités et étapes</strong>. ③ Compare au corrigé et refais ceux qui ont échoué le lendemain." },
  ss:          { nom: "الاجتماعيات", nomFr: "Sciences sociales", icone: "🌍", couleur: "#9333ea", couleur2: "#c084fc", tint: "#f3e8ff",
                 etiquette: "التاريخ · الجغرافيا · التربية المدنية", rtl: true,
                 methode: "① اقرأ الدرس وحدّد التواريخ والمصطلحات والأسماء. ② احفظها بالبطاقات 🃏. ③ أعد شرح الدرس بأسلوبك ثم قارن بالنص." },
  info:        { nom: "Informatique", icone: "💻", couleur: "#475569", couleur2: "#94a3b8", tint: "#e2e8f0",
                 etiquette: "Digital & citoyenneté", rtl: false,
                 methode: "① Comprends les notions et les mots-clés. ② Teste les manipulations sur un appareil si possible. ③ Vérifie-toi avec les exercices." }
};

const ORDRE_MATIERES = ["francais", "maths", "arabe", "islamique", "anglais", "francais1ac", "svt", "pc", "ss", "info"];

/* Les matières issues de la base 1AC ont un seul domaine « programme » ;
   le français (manuel Kédémos 5e) garde ses 5 domaines. */
const DOMAINES_PAR_MATIERE = {
  francais: ["textes", "grammaire", "conjugaison", "orthographe", "defis"]
};
function profilDe(idMatiere) { return PROFILS[idMatiere] || PROFILS.francais; }
function domainesDe(idMatiere) { return DOMAINES_PAR_MATIERE[idMatiere] || [idMatiere]; }

const DOMAINES = {
  textes:      { nom: "Textes & Expression", icone: "📜", desc: "Les 20 unités du manuel, thème par thème" },
  grammaire:   { nom: "Grammaire",           icone: "🧩", desc: "La phrase, les classes, les fonctions" },
  conjugaison: { nom: "Conjugaison",         icone: "⏰", desc: "Les temps avec tableaux et exercices" },
  orthographe: { nom: "Orthographe & Vocabulaire", icone: "🔤", desc: "Homophones, accords, mots" },
  defis:       { nom: "Défis & Évaluations", icone: "🎯", desc: "Évaluations blanches et dictées" },
  maths:       { nom: "Programme 1AC",       icone: "📐", desc: "Numérique, algèbre, géométrie, statistiques" },
  arabe:       { nom: "الوحدات", nomFr: "Unités du programme", icone: "📜", rtl: true, desc: "النصوص · الدروس اللغوية · التعبير والإنشاء" },
  islamique:   { nom: "المداخل", nomFr: "Unités du programme", icone: "🕋", rtl: true, desc: "التزكية · الاقتداء · الاستجابة · القسط · الحكمة" },
  anglais:     { nom: "Units 1–10",          icone: "🌐", desc: "Vocabulary · Grammar · Phonics · Reading · Writing" },
  francais1ac: { nom: "Unités",              icone: "📖", desc: "Textes, langue et expression du programme marocain" },
  svt:         { nom: "Parties du programme", icone: "🌿", desc: "Sciences de la vie · Sciences de la Terre" },
  pc:          { nom: "Parties du programme", icone: "⚗️", desc: "La matière · L'énergie · L'univers" },
  ss:          { nom: "المكونات", nomFr: "Histoire · Géo · Éd. civique", icone: "🌍", rtl: true, desc: "الحضارات · المجال · السلوك المدني" },
  info:        { nom: "Unités",              icone: "💻", desc: "Outils numériques, citoyenneté, Scratch" }
};

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
  el.textContent = p.points;
  const pill = el.closest(".score-pill");
  if (pill) { pill.classList.remove("pulse"); void pill.offsetWidth; pill.classList.add("pulse"); }
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

/* ---------- Statut d'accomplissement d'une leçon ---------- */
/* "aucune" : jamais faite · "encours" : commencée, incomplète · "terminee" : tout accompli */
function statutLecon(l) {
  const st = chargerProgress().lecons[l.id];
  if (!st || (!st.exosFaits && !st.devoir)) return "aucune";
  const nExos = (l.exercices || []).length;
  const exosFaits = st.exosFaits || 0;
  const devoirFait = !l.devoir || st.devoir;
  if (nExos > 0 && exosFaits >= nExos && devoirFait) return "terminee";
  return "encours";
}
const STATUTS = {
  aucune:   { icone: "",           libelle: "Non commencée", classe: "" },
  encours:  { icone: "◐",          libelle: "En cours",      classe: "encours" },
  terminee: { icone: "✓",          libelle: "Terminée",      classe: "terminee" }
};

function leconsTerminees(dom) {
  return leconsDuDomaine(dom).filter(l => statutLecon(l) === "terminee").length;
}

/* ---------- Menu latéral : état actif ---------- */
function majSidebar(route) {
  document.querySelectorAll(".side-lien[data-route]").forEach(a => {
    a.classList.toggle("actif", a.dataset.route === route);
  });
  document.body.classList.remove("sidebar-ouverte");
}

/* ---------- Routage ---------- */
const APP = document.getElementById("app");
let ongletActif = "cours";
let filtreLecons = "toutes";

function naviguer() {
  const hash = location.hash || "#/";
  const parts = hash.slice(2).split("/").filter(Boolean);
  window.scrollTo(0, 0);
  filtreLecons = "toutes";
  if (parts.length === 0) { majSidebar("accueil"); return pageAccueil(); }
  if (parts[0] === "reglages") { majSidebar("reglages"); return pageReglages(); }
  if (parts[0] === "planning") { majSidebar("planning"); return pagePlanning(); }
  if (parts[0] === "edt") { majSidebar("accueil"); return pageEdt(); }
  if (parts[0] === "matiere" && parts[1]) { majSidebar(parts[1]); return pageMatiere(parts[1]); }
  if (parts[0] === "domaine" && parts[1]) { majSidebar(matiereDuDomaine(parts[1])); return pageDomaine(parts[1]); }
  if (parts[0] === "lecon" && parts[1]) {
    const l = INDEX_LECONS[parts[1]];
    majSidebar(l ? l.domaine : "");
    return pageLecon(parts[1]);
  }
  majSidebar("accueil");
  return pageAccueil();
}

function matiereDuDomaine(idDomaine) {
  return ORDRE_MATIERES.find(id => domainesDe(id).includes(idDomaine)) || "";
}

function aller(hash) { location.hash = hash; }

function majBoutonRetour(cible) {
  const btn = document.getElementById("btn-retour");
  if (cible) { btn.hidden = false; btn.onclick = () => aller(cible); }
  else btn.hidden = true;
}

/* ---------- Emploi du temps scolaire ----------
   Hidaya saisit ses cours par jour une seule fois ; l'accueil devient
   un compagnon quotidien : Hier (ancrer) · Aujourd'hui (réviser) ·
   Demain (anticiper). */
const JOUR_PAR_INDEX = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const JOURS_EDT = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const CLE_EDT = "hidaya_edt_v1";
const CLE_EDT_SUIVI = "hidaya_edt_suivi_v1";
let ongletJourEdt = 1; // 0 = hier · 1 = aujourd'hui · 2 = demain

const SEMAINE_TYPE = {
  Lundi: ["maths", "arabe", "svt"],
  Mardi: ["francais", "anglais", "pc"],
  Mercredi: ["maths", "ss", "info"],
  Jeudi: ["arabe", "anglais", "svt"],
  Vendredi: ["francais", "maths", "pc"],
  Samedi: ["arabe", "info", "ss"],
  Dimanche: []
};

function chargerEdt() {
  try { return JSON.parse(localStorage.getItem(CLE_EDT)) || {}; } catch { return {}; }
}
function sauverEdt(edt) { localStorage.setItem(CLE_EDT, JSON.stringify(edt)); }
function chargerSuiviEdt() {
  try { return JSON.parse(localStorage.getItem(CLE_EDT_SUIVI)) || {}; } catch { return {}; }
}
function dateDecalage(n) { const d = new Date(); d.setDate(d.getDate() + n); return d; }
function cleDate(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
function nomDateCourt(d) {
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

/* La leçon à travailler pour une matière : d'abord celle en cours, sinon la prochaine. */
function leconConseillee(mid) {
  const lecons = domainesDe(mid).flatMap(d => leconsDuDomaine(d))
    .slice().sort((a, b) => (a.unite || 0) - (b.unite || 0));
  if (lecons.length === 0) return null;
  return lecons.find(l => statutLecon(l) === "encours")
      || lecons.find(l => statutLecon(l) === "aucune")
      || null;
}

function carteJourMatiere(mid, mode, dateCle) {
  const pr = profilDe(mid);
  const l = leconConseillee(mid);
  const suivi = chargerSuiviEdt();
  const revise = !!suivi[dateCle + "|" + mid];
  let action = "";
  if (mode === "hier") {
    action = revise
      ? `<span class="edt-revise">✅ Révisé — bien joué !</span>`
      : `<button class="btn btn-oui btn-petit" data-reviser="${mid}">✔ J'ai révisé (+5 ⭐)</button>`;
  } else if (!l) {
    action = `<span class="edt-revise">🎉 Tout à jour !</span>`;
  } else if (mode === "demain") {
    action = `<a class="btn btn-secondaire btn-petit" href="#/lecon/${l.id}">👀 Lire en avant-première</a>`;
  } else {
    action = `<a class="btn btn-primaire btn-petit" href="#/lecon/${l.id}">→ Réviser la leçon</a>`;
  }
  return `
    <div class="edt-carte" style="--acc:${pr.couleur};--acc2:${pr.couleur2};--tint:${pr.tint}">
      <div class="edt-mat"><span class="edt-icone" style="background:${pr.tint}">${pr.icone}</span>
        <div><b class="edt-nom" dir="auto">${pr.nom}${pr.nomFr ? `<span class="mat-nomfr"> · ${pr.nomFr}</span>` : ""}</b>
        <div class="edt-lecon" dir="auto">${l
          ? (mode === "demain"
              ? "À préparer : <strong>" + esc(l.titre) + "</strong>"
              : "Leçon conseillée : <strong>" + esc(l.titre) + "</strong>")
          : "Toutes les leçons sont terminées"}</div></div>
      </div>
      <div class="edt-action">${action}</div>
    </div>`;
}

function rendreOngletJour(n) {
  const d = dateDecalage(n - 1);
  const nomJour = JOUR_PAR_INDEX[d.getDay()];
  const mats = chargerEdt()[nomJour] || [];
  const dateCle = cleDate(d);
  const mode = n === 0 ? "hier" : (n === 1 ? "aujourdhui" : "demain");
  const titres = {
    hier: "🧠 Consolide — le meilleur moment pour ancrer la leçon, c'est le lendemain !",
    aujourdhui: "🎯 Révise ce soir ce que tu as vu en classe aujourd'hui.",
    demain: "🔮 Anticipe — 5 minutes de lecture ce soir, et demain tu suivras sans effort."
  };
  if (mats.length === 0) {
    return `<div class="edt-vide">
      <p>${mode === "aujourdhui" ? "Pas de cours aujourd'hui 🌴 — parfait pour avancer ton planning !" : "Pas de cours ce jour-là."}</p>
      <a class="btn btn-secondaire btn-petit" href="#/planning">🗓️ Voir mon planning</a>
    </div>`;
  }
  return `
    <p class="edt-phrase">${titres[mode]}</p>
    <div class="edt-liste">
      ${mats.map(mid => carteJourMatiere(mid, mode, dateCle)).join("")}
    </div>`;
}

function brancherEdtAccueil() {
  document.querySelectorAll(".edt-onglet").forEach(b => {
    b.addEventListener("click", () => { ongletJourEdt = +b.dataset.j; pageAccueil(); });
  });
  document.querySelectorAll("[data-reviser]").forEach(b => {
    b.addEventListener("click", () => {
      const d = dateDecalage(ongletJourEdt - 1);
      const cle = cleDate(d) + "|" + b.dataset.reviser;
      const suivi = chargerSuiviEdt();
      suivi[cle] = true;
      localStorage.setItem(CLE_EDT_SUIVI, JSON.stringify(suivi));
      ajouterPoints(5);
      confettis();
      pageAccueil();
    });
  });
}

/* ---------- Page : Accueil ---------- */
function pageAccueil() {
  majBoutonRetour(null);
  document.title = "Les Révisions d'Hidaya";
  const p = chargerProgress();
  const badges = calculerBadges(p);
  const dernier = localStorage.getItem("hidaya_last");
  const derniereLecon = dernier && INDEX_LECONS[dernier] ? INDEX_LECONS[dernier] : null;
  const nTerminees = Object.keys(INDEX_LECONS).filter(id => {
    const l = INDEX_LECONS[id];
    return leconsDuDomaine(l.domaine).includes(l) && statutLecon(l) === "terminee";
  }).length;
  const nDevoirs = Object.values(p.lecons).filter(s => s.devoir).length;

  APP.innerHTML = `
    <div class="accueil-bonjour">
      <h1>Bonjour Hidaya</h1>
      <p>Choisis ta matière, puis la leçon vue en classe — ou celle qui arrive.
         Chaque leçon affiche clairement ce que tu as accompli et ce qu'il te reste à faire.</p>
    </div>

    <div class="statistiques">
      <div class="stat-carte"><div class="chiffre">${p.points}</div><div class="etiquette">Points cumulés</div></div>
      <div class="stat-carte"><div class="chiffre">${nTerminees}<span style="color:var(--gris);font-size:1rem;font-weight:600"> / ${Object.keys(INDEX_LECONS).length}</span></div><div class="etiquette">Leçons terminées</div></div>
      <div class="stat-carte"><div class="chiffre">${nDevoirs}</div><div class="etiquette">Devoirs rendus</div></div>
      <div class="stat-carte"><div class="chiffre">${badges.gagnes.length}<span style="color:var(--gris);font-size:1rem;font-weight:600"> / ${badges.tous.length}</span></div><div class="etiquette">Récompenses</div></div>
    </div>

    ${derniereLecon ? `
    <a class="reprendre" href="#/lecon/${derniereLecon.id}">
      <span class="rond"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg></span>
      <span><span class="titre-f">Reprendre là où je m'étais arrêtée</span><br>
      <span class="sous-f">${esc(derniereLecon.titre)}</span></span>
    </a>` : ""}

    <a class="reprendre carte-planning" href="#/planning">
      <span class="rond planning-rond">🗓️</span>
      <span><span class="titre-f">Mon planning de la semaine</span><br>
      <span class="sous-f">Organise toi-même tes révisions, jour par jour ${nbTachesPlanning() ? "· " + nbTachesPlanning() + " séance" + (nbTachesPlanning() > 1 ? "s" : "") + " programmée" + (nbTachesPlanning() > 1 ? "s" : "") : "· commence maintenant"}</span></span>
    </a>

    <section class="edt-section">
      <div class="edt-tete">
        <h2>🏫 Ma semaine scolaire</h2>
        <a class="btn btn-secondaire btn-petit" href="#/edt">✏️ Modifier mon emploi du temps</a>
      </div>
      ${(() => {
        const edt = chargerEdt();
        const nbMats = new Set(Object.values(edt).flat()).size;
        if (nbMats === 0) {
          return `<div class="edt-vide gros">
            <p><strong>Renseigne ton emploi du temps scolaire</strong> : dis-moi quelles matières tu as
               chaque jour, et je te montrerai ici ce qu'il faut réviser <em>hier · aujourd'hui · demain</em>.</p>
            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
              <a class="btn btn-primaire" href="#/edt">✏️ Créer mon emploi du temps</a>
              <button class="btn btn-secondaire" id="edt-semaine-type">⚡ Remplir une semaine type</button>
            </div>
          </div>`;
        }
        const labels = [
          { j: 0, t: "Hier", d: dateDecalage(-1) },
          { j: 1, t: "Aujourd'hui", d: dateDecalage(0) },
          { j: 2, t: "Demain", d: dateDecalage(1) }
        ];
        return `
        <div class="edt-onglets">
          ${labels.map(l => `
            <button class="edt-onglet ${ongletJourEdt === l.j ? "actif" : ""}" data-j="${l.j}">
              <b>${l.t}</b><small>${nomDateCourt(l.d)}</small>
            </button>`).join("")}
        </div>
        <div class="edt-contenu">${rendreOngletJour(ongletJourEdt)}</div>`;
      })()}
    </section>

    <section class="grille-matieres">
      ${ORDRE_MATIERES.map(mid => {
        const pr = profilDe(mid);
        const doms = domainesDe(mid);
        const total = doms.reduce((n, d) => n + leconsDuDomaine(d).length, 0);
        const faites = doms.reduce((n, d) => n + leconsTerminees(d), 0);
        const pct = total ? Math.round(100 * faites / total) : 0;
        return `<a class="carte-matiere" href="#/matiere/${mid}" style="--acc:${pr.couleur};--acc2:${pr.couleur2};--tint:${pr.tint}">
          <div class="mat-tete"><span class="mat-icone" style="background:${pr.tint}">${pr.icone}</span>
            <span><span class="mat-nom">${pr.nom}${pr.nomFr ? `<br><span class="mat-nomfr">${pr.nomFr}</span>` : ""}</span><br><span class="mat-desc">${total} leçon${total > 1 ? "s" : ""} · ${pr.etiquette}</span></span></div>
          <div class="prog-ligne"><span>Progression</span><span class="pourcent">${pct}%</span></div>
          <div class="barre-prog"><div class="rempli" style="width:${pct}%;background:linear-gradient(90deg,${pr.couleur},${pr.couleur2})"></div></div>
        </a>`;
      }).join("")}
    </section>
  `;
  brancherEdtAccueil();
  const btnST = document.getElementById("edt-semaine-type");
  if (btnST) btnST.addEventListener("click", () => {
    sauverEdt(JSON.parse(JSON.stringify(SEMAINE_TYPE)));
    confettis();
    pageAccueil();
  });
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

/* ---------- Planning hebdomadaire ----------
   Hidaya construit elle-même son programme de révisions :
   elle ajoute des leçons jour par jour, l'app suit l'avancement. */
const JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const CLE_PLANNING = "hidaya_planning_v1";

function semaineActuelle() {
  const d = new Date();
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const sem = Math.ceil((((d - jan1) / 86400000) + jan1.getDay() + 1) / 7);
  return d.getFullYear() + "-S" + sem;
}
function chargerPlanning() {
  try {
    const p = JSON.parse(localStorage.getItem(CLE_PLANNING)) || {};
    if (p.semaine !== semaineActuelle()) {
      // nouvelle semaine : on garde le programme, on remet les cases à zéro
      Object.values(p.taches || {}).forEach(liste => liste.forEach(t => t.fait = false));
      p.semaine = semaineActuelle();
      localStorage.setItem(CLE_PLANNING, JSON.stringify(p));
    }
    return p;
  } catch { return {}; }
}
function sauverPlanning(p) { p.semaine = semaineActuelle(); localStorage.setItem(CLE_PLANNING, JSON.stringify(p)); }
function nbTachesPlanning() {
  const p = chargerPlanning();
  return Object.values(p.taches || {}).reduce((n, l) => n + l.length, 0);
}

function pagePlanning() {
  majBoutonRetour("#/");
  document.title = "Mon planning — Révisions d'Hidaya";
  const p = chargerPlanning();
  p.taches = p.taches || {};
  const total = nbTachesPlanning();
  const faites = Object.values(p.taches).reduce((n, l) => n + l.filter(t => t.fait).length, 0);
  const pct = total ? Math.round(100 * faites / total) : 0;

  APP.innerHTML = `
    <h1 class="titre-page">🗓️ Mon planning de la semaine</h1>
    <p class="sous-titre">Semaine ${semaineActuelle()} — c'est <strong>toi</strong> qui organises tes révisions !
       Ajoute les leçons que tu veux travailler chaque jour, coche-les quand c'est fait.</p>

    <div class="planning-recap">
      <div class="planning-barre"><div class="rempli" style="width:${pct}%"></div></div>
      <span>${faites}/${total} séance${total > 1 ? "s" : ""} faite${faites > 1 ? "s" : ""} (${pct}%)</span>
    </div>

    <div class="planning-outils">
      <select id="pl-matiere" class="champ-select">
        ${ORDRE_MATIERES.map(mid => `<option value="${mid}">${profilDe(mid).nomFr || profilDe(mid).nom}</option>`).join("")}
      </select>
      <select id="pl-lecon" class="champ-select champ-large"></select>
      <button class="btn btn-primaire btn-petit" id="pl-ajouter">+ Ajouter au jour…</button>
      <select id="pl-jour" class="champ-select">
        ${JOURS.map(j => `<option>${j}</option>`).join("")}
      </select>
      <button class="btn btn-secondaire btn-petit" id="pl-suggerer" title="L'app choisit une leçon non terminée">💡 Suggérer</button>
    </div>
    <p class="sous-titre" style="margin-top:-6px">💡 Astuce : choisis une leçon puis le jour, ou laisse l'app te suggérer ce qu'il reste à faire.</p>

    <div class="planning-grille">
      ${JOURS.map(jour => {
        const taches = p.taches[jour] || [];
        const nFaites = taches.filter(t => t.fait).length;
        return `
        <div class="jour-carte" data-jour="${jour}">
          <div class="jour-tete"><b>${jour}</b><span class="jour-compte">${nFaites}/${taches.length}</span></div>
          ${taches.length === 0 ? `<div class="jour-vide">Rien de prévu 🌴</div>` : `
          <ul class="jour-taches">
            ${taches.map((t, i) => {
              const l = INDEX_LECONS[t.id];
              if (!l) return "";
              const pr = profilDe(matiereDuDomaine(l.domaine) || "francais");
              return `<li class="tache ${t.fait ? "faite" : ""}">
                <button class="tache-coche" data-jour="${jour}" data-i="${i}" title="Marquer faite">${t.fait ? "✓" : ""}</button>
                <span class="tache-txt" dir="auto"><span class="tache-pt" style="background:${pr.couleur}"></span>${esc(l.titre)}</span>
                <button class="tache-suppr" data-jour="${jour}" data-i="${i}" title="Retirer">✕</button>
              </li>`;
            }).join("")}
          </ul>`}
        </div>`;
      }).join("")}
    </div>
  `;

  // Remplir le sélecteur de leçons selon la matière choisie
  const selM = document.getElementById("pl-matiere");
  const selL = document.getElementById("pl-lecon");
  function remplirLecons() {
    const mid = selM.value;
    const lecons = domainesDe(mid).flatMap(d => leconsDuDomaine(d))
      .slice().sort((a, b) => (a.unite || 0) - (b.unite || 0));
    selL.innerHTML = lecons.map(l => `<option value="${l.id}">${l.tag ? l.tag + " — " : ""}${esc(l.titre.slice(0, 60))}</option>`).join("");
  }
  remplirLecons();
  selM.addEventListener("change", remplirLecons);

  document.getElementById("pl-ajouter").addEventListener("click", () => {
    const idLecon = selL.value;
    if (!idLecon) return;
    const pp = chargerPlanning();
    pp.taches = pp.taches || {};
    const jour = document.getElementById("pl-jour").value;
    pp.taches[jour] = pp.taches[jour] || [];
    if (!pp.taches[jour].some(t => t.id === idLecon)) pp.taches[jour].push({ id: idLecon, fait: false });
    sauverPlanning(pp);
    majCompteursSidebar();
    pagePlanning();
  });

  document.getElementById("pl-suggerer").addEventListener("click", () => {
    const pp = chargerPlanning();
    pp.taches = pp.taches || {};
    const deja = new Set(Object.values(pp.taches).flat().map(t => t.id));
    const candidates = Object.values(INDEX_LECONS).filter(l => statutLecon(l) !== "terminee" && !deja.has(l.id));
    if (candidates.length === 0) { confettis(); return; }
    const choix = candidates[Math.floor(Math.random() * candidates.length)];
    const jour = document.getElementById("pl-jour").value;
    pp.taches[jour] = pp.taches[jour] || [];
    pp.taches[jour].push({ id: choix.id, fait: false });
    sauverPlanning(pp);
    majCompteursSidebar();
    pagePlanning();
    const carte = document.querySelector(`.jour-carte[data-jour="${jour}"]`);
    if (carte) carte.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.querySelectorAll(".tache-coche").forEach(b => b.addEventListener("click", () => {
    const pp = chargerPlanning();
    const t = (pp.taches[b.dataset.jour] || [])[+b.dataset.i];
    if (!t) return;
    t.fait = !t.fait;
    if (t.fait) { ajouterPoints(5); confettis(); }
    else ajouterPoints(-5);
    sauverPlanning(pp);
    pagePlanning();
  }));

  document.querySelectorAll(".tache-suppr").forEach(b => b.addEventListener("click", () => {
    const pp = chargerPlanning();
    (pp.taches[b.dataset.jour] || []).splice(+b.dataset.i, 1);
    sauverPlanning(pp);
    majCompteursSidebar();
    pagePlanning();
  }));
}

/* Compteurs de la barre latérale (leçons terminées / total) */
function majCompteursSidebar() {
  ORDRE_MATIERES.forEach(mid => {
    const el = document.getElementById("cpt-" + mid);
    if (!el) return;
    const doms = domainesDe(mid);
    const total = doms.reduce((n, d) => n + leconsDuDomaine(d).length, 0);
    const faites = doms.reduce((n, d) => n + leconsTerminees(d), 0);
    el.textContent = total ? faites + "/" + total : "";
  });
  const pl = document.getElementById("cpt-planning");
  if (pl) {
    const n = nbTachesPlanning();
    const p = chargerPlanning();
    const faites = Object.values(p.taches || {}).reduce((n2, l) => n2 + l.filter(t => t.fait).length, 0);
    pl.textContent = n ? faites + "/" + n : "";
  }
}

/* ---------- Page : Éditeur d'emploi du temps ---------- */
function pageEdt() {
  majBoutonRetour("#/");
  document.title = "Emploi du temps — Révisions d'Hidaya";
  const edt = chargerEdt();
  APP.innerHTML = `
    <h1 class="titre-page">✏️ Mon emploi du temps scolaire</h1>
    <p class="sous-titre">Pour chaque jour, ajoute les matières que tu as en classe.
       L'accueil t'affichera ensuite quoi réviser <strong>hier · aujourd'hui · demain</strong>.</p>
    <div class="edt-editor">
      ${JOURS_EDT.map(jour => {
        const mats = edt[jour] || [];
        return `
        <div class="jour-carte edt-jour" data-jour-edt="${jour}">
          <div class="jour-tete"><b>${jour}</b>
            <select class="champ-select edt-ajout" data-jour="${jour}">
              <option value="">+ ajouter…</option>
              ${ORDRE_MATIERES.filter(mid => !mats.includes(mid)).map(mid =>
                `<option value="${mid}">${profilDe(mid).nomFr || profilDe(mid).nom}</option>`).join("")}
            </select>
          </div>
          ${mats.length === 0 ? `<div class="jour-vide">Aucun cours</div>` : `
          <ul class="jour-taches">
            ${mats.map(mid => {
              const pr = profilDe(mid);
              return `<li class="tache">
                <span class="tache-pt" style="background:${pr.couleur}"></span>
                <span class="tache-txt" dir="auto">${pr.nom}</span>
                <button class="tache-suppr" data-retirer="${mid}" data-jour="${jour}" title="Retirer">✕</button>
              </li>`;
            }).join("")}
          </ul>`}
        </div>`;
      }).join("")}
    </div>
    <div class="edt-actions-bas">
      <button class="btn btn-secondaire btn-petit" id="edt-type2">⚡ Utiliser une semaine type</button>
      <button class="btn btn-danger btn-petit" id="edt-vider">🗑 Tout effacer</button>
      <a class="btn btn-primaire btn-petit" href="#/">✔ Terminé, voir mon accueil</a>
    </div>
  `;

  document.querySelectorAll(".edt-ajout").forEach(sel => {
    sel.addEventListener("change", () => {
      if (!sel.value) return;
      const edt2 = chargerEdt();
      edt2[sel.dataset.jour] = edt2[sel.dataset.jour] || [];
      edt2[sel.dataset.jour].push(sel.value);
      sauverEdt(edt2);
      pageEdt();
    });
  });
  document.querySelectorAll("[data-retirer]").forEach(b => {
    b.addEventListener("click", () => {
      const edt2 = chargerEdt();
      edt2[b.dataset.jour] = (edt2[b.dataset.jour] || []).filter(m => m !== b.dataset.retirer);
      sauverEdt(edt2);
      pageEdt();
    });
  });
  document.getElementById("edt-type2").addEventListener("click", () => {
    sauverEdt(JSON.parse(JSON.stringify(SEMAINE_TYPE)));
    confettis();
    pageEdt();
  });
  document.getElementById("edt-vider").addEventListener("click", () => {
    localStorage.removeItem(CLE_EDT);
    pageEdt();
  });
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
  const pr = profilDe(idMatiere);
  if (!PROFILS[idMatiere]) return pageAccueil();
  majBoutonRetour(null);
  const titre = pr.nom + (pr.nomFr ? ` — ${pr.nomFr}` : "");
  document.title = (pr.nomFr || pr.nom) + " — Révisions d'Hidaya";
  const dirAttr = pr.rtl ? ' dir="rtl"' : "";
  const methodeTxt = pr.methode;
  APP.innerHTML = `
    <header class="matiere-entete" style="background:linear-gradient(135deg,${pr.couleur},${pr.couleur2})"${dirAttr}>
      <span class="matiere-grande-icone">${pr.icone}</span>
      <h1>${pr.nom}${pr.nomFr ? ` <span class="matiere-nomfr">— ${pr.nomFr}</span>` : ""}</h1>
      <div class="matiere-etiquette">${pr.etiquette}</div>
    </header>
    <div class="methode-box"${dirAttr}>
      <strong>💡 Comment bien réviser ${pr.nomFr ? esc(pr.nomFr) : "cette matière"} :</strong>
      <p>${methodeTxt}</p>
    </div>
    <h2 class="titre-section"${dirAttr}>Choisis ton domaine de révision</h2>
    <div class="liste-domaines" style="--acc:${pr.couleur};--acc2:${pr.couleur2};--tint:${pr.tint}">
    ${domainesDe(idMatiere).map(did => {
      const d = DOMAINES[did];
      const lecons = leconsDuDomaine(did);
      const faites = leconsTerminees(did);
      const pct = lecons.length ? Math.round(100 * faites / lecons.length) : 0;
      const dDir = d.rtl ? ' dir="rtl"' : "";
      return `
        <a class="carte-domaine" href="#/domaine/${did}">
          <span class="dom-icone" style="background:${pr.tint}">${d.icone}</span>
          <span class="infos"${dDir}>
            <span class="nom">${d.nom}${d.nomFr ? ` <span class="nomfr">(${d.nomFr})</span>` : ""}</span><br>
            <span class="desc">${d.desc}</span>
          </span>
          <span class="dom-prog">
            <span class="prog-ligne"><span>${faites}/${lecons.length} terminées</span><span class="pourcent">${pct}%</span></span>
            <span class="barre-prog"><span class="rempli" style="display:block;width:${pct}%;background:linear-gradient(90deg,${pr.couleur},${pr.couleur2})"></span></span>
          </span>
        </a>`;
    }).join("")}
    </div>
  `;
}

/* ---------- Page : Domaine (liste des leçons) ---------- */
function pageDomaine(idDomaine) {
  const d = DOMAINES[idDomaine];
  if (!d) return pageMatiere("francais");
  const idM = matiereDuDomaine(idDomaine) || "francais";
  const pr = profilDe(idM);
  majBoutonRetour("#/matiere/" + idM);
  document.title = (d.nomFr || d.nom) + " — Révisions d'Hidaya";
  const lecons = leconsDuDomaine(idDomaine);
  const nTerm = leconsTerminees(idDomaine);
  const dirAttr = pr.rtl || d.rtl ? ' dir="rtl"' : "";

  const compte = { toutes: lecons.length, faire: lecons.length - nTerm, terminees: nTerm };
  const visibles = lecons.filter(l =>
    filtreLecons === "toutes" ? true :
    filtreLecons === "terminees" ? statutLecon(l) === "terminee" :
    statutLecon(l) !== "terminee");

  // Regroupement par thème si présent
  const avecTheme = visibles.some(l => l.theme);
  let html = `
    <h1 class="titre-page" style="color:${pr.couleur}"${dirAttr}>${d.nom}${d.nomFr ? ` <span style="font-size:1rem;color:var(--gris);font-weight:600">(${d.nomFr})</span>` : ""}</h1>
    <p class="sous-titre"${dirAttr}>${d.desc} — ${nTerm}/${lecons.length} leçon${lecons.length > 1 ? "s" : ""} terminée${nTerm > 1 ? "s" : ""}.</p>
    <div class="filtres">
      ${["toutes", "faire", "terminees"].map(f => `
        <button class="filtre ${filtreLecons === f ? "actif" : ""}" data-filtre="${f}">
          ${f === "toutes" ? "Toutes" : f === "faire" ? "À faire" : "Terminées"} · ${compte[f]}
        </button>`).join("")}
    </div>`;

  if (visibles.length === 0) {
    html += `<div class="vide-info">Aucune leçon dans cette catégorie. Bravo ! 🎉</div>`;
  } else if (avecTheme) {
    const themes = [];
    visibles.forEach(l => { if (!themes.includes(l.theme)) themes.push(l.theme); });
    html += themes.map(th => `
      <div class="theme-bloc">
        <div class="theme-titre">${esc(th)}</div>
        <div class="liste-lecons">
          ${visibles.filter(l => l.theme === th).map(l => rangLecon(l)).join("")}
        </div>
      </div>`).join("");
  } else {
    html += `<div class="liste-lecons">${visibles.map(l => rangLecon(l)).join("")}</div>`;
  }
  APP.innerHTML = html;

  document.querySelectorAll(".filtre").forEach(b => {
    b.addEventListener("click", () => { filtreLecons = b.dataset.filtre; pageDomaine(idDomaine); });
  });
}

function rangLecon(l) {
  const st = STATUTS[statutLecon(l)];
  const p = chargerProgress().lecons[l.id];
  const et = etoilesLecon(l.id);
  const num = l.unite ? `Unité ${l.unite}` : (l.tag || "");
  const sous = [
    l.texte ? "Texte : « " + esc(l.texte) + " »" : "",
    p && p.exosReussis ? p.exosReussis + "/" + (l.exercices || []).length + " exercices réussis" : "",
    st.libelle
  ].filter(Boolean).join(" · ");
  return `
    <a class="carte-lecon" href="#/lecon/${l.id}">
      <span class="statut ${st.classe}" title="${st.libelle}">${st.icone}</span>
      <span class="lecon-infos">
        <span class="lecon-tag">${esc(num)}${l.theme && !l.theme.startsWith("Thème") ? " · " + esc(l.theme) : ""}</span>
        <div class="lecon-titre" dir="auto">${esc(l.titre)}</div>
        <div class="lecon-sous">${sous}</div>
      </span>
      <span class="lecon-droite">
        ${et ? `<span class="lecon-etoiles">${"★".repeat(et)}</span>` : ""}
        <span class="lecon-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></span>
      </span>
    </a>`;
}

/* ---------- Page : Leçon ---------- */

function pageLecon(idLecon) {
  const l = INDEX_LECONS[idLecon];
  if (!l) return pageAccueil();
  majBoutonRetour(leconsDuDomaine(l.domaine).length ? "#/domaine/" + l.domaine : "#/matiere/francais");
  ongletActif = "cours";
  localStorage.setItem("hidaya_last", idLecon);
  rendreLecon(l);
}

function rendreLecon(l) {
  const pr = profilDe(matiereDuDomaine(l.domaine) || "francais");
  const rtl = pr.rtl || l.langue === "ar";
  document.title = l.titre + " — Révisions d'Hidaya";
  const st = chargerProgress().lecons[l.id] || { exosFaits: 0, exosReussis: 0, devoir: false };
  const nExos = l.exercices ? l.exercices.length : 0;
  const aFlash = (l.flash || []).length;
  const flashStats = aFlash ? statsFlash(l) : null;
  const dirAttr = rtl ? ' dir="rtl"' : "";

  APP.innerHTML = `
    <header class="lecon-entete"${rtl ? ' dir="rtl"' : ""} style="background:linear-gradient(135deg,${pr.couleur},${pr.couleur2})">
      <div class="lecon-theme">${(pr.icone ? pr.icone + " " : "") + (pr.nomFr || pr.nom)}${l.theme ? " · " + esc(l.theme) : ""}${l.duree ? " · ⏱ " + esc(l.duree) : ""}</div>
      <h1 dir="auto">${esc(l.titre)}</h1>
      <div class="meta">
        ${l.texte ? "Texte : « " + esc(l.texte) + " » · " : ""}${l.niveau || "5e / EB7 · 1AC"}
        · <strong style="color:#fff;opacity:.95">${STATUTS[statutLecon(l)].libelle}</strong>
      </div>
    </header>
    <div class="lecon-objectifs"${rtl ? ' dir="rtl"' : ""}>
      <strong>🎯 ${rtl ? "أهداف الدرس :" : "Dans cette leçon, tu vas apprendre à :"}</strong>
      <ul>${(l.objectifs || []).map(o => `<li dir="auto">${esc(o)}</li>`).join("")}</ul>
    </div>
    <nav class="onglets">
      <button class="onglet ${ongletActif === "cours" ? "actif" : ""}" data-onglet="cours">📘 ${rtl ? "الدرس" : "Le cours"}</button>
      <button class="onglet ${ongletActif === "exercices" ? "actif" : ""}" data-onglet="exercices">✍️ ${rtl ? "التمارين" : "Les exercices"} <span class="mini-score">${st.exosReussis}/${nExos}</span></button>
      <button class="onglet ${ongletActif === "devoir" ? "actif" : ""}" data-onglet="devoir">📝 ${rtl ? "الفرض" : "Le devoir"} ${st.devoir ? "✅" : ""}</button>
      ${aFlash ? `<button class="onglet ${ongletActif === "flash" ? "actif" : ""}" data-onglet="flash">🃏 Flashcards <span class="mini-score">${flashStats.su}/${aFlash}</span></button>` : ""}
    </nav>
    <div id="zone-onglet"${rtl ? ' dir="rtl" class="rtl"' : ""}></div>
  `;
  document.querySelectorAll(".onglet").forEach(b => {
    b.addEventListener("click", () => { ongletActif = b.dataset.onglet; rendreLecon(l); });
  });
  const zone = document.getElementById("zone-onglet");
  if (ongletActif === "cours") rendreCours(zone, l);
  else if (ongletActif === "exercices") rendreExercices(zone, l);
  else if (ongletActif === "flash") rendreFlash(zone, l);
  else rendreDevoir(zone, l);
  appliquerKaTeX(zone);
  appliquerKaTeX(document.querySelector(".lecon-objectifs"));
}

/* ---------- Flashcards (mémorisation) ---------- */
function cleFlash(idLecon) { return "hidaya_flash_" + idLecon; }
function chargerFlash(idLecon) {
  try { return JSON.parse(localStorage.getItem(cleFlash(idLecon))) || {}; }
  catch { return {}; }
}
function statsFlash(l) {
  const etat = chargerFlash(l.id);
  const su = (l.flash || []).filter(c => etat[c.r]).length;
  return { su, total: l.flash.length, etat };
}
function rendreFlash(zone, l) {
  const pr = profilDe(matiereDuDomaine(l.domaine) || "francais");
  const { su, total, etat } = statsFlash(l);
  zone.innerHTML = `
    <p class="sous-titre">Retourne chaque carte, mémorise, puis dis si tu savais. ${su}/${total} maîtrisées.</p>
    <div class="barre-prog" style="margin-bottom:14px"><div class="rempli" style="width:${total ? Math.round(100 * su / total) : 0}%;background:linear-gradient(90deg,${pr.couleur},${pr.couleur2})"></div></div>
    <div class="flash-grille">
      ${(l.flash || []).map((c, i) => {
        const su1 = !!etat[c.r];
        return `<div class="flash-carte ${su1 ? "su" : ""}" data-flash="${i}">
          <div class="flash-inner">
            <button class="flash-face flash-recto" dir="auto">${c.r}<small>${rtl() ? "المس للقلب" : "Clique pour retourner"}</small></button>
            <div class="flash-face flash-verso" dir="auto">${c.v}
              <div class="flash-actions">
                <button class="btn btn-oui btn-petit" data-sav="1">✔ ${rtl() ? "حفظت" : "Je sais"}</button>
                <button class="btn btn-non btn-petit" data-sav="0">↺ ${rtl() ? "أراجع" : "À revoir"}</button>
              </div>
            </div>
          </div>
        </div>`;
      }).join("")}
    </div>`;
  zone.querySelectorAll(".flash-carte").forEach(carte => {
    carte.querySelector(".flash-recto").addEventListener("click", () => carte.classList.add("retournee"));
    carte.querySelectorAll("[data-sav]").forEach(b => b.addEventListener("click", ev => {
      ev.stopPropagation();
      const idx = parseInt(carte.dataset.flash, 10);
      const etat2 = chargerFlash(l.id);
      etat2[l.flash[idx].r] = b.dataset.sav === "1";
      localStorage.setItem(cleFlash(l.id), JSON.stringify(etat2));
      const st2 = statsFlash(l);
      if (st2.su === st2.total && !etat2._bonus) {
        etat2._bonus = 1;
        localStorage.setItem(cleFlash(l.id), JSON.stringify(etat2));
        ajouterPoints(15);
        confettis();
      }
      ongletActif = "flash";
      rendreLecon(l);
    }));
  });
}
function rtl() { return document.getElementById("zone-onglet")?.getAttribute("dir") === "rtl"; }

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
naviguer();
majScore();
majCompteursSidebar();
