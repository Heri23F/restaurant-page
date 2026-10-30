// export function createElement(el, elContent, elClass) {
//   const element = document.createElement(el);
//   if (elContent) {
//     element.textContent = elContent;
//   }
//   if (elClass) {
//     element.classList = elClass;
//   }

//   return element;
// }

export function createElement(tags, {elClass, id, textContent, attributes} ={}, ...childs) {
  const element = document.createElement(tags);
  const optionMap = {
    class: elClass,
    id: id,
    textContent: textContent,
  };

  Object.entries(optionMap).forEach(([keys, value]) => {
    if (value !== undefined) element[keys] = value;
  })

  if (attributes) {
    Object.entries(attributes).forEach(([keys, value]) => {
      element.setAttribute(keys, value);
    });
  }

  childs.forEach(child => element.append(child));

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

export function createImage(src, imgClass, alt) {
  const image = document.createElement("img");
  image.setAttribute("src", src);
  if (imgClass) {
    image.classList = imgClass;
  }
  if (alt) {
    image.setAttribute("alt", alt);
  }

  return image;
}
