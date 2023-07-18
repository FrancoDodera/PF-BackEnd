const {
    addReview,
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
  
  const addReviewHandler = async(req, res) => {
    const { id_user, id_car, coment, value } = req.body;
    try {
      const response = await addReview(id_user, id_car, coment, value);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).send(error);
    }
  };
  
  const getReviewHandler = async(req, res) => {
    const { id_car } = req.params;
    try {
      const review = await getReview(id_car);
      return res.status(200).send(review);
    } catch (error) {
      return res.status(400).send(error);
    }
  };
  
  const getAllReviewsHandler = async(req, res) => {
    try {
      const reviews = await getAllReviews();
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
  
  module.exports = {
    addReviewHandler,
    getReviewHandler,
    getAllReviewsHandler,
    deleteReviewHandler,
    updateReviewHandler
  }
    
  