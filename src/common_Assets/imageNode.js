/* eslint-disable require-jsdoc */
export default function imageNode(imgSrc, imgClassName) {
  const imgNode = new Image();
  imgNode.className = imgClassName;
  imgNode.src = imgSrc;
  return imgNode;
}
