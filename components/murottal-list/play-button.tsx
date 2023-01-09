import { useContext } from "react";
import { DispatchContext } from "../../state/Store";
import {
  setCurrentMurottal,
  setCurrentPlaySurahData,
} from "../../state/actions";

import { customButtonBlue } from "../button";
import PlayIcon from "../../assets/icons/play-icon";

const PlayButton = ({ surahName, recitation }) => {
  const dispatch = useContext(DispatchContext);
  const { name, audio_url } = recitation;

  const currentPlayData = {
    surah: surahName,
    reciter: name,
  };

  const onButtonClick = async () => {
    await dispatch(setCurrentMurottal(audio_url));
    await dispatch(setCurrentPlaySurahData(currentPlayData));

    const audioPlayer = document.getElementById("audio-player") as HTMLMediaElement;
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
