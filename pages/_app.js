import '@/styles/globals.css'
import {FirebaseProvider} from '../context/Firebase'
import { ThemeProvider } from "next-themes"
export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider attribute="class">
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
    </ThemeProvider>
  ) 
}
