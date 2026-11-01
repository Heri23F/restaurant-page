import { createElement } from "../util.js";
import { icons } from "../icons/icons.js";

const iconsMap = [
  { path: icons.instagram, link: "www.placeholder" },
  { path: icons.email, link: "www.placeholder" },
  { path: icons.facebook, link: "www.placeholder" },
  { path: icons.whatsapp, link: "www.placeholder" },
];

const paragraph = {
  one: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ut justo id lacinia. Duis sit amet pellentesque augue. Morbi ut eleifend risus. In eget cursus elit. Nunc porttitor nulla a elit auctor, in tempor eros lobortis. Vivamus fermentum congue convallis. Nam sit amet aliquet nisi. Ut sit amet urna eu enim volutpat efficitur a vitae purus. Duis mattis turpis vel malesuada eleifend. Fusce in leo blandit, ornare nibh eu, cursus nulla. Proin consequat elementum urna at vestibulum. Quisque aliquet sem sed nunc finibus, sed vulputate velit porta. Duis viverra est libero, quis lacinia leo euismod et. In eu velit vehicula tellus tincidunt tincidunt. In vel odio ac tellus venenatis porta sed sit amet dolor. In consectetur massa sed sodales pharetra.",
  two: "Suspendisse viverra commodo felis at imperdiet. Fusce ac porttitor quam. Aliquam diam libero, porttitor a scelerisque ut, feugiat sit amet enim. Quisque non massa ac nulla ullamcorper condimentum. Duis dapibus odio et efficitur laoreet. Proin nisl orci, ornare tincidunt hendrerit ut, rutrum in dolor. Proin eu justo luctus, fermentum mi vel, cursus tortor. Mauris pellentesque nulla augue, sed egestas est posuere a. Aenean interdum, odio et venenatis luctus, metus sapien accumsan nisi, ac laoreet urna velit sed ante. Aenean maximus lorem enim, et malesuada nunc mattis vel.",
};

export default function () {
  const fragment = new DocumentFragment();

  // create Heading and icons container
  const heading = createElement("h1", {
    elClass: "contact heading",
    textContent: "Contact Us",
  });
  const iconsDiv = createElement("div", { elClass: "icons-div" });

  // creat contact text content
  const textContainer = createElement("div", { elClass: "text-container" });
  Object.entries(([keys, value]) => {
    const para = createElement("p", {
      elClass: `para ${keys}`,
      textContent: value,
    });
    textContainer.append(para);
  });

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

  fragment.append(heading, textContainer, iconsDiv);
  return fragment;
}
