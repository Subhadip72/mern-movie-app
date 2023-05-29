import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RxPaperPlane } from "react-icons/rx";
import { getAllReviews, postReview } from "../features/reviews/reviewSlice";
// import { AiFillDelete } from "react-icons/ai";
import moment from "moment";

const Reviews = ({ movieDetails, tvSeriesDetails }) => {
  const { user } = useSelector((store) => store.user);
  const { reviews } = useSelector((store) => store.reviews);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const allReviews = reviews?.reviews?.filter(
    (item) => item.movie === movieDetails?.original_title
  );

  const allTvReviews = reviews?.reviews?.filter(
    (item) => item.movie === tvSeriesDetails?.original_name
  );

  const handleSubmit = () => {
    dispatch(
      postReview({
        movie: tvSeriesDetails
          ? tvSeriesDetails?.original_name
          : movieDetails?.original_title,
        comment,
        name: user.firstName,
      })
    );
    setComment("");
  };

  useEffect(() => {
    dispatch(getAllReviews());
  }, [reviews]);

  return (
    <section className="w-[90vw] mx-auto my-8">
      <h1 className="text-white text-2xl font-bold">
        REVIEWS ({allReviews?.length})
      </h1>
      <div className="my-8">
        {allReviews?.map((item) => {
          const { _id, name, createdAt, comment } = item;
          return (
            <article key={_id} className="my-10">
              <div className="flex gap-4 items-center mb-2">
                <p className="text-white text-2xl bg-teal-600 w-10 h-10 rounded-full flex justify-center items-center">
                  {name.slice(0, 1)}
                </p>
                <p className="text-white text-2xl">{name}</p>
              </div>
              <div className="text-white ml-12 flex flex-col gap-3">
                <p>{moment(createdAt).format("MMMM Do, YYYY")}</p>
                <p>{comment}</p>
                {/* {name === user.firstName && (
                  <button className="text-white mt-2 mr-auto bg-red-600 px-3 py-1 rounded-sm flex gap-2 items-center">
                    <AiFillDelete />
                    REMOVE
                  </button>
                )} */}
              </div>
            </article>
          );
        })}
        {tvSeriesDetails &&
          allTvReviews?.map((item) => {
            const { _id, name, createdAt, comment } = item;
            return (
              <article key={_id} className="my-10">
                <div className="flex gap-4 items-center mb-2">
                  <p className="text-white text-2xl bg-teal-600 w-10 h-10 rounded-full flex justify-center items-center">
                    {name.slice(0, 1)}
                  </p>
                  <p className="text-white text-2xl">{name}</p>
                </div>
                <div className="text-white ml-12 flex flex-col gap-3">
                  <p>{moment(createdAt).format("MMMM Do, YYYY")}</p>
                  <p>{comment}</p>
                  {/* {name === user.firstName && (
                    <button className="text-white mt-2 mr-auto bg-red-600 px-3 py-1 rounded-sm flex gap-2 items-center">
                      <AiFillDelete />
                      REMOVE
                    </button>
                  )} */}
                </div>
              </article>
            );
          })}
      </div>
      <div className="flex gap-4 items-center mb-2">
        <p className="text-white text-2xl bg-teal-600 w-10 h-10 rounded-full flex justify-center items-center">
          {user.firstName.slice(0, 1)}
        </p>
        <p className="text-white text-2xl">{user.firstName}</p>
      </div>
      <div className="w-[70vw] ml-12">
        <textarea
          rows="5"
          className="w-full bg-transparent text-white border border-gray-500 p-4 rounded-md"
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="button"
          className="text-white flex items-center gap-2 bg-red-600 rounded-sm px-4 py-1 mt-2"
          onClick={handleSubmit}
        >
          <RxPaperPlane />
          <span>POST</span>
        </button>
      </div>
    </section>
  );
};

export default Reviews;
