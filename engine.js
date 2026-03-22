(function (global) {
  "use strict";

  const processedElements = new WeakSet();
  const hoverMap = new WeakMap();
  const responsiveListeners = [];

  const BREAKPOINTS = {
    "480px": null,
    "768px": null,
    "1024px": null,
    "1280px": null,
  };

  Object.keys(BREAKPOINTS).forEach((bp) => {
    if (typeof window !== "undefined" && window.matchMedia) {
      BREAKPOINTS[bp] = window.matchMedia(`(min-width: ${bp})`);
    }
  });
  function applyStyles(element, styles) {
    Object.assign(element.style, styles);
  }

  function attachHoverListeners(element, hoverStyles) {
    const originals = {};
    Object.keys(hoverStyles).forEach((prop) => {
      originals[prop] = element.style[prop] || "";
    });

    const onEnter = () => applyStyles(element, hoverStyles);
    const onLeave = () => applyStyles(element, originals);

    const prev = hoverMap.get(element);
    if (prev) {
      element.removeEventListener("mouseenter", prev.onEnter);
      element.removeEventListener("mouseleave", prev.onLeave);
    }

    element.addEventListener("mouseenter", onEnter);
    element.addEventListener("mouseleave", onLeave);
    hoverMap.set(element, { onEnter, onLeave });
  }

  function attachResponsiveStyles(element, breakpoint, styles) {
    const mql = BREAKPOINTS[breakpoint];
    if (!mql) return;

    // Store originals for reverting
    const originals = {};
    Object.keys(styles).forEach((prop) => {
      originals[prop] = element.style[prop] || "";
    });

    const handler = (e) => {
      if (e.matches) {
        applyStyles(element, styles);
      } else {
        applyStyles(element, originals);
      }
    };

    if (mql.matches) applyStyles(element, styles);

    mql.addEventListener("change", handler);
    responsiveListeners.push({ mql, handler });
  }
  function processElement(element) {
    const classes = Array.from(element.classList);

    const kcClasses = classes.filter((c) => c.startsWith("kc-"));
    if (kcClasses.length === 0) return;

    const fingerprint = kcClasses.sort().join("|");
    if (element.__kcFingerprint === fingerprint) return;
    element.__kcFingerprint = fingerprint;

    // Mark as processed in the WeakSet
    processedElements.add(element);

    const accumulatedHover = {};

    kcClasses.forEach((cls) => {
      const result = parseClass(cls, theme, staticUtilities);
      if (!result) {
        // dev warning
        if (KadakCSS.debug) {
          console.warn(`[KadakCSS] Unknown class: "${cls}"`);
        }
        return;
      }

      if (result.styles) {
        applyStyles(element, result.styles);
      }

      if (result.hover) {
        Object.assign(accumulatedHover, result.hover);
      }

      if (result.responsive) {
        attachResponsiveStyles(
          element,
          result.responsive.breakpoint,
          result.responsive.styles,
        );
      }
    });

    if (Object.keys(accumulatedHover).length > 0) {
      attachHoverListeners(element, accumulatedHover);
    }
  }

  function scan(root) {
    const elements =
      root === document
        ? document.querySelectorAll("*")
        : root.querySelectorAll
          ? [root, ...root.querySelectorAll("*")]
          : [root];

    elements.forEach((el) => {
      if (el.classList && el.classList.length > 0) {
        processElement(el);
      }
    });
  }

  let observer = null;

  function startObserver() {
    if (observer) return; // Already running

    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              scan(node);
            }
          });
        }

        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (mutation.target.nodeType === Node.ELEMENT_NODE) {
            mutation.target.__kcFingerprint = null;
            processElement(mutation.target);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  function stopObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  // Public API
  const KadakCSS = {
    debug: false, //  true to enable console warnings
    init() {
      console.log(
        "%c⚡ KadakCSS initialised",
        "color:#c69c6d;font-weight:bold;font-size:14px;",
      );
      scan(document);
      startObserver();
      return this; // chainable
    },
    refresh() {
      document.querySelectorAll("*").forEach((el) => {
        el.__kcFingerprint = null;
      });
      scan(document);
      return this;
    },

    destroy() {
      stopObserver();
      responsiveListeners.forEach(({ mql, handler }) => {
        mql.removeEventListener("change", handler);
      });
      responsiveListeners.length = 0;
      return this;
    },
    addUtility(className, styles) {
      if (!className.startsWith("kc-")) {
        console.warn(
          `[KadakCSS] Custom utilities must start with "kc-". Got: "${className}"`,
        );
        return this;
      }
      staticUtilities[className] = styles;
      return this;
    },
    addColor(name, value) {
      theme.colors[name] = value;
      return this;
    },
    version: "1.0.0",
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
