import '../styles/globals.css';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import type { AppProps } from 'next/app';

import GoogleTagManager from '@/components/Analytics/GoogleTagManager';

import Store from '../state/Store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <GoogleTagManager />
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
