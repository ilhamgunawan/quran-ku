"use strict";
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BookmarkBorderIcon = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "#ED8936",
        width: "1.7rem",
        height: "1.7rem",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarkBorderIcon);


/***/ }),

/***/ 3225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CA": () => (/* binding */ getAllAyat),
/* harmony export */   "zj": () => (/* binding */ storeAyat),
/* harmony export */   "Xe": () => (/* binding */ removeAyat),
/* harmony export */   "yH": () => (/* binding */ getAyat)
/* harmony export */ });
const getAllAyat = ()=>{
    const storageArray = Object.entries(localStorage).filter((object)=>{
        return !object[0].includes("ally-supports-cache");
    }).map((ayatArray)=>{
        return JSON.parse(ayatArray[1]);
    });
    return storageArray;
};
const storeAyat = (key, ayat)=>{
    localStorage.setItem(key, JSON.stringify(ayat));
};
const removeAyat = (key)=>{
    localStorage.removeItem(key);
};
const getAyat = (key)=>{
    return !!localStorage.getItem(key);
};


/***/ })

};
;