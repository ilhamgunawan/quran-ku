import Head from "next/head";

import { getSurahList } from '../data-sources/data-sources';

import Header from "../components/header/header";
import SurahList from "../components/surah-list/surah-list";

export const getStaticProps = async () => {
  const surahList = await getSurahList();

  return {
    props: {
      surahList,
    }
  };
};

const SuratListPage = ({ surahList }) => {
  return (
    <>
      <Head>
        <title>Baca Al-Qur'an | Qur'anKu</title>
      </Head>
      <Header pageTitle="Qur'anKu | Daftar Surat" />
      <SurahList surahList={surahList} surahItemLinkPrefix='surat' />
    </>
  );
};

export default SuratListPage;
