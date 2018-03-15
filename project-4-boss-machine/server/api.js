const express = require('express');
const apiRouter = express.Router();
const app = require('../server.js');
const db = require('./db.js');
const check = require('./checkMillionDollarIdea.js');

// Minions ****************************************************************
app.param('minionId', (req, res, next, id) => {
  //console.log('in app.param');
  //console.log(id);
  //const minionId = Number(id);
  const minionId = id;
  //console.log('minionId: ' + minionId);
  const minionIndex = db.getFromDatabaseById('minions', minionId);
  //console.log('beginning minionIndex: ' + JSON.stringify(minionIndex));
  //console.log('beginning minionIndex: ' + minionIndex);
  if (minionIndex === -1 || !minionIndex) {
    //console.log('Minion not found!');
    res.status(404).send('Minion not found!');
  } else {
    //console.log('minionIndex: ' + minionIndex);
    req.minionIndex = minionIndex;
    next();
  }
});

// GET /api/minions to get an array of all minions
app.get('/api/minions', (req, res, next) => {
  const allMinions = db.getAllFromDatabase('minions');
  if (allMinions) {
    //console.log('allMinions to be displayed');
    res.status(200).send(allMinions);
  } else {
    res.status(404).send();
  }
});

// GET /api/minions/:minionId to get a single minion by id
app.get('/api/minions/:minionId', (req, res, next) => {
  res.status(200).send(req.minionIndex);
});

// PUT /api/minions/:minionId to update a single minion by id.
app.put('/api/minions/:minionId', (req, res, next) => {
  req.minionIndex = req.body;
  const minionToUpdate = db.updateInstanceInDatabase('minions', req.minionIndex);
  //console.log(minionToUpdate);
  if (minionToUpdate) {
    //console.log('app.put: ' + req.minionIndex);
    res.send(req.minionIndex);
  } else {
    res.status(404).send();
  }
});

// POST /api/minions to create a new minion and save it to the database.
app.post('/api/minions', (req, res, next) => {
  const newMinion = req.body;
  //console.log(newMinion);
  newMinion.id = db.minionIdCounter++;
  db.addToDatabase('minions', newMinion);
  res.status(201).send(newMinion);
});

// DELETE /api/minions/:minionId to delete a single minion by id.
app.delete('/api/minions/:minionId', (req, res, next) => {
  //console.log(req.minionIndex.id);
  db.deleteFromDatabasebyId('minions', req.minionIndex.id);
  res.status(204).send();
});

// Ideas ****************************************************************
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
  //console.log('allIdeas: ' + allIdeas);
  if (allIdeas) {
    //console.log('allideas to be displayed');
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
  const newIdea = req.body;
  //console.log('check: ' + check);
  const worthwhile = check(req, res, next);
  //console.log('worthwhile: ' + worthwhile);
  if (worthwhile) {
    //console.log('saving');
    newIdea.id = db.ideaIdCounter++;
    db.addToDatabase('ideas', newIdea);
    res.status(201).send(newIdea);
  } else {
    res.status(400).send();
  }
});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
app.delete('/api/ideas/:ideaId', (req, res, next) => {
  //console.log(req.ideaIndex.id);
  db.deleteFromDatabasebyId('ideas', req.ideaIndex.id);
  res.status(204).send();
});


// Meetings ****************************************************************
app.param('meetingId', (req, res, next, id) => {
  //console.log('in app.param');
  //console.log(id);
  //const ideaId = Number(id);
  const meetingId = id;
  //console.log('ideaId: ' + ideaId);
  const meetingIndex = db.getFromDatabaseById('meetings', meetingId);
  //console.log('beginning ideaIndex: ' + JSON.stringify(ideaIndex));
  //console.log('beginning ideaIndex: ' + ideaIndex);
  if (meetingIndex === -1 || !meetingIndex) {
    //console.log('idea not found!');
    res.status(404).send('Meeting not found!');
  } else {
    //console.log('ideaIndex: ' + ideaIndex);
    req.meetingIndex = meetingIndex;
    next();
  }
});

// GET /api/meetings to get an array of all meetings.
app.get('/api/meetings', (req, res, next) => {
  const allMeetings = db.getAllFromDatabase('meetings');
  //console.log('allIdeas: ' + allIdeas);
  if (allMeetings) {
    //console.log('allideas to be displayed');
    res.status(200).send(allMeetings);
  } else {
    res.status(404).send();
  }
});

// POST /api/meetings to create a new meeting and save it to the database.
app.post('/api/meetings', (req, res, next) => {
  const newMeeting = db.createMeeting();
  db.addToDatabase('meetings', newMeeting);
  res.status(201).send(newMeeting);
});

// DELETE /api/meetings to delete _all_ meetings from the database.
app.delete('/api/meetings/', (req, res, next) => {
  //console.log(req.ideaIndex.id);
  db.deleteAllFromDatabase('meetings');
  res.status(204).send();
});

// Work ****************************************************************
// ******

const sorcererRouter = express.Router();
const familiarRouter = express.Router({mergeParams: true});

sorcererRouter.use('/:sorcererId/familiars', familiarRouter);

sorcererRouter.get('/', (req, res, next) => {
  res.status(200).send(Sorcerers);
  next();
});

sorcererRouter.param('sorcererId', (req, res, next, id) => {
  const sorcerer = getSorcererById(id);
  req.sorcerer = sorcerer;
  next();
});

familiarRouter.get('/', (req, res, next) => {
  res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
});

app.use('/sorcerer', sorcererRouter);
//********************************/////////////////////////////

const workRouter = express.Router({mergeParams: true});
app.use('/api/minions/:minionId/work', workRouter);

/*app.get('/', (req, res, next) => {
  console.log('req.minionIndex: ' + req.minionIndex);
  res.status(200).send(req.minionIndex);
});*/

workRouter.get('/', (req, res, next) => {
  //console.log('workRouter');
  //console.log('req.minionIndex.id: ' + req.minionIndex.id);
  //console.log('db.getFromDatabaseById:' + JSON.stringify(db.getFromDatabaseById('work', req.minionIndex.id)));
  //const work = JSON.stringify(db.getFromDatabaseById('work', req.minionIndex.id));
  const work = db.getFromDatabaseById('work', req.minionIndex.id);
  //console.log('work: ' + work);
  res.status(200).send(work);
});


/*app.param('minionId', (req, res, next, id) => {
  //console.log('in app.param');
  //console.log(id);
  //const ideaId = Number(id);
  const minionId = id;
  //console.log('ideaId: ' + ideaId);
  const minionIndex = db.getFromDatabaseById('work', minionId);
  //console.log('beginning ideaIndex: ' + JSON.stringify(ideaIndex));
  //console.log('beginning ideaIndex: ' + ideaIndex);
  if (minionIndex === -1 || !minionIndex) {
    //console.log('idea not found!');
    res.status(404).send('Minion not found!');
  } else {
    //console.log('ideaIndex: ' + ideaIndex);
    req.minionIndex = minionIndex;
    next();
  }
});*/

// ******
// GET /api/minions/:minionId/work to get an array of all work for the specified minon.
/*app.get('/api/minions/:minionId/work', (req, res, next) => {
  res.status(200).send(req.minionIndex);
});*/

// ******
// PUT /api/minions/:minionId/work/:workId to update a single work by id.
/*app.put('/api/ideas/:ideaId', (req, res, next) => {
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

// ******
// POST /api/minions/:minionId/work to create a new work object and save it to the database.
app.post('/api/ideas', (req, res, next) => {
  const newIdea = req.body;
  //console.log('check: ' + check);
  const worthwhile = check(req, res, next);
  //console.log('worthwhile: ' + worthwhile);
  if (worthwhile) {
    //console.log('saving');
    newIdea.id = db.ideaIdCounter++;
    db.addToDatabase('ideas', newIdea);
    res.status(201).send(newIdea);
  } else {
    res.status(400).send();
  }
});

// ******
// DELETE /api/minions/:minionId/work/:workId to delete a single work by id.
app.delete('/api/ideas/:ideaId', (req, res, next) => {
  //console.log(req.ideaIndex.id);
  db.deleteFromDatabasebyId('ideas', req.ideaIndex.id);
  res.status(204).send();
});*/

module.exports = apiRouter;
