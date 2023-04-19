import Link from 'next/link';

import { customButtonBorderTeal } from '@/components/button';
import type { ISurah, TSurahLinkPrefix } from '@/types/surah';

interface SurahItemProps {
  surah: ISurah;
  surahLinkPrefix: TSurahLinkPrefix;
}

const SurahItem = ({ surah, surahLinkPrefix }: SurahItemProps) => {
  return (
    <li className="w-full">
      <Link href={`/${surahLinkPrefix}/${surah.nomor}`}>
        <button className={customButtonBorderTeal}>
          <div className="flex items-center justify-between">
            <span className="mr-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300 text-xs font-semibold leading-none text-white">
              {surah.nomor}
            </span>
            <div className="flex flex-col">
              <span className="text-left">{surah.nama}</span>
              <span className="text-left font-light text-gray-700">
                {surah.arti}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pb-1 text-right text-2xl font-normal leading-none">
              {surah.asma}
            </span>
            <span className="pb-1 text-right font-light leading-none text-gray-700">
              {surah.ayat} ayat
            </span>
          </div>
        </button>
      </Link>
    </li>
  );
};

export default SurahItem;
