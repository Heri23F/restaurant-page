import { createElement } from "../util.js";
import { icons } from "../icons/icons.js";

export function createContactContent() {
  const fragment = new DocumentFragment();
  const iconMap = [
    { path: icons.instagram, link: "www.placeholder" },
    { path: icons.email, link: "www.placeholder" },
    { path: icons.facebook, link: "www.placeholder" },
    { path: icons.whatsapp, link: "www.placeholder" },
  ];

  const contactHeading = createElement(
    "h1",
    "Contact us at",
    "contact-heading",
  );
  const iconsDiv = createElement("div", "", "icons-div");

  iconMap.forEach((icon) => {
    const iconLink = createElement("a", "", "icon-link");
    iconLink.setAttribute("href", icon.link);
    const iconImage = createElement("img", "", "icon-image");
    iconImage.setAttribute("src", icon.path);

    iconLink.append(iconImage);
    iconsDiv.append(iconLink);
  });

  fragment.append(contactHeading, iconsDiv);

  return fragment;
}
