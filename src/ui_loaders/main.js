/* eslint-disable require-jsdoc */
import Plus from '../images/plus.svg';
import imageNode from '../common_Assets/imageNode';
import taskNode from '../common_Assets/taskNode';
import taskFormNode from '../common_Assets/taskFormNode';
import projectHeader from '../common_Assets/projectHeaderNode';

function mainLoader(main) {
  const defaultTitle = projectHeader('Default');
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('taskContainer');
  taskContainer.className = 'taskContainer';

  const defaultTask = taskNode('Default');
  const task2 = taskNode('task2');
  const tform = taskFormNode();
  taskContainer.append(defaultTask, task2, tform);

  const addNewTask = document.createElement('div');
  addNewTask.className = 'addnewtask';
  const addtaskImg = imageNode(Plus, 'addtaskImg');
  addNewTask.append(addtaskImg, document.createTextNode('Add Task'));

  main.append(defaultTitle, taskContainer, addNewTask);
}

export {mainLoader};
