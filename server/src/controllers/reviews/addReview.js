const Reviews = require("../../models/Reviews");
const SaleDetail = require("../../models/VentaDetailModel");
const Sale = require("../../models/SaleModel");
const User = require("../../models/UserModel");

const userHasCar = async (id_user, id_car) => {
  try {
    let count = 0;
    const sale = await Sale.find({ id_user });
    if (sale.length > 0) {
      await Promise.all(
        sale.map(async (elem) => {
          const detailSale = await SaleDetail.find({
            id_car: id_car,
            id_venta: elem._id,
          });
          if (detailSale.length > 0) {
            count += 1;
          }
        })
      );
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
  const palabrotas = ["palabramala1", "palabramala2", "palabramala3"];
  try {
    const palabrasMalas = palabrotas.some((word) => coment.includes(word));
    if (palabrasMalas) {
      return "You can't post a review with these words";
    }
    const hasPurchase = await userHasCar(id_user, id_car);
    if (hasPurchase) {
      const newReview = new Reviews({
        id_car: id_car,
        id_user: id_user,
        coment: coment,
        value: value,
      });
      await newReview.save();
      const userData = await User.findById(id_user);
      const body = {
        _id: newReview._id,
        id_user: {
          id: userData._id,
          name: userData.name,
          lastNmae: userData.lastName,
          user: userData.user,
          image: userData.image,
        },
        id_car: newReview.id_car,
        coment: newReview.coment,
        value: newReview.value,
      };
      return body;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

//get review
const getReview = async (id_car) => {
  try {
    let response = [];
    const review = await Reviews.find({ id_car: id_car });
    if (review.length > 0) {
      await Promise.all(
        review.map(async (elem) => {
          const dataUser = await User.findById(elem.id_user);
          const body = {
            _id: elem._id,
            id_user: {
              id: dataUser._id,
              name: dataUser.name,
              lastNmae: dataUser.lastName,
              user: dataUser.user,
              image: dataUser.image,
            },
            id_car: elem.id_car,
            coment: elem.coment,
            value: elem.value,
          };
          response.push(body);
        })
      );
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
    await Reviews.updateOne({ _id: id }, { coment: coment, value: value });
    const review = await Reviews.findOne({ _id: id });
    const userData = await User.findById(review.id_user);
      const body = {
        _id: review._id,
        id_user: {
          id: userData._id,
          name: userData.name,
          lastNmae: userData.lastName,
          user: userData.user,
          image: userData.image,
        },
        id_car: review.id_car,
        coment: review.coment,
        value: review.value,
      };
    return body;
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
