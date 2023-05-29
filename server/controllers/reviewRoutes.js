const Reviews = require("../models/Reviews");

const getReviews = async (req, res) => {
  const reviews = await Reviews.find({});
  res.status(200).send({ reviews });
};

const getPersonalReviews = async (req, res) => {
  const reviews = await Reviews.find({ postedBy: req.user.userid });
  res.status(200).json({ userReviews: reviews });
};

const postReview = async (req, res) => {
  req.body.postedBy = req.user.userid;
  const review = await Reviews.create(req.body);
  res.status(200).json({ review });
};

const deleteReview = async (req, res) => {
  const {
    user: { userid },
    params: { id: reviewId },
  } = req;
  const review = await Reviews.findByIdAndRemove({
    _id: reviewId,
    createdBy: userid,
  });
  if (!review) {
    throw new Error(`No review with id ${reviewId} found`);
  }
  res.status(200).send("review deleted!");
};

const editReview = async (req, res) => {
  const {
    body: { comment },
    user: { userid },
    params: { id: reviewId },
  } = req;

  if (comment === "") {
    throw new Error(`Comment can't be empty!`);
  }

  const newReview = await Reviews.findByIdAndUpdate(
    {
      _id: reviewId,
      postedBy: userid,
    },
    req.body,
    { new: true, runValidators: true }
  );

  if (!newReview) {
    throw new Error(`No review with id ${reviewId} found!`);
  }

  res.status(200).json(newReview);
};

module.exports = {
  getReviews,
  postReview,
  deleteReview,
  getPersonalReviews,
  editReview,
};
