'use strict';

var _widgets = require('./widgets');

var _widgets2 = _interopRequireDefault(_widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_widgets2.default.add({ name: 'widget 1', color: 'red', size: 'large' });
console.log(_widgets2.default.getAll().length);