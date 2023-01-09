import SurahListItem from "./SurahListItem";
import { useState, ChangeEvent } from "react";
import type { SurahItem } from "../../types/surah";

export type Props = {
	surahList: SurahItem[],
	surahItemLinkPrefix: string,
};

export default function SurahList({ surahList, surahItemLinkPrefix }: Props) {
  const [filteredSurahList, setFilteredSurahList] = useState(surahList);
	const isSearchResultEmpty = filteredSurahList.length === 0;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValueLoweredCase = event.target.value.toLowerCase();
    const filteredSearch = surahList.filter(({ nama }) => {
      const surahNameLoweredCase = nama.toLowerCase();
      return surahNameLoweredCase.includes(searchValueLoweredCase);
    });

		setFilteredSurahList(filteredSearch);
  };

  return (
    <main
      style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}
      className="my-16"
    >
      <input
        type="search"
        placeholder="Pencarian surat, contoh: Al Fatihah"
        className="w-full my-2 p-4 h-16 border-2 border-teal-400 rounded outline-none"
        onChange={onInputChange}
      />
      {isSearchResultEmpty ? (
        <p className="text-center font-semibold text-gray-700">
          Maaf, pencarian tidak ditemukan
        </p>
      ) : (
        <ul className="w-full flex flex-col items-center">
          {filteredSurahList.map((surah) => (
            <SurahListItem 
							key={surah.nomor} 
							surahItem={surah} 
							surahItemLinkPrefix={surahItemLinkPrefix} 
						/>
          ))}
        </ul>
      )}
    </main>
  );
}
