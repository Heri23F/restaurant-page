import { createElement } from "../util.js";

const menuItemArr = [
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

export function createMenuItem() {
  const fragment = new DocumentFragment();
  const menuItem = new DocumentFragment();
  const menuHeading = createElement(
    "h1",
    "Awesome Restaurant Menu",
    "menu-heading",
  );

  menuItemArr.forEach((item) => {
    const itemDiv = createElement("div", "", "item-div");
    const itemImage = createElement("img", "", "item-image");
    itemImage.setAttribute("src", item.image);
    itemDiv.append(
      itemImage,
      createElement("h2", item.title, "item-title"),
      createElement("p", item.description, "item-description"),
    );

    menuItem.append(itemDiv);
  });

  fragment.append(menuHeading, menuItem);
  return fragment;
}
