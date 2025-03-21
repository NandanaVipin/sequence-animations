// Function to animate a single box
function animateBox(box, delay) {
    return new Promise((resolve) => {
      // Wait for the specified delay, then animate the box
      setTimeout(() => {
        box.style.opacity = 1; // Make the box visible
        box.style.transform = "translateY(-20px)"; // Move the box up
        resolve(); // Indicate the animation is complete
      }, delay);
    });
  }
  
  // Function to play animations in sequence
  async function playAnimations() {
    // Get references to the boxes
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
  
    // Animate box 1 immediately
    await animateBox(box1, 0);
  
    // Animate box 2 after 1 second (1000 milliseconds)
    await animateBox(box2, 1000);
  
    // Animate box 3 after 2 seconds (2000 milliseconds)
    await animateBox(box3, 2000);
  }
  
  // Start the animations when the page loads
  playAnimations();