import { shallow } from 'zustand/shallow';

import SurahItem from '@/components/SurahItem';
import { useSurahStore } from '@/stores/surah';
import type { TSurahLinkPrefix } from '@/types/surah';

interface SurahListProps {
  surahLinkPrefix: TSurahLinkPrefix;
}

const SurahList = ({ surahLinkPrefix }: SurahListProps) => {
  const { filteredSurah, onSearchInputChanged } = useSurahStore(
    (state) => state,
    shallow
  );
  const isSearchResultEmpty = filteredSurah.length === 0;

  return (
    <main className="mx-auto my-16 w-11/12 md:max-w-[64rem] md:px-4">
      <input
        type="search"
        placeholder="Pencarian surat, contoh: Al Fatihah"
        className="my-2 h-16 w-full rounded border-2 border-teal-400 p-4 outline-none"
        onChange={(e) => onSearchInputChanged(e.target.value)}
      />
      {isSearchResultEmpty ? (
        <p className="text-center font-semibold text-gray-700">
          Maaf, pencarian tidak ditemukan
        </p>
      ) : (
        <ul className="flex w-full flex-col items-center">
          {filteredSurah.map((surah) => (
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
