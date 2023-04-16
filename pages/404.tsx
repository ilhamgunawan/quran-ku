import Head from 'next/head';

import SadIcon from '../assets/icons/sad-icon';
import Header from '../components/header/Header';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Halaman tidak ditemukan | QuranKu</title>
      </Head>
      <Header pageTitle="QuranKu" />
      <main
        style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}
        className="my-16 flex flex-col items-center"
      >
        <h2 className="text-6xl font-bold">404</h2>
        <p className="text-center text-xl">
          Sayang sekali, halaman yang anda minta tidak ditemukan <SadIcon />
        </p>
      </main>
    </>
  );
}
