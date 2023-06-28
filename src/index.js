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
import {addProjectHandler, addTaskHandler, projSwitchHandler} from './pubsub_parts/callbacks';


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
events.subscribe('addProject', addProjectHandler);
events.subscribe('projSwitch', projSwitchHandler);
console.log(events);

const taskBtn = document.querySelector('.addtaskImg');
taskBtn.addEventListener('click', ()=> {
  console.log('taskbtn clicked');
  events.publish('addTask');
});


const newProjBtn = document.querySelector('.plus');
const defaultpdiv = document.querySelector('.pdiv');
const projNameText = document.querySelector('.projNameText');
defaultpdiv.addEventListener('input', ()=>{
  projNameText.textContent = defaultpdiv.value;
});

// update project Name in header
newProjBtn.addEventListener('click', ()=>{
  console.log('new project added');
  events.publish('addProject');
  const pdiv = document.querySelectorAll('.pdiv');
  for (const child of pdiv) {
    child.addEventListener('click', (e)=>{
      events.publish('projSwitch', [child, e]);
      console.log('project switched');
    });
    child.addEventListener('input', ()=>{
      const projNameText = document.querySelector('.projNameText');
      projNameText.textContent = child.value;
    });
  };
});


