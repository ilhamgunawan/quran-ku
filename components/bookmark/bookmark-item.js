import Link from "next/link";

import BookmarkIcon from "../../assets/icons/bookmark-icon";

const BookmarkItem = ({ surahName, ayatNumber, url, date }) => {
  return (
    <li>
      <Link href={url}>
        <button className="flex flex-row items-center border rounded mb-2 hover:bg-blue-100">
          <div className="flex items-center p-3">
            <BookmarkIcon />
          </div>
          <div className="flex flex-col py-2 pr-4">
            <h2 className="text-left font-semibold text-lg">
              Qur'an Surat {surahName}
              <span>: ayat {ayatNumber}</span>
            </h2>
            <span className="text-left text-xs text-gray-700">
              Ditandai pada {date}
            </span>
          </div>
        </button>
      </Link>
    </li>
  );
};

export default BookmarkItem;
