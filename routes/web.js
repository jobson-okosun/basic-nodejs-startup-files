
// web routes

const { Router } = require('express');
const webController = require('../controllers/webController');

const route = Router();

route.get('/', webController.get_home);


module.exports = route;
