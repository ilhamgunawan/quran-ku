import Head from "next/head";
import { useEffect, useContext, useState } from "react";

import { mapAyatObjectToArray, getAyatNumberList } from "../../utils/utils";
import { getSurah } from "../../data-sources/data-sources";
import { Context } from "../../state/store";
import {
  setCurrentMurottal,
  murottalAudioToggle,
  setCurrentAyatNumberList,
} from "../../state/actions";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import AyatListItem from "../../components/ayat-list/ayat-list-item";

export const getStaticProps = async () => {
  const surahDetails = await getSurah("1");
  return {
    props: {
      newSurah: surahDetails,
    },
  };
};

const AlFatihah = ({ newSurah }) => {
  const { text, translations } = newSurah;

  const [state, dispatch] = useContext(Context);
  const { currentMurottal, isMurottalPlaying } = state;

  const [surah, setSurah] = useState({
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
        "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3"
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
        <title>Qur'an Surat Al-Fatihah | Qur'anKu</title>
        <link rel="preload" href="/fonts/LPMQ.ttf" as="font" crossOrigin="" />
      </Head>

      <Header pageTitle="Al-Fatihah | 7 ayat" />
      <main
        style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}
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
