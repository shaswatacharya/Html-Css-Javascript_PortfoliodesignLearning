//for icons

function toggleMenu(){
    
  const menu = document.querySelector(".menu-links");
  
  const icon = document.querySelector(".mobile-icon");
  
  menu.classList.toggle("open");
  
  icon.classList.toggle("open");
  
}


// Mode Switch

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});



function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

//dark mode logic
function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}


//light mode logic


function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// Text Change logic

const textArray = ["Developer", "Designer"];
let textIndex = 0;
let charIndex = 0;
function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
      document.querySelector("#typing-text").textContent += textArray[textIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 100);
  } else {
      setTimeout(eraseEffect, 2000);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
      document.querySelector("#typing-text").textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
  } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});


// for custom cursor logic(yellow) 

// Select cursor element
const cursor = document.getElementById("custom-cursor");

// Check if the screen width is larger than 1024px (PC/Mac)
if (window.innerWidth > 1024) {
  // Function to update cursor position
  document.addEventListener("mousemove", (e) => {
      const offsetX = 5; // Adjust left
      const offsetY = 2; // Adjust top

      cursor.style.left = `${e.clientX - offsetX}px`;
      cursor.style.top = `${e.clientY - offsetY}px`;
      cursor.style.display = "block"; // Ensure it's visible
  });

  // Hide cursor when mouse leaves the viewport
  document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0"; // Smooth disappearance
  });

  // Show cursor when mouse enters the viewport
  document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1"; // Smooth reappearance
  });
} else {
  // If screen width is smaller, hide the cursor and disable the logic
  cursor.style.display = "none";
}


// Smooth scroll to the next section when the scroll icon is clicked
document.getElementById("scroll-down-container").addEventListener("click", function() {
window.scrollBy({
    top: window.innerHeight, // Scroll by the height of the viewport
    behavior: 'smooth'
});
});



// 


// Show the button when the user scrolls down with fade-in effect
window.onscroll = function() {
let scrollButton = document.getElementById("backToTop");
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.classList.add('show'); // Add 'show' class to trigger fade-in
} else {
    scrollButton.classList.remove('show'); // Remove 'show' class to trigger fade-out
}
};

// Smooth scroll to top when clicked
document.getElementById("backToTop").addEventListener("click", function() {
window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll effect
});
});








// Add Hacker Mode Easter Egg(reached the top) {Now Press CTRL+SHIFT+ALT+X}

// let hackerModeEnabled = false;
// let currentTextIndex = 0;

// document.addEventListener("keydown", function(event) {
//     if (event.shiftKey && event.altKey && event.ctrlKey && event.key === "X") {
//         hackerModeEnabled = !hackerModeEnabled;
//         toggleHackerMode();
//     }
// });

// function toggleHackerMode() {
//     const hackerOverlay = document.getElementById("hacker-overlay");
//     const matrixCanvas = document.getElementById("matrix-rain");
//     const accessGrantedText = document.getElementById("access-granted-text");
//     const typingEffectDiv = document.getElementById("typing-effect");

//     if (hackerModeEnabled) {
//         hackerOverlay.classList.add("active");
//         accessGrantedText.classList.add("active");
//         typingEffectDiv.classList.add("active");
//         startMatrixEffect();
//         startTypingEffect(); 
//     } else {
//         hackerOverlay.classList.remove("active");
//         accessGrantedText.classList.remove("active");
//         typingEffectDiv.classList.remove("active");
//         stopMatrixEffect();
//         stopTypingEffect();  
//     }
// }

// function startMatrixEffect() {
//     const canvas = document.getElementById("matrix-rain");
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const letters = "0101010101";
//     const columns = canvas.width / 15;
//     const drops = Array(Math.floor(columns)).fill(1);

//     function drawMatrix() {
//         ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
//         ctx.fillStyle = "#0f0";
//         ctx.font = "15px monospace";

//         for (let i = 0; i < drops.length; i++) {
//             const text = letters[Math.floor(Math.random() * letters.length)];
//             ctx.fillText(text, i * 15, drops[i] * 15);
//             if (drops[i] * 15 > canvas.height && Math.random() > 0.95) {
//                 drops[i] = 0;
//             }
//             drops[i]++;
//         }
//     }

//     canvas.matrixInterval = setInterval(drawMatrix, 50);
// }

// function stopMatrixEffect() {
//     const canvas = document.getElementById("matrix-rain");
//     clearInterval(canvas.matrixInterval);
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function startTypingEffect() {
//     const typingEffectDiv = document.getElementById("typing-effect");
//     const texts = [
//         "Hacking the system...",
//         "Bypassing security...",
//         "Accessing files...",
//         "Hacker Mode Activated!"
//     ];
  
//     typingEffectDiv.innerHTML = ""; 
//     typingEffectDiv.style.width = "0"; 
//     typeNextText(texts);
// }

// function typeNextText(texts) {
//     if (currentTextIndex < texts.length) {
//         let text = texts[currentTextIndex];
//         const typingEffectDiv = document.getElementById("typing-effect");

//         let i = 0;
//         typingEffectDiv.innerHTML = ""; 
//         typingEffectDiv.style.width = "0"; 

//         function typeChar() {
//             if (i < text.length) {
//                 typingEffectDiv.innerHTML += text.charAt(i);
//                 i++;
//                 setTimeout(typeChar, 100); 
//             } else {
//                 currentTextIndex++;
//                 setTimeout(() => typeNextText(texts), 1000); 
//             }
//         }

//         typeChar();
//     }
// }

// function stopTypingEffect() {
//     const typingEffectDiv = document.getElementById("typing-effect");
//     typingEffectDiv.innerHTML = ""; 
//     currentTextIndex = 0; 
// }
