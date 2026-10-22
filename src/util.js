export function createElement(el, elContent, elClass) {
  const element = document.createElement(el);
  if (elContent) {
    element.textContent = elContent;
  }
  if (elClass) {
    element.classList = elClass;
  }

  return element;
}

export function createList(listType, listContent = [], listClass) {
  const list = createElement(listType);
  listContent.forEach((content) => list.append(createElement("li", content)));
  if (listClass) {
    list.classList = listClass;
  }

  return list;
}
