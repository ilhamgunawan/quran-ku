import Link from "next/link";
import { useContext } from "react";

import { Context } from "../../state/store";
import { setDaftarAyatToggle } from "../../state/actions";

import NextIcon from "../../assets/icons/next-icon";
import PreviousIcon from "../../assets/icons/previous-icon";
import ListIcon from "../../assets/icons/list-icon";
import DaftarAyat from "./daftar-ayat";

const FooterTafsir = ({ previousId, nextId, previousName, nextName }) => {
  const [state, dispatch] = useContext(Context);
  const { isDaftarAyatShow } = state;

  if (nextId == "115") {
    nextId = null;
  } else if (previousId == "0") {
    previousId = null;
  }

  return (
    <footer className="w-full fixed bottom-0 inset-x-0 flex bg-gray-900">
      <div className="w-full flex footer-buttons">
        {previousId ? (
          <Link href={`/tafsir/${previousId}`}>
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
          <Link href={`/tafsir/${nextId}`}>
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

export default FooterTafsir;
