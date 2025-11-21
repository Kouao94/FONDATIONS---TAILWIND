<script>
    const toggles = document.querySelectorAll("[data-toggle]");

    toggles.forEach(btn => {
      const menuId = btn.getAttribute("data-toggle");
      const menu = document.getElementById(menuId);
      const icon = btn.querySelector("ion-icon");  // récupère l'icône dans le bouton

      btn.addEventListener("click", () => {
        // Toggle du menu
        menu.classList.toggle("hidden");

        // Toggle de l'icône
        if (menu.classList.contains("hidden")) {
          icon.setAttribute("name", "menu-outline");   // menu fermé
        } else {
          icon.setAttribute("name", "close-outline");  // menu ouvert
        }
      });
    });
  </script>