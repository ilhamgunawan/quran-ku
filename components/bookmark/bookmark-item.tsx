import Link from 'next/link';
import React from 'react';

import BookmarkIcon from '../../assets/icons/bookmark-icon';

interface BookmarkItemProps {
  surahName: any;
  ayatNumber: any;
  url: any;
  date: any;
}

const BookmarkItem = ({
  surahName,
  ayatNumber,
  url,
  date,
}: BookmarkItemProps) => {
  return (
    <li>
      <Link href={url}>
        <button className="mb-2 flex flex-row items-center rounded border hover:bg-blue-100">
          <div className="flex items-center p-3">
            <BookmarkIcon />
          </div>
          <div className="flex flex-col py-2 pr-4">
            <h2 className="text-left text-lg font-semibold">
              Qur&apos;an Surat {surahName}
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
