function parseClass(cls, theme, staticUtilities) {
  if (!cls.startsWith("kc-")) return null;

  const responsiveMatch = cls.match(/^kc-(sm|md|lg|xl):(.*)/);
  if (responsiveMatch) {
    const breakpoints = { sm: "480px", md: "768px", lg: "1024px", xl: "1280px" };
    const [, bp, rest] = responsiveMatch;
    const inner = parseClass("kc-" + rest, theme, staticUtilities);
    if (!inner) return null;
    return { responsive: { breakpoint: breakpoints[bp], styles: inner.styles } };
  }

  const hoverMatch = cls.match(/^kc-hover:(.*)/);
  if (hoverMatch) {
    const inner = parseClass("kc-" + hoverMatch[1], theme, staticUtilities);
    if (!inner) return null;
    return { hover: inner.styles };
  }

  if (staticUtilities[cls]) {
    return { styles: staticUtilities[cls] };
  }

  const body = cls.slice(3); 

  const firstDash = body.indexOf("-");
  if (firstDash === -1) return null;

  const prefix = body.slice(0, firstDash);           
  const suffix = body.slice(firstDash + 1);      

  const numVal = parseFloat(suffix);
  const isNum  = !isNaN(numVal) && suffix.trim() !== "";

  switch (prefix) {
    case "p":
      if (!isNum) return null;
      return { styles: { padding: numVal + "px" } };

    case "pt":
      if (!isNum) return null;
      return { styles: { paddingTop: numVal + "px" } };

    case "pb":
      if (!isNum) return null;
      return { styles: { paddingBottom: numVal + "px" } };

    case "pl":
      if (!isNum) return null;
      return { styles: { paddingLeft: numVal + "px" } };

    case "pr":
      if (!isNum) return null;
      return { styles: { paddingRight: numVal + "px" } };

    case "px":
      if (!isNum) return null;
      return { styles: { paddingLeft: numVal + "px", paddingRight: numVal + "px" } };

    case "py":
      if (!isNum) return null;
      return { styles: { paddingTop: numVal + "px", paddingBottom: numVal + "px" } };

    case "m":
      if (!isNum) return null;
      return { styles: { margin: numVal + "px" } };

    case "mt":
      if (!isNum) return null;
      return { styles: { marginTop: numVal + "px" } };

    case "mb":
      if (!isNum) return null;
      return { styles: { marginBottom: numVal + "px" } };

    case "ml":
      if (!isNum) return null;
      return { styles: { marginLeft: numVal + "px" } };

    case "mr":
      if (!isNum) return null;
      return { styles: { marginRight: numVal + "px" } };

    case "mx":
      if (!isNum) return null;
      return { styles: { marginLeft: numVal + "px", marginRight: numVal + "px" } };

    case "my":
      if (!isNum) return null;
      return { styles: { marginTop: numVal + "px", marginBottom: numVal + "px" } };

    case "rounded":
      if (suffix === "full") return { styles: { borderRadius: "9999px" } };
      if (suffix === "none") return { styles: { borderRadius: "0" } };
      if (!isNum) return null;
      return { styles: { borderRadius: numVal + "px" } };

    case "text":
      if (isNum) return { styles: { fontSize: numVal + "px" } };

      if (theme.colors[suffix])
        return { styles: { color: theme.colors[suffix] } };
      return null;

    case "bg":
      if (theme.colors[suffix])
        return { styles: { backgroundColor: theme.colors[suffix] } };
      return { styles: { backgroundColor: suffix } };
      
    case "border":
      if (theme.colors[suffix])
        return { styles: { borderColor: theme.colors[suffix] } };
      if (isNum)
        return { styles: { borderWidth: numVal + "px", borderStyle: "solid" } };
      return null;

    case "w":
      if (isNum)  return { styles: { width:  numVal + "px" } };
      if (suffix === "half") return { styles: { width: "50%" } };
      return null;

    case "h":
      if (isNum)  return { styles: { height: numVal + "px" } };
      if (suffix === "half") return { styles: { height: "50%" } };
      return null;

    case "min-w": return isNum ? { styles: { minWidth:  numVal + "px" } } : null;
    case "max-w": return isNum ? { styles: { maxWidth:  numVal + "px" } } : null;
    case "min-h": return isNum ? { styles: { minHeight: numVal + "px" } } : null;
    case "max-h": return isNum ? { styles: { maxHeight: numVal + "px" } } : null;

    case "gap":
      if (!isNum) return null;
      return { styles: { gap: numVal + "px" } };

    case "cols":
      if (!isNum) return null;
      return { styles: { gridTemplateColumns: `repeat(${numVal}, 1fr)` } };

    case "z":
      if (!isNum) return null;
      return { styles: { zIndex: String(numVal) } };

    case "top":    return isNum ? { styles: { top:    numVal + "px" } } : null;
    case "right":  return isNum ? { styles: { right:  numVal + "px" } } : null;
    case "bottom": return isNum ? { styles: { bottom: numVal + "px" } } : null;
    case "left":   return isNum ? { styles: { left:   numVal + "px" } } : null;

    case "shadow":
      if (theme.shadows[suffix])
        return { styles: { boxShadow: theme.shadows[suffix] } };
      return null;

    case "font":
      if (theme.fonts[suffix])
        return { styles: { fontFamily: theme.fonts[suffix] } };
      return null;

    case "leading":
      if (theme.leading[suffix])
        return { styles: { lineHeight: theme.leading[suffix] } };
      if (isNum) return { styles: { lineHeight: String(numVal) } };
      return null;

    case "tracking":
      if (theme.tracking[suffix])
        return { styles: { letterSpacing: theme.tracking[suffix] } };
      return null;

    case "opacity":
      if (theme.opacity[suffix] !== undefined)
        return { styles: { opacity: theme.opacity[suffix] } };
      if (isNum) return { styles: { opacity: String(numVal / 100) } };
      return null;

    case "rounded-t":
      return isNum
        ? { styles: { borderTopLeftRadius: numVal + "px", borderTopRightRadius: numVal + "px" } }
        : null;
    case "rounded-b":
      return isNum
        ? { styles: { borderBottomLeftRadius: numVal + "px", borderBottomRightRadius: numVal + "px" } }
        : null;

    default:
      return null;
  }
}

if (typeof module !== "undefined") module.exports = { parseClass };