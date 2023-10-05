import { useEffect, useState } from "react";

import Login from "./Login";
import Layout from "@/components/Layout";

// const auth = getAuth(app);

export default function Home() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

  // Conditional rendering based on the user's authentication status
  return (
    <Layout className="h-screen tracking-wider min-w-min">
      {/* {user ? ( */}
        {/* // Render the HomePage component only when the user is logged in */}
        {/* <HomePage /> */}
      {/* ) : ( */}
        {/* // Render the Login component when the user is not logged in */}
        <Login />
      {/* )} */}
    </Layout>
  );
}
