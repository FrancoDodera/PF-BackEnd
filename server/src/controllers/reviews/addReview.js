const Reviews = require("../../models/Reviews");
const SaleDetail = require("../../models/VentaDetailModel");
const Sale = require("../../models/SaleModel");

const userHasCar = async (id_user, id_car) => {
  try {
    let count = 0;
    const sale = await Sale.find({id_user});
    if (sale.length > 0) {
      await Promise.all(
        sale.map(async (elem) => {
          const detailSale = await SaleDetail.find({
            id_car: id_car,
            id_venta: elem._id,
          }) 
          if (detailSale.length > 0) {
            count += 1;
          }
        })
      )
    }
if (count > 0) {
    return true;
  } else {
    return false;
  }
    // if (!saleDetail) {
    //   return false;
    // }
    // const id_venta = saleDetail.id_venta;
    // const salePurchase = await Sale.findOne({
    //   id_user: id_user,
    //   _id: id_venta,
    // });
    // return salePurchase;
  } catch (error) {
    throw error;
  }
};

//post
const addReview = async (id_user, id_car, coment, value) => {
  try {
    const hasPurchase = await userHasCar(id_user, id_car);
    if (hasPurchase) {
      const newReview = new Reviews({
        id_car: id_car,
        id_user: id_user,
        coment: coment,
        value: value,
      });
      await newReview.save();
      return newReview;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

//get review
const getReview = async (id_user, id_car) => {
  try {
    const review = await Reviews.find({ id_car: id_car, id_user: id_user });
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
const deleteReview = async (id) => {
  try {
    const review = await Reviews.deleteOne({
      _id: id,
    });
    return review;
  } catch (error) {
    throw error;
  }
};

const updateReview = async (id, coment, value) => {
  try {
    await Reviews.updateOne(
      { _id: id },
      { coment: coment, value: value }
    );
    const review = await Reviews.findOne({ _id: id });
    return review ;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addReview,
  getReview,
  getAllReviews,
  updateReview,
  deleteReview,
};
