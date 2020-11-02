import { useState, useEffect } from "react";

import { getArabicNumber, getDateInIndonesia } from "../../utils/utils";
import {
  storeAyat,
  removeAyat,
  getAyat,
} from "../../bookmark-utils/bookmark-utils";

import BookmarkIcon from "../../assets/icons/bookmark-icon";
import BookmarkBorderIcon from "../../assets/icons/bookmark-border-icon";

const AyatListItem = ({
  surahName,
  surahId,
  ayatNumber,
  arabic,
  translations,
}) => {
  const [isAyatBookmarked, setAyatBookmarked] = useState(false);

  const [bookmarkNotif, setBookmarkNotif] = useState({
    message: "",
    display: false,
  });

  const [ayatKey, setAyatKey] = useState(`${surahName}-${ayatNumber}`);

  const onClickStoreAyat = () => {
    storeAyat(ayatKey, {
      id: ayatKey,
      date: getDateInIndonesia(),
      surahName: surahName,
      ayatNumber: ayatNumber,
      url: `/surat/${surahId}#${ayatNumber}`,
    });
    setAyatBookmarked(true);

    console.log(getAyat(ayatKey));

    setBookmarkNotif({
      message: "Ayat disimpan di penanda",
      display: true,
    });

    setTimeout(() => {
      setBookmarkNotif({
        message: "",
        display: false,
      });
    }, 2000);
  };

  const onClickRemoveAyat = () => {
    removeAyat(ayatKey);
    setAyatBookmarked(false);

    console.log(getAyat(ayatKey));

    setBookmarkNotif({
      message: "Ayat dihapus dari penanda",
      display: true,
    });

    setTimeout(() => {
      setBookmarkNotif({
        message: "",
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
            style={{ color: "white" }}
            className="arabic-text col-start-1 h-10 w-10 mt-auto mb-6 text-2xl leading-none bg-blue-300 text-white flex justify-center items-center rounded-full"
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
                width: "fit-content",
              }}
              className="bookmark-button flex focus:outline-none p-1 rounded-full"
              onClick={onClickRemoveAyat}
            >
              <BookmarkIcon />
            </button>
          ) : (
            <button
              aria-label={`Penanda ${surahName} ayat ${ayatNumber}`}
              style={{
                width: "fit-content",
              }}
              className="bookmark-button flex focus:outline-none p-1 rounded-full"
              onClick={onClickStoreAyat}
            >
              <BookmarkBorderIcon />
            </button>
          )}
          {bookmarkNotif.display ? (
            <p className="text-xs text-yellow-800 bg-orange-200 p-1 rounded">
              {bookmarkNotif.message}
            </p>
          ) : null}
        </div>
        <p
          lang="id"
          className="mt-10 text-gray-700 leading-relaxed text-justify"
        >
          {translations}
        </p>
      </div>
    </li>
  );
};

export default AyatListItem;
