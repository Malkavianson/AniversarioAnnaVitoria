document.addEventListener("DOMContentLoaded", () => {
  const rsvpButton = document.getElementById("rsvpButton");

  if (rsvpButton) {
    rsvpButton.addEventListener("click", () => {
      console.log("Confirmação de presença clicada");

      // Placeholder de ação futura:
      // - abrir modal
      // - enviar para WhatsApp
      // - integrar com formulário / API
      alert("Confirmação registrada (placeholder)");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMapButton");
  const mapSection = document.getElementById("invitationMapSection");

  if (!toggleButton || !mapSection) return;

  toggleButton.addEventListener("click", () => {
    const isHidden = mapSection.classList.contains(
      "invitation-section--hidden"
    );

    if (isHidden) {
      mapSection.classList.remove("invitation-section--hidden");
      toggleButton.setAttribute("aria-expanded", "true");

      mapSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      mapSection.classList.add("invitation-section--hidden");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});
