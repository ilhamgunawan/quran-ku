import Head from 'next/head';

import Header from '../components/header/header';
import SurahList from '../components/surah-list/surah-list';

const SuratListPage = () => {
  return (
    <>
      <Head>
        <title>Baca Al-Qur'an | Qur'anKu</title>
      </Head>
      <Header pageTitle="Qur'anKu | Daftar Surat" />
      <SurahList />
    </>
  );
};

export default SuratListPage;