import Link from 'next/link';
import React from 'react';

import { useBookmarkStore } from '@/stores/bookmark';
import type { IAyatBookmark } from '@/types/bookmark';

import BookmarkIcon from '../../assets/icons/bookmark-icon';
import DeleteIcon from '../DeleteIcon';

interface BookmarkItemProps extends IAyatBookmark {}

const BookmarkItem = ({
  id,
  surahName,
  ayatNumber,
  url,
  renderDate,
}: BookmarkItemProps) => {
  const removeAyatById = useBookmarkStore((state) => state.removeAyatById);
  return (
    <li className="mb-2">
      <div className="flex flex-row items-center gap-2">
        <Link href={url}>
          <button className="flex flex-row items-center rounded border hover:bg-neutral-100">
            <div className="flex items-center p-3">
              <BookmarkIcon />
            </div>
            <div className="flex flex-col py-2 pr-4">
              <h2 className="text-left text-lg font-semibold">
                Qur&apos;an Surat {surahName}
                <span>: ayat {ayatNumber}</span>
              </h2>
              <span className="text-left text-xs text-gray-700">
                Ditandai pada {renderDate}
              </span>
            </div>
          </button>
        </Link>
        <button
          onClick={() => removeAyatById(id)}
          aria-label="Delete Ayat"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default BookmarkItem;
