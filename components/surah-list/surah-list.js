import { useContext, useEffect } from 'react';

import { Context } from '../../state/store';
import { setSurahList, setLoadingTrue, setLoadingFalse } from '../../state/actions';
import { getSurahList } from '../../data-sources/data-sources';

import LoadingSpinner from '../loading-spinner/loading-spinner';
import SurahListItem from './surah-list-item';

const SurahList = () => {
  const [state, dispatch] = useContext(Context);
  const { surahList, isLoading } = state;

  const fetchSurahList = async () => {
    dispatch(setLoadingTrue());
    const surahList = await getSurahList();
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
          <ul className='w-full flex flex-col items-center'>
            {surahList.map((surah) => <SurahListItem key={surah.nomor} {...surah} /> )}
          </ul>
        </main>
  );
};

export default SurahList;