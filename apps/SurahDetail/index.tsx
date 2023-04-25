/* eslint-disable @typescript-eslint/naming-convention */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import { useSurahStore } from '@/stores/surah';
import type { ISurahDetail } from '@/types/surah';

import AyatListItem from '../../components/ayat-list/ayat-list-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import {
  murottalAudioToggle,
  setCurrentAyatNumberList,
  setCurrentMurottal,
} from '../../state/actions';
import { DispatchContext, GlobalContext } from '../../state/Store';
import { getAyatNumberList, mapAyatObjectToArray } from '../../utils/utils';

interface SurahDetailProps {
  surahData: ISurahDetail;
  murottalUrl: string;
}

const SurahDetail = ({ surahData, murottalUrl }: SurahDetailProps) => {
  const router = useRouter();
  const getSurahMetaData = useSurahStore((state) => state.getSurahMetaData);
  const surahNumber = (router.query.id as string) || '';

  const {
    nextSurahName,
    nextSurahNumber,
    previourSurahName,
    previousSurahNumber,
  } = getSurahMetaData(surahNumber);

  const state = useContext(GlobalContext);
  const dispatch = useContext(DispatchContext);
  const { currentMurottal, isMurottalPlaying } = state;

  const { text, translations, name_latin, number_of_ayah, number } = surahData;

  const versesArray = mapAyatObjectToArray(text, translations.id.text);

  const setAyatList = (verses: any) => {
    dispatch(setCurrentAyatNumberList(getAyatNumberList(verses)));
  };

  const dispatchCurrentMurottal = async () => {
    if (isMurottalPlaying === true) {
      dispatch(murottalAudioToggle());
    }
    dispatch(setCurrentMurottal(murottalUrl));
  };

  useEffect(() => {
    setAyatList(versesArray);
    dispatchCurrentMurottal();
  }, [surahData.number]);

  return (
    <>
      <Head>
        <title>
          {"Qur'an Surat "} {name_latin || ''}
          {" | Qur'anKu"}
        </title>
        <link rel="preload" href="/fonts/LPMQ.ttf" as="font" crossOrigin="" />
      </Head>

      <Header
        pageTitle={
          name_latin ? `${name_latin} | ${number_of_ayah} ayat` : 'Loading...'
        }
      />
      <main className="mx-auto my-16 w-11/12 md:max-w-[64rem] md:px-4">
        <ul className="pb-12">
          {number !== '1' ? (
            <li className="mb-5 border-b pb-3">
              <div className="flex flex-col">
                <div className="grid">
                  <p className="arabic-text col-start-2 ml-auto mr-0 text-right">
                    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </p>
                </div>
                <p className="mt-10 text-justify leading-relaxed text-gray-700">
                  Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                </p>
              </div>
            </li>
          ) : null}
          {versesArray.map((ayat) => (
            <AyatListItem
              key={`${name_latin}-${ayat.ayatNumber}`}
              surahId={surahData.number}
              surahName={name_latin}
              {...ayat}
            />
          ))}
        </ul>
        <audio id="audio-murottal" src={currentMurottal} loop={true} />
      </main>
      <Footer
        nextName={nextSurahName || null}
        nextId={nextSurahNumber || null}
        previousName={previourSurahName || null}
        previousId={previousSurahNumber || null}
        mode="surah"
      />
    </>
  );
};

export default SurahDetail;
