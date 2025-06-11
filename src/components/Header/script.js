document.addEventListener("DOMContentLoaded", function () {
      const hamburger = document.querySelector(".hamburger");
      const nav = document.querySelector(".header-nav");
      const overlay = document.querySelector(".mobile-nav-overlay");
      const navLinks = document.querySelectorAll(".header-nav a");

      if (!overlay) {
        const newOverlay = document.createElement("div");
        newOverlay.className = "mobile-nav-overlay";
        document.body.appendChild(newOverlay);
      }

      const mobileOverlay = document.querySelector(".mobile-nav-overlay");

      function toggleMenu() {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
        mobileOverlay.classList.toggle("active");
        document.body.style.overflow = nav.classList.contains("active")
          ? "hidden"
          : "";
      }

      function closeMenu() {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        mobileOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }

      hamburger.addEventListener("click", toggleMenu);
      mobileOverlay.addEventListener("click", closeMenu);

      // Close menu when clicking nav links
      navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      // Close menu on window resize if mobile menu is open
      window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && nav.classList.contains("active")) {
          closeMenu();
        }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    });