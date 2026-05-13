const route = require('express').Router();
const l1Controller = require('../controllers/lesson1')

route.get('/', l1Controller.idxGreetings);
route.get('/aland', l1Controller.alandGreetings);

module.exports = route;