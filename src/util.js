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
