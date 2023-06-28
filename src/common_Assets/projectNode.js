/* eslint-disable require-jsdoc */
export default function projectNode(title) {
  const pdiv = document.createElement('input');
  pdiv.type = 'text';
  pdiv.defaultValue = '• Default';
  pdiv.maxLength = 20;
  pdiv.classList.add('pdiv');
  pdiv.classList.add(title);
  pdiv.value=title;
  return pdiv;
}
