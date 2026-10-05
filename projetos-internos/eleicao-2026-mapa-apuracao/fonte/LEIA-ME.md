# Arte eleição 2026 — mapa da apuração (story 1080×1920)

Renderizar (precisa Node + Chromium/Chrome e ffmpeg):

    npm i playwright-core
    node shot.mjs static ../story.png          # estático
    mkdir -p frames && node shot.mjs anim       # frames do animado (10 s, 30 fps)
    ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 17 ../story-animado.mp4

No Mac, ajuste `exe` em shot.mjs para o Chrome local
(`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`).
Dados (percentuais, estados de Lula, horário) ficam no topo de index.html.
`dados/geojs-35-mun.json`: malha dos 645 municípios de SP (tbrugz/geodata-br).
