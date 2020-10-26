import { createContext, useReducer } from 'react';
import reducer from './reducer';

const INITIAL_STATE = {
  surahList: [],
  currentMurottal: '',
  currentAyatNumberList: [],
  isDaftarAyatShow: false,
  isLoading: true,
  isMurottalPlaying: false,
  error: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(INITIAL_STATE);
export default Store;