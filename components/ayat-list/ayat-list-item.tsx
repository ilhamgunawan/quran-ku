import React, { useEffect, useState } from 'react';

import { useBookmarkStore } from '@/stores/bookmark';

import BookmarkBorderIcon from '../../assets/icons/bookmark-border-icon';
import BookmarkIcon from '../../assets/icons/bookmark-icon';
import { getArabicNumber, getDateInIndonesia } from '../../utils/utils';
import VisibilityOffIcon from '../VisibilityOffIcon';
import VisibilityOnIcon from '../VisibilityOnIcon';

interface AyatListItemProps {
  surahName: string;
  surahId: string;
  ayatNumber: string;
  arabic: string;
  translations: string;
  tafsir: string;
  tafsirSource: string;
}

const AyatListItem = ({
  surahName,
  surahId,
  ayatNumber,
  arabic,
  translations,
  tafsir,
  tafsirSource,
}: AyatListItemProps) => {
  const [isAyatBookmarked, setAyatBookmarked] = useState(false);

  const [bookmarkNotif, setBookmarkNotif] = useState({
    message: '',
    display: false,
  });

  const [showTafsir, setShowTafsir] = useState<Boolean>(false);

  const { saveAyat, removeAyatById, getAyatById } = useBookmarkStore();

  const ayatKey = `${surahName}-${ayatNumber}`;

  const onClickStoreAyat = () => {
    saveAyat({
      id: ayatKey,
      surahName,
      ayatNumber,
      renderDate: getDateInIndonesia(),
      createdAt: new Date().toISOString(),
      url: `/surat/${surahId}#${ayatNumber}`,
    });
    setAyatBookmarked(true);

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
    removeAyatById(ayatKey);
    setAyatBookmarked(false);

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
    if (getAyatById(ayatKey)) {
      setAyatBookmarked(true);
    }
  }, []);

  return (
    <li className="mb-5 border-b pb-3">
      <a id={ayatNumber} className="anchor"></a>
      <div className="flex flex-col">
        <div className="grid">
          <p className="arabic-text col-start-1 mb-6 mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-300 text-2xl leading-none !text-white">
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
          className="mb-5 mt-10 text-justify leading-relaxed text-gray-700"
        >
          {translations}
        </p>
        {tafsir !== '' ? (
          <button
            onClick={() => setShowTafsir((current) => !current)}
            className="flex w-[85px] justify-between self-end rounded-md bg-orange-400 p-1 px-2 text-neutral-50 shadow-sm hover:bg-orange-500 hover:text-white"
          >
            Tafsir
            {showTafsir ? (
              <VisibilityOffIcon fill="white" />
            ) : (
              <VisibilityOnIcon fill="white" />
            )}
          </button>
        ) : null}
        {showTafsir ? (
          <div className="mt-5 rounded-md border bg-orange-50 p-3">
            <p className="mb-4 leading-loose text-yellow-800">
              <strong>Catatan</strong>: Tafsir QS {surahName}: {ayatNumber}{' '}
              bersumber dari {tafsirSource}
            </p>
            <p lang="id" className="text-justify leading-loose text-gray-700">
              {tafsir}
            </p>
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default AyatListItem;
