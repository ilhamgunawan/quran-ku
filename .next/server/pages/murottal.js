"use strict";
(() => {
var exports = {};
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 8402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlayIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PlayIcon({ fillColor  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: fillColor ? fillColor : 'white',
        width: "2rem",
        height: "2rem",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        })
    }));
};


/***/ }),

/***/ 2442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n4": () => (/* binding */ customButtonTeal),
/* harmony export */   "ad": () => (/* binding */ customButtonBlue),
/* harmony export */   "Wt": () => (/* binding */ customButtonBorderTeal),
/* harmony export */   "Xu": () => (/* binding */ customButtonLessHover)
/* harmony export */ });
const customButtonTeal = "w-full bg-teal-400 hover:bg-teal-300 text-white font-bold py-6 px-8 my-2 rounded shadow-md w-56 h-12 focus:outline-none focus:shadow-outline focus:border-teal-200 flex items-center justify-center";
const customButtonBlue = "bg-transparent hover:bg-blue-100 text-black font-bold pl-3 mb-1 rounded h-10 w-full focus:outline-none focus:border-blue-200 flex items-center";
const customButtonBorderTeal = "w-full bg-transparent hover:bg-teal-300 hover:text-white border border-teal-400 text-black font-bold py-4 px-4 my-1 rounded focus:outline-none focus:shadow-outline focus:border-teal-200 flex justify-between items-center";
const customButtonLessHover = "w-full bg-transparent border border-teal-400 text-black font-bold py-4 px-4 my-1 rounded focus:outline-none focus:shadow-outline focus:border-teal-200 flex flex-col items-center";


/***/ }),

/***/ 3702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ murottal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/header/header.js + 7 modules
var header = __webpack_require__(4441);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./state/store.js + 1 modules
var store = __webpack_require__(969);
;// CONCATENATED MODULE: ./components/footer/footer-player.js




const FooterPlayer = ()=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(store/* Context */._);
    const { currentMurottal , currentPlaySurahData  } = state;
    const { surah , reciter  } = currentPlaySurahData;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: surah ? `Murottal Qur'an Surat ${surah} - ${reciter} | Qur'anKu` : "Murottal | Qur'anKu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "w-full fixed bottom-0 inset-x-0 flex bg-gray-900",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full flex-col footer-player",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-white font-semibold text-center my-2",
                            children: surah ? `${reciter} - ${surah}` : "Mishari Rashid al-`Afasy - Al Fatihah"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("audio", {
                            controls: true,
                            id: "audio-player",
                            className: "w-11/12 h-10 outline-none my-2 mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                    src: currentMurottal ? currentMurottal : "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
                                    type: "audio/mpeg"
                                }),
                                "Your browser does not support the audio element."
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const footer_player = (FooterPlayer);

// EXTERNAL MODULE: ./state/actions.js
var actions = __webpack_require__(8286);
// EXTERNAL MODULE: ./data-sources/data-sources.js
var data_sources = __webpack_require__(6763);
;// CONCATENATED MODULE: external "react-loader-spinner"
const external_react_loader_spinner_namespaceObject = require("react-loader-spinner");
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_namespaceObject);
;// CONCATENATED MODULE: ./components/loading-spinner/loading-spinner.js


const LoadingSpinner = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        className: "flex flex-col justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
            type: "Oval",
            color: "#a0aec0",
            height: 60,
            width: 60
        })
    }));
};
/* harmony default export */ const loading_spinner = (LoadingSpinner);

// EXTERNAL MODULE: ./components/button.js
var components_button = __webpack_require__(2442);
// EXTERNAL MODULE: ./assets/icons/play-icon.js
var play_icon = __webpack_require__(8402);
;// CONCATENATED MODULE: ./components/murottal-list/play-button.js






const PlayButton = ({ surahName , recitation  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(store/* Context */._);
    const { name , audio_url  } = recitation;
    const currentPlayData = {
        surah: surahName,
        reciter: name
    };
    const onButtonClick = async ()=>{
        await dispatch((0,actions/* setCurrentMurottal */.$n)(audio_url));
        await dispatch((0,actions/* setCurrentPlaySurahData */.Zc)(currentPlayData));
        const audioPlayer = document.getElementById("audio-player");
        audioPlayer.load();
        audioPlayer.play();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: onButtonClick,
        className: components_button/* customButtonBlue */.ad,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(play_icon/* default */.Z, {
                fillColor: "#131313"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-2 font-medium",
                children: name
            })
        ]
    }));
};
/* harmony default export */ const play_button = (PlayButton);

;// CONCATENATED MODULE: ./assets/icons/expand-less-icon.js

const ExpandLessIcon = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "black",
        width: "2rem",
        height: "2rem",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"
            })
        ]
    }));
};
/* harmony default export */ const expand_less_icon = (ExpandLessIcon);

;// CONCATENATED MODULE: ./components/murottal-list/close-button.js


const CloseButton = ({ clickEvent  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Tutup expand",
        className: "focus:outline-none hover:bg-blue-100 rounded-full p-1",
        onClick: clickEvent,
        style: {
            position: "absolute",
            bottom: "0.5rem",
            right: "0.5rem",
            zIndex: "10"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(expand_less_icon, {
        })
    }));
};
/* harmony default export */ const close_button = (CloseButton);

;// CONCATENATED MODULE: ./components/murottal-list/murottal-item.js






const MurottalItem = ({ nama , nomor , arti , asma , ayat  })=>{
    const { 0: expand , 1: setExpand  } = (0,external_react_.useState)(false);
    const { 0: murottalData , 1: setMurottalData  } = (0,external_react_.useState)({
        name: "",
        recitations: []
    });
    const { name , recitations  } = murottalData;
    const onClickExpand = ()=>{
        setExpand(true);
    };
    const onCloseClick = ()=>{
        setExpand(false);
    };
    const getMurottalData = async ()=>{
        const data = await (0,data_sources/* getMurottalAllUrl */.ZT)(nomor);
        setMurottalData(data);
    };
    (0,external_react_.useEffect)(()=>{
        getMurottalData();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        style: {
            position: "relative"
        },
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: components_button/* customButtonLessHover */.Xu,
                style: {
                    cursor: "pointer"
                },
                onClick: onClickExpand,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mr-5 h-8 w-8 text-xs font-semibold leading-none bg-blue-300 text-white flex justify-center items-center rounded-full",
                                        children: nomor
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-left",
                                                children: nama
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-left text-gray-700 font-light",
                                                children: arti
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-normal text-right text-2xl leading-none pb-1",
                                        children: asma
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "font-light text-right text-gray-700 leading-none pb-1",
                                        children: [
                                            ayat,
                                            " ayat"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    expand ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            position: "relative"
                        },
                        className: "w-full flex flex-col items-center mt-4",
                        children: recitations.map((recitation, index)=>/*#__PURE__*/ jsx_runtime_.jsx(play_button, {
                                surahName: name,
                                recitation: recitation
                            }, index)
                        )
                    }) : null
                ]
            }),
            expand ? /*#__PURE__*/ jsx_runtime_.jsx(close_button, {
                clickEvent: onCloseClick
            }) : null
        ]
    }));
};
/* harmony default export */ const murottal_item = (MurottalItem);

;// CONCATENATED MODULE: ./components/murottal-list/murottal-list.js







const MurottalList = ()=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(store/* Context */._);
    const { surahList: surahList1 , isLoading  } = state;
    const { 0: filteredSurahList , 1: setFilteredSurahList  } = (0,external_react_.useState)([]);
    const onInputChange = (event)=>{
        const searchValueLoweredCase = event.target.value.toLowerCase();
        const filteredSearch = surahList1.filter(({ nama  })=>{
            const surahNameLoweredCase = nama.toLowerCase();
            return surahNameLoweredCase.includes(searchValueLoweredCase);
        });
        setFilteredSurahList(filteredSearch);
    };
    const fetchSurahList = async ()=>{
        dispatch((0,actions/* setLoadingTrue */.DS)());
        const surahList = await (0,data_sources/* getSurahList */.yW)();
        setFilteredSurahList(surahList);
        dispatch((0,actions/* setSurahList */.Mo)(surahList));
        dispatch((0,actions/* setLoadingFalse */.Qt)());
    };
    (0,external_react_.useEffect)(()=>{
        fetchSurahList();
    }, []);
    return isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(loading_spinner, {
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        style: {
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        className: "mt-16 mb-32",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "search",
                placeholder: "Pencarian murottal, contoh: Al Fatihah",
                className: "w-full my-2 p-4 h-16 border-2 border-teal-400 rounded outline-none",
                onChange: onInputChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "w-full flex flex-col items-center",
                children: filteredSurahList.map((surah)=>/*#__PURE__*/ jsx_runtime_.jsx(murottal_item, {
                        ...surah
                    }, surah.nomor)
                )
            })
        ]
    });
};
/* harmony default export */ const murottal_list = (MurottalList);

;// CONCATENATED MODULE: ./pages/murottal.js





const Murottal = ({})=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Murottal | Qur'anKu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                pageTitle: "Qur'anKu | Murottal"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(murottal_list, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_player, {
            })
        ]
    }));
};
/* harmony default export */ const murottal = (Murottal);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,969,441,763], () => (__webpack_exec__(3702)));
module.exports = __webpack_exports__;

})();