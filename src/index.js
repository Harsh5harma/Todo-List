/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import {mainLoader} from './ui_loaders/main';
import './style.css';
import {sidebarLoader} from './ui_loaders/sidebar.js';
import taskFormNode from './common_Assets/taskFormNode';
import taskNode from './common_Assets/taskNode';
import projectNode from './common_Assets/projectNode';
import projectHeader from './common_Assets/projectHeaderNode';
import Event from './pubsub_parts/Event';
import {addProjectHandler, addTaskHandler, projSwitchHandler, editTaskHandler, deleteTaskHandler} from './pubsub_parts/callbacks';


const loadpage = ((sidebarLoader, mainLoader)=> {
  const content = document.querySelector('body');
  const header = document.createElement('div');
  header.className = 'header';
  header.textContent = 'ToDo';
  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  const main = document.createElement('div');
  main.className = 'main';

  content.appendChild(header);
  content.appendChild(sidebar);
  content.appendChild(main);
  sidebarLoader(sidebar);
  mainLoader(main);
})(sidebarLoader, mainLoader);

const events = new Event();
events.subscribe('addTask', addTaskHandler);
events.subscribe('editTask', editTaskHandler);
events.subscribe('deleteTask', deleteTaskHandler);
events.subscribe('addProject', addProjectHandler);
events.subscribe('projSwitch', projSwitchHandler);

const taskBtn = document.querySelector('.addtaskImg');
taskBtn.addEventListener('click', ()=> {
  events.publish('addTask');
});


const newProjBtn = document.querySelector('.plus');
const defaultpdiv = document.querySelector('.pdiv');
const projNameText = document.querySelector('.projNameText');
defaultpdiv.addEventListener('input', ()=>{
  projNameText.textContent = defaultpdiv.value;
});

// update project Name in header
const taskContainer = document.querySelector('.taskContainer');
taskContainer.addEventListener('click', (e)=> {
  if (e.target.matches('.statusBtn')) {
    events.publish('deleteTask', e);
  } else if (e.target.matches('.editTask')) {
    events.publish('editTask', e);
  }
});
const projContainer = document.querySelector('.pNames');
projContainer.addEventListener('click', (e)=>{
  if (e.target.classList.contains('pdiv')) {
    const currProj = e.target;
    const index = parseInt(e.target.classList[2]);
    events.publish('projSwitch', [currProj, index]);
  }
});

projContainer.addEventListener('input', (e)=>{
  if (e.target.classList.contains('pdiv')) {
    const currProj = e.target;
    const projNameText = document.querySelector('.projNameText');
    projNameText.textContent = currProj.value;
  }
});
newProjBtn.addEventListener('click', ()=>{
  events.publish('addProject');
});

