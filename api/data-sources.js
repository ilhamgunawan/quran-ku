const BASE_URL = {
  base_url_surah: 'https://api.npoint.io/99c279bb173a6e28359c',
};

export const getSurahList = async () => {
  const response = await fetch(`${BASE_URL.base_url_surah}/data`);
  const surahList = await response.json();
  return surahList;
};

export const getSurah = async (surahId) => {
  const response = await fetch(`${BASE_URL.base_url_surah}/surat/${surahId}`);
  const surahVerses = await response.json();
  return surahVerses;
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

  if (surahId == 1) {
    return {
      name: surahList[0].nama,
      ayat: surahList[0].ayat,
      nextName: surahList[1].nama,
      previousName: null,
    };
  } else if (surahId == 114) {
    return {
      name: surahList[113].nama,
      ayat: surahList[113].ayat,
      nextName: null,
      previousName: surahList[112].nama,
    };
  } else {
    return {
      name: surahList[surahId - 1].nama,
      ayat: surahList[surahId - 1].ayat,
      nextName: surahList[surahId].nama,
      previousName: surahList[surahId - 2].nama,
    };
  }

};