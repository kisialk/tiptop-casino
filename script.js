(function () {
  "use strict";

  function initNav() {
    var toggles = document.querySelectorAll(".menu-toggle");
    toggles.forEach(function (btn) {
      var nav = document.querySelector(".site-nav");
      if (!nav) return;

      btn.addEventListener("click", function () {
        var open = !nav.classList.contains("is-open");
        nav.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });

      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        });
      });

      document.addEventListener("click", function (e) {
        if (!nav.classList.contains("is-open")) return;
        var header = document.querySelector(".site-header");
        if (header && !header.contains(e.target)) {
          nav.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        }
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          nav.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function initLogoFallback() {
    document.querySelectorAll(".site-logo--img img").forEach(function (img) {
      img.addEventListener("error", function () {
        var a = img.closest(".site-logo");
        if (!a) return;
        a.classList.remove("site-logo--img");
        a.classList.add("site-logo--text");
        a.setAttribute("aria-label", "Tip Top Casino — главная");
        a.innerHTML = "<span>Tip Top Casino</span>";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initNav();
      initLogoFallback();
    });
  } else {
    initNav();
    initLogoFallback();
  }
})();
