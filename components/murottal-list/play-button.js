import { useContext } from "react";

import { Context } from "../../state/store";
import {
  setCurrentMurottal,
  setCurrentPlaySurahData,
} from "../../state/actions";

import { customButtonBlue } from "../button";
import PlayIcon from "../../assets/icons/play-icon";

const PlayButton = ({ surahName, recitation }) => {
  const [state, dispatch] = useContext(Context);
  const { name, audio_url } = recitation;

  const currentPlayData = {
    surah: surahName,
    reciter: name,
  };

  const onButtonClick = async () => {
    await dispatch(setCurrentMurottal(audio_url));
    await dispatch(setCurrentPlaySurahData(currentPlayData));

    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.load();
    audioPlayer.play();
  };

  return (
    <button onClick={onButtonClick} className={customButtonBlue}>
      <PlayIcon fillColor="#131313" />
      <span className="ml-2 font-medium">{name}</span>
    </button>
  );
};

export default PlayButton;
