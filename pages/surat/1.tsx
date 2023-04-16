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
  const surahDetails = await getSurah('1');
  return {
    props: {
      newSurah: surahDetails,
    },
  };
};

const AlFatihah = ({ newSurah }: { newSurah: any }) => {
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
        'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3'
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
        <title>{"Qur'an Surat Al-Fatihah | Qur'anKu"}</title>
        <link rel="preload" href="/fonts/LPMQ.ttf" as="font" crossOrigin="" />
      </Head>

      <Header pageTitle="Al-Fatihah | 7 ayat" />
      <main
        style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}
        className="my-16"
      >
        <ul>
          {versesArray.map((ayat) => (
            <AyatListItem
              key={`Al-Fatihah-${ayat.ayatNumber}`}
              surahId="1"
              surahName="Al-Fatihah"
              {...ayat}
            />
          ))}
        </ul>
        <audio id="audio-murottal" src={currentMurottal} loop={true} />
      </main>
      <Footer
        previousId={null}
        nextId="2"
        previousName={null}
        nextName="Al Baqarah"
      />
    </>
  );
};

export default AlFatihah;
