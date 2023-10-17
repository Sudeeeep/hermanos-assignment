const accordian = document.querySelectorAll(".accordian");
const submitBtn = document.querySelector("button[type=submit]");
const form = document.querySelector("form");
const headerMenu = document.querySelector(".header-menu");
const mobileHeaderDetails = document.querySelector(".mobile-header-details");
const primaryNavMenu = document.querySelector(".primary-nav-bar-menu");
const mobileNavBar = document.querySelector(".primary-mobile-nav-bar-list");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
});

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active"); // add class of active to accordian
  });
}

headerMenu.addEventListener("click", (e) => {
  if (mobileHeaderDetails.style.display === "none") {
    mobileHeaderDetails.style.display = "flex";
  } else {
    mobileHeaderDetails.style.display = "none";
  }
});

primaryNavMenu.addEventListener("click", (e) => {
  if (mobileNavBar.style.display === "none") {
    mobileNavBar.style.display = "flex";
  } else {
    mobileNavBar.style.display = "none";
  }
});
