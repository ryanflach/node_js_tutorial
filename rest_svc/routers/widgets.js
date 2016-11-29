const express = require('express');
const widgetRouter = express.Router();
const path = require('path');
const db = require('../database').connect(path.join(__dirname, '..', 'widgets.json'));

widgetRouter.route('/widgets')
  .get((req, res) => {
    db(con => con.getAll().then(widgets => res.json(widgets)));
  })
  .post();

widgetRouter.route('/widgets/:widgetId')
  .get((req, res) => {
    db(con => con.get(parseInt(req.params.widgetId)).then(widgets => res.json(widgets)));
  })
  .put()
  .delete((req, res) => {
    db(con => con.delete(parseInt(req.params.widgetId)).then(widgets => res.json(widgets)));
  });

module.exports = widgetRouter;
