const express = require('express');
const widgetRouter = express.Router();
const path = require('path');
const db = require('../database').connect(path.join(__dirname, '..', 'widgets.json'));

widgetRouter.route('/widgets')
  .get((req, res) => {
    db(con => con.getAll().then(widgets => res.json(widgets)));
  })
  .post((req, res) => {
    db(con => con.insert(req.body).then(wiefdget => res.json(widget)));
  });

widgetRouter.route('/widgets/:widgetId')
  .get((req, res) => {
    db(con => con.get(parseInt(req.params.widgetId)).then(widget => res.json(widget)));
  })
  .put((req, res) => {
    req.body.id = parseInt(req.params.widgetId);
    db(con => con.update(req.body).then(widget => res.json(widget)));
  })
  .delete((req, res) => {
    db(con => con.delete(parseInt(req.params.widgetId)).then(widget => res.json(widget)));
  });

module.exports = widgetRouter;
