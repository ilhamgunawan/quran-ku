import { useContext, useEffect, useState } from "react";
import { GlobalContext, DispatchContext } from "../../state/Store";
import {
  setSurahList,
  setLoadingTrue,
  setLoadingFalse,
} from "../../state/actions";
import { getSurahList } from "../../data-sources/data-sources";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import MurottalItem from "./murottal-item";

const MurottalList = () => {
  const state = useContext(GlobalContext);
  const dispatch = useContext(DispatchContext);
  const { surahList, isLoading } = state;

  const [filteredSurahList, setFilteredSurahList] = useState([]);

  const onInputChange = (event) => {
    const searchValueLoweredCase = event.target.value.toLowerCase();
    const filteredSearch = surahList.filter(({ nama }) => {
      const surahNameLoweredCase = nama.toLowerCase();
      return surahNameLoweredCase.includes(searchValueLoweredCase);
    });

    setFilteredSurahList(filteredSearch);
  };

  const fetchSurahList = async () => {
    dispatch(setLoadingTrue());
    const surahList = await getSurahList();
    setFilteredSurahList(surahList);
    dispatch(setSurahList(surahList));
    dispatch(setLoadingFalse());
  };

  useEffect(() => {
    fetchSurahList();
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <main
      style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}
      className="mt-16 mb-32"
    >
      <input
        type="search"
        placeholder="Pencarian murottal, contoh: Al Fatihah"
        className="w-full my-2 p-4 h-16 border-2 border-teal-400 rounded outline-none"
        onChange={onInputChange}
      />
      <ul className="w-full flex flex-col items-center">
        {filteredSurahList.map((surah) => (
          <MurottalItem key={surah.nomor} {...surah} />
        ))}
      </ul>
    </main>
  );
};

export default MurottalList;
