const { Router } = require("express");
const app = Router();
const {
  addReviewHandler,
  getReviewHandler,
  getAllReviewsHandler,
  deleteReviewHandler,
  updateReviewHandler,
} = require("../handlers/reviews/AddReviewHandler");

//añadir una review
app.post("/addReview", (req, res) => {
  addReviewHandler(req, res);
});

app.get("/getReview/:id_car", (req, res) => {
  getReviewHandler(req, res);
});

app.get("/getAllReviews", (req, res) => {
  getAllReviewsHandler(req, res);
});

app.put("/updateReview", (req, res) => {
  updateReviewHandler(req, res);
});

app.delete("/deleteReview", (req, res) => {
  deleteReviewHandler(req, res);
});

module.exports = app;
