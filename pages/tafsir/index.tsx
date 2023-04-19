import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { shallow } from 'zustand/shallow';

import { getSurahAll } from '@/api/surah';
import Header from '@/components/header/Header';
import SurahList from '@/components/SurahList';
import { useSurahStore } from '@/stores/surah';
import type { ISurah } from '@/types/surah';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await getSurahAll();
    return {
      props: {
        surahAll: res.data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        surahAll: [],
      },
    };
  }
};

interface TafsirListPageProps {
  surahAll: ISurah[];
}

const TafsirListPage = (props: TafsirListPageProps) => {
  const { surahAll, setSurahAll } = useSurahStore((state) => state, shallow);

  React.useEffect(() => {
    if (!surahAll) {
      setSurahAll(props.surahAll);
    }
  }, [props.surahAll, surahAll]);

  return (
    <>
      <Head>
        <title>{"Tafsir | Qur'anKu"}</title>
      </Head>
      <Header pageTitle="Qur'anKu | Tafsir" />
      <SurahList surahLinkPrefix="tafsir" />
    </>
  );
};

export default TafsirListPage;
