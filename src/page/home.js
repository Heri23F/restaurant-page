import { createElement, createImage } from "../util.js";
import heroImageFile from "../image/food.png";

export function createHomeItem() {
  const fragment = new DocumentFragment();
  const heroText = createElement("div", "", "hero-text");
  heroText.append(
    createElement(
      "h1",
      "My Awesome Restaurant, The Best restaurant in The World",
    ),
  );

  heroText.append(
    createElement(
      "p",
      "Our Restaurant is the best restaurant you can get. We serve many type of food",
      "restaurant-description",
    ),
  );
  heroText.append(createElement("button", "Order now", "order-button"));

  const heroImage = createImage(heroImageFile, "hero-image", "a hero image");

  fragment.append(heroText, heroImage);
  return fragment;
}
