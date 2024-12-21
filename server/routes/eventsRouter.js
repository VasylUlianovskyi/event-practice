const { Router } = require('express');
const { getAllEvents } = require('../controllers/eventsController');

const eventsRouter = Router();
eventsRouter.get('/', getAllEvents);

module.exports = eventsRouter;
