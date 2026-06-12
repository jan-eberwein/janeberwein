import sharp from "sharp";
import { writeFileSync } from "fs";

const W = 1200, H = 630;

// Deterministic starfield (seeded PRNG so the result is reproducible)
let seed = 20260612;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
let stars = "";
for (let i = 0; i < 220; i++) {
  const x = Math.round(rand() * W);
  const y = Math.round(rand() * H);
  const r = (rand() * 1.6 + 0.3).toFixed(2);
  const o = (rand() * 0.6 + 0.15).toFixed(2);
  const blue = rand() > 0.7;
  stars += `<circle cx="${x}" cy="${y}" r="${r}" fill="${blue ? "#4d8bff" : "#cbd5e1"}" opacity="${o}"/>`;
}

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#0a1a3f" stop-opacity="0.9"/>
      <stop offset="55%" stop-color="#070b1c" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="title" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.6"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#050505"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${stars}

  <!-- Logo chip top-left -->
  <g transform="translate(64,56)">
    <rect x="0" y="0" rx="16" ry="16" width="300" height="64"
          fill="#0a0a0a" stroke="#0055ff" stroke-opacity="0.55" stroke-width="1.5"/>
    <text x="28" y="42" font-family="'Outfit','Helvetica Neue',Arial,sans-serif"
          font-size="30" font-weight="800" font-style="italic" letter-spacing="0.5"><tspan fill="#f8fafc">Jan</tspan><tspan fill="#0055ff" dx="8">x</tspan><tspan fill="#f8fafc" dx="8">Eberwein</tspan></text>
  </g>

  <!-- Badge -->
  <g transform="translate(600,250)">
    <rect x="-260" y="-26" rx="22" ry="22" width="520" height="44"
          fill="#0055ff" fill-opacity="0.08" stroke="#0055ff" stroke-opacity="0.4" stroke-width="1.5"/>
    <text x="0" y="4" text-anchor="middle"
          font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="20"
          font-weight="600" fill="#4d8bff" letter-spacing="0.3">Full Stack Software Engineer &amp; IT Consultant</text>
  </g>

  <!-- Title -->
  <text x="600" y="380" text-anchor="middle"
        font-family="'Outfit','Helvetica Neue',Arial,sans-serif" font-size="118"
        font-weight="800" letter-spacing="-3" fill="url(#title)">Jan Eberwein<tspan font-size="52" font-weight="500" fill="#94a3b8" dy="-6"> , BSc</tspan></text>

  <!-- Tagline -->
  <text x="600" y="452" text-anchor="middle"
        font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="30"
        font-weight="500" fill="#cbd5e1" opacity="0.85">High Quality Software Engineering</text>
  <text x="600" y="496" text-anchor="middle"
        font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="26"
        font-weight="400" fill="#94a3b8">Turning complex ideas into digital reality.</text>

  <!-- URL -->
  <text x="600" y="576" text-anchor="middle"
        font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="22"
        font-weight="600" fill="#0055ff" letter-spacing="1">janeberwein.at</text>
</svg>`;

writeFileSync("/tmp/og.svg", svg);
await sharp(Buffer.from(svg)).jpeg({ quality: 90, mozjpeg: true }).toFile("public/og-image.jpg");
const meta = await sharp("public/og-image.jpg").metadata();
console.log(`Wrote public/og-image.jpg: ${meta.width}x${meta.height}, ${meta.size} bytes`);
