import { createElement } from "../util.js";
import heroImageFile from "../image/food.png";

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

export default function () {
  const fragment = new DocumentFragment();
  const heroDiv = createHero(heroContent)

  fragment.append(heroDiv);
  return fragment;
}
