import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLoggedInUser } from "@/redux/actions";
import "firebase/auth";
import HomePage from "./HomePage";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedInUser());
  }, []);

  return <HomePage />;
};

export default Home;
