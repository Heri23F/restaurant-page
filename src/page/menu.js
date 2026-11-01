import { createElement } from "../util.js";

const menuItem = [
  {
    title: "Nasi goreng",
    description:
      "A beloved national staple, this Indonesian-style fried rice is wok-tossed over high heat with an aromatic base of crushed garlic, shallots, and fiery chili. It is deeply caramelized with sweet savory kecap manis, giving it a signature rich glaze. Each serving comes complete with a perfectly fried sunny-side-up egg cascading over the rice, accompanied by crispy krupuk crackers and refreshing pickled cucumber slices.",
    image: "path/to/image",
  },
  {
    title: "Sate",
    description:
      "These iconic street-food skewers feature tender cubes of seasoned meat meticulously marinated in a blend of lemongrass, coriander, and local spices. Grilled over glowing traditional charcoal to achieve a perfect smoky char, they are generously smothered in a rich, velvety peanut sauce. The dish is beautifully balanced by sharp garnishes of sliced raw shallots, birds-eye chilis, and soft, dense lontong rice cakes.",
    image: "path/to/image",
  },
  {
    title: "Rendang",
    description:
      "Hailing from the West Sumatra highlands, this legendary culinary masterpiece consists of premium beef slow-braised for hours in a rich bath of thick coconut milk. Cooked alongside a potent paste of ginger, galangal, turmeric leaves, and lemongrass, the liquid gradually reduces until the spices caramelize into a deep, dark glaze. The result is exceptionally tender, melt-in-your-mouth beef infused with an intensely complex savory flavor.",
    image: "path/to/image",
  },
  {
    title: "Soto",
    description:
      "A deeply comforting Indonesian soup, this dish features a vibrant, golden-hued broth seasoned with freshly ground turmeric, lemongrass, and kaffir lime leaves. Swimming inside the hot, fragrant soup are generous handfuls of shredded succulent chicken, translucent glass vermicelli noodles, and a soft-boiled egg. It is finished off with a squeeze of fresh lime juice, crispy fried shallots, and a side of spicy sambal paste for a bright, invigorating kick.",
    image: "path/to/image",
  },
];

export default function () {
  const fragment = new DocumentFragment();
  const menuHeading = createElement("h1", {
    elClass: "menu heading",
    textContent: "Menu",
  });
  fragment.append(menuHeading);

  menuItem.forEach((item) => {
    const itemImage = createElement("img", {
      elClass: "item-image",
      src: item.image,
    });

    const itemTitle = createElement("h2", {
      elClass: "item-title",
      textContent: item.title,
    });

    const itemDescription = createElement("p", {
      elClass: "item-description",
      textContent: item.description,
    });

    const itemDiv = createElement(
      "div",
      { elClass: "item-div" },
      itemTitle,
      itemImage,
      itemDescription,
    );

    fragment.append(itemDiv);
  });

  return fragment;
}
