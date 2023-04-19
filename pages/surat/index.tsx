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

interface SurahListPageProps {
  surahAll: ISurah[];
}

const SurahListPage = (props: SurahListPageProps) => {
  const { surahAll, setSurahAll } = useSurahStore((state) => state, shallow);

  React.useEffect(() => {
    if (!surahAll) {
      setSurahAll(props.surahAll);
    }
  }, [props.surahAll, surahAll]);

  return (
    <>
      <Head>
        <title>{"Baca Al-Qur'an | Qur'anKu"}</title>
      </Head>
      <Header pageTitle="Qur'anKu | Daftar Surat" />
      <SurahList surahLinkPrefix="surat" />
    </>
  );
};

export default SurahListPage;
