import Link from 'next/link';
import { useContext } from 'react';

import ListIcon from '../../assets/icons/list-icon';
import NextIcon from '../../assets/icons/next-icon';
import PauseIcon from '../../assets/icons/pause-icon';
import PlayIcon from '../../assets/icons/play-icon';
import PreviousIcon from '../../assets/icons/previous-icon';
import { murottalAudioToggle, setDaftarAyatToggle } from '../../state/actions';
import { DispatchContext, GlobalContext } from '../../state/Store';
import DaftarAyat from './daftar-ayat';

export type FooterMode = 'surah' | 'tafsir' | 'player';

interface FooterProps {
  previousId: string | null;
  nextId: string | null;
  previousName: string | null;
  nextName: string | null;
  mode: FooterMode;
}

const Footer = ({
  previousId,
  nextId,
  previousName,
  nextName,
  mode,
}: FooterProps) => {
  const state = useContext(GlobalContext);
  const dispatch = useContext(DispatchContext);
  const { isMurottalPlaying, isDaftarAyatShow } = state;

  const playMurottal = () => {
    const audio = document.getElementById('audio-murottal') as HTMLAudioElement;
    audio.play();
    dispatch(murottalAudioToggle());
  };

  const pauseMurottal = () => {
    const audio = document.getElementById('audio-murottal') as HTMLAudioElement;
    audio.pause();
    dispatch(murottalAudioToggle());
  };

  return (
    <footer className="fixed inset-x-0 bottom-0 flex w-full bg-gray-900">
      <div className="mx-auto flex w-full md:max-w-[64rem]">
        {mode === 'surah' || mode === 'tafsir' ? (
          <>
            {previousId ? (
              <Link href={`/surat/${previousId}`}>
                <button className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none">
                  <span>
                    <PreviousIcon />
                  </span>
                  <span className="text-xs font-light text-white">
                    {previousName}
                  </span>
                </button>
              </Link>
            ) : (
              <button className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none">
                <span>
                  <PreviousIcon />
                </span>
                <span className="text-xs font-light text-white"></span>
              </button>
            )}
          </>
        ) : null}
        {mode === 'surah' ? (
          <>
            {isMurottalPlaying ? (
              <button
                className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none"
                onClick={pauseMurottal}
              >
                <span>
                  <PauseIcon />
                </span>
                <span className="text-xs font-light text-white">
                  Pause Murottal
                </span>
              </button>
            ) : (
              <button
                className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none"
                onClick={playMurottal}
              >
                <span>
                  <PlayIcon fillColor={null} />
                </span>
                <span className="text-xs font-light text-white">
                  Play Murottal
                </span>
              </button>
            )}
          </>
        ) : null}
        {mode === 'surah' || mode === 'tafsir' ? (
          <div style={{ position: 'relative' }} className="w-full">
            <button
              className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none"
              onClick={() => dispatch(setDaftarAyatToggle())}
            >
              <span>
                <ListIcon />
              </span>
              <span className="text-xs font-light text-white">Daftar Ayat</span>
            </button>
            {isDaftarAyatShow ? <DaftarAyat /> : null}
          </div>
        ) : null}
        {mode === 'surah' || mode === 'tafsir' ? (
          <>
            {nextId ? (
              <Link href={`/surat/${nextId}`}>
                <button className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none">
                  <span>
                    <NextIcon />
                  </span>
                  <span className="text-xs font-light text-white">
                    {nextName}
                  </span>
                </button>
              </Link>
            ) : (
              <button className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none">
                <span>
                  <NextIcon />
                </span>
                <span className="text-xs font-light text-white"></span>
              </button>
            )}
          </>
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
