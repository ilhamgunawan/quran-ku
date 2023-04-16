import React, { useEffect, useState } from 'react';

import BookmarkBorderIcon from '../../assets/icons/bookmark-border-icon';
import BookmarkIcon from '../../assets/icons/bookmark-icon';
import {
  getAyat,
  removeAyat,
  storeAyat,
} from '../../bookmark-utils/bookmark-utils';
import { getArabicNumber, getDateInIndonesia } from '../../utils/utils';

interface AyatListItemProps {
  surahName: any;
  surahId: any;
  ayatNumber: any;
  arabic: any;
  translations: any;
}

const AyatListItem = ({
  surahName,
  surahId,
  ayatNumber,
  arabic,
  translations,
}: AyatListItemProps) => {
  const [isAyatBookmarked, setAyatBookmarked] = useState(false);

  const [bookmarkNotif, setBookmarkNotif] = useState({
    message: '',
    display: false,
  });

  const [ayatKey] = useState(`${surahName}-${ayatNumber}`);

  const onClickStoreAyat = () => {
    storeAyat(ayatKey, {
      id: ayatKey,
      date: getDateInIndonesia(),
      surahName,
      ayatNumber,
      url: `/surat/${surahId}#${ayatNumber}`,
    });
    setAyatBookmarked(true);

    // eslint-disable-next-line no-console
    console.log(getAyat(ayatKey));

    setBookmarkNotif({
      message: 'Ayat disimpan di penanda',
      display: true,
    });

    setTimeout(() => {
      setBookmarkNotif({
        message: '',
        display: false,
      });
    }, 2000);
  };

  const onClickRemoveAyat = () => {
    removeAyat(ayatKey);
    setAyatBookmarked(false);

    // eslint-disable-next-line no-console
    console.log(getAyat(ayatKey));

    setBookmarkNotif({
      message: 'Ayat dihapus dari penanda',
      display: true,
    });

    setTimeout(() => {
      setBookmarkNotif({
        message: '',
        display: false,
      });
    }, 2000);
  };

  useEffect(() => {
    if (getAyat(ayatKey)) {
      setAyatBookmarked(true);
    }
  }, []);

  return (
    <li className="mb-5 border-b pb-3">
      <a id={ayatNumber} className="anchor"></a>
      <div className="flex flex-col">
        <div className="grid">
          <p
            style={{ color: 'white' }}
            className="arabic-text col-start-1 mb-6 mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-300 text-2xl leading-none text-white"
          >
            {getArabicNumber(ayatNumber)}
          </p>
          <p
            lang="ar"
            className="arabic-text col-start-2 ml-auto mr-0 text-right"
          >
            {arabic}
          </p>
        </div>
        <div className="flex items-center">
          {isAyatBookmarked ? (
            <button
              aria-label={`Hapus penanda ${surahName} ayat ${ayatNumber}`}
              style={{
                width: 'fit-content',
              }}
              className="bookmark-button flex rounded-full p-1 focus:outline-none"
              onClick={onClickRemoveAyat}
            >
              <BookmarkIcon />
            </button>
          ) : (
            <button
              aria-label={`Penanda ${surahName} ayat ${ayatNumber}`}
              style={{
                width: 'fit-content',
              }}
              className="bookmark-button flex rounded-full p-1 focus:outline-none"
              onClick={onClickStoreAyat}
            >
              <BookmarkBorderIcon />
            </button>
          )}
          {bookmarkNotif.display ? (
            <p className="rounded bg-orange-200 p-1 text-xs text-yellow-800">
              {bookmarkNotif.message}
            </p>
          ) : null}
        </div>
        <p
          lang="id"
          className="mt-10 text-justify leading-relaxed text-gray-700"
        >
          {translations}
        </p>
      </div>
    </li>
  );
};

export default AyatListItem;
