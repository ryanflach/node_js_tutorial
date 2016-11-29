const express = require('express');
const widgetRouter = express.Router();

widgetRouter.route('/widgets')
  .get((req, res) => {
    res.json([
      { name: 'Widget 1', color: 'blue', size: 'large', quantity: 3 },
      { name: 'Widget 2', color: 'red', size: 'small', quantity: 5 },
      { name: 'Widget 3', color: 'orange', size: 'medium', quantity: 10 }
    ]);
  })
  .post();

widgetRouter.route('/widgets/:widgetId')
  .get()
  .put()
  .delete();

module.exports = widgetRouter;
