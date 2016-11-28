import { getAll as getAllFn, add as addWidget } from './widgets';

addWidget({ name: 'widget 1', color: 'red', size: 'large' });
console.log(getAllFn().length);
