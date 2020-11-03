import Head from "next/head";

import { getSurahList } from '../data-sources/data-sources';

import Header from "../components/header/header";
import SurahList from '../components/surah-list/surah-list';

export const getStaticProps = async () => {
  const surahList = await getSurahList();

  return {
    props: {
      surahList,
    }
  };
};

const TafsirListPage = ({ surahList }) => {
  return (
    <>
      <Head>
        <title>Tafsir | Qur'anKu</title>
      </Head>
      <Header pageTitle="Qur'anKu | Tafsir" />
      <SurahList surahList={surahList} surahItemLinkPrefix='tafsir' />
    </>
  );
};

export default TafsirListPage;
