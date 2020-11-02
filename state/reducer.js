import ACTION_TYPES from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.SET_SURAH_LIST:
      return {
        ...state,
        surahList: action.payload,
      };
    case ACTION_TYPES.SET_CURRENT_MUROTTAL:
      return {
        ...state,
        currentMurottal: action.payload,
      };
    case ACTION_TYPES.MUROTTAL_AUDIO_TOGGLE:
      return {
        ...state,
        isMurottalPlaying: !state.isMurottalPlaying,
      };
    case ACTION_TYPES.SET_CURRENT_AYAT_LIST:
      return {
        ...state,
        currentAyatNumberList: action.payload,
      };
    case ACTION_TYPES.SET_DAFTAR_AYAT_TOGGLE:
      return {
        ...state,
        isDaftarAyatShow: !state.isDaftarAyatShow,
      };
    case ACTION_TYPES.SET_CURRENT_PLAY_SURAH_DATA:
      return {
        ...state,
        currentPlaySurahData: action.payload,
      };
    case ACTION_TYPES.TOGGLE_NAV:
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    default:
      return state;
  }
};

export default reducer;
