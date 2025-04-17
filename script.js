let currentLang = 'es';

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("language-toggle");
  const elements = document.querySelectorAll("[data-es]");

  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === 'es' ? 'ca' : 'es';
    toggleBtn.textContent = currentLang === 'es' ? 'Català' : 'Castellano';

    elements.forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });
  });
});
