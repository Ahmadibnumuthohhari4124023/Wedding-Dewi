---
name: Warm Luxury Romance
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#514343'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#847373'
  outline-variant: '#d6c2c1'
  surface-tint: '#845050'
  primary: '#845050'
  on-primary: '#ffffff'
  primary-container: '#c98b8b'
  on-primary-container: '#512627'
  inverse-primary: '#f9b5b5'
  secondary: '#745a27'
  on-secondary: '#ffffff'
  secondary-container: '#fedb9b'
  on-secondary-container: '#795f2b'
  tertiary: '#735758'
  on-tertiary: '#ffffff'
  tertiary-container: '#b49393'
  on-tertiary-container: '#442d2d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#f9b5b5'
  on-primary-fixed: '#350f11'
  on-primary-fixed-variant: '#69393a'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e4c285'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5a4312'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#e2bebe'
  on-tertiary-fixed: '#2a1617'
  on-tertiary-fixed-variant: '#5a4041'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an editorial, high-touch luxury experience crafted for high-end wedding planning and bridal makeup artistry. It balances Indonesian heritage warmth, romantic sentiment, and modern minimalism. The visual voice is poised, intimate, and impeccably curated—avoiding ostentatious glitz in favor of quiet luxury, generous whitespace, tactile paper-like tones, and nuanced metallics.

The design movement merges **Warm Editorial Minimalism** with **Subtle Romantic Glass & Gold Accents**. It relies on delicate hairline dividers, soft light-play, warm-tinted translucent surfaces, and generous layout breathing room that mimics bespoke high-fashion bridal lookbooks and couture invitations.

## Colors

The palette is anchored on radiant, warm skin tones and celebration tones:
- **Base Canvas (`#FAF7F2`)**: An inviting ivory-linen background providing a softer, more romantic foundation than stark digital white.
- **Primary / Dusty Rose (`#C98B8B`)**: The emotional core; used for active states, key interactive highlights, and focal moments.
- **Secondary / Champagne Gold (`#C9A96E`)**: A refined satin metallic tone reserved for badges, premium indicators, key borders, and bespoke decorative accents.
- **Tertiary / Blush Pink (`#E8C4C4`)**: A tender tint used for muted pill containers, subtle hover fills, and gentle visual groupings.
- **Neutral / Deep Charcoal (`#2B2B2B`)**: Provides crisp editorial contrast for body copy and headings, preventing harsh stark-black contrast against ivory backdrops.
- **Surface Elevation (`#FFFFFF`)**: Pure warm white used sparingly for floating cards, input wells, and dialogs to lift off the ivory canvas.

## Typography

The type scale establishes a refined dialogue between the grand, romantic serifs of Playfair Display and the modern, open geometry of Plus Jakarta Sans. 

- **Headlines & Display:** Set in Playfair Display. Large headings should use italic styling on select romantic keywords (such as *Abadi*, *Perayaan*, or *Love*) to amplify editorial craftsmanship.
- **Body & Captions:** Plus Jakarta Sans ensures clarity across multi-lingual Indonesian and English ceremonial descriptions, package pricing, and itinerary schedules.
- **Labels & Overlines:** Styled with medium to bold weights, high-contrast casing (often uppercase), and deliberate tracking for a jewelry-grade branding cadence.

## Layout & Spacing

A 12-column responsive grid governs desktop arrangements with generous lateral canvas padding to produce a boutique catalog feel. 

- **Desktop (1024px and up):** 12 columns, `gutter: 1.5rem`, `margin: 3rem` (clamped to a max-width container of 1280px). Section blocks adopt vertical paddings of `space-xl` to twice `space-xl` to induce stillness and unhurried browsing.
- **Tablet (768px – 1023px):** 8 columns, `gutter: 1.25rem`, `margin: 2rem`.
- **Mobile (< 768px):** 4 columns, `gutter-mobile: 1rem`, `margin-mobile: 1.25rem`. Complex vendor matrices collapse into horizontal carousels or single-column stepped stacks.

## Elevation & Depth

Visual hierarchy uses ambient, warm-tinted shadows and delicate micro-borders instead of heavy synthetic drops:

- **Flat/Resting:** Surfaces seamlessly blend with `#FAF7F2` or sit on a pure `#FFFFFF` background bound by a 1px border of `#E8C4C4` or `#C9A96E` at 30% opacity.
- **Low Elevation (Cards, Lookbook Tiles):** `box-shadow: 0 4px 20px -2px rgba(43, 43, 43, 0.04), 0 2px 6px -1px rgba(201, 139, 139, 0.06);` provides a soft, warm levitation reminiscent of fine stationery.
- **High Elevation (Modals, Floating Booking Bar, Lookbook Quickview):** `box-shadow: 0 16px 40px -4px rgba(43, 43, 43, 0.08), 0 4px 12px rgba(201, 169, 110, 0.12);` complemented by a warm-tinted backdrop blur (`backdrop-filter: blur(12px)` over `rgba(250, 247, 242, 0.8)`).

## Shapes

The geometric balance marries structured rectangles with rounded softness. Surfaces and cards use a refined `0.5rem` (`roundedness: 2`) curvature, while key action components, tags, and badges feature full pill silhouettes to evoke organic, flowing softness. Circular frames are strictly reserved for vendor avatars and bridal makeup detail close-ups.

## Components

### Buttons
- **Primary:** Full pill silhouette (`rounded-full`), filled with Dusty Rose (`#C98B8B`), text in pure white (`#FFFFFF`), subtle hover transition to a deeper rose (`#B37777`) with a soft rosy glow.
- **Secondary / Luxury Accent:** Pill silhouette, transparent background, bounded by a 1px Champagne Gold border (`#C9A96E`), Deep Charcoal text (`#2B2B2B`). On hover, fills with a sheer gold wash (`rgba(201, 169, 110, 0.08)`).
- **Text Action:** Playfair or Plus Jakarta Sans with a subtle gold underline positioned 4px beneath the baseline.

### Chips & Pill Tags
- Rendered with full pill radius (`9999px`), vertical padding `space-xs`, horizontal padding `space-md`.
- Styled with a delicate 1px border (`#C9A96E` at 40% opacity) or filled with sheer Blush Pink (`rgba(232, 196, 196, 0.35)`). Label text in uppercase `label-sm` with slight tracking.

### Cards (Packages, Portfolios & Services)
- White base (`#FFFFFF`) framed by a micro-border (`1px solid rgba(201, 169, 110, 0.25)`).
- Generous internal padding (`space-lg`), image viewports with 4:5 or 16:9 aspect ratios framed in `rounded-sm`.
- Card footers feature subtle Champagne Gold hairline dividers (`0.5px solid rgba(201, 169, 110, 0.2)`).

### Input Fields & Selects
- Pill or `0.5rem` rounded corners on soft ivory-tinted containers (`#FFFFFF`).
- Resting border in 1px Blush Pink (`#E8C4C4`).
- Focused state transitions to 1px Champagne Gold (`#C9A96E`) with a 3px ambient focus ring in `rgba(201, 169, 110, 0.15)`. Floating labels set in `label-sm`.

### Checkboxes & Radios
- Radios are circular with a Champagne Gold outer ring and Dusty Rose center fill.
- Checkboxes feature soft rounded corners (`4px`), 1.5px Champagne Gold frame, and a refined ivory checkmark upon Dusty Rose fill.

### Domain-Specific Components
- **Before & After MUA Slider:** Interactive touch split-view framed with gold hairline borders and pill-shaped drag anchors.
- **Wedding Timeline Ribbon:** A vertical or horizontal strand using thin Champagne Gold lines punctuated by soft dusty-rose event nodes.
- **Package Feature Checklist:** Minimalist checklist using delicate gold leaf/check icons, avoiding standard corporate bullet points.