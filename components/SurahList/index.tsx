import type { ChangeEvent } from 'react';
import { useState } from 'react';

import SurahItem from '@/components/SurahItem';
import { useSurahStore } from '@/stores/surah';
import type { ISurah, TSurahLinkPrefix } from '@/types/surah';

interface SurahListProps {
  surahLinkPrefix: TSurahLinkPrefix;
}

const SurahList = ({ surahLinkPrefix }: SurahListProps) => {
  const surahAll = useSurahStore((state) => state.surahAll);
  const [filteredSurahList, setFilteredSurahList] = useState<ISurah[]>(
    surahAll || []
  );
  const isSearchResultEmpty = filteredSurahList.length === 0;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValueLoweredCase = event.target.value.toLowerCase().trim();

    if (surahAll) {
      const filteredSearch = surahAll.filter(({ nama }) => {
        const surahNameLoweredCase = nama.toLowerCase().trim();
        return surahNameLoweredCase.match(searchValueLoweredCase);
      });

      setFilteredSurahList(filteredSearch);
    }
  };

  return (
    <main className="mx-auto my-16 w-11/12 md:max-w-[64rem] md:px-4">
      <input
        type="search"
        placeholder="Pencarian surat, contoh: Al Fatihah"
        className="my-2 h-16 w-full rounded border-2 border-teal-400 p-4 outline-none"
        onChange={onInputChange}
      />
      {isSearchResultEmpty ? (
        <p className="text-center font-semibold text-gray-700">
          Maaf, pencarian tidak ditemukan
        </p>
      ) : (
        <ul className="flex w-full flex-col items-center">
          {filteredSurahList.map((surah) => (
            <SurahItem
              key={surah.nomor}
              surah={surah}
              surahLinkPrefix={surahLinkPrefix}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default SurahList;
