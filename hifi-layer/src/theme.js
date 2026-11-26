/* Hourberry hi-fi layer. Runs after core's script: same screens, same logic, hi-fi look.
   Everything here is visual: berry avatars instead of letters, and the illustrations. */
(function () {
  // Who is which berry (matches Figma final screens).
  const WHO = { jess: 'strawberry', lena: 'raspberry', sam: 'goldenberry', kai: 'blackberry', ren: 'blackberry', noor: 'goldenberry', ana: 'raspberry', theo: 'blackberry', priya: 'blueberry', omar: 'strawberry', bea: 'raspberry' };
  const SHAPE = { blue: 'blueberry', straw: 'strawberry', rasp: 'raspberry', black: 'blackberry', gold: 'goldenberry' };
  const mine = () => {
    if (!S.me || !S.me.made) return 'blueberry';
    const s = S.me.shape || 'blue';
    for (const k in SHAPE) if (s.startsWith(k)) return SHAPE[k];
    return 'blueberry';
  };
  const face = (b) => `<b class="bry b-${b}"></b>`;
  function sync() {
    for (const k in P) P[k].i = face(k === 'mia' ? mine() : WHO[k] || 'blueberry');
  }
  // The five Figma berries are the only shapes in hi-fi (core's mid-fi also has cherry, grape…).
  BSHAPE.black = ['Blackberry', BSHAPE.rasp[1]];
  BSHAPE.gold = ['Goldenberry', BSHAPE.blue[1]];
  for (const k of Object.keys(BSHAPE)) if (!HB_RUN[k]) delete BSHAPE[k];
  // Everyone starts as a plain blueberry (core's demo user starts as a strawberry with a leaf),
  // so the avatar you see before "Make your berry" is the one the editor opens with.
  if (!S.me.made || !HB_RUN[S.me.shape]) Object.assign(S.me, { shape: 'blue', top: 0, acc: 0 });
  // Accessories in color (core draws them in greys).
  const paint = (arr, map) => arr.forEach((x) => { for (const [a, b] of map) x[1] = x[1].split(a).join(b); });
  paint(BTOP.filter((x) => x[0] === 'Beanie'), [['#d1d1d6', '#ff8fab']]);
  paint(BTOP.filter((x) => x[0] === 'Leaf'), [['#8e8e93', '#5e9a2c'], ['#636366', '#6b4b2a']]);
  paint(BTOP.filter((x) => x[0] === 'Stem'), [['#636366', '#6b4b2a']]);
  paint(BTOP.filter((x) => x[0] === 'Bow'), [['#8e8e93', '#ff5d7a'], ['#636366', '#d63a5a']]);
  paint(BTOP.filter((x) => x[0] === 'Top hat'), [['#8e8e93', '#f5b700']]);
  paint(BTOP.filter((x) => x[0] === 'Crown'), [['#aeaeb2', '#ffc93c'], ['#636366', '#e0453a']]);
  paint(BACC.filter((x) => x[0] === 'Headphones'), [['#636366', '#4a3fd8']]);
  paint(BACC.filter((x) => x[0] === 'Scarf'), [['#aeaeb2', '#34c759']]);
  // Where each runner's head and eyes sit (measured from the Figma art):
  // aspect w/h, head centre x, head width, head top · eyes centre x, eyes centre y, eyes width (fractions of the art).
  const HEAD = {
    blue: [0.862, 0.45, 0.684, 0.19, 0.566, 0.433, 0.308], straw: [0.883, 0.462, 0.646, 0.121, 0.558, 0.447, 0.291],
    rasp: [0.797, 0.46, 0.6, 0.066, 0.497, 0.325, 0.305], black: [0.9, 0.466, 0.669, 0.121, 0.542, 0.453, 0.268],
    gold: [1.069, 0.443, 0.534, 0.184, 0.551, 0.421, 0.285],
  };
  const ON_EYES = ['Glasses', 'Shades'];
  // Your berry = the Figma character, with core's hats and extras placed on it (viewBox has headroom for tall hats).
  // eslint-disable-next-line no-global-assign
  berrySVG = function (c, d) {
    const h = c && HEAD[c.shape];
    if (!h) return '';
    // Small (map pins, list rows, chat): the square face, same as everyone else's. Accessories only show from 44pt up.
    if (d < 44) return `<span class="hb-sq" style="width:${d}px;height:${d}px"><b class="bry b-${SHAPE[c.shape]}"></b></span>`;
    const w = h[0] * 100, ox = (100 - w) / 2;
    const kh = (h[2] * w) / 76, hx = ox + h[1] * w - 50 * kh, hy = h[3] * 100 - 18 * kh;
    const ke = (h[6] * w * 1.2) / 38, ex = ox + h[4] * w - 50 * ke, ey = h[5] * 100 - 54 * ke;
    const top = d >= 44 ? (BTOP[c.top] || BTOP[0])[1] : '';
    const acc = d >= 44 ? BACC[c.acc] || BACC[0] : ['None', ''];
    const accG = ON_EYES.includes(acc[0]) ? `<g transform="translate(${ex} ${ey}) scale(${ke})">${acc[1]}</g>` : `<g transform="translate(${hx} ${hy}) scale(${kh})">${acc[1]}</g>`;
    return `<svg viewBox="-8 -16 116 116" width="${d}" height="${d}" aria-hidden="true"><image href="${HB_RUN[c.shape]}" x="${ox}" y="0" width="${w}" height="100"/><g transform="translate(${hx} ${hy}) scale(${kh})">${top}</g>${accG}</svg>`;
  };
  function post() {
    // Plan card (§9 B): the host as their whole berry; the card takes the host's tint.
    document.querySelectorAll('.bhero').forEach((el) => {
      const nm = (el.querySelector(':scope > b') || {}).textContent || '';
      const k = Object.keys(P).find((x) => nm.startsWith(P[x].n + ' '));
      const b = k && (k === 'mia' ? null : WHO[k]);
      const card = el.closest('.vcard');
      if (b && card) card.dataset.hb = b;
      const vb = el.querySelector('.vb.host');
      const key = { blueberry: 'blue', strawberry: 'straw', raspberry: 'rasp', blackberry: 'black', goldenberry: 'gold' }[b];
      if (vb && key) vb.outerHTML = `<img class="hb-host" alt="" src="${HB_RUN[key]}">`;
    });
    // DM header (C03): the friend's whole berry instead of a second copy of their name.
    document.querySelectorAll('.chead > .fc').forEach((el) => {
      const k = Object.keys(P).find((x) => P[x].n === el.getAttribute('aria-label'));
      const run = k && HB_RUN[{ blueberry: 'blue', strawberry: 'straw', raspberry: 'rasp', blackberry: 'black', goldenberry: 'gold' }[WHO[k]]];
      if (run) el.outerHTML = `<img class="hb-dmb" alt="${P[k].n}" src="${run}">`;
    });
  }
  let qd = false;
  new MutationObserver(() => { if (qd) return; qd = true; requestAnimationFrame(() => { qd = false; post(); }); }).observe(document.getElementById('ph'), { childList: true, subtree: true });
  const coreRender = render;
  // eslint-disable-next-line no-global-assign
  render = function () {
    sync();
    const out = coreRender.apply(this, arguments);
    document.documentElement.classList.toggle('hb-ob', !!S.ob);
    post();
    return out;
  };
  render();
})();
