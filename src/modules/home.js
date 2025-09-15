const heroSection = document.createElement("section");
heroSection.classList.add("hero");

const heroContainer = document.createElement("div");
heroContainer.classList.add("hero__container");

const heroHeading = document.createElement("h1");
heroHeading.classList.add("hero__heading");
heroHeading.textContent = "Welcome to Hell's Kitchen";

const heroPara = document.createElement("p");
heroPara.classList.add("hero__para");
heroPara.textContent = `Experience authentic Italian cuisine in an elegant atmosphere. Our
            passion for fresh ingredients and traditional recipes creates
            unforgettable dining moments.`;

const heroBtn = document.createElement("button");
heroBtn.classList.add("hero__button");
heroBtn.textContent = "View Our Menu";

heroContainer.append(heroHeading, heroPara, heroBtn);
heroSection.appendChild(heroContainer);

export { heroSection as Home };
