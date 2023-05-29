import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserReviews, deleteReview } from "../features/reviews/reviewSlice";
import moment from "moment";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Reviews = () => {
  const dispatch = useDispatch();
  const { userReviews } = useSelector((store) => store.reviews);

  useEffect(() => {
    dispatch(getUserReviews());
  }, [userReviews]);

  return (
    <main className="w-[85vw] mx-auto my-8 min-h-[80vh]">
      <h1 className="text-white text-2xl font-bold mb-8">
        YOUR REVIEWS ({userReviews?.userReviews?.length})
      </h1>
      <section className="flex flex-col gap-6 lg:grid grid-cols-3">
        {userReviews?.userReviews?.map((item) => {
          const { _id, comment, movie, createdAt } = item;
          return (
            <article
              key={_id}
              className="text-white flex flex-col gap-3 border-b-2 border-gray-500 pb-5"
            >
              <h2 className="text-xl font-bold">{movie}</h2>
              <p>Posted on : {moment(createdAt).format("MMMM Do, YYYY")}</p>
              <p>{comment}</p>
              <div className="flex gap-6">
                <button
                  type="button"
                  className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-sm"
                  onClick={() => dispatch(deleteReview(_id))}
                >
                  <AiFillDelete />
                  REMOVE
                </button>
                <Link
                  to={`/reviews/${_id}`}
                  className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-sm"
                  onClick={() => {}}
                >
                  <AiFillEdit />
                  EDIT
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Reviews;
