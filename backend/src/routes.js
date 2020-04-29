const express = require('express');
const ong_controller = require('./controllers/ong_controller');
const incident_controller = require('./controllers/incident_controller');
const profile_controller = require('./controllers/profile_controller');
const routes = express.Router();


routes.get('/ongs', ong_controller.index);

routes.post('/ongs', ong_controller.create);

routes.get('/profile', profile_controller.index);

routes.get('/incidents', incident_controller.index);

routes.post('/incidents', incident_controller.create);

routes.delete('/incidents/:id', incident_controller.delete);

module.exports = routes