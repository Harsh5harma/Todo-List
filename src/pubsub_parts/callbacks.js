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
  const deletedNode = e.target.parentElement.parentElement;
  const taskContainer = document.querySelector('.taskContainer');
  const childNodes = taskContainer.childNodes;
  let j = 0;
  const currProject = JSON.parse(localStorage.getItem('existingProjects'))[projectIndex];
  for (let i = 0; i< childNodes.length; i++) {
    const childNode = childNodes[i];
    if (childNode=== deletedNode) {
      currProject.tasks.splice(i, 1);
      console.log('in deleted Node');
      continue;
    }
    currProject.tasks[j].taskIndex = j;
    console.log(j);
    j++;
  }
  existingProjects[projectIndex] = currProject;
  localStorage.setItem('existingProjects', JSON.stringify(existingProjects));
  e.target.parentElement.parentElement.remove();
};

const editTaskHandler = (e) => {
  const editedNode = e.target.parentElement.parentElement;
  const taskContainer = document.querySelector('.taskContainer');
  const childNodes = taskContainer.childNodes;
  let taskIndex;

  for (let i = 0; i< childNodes.length; i++) {
    const childNode = childNodes[i];
    if (childNode === editedNode) {
      taskIndex = i;
      console.log('in edited Node');
      break;
    }
  }
  const target = existingProjects[projectIndex].tasks[taskIndex];
  const editForm = taskFormNode([target.title, target.description]);
  taskContainer.appendChild(editForm);

  const cancelBtn = document.querySelector('.cancelBtn');
  cancelBtn.addEventListener('click', ()=> {
    editForm.remove();
    taskFormFlag = false;
  });
  const addTaskBtn = document.querySelector('.addtaskBtn');
  addTaskBtn.addEventListener('click', ()=> {
    taskFormFlag = true;
    const inputName = document.querySelector('.tname').value;
    const inputDesc = document.querySelector('.taskdesc').value;
    const task = new Task(inputName, inputDesc, pi, ti);
    const tnode = taskNode(task.title);
    // taskContainer.replaceChild(task, editedNode);
    taskContainer.replaceChild(tnode, editedNode);
    existingProjects[projectIndex].tasks[taskIndex] = task;
    localStorage.setItem('existingProjects', JSON.stringify(existingProjects));
    editForm.remove();
  });
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
  editTaskHandler,
};
