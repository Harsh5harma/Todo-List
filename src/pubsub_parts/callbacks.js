import taskFormNode from '../common_Assets/taskFormNode';
import taskNode from '../common_Assets/taskNode';
import projectNode from '../common_Assets/projectNode';
import projectHeader from '../common_Assets/projectHeaderNode';
let pi = 0;
let ti = 0;
let existingTasks = [];
const existingProjects = [];
let id = 1;
let taskFormFlag = false;

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
      const formObj = {
        'index': ti,
        'taskName': inputName,
        'taskDesc': inputDesc,
      };
      ti++;
      existingTasks.push(JSON.stringify(formObj));
      localStorage.setItem('existingTasks', JSON.stringify(existingTasks));
      // console.log(JSON.parse(localStorage.getItem('existingTasks')));
      const tnode = taskNode(formObj.taskName);
      newTask.remove();
      taskFormFlag = false;
      taskContainer.appendChild(tnode);
    });
  }
};

const addProjectHandler = ()=> {
  const projContainer = document.querySelector('.pNames');
  const main = document.querySelector('.main');
  const mainTitle = document.querySelector('.mainTitle');
  const newProj = projectNode(`Default${id}`);
  newProj.classList.add(`${id}`);
  const newProjHeader = projectHeader(`Default${id}`);
  id++;
  // get the data in current project
  const currentProjTasks = localStorage.getItem('existingTasks');
  const projObj = {
    'index': pi,
    'name': `Project${pi}`,
    'taskList': currentProjTasks,
  };
  pi++;
  ti = 0;
  existingProjects.push(JSON.stringify(projObj));
  localStorage.setItem('existingProjects', JSON.stringify(existingProjects));
  existingTasks = [];
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
  const index = parseInt(data[1].currentTarget.classList[2]);
  const temp = JSON.parse(localStorage.getItem('existingProjects'))[index];
  const currTasks = JSON.parse(JSON.parse(temp).taskList);
  // console.log(currTasks);
  currTasks.forEach((element) => {
    taskContainer.appendChild(taskNode(JSON.parse(element).taskName));
  });
};

export {
  addTaskHandler,
  addProjectHandler,
  projSwitchHandler,
};
