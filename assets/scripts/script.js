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

// for custom cursor logic 

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



