import { useContext, useEffect, useState } from 'react';

import { Context } from '../../state/store';
import { setSurahList, setLoadingTrue, setLoadingFalse } from '../../state/actions';
import { getSurahList } from '../../data-sources/data-sources';

import LoadingSpinner from '../loading-spinner/loading-spinner';
import TafsirListItem from './tafsir-list-item';

const TafsirList = () => {
  const [state, dispatch] = useContext(Context);
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

  return (
    isLoading
      ? <LoadingSpinner />
      : <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-16'> 
          <input 
            type='search' 
            placeholder='Pencarian tafsir, contoh: Al Fatihah'
            className='w-full my-2 p-4 h-16 border-2 border-teal-400 rounded outline-none'
            onChange={onInputChange}
          />
          <ul className='w-full flex flex-col items-center'>
            {filteredSurahList.map((surah) => <TafsirListItem key={surah.nomor} {...surah} /> )}
          </ul>
        </main>
  );
};

export default TafsirList;