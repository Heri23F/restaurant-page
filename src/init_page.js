function createElement(el, elContent, elClass) {
  const element = document.createElement(el);
  if (elContent) {
    element.textContent = elContent;
  }
  if (elClass) {
    element.classList = elClass;
  }

  return element;
}

function createList(listType, listContent = [], listClass) {
  const list = createElement(listType);
  listContent.forEach((content) => list.append(createElement("li", content)));
  if (listClass) {
    list.classList = listClass;
  }

  return list;
}

const fragment = new DocumentFragment();

const headingDiv = createElement("div", "", "heading-div");
headingDiv.append(createElement("h1", "My Awesome Restaurant"));

const contentDiv = createElement("div", "", "content-div");
contentDiv.append(
  createElement(
    "p",
    "Our Restaurant is the best restaurant you can get. We serve many type of food",
    "restaurant-description",
  ),
);

contentDiv.append(
  createList(
    "ul",
    [
      "Monday: 08.00 - 16.00",
      "Tuesday: 08.00 - 16.00",
      "Wednesday: 09.00 - 17.00",
      "Thursday: 10.00 - 18.00",
      "Friday: 12.00 - 20.00",
    ],
    "open-hour",
  ),
);

fragment.append(headingDiv, contentDiv);

export function loadPage() {
  const pageContent = document.querySelector("#content");
  pageContent.append(fragment);
}
