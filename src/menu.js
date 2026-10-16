import { createElement } from "./init_page.js";

const fragment = new DocumentFragment();

const menuItem = [
  {
    title: "Nasi goreng",
    description:
      "Indonesian-style fried rice wok-tossed with sweet soy sauce, garlic, and shallots, topped with a fried egg and crackers.",
    image: "path/to/image",
  },
  {
    title: "Sate",
    description:
      "Skewers of marinated meat grilled over charcoal, served with peanut sauce, sliced shallots, and rice cakes.",
    image: "path/to/image",
  },
  {
    title: "Rendang",
    description:
      "Beef slow-cooked in coconut milk and a rich blend of spices until tender and deeply savory.",
    image: "path/to/image",
  },
  {
    title: "Soto",
    description:
      "Fragrant turmeric-spiced broth with shredded chicken, vermicelli, boiled egg, and fresh herbs.",
    image: "path/to/image",
  },
];

function createMenuItem() {
  const pageContent = document.querySelector("#content");
  pageContent.textContent = "";

  const itemFragement = new DocumentFragment();

  menuItem.forEach((item) => {
    const itemDiv = createElement("div", "", "item-div");
    const itemImage = createElement("img", "", "item-image");
    itemImage.setAttribute("src", item.image);
    itemDiv.append(
      createElement("h2", item.title, "item-title"),
      createElement("p", item.description, "item-description"),
      itemImage,
    );

    itemFragement.append(itemDiv);
  });

  fragment.append(itemFragement);
  pageContent.append(fragment);
}

export function loadMenu() {
  createMenuItem();
}
