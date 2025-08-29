const menu = document.querySelector(".main-nav-list");

updateTheme();

// mobile menu
function openMenu() {
  menu.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
}

// theme
function updateTheme() {
  // get theme from localstorige
  const theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";
  const themeBtn = document.querySelector(".main-nav-theme-btn");

  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  // get color variables
  const accentColor = getComputedStyle(document.body)
    .getPropertyValue("--accent")
    .trim();
  const primaryColor = getComputedStyle(document.body)
    .getPropertyValue("--primary")
    .trim();

  // create icon and set content and color
  const icon = document.createElement("i");
  icon.innerHTML =
    theme === "dark"
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  icon.style.color = theme === "dark" ? accentColor : primaryColor;

  themeBtn.appendChild(icon);
}

function toggleTheme() {
  // remove content from theme btn
  const themeBtn = document.querySelector(".main-nav-theme-btn");
  themeBtn.innerHTML = "";
  // save theme to localstorage
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  updateTheme();
}

// FAQ
function handleFaqQuestions(index) {
  const faqs = document.querySelectorAll(".faq-answer");
  faqs.forEach((fag) => {
    fag.classList.remove("active");
  });

  faqs[index].classList.add("active");
}
