import { createElement, createImage } from "../util.js";
import heroImageFile from "../image/food.png";

export default function () {
  const fragment = new DocumentFragment();

  const heading = createElement("h1", {
    elClass: "heading",
    textContent: "My Awesome Restaurant, The Best restaurant in The World",
  });
  const description = createElement("p", {
    elClass: "restaurant-description",
    textContent:
      "Our Restaurant is the best restaurant you can get. We serve many type of food",
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
  
  const heroImage = createImage(heroImageFile, "hero-image", "a hero image");

  fragment.append(heroText, heroImage);
  return fragment;
}
