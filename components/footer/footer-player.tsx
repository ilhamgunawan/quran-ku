import Head from 'next/head';
import { useContext } from 'react';

import { GlobalContext } from '../../state/Store';

const FooterPlayer = () => {
  const state = useContext(GlobalContext);
  const { currentMurottal, currentPlaySurahData } = state;
  const { surah, reciter } = currentPlaySurahData;

  return (
    <>
      <Head>
        <title>
          {surah
            ? `Murottal Qur'an Surat ${surah} - ${reciter} | Qur'anKu`
            : "Murottal | Qur'anKu"}
        </title>
      </Head>
      <footer className="fixed inset-x-0 bottom-0 flex w-full bg-gray-900">
        <div className="mx-auto w-full flex-col md:max-w-[64rem]">
          <p className="my-2 text-center font-semibold text-white">
            {surah
              ? `${reciter} - ${surah}`
              : 'Mishari Rashid al-`Afasy - Al Fatihah'}
          </p>
          <audio
            controls
            id="audio-player"
            className="mx-auto my-2 h-10 w-11/12 outline-none"
          >
            <source
              src={
                currentMurottal ||
                'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3'
              }
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </footer>
    </>
  );
};

export default FooterPlayer;
