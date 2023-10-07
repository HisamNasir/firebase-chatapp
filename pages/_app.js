import { Provider } from "react-redux";
import store from "@/redux/store";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/firestore"; // Import Firestore
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <div className="App">
          <Component {...pageProps} />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
