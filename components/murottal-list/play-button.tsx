import React, { useContext } from 'react';

import PlayIcon from '../../assets/icons/play-icon';
import {
  setCurrentMurottal,
  setCurrentPlaySurahData,
} from '../../state/actions';
import { DispatchContext } from '../../state/Store';
import { customButtonBlue } from '../button';

interface PlayButtonProps {
  surahName: any;
  recitation: any;
}

const PlayButton = ({ surahName, recitation }: PlayButtonProps) => {
  const dispatch = useContext(DispatchContext);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, audio_url } = recitation;

  const currentPlayData = {
    surah: surahName,
    reciter: name,
  };

  const onButtonClick = async () => {
    await dispatch(setCurrentMurottal(audio_url));
    await dispatch(setCurrentPlaySurahData(currentPlayData));

    const audioPlayer = document.getElementById(
      'audio-player'
    ) as HTMLMediaElement;
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
