(function (global) {
  "use strict";

  const theme = {
    colors: {
      chai:      "#c69c6d",
      kadak:     "#6f4e37",
      elaichi:   "#d4a373",
      tulsi:     "#4a7c59",
      kesar:     "#e07a5f",
      neel:      "#3d405b",
      doodh:     "#faf3e0",
      koyla:     "#1a1a2e",
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
      0: "0", 25: "0.25", 50: "0.5", 75: "0.75", 100: "1",
    },
  };

  // exact-match map
  const staticUtilities = {
    "kc-block":           { display: "block" },
    "kc-inline":          { display: "inline" },
    "kc-inline-block":    { display: "inline-block" },
    "kc-flex":            { display: "flex" },
    "kc-inline-flex":     { display: "inline-flex" },
    "kc-grid":            { display: "grid" },
    "kc-hidden":          { display: "none" },
    "kc-flex-row":        { flexDirection: "row" },
    "kc-flex-col":        { flexDirection: "column" },
    "kc-flex-wrap":       { flexWrap: "wrap" },
    "kc-flex-nowrap":     { flexWrap: "nowrap" },
    "kc-flex-1":          { flex: "1 1 0%" },
    "kc-flex-auto":       { flex: "1 1 auto" },
    "kc-flex-none":       { flex: "none" },
    "kc-items-start":     { alignItems: "flex-start" },
    "kc-items-center":    { alignItems: "center" },
    "kc-items-end":       { alignItems: "flex-end" },
    "kc-items-stretch":   { alignItems: "stretch" },
    "kc-justify-start":   { justifyContent: "flex-start" },
    "kc-justify-center":  { justifyContent: "center" },
    "kc-justify-end":     { justifyContent: "flex-end" },
    "kc-justify-between": { justifyContent: "space-between" },
    "kc-justify-around":  { justifyContent: "space-around" },
    "kc-justify-evenly":  { justifyContent: "space-evenly" },
    "kc-text-left":       { textAlign: "left" },
    "kc-text-center":     { textAlign: "center" },
    "kc-text-right":      { textAlign: "right" },
    "kc-text-justify":    { textAlign: "justify" },
    "kc-font-thin":       { fontWeight: "100" },
    "kc-font-light":      { fontWeight: "300" },
    "kc-font-normal":     { fontWeight: "400" },
    "kc-font-medium":     { fontWeight: "500" },
    "kc-font-semibold":   { fontWeight: "600" },
    "kc-font-bold":       { fontWeight: "700" },
    "kc-font-extrabold":  { fontWeight: "800" },
    "kc-font-black":      { fontWeight: "900" },
    "kc-italic":          { fontStyle: "italic" },
    "kc-not-italic":      { fontStyle: "normal" },
    "kc-underline":       { textDecoration: "underline" },
    "kc-line-through":    { textDecoration: "line-through" },
    "kc-no-underline":    { textDecoration: "none" },
    "kc-uppercase":       { textTransform: "uppercase" },
    "kc-lowercase":       { textTransform: "lowercase" },
    "kc-capitalize":      { textTransform: "capitalize" },
    "kc-static":          { position: "static" },
    "kc-relative":        { position: "relative" },
    "kc-absolute":        { position: "absolute" },
    "kc-fixed":           { position: "fixed" },
    "kc-sticky":          { position: "sticky", top: "0" },
    "kc-overflow-auto":   { overflow: "auto" },
    "kc-overflow-hidden": { overflow: "hidden" },
    "kc-overflow-scroll": { overflow: "scroll" },
    "kc-cursor-pointer":  { cursor: "pointer" },
    "kc-cursor-default":  { cursor: "default" },
    "kc-cursor-not-allowed": { cursor: "not-allowed" },
    "kc-border-solid":    { borderStyle: "solid" },
    "kc-border-dashed":   { borderStyle: "dashed" },
    "kc-border-dotted":   { borderStyle: "dotted" },
    "kc-border-none":     { borderStyle: "none" },
    "kc-w-full":          { width: "100%" },
    "kc-w-screen":        { width: "100vw" },
    "kc-w-auto":          { width: "auto" },
    "kc-h-full":          { height: "100%" },
    "kc-h-screen":        { height: "100vh" },
    "kc-h-auto":          { height: "auto" },
    "kc-box-border":      { boxSizing: "border-box" },
    "kc-pointer-none":    { pointerEvents: "none" },
    "kc-select-none":     { userSelect: "none" },
    "kc-select-all":      { userSelect: "all" },
    "kc-visible":         { visibility: "visible" },
    "kc-invisible":       { visibility: "hidden" },
    "kc-transition":      { transition: "all 0.2s ease" },
    "kc-transition-slow": { transition: "all 0.4s ease" },
    "kc-transition-fast": { transition: "all 0.1s ease" },
    "kc-list-none":       { listStyle: "none" },
    "kc-list-disc":       { listStyleType: "disc" },
  };

  //class name -> CSS object
  function parseClass(cls, theme, staticUtilities) {
    if (!cls.startsWith("kc-")) return null;

    const responsiveMatch = cls.match(/^kc-(sm|md|lg|xl):(.*)/);
    if (responsiveMatch) {
      const bps = { sm: "480px", md: "768px", lg: "1024px", xl: "1280px" };
      const [, bp, rest] = responsiveMatch;
      const inner = parseClass("kc-" + rest, theme, staticUtilities);
      if (!inner) return null;
      return { responsive: { breakpoint: bps[bp], styles: inner.styles } };
    }

    const hoverMatch = cls.match(/^kc-hover:(.*)/);
    if (hoverMatch) {
      const inner = parseClass("kc-" + hoverMatch[1], theme, staticUtilities);
      if (!inner) return null;
      return { hover: inner.styles };
    }

    // static lookup
    if (staticUtilities[cls]) return { styles: staticUtilities[cls] };

    // dynamic parsing
    const body      = cls.slice(3);
    const firstDash = body.indexOf("-");
    if (firstDash === -1) return null;

    const prefix = body.slice(0, firstDash);
    const suffix = body.slice(firstDash + 1);
    const numVal = parseFloat(suffix);
    const isNum  = !isNaN(numVal) && suffix.trim() !== "";

    const px = v => v + "px";

    switch (prefix) {
      case "p":   return isNum ? { styles: { padding:       px(numVal) } } : null;
      case "pt":  return isNum ? { styles: { paddingTop:    px(numVal) } } : null;
      case "pb":  return isNum ? { styles: { paddingBottom: px(numVal) } } : null;
      case "pl":  return isNum ? { styles: { paddingLeft:   px(numVal) } } : null;
      case "pr":  return isNum ? { styles: { paddingRight:  px(numVal) } } : null;
      case "px":  return isNum ? { styles: { paddingLeft:   px(numVal), paddingRight:  px(numVal) } } : null;
      case "py":  return isNum ? { styles: { paddingTop:    px(numVal), paddingBottom: px(numVal) } } : null;
      case "m":   return isNum ? { styles: { margin:        px(numVal) } } : null;
      case "mt":  return isNum ? { styles: { marginTop:     px(numVal) } } : null;
      case "mb":  return isNum ? { styles: { marginBottom:  px(numVal) } } : null;
      case "ml":  return isNum ? { styles: { marginLeft:    px(numVal) } } : null;
      case "mr":  return isNum ? { styles: { marginRight:   px(numVal) } } : null;
      case "mx":  return isNum ? { styles: { marginLeft:    px(numVal), marginRight:   px(numVal) } } : null;
      case "my":  return isNum ? { styles: { marginTop:     px(numVal), marginBottom:  px(numVal) } } : null;
      case "gap": return isNum ? { styles: { gap:           px(numVal) } } : null;
      case "w":
        if (isNum) return { styles: { width:  px(numVal) } };
        if (suffix === "half") return { styles: { width: "50%" } };
        return null;
      case "h":
        if (isNum) return { styles: { height: px(numVal) } };
        if (suffix === "half") return { styles: { height: "50%" } };
        return null;
      case "min-w":  return isNum ? { styles: { minWidth:  px(numVal) } } : null;
      case "max-w":  return isNum ? { styles: { maxWidth:  px(numVal) } } : null;
      case "min-h":  return isNum ? { styles: { minHeight: px(numVal) } } : null;
      case "max-h":  return isNum ? { styles: { maxHeight: px(numVal) } } : null;
      case "z":      return isNum ? { styles: { zIndex: String(numVal) } } : null;
      case "top":    return isNum ? { styles: { top:    px(numVal) } } : null;
      case "right":  return isNum ? { styles: { right:  px(numVal) } } : null;
      case "bottom": return isNum ? { styles: { bottom: px(numVal) } } : null;
      case "left":   return isNum ? { styles: { left:   px(numVal) } } : null;
      case "cols":   return isNum ? { styles: { gridTemplateColumns: `repeat(${numVal}, 1fr)` } } : null;
      case "rounded":
        if (suffix === "full") return { styles: { borderRadius: "9999px" } };
        if (suffix === "none") return { styles: { borderRadius: "0" } };
        return isNum ? { styles: { borderRadius: px(numVal) } } : null;
      case "text":
        if (isNum) return { styles: { fontSize: px(numVal) } };
        if (theme.colors[suffix]) return { styles: { color: theme.colors[suffix] } };
        return null;
      case "bg":
        if (theme.colors[suffix]) return { styles: { backgroundColor: theme.colors[suffix] } };
        return { styles: { backgroundColor: suffix } };
      case "border":
        if (theme.colors[suffix]) return { styles: { borderColor: theme.colors[suffix] } };
        if (isNum) return { styles: { borderWidth: px(numVal), borderStyle: "solid" } };
        return null;
      case "shadow":
        if (theme.shadows[suffix]) return { styles: { boxShadow: theme.shadows[suffix] } };
        return null;
      case "font":
        if (theme.fonts[suffix]) return { styles: { fontFamily: theme.fonts[suffix] } };
        return null;
      case "leading":
        if (theme.leading[suffix]) return { styles: { lineHeight: theme.leading[suffix] } };
        if (isNum) return { styles: { lineHeight: String(numVal) } };
        return null;
      case "tracking":
        if (theme.tracking[suffix]) return { styles: { letterSpacing: theme.tracking[suffix] } };
        return null;
      case "opacity":
        if (theme.opacity[suffix] !== undefined) return { styles: { opacity: theme.opacity[suffix] } };
        if (isNum) return { styles: { opacity: String(numVal / 100) } };
        return null;
      default:
        return null;
    }
  }

  const processedElements  = new WeakSet();
  const hoverMap           = new WeakMap();
  const responsiveListeners = [];

  const BREAKPOINTS = {};
  ["480px","768px","1024px","1280px"].forEach(bp => {
    if (typeof window !== "undefined" && window.matchMedia) {
      BREAKPOINTS[bp] = window.matchMedia(`(min-width: ${bp})`);
    }
  });

  function applyStyles(el, styles) {
    Object.assign(el.style, styles);
  }

  function attachHoverListeners(el, hoverStyles) {
    const originals = {};
    Object.keys(hoverStyles).forEach(prop => {
      originals[prop] = el.style[prop] || "";
    });
    const prev = hoverMap.get(el);
    if (prev) {
      el.removeEventListener("mouseenter", prev.onEnter);
      el.removeEventListener("mouseleave", prev.onLeave);
    }
    const onEnter = () => applyStyles(el, hoverStyles);
    const onLeave = () => applyStyles(el, originals);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    hoverMap.set(el, { onEnter, onLeave });
  }

  function attachResponsiveStyles(el, breakpoint, styles) {
    const mql = BREAKPOINTS[breakpoint];
    if (!mql) return;
    const originals = {};
    Object.keys(styles).forEach(prop => { originals[prop] = el.style[prop] || ""; });
    const handler = e => applyStyles(el, e.matches ? styles : originals);
    if (mql.matches) applyStyles(el, styles);
    mql.addEventListener("change", handler);
    responsiveListeners.push({ mql, handler });
  }

  function processElement(el) {
    const kcClasses = Array.from(el.classList).filter(c => c.startsWith("kc-"));
    if (!kcClasses.length) return;

    const fingerprint = [...kcClasses].sort().join("|");
    if (el.__kcFingerprint === fingerprint) return;
    el.__kcFingerprint = fingerprint;
    processedElements.add(el);

    const accHover = {};

    kcClasses.forEach(cls => {
      const result = parseClass(cls, theme, staticUtilities);
      if (!result) {
        if (KadakCSS.debug) console.warn(`[KadakCSS] Unknown class: "${cls}"`);
        return;
      }
      if (result.styles)     applyStyles(el, result.styles);
      if (result.hover)      Object.assign(accHover, result.hover);
      if (result.responsive) attachResponsiveStyles(el, result.responsive.breakpoint, result.responsive.styles);
    });

    if (Object.keys(accHover).length) attachHoverListeners(el, accHover);
  }

  function scan(root) {
    const els = (root === document)
      ? document.querySelectorAll("*")
      : root.querySelectorAll
        ? [root, ...root.querySelectorAll("*")]
        : [root];
    els.forEach(el => { if (el.classList?.length) processElement(el); });
  }

  let observer = null;

  function startObserver() {
    if (observer) return;
    observer = new MutationObserver(mutations => {
      mutations.forEach(mut => {
        if (mut.type === "childList") {
          mut.addedNodes.forEach(n => { if (n.nodeType === 1) scan(n); });
        }
        if (mut.type === "attributes" && mut.attributeName === "class") {
          mut.target.__kcFingerprint = null;
          processElement(mut.target);
        }
      });
    });
    observer.observe(document.body, {
      childList: true, subtree: true,
      attributes: true, attributeFilter: ["class"],
    });
  }

  const KadakCSS = {
    version: "1.0.0",
    debug:   false,
    theme,
    staticUtilities,

    init() {
      console.log("%c⚡ KadakCSS v1.0.0 ready", "color:#c69c6d;font-weight:bold;font-size:14px;");
      scan(document);
      startObserver();
      return this;
    },

    refresh() {
      document.querySelectorAll("*").forEach(el => { el.__kcFingerprint = null; });
      scan(document);
      return this;
    },

    destroy() {
      if (observer) { observer.disconnect(); observer = null; }
      responsiveListeners.forEach(({ mql, handler }) => mql.removeEventListener("change", handler));
      responsiveListeners.length = 0;
      return this;
    },

    addUtility(className, styles) {
      if (!className.startsWith("kc-")) {
        console.warn(`[KadakCSS] Class must start with "kc-". Got: "${className}"`);
        return this;
      }
      staticUtilities[className] = styles;
      return this;
    },

    addColor(name, value) {
      theme.colors[name] = value;
      return this;
    },

    addShadow(name, value) {
      theme.shadows[name] = value;
      return this;
    },
  };

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => KadakCSS.init());
    } else {
      KadakCSS.init();
    }
  }

  global.KadakCSS = KadakCSS;

})(typeof window !== "undefined" ? window : global);