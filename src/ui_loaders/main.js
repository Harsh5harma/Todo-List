/* eslint-disable require-jsdoc */
import Sort from '../images/sort.svg';
import imageNode from '../common_Assets/imageNode';
import taskNode from '../common_Assets/taskNode';
import taskFormNode from '../common_Assets/taskFormNode';
function mainLoader(main) {
  const mainTitle = document.createElement('div');
  mainTitle.className = 'mainTitle';
  mainTitle.append(document.createTextNode('Default'));
  const sortBtn = document.createElement('div');
  sortBtn.className = 'sortBtn';
  const sortImg = imageNode(Sort, 'sortImg');
  sortBtn.appendChild(sortImg);
  sortBtn.appendChild(document.createTextNode('Sort by priority'));
  mainTitle.appendChild(sortBtn);
  main.appendChild(mainTitle);
  main.appendChild(taskFormNode());
  /*
  const taskList = document.createElement('div');
  taskList.className ='taskList';
  const defaultTask = document.createElement('div');
  defaultTask.className = 'defaultTask';
  taskList.appendChild(defaultTask);
  */
}

export {mainLoader};
