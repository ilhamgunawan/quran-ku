import Link from 'next/link';

import type { SurahItem } from '../../types/surah';
import { customButtonBorderTeal } from '../button';

export type Props = {
  surahItem: SurahItem;
  surahItemLinkPrefix: string;
};

export default function SurahListItem({
  surahItem,
  surahItemLinkPrefix,
}: Props) {
  return (
    <li className="w-full">
      <Link href={`/${surahItemLinkPrefix}/${surahItem.nomor}`}>
        <button className={customButtonBorderTeal}>
          <div className="flex items-center justify-between">
            <span className="mr-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300 text-xs font-semibold leading-none text-white">
              {surahItem.nomor}
            </span>
            <div className="flex flex-col">
              <span className="text-left">{surahItem.nama}</span>
              <span className="text-left font-light text-gray-700">
                {surahItem.arti}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pb-1 text-right text-2xl font-normal leading-none">
              {surahItem.asma}
            </span>
            <span className="pb-1 text-right font-light leading-none text-gray-700">
              {surahItem.ayat} ayat
            </span>
          </div>
        </button>
      </Link>
    </li>
  );
}
