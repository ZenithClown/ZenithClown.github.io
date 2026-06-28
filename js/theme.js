/*
 * Slytherin Theme Toggle
 * --------------------------------------------------------------------------
 * Persists the user's dark/light choice in localStorage (default: dark) and
 * flips `data-theme` on <html>. The no-flash inline snippet in each page's
 * <head> sets the attribute before first paint; this file wires up the button
 * and keeps the glyph in sync. Pure vanilla JS, guards against a missing
 * button so it is safe to include on pages without the toggle.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "sly-theme";
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* private mode / storage disabled, theme still applies for this view */
    }
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = theme === "light" ? "☀️" : "🌙"; // ☀️ / 🌙
      btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }
  }

  function init() {
    applyTheme(currentTheme());
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        applyTheme(currentTheme() === "light" ? "dark" : "light");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
