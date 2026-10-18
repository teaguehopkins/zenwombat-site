// Game-select menu: pointer, focus, or arrow keys move the selection; Enter plays.
const rows = [...document.querySelectorAll('[data-row]')];
let selected = 0;

function select(i, { focus = false } = {}) {
  selected = i;
  rows.forEach((row, j) => row.classList.toggle('is-selected', j === selected));
  if (focus) rows[selected].querySelector('[data-play]').focus({ preventScroll: false });
}

rows.forEach((row, i) => {
  row.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') select(i);
  });
  row.addEventListener('focusin', () => select(i));
});

// Arrow keys only drive the menu while it has focus or is on screen with nothing else focused;
// past either end they fall through to normal scrolling.
const menu = document.querySelector('.menu');
let menuInView = true;
new IntersectionObserver(([entry]) => (menuInView = entry.isIntersecting)).observe(menu);

document.addEventListener('keydown', (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
  const active = document.activeElement;
  const inMenu = menu.contains(active);
  if (!inMenu && !(active === document.body && menuInView)) return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    const next = selected + (e.key === 'ArrowDown' ? 1 : -1);
    if (next < 0 || next >= rows.length) return;
    e.preventDefault();
    select(next, { focus: true });
  } else if (e.key === 'Enter' && !inMenu) {
    rows[selected].querySelector('[data-play]').click();
  }
});

// Vector's arena in miniature: four ships in the game's colours orbit a gravity well
// under plain Newtonian gravity, trailing their paths and firing the odd railgun tracer.
const canvas = document.querySelector('[data-orbit]');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const SHIP_COLOURS = ['#22e3ff', '#ff3b3b', '#3d6bff', '#ffd426'];
  const GM = 1;
  let w = 0;
  let h = 0;
  let scale = 1;
  let ships = [];
  let tracers = [];
  let running = false;
  let inView = false;
  let last = 0;

  function spawn(colour, k) {
    // Elliptical orbit in world units (well at origin, unit radius ≈ 1)
    const r = 0.55 + 0.45 * Math.random() + k * 0.08;
    const a = Math.random() * Math.PI * 2;
    const dir = k % 2 ? 1 : -1;
    const v = Math.sqrt(GM / r) * (0.82 + Math.random() * 0.3);
    return {
      colour,
      x: Math.cos(a) * r,
      y: Math.sin(a) * r,
      vx: -Math.sin(a) * v * dir,
      vy: Math.cos(a) * v * dir,
      trail: [],
      cooldown: 1 + Math.random() * 3,
    };
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scale = Math.min(w, h) * 0.42;
  }

  function step(dt) {
    for (const s of ships) {
      const r2 = s.x * s.x + s.y * s.y + 0.004;
      const r = Math.sqrt(r2);
      const acc = GM / r2;
      s.vx -= (acc * s.x) / r * dt;
      s.vy -= (acc * s.y) / r * dt;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.trail.push(s.x, s.y);
      if (s.trail.length > 260) s.trail.splice(0, 2);
      if (r < 0.12 || r > 2.4) Object.assign(s, spawn(s.colour, ships.indexOf(s)), { trail: [] });

      s.cooldown -= dt;
      if (s.cooldown <= 0) {
        s.cooldown = 2 + Math.random() * 4;
        const sp = Math.hypot(s.vx, s.vy) || 1;
        tracers.push({ x: s.x, y: s.y, dx: s.vx / sp, dy: s.vy / sp, life: 1, colour: s.colour });
      }
    }
    for (const t of tracers) {
      t.x += t.dx * dt * 3.2;
      t.y += t.dy * dt * 3.2;
      t.life -= dt * 1.4;
    }
    tracers = tracers.filter((t) => t.life > 0);
  }

  function draw() {
    const cx = w * 0.5;
    const cy = h * 0.5;
    ctx.clearRect(0, 0, w, h);

    // Gravity well: concentric rings and the body, as drawn in the game
    ctx.lineWidth = 1;
    for (let i = 1; i <= 6; i++) {
      ctx.strokeStyle = `rgba(240, 170, 40, ${0.32 - i * 0.04})`;
      ctx.beginPath();
      ctx.arc(cx, cy, scale * 0.12 * i * (1 + i * 0.18), 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = '#f0a020';
    ctx.shadowColor = 'rgba(240, 160, 32, 0.6)';
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.arc(cx, cy, scale * 0.09, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    for (const s of ships) {
      // Trail
      ctx.strokeStyle = s.colour;
      ctx.lineWidth = 1.6;
      for (let i = 2; i < s.trail.length; i += 2) {
        ctx.globalAlpha = (i / s.trail.length) * 0.65;
        ctx.beginPath();
        ctx.moveTo(cx + s.trail[i - 2] * scale, cy + s.trail[i - 1] * scale);
        ctx.lineTo(cx + s.trail[i] * scale, cy + s.trail[i + 1] * scale);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Ship: the game's flat triangle, nose along its velocity
      const ang = Math.atan2(s.vy, s.vx);
      const size = Math.max(9, scale * 0.06);
      ctx.save();
      ctx.translate(cx + s.x * scale, cy + s.y * scale);
      ctx.rotate(ang);
      ctx.fillStyle = s.colour;
      ctx.shadowColor = s.colour;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(size, 0);
      ctx.lineTo(-size * 0.8, -size * 0.65);
      ctx.lineTo(-size * 0.45, 0);
      ctx.lineTo(-size * 0.8, size * 0.65);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    for (const t of tracers) {
      ctx.strokeStyle = '#ffffff';
      ctx.globalAlpha = Math.max(0, t.life);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + t.x * scale, cy + t.y * scale);
      ctx.lineTo(cx + (t.x - t.dx * 0.18) * scale, cy + (t.y - t.dy * 0.18) * scale);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function frame(now) {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    // Fixed sub-steps keep orbits stable regardless of frame rate
    for (let i = 0; i < 4; i++) step(dt / 4);
    draw();
    requestAnimationFrame(frame);
  }

  function start() {
    if (running || !inView || document.hidden || reduceMotion.matches) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
  }

  function init() {
    resize();
    ships = SHIP_COLOURS.map(spawn);
    // Pre-run so the first frame already shows trails and motion
    for (let i = 0; i < 600; i++) step(1 / 240);
    draw();
  }

  init();
  new ResizeObserver(() => {
    resize();
    draw();
  }).observe(canvas);
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    inView ? start() : stop();
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  reduceMotion.addEventListener('change', () => (reduceMotion.matches ? stop() : start()));
}
