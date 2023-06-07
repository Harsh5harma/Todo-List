import {mainLoader} from './ui_loaders/main';
import './style.css';
import {sidebarLoader} from './ui_loaders/sidebar.js';

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

