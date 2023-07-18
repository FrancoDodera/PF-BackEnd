const Reviews = require("../../models/Reviews");

//post
const addReview = async (id_user, id_car, coment, value) => {
  try {
    const newReview = new Reviews({
      id_car: id_car,
      id_user: id_user,
      coment: coment,
      value: value,
    });

    await newReview.save();
    return newReview
  } catch (error) {
    throw error;
  }
};

//get review
const getReview = async (id_car) => {
  try {
    const review = await Reviews.find({ id_car: id_car});
    return review;
  } catch (error) {
    throw error;
  }
};

//get all reviews
const getAllReviews = async () => {
  try {
    const reviews = await Reviews.find();
    return reviews;
  } catch (error) {
    throw error;
  }
};

//delete review
const deleteReview = async (id_user, id_car) => {
  try {
    const review = await Reviews.deleteOne({
      id_car: id_car,
      id_user: id_user,
    });
    return review;
  } catch (error) {
    throw error;
  }
};

const updateReview = async (id_user, id_car, coment, value) => {
  try {
    const review = await Reviews.updateOne(
      { id_car: id_car, id_user: id_user },
      { coment: coment, value: value }
    );
    return review;
  } catch (error) {
    throw error;
  }
}



module.exports = {
  addReview, 
  getReview, 
  getAllReviews,
  updateReview, 
  deleteReview
}

