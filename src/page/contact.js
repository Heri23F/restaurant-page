import { createElement, createIcon } from "../util.js";
import { icons } from "../icons/icons.js";

export function createContactItem() {
  const fragment = new DocumentFragment();
  const iconMap = {
    instagram: icons.instagram,
    email: icons.email,
    facebook: icons.facebook,
    whatsapp: icons.whatsapp,
  };

  const contactHeading = createElement(
    "h1",
    "Contact us at",
    "contact-heading",
  );
  const iconsDiv = createElement("div", "", "icons-div");

  for (const icon in iconMap) {
    iconsDiv.append(createIcon(iconMap[icon], "contact-icon"));
  }

  fragment.append(contactHeading, iconsDiv);

  return fragment;
}
