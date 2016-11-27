let tempData = '';

module.exports = {
  doIt: () => { console.log('Did it.'); },
  doSomething: () => { console.log('Did something!'); },
  getItDone: () => { console.log('Got it done!'); },
  put: (d) => { tempData = d; },
  get: () => { return tempData; }
};
