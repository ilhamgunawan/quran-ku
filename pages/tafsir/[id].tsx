import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';

import AyatTafsirListItem from '../../components/ayat-list/ayat-tafsir-list-item';
import FooterTafsir from '../../components/footer/footer-tafsir';
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

const TafsirDetail = ({
  surahId,
  tafsir,
  name,
  source,
  nextName,
  previousName,
}: TafsirDetailProps) => {
  const tafsirArray = mapTafsirObjectToArray(tafsir);
  const dispatch = useContext(DispatchContext);

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
      <main
        style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}
        className="my-16"
      >
        <section className="mb-4 rounded-lg bg-orange-200 p-4">
          <p className="leading-loose text-yellow-800">
            <strong>Catatan</strong>: Tafsir Quran Surat {name} berdasarkan
            sumber dari {source}
          </p>
        </section>
        <ul>
          {tafsirArray.map((ayat) => (
            <AyatTafsirListItem key={ayat.ayatNumber} {...ayat} />
          ))}
        </ul>
      </main>
      {surahId ? (
        <FooterTafsir
          previousId={(parseInt(surahId, 10) - 1).toString()}
          nextId={(parseInt(surahId, 10) + 1).toString()}
          previousName={previousName}
          nextName={nextName}
        />
      ) : (
        <FooterTafsir
          previousId={null}
          nextId={null}
          previousName="Loading"
          nextName="Loading"
        />
      )}
    </>
  );
};

export default TafsirDetail;
