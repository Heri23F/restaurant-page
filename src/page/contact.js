import { createElement } from "../util.js";
import { icons } from "../icons/icons.js";

const iconsMap = [
  { path: icons.instagram, link: "www.placeholder" },
  { path: icons.email, link: "www.placeholder" },
  { path: icons.facebook, link: "www.placeholder" },
  { path: icons.whatsapp, link: "www.placeholder" },
];

export default function () {
  const fragment = new DocumentFragment();

  // create Heading and icons container
  const heading = createElement("h1", {
    elClass: "contact heading",
    textContent: "Contact Us",
  });
  const iconsDiv = createElement("div", { elClass: "icons-div" });

  // create social media icons
  iconsMap.forEach((icon) => {
    const socialMediaIcon = createElement("img", {
      elClass: "icon social-media",
      src: icon.path,
    });

    const link = createElement(
      "a",
      {
        elClass: "social-media-link",
        href: icon.link,
      },
      socialMediaIcon,
    );

    iconsDiv.append(link);
  });

  fragment.append(heading, iconsDiv);
  return fragment;
}
