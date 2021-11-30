import "../styles/globals.css";
import "../styles/tailwind.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Store from "../state/store";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
