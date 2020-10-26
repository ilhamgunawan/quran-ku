const BASE_URL = {
  SURAH_LIST_URL: 'https://api.npoint.io/99c279bb173a6e28359c/data',
  SURAH_DETAIL_URL: 'https://quran-json-private.web.app/surah',
};

export const getSurahList = async () => {
  const response = await fetch(BASE_URL.SURAH_LIST_URL);
  const surahList = await response.json();
  return surahList;
};

export const getSurah = async (surahId) => {
  const response = await fetch(`${BASE_URL.SURAH_DETAIL_URL}/${surahId}.json`);
  const surahDetails = await response.json();
  return surahDetails[surahId];
};

export const getMurottalUrl = async (surahId) => {
  const response = await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surahId}.json`);
  const murottallUrl = (await response.json()).recitations[0].audio_url;
  return murottallUrl;
};


export const getAllSurahId = async () => {
  const surahList = await getSurahList();
  const filteredUnusedId =  surahList.filter((surah) => {
    return surah.nomor !== '1' && surah.nomor !== '114';
  });

  return filteredUnusedId.map((surah) => {
    return {
      params: {
        id: surah.nomor,
      }
    }
  });
};

export const getSurahNameAndAyat = async (surahId) => {
  const surahList = await getSurahList();

  return {
    nextName: surahList[surahId].nama,
    previousName: surahList[surahId - 2].nama,
  };
};