"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 6763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yW": () => (/* binding */ getSurahList),
/* harmony export */   "Nz": () => (/* binding */ getSurah),
/* harmony export */   "EQ": () => (/* binding */ getTafsir),
/* harmony export */   "pf": () => (/* binding */ getMurottalUrl),
/* harmony export */   "ZT": () => (/* binding */ getMurottalAllUrl),
/* harmony export */   "nQ": () => (/* binding */ getAllSurahId),
/* harmony export */   "du": () => (/* binding */ getAllSurahIdUnfiltered),
/* harmony export */   "cI": () => (/* binding */ getSurahNameAndAyat)
/* harmony export */ });
const BASE_URL = {
    SURAH_LIST_URL: "https://api.npoint.io/99c279bb173a6e28359c/data",
    SURAH_DETAIL_URL: "https://quran-json-private.web.app/surah"
};
const getSurahList = async ()=>{
    const response = await fetch(BASE_URL.SURAH_LIST_URL);
    const surahList = await response.json();
    return surahList;
};
const getSurah = async (surahId)=>{
    const response = await fetch(`${BASE_URL.SURAH_DETAIL_URL}/${surahId}.json`);
    const surahDetails = await response.json();
    return surahDetails[surahId];
};
const getTafsir = async (surahId)=>{
    const surah = await getSurah(surahId);
    return {
        name: surah.name_latin,
        tafsir: surah.tafsir.id.kemenag.text,
        source: `${surah.tafsir.id.kemenag.source} (${surah.tafsir.id.kemenag.name})`
    };
};
const getMurottalUrl = async (surahId)=>{
    const response = await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surahId}.json`);
    const murottallUrl = (await response.json()).recitations[0].audio_url;
    return murottallUrl;
};
const getMurottalAllUrl = async (surahId)=>{
    const response = await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surahId}.json`);
    const data = await response.json();
    return {
        name: data.name,
        recitations: data.recitations
    };
};
const getAllSurahId = async ()=>{
    const surahList = await getSurahList();
    const filteredUnusedId = surahList.filter((surah)=>{
        return surah.nomor !== "1" && surah.nomor !== "114";
    });
    return filteredUnusedId.map((surah)=>{
        return {
            params: {
                id: surah.nomor
            }
        };
    });
};
const getAllSurahIdUnfiltered = async ()=>{
    const surahList = await getSurahList();
    return surahList.map((surah)=>{
        return {
            params: {
                id: surah.nomor
            }
        };
    });
};
const getSurahNameAndAyat = async (surahId)=>{
    const surahList = await getSurahList();
    return {
        nextName: surahList[surahId] ? surahList[surahId].nama : null,
        previousName: surahList[surahId - 2] ? surahList[surahId - 2].nama : null
    };
};


/***/ })

};
;