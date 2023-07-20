const {
  addReview,
  getReview,
  getAllReviews,
  deleteReview,
  updateReview,
} = require("../../controllers/reviews/addReview");

const updateReviewHandler = async (req, res) => {
  const {coment, id, value } = req.body;
  try {
    const update = await updateReview(id, coment, value);
    return res.status(200).send({message:"your review was updated successfully", data: update});
  } catch (error) {
    return res.status(400).send(error);
  }
}

const addReviewHandler = async (req, res) => {
  const { id_user, id_car, coment, value } = req.body;
  try {
    const palabrotas = ['palabramala1', 'palabramala2', 'palabramala3'];
    const palabrasMalas = palabrotas.some(word => coment.includes(word));
    if (palabrasMalas) {
      return res.status(400).send({ message: "You can't post a review with these words" });
    }
    const review = await addReview(id_user, id_car, coment, value);
    if (!review) {
      return res.status(400).send({message:"The user must have a car purchased to add a review"});
    } else {
      return res.status(200).send({message:"your review was uploaded successfully", data: review} );}
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

const deleteReviewHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteReview(id);
    return res.status(200).send({message: "Review deleted"});
  } catch (error) {
    return res.status(400).send(error);
  }
};


module.exports = {
  addReviewHandler,
  getReviewHandler,
  getAllReviewsHandler,
  deleteReviewHandler,
  updateReviewHandler,
};