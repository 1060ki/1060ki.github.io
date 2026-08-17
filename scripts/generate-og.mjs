/**
 * OGP 画像 (public/og.png) を生成します。
 *
 *   npm run og
 *
 * SVG のテキストはシステムフォントで描かれるため、結果は実行環境に依存します。
 * CI では実行せず、生成済みの PNG をリポジトリに含める運用にしています。
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const OUT = fileURLToPath(new URL('../public/og.png', import.meta.url));

const W = 1200;
const H = 630;
const PAPER = '#f7f6f2';
const INK = '#16171b';
const MUTED = '#6f727a';
const RULE = '#d9d7cf';
const ACCENT = '#c8006a';

/** 角トンボ 1 個ぶんのパス。左上向きで、transform で 4 隅に配置する。 */
const cornerMark = (transform) => `
  <g transform="${transform}" fill="none" stroke="${INK}" stroke-opacity="0.5" stroke-width="1.4">
    <path d="M0 26 H26 M0 33 H26 M26 0 V26 M33 0 V26" />
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>

  <g stroke="${RULE}" stroke-width="1">
    <line x1="0" y1="238" x2="${W}" y2="238"/>
    <line x1="0" y1="470" x2="${W}" y2="470"/>
    <line x1="196" y1="0" x2="196" y2="${H}"/>
    <line x1="1064" y1="0" x2="1064" y2="${H}"/>
  </g>

  ${cornerMark('translate(40 40)')}
  ${cornerMark(`translate(${W - 40} 40) scale(-1 1)`)}
  ${cornerMark(`translate(40 ${H - 40}) scale(1 -1)`)}
  ${cornerMark(`translate(${W - 40} ${H - 40}) scale(-1 -1)`)}

  <text x="100" y="196" font-family="Menlo, monospace" font-size="20"
        letter-spacing="6" fill="${MUTED}">FUKUOKA, JAPAN / @1060ki</text>

  <text x="96" y="386" font-family="'Times New Roman', Georgia, serif" font-size="152"
        fill="${INK}">T.Ichikawa</text>

  <text x="100" y="452" font-family="'Hiragino Sans', 'Helvetica Neue', sans-serif"
        font-size="27" fill="${MUTED}">市川 智貴 — Software Engineer / Engineering Manager</text>

  <g transform="translate(100 540)">
    <rect width="34" height="34" fill="#00a0e9"/>
    <rect x="42" width="34" height="34" fill="#e4007f"/>
    <rect x="84" width="34" height="34" fill="#f4d100"/>
    <rect x="126" width="34" height="34" fill="#1a1a1a"/>
  </g>

  <text x="1064" y="565" text-anchor="end" font-family="Menlo, monospace" font-size="19"
        letter-spacing="4" fill="${ACCENT}">1060ki.com</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(OUT, png);
console.log(`wrote ${OUT} (${(png.length / 1024).toFixed(1)} kB)`);
