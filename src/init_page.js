function createElement(tags, elClass, content) {
  const element = document.createElement(tags);
  if (elClass !== undefined) {
    element.classList = elClass;
  }
  if (content !== undefined) {
    element.textContent = content;
  }

  return element;
}

const divContent = document.querySelector("#content");

const headLine = createElement("h1", "head-line", "My Awesome Restaurant");
const para = createElement(
  "p",
  "description",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
);

export function loadPage() {
  divContent.append(headLine, para);
}
