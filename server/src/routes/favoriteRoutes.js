const { Router } = require("express");
const app = Router();
const {
  addReviewHandler,
  getReviewHandler,
  getAllReviewsHandler,
  deleteReviewHandler,
  updateReviewHandler,
} = require("../handlers/favorites/AddFavoriteHandler");

//añadir una review
app.post("/addFavorite", (req, res) => {
  addReviewHandler(req, res);
});

app.get("/getFavorite", (req, res) => {
  getReviewHandler(req, res);
})

app.get("/getAllFavorite", (req, res) => {
  getAllReviewsHandler(req, res);
})

app.delete("/deleteFavorite", (req, res) => {
  deleteReviewHandler(req, res);
})

app.put("/updateFavorite", (req, res) => {
  updateReviewHandler(req, res);
})

module.exports = app;
