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
  const { setSurahAll, initFilteredSurah } = useSurahStore(
    (state) => state,
    shallow
  );
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    if (isMounted.current) {
      setSurahAll(props.surahAll);
      initFilteredSurah(props.surahAll);
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

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
