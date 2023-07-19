const Reviews = require("../../models/Reviews");
const User = require('../../models/UserModel')

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
    let response=[];
    const review = await Reviews.find({ id_car: id_car});
    if(review.length>0){
      await Promise.all(
        review.map(async(elem)=>{
          const dataUser=await User.findById(elem.id_user);
          const body={
            _id:elem._id,
            id_user:{
              id:dataUser._id,
              name:dataUser.name,
              lastNmae:dataUser.lastName,
              user:dataUser.user,
              image:dataUser.image
            },
            id_car:elem.id_car,
            coment:elem.coment,
            value:elem.value
          }
          response.push(body)
        })
      )
    }
    
    return response;
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

