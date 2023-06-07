/* eslint-disable require-jsdoc */
import ListItem from "./listItem.js";

// const myClass = new ListItem('lola', 'bunny', '12/12/23', 'high');

class Project {
  constructor(title) {
    this._listItems = [];
    this._title = title;
    this._numOfProjects=0;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get lists() {
    return this._listItems;
  }

  addToProject(listItem) {
    this._listItems.push(listItem);
    this._numOfProjects+=1;
  }

  removeListItem(num=(this._numOfProjects-1)) {
    console.log(this._listItems.splice(num, 1));
    this._numOfProjects-=1;
  }
}

module.exports=Project;
/*
const myClass = new ListItem('lola', 'bunny', '12/12/23', 'high');
const myClass2 = new ListItem('lola', 'bunny', '12/12/23', 'high');
const myClass3 = new ListItem('lola', 'bunny', '12/12/23', 'high');

const myProject = new Project('myProject');
myProject.addToProject(myClass);
myProject.addToProject(myClass2);
myProject.addToProject(myClass3);
console.log(myProject);
myProject.removeListItem();
console.log(myProject);
*/

