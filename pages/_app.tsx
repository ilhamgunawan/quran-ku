import '../styles/globals.css';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import type { AppProps } from 'next/app';

import Store from '../state/Store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
