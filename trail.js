document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 1000); // Remove after 1 second
});