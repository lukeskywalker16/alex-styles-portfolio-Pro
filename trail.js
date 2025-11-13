document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);

  // Animate shrink and fade
  requestAnimationFrame(() => {
    trail.style.transform = "translate(-50%, -50%) scale(0.5)";
    trail.style.opacity = "0";
  });

  // Remove after animation completes
  setTimeout(() => {
    trail.remove();
  }, 1000);
});
