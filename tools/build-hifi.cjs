// Builds hifi-layer/index.html = core/index.html + the hi-fi layer (hifi-layer/src/theme.css, theme.js, art/). (hifi/ is the separate hand-reskinned version.)
// Core stays the only place for logic and copy; run this again after any core change:
//   node tools/build-hifi.cjs
// Each patch below must find its target in core, or the build stops (so a core change can't silently break hifi).
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const src = path.join(root, 'hifi-layer', 'src');
let html = fs.readFileSync(path.join(root, 'core', 'index.html'), 'utf8');

const uri = (f) => 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(src, 'art', f)).toString('base64');
const BERRIES = ['blueberry', 'strawberry', 'raspberry', 'blackberry', 'goldenberry'];
const ART = { 'empty-plans': 'nothing', 'empty-nearby': 'looking', 'empty-people': 'find', 'empty-chats': 'newf', 'discover-done': 'hold', 'a berry waving bye': 'hold', 'int-header · a berry picking things': 'looking' };

function patch(from, to) {
  if (!html.includes(from)) throw new Error('core changed, patch target not found:\n' + from.slice(0, 120));
  html = html.replace(from, to);
}

// 1. title
patch('<title>Hourberry · core</title>', '<title>Hourberry · hi-fi</title>');

// 2. styles: berry faces + theme, after core's CSS
const faces = BERRIES.map((b) => `.b-${b}{background-image:url(${uri('b_' + b + '.svg')})}`).join('\n');
patch('</style></head>', '\n' + fs.readFileSync(path.join(src, 'theme.css'), 'utf8') + '\n' + faces + '\n</style></head>');

// 3. illustrations
const BADGE_ART = { spot: 'taco', want: 'looking', connector: 'newf', time: 'nothing', down: 'hold' };
const files = [...new Set(Object.values(ART).concat(Object.values(BADGE_ART)))];
const KEYS = { blueberry: 'blue', strawberry: 'straw', raspberry: 'rasp', blackberry: 'black', goldenberry: 'gold' };
const artJs = 'const HB_IMG={' + files.map((f) => `${f}:"${uri(f + '.svg')}"`).join(',') + '};const HB_ART={' + Object.entries(ART).map(([k, f]) => `${JSON.stringify(k)}:HB_IMG.${f}`).join(',') + '};' +
  'const HB_RUN={' + BERRIES.map((b) => `${KEYS[b]}:"${uri('r_' + b + '.svg')}"`).join(',') + '};' +
  'const HB_PICK=' + JSON.stringify(BERRIES.map((b) => [KEYS[b], b[0].toUpperCase() + b.slice(1)])) + ';' +
  'const HB_BADGE={' + Object.entries(BADGE_ART).map(([k, f]) => `${k}:HB_IMG.${f}`).join(',') + '};';
patch('illoSpot=n=>`<div class="illos"><small>Illustration<br>${n}</small></div>`;',
  'illoSpot=n=>HB_ART[n]?`<div class="illos"><img alt="" src="${HB_ART[n]}"></div>`:`<div class="illos"><small>Illustration<br>${n}</small></div>`;');
patch('<script>', '<script>' + artJs + '\n');

// 4. welcome: the five berries run in (S01)
const crew = BERRIES.map((b) => '<img alt="" src="${HB_RUN.' + KEYS[b] + '}">').join('');
patch('<div class="obhero"><small>Illustration · welcome<br>berries gathering</small></div>',
  `<div class="obhero"><div class="hb-crew" role="img" aria-label="Five berries running in">${crew}</div></div>`);

// 5. your own berry on the map's top-left button (core shows your initial until you make your berry)
patch('${S.me&&S.me.made?berrySVG(S.me,34):"T"}', '${P.mia.i}');

// 6. berry editor: real berry colors and backgrounds instead of mid-fi greys
patch('const BCOL=["#1c1c1e","#48484a","#636366","#8e8e93","#aeaeb2"],BBG=["#f2f2f7","#e5e5ea","#d1d1d6","#c7c7cc","#ffffff"]',
  'const BCOL=["#580d4b","#eb2134","#8c86e6","#ff8f00","#eb81a4"],BBG=["#f2f2f7","#ffe9e0","#edecfb","#fff3d6","#e3f6ea"]');
// before you make your berry, your avatar is the default blueberry (core shows your initial)
patch('border-radius:${VRD[S.set.berry]}">T${', 'border-radius:${VRD[S.set.berry]}">${P.mia.i}${');

// 8. Pick your berry (S06): the five berries from Figma, drawn as the running characters
patch('${Object.keys(BSHAPE).map(k=>`<button class="btile ${S.me.shape===k?"on":""}" data-a="obberry:${k}"><span>${berrySVG(Object.assign({},S.me,{shape:k,top:0,acc:0}),64)}</span><small>${BSHAPE[k][0]}</small></button>`).join("")}',
  '${HB_PICK.map(([k,n])=>`<button class="btile ${S.me.shape===k?"on":""}" data-a="obberry:${k}"><span><img class="hb-pk" alt="" src="${HB_RUN[k]}"></span><small>${n}</small></button>`).join("")}');

// 9. Me (Figma G09/G10): grey header until you make your berry; you start as the default blueberry, pencil always there;
//    the "Make your berry" card shows a blank berry silhouette with a + badge
patch('<div class="mehero" style="background:${BBG[m.bg]}">', '<div class="mehero" style="background:${m.made?BBG[m.bg]:"#f2f2f7"}">');
patch('${m.made?berryAv(120):`<button class="ghostb" data-a="apg:berry" aria-label="Make your berry">${I.plus}</button>`}${m.made?`<button class="edb" data-a="apg:berry" aria-label="Edit your berry">${I.pen}</button>`:""}',
  '${m.made?berryAv(120):`<button class="hb-defb" data-a="apg:berry" aria-label="Make your berry">${berrySVG({shape:"blue",top:0,acc:0},150)}</button>`}<button class="edb" data-a="apg:berry" aria-label="Edit your berry">${I.pen}</button>');
patch('<span class="ghostb sm" aria-hidden="true">${I.plus}</span>', '<span class="hb-ghost" aria-hidden="true"><img alt="" src="${HB_RUN.blue}"><i>${I.plus}</i></span>');

// 10. profile badges (Me, G09): each tile gets a small illustration on top; badges without art yet show your own berry
patch('const bInner=k=>{const B=BADGES[k];return `<small class="bl">${B[0]}</small>',
  'const bInner=k=>{const B=BADGES[k];return `<img class="hb-bi" alt="" src="${HB_BADGE[k]||HB_RUN[S.me.made?S.me.shape:"blue"]}"><small class="bl">${B[0]}</small>');

// 11. Recap (§7): the GPT scene for now (night rooftop, from Figma "Illustrations · final / recap-rooftop")
const recap = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(src, 'art', 'recap.jpg')).toString('base64');
patch('<div class="illo"><span class="sqb">${a.ppl.slice(0,3).map(x=>fc([x],48)).join("")}${berryAv(48)}</span><small>Illustration · ${a.scene} · ${a.tod} · ${a.ppl.length+1} berries${nw.length?" · new leaf on "+nw.map(x=>P[x].n).join(", "):""}</small></div>',
  `<div class="illo hb-recap"><img alt="" src="${recap}"></div>`);

// 7. theme script last
patch('</script>\n</body></html>', '</script>\n<script>\n' + fs.readFileSync(path.join(src, 'theme.js'), 'utf8') + '</script>\n</body></html>');

fs.writeFileSync(path.join(root, 'hifi-layer', 'index.html'), html);
console.log('hifi-layer/index.html', Math.round(html.length / 1024) + ' KB');
