"use strict";
exports.id = 874;
exports.ids = [874];
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

/***/ 1426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4364);
/* harmony import */ var _bookmark_utils_bookmark_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3225);
/* harmony import */ var _assets_icons_bookmark_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9617);
/* harmony import */ var _assets_icons_bookmark_border_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(993);






const AyatListItem = ({ surahName , surahId , ayatNumber , arabic , translations ,  })=>{
    const { 0: isAyatBookmarked , 1: setAyatBookmarked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bookmarkNotif , 1: setBookmarkNotif  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        message: "",
        display: false
    });
    const { 0: ayatKey , 1: setAyatKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`${surahName}-${ayatNumber}`);
    const onClickStoreAyat = ()=>{
        (0,_bookmark_utils_bookmark_utils__WEBPACK_IMPORTED_MODULE_4__/* .storeAyat */ .zj)(ayatKey, {
            id: ayatKey,
            date: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getDateInIndonesia */ .r3)(),
            surahName: surahName,
            ayatNumber: ayatNumber,
            url: `/surat/${surahId}#${ayatNumber}`
        });
        setAyatBookmarked(true);
        console.log((0,_bookmark_utils_bookmark_utils__WEBPACK_IMPORTED_MODULE_4__/* .getAyat */ .yH)(ayatKey));
        setBookmarkNotif({
            message: "Ayat disimpan di penanda",
            display: true
        });
        setTimeout(()=>{
            setBookmarkNotif({
                message: "",
                display: false
            });
        }, 2000);
    };
    const onClickRemoveAyat = ()=>{
        (0,_bookmark_utils_bookmark_utils__WEBPACK_IMPORTED_MODULE_4__/* .removeAyat */ .Xe)(ayatKey);
        setAyatBookmarked(false);
        console.log((0,_bookmark_utils_bookmark_utils__WEBPACK_IMPORTED_MODULE_4__/* .getAyat */ .yH)(ayatKey));
        setBookmarkNotif({
            message: "Ayat dihapus dari penanda",
            display: true
        });
        setTimeout(()=>{
            setBookmarkNotif({
                message: "",
                display: false
            });
        }, 2000);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if ((0,_bookmark_utils_bookmark_utils__WEBPACK_IMPORTED_MODULE_4__/* .getAyat */ .yH)(ayatKey)) {
            setAyatBookmarked(true);
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "mb-5 border-b pb-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: ayatNumber,
                className: "anchor"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: "white"
                                },
                                className: "arabic-text col-start-1 h-10 w-10 mt-auto mb-6 text-2xl leading-none bg-blue-300 text-white flex justify-center items-center rounded-full",
                                children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getArabicNumber */ .yu)(ayatNumber)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                lang: "ar",
                                className: "arabic-text col-start-2 ml-auto mr-0 text-right",
                                children: arabic
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            isAyatBookmarked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "aria-label": `Hapus penanda ${surahName} ayat ${ayatNumber}`,
                                style: {
                                    width: "fit-content"
                                },
                                className: "bookmark-button flex focus:outline-none p-1 rounded-full",
                                onClick: onClickRemoveAyat,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_bookmark_icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "aria-label": `Penanda ${surahName} ayat ${ayatNumber}`,
                                style: {
                                    width: "fit-content"
                                },
                                className: "bookmark-button flex focus:outline-none p-1 rounded-full",
                                onClick: onClickStoreAyat,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_bookmark_border_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                })
                            }),
                            bookmarkNotif.display ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs text-yellow-800 bg-orange-200 p-1 rounded",
                                children: bookmarkNotif.message
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        lang: "id",
                        className: "mt-10 text-gray-700 leading-relaxed text-justify",
                        children: translations
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AyatListItem);


/***/ }),

/***/ 2365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./assets/icons/next-icon.js
var next_icon = __webpack_require__(2118);
// EXTERNAL MODULE: ./assets/icons/play-icon.js
var play_icon = __webpack_require__(8402);
// EXTERNAL MODULE: ./assets/icons/previous-icon.js
var previous_icon = __webpack_require__(3943);
// EXTERNAL MODULE: ./assets/icons/list-icon.js
var list_icon = __webpack_require__(8306);
;// CONCATENATED MODULE: ./assets/icons/pause-icon.js

function PauseIcon() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "white",
        width: "2rem",
        height: "2rem",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M10 16c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1zm2-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-4c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1z"
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./state/store.js + 1 modules
var store = __webpack_require__(969);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./state/actions.js
var actions = __webpack_require__(8286);
// EXTERNAL MODULE: ./components/footer/daftar-ayat.js
var daftar_ayat = __webpack_require__(9445);
;// CONCATENATED MODULE: ./components/footer/footer.js











const Footer = ({ previousId , nextId , previousName , nextName  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(store/* Context */._);
    const { isMurottalPlaying , isDaftarAyatShow  } = state;
    const playMurottal = ()=>{
        const audio = document.getElementById("audio-murottal");
        audio.play();
        dispatch((0,actions/* murottalAudioToggle */.yP)());
    };
    const pauseMurottal = ()=>{
        const audio = document.getElementById("audio-murottal");
        audio.pause();
        dispatch((0,actions/* murottalAudioToggle */.yP)());
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "w-full fixed bottom-0 inset-x-0 flex bg-gray-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full flex footer-buttons",
            children: [
                previousId ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/surat/${previousId}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(previous_icon/* default */.Z, {
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-white font-light text-xs",
                                children: previousName
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(previous_icon/* default */.Z, {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white font-light text-xs"
                        })
                    ]
                }),
                isMurottalPlaying ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none",
                    onClick: pauseMurottal,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PauseIcon, {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white font-light text-xs",
                            children: "Pause Murottal"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none",
                    onClick: playMurottal,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(play_icon/* default */.Z, {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white font-light text-xs",
                            children: "Play Murottal"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        position: "relative"
                    },
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none",
                            onClick: ()=>dispatch((0,actions/* setDaftarAyatToggle */.qr)())
                            ,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(list_icon/* default */.Z, {
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white font-light text-xs",
                                    children: "Daftar Ayat"
                                })
                            ]
                        }),
                        isDaftarAyatShow ? /*#__PURE__*/ jsx_runtime_.jsx(daftar_ayat/* default */.Z, {
                        }) : null
                    ]
                }),
                nextId ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/surat/${nextId}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_icon/* default */.Z, {
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-white font-light text-xs",
                                children: nextName
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_icon/* default */.Z, {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white font-light text-xs"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const footer = (Footer);


/***/ })

};
;