import { createElement } from "../util.js";
import heroImageFile from "../image/food.png";

const heroContent = {
  heading: {
    tags: "h1",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum."
  }
}

function createHero() {
  const heading = createElement("h1", {
    elClass: "heading",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum.",
  });
  const description = createElement("p", {
    elClass: "restaurant-description",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia luctus eros.",
  });

  const orderButton = createElement("button", {
    elClass: "order-button",
    textContent: "Order Now",
  });

  const heroText = createElement(
    "div",
    { elClass: "hero-text" },
    heading,
    description,
    orderButton,
  );

  const heroImage = createElement("img", {
    elClass: "hero-image",
    src: heroImageFile,
    alt: "a hero image",
  });

  const heroDiv = createElement("div", {elClass: "hero-div"}, heroText, heroImage)
  return heroDiv
}

export default function () {
  const fragment = new DocumentFragment();
  const heroDiv = createHero()

  fragment.append(heroDiv);
  return fragment;
}
