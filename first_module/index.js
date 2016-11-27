'use strict';

const { doSomething, getItDone: git } = require('./first-module');

doSomething();
git();

// const configurableMod = require('./configurable-module');
//
// const configuredA = configurableMod({ logPrefix: 'A> '});
// configuredA.log('test');
//
// const configuredB = configurableMod({ logPrefix: 'B> '});
// configuredB.log('test 2');
