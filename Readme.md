# ☕ KadakCSS

> A lightweight utility-first CSS engine powered by pure JavaScript DOM manipulation.  
> No build tools. No dependencies. Just drop in one `<script>` tag and brew.

---

## What is this?

KadakCSS is a **mini Tailwind clone** that teaches you how utility-first CSS frameworks work internally.

Instead of running a build process to scan class names and emit a `.css` file, KadakCSS does everything **at runtime in the browser** using:

- `classList` reading
- Inline `element.style` assignment
- `MutationObserver` for dynamic elements
- `matchMedia` for responsive variants
- Event listeners for hover variants

---

## Quick Start

```html
<!-- 1. Include KadakCSS -->
<script src="https://cdn.jsdelivr.net/gh/Purakh-Nath/kadakcss@1.0.0/kadakcss.js"></script>

<!-- 2. Use kc-* classes anywhere in your HTML -->
<div class="kc-bg-chai kc-text-white kc-p-20 kc-rounded-12 kc-shadow-chai">
  Hello KadakCSS ☕
</div>
```

That's it. No `npm install`. No `tailwind.config.js`. No build step.

---

## File Structure

```
kadakcss/
├── kadakcss.js      ← Single-file bundle (use this in projects)
├── theme.js         ← Design tokens (colors, shadows, fonts…)
├── utilities.js     ← Static utility → CSS map
├── parser.js        ← Class name parser (dynamic utilities)
├── engine.js        ← DOM scanner + MutationObserver runner
├── index.html       ← Demo & docs page
└── README.md        ← This file
```

---

## Utility Classes

### Spacing
| Class | CSS |
|-------|-----|
| `kc-p-{n}` | `padding: npx` |
| `kc-m-{n}` | `margin: npx` |
| `kc-px-{n}` | `padding-left: npx; padding-right: npx` |
| `kc-py-{n}` | `padding-top: npx; padding-bottom: npx` |
| `kc-pt/pb/pl/pr-{n}` | individual sides |
| `kc-mt/mb/ml/mr-{n}` | individual margin sides |
| `kc-mx/my-{n}` | axis shorthands |
| `kc-gap-{n}` | `gap: npx` |

### Colors (Theme)
| Class | CSS |
|-------|-----|
| `kc-bg-{color}` | `background-color` |
| `kc-text-{color}` | `color` |
| `kc-border-{color}` | `border-color` |

**Built-in colors:**  
`chai` · `kadak` · `elaichi` · `tulsi` · `kesar` · `neel` · `doodh` · `koyla`  
`white` · `black` · `gray` · `success` · `warning` · `danger` · `info`

### Typography
| Class | CSS |
|-------|-----|
| `kc-text-{n}` | `font-size: npx` |
| `kc-font-bold` / `kc-font-semibold` etc. | `font-weight` |
| `kc-italic` | `font-style: italic` |
| `kc-uppercase` / `kc-lowercase` | `text-transform` |
| `kc-tracking-{key}` | `letter-spacing` (tight/normal/wide/wider) |
| `kc-leading-{key}` | `line-height` (tight/normal/loose) |
| `kc-text-center` / `kc-text-left` / `kc-text-right` | `text-align` |

### Sizing
| Class | CSS |
|-------|-----|
| `kc-w-{n}` | `width: npx` |
| `kc-h-{n}` | `height: npx` |
| `kc-w-full` | `width: 100%` |
| `kc-h-screen` | `height: 100vh` |
| `kc-max-w-{n}` / `kc-min-w-{n}` | max/min width |

### Border Radius
| Class | CSS |
|-------|-----|
| `kc-rounded-{n}` | `border-radius: npx` |
| `kc-rounded-full` | `border-radius: 9999px` |
| `kc-rounded-none` | `border-radius: 0` |

### Layout
| Class | CSS |
|-------|-----|
| `kc-flex` | `display: flex` |
| `kc-grid` | `display: grid` |
| `kc-cols-{n}` | `grid-template-columns: repeat(n, 1fr)` |
| `kc-items-center` | `align-items: center` |
| `kc-justify-between` | `justify-content: space-between` |
| `kc-flex-col` | `flex-direction: column` |

### Shadows
| Class | CSS |
|-------|-----|
| `kc-shadow-sm/md/lg/xl` | box-shadow presets |
| `kc-shadow-chai` | warm chai glow |

---

## Variants

### Hover
```html
<button class="kc-bg-kadak kc-hover:bg-chai kc-transition">
  Hover me
</button>
```

### Responsive
```html
<div class="kc-p-10 kc-md:p-24 kc-lg:p-40">
  Grows with viewport
</div>
```
Breakpoints: `sm` (480px) · `md` (768px) · `lg` (1024px) · `xl` (1280px)

---

## JavaScript API

```js
// Enable debug warnings for unknown classes
KadakCSS.debug = true;

// Add a custom color at runtime
KadakCSS.addColor('mango', '#ffb347');
// Now: kc-bg-mango and kc-text-mango work!

// Add a custom static utility
KadakCSS.addUtility('kc-card', {
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
});

// Add a custom shadow
KadakCSS.addShadow('neon', '0 0 20px rgba(59,130,246,0.6)');

// Re-scan after programmatic DOM changes
KadakCSS.refresh();

// Stop the MutationObserver
KadakCSS.destroy();
```

---

## How It Works (Architecture)

```
HTML class="kc-bg-chai kc-p-20"
         │
         ▼
   engine.js - scan(document)
         │  
         ├── for each element with kc-* classes
         │         │
         │         ▼
         │   parser.js - parseClass("kc-bg-chai")
         │         │
         │         ├── static lookup in utilities.js -> { backgroundColor: '#c69c6d' }
         │         ├── dynamic regex -> kc-p-20 → { padding: '20px' }
         │         ├── theme lookup -> colors.chai → '#c69c6d'
         │         ├── hover variant -> attach mouseenter/leave listeners
         │         └── responsive variant -> attach matchMedia listener
         │
         └── Object.assign(element.style, resolvedStyles)
               │
               ▼
         MutationObserver watches for new elements -> re-runs engine
```

---

## Why Build This?

Most developers use Tailwind without understanding what happens under the hood.  
KadakCSS demystifies that by showing the exact same concepts implemented in ~300 lines of vanilla JavaScript:

- **Parsing class names** -> string manipulation
- **Applying styles** -> `element.style` / `Object.assign`
- **Reactivity** -> `MutationObserver`
- **Responsive** -> `window.matchMedia`
- **Hover** -> `addEventListener`

---

## License

MIT - use it, fork it, learn from it.