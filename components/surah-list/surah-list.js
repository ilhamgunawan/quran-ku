import { useState } from "react";
import SurahListItem from "./surah-list-item";

const SurahList = ({ surahList, surahItemLinkPrefix }) => {
  const [filteredSurahList, setFilteredSurahList] = useState(surahList);
  const [isSearchResultEmpty, setSearchResultEmpty] = useState(false);

  const onInputChange = (event) => {
    const searchValueLoweredCase = event.target.value.toLowerCase();
    const filteredSearch = surahList.filter(({ nama }) => {
      const surahNameLoweredCase = nama.toLowerCase();
      return surahNameLoweredCase.includes(searchValueLoweredCase);
    });

    if (filteredSearch.length !== 0) {
      setSearchResultEmpty(false);
      setFilteredSurahList(filteredSearch);
    } else {
      setSearchResultEmpty(true);
      setFilteredSurahList(filteredSearch);
    }
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
            <SurahListItem key={surah.nomor} {...surah} surahItemLinkPrefix={surahItemLinkPrefix} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default SurahList;
