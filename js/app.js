/* =========================================================================
   Simulador PGN 2026 – lógica de la aplicación (sin dependencias, offline)
   ========================================================================= */
(function () {
  'use strict';

  /* ---------------- Estado persistente ---------------- */
  const KEY = (window.CONCURSO && CONCURSO.storageKey) || 'pgn217_v1';
  const DEF = { resp: {}, comp: {}, sims: [], extra: [], settings: { shuffle: true, theme: null }, exam: null };
  let S;
  try { S = Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { S = Object.assign({}, DEF); }
  S.settings = Object.assign({}, DEF.settings, S.settings || {});
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* almacenamiento no disponible */ } }

  const ALL = () => window.BANCO.concat(S.extra.filter(q => q && q.id && Array.isArray(q.o)));
  const BYID = () => { const m = {}; ALL().forEach(q => m[q.id] = q); return m; };
  const COMPS = () => window.BANCO_COMP;
  const LET = ['A', 'B', 'C', 'D'];
  const DAY = 86400000;
  const LEITNER = [0, 0, 1, 3, 7, 16, 35]; // días por caja

  /* ---------------- Utilidades ---------------- */
  const $ = s => document.querySelector(s);
  const app = $('#app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const trunc2 = x => Math.floor(x * 100) / 100;
  const pct = (a, b) => b ? trunc2(a / b * 100) : 0;
  const fmtT = ms => { ms = Math.max(0, ms); const s = Math.floor(ms / 1000); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), ss = s % 60; return (h ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(ss).padStart(2, '0'); };
  const fmtD = t => new Date(t).toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' + new Date(t).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  const ejeN = k => (EJES[k] ? EJES[k].n : k);
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  function toast(msg) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2200); }
  function colorFor(v) { return v >= 80 ? 'var(--ok)' : v >= 65 ? 'var(--primary-2)' : v >= 50 ? 'var(--warn)' : 'var(--bad)'; }

  function bars(rows, opts) {
    opts = opts || {};
    return '<div class="bars">' + rows.map(r => {
      const v = r.v == null ? 0 : r.v;
      return `<div class="b"><div>${esc(r.l)}${r.s ? ` <span class="muted small">${esc(r.s)}</span>` : ''}</div>
      <div class="track"><i style="width:${Math.min(100, v)}%;background:${r.c || colorFor(v)}"></i>${opts.th ? `<span class="th" style="left:${opts.th}%"></span>` : ''}</div>
      <div class="val">${r.na ? '—' : v.toFixed(opts.dec == null ? 0 : opts.dec) + (opts.unit == null ? '%' : opts.unit)}</div></div>`;
    }).join('') + '</div>';
  }

  /* ---------------- Registro de respuestas / Leitner ---------------- */
  function record(q, ok) {
    const r = S.resp[q.id] || { n: 0, ok: 0, box: 1, due: 0 };
    r.n++; if (ok) r.ok++;
    r.last = ok; r.t = Date.now();
    r.box = ok ? Math.min(6, (r.box || 1) + 1) : 1;
    r.due = Date.now() + LEITNER[r.box] * DAY;
    S.resp[q.id] = r;
  }
  function stats(filterFn) {
    let n = 0, ok = 0;
    ALL().forEach(q => { if (filterFn && !filterFn(q)) return; const r = S.resp[q.id]; if (r) { n += r.n; ok += r.ok; } });
    return { n, ok, p: pct(ok, n) };
  }
  const dueItems = () => ALL().filter(q => { const r = S.resp[q.id]; return r && r.ok < r.n && r.box < 6 && r.due <= Date.now(); });

  /* ---------------- Ficha de ítem (formato UdeA) ---------------- */
  function itemHTML(q, o) {
    // o: {num, order, sel (índice original), reveal, showMeta, comp}
    const order = o.order || [0, 1, 2, 3].slice(0, q.o.length);
    const meta = o.comp
      ? `<div>Competencia</div><div><b>${esc(COMPETENCIAS[q.comp].n)}</b></div><div>Nivel exigido</div><div>${esc(COMPETENCIAS[q.comp].nivel)} · ${esc(COMPETENCIAS[q.comp].tipo)}</div>`
      : `<div>Eje temático</div><div><b>${esc(ejeN(q.eje))}</b></div><div>Nivel de dificultad</div><div>${cap(q.dif)}</div><div>Dimensión cognitiva</div><div>${cap(q.dim)}</div>`;
    let h = `<div class="ficha">${o.showMeta === false ? '' : `<div class="meta">${meta}</div>`}
      <div class="enun">${o.num ? `<span class="qn">${o.num}.</span>` : ''}${esc(q.e)}</div><div class="opts">`;
    order.forEach((oi, di) => {
      let cls = '';
      if (o.reveal) {
        if (o.comp) cls = q.p[oi] === 2 ? 'correct' : (o.sel === oi ? 'wrong' : '');
        else cls = oi === q.c ? 'correct' : (o.sel === oi ? 'wrong' : '');
        if (o.comp && o.sel === oi && q.p[oi] === 2) cls = 'correct';
      } else if (o.sel === oi) cls = 'sel';
      h += `<button class="opt ${cls}" data-pick="${oi}" ${o.reveal ? 'disabled' : ''} aria-label="Opción ${LET[di]}"><span class="L">${LET[di]}</span><span class="T">${esc(q.o[oi])}${o.reveal && o.comp ? ` <span class="chip ${q.p[oi] === 2 ? 'ok' : q.p[oi] === 1 ? 'warn' : 'bad'}">${q.p[oi] === 2 ? 'Máximo ajuste' : q.p[oi] === 1 ? 'Ajuste parcial' : 'Bajo ajuste'}</span>` : ''}</span></button>`;
    });
    h += '</div>';
    if (o.reveal) {
      h += `<div class="just"><h4>Justificación</h4>`;
      order.forEach((oi, di) => {
        const good = o.comp ? q.p[oi] === 2 : oi === q.c;
        h += `<div class="jr ${good ? 'ok' : ''}"><b>${LET[di]}</b><div>${esc(q.j[oi])}</div></div>`;
      });
      if (o.comp) {
        const c = COMPETENCIAS[q.comp];
        h += `<div class="ref"><b>${esc(c.n)}</b> – ${esc(c.nivelTxt)}<br>Conductas asociadas: ${c.conductas.map(esc).join(' · ')}</div>`;
      } else if (q.r) h += `<div class="ref">📖 Referencia: ${esc(q.r)}</div>`;
      h += '</div>';
    }
    return h + '</div>';
  }
  const mkOrder = q => S.settings.shuffle ? shuffle(q.o.map((_, i) => i)) : q.o.map((_, i) => i);

  /* ---------------- Navegación ---------------- */
  let timerId = null;
  let keyHandler = null;
  function setKeys(fn) { keyHandler = fn; }
  document.addEventListener('keydown', e => {
    if (!keyHandler || e.repeat || (e.target && e.target.matches && e.target.matches('input,select,textarea'))) return;
    keyHandler(e);
  });

  const VIEWS = {};
  function route() {
    const v = (location.hash || '#inicio').slice(1).split('/')[0] || 'inicio';
    if (timerId && v !== 'simulacro') { clearInterval(timerId); timerId = null; }
    setKeys(null);
    document.querySelectorAll('.sidenav a').forEach(a => a.classList.toggle('active', a.dataset.v === v));
    $('#sidenav').classList.remove('open');
    (VIEWS[v] || VIEWS.inicio)();
    app.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  $('#menuBtn').onclick = () => $('#sidenav').classList.toggle('open');
  function applyTheme() { if (S.settings.theme) document.documentElement.setAttribute('data-theme', S.settings.theme); else document.documentElement.removeAttribute('data-theme'); }
  $('#themeBtn').onclick = () => {
    const dark = S.settings.theme ? S.settings.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    S.settings.theme = dark ? 'light' : 'dark'; save(); applyTheme();
  };
  applyTheme();

  /* =========================== INICIO =========================== */
  VIEWS.inicio = function () {
    const all = ALL();
    const seen = all.filter(q => S.resp[q.id]).length;
    const g = stats();
    const last = S.sims[S.sims.length - 1];
    const ejeStats = Object.keys(EJES).map(k => ({ k, ...stats(q => q.eje === k) })).filter(x => x.n >= 3).sort((a, b) => a.p - b.p);
    const due = dueItems().length;
    app.innerHTML = `
      <h1>Hola, aspirante 👋</h1>
      <p class="sub">${esc(CONCURSO.cargo)} · ${esc(CONCURSO.dependencia)} · Operador: ${esc(CONCURSO.operador)}</p>
      <div class="grid g4">
        <div class="kpi"><div class="v">${all.length + COMPS().length}</div><div class="l">ítems en el banco (${all.length} conocimientos · ${COMPS().length} comportamentales)</div></div>
        <div class="kpi"><div class="v">${pct(seen, all.length).toFixed(0)}%</div><div class="l">cobertura del banco (${seen}/${all.length})</div></div>
        <div class="kpi"><div class="v" style="color:${g.n ? colorFor(g.p) : 'var(--muted)'}">${g.n ? g.p.toFixed(1) + '%' : '—'}</div><div class="l">acierto acumulado (${g.n} respuestas)</div></div>
        <div class="kpi"><div class="v">${last ? last.k.toFixed(2) : '—'}</div><div class="l">${last ? 'último simulacro · ' + (last.k >= CONCURSO.minimo ? 'aprobado' : 'por debajo de 65') : 'aún sin simulacros'}</div></div>
      </div>
      <div class="grid g2" style="margin-top:16px">
        <div class="card">
          <h3>¿Qué hago hoy?</h3>
          <div class="list-q">
            ${due ? `<a class="btn" href="#repaso">🔁 Repasar ${due} pregunta(s) pendientes</a>` : ''}
            ${ejeStats.length ? `<button class="btn ${due ? 'sec' : ''}" id="goWeak">🎯 Practicar mi eje más débil: ${esc(ejeN(ejeStats[0].k))} (${ejeStats[0].p.toFixed(0)}%)</button>` : `<a class="btn" href="#practica">🎯 Empezar a practicar por eje</a>`}
            <a class="btn sec" href="#simulacro">📝 Presentar un simulacro con tiempo</a>
            <a class="btn sec" href="#udea">🎓 Entender cómo pregunta la UdeA</a>
          </div>
        </div>
        <div class="card">
          <h3>Estructura de las pruebas (Res. 076 de 2026)</h3>
          <table class="t">
            <tr><th>Prueba</th><th>Carácter</th><th>Mínimo</th><th>Peso</th></tr>
            <tr><td>Conocimientos (núcleo general + específico)</td><td>Eliminatoria</td><td>65/100</td><td>70%</td></tr>
            <tr><td>Competencias comportamentales</td><td>Clasificatoria</td><td>—</td><td>20%</td></tr>
            <tr><td>Análisis de antecedentes</td><td>Clasificatoria</td><td>—</td><td>10%</td></tr>
          </table>
          <p class="small muted">Lista de elegibles: puntaje final ≥ 70% del máximo posible (art. 216 D.L. 262 de 2000). Las dos pruebas escritas se aplican el mismo día con lectura óptica y calificación estandarizada.</p>
        </div>
      </div>
      <div class="card">
        <div class="row"><h3 style="margin:0">Estado del concurso</h3><span class="spacer"></span><span class="chip">Corte: ${esc(CONCURSO.estado.corte)}</span></div>
        <p class="small" style="margin:8px 0"><b>Etapa actual:</b> ${esc(CONCURSO.estado.etapa)}</p>
        <table class="t"><tr><th>Actividad</th><th>Fecha</th></tr>${CONCURSO.estado.cronograma.map(c => `<tr><td>${esc(c[0])}</td><td>${esc(c[1])}</td></tr>`).join('')}</table>
        <ul class="clean small" style="margin-top:8px">${CONCURSO.estado.notas.map(n => `<li>${esc(n)}</li>`).join('')}</ul>
        <p class="small muted">Esta información no se actualiza sola: consulte los avisos en <b>${esc(CONCURSO.estado.portal)}</b> y actualice <code>js/config.js</code> cuando haya novedades.</p>
      </div>
      <div class="card">
        <h3>Desempeño por eje temático</h3>
        ${bars(Object.keys(EJES).map(k => { const s = stats(q => q.eje === k); return { l: EJES[k].ic + ' ' + EJES[k].n, s: s.n ? `(${s.n})` : '', v: s.p, na: !s.n }; }), { th: 65 })}
        <p class="small muted">La línea vertical marca el mínimo aprobatorio (65).</p>
      </div>`;
    const w = $('#goWeak'); if (w) w.onclick = () => startPractice({ ejes: [ejeStats[0].k], n: 10 });
  };

  /* =========================== SIMULACRO =========================== */
  const MODES = {
    oficial: { n: 'Simulacro completo', k: 90, c: 40, min: 240, d: '90 ítems de conocimientos (≈1/3 núcleo general, 2/3 específico) + 40 comportamentales = 130 ítems en 4 horas. Estructura PROVISIONAL, tomada del concurso de la Contraloría que operó la UdeA: la PGN aún no publica la Guía de Orientación de la prueba escrita.' },
    medio: { n: 'Simulacro medio', k: 45, c: 12, min: 120, d: '45 de conocimientos + 12 comportamentales en 2 horas. Mismo ritmo por pregunta del examen real.' },
    rapido: { n: 'Mini simulacro', k: 20, c: 6, min: 55, d: '20 de conocimientos + 6 comportamentales en 55 minutos.' }
  };
  function pickStratified(pool, n, preferUnseen) {
    const by = {};
    shuffle(pool).forEach(q => (by[q.eje] = by[q.eje] || []).push(q));
    if (preferUnseen) Object.values(by).forEach(a => a.sort((x, y) => (S.resp[x.id] ? 1 : 0) - (S.resp[y.id] ? 1 : 0)));
    const keys = shuffle(Object.keys(by)); const out = [];
    while (out.length < n && keys.some(k => by[k].length)) keys.forEach(k => { if (out.length < n && by[k].length) out.push(by[k].shift()); });
    return out;
  }
  function buildExam(mode, preferUnseen) {
    const M = MODES[mode];
    const all = ALL();
    const gen = all.filter(q => EJES[q.eje] && EJES[q.eje].nucleo === 'general');
    const esp = all.filter(q => !EJES[q.eje] || EJES[q.eje].nucleo === 'especifico');
    const nG = Math.min(gen.length, Math.round(M.k / 3));
    const nE = Math.min(esp.length, M.k - nG);
    const kItems = pickStratified(gen, nG, preferUnseen).concat(pickStratified(esp, nE, preferUnseen));
    const cItems = shuffle(COMPS()).slice(0, M.c);
    return {
      mode, start: Date.now(), dur: M.min * 60000, cur: 0, ans: {}, marks: {},
      items: kItems.map(q => ({ t: 'k', id: q.id, order: mkOrder(q) })).concat(cItems.map(q => ({ t: 'c', id: q.id, order: shuffle([0, 1, 2]) })))
    };
  }
  VIEWS.simulacro = function () {
    if (S.exam && !S.exam.done) return renderExam();
    if (S.exam && S.exam.done) return renderResult(S.exam);
    app.innerHTML = `<h1>Simulacro de examen</h1>
      <p class="sub">Condiciones de aplicación: cuadernillo, hoja de respuestas tipo lectura óptica, sin retroalimentación hasta el final, tiempo controlado.</p>
      <div class="grid g3">${Object.entries(MODES).map(([k, m]) => `<div class="card"><h3>${m.n}</h3><p class="small muted">${m.d}</p><button class="btn" data-mode="${k}">Iniciar</button></div>`).join('')}</div>
      <div class="card"><label class="row"><input type="checkbox" id="unseen" checked> Priorizar preguntas que aún no he respondido</label>
      <label class="row" style="margin-top:6px"><input type="checkbox" id="shuf" ${S.settings.shuffle ? 'checked' : ''}> Barajar el orden de las opciones (evita memorizar la letra)</label></div>
      <div class="note"><b>Supuestos por confirmar:</b> el número de preguntas, la duración y la regla de calificación saldrán en la Guía de Orientación al aspirante para la prueba escrita (art. 18 de la Res. 076 de 2026), que al ${esc(CONCURSO.estado.corte)} no se había publicado. Mientras tanto se usa el esquema que la UdeA aplicó en la Contraloría: la pregunta sin responder vale cero y no hay penalización por error (responda todas). Primero va el cuadernillo de conocimientos y luego el comportamental. Atajos: <span class="kbd">A</span>–<span class="kbd">D</span> o <span class="kbd">1</span>–<span class="kbd">4</span> marcar, <span class="kbd">←</span> <span class="kbd">→</span> navegar, <span class="kbd">M</span> marcar para revisar.</div>
      ${S.sims.length ? `<h2>Historial</h2><div class="card">${histTable()}</div>` : ''}`;
    $('#shuf').onchange = e => { S.settings.shuffle = e.target.checked; save(); };
    app.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => {
      S.exam = buildExam(b.dataset.mode, $('#unseen').checked); save(); renderExam();
    });
  };
  function histTable() {
    return `<table class="t"><tr><th>Fecha</th><th>Tipo</th><th>Conocimientos</th><th>Comportamental</th><th>Tiempo</th></tr>${S.sims.slice().reverse().map(s => `<tr><td>${fmtD(s.date)}</td><td>${esc(MODES[s.mode] ? MODES[s.mode].n : s.mode)}</td><td><b class="${s.k >= 65 ? 'pass' : 'fail'}">${s.k.toFixed(2)}</b> <span class="muted small">(${s.okK}/${s.nK})</span></td><td>${s.c.toFixed(2)}</td><td>${fmtT(s.used)}</td></tr>`).join('')}</table>`;
  }
  function getQ(it, byid) { return it.t === 'k' ? byid[it.id] : COMPS().find(c => c.id === it.id); }

  function renderExam() {
    const E = S.exam, byid = BYID();
    E.items = E.items.filter(it => getQ(it, byid));
    const nK = E.items.filter(i => i.t === 'k').length;
    const draw = () => {
      const it = E.items[E.cur], q = getQ(it, byid);
      const answered = Object.keys(E.ans).length;
      const sec = it.t === 'k' ? 'Cuadernillo 1 · Prueba de conocimientos' : 'Cuadernillo 2 · Prueba de competencias comportamentales';
      app.innerHTML = `
        <div class="exambar"><span class="timer" id="timer">--:--</span><span class="small muted">${esc(MODES[E.mode].n)}</span>
          <div class="progress"><i style="width:${pct(answered, E.items.length)}%"></i></div>
          <span class="small">${answered}/${E.items.length} respondidas</span>
          <button class="btn sm danger" id="finish">Entregar</button></div>
        <div class="examlayout"><div>
          <div class="row" style="margin-bottom:8px"><span class="chip">${sec}</span>${E.marks[E.cur] ? '<span class="chip warn">Marcada para revisar</span>' : ''}</div>
          ${itemHTML(q, { num: E.cur + 1, order: it.order, sel: E.ans[E.cur], comp: it.t === 'c', showMeta: false })}
          <div class="row" style="margin-top:12px">
            <button class="btn sec" id="prev" ${E.cur === 0 ? 'disabled' : ''}>← Anterior</button>
            <button class="btn sec" id="mark">${E.marks[E.cur] ? 'Quitar marca' : '⚑ Marcar para revisar'}</button>
            ${E.ans[E.cur] != null ? '<button class="btn sec" id="clear">Borrar respuesta</button>' : ''}
            <span class="spacer"></span>
            <button class="btn" id="next" ${E.cur === E.items.length - 1 ? 'disabled' : ''}>Siguiente →</button>
          </div>
        </div>
        <aside class="hoja"><h3>Hoja de respuestas</h3>
          ${E.items.map((x, i) => `${i === 0 ? '<div class="small muted" style="margin:4px 0">Conocimientos</div>' : ''}${i === nK ? '<div class="small muted" style="margin:8px 0 4px">Comportamental</div>' : ''}
            <div class="hrow ${i === E.cur ? 'cur' : ''} ${E.marks[i] ? 'mk' : ''}" data-go="${i}"><span class="n">${i + 1}</span>${LET.slice(0, x.order.length).map((L, di) => `<span class="bub ${E.ans[i] === x.order[di] ? 'on' : ''}">${L}</span>`).join('')}${x.order.length === 3 ? '<span></span>' : ''}</div>`).join('')}
          <div class="legend"><span>● respondida</span><span style="color:var(--warn)">n° marcada</span></div>
        </aside></div>`;
      app.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => pick(+b.dataset.pick));
      app.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(+b.dataset.go));
      $('#prev').onclick = () => go(E.cur - 1);
      $('#next').onclick = () => go(E.cur + 1);
      $('#mark').onclick = () => { E.marks[E.cur] = !E.marks[E.cur]; save(); draw(); };
      const cl = $('#clear'); if (cl) cl.onclick = () => { delete E.ans[E.cur]; save(); draw(); };
      $('#finish').onclick = () => {
        const left = E.items.length - Object.keys(E.ans).length;
        const mk = Object.values(E.marks).filter(Boolean).length;
        if (confirm(`¿Entregar el examen?${left ? `\n\nTiene ${left} pregunta(s) sin responder (valen cero).` : ''}${mk ? `\nTiene ${mk} pregunta(s) marcadas para revisar.` : ''}`)) finishExam();
      };
      tick();
      const h = app.querySelector('.hrow.cur'); if (h) h.scrollIntoView({ block: 'nearest' });
    };
    // El avance automático solo ocurre si el usuario sigue en la misma pregunta (evita saltos por doble pulsación).
    const pick = oi => { const at = E.cur; E.ans[at] = oi; save(); draw(); if (at < E.items.length - 1) setTimeout(() => { if (S.exam === E && !E.done && E.cur === at) go(at + 1); }, 180); };
    const go = i => { if (i < 0 || i >= E.items.length) return; E.cur = i; save(); draw(); window.scrollTo(0, 0); };
    const tick = () => {
      const left = E.start + E.dur - Date.now(); const t = $('#timer'); if (!t) return;
      t.textContent = '⏱ ' + fmtT(left); t.classList.toggle('low', left < 10 * 60000);
      if (left <= 0) { clearInterval(timerId); timerId = null; alert('Se agotó el tiempo. El examen se entregará automáticamente.'); finishExam(); }
    };
    if (timerId) clearInterval(timerId);
    timerId = setInterval(tick, 1000);
    setKeys(e => {
      const k = e.key.toLowerCase(); const it = E.items[E.cur];
      const idx = 'abcd'.indexOf(k) >= 0 ? 'abcd'.indexOf(k) : '1234'.indexOf(k);
      if (idx >= 0 && idx < it.order.length) { e.preventDefault(); pick(it.order[idx]); }
      else if (e.key === 'ArrowRight') go(E.cur + 1);
      else if (e.key === 'ArrowLeft') go(E.cur - 1);
      else if (k === 'm') { E.marks[E.cur] = !E.marks[E.cur]; save(); draw(); }
    });
    draw();
  }

  function finishExam() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    const E = S.exam, byid = BYID();
    let okK = 0, nK = 0, pC = 0, nC = 0;
    const ag = { eje: {}, dim: {}, dif: {}, comp: {} };
    const add = (o, k, ok, max) => { o[k] = o[k] || { n: 0, ok: 0 }; o[k].n += max || 1; o[k].ok += ok; };
    E.items.forEach((it, i) => {
      const q = getQ(it, byid); const a = E.ans[i];
      if (it.t === 'k') {
        nK++; const ok = a === q.c ? 1 : 0; okK += ok;
        add(ag.eje, q.eje, ok); add(ag.dim, q.dim, ok); add(ag.dif, q.dif, ok);
        if (a != null) record(q, !!ok); else record(q, false);
      } else {
        nC++; const p = a != null ? q.p[a] : 0; pC += p; add(ag.comp, q.comp, p, 2);
        S.comp[q.id] = { p, t: Date.now() };
      }
    });
    E.done = true; E.end = Date.now();
    E.res = { okK, nK, k: pct(okK, nK), c: pct(pC, nC * 2), ag };
    S.sims.push({ date: E.end, mode: E.mode, okK, nK, k: E.res.k, c: E.res.c, used: E.end - E.start, eje: ag.eje });
    save(); renderResult(E);
  }

  function renderResult(E) {
    const R = E.res, byid = BYID();
    const pass = R.k >= CONCURSO.minimo;
    const nG = Object.entries(R.ag.eje).filter(([k]) => EJES[k] && EJES[k].nucleo === 'general').reduce((a, [, v]) => ({ n: a.n + v.n, ok: a.ok + v.ok }), { n: 0, ok: 0 });
    const nE = { n: R.nK - nG.n, ok: R.okK - nG.ok };
    app.innerHTML = `<h1>Resultado del simulacro</h1><p class="sub">${esc(MODES[E.mode].n)} · ${fmtD(E.end)} · tiempo usado ${fmtT(E.end - E.start)}</p>
      <div class="card result-hero">
        <div><div class="big ${pass ? 'pass' : 'fail'}">${R.k.toFixed(2)}</div><div class="muted small">Conocimientos (0-100)</div></div>
        <div style="flex:1;min-width:220px"><h3>${pass ? '✅ Supera el mínimo aprobatorio (65)' : '⚠️ Por debajo del mínimo aprobatorio (65)'}</h3>
        <p class="small muted">${R.okK} de ${R.nK} correctas. Núcleo general: ${pct(nG.ok, nG.n).toFixed(1)}% · Núcleo específico: ${pct(nE.ok, nE.n).toFixed(1)}%.<br>
        La UdeA reporta una calificación <b>estandarizada</b>; aquí se muestra el porcentaje de aciertos como aproximación. Un puntaje propio ≥ 75 da margen de seguridad.</p></div>
        <div><div class="big" style="color:var(--primary)">${R.c.toFixed(2)}</div><div class="muted small">Comportamental (ajuste 0-100)</div></div>
      </div>
      <div class="grid g2">
        <div class="card"><h3>Por eje temático</h3>${bars(Object.entries(R.ag.eje).map(([k, v]) => ({ l: ejeN(k), s: `${v.ok}/${v.n}`, v: pct(v.ok, v.n) })).sort((a, b) => a.v - b.v), { th: 65 })}</div>
        <div class="card"><h3>Por dimensión cognitiva (Bloom)</h3>${bars(['recordar', 'comprender', 'aplicar', 'analizar'].filter(d => R.ag.dim[d]).map(d => ({ l: cap(d), s: `${R.ag.dim[d].ok}/${R.ag.dim[d].n}`, v: pct(R.ag.dim[d].ok, R.ag.dim[d].n) })), { th: 65 })}
          <h3 style="margin-top:14px">Por nivel de dificultad</h3>${bars(['bajo', 'medio', 'alto'].filter(d => R.ag.dif[d]).map(d => ({ l: cap(d), s: `${R.ag.dif[d].ok}/${R.ag.dif[d].n}`, v: pct(R.ag.dif[d].ok, R.ag.dif[d].n) })), { th: 65 })}
          <h3 style="margin-top:14px">Competencias comportamentales</h3>${bars(Object.entries(R.ag.comp).map(([k, v]) => ({ l: COMPETENCIAS[k].n + ' (' + COMPETENCIAS[k].nivel + ')', v: pct(v.ok, v.n) })))}</div>
      </div>
      <div class="card"><h3>Puntaje final estimado</h3>
        <div class="row"><label class="small">Su puntaje estimado en análisis de antecedentes (0-100):</label><input type="number" id="ant" min="0" max="100" value="${S.settings.ant || 50}" style="width:100px"></div>
        <p id="finalTxt" style="margin:10px 0 0"></p></div>
      <div class="card"><div class="row"><h3 style="margin:0">Revisión del cuadernillo</h3><span class="spacer"></span>
        <select id="filt" style="width:auto"><option value="bad">Incorrectas y sin responder</option><option value="mk">Marcadas para revisar</option><option value="all">Todas</option></select></div>
        <div id="rev" style="margin-top:12px"></div></div>
      <div class="row"><button class="btn" id="newEx">Nuevo simulacro</button><a class="btn sec" href="#repaso">Repasar errores</a></div>`;
    const calc = () => {
      const a = Math.max(0, Math.min(100, +$('#ant').value || 0)); S.settings.ant = a; save();
      const f = trunc2(R.k * .7 + R.c * .2 + a * .1);
      $('#finalTxt').innerHTML = pass
        ? `Final ponderado: <b>${f.toFixed(2)}</b> = ${R.k.toFixed(2)}×70% + ${R.c.toFixed(2)}×20% + ${a}×10% → ${f >= 70 ? '<span class="chip ok">integraría la lista de elegibles (≥70)</span>' : '<span class="chip warn">no alcanzaría el 70 para lista de elegibles</span>'}`
        : `Con menos de 65 en conocimientos el aspirante queda eliminado y no se califican las demás pruebas.`;
    };
    $('#ant').oninput = calc; calc();
    const showRev = () => {
      const f = $('#filt').value;
      const rows = E.items.map((it, i) => ({ it, i, q: getQ(it, byid) })).filter(({ it, i, q }) => {
        if (f === 'all') return true; if (f === 'mk') return E.marks[i];
        return it.t === 'k' ? E.ans[i] !== q.c : (E.ans[i] == null || q.p[E.ans[i]] < 2);
      });
      $('#rev').innerHTML = rows.length ? rows.map(({ it, i, q }) => `<div style="margin-bottom:14px">${itemHTML(q, { num: i + 1, order: it.order, sel: E.ans[i], reveal: true, comp: it.t === 'c' })}${E.ans[i] == null ? '<span class="chip bad" style="margin-top:6px">Sin responder</span>' : ''}</div>`).join('') : '<p class="muted">No hay preguntas en este filtro. 🎉</p>';
    };
    $('#filt').onchange = showRev; showRev();
    $('#newEx').onclick = () => { S.exam = null; save(); VIEWS.simulacro(); };
  }

  /* =========================== PRÁCTICA =========================== */
  let PR = null;
  function startPractice(cfg) {
    let pool = ALL().filter(q => (!cfg.ejes || cfg.ejes.includes(q.eje)) && (!cfg.dif || cfg.dif === 'todas' || q.dif === cfg.dif) && (!cfg.dim || cfg.dim === 'todas' || q.dim === cfg.dim));
    if (cfg.src === 'nuevas') pool = pool.filter(q => !S.resp[q.id]);
    if (cfg.src === 'falladas') pool = pool.filter(q => S.resp[q.id] && S.resp[q.id].ok < S.resp[q.id].n);
    if (cfg.list) pool = cfg.list;
    if (!pool.length) { toast('No hay preguntas con esos filtros.'); return; }
    PR = { list: shuffle(pool).slice(0, cfg.n || 10), i: 0, res: [], title: cfg.title || 'Práctica' };
    if (location.hash !== '#practica') { location.hash = '#practica'; } else renderPractice();
  }
  VIEWS.practica = function () {
    if (PR && PR.i < PR.list.length) return renderPractice();
    if (PR && PR.i >= PR.list.length && PR.res.length) return renderPracticeEnd();
    app.innerHTML = `<h1>Práctica por eje temático</h1><p class="sub">Retroalimentación inmediata con la justificación de cada opción, como en las fichas técnicas de la UdeA.</p>
      <div class="card"><h3>Ejes temáticos</h3>
        <div class="row small" style="margin-bottom:8px"><button class="btn sm sec" id="allE">Todos</button><button class="btn sm sec" id="genE">Núcleo general</button><button class="btn sm sec" id="espE">Núcleo específico</button><button class="btn sm sec" id="noneE">Ninguno</button></div>
        <div class="checks">${Object.entries(EJES).map(([k, e]) => `<label><input type="checkbox" value="${k}" checked> ${e.ic} ${esc(e.n)} <span class="muted small">(${ALL().filter(q => q.eje === k).length})</span></label>`).join('')}</div></div>
      <div class="card grid g4">
        <div><label class="f">Dificultad</label><select id="dif"><option value="todas">Todas</option><option>bajo</option><option>medio</option><option>alto</option></select></div>
        <div><label class="f">Dimensión cognitiva</label><select id="dim"><option value="todas">Todas</option><option>recordar</option><option>comprender</option><option>aplicar</option><option>analizar</option></select></div>
        <div><label class="f">Preguntas</label><select id="src"><option value="todas">Todas</option><option value="nuevas">Solo no vistas</option><option value="falladas">Solo las que he fallado</option></select></div>
        <div><label class="f">Cantidad</label><select id="n"><option>5</option><option selected>10</option><option>20</option><option>40</option><option value="999">Todas</option></select></div>
      </div>
      <button class="btn" id="go">Comenzar práctica</button>`;
    const boxes = () => app.querySelectorAll('.checks input');
    const setB = fn => boxes().forEach(b => b.checked = fn(b.value));
    $('#allE').onclick = () => setB(() => true); $('#noneE').onclick = () => setB(() => false);
    $('#genE').onclick = () => setB(k => EJES[k].nucleo === 'general'); $('#espE').onclick = () => setB(k => EJES[k].nucleo === 'especifico');
    $('#go').onclick = () => startPractice({ ejes: [...boxes()].filter(b => b.checked).map(b => b.value), dif: $('#dif').value, dim: $('#dim').value, src: $('#src').value, n: +$('#n').value });
  };
  function renderPractice() {
    const q = PR.list[PR.i]; if (!PR.order) PR.order = mkOrder(q);
    const draw = (sel) => {
      const rev = sel != null;
      app.innerHTML = `<div class="row" style="margin-bottom:10px"><h1 style="font-size:20px">${esc(PR.title)}</h1><span class="spacer"></span><span class="chip">${PR.i + 1} / ${PR.list.length}</span><span class="chip ok">${PR.res.filter(Boolean).length} ✓</span><span class="chip bad">${PR.res.filter(x => x === false).length} ✗</span><button class="btn sm sec" id="quit">Terminar</button></div>
        <div class="progress" style="margin-bottom:14px"><i style="width:${pct(PR.i, PR.list.length)}%"></i></div>
        ${itemHTML(q, { num: PR.i + 1, order: PR.order, sel, reveal: rev })}
        ${rev ? `<div class="row" style="margin-top:12px"><span class="chip ${sel === q.c ? 'ok' : 'bad'}">${sel === q.c ? '¡Correcto!' : 'Incorrecto · la respuesta era ' + LET[PR.order.indexOf(q.c)]}</span><span class="spacer"></span><button class="btn" id="nx">${PR.i + 1 < PR.list.length ? 'Siguiente →' : 'Ver resumen'}</button></div>` : '<p class="small muted" style="margin-top:10px">Atajos: <span class="kbd">A</span>–<span class="kbd">D</span> para responder, <span class="kbd">Enter</span> para continuar.</p>'}`;
      app.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => answer(+b.dataset.pick));
      $('#quit').onclick = () => { PR.list = PR.list.slice(0, PR.i + (rev ? 1 : 0)); if (!PR.res.length) { PR = null; VIEWS.practica(); } else { PR.i = PR.list.length; renderPracticeEnd(); } };
      const nx = $('#nx'); if (nx) { nx.onclick = next; nx.focus(); }
      setKeys(e => {
        const k = e.key.toLowerCase(); const idx = 'abcd'.indexOf(k) >= 0 ? 'abcd'.indexOf(k) : '1234'.indexOf(k);
        if (!rev && idx >= 0) answer(PR.order[idx]); else if (rev && e.key === 'Enter') { e.preventDefault(); next(); }
      });
    };
    const answer = oi => { const ok = oi === q.c; record(q, ok); PR.res.push(ok); save(); draw(oi); };
    const next = () => { PR.i++; PR.order = null; if (PR.i < PR.list.length) renderPractice(); else renderPracticeEnd(); window.scrollTo(0, 0); };
    draw(null);
  }
  function renderPracticeEnd() {
    const ok = PR.res.filter(Boolean).length, n = PR.res.length, p = pct(ok, n);
    const wrong = PR.list.filter((q, i) => PR.res[i] === false);
    app.innerHTML = `<h1>Resumen de la práctica</h1><div class="card result-hero"><div class="big" style="color:${colorFor(p)}">${p.toFixed(0)}%</div><div><h3>${ok} de ${n} correctas</h3><p class="muted small">Las preguntas falladas quedaron programadas en el repaso inteligente.</p></div></div>
      <div class="row">${wrong.length ? '<button class="btn" id="rw">Repetir las falladas</button>' : ''}<button class="btn sec" id="nw">Nueva práctica</button></div>`;
    const rw = $('#rw'); if (rw) rw.onclick = () => startPractice({ list: wrong, n: wrong.length, title: 'Repetición de falladas' });
    $('#nw').onclick = () => { PR = null; VIEWS.practica(); };
  }

  /* =========================== COMPORTAMENTAL =========================== */
  let CP = null;
  VIEWS.comportamental = function () {
    if (CP && CP.i < CP.list.length) return renderComp();
    const sc = k => { const it = COMPS().filter(c => c.comp === k && S.comp[c.id]); return it.length ? pct(it.reduce((a, c) => a + S.comp[c.id].p, 0), it.length * 2) : null; };
    app.innerHTML = `<h1>Competencias comportamentales</h1>
      <p class="sub">Prueba clasificatoria (20%). Formato UdeA: una situación laboral y tres opciones; cada opción refleja un nivel distinto de ajuste a la competencia. Basado en el Diccionario de Competencias de la PGN y los niveles exigidos en su ficha.</p>
      <div class="note" style="margin-bottom:16px"><b>Clave para responder:</b> la opción de mayor ajuste suele ser la que (1) resuelve el problema de fondo, (2) actúa dentro de las normas y canales formales, (3) agrega método, seguimiento o mejora para el futuro y (4) involucra a quien corresponde. Desconfíe de opciones que solo cumplen lo mínimo, trasladan el problema a otros o esperan instrucciones.</div>
      <div class="grid g2">${Object.entries(COMPETENCIAS).map(([k, c]) => { const s = sc(k); return `<div class="card"><div class="row"><h3 style="margin:0">${esc(c.n)}</h3><span class="spacer"></span><span class="chip">Nivel ${c.nivel}</span></div>
        <p class="small muted" style="margin:6px 0">${esc(c.def)}</p><p class="small">${esc(c.nivelTxt)}</p>
        <div class="row"><button class="btn sm" data-c="${k}">Practicar (${COMPS().filter(x => x.comp === k).length})</button>${s != null ? `<span class="chip">ajuste ${s.toFixed(0)}%</span>` : ''}</div></div>`; }).join('')}</div>
      <button class="btn" id="allC">Practicar todas mezcladas</button>`;
    app.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { CP = { list: shuffle(COMPS().filter(c => c.comp === b.dataset.c)), i: 0 }; renderComp(); });
    $('#allC').onclick = () => { CP = { list: shuffle(COMPS()), i: 0 }; renderComp(); };
  };
  function renderComp() {
    const q = CP.list[CP.i]; const order = CP.order || (CP.order = shuffle([0, 1, 2]));
    const draw = sel => {
      const rev = sel != null;
      app.innerHTML = `<div class="row" style="margin-bottom:10px"><h1 style="font-size:20px">Competencias comportamentales</h1><span class="spacer"></span><span class="chip">${CP.i + 1} / ${CP.list.length}</span><button class="btn sm sec" id="quit">Terminar</button></div>
        ${itemHTML(q, { num: CP.i + 1, order, sel, reveal: rev, comp: true })}
        ${rev ? `<div class="row" style="margin-top:12px"><span class="chip ${q.p[sel] === 2 ? 'ok' : q.p[sel] === 1 ? 'warn' : 'bad'}">${q.p[sel] === 2 ? 'Máximo ajuste a la competencia' : q.p[sel] === 1 ? 'Ajuste parcial' : 'Bajo ajuste'}</span><span class="spacer"></span><button class="btn" id="nx">${CP.i + 1 < CP.list.length ? 'Siguiente →' : 'Finalizar'}</button></div>` : ''}`;
      app.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => answer(+b.dataset.pick));
      $('#quit').onclick = () => { CP = null; VIEWS.comportamental(); };
      const nx = $('#nx'); if (nx) { nx.onclick = next; nx.focus(); }
      setKeys(e => { const k = e.key.toLowerCase(); const idx = 'abc'.indexOf(k) >= 0 ? 'abc'.indexOf(k) : '123'.indexOf(k); if (!rev && idx >= 0) answer(order[idx]); else if (rev && e.key === 'Enter') { e.preventDefault(); next(); } });
    };
    const answer = oi => { S.comp[q.id] = { p: q.p[oi], t: Date.now() }; save(); draw(oi); };
    const next = () => { CP.i++; CP.order = null; if (CP.i < CP.list.length) renderComp(); else { CP = null; toast('Práctica comportamental finalizada'); VIEWS.comportamental(); } };
    draw(null);
  }

  /* =========================== REPASO =========================== */
  VIEWS.repaso = function () {
    const due = dueItems();
    const boxes = [1, 2, 3, 4, 5, 6].map(b => ALL().filter(q => S.resp[q.id] && S.resp[q.id].box === b).length);
    app.innerHTML = `<h1>Repaso inteligente</h1><p class="sub">Repetición espaciada (sistema Leitner): cada pregunta fallada vuelve hoy; si la acierta, reaparece en 1, 3, 7, 16 y 35 días. Así se fija la norma en la memoria de largo plazo.</p>
      <div class="grid g3"><div class="kpi"><div class="v">${due.length}</div><div class="l">pendientes para hoy</div></div>
      <div class="kpi"><div class="v">${boxes[0]}</div><div class="l">en caja 1 (recién falladas)</div></div>
      <div class="kpi"><div class="v">${boxes[4] + boxes[5]}</div><div class="l">dominadas (cajas 5-6)</div></div></div>
      <div class="card" style="margin-top:16px"><h3>Distribución por caja</h3>${bars(boxes.map((n, i) => ({ l: 'Caja ' + (i + 1), v: n, c: i < 2 ? 'var(--bad)' : i < 4 ? 'var(--warn)' : 'var(--ok)' })), { unit: '', dec: 0 })}</div>
      ${due.length ? `<button class="btn" id="go">Repasar ${due.length} pregunta(s)</button>` : '<p class="muted">No hay preguntas pendientes por hoy. Practique un eje nuevo o presente un simulacro.</p>'}`;
    const g = $('#go'); if (g) g.onclick = () => startPractice({ list: due, n: due.length, title: 'Repaso inteligente' });
  };

  /* =========================== ESTADÍSTICAS =========================== */
  VIEWS.estadisticas = function () {
    const sims = S.sims;
    const W = 640, H = 200, P = 30;
    let chart = '<p class="muted">Presente al menos un simulacro para ver la evolución.</p>';
    if (sims.length) {
      const xs = i => P + (sims.length === 1 ? (W - 2 * P) / 2 : i * (W - 2 * P) / (sims.length - 1));
      const ys = v => H - P - v / 100 * (H - 2 * P);
      chart = `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Evolución de puntajes">
        ${[0, 25, 50, 75, 100].map(v => `<line x1="${P}" x2="${W - P}" y1="${ys(v)}" y2="${ys(v)}" stroke="var(--border)"/><text x="4" y="${ys(v) + 4}">${v}</text>`).join('')}
        <line x1="${P}" x2="${W - P}" y1="${ys(65)}" y2="${ys(65)}" stroke="var(--bad)" stroke-dasharray="4 4"/><text x="${W - P - 60}" y="${ys(65) - 4}">mínimo 65</text>
        <polyline fill="none" stroke="var(--primary-2)" stroke-width="2.5" points="${sims.map((s, i) => xs(i) + ',' + ys(s.k)).join(' ')}"/>
        ${sims.map((s, i) => `<circle cx="${xs(i)}" cy="${ys(s.k)}" r="4" fill="var(--primary-2)"><title>${fmtD(s.date)}: ${s.k.toFixed(2)}</title></circle>`).join('')}</svg>`;
    }
    const dimRows = ['recordar', 'comprender', 'aplicar', 'analizar'].map(d => { const s = stats(q => q.dim === d); return { l: cap(d), s: s.n ? `(${s.n})` : '', v: s.p, na: !s.n }; });
    const difRows = ['bajo', 'medio', 'alto'].map(d => { const s = stats(q => q.dif === d); return { l: cap(d), s: s.n ? `(${s.n})` : '', v: s.p, na: !s.n }; });
    const cov = Object.keys(EJES).map(k => { const all = ALL().filter(q => q.eje === k); const seen = all.filter(q => S.resp[q.id]).length; return { l: EJES[k].n, s: `${seen}/${all.length}`, v: pct(seen, all.length), c: 'var(--primary-2)' }; });
    app.innerHTML = `<h1>Estadísticas</h1><p class="sub">Su desempeño acumulado en práctica y simulacros.</p>
      <div class="card"><h3>Evolución en simulacros (conocimientos)</h3>${chart}</div>
      <div class="grid g2"><div class="card"><h3>Acierto por dimensión cognitiva</h3>${bars(dimRows, { th: 65 })}<h3 style="margin-top:14px">Acierto por dificultad</h3>${bars(difRows, { th: 65 })}</div>
      <div class="card"><h3>Cobertura del banco por eje</h3>${bars(cov)}</div></div>
      ${sims.length ? `<div class="card"><h3>Historial de simulacros</h3>${histTable()}</div>` : ''}`;
  };

  /* =========================== GUÍA DE ESTUDIO =========================== */
  VIEWS.estudio = function () {
    app.innerHTML = `<h1>Guía de estudio</h1><p class="sub">Temario oficial de la ficha del cargo (${esc(CONCURSO.convocatoria)}), organizado en los dos núcleos de la prueba de conocimientos, con las normas que debe dominar.</p>
      ${['general', 'especifico'].map(n => `<h2>${esc(NUCLEOS[n])}</h2><div class="grid g2">${Object.entries(EJES).filter(([, e]) => e.nucleo === n).map(([k, e]) => { const s = stats(q => q.eje === k); return `<div class="card"><div class="row"><h3 style="margin:0">${e.ic} ${esc(e.n)}</h3><span class="spacer"></span>${s.n ? `<span class="chip" style="color:${colorFor(s.p)}">${s.p.toFixed(0)}%</span>` : ''}</div>
        <ul class="clean small">${(FICHAS[k] || []).map(f => `<li>${esc(f)}</li>`).join('')}</ul><button class="btn sm sec" data-e="${k}">Practicar este eje</button></div>`; }).join('')}</div>`).join('')}
      <h2>Funciones del cargo (enfoque de los casos)</h2><div class="card small"><p>${CONCURSO.enfoque}</p></div>`;
    app.querySelectorAll('[data-e]').forEach(b => b.onclick = () => startPractice({ ejes: [b.dataset.e], n: 10 }));
  };

  /* =========================== CÓMO PREGUNTA LA UdeA =========================== */
  VIEWS.udea = function () {
    const ex = ALL().find(q => q.id === 'ATU-02');
    app.innerHTML = `<h1>Cómo formula las preguntas la Universidad de Antioquia</h1>
      <p class="sub">Análisis construido a partir de las Guías de Orientación al Aspirante de la UdeA (Contraloría General 2024-2026, personerías y otros concursos) y de la Resolución 076 de 2026 de la PGN.</p>
      <div class="grid g3">${ESTILO_UDEA.map(x => `<div class="card"><h3>${esc(x.t)}</h3><p class="small">${esc(x.d)}</p></div>`).join('')}</div>
      <h2>Las cuatro dimensiones cognitivas</h2><div class="card"><ul class="clean">${Object.entries(DIMENSIONES).map(([k, v]) => `<li><b>${cap(k)}</b> — ${esc(v.split(': ')[1])} <span class="muted small">(${ALL().filter(q => q.dim === k).length} ítems en el banco)</span></li>`).join('')}</ul></div>
      <h2>Así se ve una ficha técnica de ítem</h2><p class="small muted">Cada pregunta de este simulador sigue el mismo esquema: eje temático, nivel de dificultad, dimensión cognitiva, enunciado, cuatro opciones y justificación de cada una.</p>
      ${ex ? itemHTML(ex, { order: [0, 1, 2, 3], sel: (ex.c + 1) % 4, reveal: true }) : ''}
      <h2>Estrategia para el día de la prueba</h2><div class="card"><ul class="clean">
        <li><b>Lea el final del enunciado primero</b>: la frase incompleta («el funcionario debe…», «es correcto afirmar que…») le dice qué se evalúa.</li>
        <li><b>Desconfíe del «porque…»</b>: una opción puede proponer una acción razonable con un fundamento jurídico falso. Las dos partes deben ser ciertas.</li>
        <li><b>Busque la opción que garantiza derechos y cumple la norma</b>: en casos de atención al ciudadano, la UdeA premia la que no pone barreras.</li>
        <li><b>Términos y números</b>: aparecen en ítems de «recordar» (10, 15, 30 días; 4 meses; 15 años). Memorícelos con tarjetas.</li>
        <li><b>Administre el tiempo</b>: ≈ 1,8 minutos por ítem. No deje preguntas en blanco: no hay penalización por error.</li>
        <li><b>Comportamental</b>: elija la conducta del nivel exigido (A, B o C según la competencia): proactiva, con método, seguimiento y dentro de las normas.</li></ul></div>`;
  };

  /* =========================== CALCULADORA =========================== */
  VIEWS.calculadora = function () {
    const AN = CONCURSO.antecedentes;
    app.innerHTML = `<h1>Calculadora de puntaje final</h1><p class="sub">Ponderación de la Resolución 076 de 2026 para empleos de los niveles profesional, asesor y ejecutivo.</p>
      <div class="card grid g3">
        <div><label class="f">Conocimientos (0-100) · 70%</label><input type="number" id="k" min="0" max="100" value="75"></div>
        <div><label class="f">Comportamental (0-100) · 20%</label><input type="number" id="c" min="0" max="100" value="70"></div>
        <div><label class="f">Análisis de antecedentes (0-100) · 10%</label><input type="number" id="a" min="0" max="100" value="${S.settings.ant || 50}"></div>
      </div><div class="card" id="out"></div>
      <div class="card small"><b>¿Cuánto necesito en conocimientos?</b><div id="need"></div></div>
      <div class="card"><h3>Estimar el análisis de antecedentes</h3>
        <p class="small muted">Niveles asesor, ejecutivo y profesional (Res. 133 de 2026, arts. 28 y 29): hasta ${AN.maxEdu} puntos por educación formal y hasta ${AN.maxExp} por experiencia, siempre <b>adicionales</b> al requisito mínimo (${esc(CONCURSO.reqMin || 'título profesional y experiencia exigida')}) y relacionados con las funciones del empleo. Se califican como máximo ${AN.maxEsp} especializaciones y ${AN.maxMae} maestría.</p>
        <div class="grid g4">
          <div><label class="f">Doctorados adicionales (${AN.doc} c/u)</label><input type="number" id="aDoc" min="0" max="2" value="0"></div>
          <div><label class="f">Maestrías adicionales (${AN.mae} c/u)</label><input type="number" id="aMae" min="0" max="${AN.maxMae}" value="0"></div>
          <div><label class="f">Especializaciones adicionales</label><input type="number" id="aEsp" min="0" max="${AN.maxEsp}" value="0"></div>
          <div><label class="f">Otros títulos profesionales</label><input type="number" id="aProf" min="0" max="5" value="0"></div>
          <div><label class="f">Puntos por especialización ⚠</label><input type="number" id="vEsp" min="0" max="50" value="${AN.esp}"></div>
          <div><label class="f">Puntos por título profesional ⚠</label><input type="number" id="vProf" min="0" max="50" value="${AN.prof}"></div>
          <div><label class="f">Años completos de experiencia profesional adicional (${AN.anio} c/u)</label><input type="number" id="aAn" min="0" max="40" value="0"></div>
          <div><label class="f">Meses de experiencia docente adicional</label><input type="number" id="aDocen" min="0" max="600" value="0"></div>
        </div>
        <p id="antOut" style="margin:10px 0 6px"></p>
        <button class="btn sm" id="antUse">Usar este valor en la calculadora</button>
        <p class="small muted" style="margin-top:8px">⚠ Los puntos por especialización y por título profesional adicional se tomaron de una versión del documento con lectura deficiente: confírmelos en el art. 29 de la Res. 133 de 2026 y corríjalos aquí si difieren. La experiencia docente solo cuenta en programas de educación superior y desde la obtención del título.</p></div>`;
    const antCalc = () => {
      const v = id => Math.max(0, +$('#' + id).value || 0);
      const edu = Math.min(AN.maxEdu, v('aDoc') * AN.doc + Math.min(AN.maxMae, v('aMae')) * AN.mae + Math.min(AN.maxEsp, v('aEsp')) * v('vEsp') + v('aProf') * v('vProf'));
      const m = v('aDocen'); const dRow = AN.docencia.find(r => m >= r[0]);
      const exp = Math.min(AN.maxExp, v('aAn') * AN.anio + (dRow ? dRow[1] : 0));
      $('#antOut').innerHTML = `Educación formal: <b>${edu}</b>/${AN.maxEdu} · Experiencia: <b>${exp}</b>/${AN.maxExp} → antecedentes estimado: <b>${edu + exp}</b>/100 (aporta ${trunc2((edu + exp) * .1).toFixed(2)} puntos al final).`;
      return edu + exp;
    };
    ['aDoc', 'aMae', 'aEsp', 'aProf', 'vEsp', 'vProf', 'aAn', 'aDocen'].forEach(id => $('#' + id).addEventListener('input', antCalc));
    $('#antUse').onclick = () => { const t = antCalc(); $('#a').value = t; S.settings.ant = t; save(); calc(); toast('Antecedentes: ' + t); };
    antCalc();
    const calc = () => {
      const k = +$('#k').value || 0, c = +$('#c').value || 0, a = +$('#a').value || 0;
      const f = trunc2(k * .7 + c * .2 + a * .1);
      $('#out').innerHTML = k < 65 ? `<h3 class="fail">Eliminado</h3><p>La prueba de conocimientos es eliminatoria: requiere mínimo 65. Con ${k} no continúa en el concurso.</p>`
        : `<div class="result-hero"><div class="big ${f >= 70 ? 'pass' : 'fail'}">${f.toFixed(2)}</div><div><h3>${f >= 70 ? '✅ Integra la lista de elegibles' : '⚠️ No alcanza el 70% para la lista de elegibles'}</h3><p class="small muted">${k}×0,70 + ${c}×0,20 + ${a}×0,10. En caso de empate se prefiere, entre otros criterios, a quien tenga mayor puntaje en conocimientos.</p></div></div>`;
      const need = Math.max(65, (70 - c * .2 - a * .1) / .7);
      $('#need').innerHTML = need > 100 ? 'Con esos puntajes comportamental y de antecedentes no es posible llegar a 70.' : `Con ${c} en comportamental y ${a} en antecedentes, necesita al menos <b>${(Math.ceil(need * 100) / 100).toFixed(2)}</b> en conocimientos para integrar la lista de elegibles.`;
    };
    ['k', 'c', 'a'].forEach(id => $('#' + id).oninput = calc); calc();
  };

  /* =========================== DATOS =========================== */
  VIEWS.datos = function () {
    const per = Object.keys(EJES).map(k => [k, ALL().filter(q => q.eje === k)]);
    app.innerHTML = `<h1>Mis datos y banco de preguntas</h1><p class="sub">Su progreso se guarda en este navegador. Puede respaldarlo o llevarlo a otro equipo.</p>
      <div class="card"><h3>Respaldo del progreso</h3><div class="row"><button class="btn" id="exp">⬇ Exportar progreso (JSON)</button><label class="btn sec">⬆ Importar progreso<input type="file" id="imp" accept=".json" hidden></label><button class="btn danger" id="rst">Borrar todo el progreso</button></div></div>
      <div class="card"><h3>Ampliar el banco de preguntas</h3><p class="small">Puede cargar un archivo JSON con más ítems (por ejemplo, preguntas que redacte su grupo de estudio). Formato de cada ítem:</p>
        <pre class="small" style="overflow:auto;background:var(--surface2);padding:10px;border-radius:8px">[{"id":"MIO-001","eje":"contratacion","dif":"medio","dim":"aplicar",
  "e":"Enunciado del caso que termina en frase abierta...",
  "o":["opción A","opción B","opción C","opción D"], "c":1,
  "j":["por qué A no","por qué B sí","por qué C no","por qué D no"],
  "r":"Ley 80 de 1993, art. 14"}]</pre>
        <p class="small muted">Ejes válidos: ${Object.keys(EJES).join(', ')}. Ítems importados actualmente: <b>${S.extra.length}</b>.</p>
        <div class="row"><label class="btn sec">⬆ Importar preguntas<input type="file" id="impQ" accept=".json" hidden></label>${S.extra.length ? '<button class="btn sec" id="delQ">Quitar preguntas importadas</button>' : ''}</div></div>
      <div class="card"><h3>Composición del banco</h3><table class="t"><tr><th>Eje</th><th>Núcleo</th><th>Ítems</th><th>Bajo/Medio/Alto</th></tr>
        ${per.map(([k, a]) => `<tr><td>${esc(EJES[k].n)}</td><td>${EJES[k].nucleo === 'general' ? 'General' : 'Específico'}</td><td>${a.length}</td><td>${['bajo', 'medio', 'alto'].map(d => a.filter(q => q.dif === d).length).join(' / ')}</td></tr>`).join('')}
        <tr><td><b>Competencias comportamentales</b></td><td>—</td><td>${COMPS().length}</td><td></td></tr></table></div>
      <div class="card"><label class="row"><input type="checkbox" id="shuf" ${S.settings.shuffle ? 'checked' : ''}> Barajar el orden de las opciones en práctica y simulacros</label></div>`;
    const dl = (obj, name) => { const b = new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
    const readJSON = (inp, cb) => inp.onchange = () => { const f = inp.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { cb(JSON.parse(r.result)); } catch (e) { alert('El archivo no es un JSON válido.'); } }; r.readAsText(f); };
    $('#exp').onclick = () => dl(Object.assign({}, S, { exam: null }), 'progreso_' + KEY + '_' + new Date().toISOString().slice(0, 10) + '.json');
    readJSON($('#imp'), d => { if (!d || typeof d !== 'object' || !d.resp) return alert('Archivo de progreso no reconocido.'); S = Object.assign({}, DEF, d); save(); toast('Progreso importado'); VIEWS.datos(); });
    readJSON($('#impQ'), d => {
      const arr = Array.isArray(d) ? d : []; const ids = new Set(ALL().map(q => q.id));
      const ok = arr.filter(q => q && q.id && !ids.has(q.id) && EJES[q.eje] && Array.isArray(q.o) && q.o.length === 4 && Number.isInteger(q.c) && q.c >= 0 && q.c < 4 && q.e)
        .map(q => ({ id: String(q.id), eje: q.eje, dif: ['bajo', 'medio', 'alto'].includes(q.dif) ? q.dif : 'medio', dim: DIMENSIONES[q.dim] ? q.dim : 'aplicar', e: String(q.e), o: q.o.map(String), c: q.c, j: Array.isArray(q.j) && q.j.length === 4 ? q.j.map(String) : ['', '', '', ''], r: q.r ? String(q.r) : '' }));
      S.extra = S.extra.concat(ok); save(); toast(`${ok.length} pregunta(s) importadas${arr.length - ok.length ? `, ${arr.length - ok.length} descartadas` : ''}`); VIEWS.datos();
    });
    const dq = $('#delQ'); if (dq) dq.onclick = () => { if (confirm('¿Quitar las preguntas importadas?')) { S.extra = []; save(); VIEWS.datos(); } };
    $('#rst').onclick = () => { if (confirm('Esto borra respuestas, simulacros y repaso. ¿Continuar?')) { S = JSON.parse(JSON.stringify(DEF)); save(); toast('Progreso borrado'); VIEWS.datos(); } };
    $('#shuf').onchange = e => { S.settings.shuffle = e.target.checked; save(); };
  };

  route();
})();
