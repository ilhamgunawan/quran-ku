import Head from 'next/head';

import Header from '../components/header/header';
import TafsirList from '../components/tafsir-list/tafsir-list';

const TafsirListPage = () => {
  return (
    <>
      <Head>
        <title>Tafsir | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header pageTitle='QuranKu | Tafsir' />
      <TafsirList />
    </>
  );
};

export default TafsirListPage;