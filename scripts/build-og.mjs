import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- left vertical bar -->
  <rect x="0" y="0" width="18" height="630" fill="#ffffff"/>

  <!-- top eyebrow chip -->
  <rect x="72" y="76" width="200" height="36" fill="#ffffff"/>
  <text x="172" y="101" text-anchor="middle"
        font-family="ui-monospace, SFMono-Regular, Menlo, monospace"
        font-size="14" font-weight="700" fill="#0a0a0a" letter-spacing="3">
    PORTFOLIO
  </text>

  <!-- MASAGIN -->
  <text x="72" y="290"
        font-family="Inter, system-ui, sans-serif"
        font-size="180" font-weight="900" fill="#ffffff" letter-spacing="-6">
    MASAGIN
  </text>

  <!-- tagline -->
  <text x="72" y="380"
        font-family="Inter, system-ui, sans-serif"
        font-size="36" font-weight="700" fill="#ffffff" letter-spacing="-1">
    本質を掘り当て、技術で解決する。
  </text>

  <!-- subline -->
  <text x="72" y="430"
        font-family="Inter, system-ui, sans-serif"
        font-size="22" font-weight="400" fill="#a0a0a0">
    Ruby on Rails &#x2F; Next.js &#x2F; Nuxt &#x2F; Python  —  Full-stack in the making
  </text>

  <!-- bottom rule -->
  <rect x="72" y="520" width="1056" height="3" fill="#ffffff" opacity="0.9"/>

  <!-- bottom labels -->
  <text x="72" y="572"
        font-family="ui-monospace, SFMono-Regular, Menlo, monospace"
        font-size="18" font-weight="700" fill="#ffffff" letter-spacing="3">
    BARTENDER &#xb7; CUSTOMER SERVICE &#xb7; ENGINEER
  </text>

  <text x="1128" y="572" text-anchor="end"
        font-family="ui-monospace, SFMono-Regular, Menlo, monospace"
        font-size="18" font-weight="700" fill="#ffffff" letter-spacing="3">
    portfolio.naganobol6212.workers.dev
  </text>
</svg>`;

const outPath = 'public/og.png';
mkdirSync(dirname(outPath), { recursive: true });

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(outPath);

console.log(`Generated ${outPath}`);
