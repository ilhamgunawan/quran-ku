export type GlobalContextType = {
  surahList: any[],
  tafsirList: any[],
  currentMurottal: string,
  currentPlaySurahData: {
    surah: string,
    reciter: string,
  },
  currentAyatNumberList: any[],
  isDaftarAyatShow: boolean,
  isLoading: boolean,
  isMurottalPlaying: boolean,
  isNavOpen: boolean,
  error: any,
};

export type GlobalReducerAction = {
  type: string,
  payload: any,
};
