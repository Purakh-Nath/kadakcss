const staticUtilities = {

  "kc-block":        { display: "block" },
  "kc-inline":       { display: "inline" },
  "kc-inline-block": { display: "inline-block" },
  "kc-flex":         { display: "flex" },
  "kc-inline-flex":  { display: "inline-flex" },
  "kc-grid":         { display: "grid" },
  "kc-hidden":       { display: "none" },

  "kc-flex-row":     { flexDirection: "row" },
  "kc-flex-col":     { flexDirection: "column" },
  "kc-flex-wrap":    { flexWrap: "wrap" },
  "kc-flex-nowrap":  { flexWrap: "nowrap" },
  "kc-flex-1":       { flex: "1 1 0%" },
  "kc-flex-auto":    { flex: "1 1 auto" },
  "kc-flex-none":    { flex: "none" },

  "kc-items-start":   { alignItems: "flex-start" },
  "kc-items-center":  { alignItems: "center" },
  "kc-items-end":     { alignItems: "flex-end" },
  "kc-items-stretch": { alignItems: "stretch" },

  "kc-justify-start":   { justifyContent: "flex-start" },
  "kc-justify-center":  { justifyContent: "center" },
  "kc-justify-end":     { justifyContent: "flex-end" },
  "kc-justify-between": { justifyContent: "space-between" },
  "kc-justify-around":  { justifyContent: "space-around" },
  "kc-justify-evenly":  { justifyContent: "space-evenly" },

  "kc-text-left":    { textAlign: "left" },
  "kc-text-center":  { textAlign: "center" },
  "kc-text-right":   { textAlign: "right" },
  "kc-text-justify": { textAlign: "justify" },

  "kc-font-thin":       { fontWeight: "100" },
  "kc-font-light":      { fontWeight: "300" },
  "kc-font-normal":     { fontWeight: "400" },
  "kc-font-medium":     { fontWeight: "500" },
  "kc-font-semibold":   { fontWeight: "600" },
  "kc-font-bold":       { fontWeight: "700" },
  "kc-font-extrabold":  { fontWeight: "800" },
  "kc-font-black":      { fontWeight: "900" },

  "kc-italic":     { fontStyle: "italic" },
  "kc-not-italic": { fontStyle: "normal" },


  "kc-underline":    { textDecoration: "underline" },
  "kc-line-through": { textDecoration: "line-through" },
  "kc-no-underline": { textDecoration: "none" },

  "kc-uppercase":   { textTransform: "uppercase" },
  "kc-lowercase":   { textTransform: "lowercase" },
  "kc-capitalize":  { textTransform: "capitalize" },
  "kc-normal-case": { textTransform: "none" },

  "kc-static":   { position: "static" },
  "kc-relative": { position: "relative" },
  "kc-absolute": { position: "absolute" },
  "kc-fixed":    { position: "fixed" },
  "kc-sticky":   { position: "sticky", top: "0" },

  "kc-overflow-auto":    { overflow: "auto" },
  "kc-overflow-hidden":  { overflow: "hidden" },
  "kc-overflow-scroll":  { overflow: "scroll" },
  "kc-overflow-visible": { overflow: "visible" },
  "kc-overflow-x-auto":  { overflowX: "auto" },
  "kc-overflow-y-auto":  { overflowY: "auto" },

  "kc-cursor-pointer":  { cursor: "pointer" },
  "kc-cursor-default":  { cursor: "default" },
  "kc-cursor-not-allowed": { cursor: "not-allowed" },
  "kc-cursor-grab":     { cursor: "grab" },
  "kc-cursor-text":     { cursor: "text" },

  "kc-border-solid":  { borderStyle: "solid" },
  "kc-border-dashed": { borderStyle: "dashed" },
  "kc-border-dotted": { borderStyle: "dotted" },
  "kc-border-none":   { borderStyle: "none" },

  "kc-w-full":    { width: "100%" },
  "kc-w-screen":  { width: "100vw" },
  "kc-w-auto":    { width: "auto" },
  "kc-h-full":    { height: "100%" },
  "kc-h-screen":  { height: "100vh" },
  "kc-h-auto":    { height: "auto" },

  "kc-box-border":  { boxSizing: "border-box" },
  "kc-box-content": { boxSizing: "content-box" },

  "kc-pointer-none":   { pointerEvents: "none" },
  "kc-pointer-auto":   { pointerEvents: "auto" },

  "kc-select-none":  { userSelect: "none" },
  "kc-select-text":  { userSelect: "text" },
  "kc-select-all":   { userSelect: "all" },
  "kc-select-auto":  { userSelect: "auto" },

  "kc-visible":   { visibility: "visible" },
  "kc-invisible": { visibility: "hidden" },

  "kc-transition": {
    transition: "all 0.2s ease",
  },
  "kc-transition-slow": {
    transition: "all 0.4s ease",
  },
  "kc-transition-fast": {
    transition: "all 0.1s ease",
  },

  "kc-list-none": { listStyle: "none" },
  "kc-list-disc": { listStyleType: "disc" },
  "kc-list-decimal": { listStyleType: "decimal" },
};


if (typeof module !== "undefined") module.exports = { staticUtilities };