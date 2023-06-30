/* eslint-disable require-jsdoc */

import Calendar from '../images/calendar.svg';
import Edit from '../images/edit.svg';
import imageNode from './imageNode';
export default function taskNode(tname, tdesc = '') {
  const task = document.createElement('div');
  task.classList.add('task');
  const imgAction = document.createElement('div');
  imgAction.className = 'imgAction';

  const taskMeta = document.createElement('div');
  taskMeta.className = 'taskMeta';

  const edit = imageNode(Edit, 'editTask');
  const calendar = imageNode(Calendar, 'dueDate');

  const statusBtn = document.createElement('button');
  statusBtn.classList.add('statusBtn');
  const taskName = document.createTextNode(tname);

  taskMeta.append(statusBtn, taskName);
  imgAction.append(calendar, edit);

  task.appendChild(taskMeta);
  task.appendChild(imgAction);
  return task;
}
