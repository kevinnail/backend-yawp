const { Router } = require('express');
const authDelete = require('../middleware/authDelete.js');
const authenticate = require('../middleware/authenticate');
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
