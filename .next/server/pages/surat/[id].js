"use strict";
(() => {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 3329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4364);
/* harmony import */ var _data_sources_data_sources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6763);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(969);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8286);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4441);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2365);
/* harmony import */ var _components_ayat_list_ayat_list_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1426);










const getStaticPaths = async ()=>{
    const paths = await (0,_data_sources_data_sources__WEBPACK_IMPORTED_MODULE_3__/* .getAllSurahId */ .nQ)();
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const { nextName , previousName  } = await (0,_data_sources_data_sources__WEBPACK_IMPORTED_MODULE_3__/* .getSurahNameAndAyat */ .cI)(params.id);
    const murottalUrl = await (0,_data_sources_data_sources__WEBPACK_IMPORTED_MODULE_3__/* .getMurottalUrl */ .pf)(params.id);
    const surahData = await (0,_data_sources_data_sources__WEBPACK_IMPORTED_MODULE_3__/* .getSurah */ .Nz)(params.id);
    return {
        props: {
            surahData,
            surahId: params.id,
            nextName,
            previousName,
            murottalUrl
        }
    };
};
const SurahDetail = ({ surahData , surahId , murottalUrl , nextName , previousName ,  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_state_store__WEBPACK_IMPORTED_MODULE_4__/* .Context */ ._);
    const { currentMurottal , isMurottalPlaying , isLoading  } = state;
    const { text , translations , number , name_latin , number_of_ayah  } = surahData;
    const versesArray = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .mapAyatObjectToArray */ .s4)(text, translations.id.text);
    const setAyatList = (verses)=>{
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__/* .setCurrentAyatNumberList */ .oC)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .getAyatNumberList */ .bM)(verses)));
    };
    const dispatchCurrentMurottal = async ()=>{
        if (isMurottalPlaying === true) {
            dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__/* .murottalAudioToggle */ .yP)());
        }
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__/* .setCurrentMurottal */ .$n)(murottalUrl));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setAyatList(versesArray);
        dispatchCurrentMurottal();
    }, [
        surahId
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Qur'an Surat ",
                            name_latin ? name_latin : "",
                            " | Qur'anKu"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preload",
                        href: "/fonts/LPMQ.ttf",
                        as: "font",
                        crossOrigin: ""
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                pageTitle: name_latin ? `${name_latin} | ${number_of_ayah} ayat` : "Loading..."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                style: {
                    width: "95%",
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                className: "my-16",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "mb-5 border-b pb-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "grid",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "arabic-text col-start-2 ml-auto mr-0 text-right",
                                                children: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-10 text-gray-700 leading-relaxed text-justify",
                                            children: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
                                        })
                                    ]
                                })
                            }),
                            versesArray.map((ayat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ayat_list_ayat_list_item__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    surahId: surahId,
                                    surahName: name_latin,
                                    ...ayat
                                }, `${name_latin}-${ayat.ayatNumber}`)
                            )
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                        id: "audio-murottal",
                        src: currentMurottal,
                        loop: true
                    })
                ]
            }),
            number ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                previousId: (parseInt(number) - 1).toString(),
                nextId: (parseInt(number) + 1).toString(),
                previousName: previousName,
                nextName: nextName
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                previousId: null,
                nextId: null,
                previousName: "Loading",
                nextName: "Loading"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurahDetail);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,969,441,763,601,701,874], () => (__webpack_exec__(3329)));
module.exports = __webpack_exports__;

})();