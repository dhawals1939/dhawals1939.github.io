// /js/theme.js
// Loaded synchronously in <head> so the theme class is on <html> before
// first paint (no light flash for dark-mode visitors).
(function () {
  const STORAGE_KEY = "theme"; // "light" | "dark"
  const CLASS_DARK = "dark-mode";
  const root = document.documentElement;

  function applyTheme(theme) {
    root.classList.toggle(CLASS_DARK, theme === "dark");
  }

  // Storage can throw (private mode, blocked site data); fall back to light
  function load() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  const saved = load();
  applyTheme(saved === "dark" ? "dark" : "light");

  // Expose toggle function globally for the button
  window.toggleTheme = function () {
    const next = root.classList.contains(CLASS_DARK) ? "light" : "dark";
    applyTheme(next);
    save(next);
  };
})();
