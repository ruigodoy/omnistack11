const express = require('express');

const OngController = require('./controllers/ongController')
const incidenteController = require('./controllers/incidenteController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router();

routes.post('/sessions', sessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', profileController.index)

routes.get('/incidents', incidenteController.index);
routes.post('/incidents', incidenteController.create);
routes.delete('/incidents/:id', incidenteController.delete)


module.exports = routes;
