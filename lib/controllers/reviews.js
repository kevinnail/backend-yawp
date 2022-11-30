const { Router } = require('express');
const authDelete = require('../middleware/authDelete.js');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize.js');
// const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

module.exports = Router().delete(
  '/:id',
  [authenticate, authDelete],
  async (req, res, next) => {
    try {
      const data = await Review.deleteById(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  }
);
