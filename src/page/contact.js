import { createElement, createIcon } from "../util.js";

export function createContactItem() {
  const fragment = new DocumentFragment();
  const iconMap = {
    instagram: "github Icon",
    email: "gmail Icon",
    facebook: "facebook icon",
    whatsup: "whatsup icon",
  };

  const contactHeading = createElement(
    "h1",
    "Contact us at",
    "contact-heading",
  );
  const iconsDiv = createElement("div", "", "icons-div");

  for (const icon in iconMap) {
    iconsDiv.append(createIcon(icon, "contact-icon"));
  }

  fragment.append(contactHeading, iconsDiv);

  return fragment;
}
