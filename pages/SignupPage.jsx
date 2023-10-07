import React, { useState } from "react";
import Layout from "@/components/Layout";
import FloatingForm from "@/components/FloatingForm";
import { signup } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { firestore } from "firebase/app";
import Link from "next/link";

const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const registerUser = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className=" flex p-10 min-w-max flex-col h-screen justify-center items-center registerContainer">
        <form
          onSubmit={registerUser}
          className="bg-slate-200 dark:bg-slate-900  p-5 text-sm w-full max-w-lg rounded-xl space-y-4"
        >
          <h1 className=" text-lg font-bold">Sign Up</h1>

          <div className=" space-y-1">
            <div className=" text-base">First Name</div>
            <div>
              <input
                required
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                value={firstName}
                placeholder="First Name"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className=" space-y-1">
            <div className=" text-base">Last Name</div>
            <div>
              <input
                required
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                value={lastName}
                placeholder="Last Name"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className=" space-y-1">
            <div className=" text-base">Email</div>
            <div>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Email"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className=" space-y-1">
            <div className=" text-base">Password</div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                value={password}
                placeholder="Password"
                className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div>
            <p className=" text-slate-500">
              Already have an account?{" "}
              <Link
                href="/LoginPage"
                className=" hover:text-black transition-colors delay-75"
              >
                Login
              </Link>
            </p>
          </div>
          <div>
            <button className=" w-full rounded-md p-2 text-center bg-slate-600 text-white hover:bg-slate-700 duration-500 transition-colors">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;
