import Link from "next/link";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((value) =>console.log("Signin sucess"))
    .catch((err) => console.log(err));

  
  };

  return (
    <div className=" flex p-10 flex-col h-screen justify-center items-center min-w-max">
      <div className="bg-slate-100 p-5 text-sm w-full max-w-lg rounded-xl space-y-4">
        <h1 className=" text-lg font-bold">Login</h1>
        <div className=" space-y-1">
          <div className=" text-base">Email</div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              placeholder="Password"
              className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
            />
          </div>
        </div>
        <div>
          <p className=" text-slate-500">
            Dont have an account{" "}
            <Link
              href="/Signup"
              className=" hover:text-black transition-colors delay-75"
            >
              Signup
            </Link>
          </p>
        </div>
        <button
          onClick={signinUser}
          className="w-full rounded-md p-2 text-center bg-slate-600 text-white hover:bg-slate-700 duration-500 transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
