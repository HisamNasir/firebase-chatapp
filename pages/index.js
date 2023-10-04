
import { Inter } from "next/font/google";
import Login from "./Login";
import {} from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className="h-screen tracking-wider min-w-min">

        <Login />

    </main>
  );
}
