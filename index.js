new Glide(".glide").mount();

const accordian = document.querySelectorAll(".accordian");
const submitBtn = document.querySelector("button[type=submit]");
const form = document.querySelector("form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
});

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active"); // add class of active to accordian
  });
}
