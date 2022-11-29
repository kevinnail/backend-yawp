const { Router } = require('express');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const restaurants = await Restaurant.getAll();

      res.json(restaurants);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    const restaurant = await Restaurant.getById(req.params.id);
    await restaurant.addReviews();
    await res.json(restaurant);
  });
