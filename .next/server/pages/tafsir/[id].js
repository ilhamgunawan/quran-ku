"use strict";
(() => {
var exports = {};
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 3328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./state/store.js + 1 modules
var store = __webpack_require__(969);
// EXTERNAL MODULE: ./state/actions.js
var actions = __webpack_require__(8286);
// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4364);
// EXTERNAL MODULE: ./data-sources/data-sources.js
var data_sources = __webpack_require__(6763);
// EXTERNAL MODULE: ./components/header/header.js + 7 modules
var header = __webpack_require__(4441);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./assets/icons/next-icon.js
var next_icon = __webpack_require__(2118);
// EXTERNAL MODULE: ./assets/icons/previous-icon.js
var previous_icon = __webpack_require__(3943);
// EXTERNAL MODULE: ./assets/icons/list-icon.js
var list_icon = __webpack_require__(8306);
// EXTERNAL MODULE: ./components/footer/daftar-ayat.js
var daftar_ayat = __webpack_require__(9445);
;// CONCATENATED MODULE: ./components/footer/footer-tafsir.js









const FooterTafsir = ({ previousId , nextId , previousName , nextName  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(store/* Context */._);
    const { isDaftarAyatShow  } = state;
    if (nextId == "115") {
        nextId = null;
    } else if (previousId == "0") {
        previousId = null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "w-full fixed bottom-0 inset-x-0 flex bg-gray-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full flex footer-buttons",
            children: [
                previousId ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/tafsir/${previousId}`,
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
                    href: `/tafsir/${nextId}`,
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
/* harmony default export */ const footer_tafsir = (FooterTafsir);

;// CONCATENATED MODULE: ./components/ayat-list/ayat-tafsir-list-item.js

const AyatTafsirListItem = ({ ayatNumber , tafsirText  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "mb-5 pb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: ayatNumber,
                className: "anchor"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-10 w-full border-t-2 border-blue-300 mb-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            style: {
                                width: "fit-content"
                            },
                            className: "text-2xl text-white font-semibold bg-blue-300 py-2 px-4 rounded-b-md",
                            children: [
                                "Tafsir ayat ke-",
                                ayatNumber
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        lang: "id",
                        className: "text-lg leading-loose text-justify",
                        children: tafsirText
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const ayat_tafsir_list_item = (AyatTafsirListItem);

;// CONCATENATED MODULE: ./pages/tafsir/[id].js










const getStaticPaths = async ()=>{
    const paths = await (0,data_sources/* getAllSurahIdUnfiltered */.du)();
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const { nextName , previousName  } = await (0,data_sources/* getSurahNameAndAyat */.cI)(params.id);
    const { name , tafsir , source  } = await (0,data_sources/* getTafsir */.EQ)(params.id);
    return {
        props: {
            name,
            surahId: params.id,
            tafsir,
            source,
            nextName,
            previousName
        }
    };
};
const TafsirDetail = ({ surahId , tafsir , name , source , nextName , previousName ,  })=>{
    const tafsirArray = (0,utils/* mapTafsirObjectToArray */.MQ)(tafsir);
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(store/* Context */._);
    (0,external_react_.useEffect)(()=>{
        dispatch((0,actions/* setCurrentAyatNumberList */.oC)((0,utils/* getAyatNumberList */.bM)(tafsirArray)));
    }, [
        surahId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        "Tafsir Qur'an Surat ",
                        name,
                        " | Qur'anKu"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                pageTitle: `Tafsir Surat ${name}`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                style: {
                    width: "95%",
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                className: "my-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "bg-orange-200 p-4 mb-4 rounded-lg",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-yellow-800 leading-loose",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Catatan"
                                }),
                                ": Tafsir Quran Surat ",
                                name,
                                " berdasarkan sumber dari ",
                                source
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: tafsirArray.map((ayat)=>/*#__PURE__*/ jsx_runtime_.jsx(ayat_tafsir_list_item, {
                                ...ayat
                            }, ayat.ayatNumber)
                        )
                    })
                ]
            }),
            surahId ? /*#__PURE__*/ jsx_runtime_.jsx(footer_tafsir, {
                previousId: (parseInt(surahId) - 1).toString(),
                nextId: (parseInt(surahId) + 1).toString(),
                previousName: previousName,
                nextName: nextName
            }) : /*#__PURE__*/ jsx_runtime_.jsx(footer_tafsir, {
                previousId: null,
                nextId: null,
                previousName: "Loading",
                nextName: "Loading"
            })
        ]
    }));
};
/* harmony default export */ const _id_ = (TafsirDetail);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,969,441,763,601], () => (__webpack_exec__(3328)));
module.exports = __webpack_exports__;

})();