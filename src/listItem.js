/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

class ListItem {
  constructor(title, description, dueDate, priority) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
  }
  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(desc) {
    this._description=desc;
  }

  get dueDate() {
    return this._dueDate;
  }
  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    this._priority=priority;
  }

  set properties(l) {
    Object.assign(this, l);
  }
};

module.exports = ListItem;
/*
const newItem = new ListItem('lola', 'bunny', '12/12/23', 'high');
const newItem2 = new ListItem('lol', 'bnny', '12/12/21', 'med');
newItem.properties = newItem2;
console.log(newItem);
*/
