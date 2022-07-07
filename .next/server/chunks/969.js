"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ Context),
  "Z": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./state/types.js
var types = __webpack_require__(5236);
;// CONCATENATED MODULE: ./state/reducer.js

const reducer = (state, action)=>{
    switch(action.type){
        case types/* default.SET_LOADING_TRUE */.Z.SET_LOADING_TRUE:
            return {
                ...state,
                isLoading: true
            };
        case types/* default.SET_LOADING_FALSE */.Z.SET_LOADING_FALSE:
            return {
                ...state,
                isLoading: false
            };
        case types/* default.SET_SURAH_LIST */.Z.SET_SURAH_LIST:
            return {
                ...state,
                surahList: action.payload
            };
        case types/* default.SET_CURRENT_MUROTTAL */.Z.SET_CURRENT_MUROTTAL:
            return {
                ...state,
                currentMurottal: action.payload
            };
        case types/* default.MUROTTAL_AUDIO_TOGGLE */.Z.MUROTTAL_AUDIO_TOGGLE:
            return {
                ...state,
                isMurottalPlaying: !state.isMurottalPlaying
            };
        case types/* default.SET_CURRENT_AYAT_LIST */.Z.SET_CURRENT_AYAT_LIST:
            return {
                ...state,
                currentAyatNumberList: action.payload
            };
        case types/* default.SET_DAFTAR_AYAT_TOGGLE */.Z.SET_DAFTAR_AYAT_TOGGLE:
            return {
                ...state,
                isDaftarAyatShow: !state.isDaftarAyatShow
            };
        case types/* default.SET_CURRENT_PLAY_SURAH_DATA */.Z.SET_CURRENT_PLAY_SURAH_DATA:
            return {
                ...state,
                currentPlaySurahData: action.payload
            };
        case types/* default.TOGGLE_NAV */.Z.TOGGLE_NAV:
            return {
                ...state,
                isNavOpen: !state.isNavOpen
            };
        default:
            return state;
    }
};
/* harmony default export */ const state_reducer = (reducer);

;// CONCATENATED MODULE: ./state/store.js



const INITIAL_STATE = {
    surahList: [],
    tafsirList: [],
    currentMurottal: "",
    currentPlaySurahData: {
        surah: "",
        reciter: ""
    },
    currentAyatNumberList: [],
    isDaftarAyatShow: false,
    isLoading: true,
    isMurottalPlaying: false,
    isNavOpen: false,
    error: null
};
const Store = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(state_reducer, INITIAL_STATE);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Context.Provider, {
        value: [
            state,
            dispatch
        ],
        children: children
    }));
};
const Context = /*#__PURE__*/ (0,external_react_.createContext)(INITIAL_STATE);
/* harmony default export */ const store = (Store);


/***/ }),

/***/ 5236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ACTION_TYPES = {
    SET_LOADING_TRUE: "SET_LOADING_TRUE",
    SET_LOADING_FALSE: "SET_LOADING_FALSE",
    SET_SURAH_LIST: "SET_SURAH_LIST",
    SET_CURRENT_MUROTTAL: "SET_CURRENT_MUROTTAL",
    SET_CURRENT_PLAY_SURAH_DATA: "SET_CURRENT_PLAY_SURAH_DATA",
    MUROTTAL_AUDIO_TOGGLE: "MUROTTAL_AUDIO_TOGGLE",
    SET_CURRENT_AYAT_LIST: "SET_CURRENT_AYAT_LIST",
    SET_DAFTAR_AYAT_TOGGLE: "SET_DAFTAR_AYAT_TOGGLE",
    TOGGLE_NAV: "TOGGLE_NAV"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ACTION_TYPES);


/***/ })

};
;