/* eslint-disable require-jsdoc */
import imageNode from './imageNode';
import Calendar from '../images/calendar.svg';
import Flag from '../images/flag.svg';
export default function taskFormNode() {
  const taskForm = document.createElement('div');
  taskForm.classList.add('taskForm');

  const form = document.createElement('form');
  form.classList.add('form');
  form.method = 'get';

  const tname = document.createElement('input');
  tname.classList.add('tname');
  tname.placeholder='Task Name';

  const taskdesc = document.createElement('textarea');
  taskdesc.classList.add('taskdesc');
  taskdesc.placeholder='Description';

  const imgDivs = document.createElement('div');
  imgDivs.classList.add('imgDivs');
  const pickDate = imageNode(Calendar, 'pickDate');
  const flag = imageNode(Flag, 'flag');
  imgDivs.append(pickDate, flag);

  const btnDivs = document.createElement('div');
  btnDivs.classList.add('btnDivs');
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  const addtaskBtn = document.createElement('button');
  cancelBtn.classList.add('cancelBtn');
  addtaskBtn.textContent = 'Add Task';
  addtaskBtn.classList.add('addtaskBtn');
  btnDivs.append(cancelBtn, addtaskBtn);

  const formFooter = document.createElement('div');
  formFooter.classList.add('formFooter');
  formFooter.append(imgDivs, btnDivs);

  form.append(tname, taskdesc, formFooter);
  taskForm.appendChild(form);
  return taskForm;
}
