import Head from 'next/head';
import React from 'react';

import Header from '../../components/header/Header';
import SurahList from '../../components/surah-list/SurahList';
import { getSurahList } from '../../data-sources/data-sources';

export const getStaticProps = async () => {
  const surahList = await getSurahList();

  return {
    props: {
      surahList,
    },
  };
};

interface TafsirListPageProps {
  surahList: any;
}

const TafsirListPage = ({ surahList }: TafsirListPageProps) => {
  return (
    <>
      <Head>
        <title>{"Tafsir | Qur'anKu"}</title>
      </Head>
      <Header pageTitle="Qur'anKu | Tafsir" />
      <SurahList surahList={surahList} surahItemLinkPrefix="tafsir" />
    </>
  );
};

export default TafsirListPage;
