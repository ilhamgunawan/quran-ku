"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

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

/***/ 6132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ surah_list)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/button.js
var components_button = __webpack_require__(2442);
;// CONCATENATED MODULE: ./components/surah-list/surah-list-item.js



const SurahListItem = ({ nama , nomor , arti , asma , ayat , surahItemLinkPrefix  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "w-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: `/${surahItemLinkPrefix}/${nomor}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: components_button/* customButtonBorderTeal */.Wt,
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
            })
        })
    }));
};
/* harmony default export */ const surah_list_item = (SurahListItem);

;// CONCATENATED MODULE: ./components/surah-list/surah-list.js



const SurahList = ({ surahList , surahItemLinkPrefix  })=>{
    const { 0: filteredSurahList , 1: setFilteredSurahList  } = (0,external_react_.useState)(surahList);
    const { 0: isSearchResultEmpty , 1: setSearchResultEmpty  } = (0,external_react_.useState)(false);
    const onInputChange = (event)=>{
        const searchValueLoweredCase = event.target.value.toLowerCase();
        const filteredSearch = surahList.filter(({ nama  })=>{
            const surahNameLoweredCase = nama.toLowerCase();
            return surahNameLoweredCase.includes(searchValueLoweredCase);
        });
        if (filteredSearch.length !== 0) {
            setSearchResultEmpty(false);
            setFilteredSurahList(filteredSearch);
        } else {
            setSearchResultEmpty(true);
            setFilteredSurahList(filteredSearch);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        style: {
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        className: "my-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "search",
                placeholder: "Pencarian surat, contoh: Al Fatihah",
                className: "w-full my-2 p-4 h-16 border-2 border-teal-400 rounded outline-none",
                onChange: onInputChange
            }),
            isSearchResultEmpty ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center font-semibold text-gray-700",
                children: "Maaf, pencarian tidak ditemukan"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "w-full flex flex-col items-center",
                children: filteredSurahList.map((surah)=>/*#__PURE__*/ jsx_runtime_.jsx(surah_list_item, {
                        ...surah,
                        surahItemLinkPrefix: surahItemLinkPrefix
                    }, surah.nomor)
                )
            })
        ]
    }));
};
/* harmony default export */ const surah_list = (SurahList);


/***/ })

};
;