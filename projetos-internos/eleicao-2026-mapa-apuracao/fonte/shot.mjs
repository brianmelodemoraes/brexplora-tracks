import { chromium } from 'playwright-core';
const [,, mode, out] = process.argv;
const exe = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const b = await chromium.launch({ executablePath: exe, args:['--allow-file-access-from-files'] });
const p = await b.newPage({ viewport:{width:1080,height:1920} });
await p.goto('file://'+process.cwd()+'/site/index.html');
await p.evaluate(()=>document.fonts.ready);
await p.waitForTimeout(300);
if (mode==='static') { await p.evaluate(()=>render(99)); await p.screenshot({path:out}); }
else { const fps=30, dur=10; for(let f=0; f<fps*dur; f++){ await p.evaluate(t=>render(t), f/fps); await p.screenshot({path:`frames/f${String(f).padStart(4,'0')}.png`}); } }
await b.close();
