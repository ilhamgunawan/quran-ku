import { createContext, useReducer } from "react";
import reducer from "./reducer";

const INITIAL_STATE = {
  surahList: [],
  tafsirList: [],
  currentMurottal: "",
  currentPlaySurahData: {
    surah: "",
    reciter: "",
  },
  currentAyatNumberList: [],
  isDaftarAyatShow: false,
  isLoading: true,
  isMurottalPlaying: false,
  isNavOpen: false,
  error: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(INITIAL_STATE);
export default Store;
