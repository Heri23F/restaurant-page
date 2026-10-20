import { createElement } from "../util.js";

export function createAboutItem() {
  const fragment = new DocumentFragment();

  const aboutHeading = createElement("h1", "About", "about-heding");
  const aboutText = createElement(
    "p",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi provident ad. Voluptate reiciendis dignissimos doloremque maxime et, recusandae consequuntur exercitationem corrupti error dolores illo sed animi voluptatibus deserunt enim?",
    "about-text",
  );

  fragment.append(aboutHeading, aboutText);
  return fragment
}
