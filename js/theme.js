// Light/dark theme toggle, shared by every page.
// Loaded in <head> so the saved theme applies before the page appears
// (avoids a flash of the wrong colours).
(function () {
  var STORAGE_KEY = "theme";

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null; // storage blocked (e.g. private window): fall back to light
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var button = document.querySelector(".theme-toggle");
    if (button) {
      var isDark = theme === "dark";
      button.textContent = isDark ? "Light theme" : "Dark theme";
      button.setAttribute("aria-pressed", String(isDark));
    }
  }

  applyTheme(getSavedTheme() === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    applyTheme(document.documentElement.getAttribute("data-theme"));

    button.addEventListener("click", function () {
      var next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        // storage blocked: the choice just won't be remembered
      }
    });
  });
})();
