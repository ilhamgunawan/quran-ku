import Head from 'next/head';

import Header from '../components/header/header';
import SurahList from '../components/surah-list/surah-list';

const SuratListPage = () => {
  return (
    <>
      <Head>
        <title>Baca Al-Quran | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageTitle='QuranKu | Daftar Surat' />
      <SurahList />
    </>
  );
};

export default SuratListPage;