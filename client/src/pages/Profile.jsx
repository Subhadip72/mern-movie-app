import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdLogout } from "react-icons/md";
import { logoutUser } from "../features/user/userSlice";

const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <main className="h-[85vh] w-[90vw] mx-auto flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-3xl mb-5">YOUR INFO</h1>
      <section className="text-white flex flex-col gap-3">
        <div className="flex justify-center items-center gap-2">
          <p className="font-bold text-xl">Name : </p>
          <p className="text-xl">
            {user.firstName} {user.lastName}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-bold text-xl">Email Id : </p>
          <p className="text-xl">{user.email}</p>
        </div>
      </section>
      <div className="flex justify-center mt-6">
        <button
          className="text-white flex items-center gap-2 bg-red-600 px-2 py-1 rounded-sm"
          onClick={() => dispatch(logoutUser())}
        >
          <MdLogout />
          LOGOUT
        </button>
      </div>
    </main>
  );
};

export default Profile;
