import '../styles/globals.css'
import '../styles/tailwind.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Store from '../state/store';

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp
