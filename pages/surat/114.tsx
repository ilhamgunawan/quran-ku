import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';

import AyatListItem from '../../components/ayat-list/ayat-list-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import { getSurah } from '../../data-sources/data-sources';
import {
  murottalAudioToggle,
  setCurrentAyatNumberList,
  setCurrentMurottal,
} from '../../state/actions';
import { DispatchContext, GlobalContext } from '../../state/Store';
import { getAyatNumberList, mapAyatObjectToArray } from '../../utils/utils';

export const getStaticProps = async () => {
  const surahDetails = await getSurah('114');
  return {
    props: {
      newSurah: surahDetails,
    },
  };
};

interface AnNaasProps {
  newSurah: any;
}

const AnNaas = ({ newSurah }: AnNaasProps) => {
  const { text, translations } = newSurah;

  const state = useContext(GlobalContext);
  const dispatch = useContext(DispatchContext);
  const { currentMurottal, isMurottalPlaying } = state;

  const [surah] = useState({
    versesArray: mapAyatObjectToArray(text, translations.id.text),
  });

  const { versesArray } = surah;

  const setAyatList = () => {
    dispatch(setCurrentAyatNumberList(getAyatNumberList(versesArray)));
  };

  const dispatchCurrentMurottal = async () => {
    if (isMurottalPlaying === true) {
      dispatch(murottalAudioToggle());
    }
    dispatch(
      setCurrentMurottal(
        'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/114.mp3'
      )
    );
  };

  useEffect(() => {
    dispatchCurrentMurottal();
    setAyatList();
  }, []);

  return (
    <>
      <Head>
        <title>{"Qur'an Surat An-Naas | Qur'anKu"}</title>
        <link rel="preload" href="/fonts/LPMQ.ttf" as="font" crossOrigin="" />
      </Head>

      <Header pageTitle="An-Naas | 6 ayat" />
      <main
        style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}
        className="my-16"
      >
        <ul>
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
          {versesArray.map((ayat) => (
            <AyatListItem
              key={`An-Naas-${ayat.ayatNumber}`}
              surahName="An-Naas"
              surahId="114"
              {...ayat}
            />
          ))}
        </ul>
        <audio id="audio-murottal" src={currentMurottal} loop={true} />
      </main>
      <Footer
        previousId="113"
        nextId={null}
        previousName="Al Falaq"
        nextName={null}
      />
    </>
  );
};

export default AnNaas;
