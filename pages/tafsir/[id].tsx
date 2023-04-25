import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import Footer from '@/components/footer/footer';
import { useSurahStore } from '@/stores/surah';

import AyatTafsirListItem from '../../components/ayat-list/ayat-tafsir-list-item';
import Header from '../../components/header/Header';
import {
  getAllSurahIdUnfiltered,
  getSurahNameAndAyat,
  getTafsir,
} from '../../data-sources/data-sources';
import { setCurrentAyatNumberList } from '../../state/actions';
import { DispatchContext } from '../../state/Store';
import { getAyatNumberList, mapTafsirObjectToArray } from '../../utils/utils';

export const getStaticPaths = async () => {
  const paths = await getAllSurahIdUnfiltered();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { nextName, previousName } = await getSurahNameAndAyat(params?.id);
  const { name, tafsir, source } = await getTafsir(params?.id);

  return {
    props: {
      name,
      surahId: params?.id,
      tafsir,
      source,
      nextName,
      previousName,
    },
  };
};

interface TafsirDetailProps {
  surahId: any;
  tafsir: any;
  name: any;
  source: any;
  nextName: any;
  previousName: any;
}

const TafsirDetail = ({ surahId, tafsir, name, source }: TafsirDetailProps) => {
  const router = useRouter();
  const tafsirArray = mapTafsirObjectToArray(tafsir);
  const dispatch = useContext(DispatchContext);

  const getSurahMetaData = useSurahStore((state) => state.getSurahMetaData);
  const surahNumber = (router.query.id as string) || '';

  const {
    nextSurahName,
    nextSurahNumber,
    previourSurahName,
    previousSurahNumber,
  } = getSurahMetaData(surahNumber);

  useEffect(() => {
    dispatch(setCurrentAyatNumberList(getAyatNumberList(tafsirArray)));
  }, [surahId]);

  return (
    <>
      <Head>
        <title>
          {"Tafsir Qur'an Surat "}
          {name}
          {" | Qur'anKu"}
        </title>
      </Head>
      <Header pageTitle={`Tafsir Surat ${name}`} />
      <main className="mx-auto my-16 w-11/12 py-4 md:max-w-[64rem] md:px-4">
        <section className="mb-4 rounded-lg bg-orange-100 p-4">
          <p className="leading-loose text-yellow-800">
            <strong>Catatan</strong>: Tafsir Quran Surat {name}
            bersumber dari {source}
          </p>
        </section>
        <ul className="pb-12">
          {tafsirArray.map((ayat) => (
            <AyatTafsirListItem key={ayat.ayatNumber} {...ayat} />
          ))}
        </ul>
      </main>
      <Footer
        nextName={nextSurahName || null}
        nextId={nextSurahNumber || null}
        previousName={previourSurahName || null}
        previousId={previousSurahNumber || null}
        mode="tafsir"
      />
    </>
  );
};

export default TafsirDetail;
