import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
// import { app } from "../firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFirebase } from "@/context/Firebase";




const Signup = () => {
  const firebase=useFirebase();
  console.log("Firebase",firebase)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const auth=getAuth(app);
//   console.log(auth?.currentUser?.email);
//   const signIn = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  //   profile picture
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setSelectedImageUrl(imageUrl);
    }
  };

  return (
    <div className=" flex p-10 min-w-max flex-col h-screen justify-center items-center">
      <div className="bg-slate-200 dark:bg-slate-900  p-5 text-sm w-full max-w-lg rounded-xl space-y-4">
        <h1 className=" text-lg font-bold">Sign Up</h1>
        <div className=" space-y-1">
          <div className=" text-base">Profile Picture</div>
          <div>
            <label
              className="cursor-pointer flex justify-center"
              htmlFor="file"
            >
              {selectedImageUrl ? (
                <img
                  src={selectedImageUrl}
                  className="w-40 h-40 object-cover my-4 rounded-xl"
                  alt="Selected Avatar"
                />
              ) : (
                <div className="my-4 text-8xl ">
                  <FaUser />
                </div>
              )}
            </label>
            <input
              required
              style={{ display: "none" }}
              type="file"
              id="file"
              className="w-full bg-gray-600 my-10 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              // onChange={handleFileInputChange}
            />
          </div>
        </div>
        <div className=" space-y-1">
          <div className=" text-base">Name</div>
          <div>
            <input
              required
              type="text"
              placeholder="Name"
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
              placeholder="Password"
              className=" focus:outline focus:outline-1 focus:outline-slate-500 rounded-md p-2 w-full"
            />
          </div>
        </div>
        <div>
          <p className=" text-slate-500">
            Already have an account?{" "}
            <Link
              href="/Login"
              className=" hover:text-black transition-colors delay-75"
            >
              Login
            </Link>
          </p>
        </div>
        <button
         onClick={()=>firebase.signupUserWithEmailAndPassword(email,password)}
         className=" w-full rounded-md p-2 text-center bg-slate-600 text-white hover:bg-slate-700 duration-500 transition-colors">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
