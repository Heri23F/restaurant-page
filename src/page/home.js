import { createElement } from "../util.js";
import heroImageFile from "../image/food.png";

// element content
const heroContent = {
  heading: {
    elClass: "hero-heading",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum.",
  },
  description: {
    elClass: "hero-description",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia luctus eros.",
  },
  button: {
    elClass: "order-button",
    textContent: "Order Now",
  },
  img: {
    elClass: "hero-image",
    src: heroImageFile,
    alt: "a hero image",
  }
}

const openHour = [
  "Monday: 08.00 - 20.00",
  "Tuesday: 08.00 - 21.00",
  "Wednesday: 08.00 - 21.00",
  "Thursday: 08.00 - 22.00",
  "Friday: 08.00 - 16.00", 
]

function createHero(content) {
  const heading = createElement("h1", {
    elClass: heroContent.heading.elClass,
    textContent: heroContent.heading.textContent,
  });
  const description = createElement("p", {
    elClass: heroContent.description.elClass,
    textContent:
      heroContent.description.textContent,
  });

  const orderButton = createElement("button", {
    elClass: heroContent.button.elClass,
    textContent: heroContent.button.textContent,
  });

  const heroText = createElement(
    "div",
    { elClass: "hero-text" },
    heading,
    description,
    orderButton,
  );

  const heroImage = createElement("img", {
    elClass: heroContent.img.elClass,
    src: heroContent.img.src,
    alt: heroContent.img.alt,
  });

  const heroDiv = createElement("div", {elClass: "hero-div"}, heroText, heroImage)
  return heroDiv
}

function createOpenHourList(listContent) {
  const list = createElement("ul", {elClass: "open-hour-list"})
  listContent.forEach(item => {
    const listItem = createElement("li", {textContent: item})
    list.append(listItem)
  })
  
  return list
} 
  
export default function() {
  const fragment = new DocumentFragment()
  const hero = createHero(heroContent)
  const list = createOpenHourList(openHour)

  fragment.append(hero, list)
  return fragment
}