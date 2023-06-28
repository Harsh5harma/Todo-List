/* eslint-disable require-jsdoc */
export default class Event {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, cbFn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(cbFn);
  }

  unsubscribe(eventName, cbFn) {
    if (this.events[eventName]) {
      for (let i = 0; i<this.events[eventName].length; i++) {
        if (this.events[eventName][i] === cbFn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  publish(eventName, data = '') {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
}
