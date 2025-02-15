function moveButterfly(butterfly) {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
  
    butterfly.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const butterflies = document.querySelectorAll('.butterfly');
  
    butterflies.forEach(butterfly => {
      setInterval(() => moveButterfly(butterfly), 2000);
    });
  });
  