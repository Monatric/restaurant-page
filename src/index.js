import "./styles.css";
import { Home } from "./modules/home";

const content = document.querySelector("#content");
const nav = document.querySelector("nav");
let activeBtn = document.querySelector(".nav__button.active");

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    activeBtn.classList.remove("active");
    switch (event.target.textContent) {
      case "Home":
        content.appendChild(Home);
        break;
      case "Menu":
        break;
    }

    activeBtn = event.target;
    activeBtn.classList.add("active");
  }
});

window.onload = function () {
  content.appendChild(Home);
};
