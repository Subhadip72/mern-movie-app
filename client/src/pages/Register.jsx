import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { LoginNav } from "../components";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(registerUser({ firstName, secondName, email, password }));

    setFirstName("");
    setSecondName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <LoginNav />
      <main className="bg-black min-h-screen flex justify-center items-center">
        <section className="w-[90vw] md:w-[70vw] lg:w-[500px]">
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
            <label
              htmlFor="first-name"
              className="text-white text-base text-md"
            >
              First Name
            </label>
            <input
              type="text"
              name={firstName}
              placeholder="Enter your first name..."
              className="bg-[#1E2024] h-12 outline-none text-white text-base rounded-md"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label
              htmlFor="second-name"
              className="text-white text-base text-md"
            >
              Second Name
            </label>
            <input
              type="text"
              value={secondName}
              placeholder="Enter your second name..."
              className="bg-[#1E2024] h-12 outline-none text-white text-base rounded-md"
              onChange={(e) => setSecondName(e.target.value)}
            />
            <label htmlFor="email" className="text-white text-base text-md">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email..."
              className="bg-[#1E2024] h-12 outline-none text-white text-base rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="text-white text-base text-md">
              Password
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password..."
              className="bg-[#1E2024] h-12 outline-none text-white text-base rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-600 px-3 py-2 text-white text-xl rounded-md my-4"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
          <div className="text-center">
            <p className="text-white text-md">Already have an account?</p>
            <Link to="/login" className="text-white text-md underline">
              Login
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
