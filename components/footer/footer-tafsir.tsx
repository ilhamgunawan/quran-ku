import Link from 'next/link';
import React, { useContext } from 'react';

import ListIcon from '../../assets/icons/list-icon';
import NextIcon from '../../assets/icons/next-icon';
import PreviousIcon from '../../assets/icons/previous-icon';
import { setDaftarAyatToggle } from '../../state/actions';
import { DispatchContext, GlobalContext } from '../../state/Store';
import DaftarAyat from './daftar-ayat';

interface FooterTafsirProps {
  previousId: any;
  nextId: any;
  previousName: any;
  nextName: any;
}

const FooterTafsir = ({
  previousId,
  nextId,
  previousName,
  nextName,
}: FooterTafsirProps) => {
  const state = useContext(GlobalContext);
  const dispatch = useContext(DispatchContext);
  const { isDaftarAyatShow } = state;

  // eslint-disable-next-line eqeqeq
  if (nextId == '115') {
    // eslint-disable-next-line no-param-reassign
    nextId = null;
    // eslint-disable-next-line eqeqeq
  } else if (previousId == '0') {
    // eslint-disable-next-line no-param-reassign
    previousId = null;
  }

  return (
    <footer className="fixed inset-x-0 bottom-0 flex w-full bg-gray-900">
      <div className="footer-buttons flex w-full">
        {previousId ? (
          <Link href={`/tafsir/${previousId}`}>
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
        {nextId ? (
          <Link href={`/tafsir/${nextId}`}>
            <button className="flex w-full flex-col items-center bg-gray-900 p-1 focus:outline-none">
              <span>
                <NextIcon />
              </span>
              <span className="text-xs font-light text-white">{nextName}</span>
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
      </div>
    </footer>
  );
};

export default FooterTafsir;
