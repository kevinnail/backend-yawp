const Review = require('../models/Review');

module.exports = async (req, res, next) => {
  try {
    const review = await Review.getById(req.params.id);
    if (
      review &&
      (req.user.email === 'admin' || review.user_id === req.user.id)
    ) {
      next();
    } else {
      throw new Error('You do not have access to this page from authDelete');
    }
  } catch (e) {
    next(e);
  }
};
