/* eslint-disable require-jsdoc */
import Plus from '../images/plus.svg';
import Group from '../images/group.svg';
import imageNode from '../common_Assets/imageNode';

function sidebarLoader(sidebar) {
  const group = imageNode(Group, 'group');
  const plus = imageNode(Plus, 'plus');
  const sidebarTitle = document.createElement('div');
  sidebarTitle.className = 'sdt';
  sidebarTitle.appendChild(group);
  sidebarTitle.appendChild(document.createTextNode('Projects'));
  sidebarTitle.appendChild(plus);
  sidebar.appendChild(sidebarTitle);
}

export {sidebarLoader};

