(function () {
  const STORAGE_KEY = "theme";        // "light" | "dark"
  const CLASS_DARK = "dark-mode";

  function applyTheme(theme) {
    document.body.classList.toggle(CLASS_DARK, theme === "dark");
  }

  function getSystemPreference() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // Init: use saved theme or system preference
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    applyTheme(getSystemPreference());
  }

  // Expose toggle function globally for the button
  window.toggleTheme = function () {
    const isDark = document.body.classList.contains(CLASS_DARK);
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };
})();
