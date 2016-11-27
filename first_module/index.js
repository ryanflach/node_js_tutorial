'use strict';

// const { doSomething, getItDone: git } = require('./first-module');
//
// doSomething();
// git();

const firstMod1 = require('./first-module');
const firstMod2 = require('./first-module');

console.log(firstMod1 === firstMod2);

firstMod1.put('test data');
console.log(firstMod2.get());

// const configurableMod = require('./configurable-module');
//
// const configuredA = configurableMod({ logPrefix: 'A> '});
// configuredA.log('test');
//
// const configuredB = configurableMod({ logPrefix: 'B> '});
// configuredB.log('test 2');
