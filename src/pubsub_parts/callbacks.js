/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import taskFormNode from '../common_Assets/taskFormNode';
import taskNode from '../common_Assets/taskNode';
import projectNode from '../common_Assets/projectNode';
import projectHeader from '../common_Assets/projectHeaderNode';
let pi = 0;
let ti = 0;
// const existingTasks = [];
const existingProjects = [];
let taskFormFlag = false;
let projectIndex = 0;


class Task {
  constructor(title, description, projectIndex, taskIndex) {
    this.title = title;
    this.description = description;
    this.projectIndex = projectIndex;
    this.taskIndex = taskIndex;
  }
}
class Project {
  constructor(projectIndex, tasks) {
    this.projectIndex = projectIndex;
    this.tasks = tasks;
  }
}
function makeDefaultProj() {
  if (pi==0) {
    existingProjects.push(new Project(pi, []));
    console.log('added default proj');
  }
};
makeDefaultProj();
const addTaskHandler = ()=> {
  if (!taskFormFlag) {
    const taskContainer = document.querySelector('.taskContainer');
    const newTask = taskFormNode();
    taskContainer.appendChild(newTask);
    taskFormFlag = true;

    const cancelBtn = document.querySelector('.cancelBtn');
    cancelBtn.addEventListener('click', ()=> {
      taskFormFlag = false;
      newTask.remove();
    });
    const addTaskBtn = document.querySelector('.addtaskBtn');
    addTaskBtn.addEventListener('click', ()=> {
      const inputName = document.querySelector('.tname').value;
      const inputDesc = document.querySelector('.taskdesc').value;
      const task = new Task(inputName, inputDesc, pi, ti);
      existingProjects[projectIndex].tasks.push(task);
      ti++;
      localStorage.setItem('existingProjects', JSON.stringify(existingProjects));
      // console.log(JSON.parse(localStorage.getItem('existingTasks')));
      const tnode = taskNode(task.title);
      newTask.remove();
      taskFormFlag = false;
      taskContainer.appendChild(tnode);
    });
  }
};
const deleteTaskHandler = (e) => {
  e.target.parentElement.parentElement.remove();
};
const addProjectHandler = ()=> {
  pi++;
  projectIndex = pi;
  existingProjects.push(new Project(pi, []));
  const projContainer = document.querySelector('.pNames');
  const main = document.querySelector('.main');
  const mainTitle = document.querySelector('.mainTitle');
  const newProj = projectNode(`Default${pi}`);
  newProj.classList.add(`${pi}`);
  const newProjHeader = projectHeader(`Default${pi}`);
  const projNameText = document.querySelector('.projNameText');
  projNameText.classList.add(pi);
  ti = 0;
  // now replace sidebar and main area
  const taskContainer = document.querySelector('.taskContainer');
  taskContainer.replaceChildren();
  main.replaceChild(newProjHeader, mainTitle);
  // now add the new projectTitle
  projContainer.append(newProj);
};

const projSwitchHandler = (data)=> {
  const projNameText = document.querySelector('.projNameText');
  const taskContainer = document.querySelector('.taskContainer');
  projNameText.textContent = data[0].value;
  taskContainer.replaceChildren();
  projectIndex = data[1];
  console.log(projectIndex);
  const temp = JSON.parse(localStorage.getItem('existingProjects'))[projectIndex].tasks;
  temp.forEach((task) => {
    taskContainer.appendChild(taskNode(task.title));
  });
};

export {
  addTaskHandler,
  addProjectHandler,
  projSwitchHandler,
  deleteTaskHandler,
};
