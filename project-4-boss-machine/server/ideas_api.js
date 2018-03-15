const express = require('express');
const apiRouter = express.Router();
const app = require('../server.js');
const db = require('./db.js');

app.param('ideaId', (req, res, next, id) => {
  //console.log('in app.param');
  //console.log(id);
  //const ideaId = Number(id);
  const ideaId = id;
  //console.log('ideaId: ' + ideaId);
  const ideaIndex = db.getFromDatabaseById('ideas', ideaId);
  //console.log('beginning ideaIndex: ' + JSON.stringify(ideaIndex));
  //console.log('beginning ideaIndex: ' + ideaIndex);
  if (ideaIndex === -1 || !ideaIndex) {
    //console.log('idea not found!');
    res.status(404).send('Idea not found!');
  } else {
    //console.log('ideaIndex: ' + ideaIndex);
    req.ideaIndex = ideaIndex;
    next();
  }
});

// GET /api/ideas to get an array of all ideas
app.get('/api/ideas', (req, res, next) => {
  const allIdeas = db.getAllFromDatabase('ideas');
  console.log('allIdeas: ' + allIdeas);
  if (allIdeas) {
    console.log('allideas to be displayed');
    res.status(200).send(allIdeas);
  } else {
    res.status(404).send();
  }
});

// GET /api/ideas/:ideaId to get a single idea by id
app.get('/api/ideas/:ideaId', (req, res, next) => {
  res.status(200).send(req.ideaIndex);
});

// PUT /api/ideas/:ideaId to update a single idea by id.
app.put('/api/ideas/:ideaId', (req, res, next) => {
  req.ideaIndex = req.body;
  const ideaToUpdate = db.updateInstanceInDatabase('ideas', req.ideaIndex);
  //console.log(ideaToUpdate);
  if (ideaToUpdate) {
    //console.log('app.put: ' + req.ideaIndex);
    res.send(req.ideaIndex);
  } else {
    res.status(404).send();
  }
});

// POST /api/ideas to create a new idea and save it to the database.
app.post('/api/ideas', (req, res, next) => {
  const newidea = req.body;
  //console.log(newidea);
  newidea.id = db.ideaIdCounter++;
  db.addToDatabase('ideas', newidea);
  res.status(201).send(newidea);
});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
app.delete('/api/ideas/:ideaId', (req, res, next) => {
  //console.log(req.ideaIndex.id);
  db.deleteFromDatabasebyId('ideas', req.ideaIndex.id);
  res.status(204).send();
});

module.exports = apiRouter;
