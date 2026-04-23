# Accessibility & QA Report

## Accessibility Audit (Preliminary)

### 1. Structure & Semantics
- **Headings**: The structure uses `<h1>` for the Hero and `<h2>`/`<h3>` for sections. This is good for screen readers.
- **Landmarks**: The content is wrapped in logical sections, though `<main>`, `<nav>`, `<header>`, and `<footer>` semantic tags could replace generic `<div>` wrappers for better compliance.

### 2. Images
- **Alt Text**: Most images have `alt` attributes derived from the original source (e.g., "model", "kia", "navigation-rectangle").
    - **Improvement**: `alt` text like "model" or "kia" is vague. Recommending specific descriptions like "portfolio posing sideways in a denim jacket".

### 3. Contrast & Colors
- **Text on Images**: White text on the Hero image relies on the dark overlay (`.shaukia-img-model-overlay`). Ensure the overlay opacity is sufficient for WCAG AA standards.
- **Loading Screen**: White text on dark/black background is generally high contrast.

### 4. Interactive Elements
- **Buttons**: `div`s inside `a` tags are used. Ensure focus states are visible (the custom cursor handles hover, but keyboard focus rings should be preserved).
- **Forms**: No forms present, only `mailto:` links.

## Quality Assurance Checklist

- [ ] **Visual Regressions**: Compare reconstructed `index.html` render with original screenshots.
- [ ] **Animations**:
    - [ ] Loading screen sequence (S-HAUKIA / A-LHASSAN)
    - [ ] Scroll triggers (Fade up text in Intro)
    - [ ] Image Loop in Bio section
    - [ ] Infinite Marquee
- [ ] **Responsiveness**:
    - [ ] Mobile Menu appearance and functionality.
    - [ ] Hero text scaling on <500px screens.
    - [ ] Footer stacking order on mobile.
- [ ] **Performance**:
    - [ ] Lazy loading enabled for images below the fold? (Currently `loading="eager"` is used on some mid-page images; consider switching to `lazy`).
    - [ ] Font loading strategy (FOIT vs FOUT).
