// export function createElement(
//   tags,
//   { elClass, id, textContent, attributes } = {},
//   ...childs
// ) {
//   const element = document.createElement(tags);
//   const optionMap = {
//     className: elClass,
//     id: id,
//     textContent: textContent,
//   };

//   Object.entries(optionMap).forEach(([keys, value]) => {
//     if (value !== undefined) element[keys] = value;
//   });

//   if (attributes) {
//     Object.entries(attributes).forEach(([keys, value]) => {
//       element.setAttribute(keys, value);
//     });
//   }

//   if (childs.length > 0) {
//     element.append(...childs);
//   }

//   return element;
// }

export function createElement(tags, option = {}, ...childs) {
  const element = document.createElement(tags);

  // deconstruct option for elClass, id, textContent and the rest for attributes
  const { elClass, id, textContent, ...attributes } = option;

  // check and assign basic option
  if (elClass) element.className = elClass;
  if (id) element.id = id;
  if (textContent) element.textContent = textContent;

  // loop trough attributes and set attributes based on the keys and value
  Object.entries(attributes).forEach(([keys, value]) => {
    element[keys] = value;
  });

  if (childs) element.append(...childs);

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
