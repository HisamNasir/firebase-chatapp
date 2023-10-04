
import { Inter } from "next/font/google";
import Login from "./Login";
import {} from "react-icons/fa";
import DarkModButton from "@/components/DarkModButton";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className="h-screen tracking-wider min-w-min">
      <div>
       <DarkModButton/>
      </div>
        <Login />

    </main>
  );
}
