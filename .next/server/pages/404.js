"use strict";
(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 4102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFoundPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/header/header.js + 7 modules
var header = __webpack_require__(4441);
;// CONCATENATED MODULE: ./assets/icons/sad-icon.js

const SadIcon = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0",
        y: "0",
        enableBackground: "new 0 0 512 512",
        version: "1.1",
        viewBox: "0 0 512 512",
        xmlSpace: "preserve",
        height: "1.3rem",
        width: "1.3rem",
        style: {
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "256",
                cy: "256",
                r: "256",
                fill: "#FFD93B"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#F4C534",
                d: "M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                fill: "#3E4347",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M332.432 384.8c0 7.472-5.968 13.328-13.328 13.328H192.912c-7.36 0-13.328-5.872-13.328-13.328 0-7.36 5.968-13.328 13.328-13.328h126.192c7.344 0 13.328 5.968 13.328 13.328zM111.808 261.68c6.256-3.68 24.768 16.16 53.84 17.248 30.096 1.12 47.584-20.928 53.84-17.248 7.792 2.672-2.832 53.552-53.84 53.744-50.992-.192-61.632-51.072-53.84-53.744z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#E9B02C",
                d: "M99.808 239.312c-5.808-.928-9.776-6.4-8.832-12.224.944-5.808 6.32-9.792 12.224-8.832 59.968 9.632 78.192-33.2 78.368-33.632 2.208-5.456 8.416-8.08 13.904-5.856 5.456 2.224 8.08 8.448 5.856 13.904-12.032 29.472-49.824 54.944-101.52 46.64z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#3E4347",
                d: "M400.192 261.68c-6.256-3.68-24.768 16.16-53.84 17.248-30.096 1.12-47.584-20.928-53.84-17.248-7.792 2.672 2.832 53.552 53.84 53.744 50.992-.192 61.632-51.072 53.84-53.744z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#E9B02C",
                d: "M310.672 192.656c-2.224-5.456.4-11.68 5.856-13.904 5.44-2.224 11.648.384 13.888 5.808.8 1.92 19.12 43.216 78.384 33.696 5.872-.96 11.296 3.024 12.224 8.832.928 5.824-3.024 11.296-8.832 12.224-51.328 8.256-89.392-16.912-101.52-46.656z"
            })
        ]
    }));
};
/* harmony default export */ const sad_icon = (SadIcon);

;// CONCATENATED MODULE: ./pages/404.tsx




function NotFoundPage() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Halaman tidak ditemukan | QuranKu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                pageTitle: "QuranKu"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                style: {
                    width: "95%",
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                className: "my-16 flex flex-col items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "font-bold text-6xl",
                        children: "404"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xl text-center",
                        children: [
                            "Sayang sekali, halaman yang anda minta tidak ditemukan ",
                            /*#__PURE__*/ jsx_runtime_.jsx(sad_icon, {
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,969,441], () => (__webpack_exec__(4102)));
module.exports = __webpack_exports__;

})();