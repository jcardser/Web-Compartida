// Animación fade-in de las tarjetas
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.custom-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 150);
  });
});

// Buscador en tiempo real
document.getElementById('search').addEventListener('keyup', function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll('.custom-card');
  cards.forEach(card => {
    let name = card.getAttribute('data-name').toLowerCase();
    card.style.display = name.includes(filter) ? '' : 'none';
  });
});

/* Contenedor menu*/
// Script para mostrar/ocultar el menú
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu-contenido");

  btn.addEventListener("click", function() {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Ocultar menú si se hace clic fuera
  window.addEventListener("click", function(e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });
});
