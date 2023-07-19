const {
  addReviewHandler,
  getReviewHandler,
  getAllReviewsHandler,
  deleteReviewHandler,
  updateReviewHandler,
} = require("../handlers/reviews/ReviewHandler");

const {Router} = require('express')


const reviewRoutes = Router()

reviewRoutes.post('/', addReviewHandler);
reviewRoutes.get('/', getReviewHandler);
reviewRoutes.get('/:id', getAllReviewsHandler);
reviewRoutes.delete('/:id', deleteReviewHandler);
reviewRoutes.put('/', updateReviewHandler);

module.exports = reviewRoutes;
