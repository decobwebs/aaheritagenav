document.addEventListener("DOMContentLoaded", () => {
  // All images to cycle through
  const images = ["/assets/port2.jpg"];

  // Preload images (critical for zero breakage)
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // Get the two slide layers
  const slideA = document.getElementById("slideA");

  let currentIndex = 0;
  let showingA = true;

  // Set initial image
  slideA.src = images[currentIndex];
  slideA.classList.add("active");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;

    if (showingA) {
      slideB.src = images[currentIndex];
      slideB.classList.add("active");
      slideA.classList.remove("active");
    } else {
      slideA.src = images[currentIndex];
      slideA.classList.add("active");
      slideB.classList.remove("active");
    }

    showingA = !showingA;
  }, 6000); // switch every 6 seconds
});
