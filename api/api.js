export const getSurahList = async () => {
  const response = await fetch('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json');
  const surahList = await response.json();
  return surahList;
}

export const getAllSurahId = async () => {
  const response = await fetch('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json');
  const surahList = await response.json();
  return surahList.map((surah) => {
    return {
      params: {
        id: surah.number_of_surah.toString()
      }
    }
  })
}

export const getSurah = async (surahNumber) => {
  const response = await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surahNumber}.json`);
  const surah = await response.json();
  return surah;
}