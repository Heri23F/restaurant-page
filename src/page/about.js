import images from "../image/images.js";
import { createElement } from "../util.js";

const paraContent = [
  {
    class: "para one",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie et est nec volutpat. Curabitur at dolor at nunc ultrices varius ut nec nisi. Integer placerat consequat odio. Quisque fringilla ante in neque fringilla, ut sodales ex fermentum. Donec in tincidunt arcu, eu tristique lacus. Maecenas in pharetra risus, et faucibus mi. Integer pellentesque ullamcorper justo, sed suscipit nisi fringilla sit amet. Nulla porttitor viverra diam, a gravida nulla facilisis quis. Ut diam lorem, volutpat ut mi non, volutpat pharetra velit. Duis fermentum tellus eu nibh porta, vel faucibus erat ornare. Mauris a vestibulum tortor. Vestibulum rhoncus nulla eget enim finibus fermentum. Fusce faucibus nisi ut nunc eleifend, et laoreet turpis ultrices. Aliquam interdum dui elit. Nam bibendum sit amet quam vitae ultricies. Praesent metus nulla, finibus quis nisl eget, condimentum placerat sapien.",
  },
  {
    class: "para two",
    content:
      "Maecenas ornare tempor eros sit amet laoreet. Etiam ut sem a ligula bibendum luctus. Nam fermentum eget diam ut eleifend. Nunc erat turpis, lobortis quis sollicitudin eget, pharetra sed felis. Donec faucibus laoreet nunc, eu consectetur sapien luctus ut. Donec congue mollis purus. Integer lacinia efficitur lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer rhoncus ipsum dui, id suscipit eros pretium sit amet. Aliquam pulvinar enim mi. Morbi et malesuada sapien. Etiam in massa efficitur, aliquam risus nec, bibendum diam. Aenean sollicitudin tempus lorem, vitae dignissim leo. Suspendisse sollicitudin, lectus nec suscipit bibendum, odio tortor auctor eros, eget consequat purus ipsum quis ligula.",
  },
];

export default function () {
  const fragment = new DocumentFragment();

  const heading = createElement("h1", {
    elClass: "about heading",
    textContent: "About Us",
  });

  const image = createElement("img", {
    elClass: "about-image",
    src: images.restaurantImage,
  });

  fragment.append(heading, image);

  paraContent.forEach((para) => {
    const paragraph = createElement("p", {
      elClass: para.class,
      textContent: para.content,
    });

    fragment.append(paragraph);
  });

  return fragment;
}
