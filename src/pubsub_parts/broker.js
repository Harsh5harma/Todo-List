/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {addProjectHandler, addTaskHandler, projSwitchHandler} from './callbacks';
import Event from './Event';

const broker = () => {
  const events = new Event();
  events.subscribe('addTask', addTaskHandler);
  events.subscribe('addProject', addProjectHandler);
  events.subscribe('projSwitch', projSwitchHandler);
  return events;
};

export {broker};


