import { createElement, createList } from "../util.js";

export function createHomeItem() {
  const pageContent = document.querySelector("#content");
  pageContent.textContent = "";

  const fragment = new DocumentFragment();
  const leftDiv = createElement("div", "", "left-div");
  leftDiv.append(
    createElement(
      "h1",
      "My Awesome Restaurant, The Best restaurant in The World",
    ),
  );

  leftDiv.append(
    createElement(
      "p",
      "Our Restaurant is the best restaurant you can get. We serve many type of food",
      "restaurant-description",
    ),
  );
  leftDiv.append(createElement("button", "Order now", "order-button"));

  const rightDiv = createElement("div", "", "right-div");
  rightDiv.append(createElement("p", "Open Hour", "open-hour-text"));
  rightDiv.append(
    createList(
      "ul",
      [
        "Monday: 08.00 - 16.00",
        "Tuesday: 08.00 - 16.00",
        "Wednesday: 09.00 - 17.00",
        "Thursday: 10.00 - 18.00",
        "Friday: 12.00 - 20.00",
      ],
      "open-hour-list",
    ),
  );

  fragment.append(leftDiv, rightDiv);
  pageContent.append(fragment);
}
