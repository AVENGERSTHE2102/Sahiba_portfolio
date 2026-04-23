# Component Tree Analysis

Structured breakdown of `index.html`:

## 1. Loader (`.loading-screen-parent`)
- **Container**: `div.loading-screen-container`
    - **Animation Block**: `div.loading-text-parent` (3D Transforms)
        - **Left Block**: `S` (Static) + `HAUKIA` (Animated reveal)
        - **Spacer**: `div.space-loading`
        - **Right Block**: `A` (Static) + `LHASSAN` (Animated reveal)

## 2. Navigation
- **Desktop** (`.main-nav-parent.desktop`)
    - **Links**: Logo (portfolio A.), Portfolio, Contact.
    - **Visuals**: Trapezoid image background + lines.
- **Mobile** (`.main-nav-parent.mobile`)
    - **Links**: Same structure, simplified layout.
    - **Visuals**: Same trapezoid asset.

## 3. Hero Section (`#luxy .shaukia-hero-holder`)
- **Text Layers**: "THIS IS portfolio" (Split spans for potential stagger).
- **Sub-heading**: "MODEL / ARTIST".
- **CTA**: "CONTACT" button with dual text layers (hover effect).
- **Footer**: Location and Copyright text.
- **Background**: Image (`portfolio-hero-img-darker.jpg`) with overlay.

## 4. Intro Section (`.shaukia-intro-holder`)
- **Heading**: "I AM portfolio ALHASSAN..." using `.fade-up` and `.tricks` classes for scroll-triggered text reveal.

## 5. Bio Section (`.shaukia-bio-holder`)
- **Layout**: Split Left/Right.
- **Left**: Image Loop (`.shaukia-bio-img-holder`).
    - Multiple `<img>` tags cycled via JS.
    - Wipe transition overlay (`.card-whipe`).
- **Right**:
    - **Text**: Biography description.
    - **CTA**: "VIEW CV" button with eye icon hover effect.

## 6. Showcase (`.shaukia-home-showcase-holder`)
- **Content**: Single featured image with 3D rotation/parallax potential.

## 7. Portfolio Grid (`#porfolio-nav`)
- **Heading**: "PORTFOLIO & WORK".
- **List**: Collection of Portfolio Cards.
    - **Item**: Image + Overlay + Title + Progress Line + Wipe Effect.

## 8. Loop Marquee (`.loop-marquee-holder`)
- **Content**: "PERSONAL PORTFOLIO" repeating text.
- **Interaction**: Infinite scroll/marquee animation.

## 9. Personal Portfolio (`.shaukia-personal-portfolio`)
- **Item**: "Open" Button.
    - **Visuals**: Circular text ring + Center eye animation (Lottie placeholder).

## 10. Footer (`#footer-section`)
- **Head**: "WORK WITH ME NOW".
- **Info**: Stylized email prompt.
- **CTA**: "SEND AN EMAIL" massive link.
- **Socials**: Instagram, Facebook, LinkedIn.
- **Credits**: "DESIGNED & DEVELOPED BY..."

## 11. Global Elements
- **Cursor**: Custom `div.cursor` with dot.
- **Awwwards Badge**: Fixed position SVG link.
