const theme = {
  colors: {
    chai:      "#c69c6d",   // warm latte
    kadak:     "#6f4e37",   // deep espresso
    elaichi:   "#d4a373",   // cardamom gold
    tulsi:     "#4a7c59",   // basil green
    kesar:     "#e07a5f",   // saffron-clay
    neel:      "#3d405b",   // indigo night
    doodh:     "#faf3e0",   // milk cream
    koyla:     "#1a1a2e",   // charcoal black

    white:     "#ffffff",
    black:     "#000000",
    gray:      "#6b7280",
    "gray-100":"#f3f4f6",
    "gray-200":"#e5e7eb",
    "gray-800":"#1f2937",
    "gray-900":"#111827",

    success:   "#22c55e",
    warning:   "#f59e0b",
    danger:    "#ef4444",
    info:      "#3b82f6",
  },

  shadows: {
    sm:   "0 1px 3px rgba(0,0,0,0.12)",
    md:   "0 4px 12px rgba(0,0,0,0.15)",
    lg:   "0 10px 30px rgba(0,0,0,0.20)",
    xl:   "0 20px 60px rgba(0,0,0,0.25)",
    chai: "0 8px 24px rgba(198,156,109,0.40)",
  },

  fonts: {
    sans:  "'Segoe UI', system-ui, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    mono:  "'Courier New', monospace",
  },

  leading: {
    tight:  "1.2",
    normal: "1.5",
    loose:  "1.8",
  },

  tracking: {
    tight:  "-0.02em",
    normal: "0em",
    wide:   "0.08em",
    wider:  "0.16em",
  },

  opacity: {
    0:   "0",
    25:  "0.25",
    50:  "0.5",
    75:  "0.75",
    100: "1",
  },
};

if (typeof module !== "undefined") module.exports = { theme };