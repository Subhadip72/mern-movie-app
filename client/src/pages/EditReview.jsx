import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { editReview } from "../features/reviews/reviewSlice";
import { useDispatch } from "react-redux";

const EditReview = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editReview({
        review: { comment },
        reviewId: id,
      })
    );
    setComment("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-[90vw] mx-auto flex flex-col gap-4 min-h-screen mt-10 lg:w-[700px]">
      <h1 className="text-white text-2xl font-bold">EDIT YOUR COMMENT</h1>
      <form className="flex flex-col gap-3 mt-5" onSubmit={handleSubmit}>
        <label htmlFor="comment" className="text-white text-base mb-1">
          Comment
        </label>
        <textarea
          rows={5}
          className="bg-transparent border border-green-800 rounded-md p-3 text-white"
          placeholder="Update your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="lg:flex justify-center mt-2">
          <button
            type="submit"
            className="bg-red-600 text-white flex gap-2 rounded-sm px-2 py-1 items-center"
            onClick={handleSubmit}
          >
            <AiFillEdit />
            SUBMIT
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditReview;
