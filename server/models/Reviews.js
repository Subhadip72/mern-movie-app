const { Schema, model, default: mongoose } = require("mongoose");

const ReviewSchema = new Schema(
  {
    movie: String,
    tvSeries: String,
    comment: {
      type: String,
      required: [true, "Review cannot be empty!"],
    },
    name: {
      type: String,
      required: [true, "Review cannot be empty!"],
    },
    postedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: ["please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = model("Reviews", ReviewSchema);
