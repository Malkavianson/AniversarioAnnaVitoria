document.addEventListener("DOMContentLoaded", () => {
  const toggleMapButton = document.getElementById("toggleMapButton");
  const mapSection = document.getElementById("invitationMapSection");
  const opening = document.getElementById("invitationOpening");
  const openButton = document.getElementById("openInvitationButton");
  const layer = document.querySelector(".invitation-bubbles-layer");
  const card = document.querySelector(".invitation-opening");
  const audio = document.getElementById("bgMusic");

  function setVH() {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`,
    );
  }

  setVH();
  window.addEventListener("resize", setVH);

  if (toggleMapButton && mapSection) {
    toggleMapButton.addEventListener("click", () => {
      const isExpanded =
        toggleMapButton.getAttribute("aria-expanded") === "true";

      toggleMapButton.setAttribute("aria-expanded", String(!isExpanded));
      mapSection.classList.toggle("is-visible");

      if (!isExpanded) {
        const iframe = mapSection.querySelector("iframe");
        if (iframe && iframe.dataset.src && !iframe.src) {
          iframe.src = iframe.dataset.src;
        }

        mapSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
  if (opening && openButton) {
    openButton.addEventListener("click", () => {
      document.body.classList.add("invitation--opened");

      audio.volume = 0.35; // volume educado

      let hasStarted = false;
      if (!hasStarted) {
        audio.play().catch(() => {});
        document.body.classList.add("invitation--opened");
      }
      hasStarted = true;

      opening.classList.add("is-opening");
      document.body.classList.remove("invitation-locked");

      setTimeout(() => {
        opening.remove();
      }, 900);
    });
  }

  if (layer) {
    const MAX_BUBBLES = 100;
    const bubbleImageSize = [13, 21, 34];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomSidePosition() {
      const isLeft = Math.random() < 0.5;

      if (isLeft) {
        return random(2, 28); // esquerda até 20%
      }

      return random(72, 98); // direita até 20%
    }

    function createBubble() {
      const bubble = document.createElement("div");
      bubble.className = "bubble";

      const size =
        bubbleImageSize[Math.floor(Math.random() * bubbleImageSize.length)];

      const duration = random(5, 20);
      const drift = random(-30, 30);

      const scaleStart = random(0.5, 1.2);
      const scaleEnd = random(0.5, 1.2);

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${randomSidePosition()}%`;
      bubble.style.animationDuration = `${duration}s`;

      bubble.style.setProperty("--drift", `${drift}px`);
      bubble.style.setProperty("--scale-start", scaleStart);
      bubble.style.setProperty("--scale-mid", (scaleStart + scaleEnd) / 2);
      bubble.style.setProperty("--scale-end", scaleEnd);

      layer.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    }

    function createStar() {
      const star = document.createElement("div");
      star.className = "star";

      const size = random(5, 28);
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${randomSidePosition()}%`;
      star.style.top = `${random(10, 70)}%`;

      layer.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2200);
    }

    // Loop das bolhas
    setInterval(() => {
      if (layer.children.length < MAX_BUBBLES) {
        createBubble();
      }
    }, 200);

    // Stars ocasionais
    setInterval(() => {
      if (Math.random() < 0.3) {
        createStar();
      }
    }, 100);
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  });
});
