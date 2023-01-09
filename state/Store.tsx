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

export const GlobalContext = createContext(INITIAL_STATE);
export const DispatchContext = createContext(null);

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  
  return (
    <GlobalContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GlobalContext.Provider>
  );
}
