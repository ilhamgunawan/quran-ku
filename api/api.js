const REQUEST_CONFIG = {
  kemenag_base_url: 'https://quran.kemenag.go.id/api/v1',
  quran_json_base_url: 'https://raw.githubusercontent.com/penggguna/QuranJSON/master',
}

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

export const getSurahListKemenag = async () => {
  const response = await fetch(`${REQUEST_CONFIG.kemenag_base_url}/surat/0/114`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://quran.kemenag.go.id/sura/1",
    "referrerPolicy": "same-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });
  const surahList = (await response.json()).data;
  return surahList;
}

export const getSurahKemenag = async (surahId, numberOfAyat) => {
  const response = await fetch(`${REQUEST_CONFIG.kemenag_base_url}/ayatweb/${surahId}/0/0/${numberOfAyat}`, {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://quran.kemenag.go.id/sura/1",
    "referrerPolicy": "same-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });
  const surah = (await response.json()).data;
  return surah;
}