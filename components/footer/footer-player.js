import Head from "next/head";
import { useContext } from "react";

import { Context } from "../../state/store";

const FooterPlayer = () => {
  const [state, dispatch] = useContext(Context);

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
      <footer className="w-full fixed bottom-0 inset-x-0 flex bg-gray-900">
        <div className="w-full flex-col footer-player">
          <p className="text-white font-semibold text-center my-2">
            {surah
              ? `${reciter} - ${surah}`
              : "Mishari Rashid al-`Afasy - Al Fatihah"}
          </p>
          <audio
            controls
            id="audio-player"
            className="w-11/12 h-10 outline-none my-2 mx-auto"
          >
            <source
              src={
                currentMurottal
                  ? currentMurottal
                  : "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3"
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
