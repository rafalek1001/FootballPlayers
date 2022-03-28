const express = require('express');
const { db } = require('../utils/db');

const playerRouter = express.Router();

playerRouter
  
  .get('/', (req, res) => {
    res.render('player/list-all', {
      players: db.getAll(),
    });
  })

  .get('/:id', (req, res) => {
    res.render('player/one', {
      player: db.getOne(req.params.id),
    });
  })

  .post('/', (req, res) => {
    const id = db.create(req.body);
    res.render('player/added', {
      name: req.body.name,
      id,
    });
  })

  .put('/:id', (req, res) => {
    db.update(req.params.id, req.body);
    res.render('player/modified', {
      name: req.body.name,
      id: req.params.id,
    });
  })

  .delete('/:id', (req, res) => {
    db.delete(req.params.id);
    res.render('player/deleted');
  })

  .get('/form/add', (req, res) => {
    res.render('player/forms/add');
  })

  .get('/form/edit/:id', (req, res) => {
    res.render('player/forms/edit', {
      player: db.getOne(req.params.id),
    });
  });

module.exports = {
  playerRouter,
};