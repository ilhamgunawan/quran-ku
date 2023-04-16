import ACTION_TYPES from './types';

export const setLoadingTrue = () => ({
  type: ACTION_TYPES.SET_LOADING_TRUE,
});

export const setLoadingFalse = () => ({
  type: ACTION_TYPES.SET_LOADING_FALSE,
});

export const setSurahList = (surahList: any) => ({
  type: ACTION_TYPES.SET_SURAH_LIST,
  payload: surahList,
});

export const setCurrentMurottal = (murottalUrl: any) => ({
  type: ACTION_TYPES.SET_CURRENT_MUROTTAL,
  payload: murottalUrl,
});

export const murottalAudioToggle = () => ({
  type: ACTION_TYPES.MUROTTAL_AUDIO_TOGGLE,
});

export const setCurrentAyatNumberList = (ayatNumberList: any) => ({
  type: ACTION_TYPES.SET_CURRENT_AYAT_LIST,
  payload: ayatNumberList,
});

export const setDaftarAyatToggle = () => ({
  type: ACTION_TYPES.SET_DAFTAR_AYAT_TOGGLE,
});

export const setCurrentPlaySurahData = (data: any) => ({
  type: ACTION_TYPES.SET_CURRENT_PLAY_SURAH_DATA,
  payload: data,
});

export const toggleNav = () => ({
  type: ACTION_TYPES.TOGGLE_NAV,
});
