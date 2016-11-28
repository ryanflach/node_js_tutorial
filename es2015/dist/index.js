'use strict';

var _widgets = require('./widgets');

(0, _widgets.add)({ name: 'first widget', color: 'red', size: 'large' });
console.log((0, _widgets.getAll)().length);