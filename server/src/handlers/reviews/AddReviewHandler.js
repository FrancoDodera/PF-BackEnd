const {
  addReviews,
  getReview,
  getAllReviews,
  deleteReview,
  updateReview,
} = require("../../controllers/reviews/addReview");

const updateReviewHandler = (req, res) => {
  const { id_user, id_car, coment, value } = req.body;
  try {
    updateReview(id_user, id_car, coment, value);
    return res.status(200).send("your review was updated successfully");
  } catch (error) {
    return res.status(400).send(error);
  }
}

const addReviewHandler = (req, res) => {
  const { id_user, id_car, coment, value } = req.body;
  try {
    addReviews(id_user, id_car, coment, value);
    return res.status(200).send("your review was uploaded successfully");
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getReviewHandler = (req, res) => {
  const { id_user, id_car } = req.params;
  try {
    const review = getReview(id_user, id_car);
    return res.status(200).send(review);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllReviewsHandler = (req, res) => {
  try {
    const reviews = getAllReviews();
    return res.status(200).send(reviews);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteReviewHandler = (req, res) => {
  const { id_user, id_car } = req.params;
  try {
    const review = deleteReview(id_user, id_car);
    return res.status(200).send(review);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = 
  addReviewHandler,
  getReviewHandler,
  getAllReviewsHandler,
  deleteReviewHandler,
  updateReviewHandler;
