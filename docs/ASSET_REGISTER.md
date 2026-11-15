# Asset Register

**Project:** TeeDee Edge Automations LTD Website  
**Date:** 15 November 2026

---

## 1. Primary Supplied Brand Assets

| File Path | Type | Resolution / Size | Source | Purpose | Status |
|---|---|---|---|---|---|
| `public/brand/teedee-logo-original.jpg` | JPEG Raster | 1024 x 512 (~74 KB) | User upload | Master corporate logo & RC verification | Staged in `public/brand/` |
| `public/brand/teedee-flyer-original.jpg` | JPEG Raster | 576 x 753 (~81 KB) | User upload | Authoritative content source of truth | Staged in `public/brand/` |

---

## 2. Derived & Generated Web Brand Assets

| Target File Path | Type | Specifications | Purpose |
|---|---|---|---|
| `public/brand/logo-primary.svg` | SVG Vector | High-precision vector lockup | Navbar, footer, sticky headers |
| `public/brand/logo-light.svg` | SVG Vector | White/light stroke derivative | Dark hero and graphite section headers |
| `public/brand/favicon.svg` | SVG Vector | Derived circular radar/lightning glyph | Browser tab icon and PWA manifest |
| `public/brand/favicon.ico` | ICO | 32x32 / 16x16 multi-layer icon | Legacy browser favicon support |

---

## 3. Video & Media Assets

| Target File Path | Type | Specifications | Placement | Status |
|---|---|---|---|---|
| `public/video/hero-desktop.mp4` | MP4 (H.264) | 1080p, 24fps, muted, 12s loop, ~4-6 MB | Desktop Hero background | Production staging |
| `public/video/hero-desktop.webm` | WebM (VP9) | 1080p, 24fps, muted, 12s loop, ~2-3 MB | High-efficiency modern desktop hero | Production staging |
| `public/video/poster-hero.webp` | WebP | 1920x1080, quality 85, ~120 KB | Hero fallback & Mobile LCP poster | Production staging |
| `public/images/services/*.webp` | WebP | 800x600, aspect-ratio 4:3 | 10 Service category showcase cards | Production staging |
| `public/images/og/teedee-og.jpg` | JPEG | 1200x630, social sharing card | Open Graph & Twitter Summary card | Production staging |

---

## 4. Rights and Verification Rules
- The original raster files are preserved untouched in `public/brand/`.
- All photography and video loops represent genuine, contextually accurate infrastructure (CCTV cameras, inverters, automated gates, wiring, server racks) with no sci-fi or misleading claims.
