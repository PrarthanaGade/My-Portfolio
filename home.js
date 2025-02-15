document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById("loading");
  
    // Set the loading animation duration (in milliseconds)
    const loadingDuration = 3000; // Example: 3000ms = 3 seconds
  
    // Hide the loading spinner after the specified duration
    setTimeout(() => {
      loading.style.display = "none";
    }, loadingDuration);
  });

// animation
gsap.to('.sprite', {
  backgroundPositionX: '-=1000px', // width of the whole sprite sheet
  duration: 1, // duration for one loop
  ease: 'steps(10)', // steps for each frame
  repeat: -1 // infinite loop
});

// Define the sprite movement
gsap.to('.sprite', {
  x: 500, // move 500px to the right
  duration: 5, // duration of the movement
  repeat: -1, // infinite loop
  yoyo: true // move back and forth
});
//moving background
gsap.to('.background', {
  backgroundPositionX: '-=1000px', // width of the whole background image
  duration: 10, // duration for one loop
  ease: 'linear', // linear animation
  repeat: -1 // infinite loop
});
