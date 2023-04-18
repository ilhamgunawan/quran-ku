import Head from 'next/head';

import Header from '@/components/header/Header';
import SadIcon from '@/components/SadIcon';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Halaman tidak ditemukan | QuranKu</title>
      </Head>
      <Header pageTitle="QuranKu" />
      <main className="mx-auto my-28 flex w-11/12 flex-col items-center gap-4">
        <h2 className="text-6xl font-bold">404</h2>
        <p className="text-center text-xl">
          Sayang sekali, halaman yang anda minta tidak ditemukan <SadIcon />
        </p>
      </main>
    </>
  );
};

export default NotFoundPage;
