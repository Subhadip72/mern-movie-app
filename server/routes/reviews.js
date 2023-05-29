const express = require("express");
const {
  getReviews,
  postReview,
  deleteReview,
  getPersonalReviews,
  editReview,
} = require("../controllers/reviewRoutes");

const router = express.Router();

router.get("/getAllReviews", getReviews);
router.get("/getMyReviews", getPersonalReviews);
router.post("/postReview", postReview);
router.delete("/deleteReview/:id", deleteReview);
router.patch("/editReview/:id", editReview);

module.exports = router;
