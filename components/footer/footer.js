import NextIcon from "../../assets/icons/next-icon";
import PlayIcon from "../../assets/icons/play-icon";
import PreviousIcon from "../../assets/icons/previous-icon";
import ListIcon from "../../assets/icons/list-icon";
import PauseIcon from "../../assets/icons/pause-icon";
import Link from "next/link";
import { Context } from "../../state/store";
import { useContext } from "react";
import { murottalAudioToggle, setDaftarAyatToggle } from "../../state/actions";
import DaftarAyat from "./daftar-ayat";

const Footer = ({ previousId, nextId, previousName, nextName }) => {
  const [state, dispatch] = useContext(Context);
  const { isMurottalPlaying, isDaftarAyatShow } = state;

  const playMurottal = () => {
    const audio = document.getElementById("audio-murottal");
    audio.play();
    dispatch(murottalAudioToggle());
  };

  const pauseMurottal = () => {
    const audio = document.getElementById("audio-murottal");
    audio.pause();
    dispatch(murottalAudioToggle());
  };

  return (
    <footer className="w-full fixed bottom-0 inset-x-0 flex bg-gray-900">
      <div className="w-full flex footer-buttons">
        {previousId ? (
          <Link href={`/surat/${previousId}`}>
            <button className="w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none">
              <span>
                <PreviousIcon />
              </span>
              <span className="text-white font-light text-xs">
                {previousName}
              </span>
            </button>
          </Link>
        ) : (
          <button className="w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none">
            <span>
              <PreviousIcon />
            </span>
            <span className="text-white font-light text-xs"></span>
          </button>
        )}
        {isMurottalPlaying ? (
          <button
            className="w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none"
            onClick={pauseMurottal}
          >
            <span>
              <PauseIcon />
            </span>
            <span className="text-white font-light text-xs">
              Pause Murottal
            </span>
          </button>
        ) : (
          <button
            className="w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none"
            onClick={playMurottal}
          >
            <span>
              <PlayIcon />
            </span>
            <span className="text-white font-light text-xs">Play Murottal</span>
          </button>
        )}
        <div style={{ position: "relative" }} className="w-full">
          <button
            className="w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none"
            onClick={() => dispatch(setDaftarAyatToggle())}
          >
            <span>
              <ListIcon />
            </span>
            <span className="text-white font-light text-xs">Daftar Ayat</span>
          </button>
          {isDaftarAyatShow ? <DaftarAyat /> : null}
        </div>
        {nextId ? (
          <Link href={`/surat/${nextId}`}>
            <button className="w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none">
              <span>
                <NextIcon />
              </span>
              <span className="text-white font-light text-xs">{nextName}</span>
            </button>
          </Link>
        ) : (
          <button className="w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none">
            <span>
              <NextIcon />
            </span>
            <span className="text-white font-light text-xs"></span>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
