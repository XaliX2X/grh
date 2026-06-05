/* ============================================================
   DATOS — URLs originales restauradas
============================================================ */
const HABITATS = [
  {
    id: "selva",
    nombre: "Selva Tropical",
    clima: "Cálido y húmedo",
    region: "América, África, Asia",
    desc: "La selva tropical es el ecosistema más biodiverso del planeta. Con lluvias constantes y calor intenso durante todo el año, sus densos bosques albergan más del 50% de todas las especies conocidas. La vegetación forma capas —dosel, sotobosque, suelo— donde cada nivel tiene sus propios habitantes.",
    facts: [
      { val: "+200 mm", label: "Lluvia mensual" },
      { val: "25–35°C", label: "Temperatura" },
      { val: "50%",     label: "Biodiversidad global" }
    ],
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&h=900&fit=crop&auto=format&q=80",
    animales: [
      { n: "Jaguar",        img: "https://images.freeimages.com/images/large-previews/a6b/majestic-jaguar-close-up-0410-5699394.jpg?fmt=webp&w=500" },
      { n: "Loro",          img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Mono",          img: "https://cdn.pixabay.com/photo/2018/11/02/06/37/monkey-3789672_1280.jpg" },
      { n: "Rana venenosa", img: "https://img.freepik.com/fotos-premium/colorida-rana-venenosa-selva-tropical_61243-22441.jpg" },
      { n: "Anaconda",      img: "https://www.iheartbrazil.com/wp-content/uploads/2021/03/Yellow-anaconda-Eunectes-notaeus-1024x684.jpg" }
    ]
  },
  {
    id: "desierto",
    nombre: "Desierto",
    clima: "Extremo: caluroso y seco",
    region: "África, Asia, América",
    desc: "El desierto es un ambiente de extremos: temperaturas que superan los 50°C durante el día y caen bajo cero por la noche. Con menos de 250 mm de lluvia al año, los animales que sobreviven aquí poseen asombrosas adaptaciones para conservar el agua y tolerar el calor.",
    facts: [
      { val: "<250 mm",    label: "Lluvia anual" },
      { val: "hasta 50°C", label: "Temperatura máx." },
      { val: "33%",        label: "Superficie terrestre" }
    ],
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=700&h=900&fit=crop&auto=format&q=80",
    animales: [
      { n: "Camello",   img: "https://cdn.pixabay.com/photo/2011/01/01/17/15/camel-4319_1280.jpg" },
      { n: "Escorpión", img: "https://atlasanimal.com/wp-content/uploads/2021/02/escorpion.jpg" },
      { n: "Lagarto",   img: "https://wildlifevagabond.com/wp-content/uploads/2023/12/IMG_0078-Edit-2-Edit.jpg" },
      { n: "Serpiente", img: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Águila",    img: "https://images.pexels.com/photos/3250638/pexels-photo-3250638.jpeg?cs=srgb&dl=pexels-frank-cone-140140-3250638.jpg&fm=jpg" }
    ]
  },
  {
    id: "polo",
    nombre: "Polo Norte",
    clima: "Extremadamente frío",
    region: "Ártico y Antártico",
    desc: "Las regiones polares son los lugares más fríos de la Tierra, con temperaturas que bajan hasta -60°C. Cubiertas de hielo y nieve casi todo el año, solo las especies con gruesas capas de grasa y pelaje denso logran sobrevivir. En verano, el sol no se pone; en invierno, no sale.",
    facts: [
      { val: "-60°C",    label: "Temperatura mínima" },
      { val: "6 meses",  label: "Noche polar" },
      { val: "14 M km²", label: "Hielo ártico" }
    ],
    img: "https://images.pexels.com/photos/32369748/pexels-photo-32369748.jpeg?_gl=1*15powxf*_ga*NTcwODkwNDIuMTc4MDQxNDU2Ng..*_ga_8JE65Q40S6*czE3ODA0MTQ1NjUkbzEkZzAkdDE3ODA0MTQ1NzUkajUwJGwwJGgw",
    animales: [
      { n: "Oso polar",      img: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Morsa",           img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Pacific_Walrus_-_Bull_%288247646168%29_cropped.jpg" },
      { n: "Foca",           img: "https://whalescientists.com/wp-content/uploads/2020/08/NqQ8ujDBTnKORnlXODfuw_thumb_6a64.jpg" },
      { n: "Ballena beluga", img: "https://i.pinimg.com/736x/b6/a8/d3/b6a8d319ffd22aed8f291d8fcde805e0.jpg" },
      { n: "Zorro ártico",   img: "https://images3.alphacoders.com/812/thumb-1920-812579.jpg" }
    ]
  },
  {
    id: "bosque",
    nombre: "Bosque Templado",
    clima: "Cuatro estaciones",
    region: "Europa, América del Norte, Asia",
    desc: "El bosque templado cambia con las estaciones. En otoño, los árboles pierden sus hojas con colores rojos y dorados; en invierno duermen bajo la nieve; en primavera reverdecen y en verano ofrecen sombra y frutos. Es un ecosistema rico y equilibrado con gran diversidad de fauna.",
    facts: [
      { val: "4",           label: "Estaciones" },
      { val: "500–1500 mm", label: "Lluvia anual" },
      { val: "-5–30°C",     label: "Rango térmico" }
    ],
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&h=900&fit=crop&auto=format&q=80",
    animales: [
      { n: "Lobo",      img: "https://i.pinimg.com/originals/29/28/7a/29287a6e154ba62cc68f6baec1587b22.jpg" },
      { n: "Zorro",     img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Ciervo",    img: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Búho",      img: "https://mdc.mo.gov/sites/default/files/mo_nature/media/images/2013/11/great_horned_owl_closeup_11-19-13.jpg" },
      { n: "Oso pardo", img: "https://www.nps.gov/lacl/learn/nature/images/Image-w-cred-cap_-1200w-_-Brown-Bear-page_-brown-bear-in-fog_2.jpg" }
    ]
  },
  {
    id: "oceano",
    nombre: "Océano",
    clima: "Marino y profundo",
    region: "Cubre el 71% del planeta",
    desc: "El océano es el ecosistema más grande de la Tierra. Desde las aguas tropicales iluminadas hasta las fosas abisales en completa oscuridad, cada zona alberga formas de vida únicas. Los océanos regulan el clima del planeta, producen la mitad del oxígeno que respiramos y son hogar de millones de especies.",
    facts: [
      { val: "71%",      label: "Superficie terrestre" },
      { val: "11 km",    label: "Profundidad máx." },
      { val: "250.000+", label: "Especies conocidas" }
    ],
    img: "https://images.pexels.com/photos/3301326/pexels-photo-3301326.jpeg?_gl=1*1a66csi*_ga*NTcwODkwNDIuMTc4MDQxNDU2Ng..*_ga_8JE65Q40S6*czE3ODA0MTQ1NjUkbzEkZzEkdDE3ODA0MTQ3NjgkajYwJGwwJGgw",
    animales: [
      { n: "Tiburón",        img: "https://i.pinimg.com/originals/07/ce/cf/07cecf8afecab9f698677e6670bdb65f.jpg" },
      { n: "Delfín",         img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Pulpo",          img: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Tortuga marina", img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=300&h=300&fit=crop&auto=format&q=80" },
      { n: "Pez payaso",     img: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=300&h=300&fit=crop&auto=format&q=80" }
    ]
  }
];

const HERO_IMGS = [
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop&auto=format&q=75",
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&h=400&fit=crop&auto=format&q=75",
  "https://images.pexels.com/photos/32369748/pexels-photo-32369748.jpeg?_gl=1*15powxf*_ga*NTcwODkwNDIuMTc4MDQxNDU2Ng..*_ga_8JE65Q40S6*czE3ODA0MTQ1NjUkbzEkZzAkdDE3ODA0MTQ1NzUkajUwJGwwJGgw",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&h=400&fit=crop&auto=format&q=75",
  "https://images.pexels.com/photos/3301326/pexels-photo-3301326.jpeg?_gl=1*1a66csi*_ga*NTcwODkwNDIuMTc4MDQxNDU2Ng..*_ga_8JE65Q40S6*czE3ODA0MTQ1NjUkbzEkZzEkdDE3ODA0MTQ3NjgkajYwJGwwJGgw",
  "animales2.png"
];

/* Mensajes de feedback positivo (acierto) */
const MSG_OK = [
  "¡Correcto! Sigue así.",
  "¡Muy bien! Vas excelente.",
  "¡Perfecto! Ese es su lugar.",
  "¡Exacto! Lo lograste.",
  "¡Genial! Continúa así.",
  "¡Bien hecho! Vas por buen camino.",
  "¡Acertaste! Que buena memoria.",
  "¡Así se hace! Eres increíble."
];

/* Mensajes de feedback negativo (error) */
const MSG_ERR = [
  "No te rindas, tú puedes.",
  "¡Casi! Inténtalo de nuevo.",
  "No pasa nada, sigue adelante.",
  "Error, pero puedes lograrlo.",
  "Equivocado, pero no te detengas.",
  "No es ese, sigue intentando.",
  "Fuerza, tú puedes hacerlo.",
  "Sigue intentando, vas bien."
];

/* ============================================================
   HERO REEL
============================================================ */
function buildHeroReel() {
  const reel = document.getElementById("heroReel");
  HERO_IMGS.forEach(src => {
    const img = document.createElement("img");
    img.src = src; img.alt = ""; img.loading = "eager";
    reel.appendChild(img);
  });
}

/* ============================================================
   HABITAT CARDS (info)
============================================================ */
function buildHabitatCards() {
  const grid = document.getElementById("habitatsGrid");
  HABITATS.forEach(h => {
    const card = document.createElement("div");
    card.className = "habitat-card";
    card.innerHTML = `
      <img src="${h.img}" alt="${h.nombre}" loading="lazy" />
      <div class="habitat-card-body">
        <div class="hc-tag">${h.clima}</div>
        <div class="hc-name">${h.nombre}</div>
        <div class="hc-cta">Conocer más <span class="hc-arrow">→</span></div>
      </div>`;
    card.addEventListener("click", () => openModal(h));
    grid.appendChild(card);
  });
}

/* ============================================================
   MODAL
============================================================ */
function openModal(h) {
  document.getElementById("modalImg").src = h.img.replace("w=700&h=900","w=720&h=280");
  document.getElementById("modalImg").alt = h.nombre;
  document.getElementById("modalName").textContent = h.nombre;
  document.getElementById("modalClima").textContent = h.clima;
  document.getElementById("modalRegion").textContent = h.region;
  document.getElementById("modalDesc").textContent = h.desc;

  const factsEl = document.getElementById("modalFacts");
  factsEl.innerHTML = "";
  h.facts.forEach(f => {
    factsEl.innerHTML += `<div class="fact-box"><span class="fact-val">${f.val}</span><span class="fact-label">${f.label}</span></div>`;
  });

  const animGrid = document.getElementById("modalAnimalsGrid");
  animGrid.innerHTML = "";
  h.animales.forEach(a => {
    const malCard = document.createElement("div");
    malCard.className = "mal-card";
    malCard.style.cursor = "pointer";
    malCard.title = "Clic para más información";
    malCard.innerHTML = `<img src="${a.img}" alt="${a.n}" loading="lazy"/><div class="mal-name">${a.n}</div>`;
    malCard.addEventListener("click", (e) => {
      e.stopPropagation();
      const habitat = HABITATS.find(x => x.nombre === h.nombre);
      const animal  = habitat && habitat.animales.find(x => x.n === a.n);
      if (animal && habitat) openAnimalDetail(animal, habitat);
    });
    animGrid.appendChild(malCard);
  });

  document.getElementById("modalBg").classList.add("open");
  document.documentElement.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalBg").classList.remove("open");
  document.documentElement.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBg").addEventListener("click", e => {
  if (e.target === document.getElementById("modalBg")) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ============================================================
   ESTADO DEL JUEGO
============================================================ */
let dragCard    = null;
let touchClone  = null;
let placed      = 0;
let total       = 0;
let timerSecs   = 180;
let timerInterval = null;
const TIMER_TOTAL  = 180;
const PENALTY_SECS = 10;

/* ============================================================
   SCROLL LOCK
============================================================ */
function lockScroll() {
  const gameTop = document.getElementById("juego").getBoundingClientRect().top + window.scrollY;
  window._scrollLocked = true;
  window._gameTop = gameTop;
  window.addEventListener("scroll", enforceScrollLock, { passive: false });
  /* Deshabilitar los links del hero hacia arriba */
  document.querySelectorAll('a[href="#habitats"], a[href="#video"]').forEach(el => {
    el.dataset.href = el.getAttribute("href");
    el.removeAttribute("href");
    el.classList.add("nav-locked");
  });
}

function enforceScrollLock() {
  if (!window._scrollLocked) return;
  if (window.scrollY < window._gameTop - 10) {
    window.scrollTo({ top: window._gameTop, behavior: "instant" });
  }
}

function unlockScroll() {
  window._scrollLocked = false;
  window.removeEventListener("scroll", enforceScrollLock);
  document.querySelectorAll(".nav-locked").forEach(el => {
    el.setAttribute("href", el.dataset.href || "#");
    el.classList.remove("nav-locked");
  });
}

/* ============================================================
   BOTONES DE SALIR
============================================================ */
function exitGame() {
  stopTimer();
  unlockScroll();
  document.getElementById("gameActive").classList.add("hidden");
  document.getElementById("gameIntro").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("btnExit").addEventListener("click", () => {
  if (confirm("¿Salir de la actividad? Perderás tu progreso actual.")) exitGame();
});
document.getElementById("btnExitWin").addEventListener("click", exitGame);
document.getElementById("btnExitTimeup").addEventListener("click", exitGame);

/* ============================================================
   INICIO DEL JUEGO
============================================================ */
document.getElementById("btnStart").addEventListener("click", () => {
  document.getElementById("gameIntro").classList.add("hidden");
  document.getElementById("gameActive").classList.remove("hidden");
  lockScroll();
  /* Scroll al juego */
  document.getElementById("juego").scrollIntoView({ behavior: "smooth", block: "start" });
  initGame();
  startTimer();
});

/* ============================================================
   TIMER
============================================================ */
function startTimer() {
  timerSecs = TIMER_TOTAL;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timerSecs--;
    if (timerSecs <= 0) {
      timerSecs = 0;
      updateTimerUI();
      clearInterval(timerInterval);
      timerInterval = null;
      onTimeUp();
    } else {
      updateTimerUI();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function penalize() {
  timerSecs = Math.max(0, timerSecs - PENALTY_SECS);
  updateTimerUI();
  showPenaltyFlash();
  if (timerSecs === 0) { stopTimer(); onTimeUp(); }
}

function updateTimerUI() {
  const mins = Math.floor(timerSecs / 60);
  const secs = timerSecs % 60;
  document.getElementById("timerText").textContent = `${mins}:${secs.toString().padStart(2,"0")}`;

  const arc   = document.getElementById("timerArc");
  const txtEl = document.getElementById("timerText");
  const ratio = timerSecs / TIMER_TOTAL;
  arc.style.strokeDashoffset = 176 * (1 - ratio);
  arc.classList.remove("warning","danger");
  txtEl.classList.remove("danger");
  if (timerSecs <= 30) { arc.classList.add("danger"); txtEl.classList.add("danger"); }
  else if (timerSecs <= 60) { arc.classList.add("warning"); }
}

function showPenaltyFlash() {
  const flash = document.getElementById("penaltyFlash");
  flash.classList.remove("hidden");
  flash.style.animation = "none";
  void flash.offsetWidth;
  flash.style.animation = "";
  setTimeout(() => flash.classList.add("hidden"), 900);
}

function onTimeUp() {
  document.getElementById("gamePool").style.pointerEvents = "none";
  document.getElementById("dropGrid").style.pointerEvents = "none";
  const desc = placed === total
    ? "¡Lo lograste justo a tiempo! ¡Fantástico trabajo!"
    : `Clasificaste ${placed} de ${total} animales. Estudia los hábitats e inténtalo de nuevo.`;
  document.getElementById("timeupDesc").textContent = desc;
  document.getElementById("timeupScreen").classList.remove("hidden");
  document.getElementById("timeupScreen").scrollIntoView({ behavior: "smooth", block: "center" });
}

/* ============================================================
   FEEDBACK TOAST
============================================================ */
let toastTimeout = null;

function showFeedback(ok, animalName) {
  const toast = document.getElementById("feedbackToast");
  const msgs  = ok ? MSG_OK : MSG_ERR;
  const msg   = msgs[Math.floor(Math.random() * msgs.length)];

  toast.textContent = (ok ? "+" : "") + " " + msg;
  toast.className   = "feedback-toast " + (ok ? "feedback-ok" : "feedback-err");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

/* ============================================================
   INIT GAME
============================================================ */
function initGame() {
  placed = 0;
  document.getElementById("gamePool").innerHTML = "";
  document.getElementById("dropGrid").innerHTML = "";
  document.getElementById("winScreen").classList.add("hidden");
  document.getElementById("timeupScreen").classList.add("hidden");
  document.getElementById("penaltyFlash").classList.add("hidden");
  document.getElementById("feedbackToast").classList.add("hidden");
  document.getElementById("gamePool").style.pointerEvents = "";
  document.getElementById("dropGrid").style.pointerEvents = "";

  const all = [];
  HABITATS.forEach(h => h.animales.forEach(a => all.push({ ...a, hid: h.id })));
  total = all.length;
  document.getElementById("progTotal").textContent = total;
  shuffle(all);

  all.forEach(a => document.getElementById("gamePool").appendChild(makeAnimalCard(a)));
  HABITATS.forEach(h => document.getElementById("dropGrid").appendChild(makeDropZone(h)));
  updateProgress();
}

/* ============================================================
   ANIMAL CARD — compacta
============================================================ */
function makeAnimalCard(a) {
  const card = document.createElement("div");
  card.className = "animal-card";
  card.draggable = true;
  card.dataset.hid  = a.hid;
  card.dataset.name = a.n;
  card.innerHTML = `
    <img class="ac-img" src="${a.img}" alt="${a.n}" loading="lazy" />
    <span class="ac-name">${a.n}</span>`;
  card.addEventListener("dragstart", onDragStart);
  card.addEventListener("dragend",   onDragEnd);
  card.addEventListener("touchstart", onTouchStart, { passive: true });
  card.addEventListener("touchmove",  onTouchMove,  { passive: false });
  card.addEventListener("touchend",   onTouchEnd);
  return card;
}

/* ============================================================
   DROP ZONE
============================================================ */
function makeDropZone(h) {
  const dz = document.createElement("div");
  dz.className = "drop-zone";
  dz.dataset.id = h.id;
  const headerImg = h.img.replace("w=700&h=900","w=400&h=100");
  dz.innerHTML = `
    <div class="dz-header">
      <img src="${headerImg}" alt="${h.nombre}" loading="lazy" />
      <div class="dz-overlay">
        <div class="dz-overlay-left">
          <span class="dz-sub">${h.clima}</span>
          <span class="dz-label">${h.nombre}</span>
        </div>
        
      </div>
    </div>
    <div class="dz-hint" id="hint-${h.id}">Suelta aquí los animales</div>
    <div class="dz-body" id="dzb-${h.id}"></div>`;
  dz.addEventListener("dragover",  e => { e.preventDefault(); dz.classList.add("drag-over"); });
  dz.addEventListener("dragleave", () => dz.classList.remove("drag-over"));
  dz.addEventListener("drop",      e => { e.preventDefault(); dz.classList.remove("drag-over"); handleDrop(h.id); });
  return dz;
}

/* ============================================================
   DRAG — Desktop
============================================================ */
function onDragStart(e) { dragCard = e.currentTarget; dragCard.classList.add("dragging"); }
function onDragEnd()    { if (dragCard) dragCard.classList.remove("dragging"); }

function handleDrop(zoneId) {
  if (!dragCard) return;
  const ok = dragCard.dataset.hid === zoneId;
  dragCard.classList.remove("dragging");
  if (ok) {
    showFeedback(true, dragCard.dataset.name);
    placeAnimal(dragCard, zoneId);
  } else {
    showFeedback(false, dragCard.dataset.name);
    dragCard.classList.add("wrong");
    setTimeout(() => dragCard && dragCard.classList.remove("wrong"), 450);
    penalize();
  }
  dragCard = null;
}

/* ============================================================
   TOUCH — Tablet/Mobile
============================================================ */
function onTouchStart(e) {
  dragCard = e.currentTarget;
  const t = e.touches[0];
  touchClone = dragCard.cloneNode(true);
  const w = dragCard.offsetWidth;
  Object.assign(touchClone.style, {
    position:"fixed", pointerEvents:"none", zIndex:"9999",
    opacity:"0.9", transform:"scale(1.06)",
    left:(t.clientX - w/2)+"px",
    top:(t.clientY - dragCard.offsetHeight/2)+"px",
    width:w+"px", margin:"0", borderRadius:"10px",
    boxShadow:"0 10px 36px rgba(0,0,0,0.6)"
  });
  document.body.appendChild(touchClone);
  dragCard.classList.add("dragging");
}

function onTouchMove(e) {
  e.preventDefault();
  const t = e.touches[0];
  if (touchClone) {
    touchClone.style.left = (t.clientX - touchClone.offsetWidth/2)+"px";
    touchClone.style.top  = (t.clientY - touchClone.offsetHeight/2)+"px";
  }
  document.querySelectorAll(".drop-zone").forEach(z => z.classList.remove("drag-over"));
  const under = document.elementFromPoint(t.clientX, t.clientY);
  const zone  = under && under.closest(".drop-zone");
  if (zone) zone.classList.add("drag-over");
}

function onTouchEnd(e) {
  if (touchClone) { document.body.removeChild(touchClone); touchClone = null; }
  document.querySelectorAll(".drop-zone").forEach(z => z.classList.remove("drag-over"));
  const t    = e.changedTouches[0];
  const under = document.elementFromPoint(t.clientX, t.clientY);
  const zone  = under && under.closest(".drop-zone");
  if (zone && dragCard) {
    const ok = dragCard.dataset.hid === zone.dataset.id;
    dragCard.classList.remove("dragging");
    if (ok) {
      showFeedback(true, dragCard.dataset.name);
      placeAnimal(dragCard, zone.dataset.id);
    } else {
      showFeedback(false, dragCard.dataset.name);
      dragCard.classList.add("wrong");
      setTimeout(() => dragCard && dragCard.classList.remove("wrong"), 450);
      penalize();
    }
  } else if (dragCard) { dragCard.classList.remove("dragging"); }
  dragCard = null;
}

/* ============================================================
   PLACE ANIMAL
============================================================ */
function placeAnimal(card, zoneId) {
  card.draggable = false;
  const imgSrc = card.querySelector(".ac-img").src;
  const name   = card.dataset.name;
  card.remove();

  const el = document.createElement("div");
  el.className = "placed-animal";
  el.innerHTML = `<img src="${imgSrc}" alt="${name}"/><span>${name}</span>`;
  document.getElementById("dzb-"+zoneId).appendChild(el);

  const hint = document.getElementById("hint-"+zoneId);
  if (hint) hint.style.display = "none";

  placed++;
  updateProgress();


  if (placed === total) { stopTimer(); setTimeout(showWin, 500); }
}

function showWin() {
  const mins = Math.floor(timerSecs/60);
  const secs = timerSecs%60;
  document.getElementById("winTime").textContent =
    `Te sobraron ${mins>0 ? mins+" min " : ""}${secs} seg`;
  document.getElementById("winScreen").classList.remove("hidden");
  document.getElementById("winScreen").scrollIntoView({ behavior:"smooth", block:"center" });
}

function updateProgress() {
  const pct = total > 0 ? Math.round((placed/total)*100) : 0;
  document.getElementById("gpFill").style.width = pct+"%";
  document.getElementById("progNum").textContent = placed;
  document.getElementById("progPct").textContent = pct+"%";
}



function shuffle(arr) {
  for (let i = arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
}

/* ============================================================
   REPLAY / RETRY
============================================================ */
document.getElementById("btnReplay").addEventListener("click", () => {
  stopTimer();
  document.getElementById("winScreen").classList.add("hidden");
  initGame();
  startTimer();
});

document.getElementById("btnRetry").addEventListener("click", () => {
  stopTimer();
  document.getElementById("timeupScreen").classList.add("hidden");
  /* Mantener scroll lock y re-iniciar */
  initGame();
  startTimer();
});

/* ============================================================
   INIT
============================================================ */
buildHeroReel();
buildHabitatCards();/* ============================================================
   ANIMAL DETAIL MODAL — animal-detail.js
   Añadir en index.html DESPUÉS de script.js:
     <script src="animal-detail.js"></script>

   Estructura de archivos esperada:
     sonidos/<nombre>.mp3
     aerea/<nombre>.mp4
     frontal/<nombre>.mp4
     lateral/<nombre>.mp4

   donde <nombre> = clave del animal (ver ANIMAL_KEYS más abajo).
   Adapta las claves si tus archivos usan nombres distintos.
============================================================ */

/* -------- Mapa nombre → clave de archivo -------- */
const ANIMAL_KEYS = {
  "Jaguar":          "jaguar",
  "Loro":            "loro",
  "Mono":            "mono",
  "Rana venenosa":   "rana_venenosa",
  "Anaconda":        "anaconda",
  "Camello":         "camello",
  "Escorpión":       "escorpion",
  "Lagarto":         "lagarto",
  "Serpiente":       "serpiente",
  "Águila":          "aguila",
  "Oso polar":       "oso_polar",
  "Morsa":           "morza",
  "Foca":            "foca",
  "Ballena beluga":  "ballena_beluga",
  "Zorro ártico":    "zorro_artico",
  "Lobo":            "lobo",
  "Zorro":           "zorro",
  "Ciervo":          "ciervo",
  "Búho":            "buho",
  "Oso pardo":       "oso_pardo",
  "Tiburón":         "tiburon",
  "Delfín":          "delfin",
  "Pulpo":           "pulpo",
  "Tortuga marina":  "tortuga_marina",
  "Pez payaso":      "pez_payaso"
};

/* Datos extra por animal (descripción, curiosidades, datos) */
/* Estructura de cada animal:
   desc        — descripción principal
   stats       — array de { val, label } para las tarjetas de datos
   curiosidades— chips de datos curiosos / características
*/
const ANIMAL_DATA = {
  jaguar: {
    desc: "El jaguar es el felino más grande de América y el tercero del mundo. Su mordida es la más poderosa entre todos los grandes felinos, capaz de atravesar el cráneo de sus presas.",
    stats: [ { val: "100 kg", label: "Peso máx." }, { val: "1,8 m", label: "Longitud" }, { val: "12-15 años", label: "Vida (wild)" }, { val: "Carnívoro", label: "Dieta" } ],
    curiosidades: ["Mordida más poderosa de los felinos", "Nada y bucea con facilidad", "Caza de noche con visión nocturna", "Puede rugir a gran distancia", "Su pelaje es único como huella dactilar", "Ataca desde arriba a sus presas"]
  },
  loro: {
    desc: "Los loros son aves altamente inteligentes con una capacidad excepcional para imitar sonidos y aprender palabras. Su pico curvo y sus patas zigodáctilas los hacen maestros en trepar y manipular objetos.",
    stats: [ { val: "60+ años", label: "Longevidad" }, { val: "1 kg", label: "Peso medio" }, { val: "Frugívoro", label: "Dieta" }, { val: "~350", label: "Especies" } ],
    curiosidades: ["Pueden aprender cientos de palabras", "Usan herramientas para alcanzar comida", "Son monógamos de por vida", "Tienen inteligencia comparable a un niño de 5 años", "Sus plumas contienen pigmentos únicos en el reino animal", "Se comunican con dialectos regionales"]
  },
  mono: {
    desc: "Los monos son primates adaptables que viven en grupos sociales complejos con jerarquías claras. Se comunican mediante vocalizaciones, gestos faciales y posturas corporales.",
    stats: [ { val: "5-30 kg", label: "Peso" }, { val: "25-40 años", label: "Vida" }, { val: "Omnívoro", label: "Dieta" }, { val: "~260", label: "Especies" } ],
    curiosidades: ["Usan herramientas (ramas, piedras)", "Tienen memoria visual excepcional", "Resuelven problemas lógicos", "Cuidan a sus crías hasta 3 años", "Reconocen su propio reflejo en espejos", "Transmiten cultura entre generaciones"]
  },
  rana_venenosa: {
    desc: "Las ranas dardo poseen toxinas en la piel producidas a partir de los insectos que consumen. Sus colores brillantes advierten a los depredadores de su peligrosidad.",
    stats: [ { val: "2-6 cm", label: "Longitud" }, { val: "10 años", label: "Vida" }, { val: "Insectívoro", label: "Dieta" }, { val: "170+", label: "Especies" } ],
    curiosidades: ["Su veneno es de origen dietético, no genético", "Los machos cuidan y transportan los huevos", "En cautiverio pierden su toxicidad", "Una especie puede matar a 10 hombres", "Sus colores son señal universal de peligro", "Producen llamadas complejas para comunicarse"]
  },
  anaconda: {
    desc: "La anaconda verde es la serpiente más pesada del mundo. Semiacuática, caza acechando pacientemente en ríos y pantanos, sometiendo a sus presas por constricción.",
    stats: [ { val: "250 kg", label: "Peso máx." }, { val: "8-9 m", label: "Longitud máx." }, { val: "10 años", label: "Vida (wild)" }, { val: "Carnívora", label: "Dieta" } ],
    curiosidades: ["Mata por constricción, no es venenosa", "Puede pasar 6 meses sin comer", "Los ojos y nariz están en lo alto de la cabeza", "Pare crías vivas (hasta 40 de una vez)", "Puede engullir presas enteras de gran tamaño", "Las hembras son mucho más grandes que los machos"]
  },
  camello: {
    desc: "El camello es un maestro de la supervivencia en condiciones extremas. Sus jorobas almacenan grasa como reserva energética, y puede beber 130 litros de agua en apenas 13 minutos.",
    stats: [ { val: "650 kg", label: "Peso" }, { val: "65 km/h", label: "Veloc. máx." }, { val: "40-50 años", label: "Vida" }, { val: "Herbívoro", label: "Dieta" } ],
    curiosidades: ["Las jorobas almacenan grasa, no agua", "Su temperatura corporal varía 6°C para ahorrar agua", "Sus fosas nasales se cierran contra la arena", "Puede perder el 25% de su peso en agua sin morir", "Sus glóbulos rojos son ovalados para fluir mejor deshidratado", "Tiene tres párpados protectores"]
  },
  escorpion: {
    desc: "Los escorpiones son arácnidos que han existido por más de 400 millones de años casi sin cambios. Son capaces de brillar bajo luz ultravioleta gracias a compuestos en su exoesqueleto.",
    stats: [ { val: "1-20 cm", label: "Longitud" }, { val: "25 años", label: "Vida" }, { val: "~2500", label: "Especies" }, { val: "Carnívoro", label: "Dieta" } ],
    curiosidades: ["Brillan con luz ultravioleta", "Detectan vibraciones del suelo para cazar", "Solo 25 de 2500 especies son mortales", "Pueden sobrevivir meses sin comer", "Dan a luz crías vivas que suben al dorso materno", "Resisten dosis de radiación 100 veces letales para humanos"]
  },
  lagarto: {
    desc: "Los lagartos del desierto son expertos en termorregulación. Sus escamas impermeables reducen la pérdida de agua y algunos pueden correr bípedamente en sprints cortos.",
    stats: [ { val: "50-150 g", label: "Peso" }, { val: "10-30 cm", label: "Longitud" }, { val: "15 años", label: "Vida" }, { val: "Insectívoro", label: "Dieta" } ],
    curiosidades: ["Pueden desprender la cola como defensa", "Algunos cambian de color según temperatura", "Se orientan usando el sol como brújula", "Absorben agua a través de la piel en algunas especies", "Sus párpados son transparentes en muchas especies", "Pueden correr sobre dos patas en velocidad máxima"]
  },
  serpiente: {
    desc: "Las serpientes del desierto son depredadoras nocturnas de alta precisión. Sus órganos pit detectan el calor corporal de las presas en la oscuridad total.",
    stats: [ { val: "Variable", label: "Peso" }, { val: "0,1-8 m", label: "Longitud" }, { val: "20 años", label: "Vida" }, { val: "Carnívora", label: "Dieta" } ],
    curiosidades: ["Huelen el aire con la lengua bífida", "No tienen párpados ni oídos externos", "Pueden detectar calor con precisión de 0,003°C", "Mudan de piel completa periódicamente", "Sus mandíbulas se separan para tragar presas grandes", "Pueden sobrevivir sin comer hasta un año"]
  },
  aguila: {
    desc: "Las águilas poseen una visión 5 veces más aguda que la humana. Desde 300 metros de altura pueden detectar una presa del tamaño de un ratón con claridad absoluta.",
    stats: [ { val: "7 kg", label: "Peso máx." }, { val: "300 km/h", label: "Picada" }, { val: "30 años", label: "Vida (wild)" }, { val: "Carnívora", label: "Dieta" } ],
    curiosidades: ["Visión con 4 tipos de fotorreceptores (humanos tienen 3)", "Sus nidos pueden pesar más de 1 tonelada", "Forman parejas de por vida", "Pueden volar a más de 3000 m de altitud", "Sus garras generan 200 kg de presión por cm²", "Renuevan su plumaje durante años sin perder vuelo"]
  },
  oso_polar: {
    desc: "El oso polar es el carnívoro terrestre más grande del planeta. Su pelaje parece blanco pero cada pelo es incoloro y hueco; su piel negra absorbe el calor solar con máxima eficiencia.",
    stats: [ { val: "800 kg", label: "Peso máx." }, { val: "40 km/h", label: "Veloc. tierra" }, { val: "25 años", label: "Vida" }, { val: "Carnívoro", label: "Dieta" } ],
    curiosidades: ["Nadan hasta 100 km sin descansar", "Pueden ayunar hasta 8 meses", "Su nariz detecta focas a 1 km bajo la nieve", "Su pelaje repele el agua al instante", "Tienen almohadillas con textura antideslizante en el hielo", "Las hembras paren durante la hibernación"]
  },
  morza: {
    desc: "La morsa es uno de los pinnípedos más grandes del mundo. Sus inconfundibles colmillos, que pueden superar el metro de longitud, los usa para trepar al hielo, establecer dominancia y defenderse de osos polares y orcas.",
    stats: [ { val: "1700 kg", label: "Peso máx." }, { val: "35 km/h", label: "Veloc. agua" }, { val: "40 años", label: "Vida" }, { val: "Bivalvos", label: "Dieta" } ],
    curiosidades: ["Sus colmillos crecen toda la vida y pueden medir 1 m", "Detectan almejas en el fondo marino con sus bigotes sensitivos", "Pueden hinchar bolsas faríngeas para flotar dormidas", "Se agrupan en colonias de miles de individuos", "Su gruesa capa de grasa les permite soportar -35°C", "Los machos pelean con los colmillos para controlar el territorio"]
  },
  foca: {
    desc: "Las focas poseen una capa de grasa llamada blubber que puede medir 10 cm y las aísla del agua helada. Son nadadoras ágiles pero torpes en tierra.",
    stats: [ { val: "300 kg", label: "Peso" }, { val: "30 min", label: "Apnea máx." }, { val: "30 años", label: "Vida" }, { val: "Piscívora", label: "Dieta" } ],
    curiosidades: ["Sus bigotes detectan corrientes dejadas hace minutos", "Pueden dormir flotando verticalmente", "Bucean hasta 600 metros de profundidad", "Su ritmo cardíaco baja de 120 a 4 lpm al bucear", "Navegan miles de km en migraciones exactas", "Reconocen a sus crías entre cientos por el olor"]
  },
  ballena_beluga: {
    desc: "La ballena beluga, conocida como el 'canario del mar', produce una rica variedad de clics, chirridos y silbidos. Es la única ballena capaz de girar la cabeza gracias a sus vértebras no fusionadas.",
    stats: [ { val: "1500 kg", label: "Peso" }, { val: "5 m", label: "Longitud" }, { val: "80 km/h", label: "Veloc. máx." }, { val: "50 años", label: "Vida" } ],
    curiosidades: ["Cambia de gris a blanco al madurar", "Puede imitar voces humanas con precisión", "Vive en grupos sociales llamados pods", "Usa ecolocalización para cazar bajo el hielo", "Puede nadar de espaldas", "Se comunica con más de 11.000 tipos de sonidos distintos"]
  },
  zorro_artico: {
    desc: "El zorro ártico sobrevive temperaturas de -50°C gracias a su pelaje de dos capas. Cambia de color estacionalmente para camuflarse tanto en la nieve como en la tundra veraniega.",
    stats: [ { val: "4 kg", label: "Peso" }, { val: "50 km/h", label: "Veloc. máx." }, { val: "14 años", label: "Vida" }, { val: "Omnívoro", label: "Dieta" } ],
    curiosidades: ["Sus patas tienen pelo en las plantas como raquetas de nieve", "Entierra y recuerda cientos de escondites de comida", "Puede recorrer 5000 km en migraciones", "Su pelaje tiene la mejor relación aislamiento/peso del reino animal", "Sigue a los osos polares para comer sus sobras", "Puede detectar lemmings bajo 70 cm de nieve"]
  },
  lobo: {
    desc: "Los lobos son animales altamente sociales que viven en manadas con jerarquías claras. Sus aullidos coordinados pueden escucharse a más de 10 km y sirven para comunicar posición y estado emocional.",
    stats: [ { val: "80 kg", label: "Peso máx." }, { val: "65 km/h", label: "Veloc. máx." }, { val: "15 años", label: "Vida (wild)" }, { val: "Carnívoro", label: "Dieta" } ],
    curiosidades: ["Una manada recorre hasta 20 km al día", "Tienen 7 tipos de aullidos distintos con significados diferentes", "Son los antepasados directos del perro doméstico", "Pueden comer 9 kg de carne de una vez", "Sus territorios cubren hasta 1300 km²", "Crían a sus cachorros de forma cooperativa entre toda la manada"]
  },
  zorro: {
    desc: "El zorro rojo es el cánido más distribuido del planeta. Sus oídos verticalmente orientados le permiten escuchar roedores moviéndose bajo 70 cm de nieve con precisión milimétrica.",
    stats: [ { val: "7 kg", label: "Peso" }, { val: "50 km/h", label: "Veloc. máx." }, { val: "14 años", label: "Vida" }, { val: "Omnívoro", label: "Dieta" } ],
    curiosidades: ["Usa el campo magnético de la Tierra para calcular distancias al cazar", "Puede saltar 2 metros de altura", "Tiene territorios que marca con orina y excremento", "Sus pupilas son elípticas verticales para ver en la oscuridad", "Puede escuchar sonidos a 40 metros bajo tierra", "Es solitario pero se reúne para criar"]
  },
  ciervo: {
    desc: "Los ciervos son famosos por sus astas, estructuras óseas que crecen y se mudan anualmente. Durante el crecimiento están cubiertas de terciopelo, un tejido vascular que las alimenta.",
    stats: [ { val: "250 kg", label: "Peso máx." }, { val: "60 km/h", label: "Veloc. máx." }, { val: "20 años", label: "Vida" }, { val: "Herbívoro", label: "Dieta" } ],
    curiosidades: ["Las astas son el tejido de crecimiento más rápido en mamíferos", "Solo los machos tienen astas en la mayoría de especies", "Sus crías no tienen olor para escapar de depredadores", "Pueden saltar 3 metros de altura y 9 metros de largo", "Sus ojos ven casi 310° sin mover la cabeza", "Se comunican con feromonas y sonidos subsónicos"]
  },
  buho: {
    desc: "Los búhos tienen ojos fijos en sus órbitas, por lo que giran la cabeza hasta 270°. Su audición asimétrica les permite triangular la posición de una presa en completa oscuridad.",
    stats: [ { val: "4 kg", label: "Peso máx." }, { val: "270°", label: "Giro cabeza" }, { val: "25 años", label: "Vida" }, { val: "Carnívoro", label: "Dieta" } ],
    curiosidades: ["Vuelan en silencio total gracias a plumas dentadas", "Sus oídos están asimétricos para detectar distancia y dirección", "Regurgitan los huesos en bolas llamadas egagrópilas", "Sus ojos son tubulares, no esféricos como los nuestros", "Pueden ver con solo el 0,0001% de la luz que necesitamos", "Algunos tienen un disco facial que actúa como antena parabólica"]
  },
  oso_pardo: {
    desc: "El oso pardo es el mayor depredador terrestre de Europa y uno de los omnívoros más versátiles del mundo. En otoño entra en hiperfagia: come hasta 20 horas al día para acumular 14 kg de grasa.",
    stats: [ { val: "700 kg", label: "Peso máx." }, { val: "55 km/h", label: "Veloc. máx." }, { val: "30 años", label: "Vida" }, { val: "Omnívoro", label: "Dieta" } ],
    curiosidades: ["No hibernan completamente: su temperatura baja apenas 5°C", "Las hembras paren y amamantan durante la hibernación", "Pueden correr más rápido que un caballo en distancias cortas", "Su olfato es 7 veces más potente que el del perro", "Recuerdan ubicaciones de comida durante años", "Los cachorros permanecen con la madre hasta 2,5 años"]
  },
  tiburon: {
    desc: "Los tiburones llevan 450 millones de años en los océanos, anteriores a los dinosaurios y a los árboles. Son una de las criaturas más perfectamente adaptadas a la depredación que existen.",
    stats: [ { val: "3000 kg", label: "Peso máx. (blanco)" }, { val: "56 km/h", label: "Veloc. máx." }, { val: "70 años", label: "Vida" }, { val: "Carnívoro", label: "Dieta" } ],
    curiosidades: ["Tienen varias filas de dientes: pierden y regeneran miles en su vida", "No tienen huesos, su esqueleto es de cartílago", "Detectan campos eléctricos con ampollas de Lorenzini", "Deben nadar constantemente para respirar (la mayoría)", "Su piel tiene escamas llamadas dentículos dérmicos", "Pueden detectar una gota de sangre en 100 litros de agua"]
  },
  delfin: {
    desc: "Los delfines son mamíferos marinos de inteligencia extraordinaria. Usan ecolocalización emitiendo hasta 1000 clics por segundo y analizando los ecos para crear mapas mentales del entorno.",
    stats: [ { val: "300 kg", label: "Peso" }, { val: "60 km/h", label: "Veloc. máx." }, { val: "50 años", label: "Vida" }, { val: "Piscívoro", label: "Dieta" } ],
    curiosidades: ["Duermen con un solo hemisferio cerebral a la vez", "Cada individuo tiene un silbido-nombre único", "Usan esponjas marinas como herramienta para buscar comida", "Reconocen su reflejo en espejos (autoconciencia)", "Se comunican con dialectos regionales distintos", "Ayudan a otros delfines heridos manteniéndolos a flote"]
  },
  pulpo: {
    desc: "El pulpo tiene tres corazones, sangre azul y nueve cerebros: uno central y uno en cada tentáculo que toma decisiones autónomas. Es el invertebrado más inteligente conocido.",
    stats: [ { val: "10 kg", label: "Peso máx." }, { val: "3-5 años", label: "Vida" }, { val: "40 km/h", label: "Veloc. (chorro)" }, { val: "Carnívoro", label: "Dieta" } ],
    curiosidades: ["Dos tercios de sus neuronas están en los tentáculos", "Puede cambiar color y textura en milisegundos", "Escapa de acuarios abriendo tapas de tanques", "Las hembras mueren tras poner y cuidar sus huevos", "Tienen visión del color a pesar de ser daltónicos", "Pueden imitar a otras especies (pulpo mímico)"]
  },
  tortuga_marina: {
    desc: "Las tortugas marinas migran miles de kilómetros usando el campo magnético terrestre como GPS. Regresan con precisión de metros a la playa exacta donde nacieron décadas antes.",
    stats: [ { val: "900 kg", label: "Peso máx." }, { val: "80+ años", label: "Vida" }, { val: "35 km/h", label: "Veloc. agua" }, { val: "Herbívora/Omnívora", label: "Dieta" } ],
    curiosidades: ["Navegan con el campo magnético como GPS biológico", "Bucean hasta 1000 metros de profundidad", "Las hembras anidan exactamente donde nacieron", "Pueden aguantar la respiración más de 7 horas", "Su caparazón tiene 60 huesos fusionados", "Llevan 100 millones de años casi sin cambios evolutivos"]
  },
  pez_payaso: {
    desc: "El pez payaso vive en simbiosis perfecta con las anémonas. Su moco especial lo protege del veneno de los tentáculos, y a cambio ahuyenta a los depredadores de su anfitriona.",
    stats: [ { val: "250 g", label: "Peso" }, { val: "11 cm", label: "Longitud" }, { val: "10 años", label: "Vida" }, { val: "Omnívoro", label: "Dieta" } ],
    curiosidades: ["Todos nacen machos: el dominante se vuelve hembra", "Nunca se aleja más de 1 metro de su anémona", "Se comunica con chasquidos y gruñidos", "Su simbiosis beneficia a ambas especies mutuamente", "Reconoce a su pareja por el sonido", "La película Buscando a Nemo invirtió la biología real"]
  }
};



/* -------- Abrir modal con datos del animal -------- */
function openAnimalDetail(animal, habitat) {
  const key  = ANIMAL_KEYS[animal.n] || animal.n.toLowerCase().replace(/\s+/g, "_");
  const data = ANIMAL_DATA[key] || {};

  /* Header */
  const headerImg = document.getElementById("adHeaderImg");
  headerImg.src = animal.img;
  headerImg.alt = animal.n;
  /* Fondo borroso: misma imagen como variable CSS */
  document.getElementById("adHeader").style.setProperty("--ad-bg-img", `url('${animal.img}')`);
  document.getElementById("adHabitatPill").textContent = habitat.nombre;
  document.getElementById("adAnimalTitle").textContent = animal.n;

  /* Tags — vacíos (clima y región ya aparecen en el modal del hábitat) */
  document.getElementById("adTags").innerHTML = "";

  /* Descripción */
  document.getElementById("adDesc").textContent =
    data.desc || `El ${animal.n} es una especie característica del hábitat ${habitat.nombre}.`;

  /* Facts: stats arriba como tarjetas, curiosidades abajo como chips */
  const factsEl = document.getElementById("adFacts");
  factsEl.innerHTML = "";

  /* Tarjetas de stats */
  const stats = data.stats || [];
  if (stats.length) {
    const statsRow = document.createElement("div");
    statsRow.className = "ad-stats-row";
    stats.forEach(s => {
      statsRow.innerHTML += `
        <div class="ad-stat-box">
          <span class="ad-stat-val">${s.val}</span>
          <span class="ad-stat-label">${s.label}</span>
        </div>`;
    });
    factsEl.appendChild(statsRow);
  }

  /* Chips de curiosidades */
  const curios = data.curiosidades || [];
  if (curios.length) {
    const chipsWrap = document.createElement("div");
    chipsWrap.className = "ad-chips-row";
    curios.forEach(c => {
      chipsWrap.innerHTML += `<div class="ad-fact-box"><span class="ad-fact-label">${c}</span></div>`;
    });
    factsEl.appendChild(chipsWrap);
  }

  /* Videos */
  loadVideo("adVideoAerea",  "adVideoAereaSrc",  `aerea/${key}.mp4`);
  loadVideo("adVideoFrontal","adVideoFrontalSrc",`frontal/${key}.mp4`);
  loadVideo("adVideoLateral","adVideoLateralSrc",`lateral/${key}.mp4`);

  /* Audio */
  document.getElementById("adAudioName").textContent = `Sonido del ${animal.n}`;
  const audioEl = document.getElementById("adAudio");
  document.getElementById("adAudioSrc").src = `sonidos/${key}.mp3`;
  audioEl.load();

  /* Abrir overlay */
  const adOverlay = document.getElementById("adOverlay");
  adOverlay.style.zIndex = "999999";
  adOverlay.classList.add("open");
  document.documentElement.style.overflow = "hidden";
}

function loadVideo(videoId, srcId, path) {
  const video = document.getElementById(videoId);
  const src   = document.getElementById(srcId);
  video.pause();
  src.src       = path;
  video.src     = path;
  video.loop    = true;
  video.muted   = true;
  video.load();
  video.addEventListener("canplay", function onCanPlay() {
    video.removeEventListener("canplay", onCanPlay);
    video.play().catch(() => {});
  });
}

function closeAnimalDetail() {
  document.getElementById("adOverlay").classList.remove("open");
  document.documentElement.style.overflow = "";

  /* Pausar videos y audio para liberar recursos */
  ["adVideoAerea","adVideoFrontal","adVideoLateral"].forEach(id => {
    const v = document.getElementById(id);
    v.pause();
    v.removeAttribute("src");
    v.load();
  });
  document.getElementById("adAudio").pause();
}


/* -------- INIT -------- */
document.getElementById("adClose").addEventListener("click", closeAnimalDetail);
document.getElementById("adOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeAnimalDetail();
});
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && document.getElementById("adOverlay").classList.contains("open")) {
    closeAnimalDetail();
  }
});