import type { ChangeEvent } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import { getSurahList } from '../../data-sources/data-sources';
import {
  setLoadingFalse,
  setLoadingTrue,
  setSurahList,
} from '../../state/actions';
import { DispatchContext, GlobalContext } from '../../state/Store';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import MurottalItem from './murottal-item';

const MurottalList = () => {
  const state = useContext(GlobalContext);
  const dispatch = useContext(DispatchContext);
  const { surahList, isLoading } = state;

  const [filteredSurahList, setFilteredSurahList] = useState([]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValueLoweredCase = event.target.value.toLowerCase();
    const filteredSearch = surahList.filter((item: any) => {
      const surahNameLoweredCase = item.nama.toLowerCase();
      return surahNameLoweredCase.includes(searchValueLoweredCase);
    });

    setFilteredSurahList(filteredSearch);
  };

  const fetchSurahList = async () => {
    dispatch(setLoadingTrue());
    // eslint-disable-next-line @typescript-eslint/no-shadow
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
      style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}
      className="mb-32 mt-16"
    >
      <input
        type="search"
        placeholder="Pencarian murottal, contoh: Al Fatihah"
        className="my-2 h-16 w-full rounded border-2 border-teal-400 p-4 outline-none"
        onChange={onInputChange}
      />
      <ul className="flex w-full flex-col items-center">
        {filteredSurahList.map((surah: any) => (
          <MurottalItem key={surah.nomor} {...surah} />
        ))}
      </ul>
    </main>
  );
};

export default MurottalList;
