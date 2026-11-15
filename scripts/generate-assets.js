const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'images', 'services');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const services = [
  { name: 'cctv', title: 'CCTV & Video Surveillance', color: '#B32632', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
  { name: 'solar', title: 'Solar & Inverter Power', color: '#E57A2F', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { name: 'access-control', title: 'Biometrics & Access Control', color: '#B32632', icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004.07 9.878' },
  { name: 'alarm', title: 'Fire & Intrusion Alarms', color: '#E57A2F', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { name: 'electric-fence', title: 'Electric Fencing & Wiring', color: '#B32632', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: 'automated-gate', title: 'Automated Gate Motors', color: '#E57A2F', icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z' },
  { name: 'smart-locks', title: 'Smart Locks & Hotel Locks', color: '#B32632', icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' },
  { name: 'networking', title: 'Networking & Cat6 Cabling', color: '#E57A2F', icon: 'M4 6h16M4 12h16m-7 6h7' },
  { name: 'automation', title: 'Building Automation', color: '#B32632', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
  { name: 'training', title: 'Technical Installation Training', color: '#E57A2F', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' }
];

services.forEach(s => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${s.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#17191D"/>
      <stop offset="100%" stop-color="#0F1114"/>
    </linearGradient>
    <radialGradient id="glow-${s.name}" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${s.color}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#17191D" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg-${s.name})"/>
  <circle cx="400" cy="260" r="280" fill="url(#glow-${s.name})"/>
  <g transform="translate(360, 200) scale(3.5)" stroke="${s.color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="${s.icon}"/>
  </g>
  <text x="400" y="380" font-family="'Manrope', sans-serif" font-weight="800" font-size="28" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">${s.title.toUpperCase()}</text>
  <text x="400" y="420" font-family="'IBM Plex Mono', monospace" font-weight="600" font-size="14" fill="${s.color}" text-anchor="middle" letter-spacing="3">TEEDEE EDGE AUTOMATIONS LTD</text>
  <line x1="300" y1="450" x2="500" y2="450" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>
  <text x="400" y="480" font-family="'Inter', sans-serif" font-weight="500" font-size="13" fill="#94A3B8" text-anchor="middle">RC: 8231485 · LAGOS &amp; ABUJA</text>
</svg>`;

  fs.writeFileSync(path.join(dir, `${s.name}.svg`), svg);
});

console.log('Generated 10 service SVG assets successfully. Convert to WebP with an image encoder before creating .webp files.');
