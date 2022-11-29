const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
// const authorize = require('../middleware/authorize.js');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

module.exports = Router();
