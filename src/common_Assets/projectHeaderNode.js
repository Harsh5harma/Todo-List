/* eslint-disable require-jsdoc */
import imageNode from './imageNode';
import Sort from '../images/sort.svg';

export default function projectHeader(title) {
  const header = document.createElement('div');
  header.classList.add('mainTitle');
  header.classList.add(title);
  const sortBtn = document.createElement('div');
  sortBtn.className = 'sortBtn';
  const sortImg = imageNode(Sort, 'sortImg');

  sortBtn.append(sortImg, document.createTextNode('Sort by priority'));
  header.append(document.createTextNode(title), sortBtn);
  return header;
}
