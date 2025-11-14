// /js/theme.js
(function () {
  const STORAGE_KEY = "theme";        // "light" | "dark"
  const CLASS_DARK = "dark-mode";

  function applyTheme(theme) {
    document.body.classList.toggle(CLASS_DARK, theme === "dark");
  }

  // Init: use saved theme if present, otherwise default to light
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = (saved === "light" || saved === "dark") ? saved : "light";
  applyTheme(initial);

  // Expose toggle function globally for the button
  window.toggleTheme = function () {
    const isDark = document.body.classList.contains(CLASS_DARK);
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };
})();
