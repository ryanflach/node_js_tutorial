'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var widgets = [];

// export const getAll = () => widgets;
//
// export const add = newWidget => widgets.push(newWidget);

exports.default = {
  getAll: function getAll() {
    return widgets;
  },
  add: function add(newWidget) {
    return widgets.push(newWidget);
  }
};