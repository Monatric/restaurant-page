import pasta from "../images/restaurant-pasta.jpeg";
import pizza from "../images/restaurant-pizza.jpeg";
import risotto from "../images/restaurant-gourmet-dish.jpeg";

const menuSection = document.createElement("section");
menuSection.classList.add("menu");

const menuHeading = document.createElement("h1");
menuHeading.classList.add("menu__heading");
menuHeading.textContent = "Our Menu";

const menuPara = document.createElement("p");
menuPara.classList.add("menu__para");
menuPara.textContent = `Discover our carefully crafted dishes, made with the finest
          ingredients and authentic Italian recipes passed down through
          generations.`;

const menuHeadingSpecialties = document.createElement("h2");
menuHeadingSpecialties.classList.add("menu__heading", "specialties");
menuHeadingSpecialties.textContent = "Chef's Specialties";

const menuCardContainer = document.createElement("div");
menuCardContainer.classList.add("menu__card_container");

class MenuCard {
  menuCard = document.createElement("div");
  img = document.createElement("img");
  menuCardInfo = document.createElement("div");
  menuCardInfoHeading = document.createElement("h3");
  menuCardInfoPara = document.createElement("p");
  menuCardInfoFooter = document.createElement("div");
  menuCardInfoFooterTag = document.createElement("span");
  menuCardInfoFooterPrice = document.createElement("span");

  constructor(imgSrc, heading, para, tag, price) {
    this.img.src = imgSrc;
    this.menuCardInfoHeading.textContent = heading;
    this.menuCardInfoPara.textContent = para;
    this.menuCardInfoFooterTag.textContent = tag;
    this.menuCardInfoFooterPrice.textContent = price;

    this.appendCardElements();
    this.addClasses();
  }

  appendToContainer() {
    menuCardContainer.appendChild(this.menuCard);
  }

  appendCardElements() {
    this.menuCard.append(this.img, this.menuCardInfo);
    this.menuCardInfo.append(
      this.menuCardInfoHeading,
      this.menuCardInfoPara,
      this.menuCardInfoFooter
    );
    this.menuCardInfoFooter.append(
      this.menuCardInfoFooterTag,
      this.menuCardInfoFooterPrice
    );
  }

  addClasses() {
    this.menuCard.classList.add("menu__card");
    this.menuCardInfo.classList.add("menu__card_info");
    this.menuCardInfoHeading.classList.add("menu__heading");
    this.menuCardInfoPara.classList.add("menu__card_para");
    this.menuCardInfoFooter.classList.add("menu__card_footer");
    this.menuCardInfoFooterTag.classList.add("menu__tag");
    this.menuCardInfoFooterPrice.classList.add("menu__price");
  }
}

const menuOptionOneFood = "Truffle Pasta";
const menuOptionOneDesc =
  "Handmade tagliatelle with black truffle and parmesan";
const menuOptionOneTag = "Chef's Special";
const menuOptionOnePrice = "$34";
new MenuCard(
  pasta,
  menuOptionOneFood,
  menuOptionOneDesc,
  menuOptionOneTag,
  menuOptionOnePrice
).appendToContainer();

const menuOptionTwoFood = "Pizza Napoletana";
const menuOptionTwoDesc = "Authentic Neapolitan pizza with buffalo mozzarella";
const menuOptionTwoTag = "Traditional";
const menuOptionTwoPrice = "$22";
new MenuCard(
  pizza,
  menuOptionTwoFood,
  menuOptionTwoDesc,
  menuOptionTwoTag,
  menuOptionTwoPrice
).appendToContainer();

const menuOptionThreeFood = "Risotto ai Porcini";
const menuOptionThreeDesc = "Creamy risotto with wild porcini mushrooms";
const menuOptionThreeTag = "Seasonal";
const menuOptionThreePrice = "$28";
new MenuCard(
  risotto,
  menuOptionThreeFood,
  menuOptionThreeDesc,
  menuOptionThreeTag,
  menuOptionThreePrice
).appendToContainer();

menuSection.append(
  menuHeading,
  menuPara,
  menuHeadingSpecialties,
  menuCardContainer
);

export { menuSection as Menu };
