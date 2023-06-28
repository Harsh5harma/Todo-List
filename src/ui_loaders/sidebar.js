/* eslint-disable require-jsdoc */
import Plus from '../images/plus.svg';
import Group from '../images/group.svg';
import imageNode from '../common_Assets/imageNode';
import projectNode from '../common_Assets/projectNode';
function sidebarLoader(sidebar) {
  const group = imageNode(Group, 'group');
  const plus = imageNode(Plus, 'plus');
  const sidebarTitle = document.createElement('div');
  sidebarTitle.className = 'sdt';
  sidebarTitle.append(group, document.createTextNode('Projects'), plus);
  const pNames = document.createElement('div');
  pNames.classList.add('pNames');
  const x = projectNode('Default');
  x.classList.add('0');
  pNames.append(x);
  sidebar.append(sidebarTitle, pNames);
}

export {sidebarLoader};

