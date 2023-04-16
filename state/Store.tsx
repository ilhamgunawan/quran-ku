import type { ReactNode } from 'react';
import React, { useReducer } from 'react';

import reducer from './reducer';

const INITIAL_STATE = {
  surahList: [],
  tafsirList: [],
  currentMurottal: '',
  currentPlaySurahData: {
    surah: '',
    reciter: '',
  },
  currentAyatNumberList: [],
  isDaftarAyatShow: false,
  isLoading: true,
  isMurottalPlaying: false,
  isNavOpen: false,
  error: null,
};

export const GlobalContext = React.createContext<any>(INITIAL_STATE);
export const DispatchContext = React.createContext<any>(null);

interface StoreProps {
  children: ReactNode;
}

export default function Store({ children }: StoreProps) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GlobalContext.Provider>
  );
}
