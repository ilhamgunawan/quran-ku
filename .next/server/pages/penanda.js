"use strict";
(() => {
var exports = {};
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 1610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ penanda)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./bookmark-utils/bookmark-utils.js
var bookmark_utils = __webpack_require__(3225);
// EXTERNAL MODULE: ./components/header/header.js + 7 modules
var header = __webpack_require__(4441);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./assets/icons/bookmark-icon.js
var bookmark_icon = __webpack_require__(9617);
;// CONCATENATED MODULE: ./components/bookmark/bookmark-item.js



const BookmarkItem = ({ surahName , ayatNumber , url , date  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: url,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "flex flex-row items-center border rounded mb-2 hover:bg-blue-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center p-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(bookmark_icon/* default */.Z, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col py-2 pr-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "text-left font-semibold text-lg",
                                children: [
                                    "Qur'an Surat ",
                                    surahName,
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            ": ayat ",
                                            ayatNumber
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-left text-xs text-gray-700",
                                children: [
                                    "Ditandai pada ",
                                    date
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const bookmark_item = (BookmarkItem);

// EXTERNAL MODULE: ./assets/icons/bookmark-border-icon.js
var bookmark_border_icon = __webpack_require__(993);
;// CONCATENATED MODULE: ./assets/icons/quran-2-icon.js

const QuranIcon2 = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "200px",
        height: "200px",
        viewBox: "0 0 512.037 512.037",
        className: "mb-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#e63950",
                d: "M431.902 511.466a15.063 15.063 0 0013.154-2.446 15.048 15.048 0 005.962-11.982V405.5l-79.321-7.337-115.679 63.051z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ff6c6c",
                d: "M61.018 497.037c0 4.702 2.212 9.141 5.962 11.982a15.061 15.061 0 0013.154 2.446l175.884-50.253-113.285-62.367-81.715 6.653z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#613d5c",
                d: "M505.558 62.703c-4.014-2.798-9.199-3.472-13.813-1.714l-78.461 29.048H98.753L20.292 60.989c-4.614-1.758-9.8-1.084-13.813 1.714a15.025 15.025 0 00-6.46 12.334v302a15.012 15.012 0 0010.884 14.429l50.116 14.033 195 55.714 195-55.714 50.116-14.033a15.013 15.013 0 0010.884-14.429v-302a15.03 15.03 0 00-6.461-12.334z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#4b2746",
                d: "M501.135 391.466a15.013 15.013 0 0010.884-14.429v-302c0-4.922-2.417-9.521-6.46-12.334-4.014-2.798-9.199-3.472-13.813-1.714l-78.461 29.048H256.018v371.175l195-55.714z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff5f5",
                d: "M444.718 2.736c-3.9-2.699-9-3.6-13.499-1.8l-175.201 58.2-175.2-58.2c-4.799-1.8-9.598-.899-13.499 1.8-3.9 3.001-6.301 7.5-6.301 12.301v251.3l195 104.099 195-104.399v-251c0-4.801-2.4-9.3-6.3-12.301z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#efe2dd",
                d: "M451.018 15.037c0-4.801-2.401-9.3-6.301-12.301-3.9-2.699-9-3.6-13.499-1.8l-175.201 58.2v311.3l195-104.399v-251z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#efe2dd",
                d: "M308.218 313.738c-22.5 7.5-40.499 22.5-52.2 41.699-11.7-19.199-29.7-34.199-52.2-41.699l-142.8-47.401v50.7c0 6.599 4.2 12.299 10.201 14.099l180 60c1.5.601 3.3.901 4.799.901 1.5 0 3.3-.3 4.799-.901l180-60c6-1.8 10.201-7.5 10.201-14.099v-51z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#cdbfba",
                d: "M440.818 331.136c6-1.8 10.201-7.5 10.201-14.099v-51l-142.8 47.701c-22.5 7.5-40.499 22.5-52.2 41.699v36.601c1.5 0 3.3-.3 4.799-.901z"
            })
        ]
    }));
};
/* harmony default export */ const quran_2_icon = (QuranIcon2);

;// CONCATENATED MODULE: ./components/bookmark/bookmark-empty.js



const BookmarkEmpty = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center mt-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(quran_2_icon, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-800 font-semibold",
                children: "Daftar penanda ayat masih kosong"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap justify-center items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-800 font-semibold",
                        children: "Simpan ayat ke daftar penanda"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex text-center justify-center items-center ml-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-gray-800 font-semibold",
                                children: [
                                    "dengan menekan tombol ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "inline-block"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(bookmark_border_icon/* default */.Z, {
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const bookmark_empty = (BookmarkEmpty);

;// CONCATENATED MODULE: ./pages/penanda.js







const Penanda = ()=>{
    const { 0: isBookmarkExist , 1: setBookmarkExist  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if ((0,bookmark_utils/* getAllAyat */.CA)().length > 0) {
            setBookmarkExist(true);
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Daftar Penanda | Qur'anKu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                pageTitle: "Qur'anKu | Penanda"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                style: {
                    width: "95%",
                    margin: "5rem auto"
                },
                className: "flex flex-col items-center",
                children: isBookmarkExist ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: (0,bookmark_utils/* getAllAyat */.CA)().map((ayat)=>/*#__PURE__*/ jsx_runtime_.jsx(bookmark_item, {
                            ...ayat
                        }, ayat.id)
                    )
                }) : /*#__PURE__*/ jsx_runtime_.jsx(bookmark_empty, {
                })
            })
        ]
    }));
};
/* harmony default export */ const penanda = (Penanda);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,969,441,701], () => (__webpack_exec__(1610)));
module.exports = __webpack_exports__;

})();