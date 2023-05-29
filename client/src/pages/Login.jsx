import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { LoginNav } from "../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <>
      <LoginNav />
      <main className="bg-black min-h-screen flex justify-center items-center">
        <section className="w-[90vw] md:w-[70vw] lg:w-[500px]">
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
          <div className="text-center">
            <p className="text-white text-md">Not registerd yet?</p>
            <Link to="/register" className="text-white text-md underline">
              Register
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
