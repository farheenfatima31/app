"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/videodelivery_addnewassets",{

/***/ "./pages/videodelivery_addnewassets.js":
/*!*********************************************!*\
  !*** ./pages/videodelivery_addnewassets.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Videodelivery_addnewassets; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/videos.module.css */ \"./styles/videos.module.css\");\n/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/api/api */ \"./components/api/api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Videodelivery_addnewassets() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    var onSubmit = function(video_url_data) {\n        //json.parse \n        _components_api_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post_video(JSON.parse(video_url_data.code)).then(function(res) {\n            console.log(res);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().videodelivery),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/Videos\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_close),\n                        role: \"button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/Images/close.png\",\n                                alt: \"close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                lineNumber: 25,\n                                columnNumber: 86\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                        lineNumber: 25,\n                        columnNumber: 38\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().Videodelivery_addnewassets),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Create new asset\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().upload_file),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"upload your video file\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().upload_btn_wrapper),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                                            children: \"Select File\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"file\",\n                                            name: \"myfile\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().or)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().or_text),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"[or]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                            lineNumber: 44,\n                            columnNumber: 49\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().post),\n                            onSubmit: handleSubmit(onSubmit),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Post using Video URL:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    readOnly: true,\n                                    value: \"http://13.235.3.29/video//services/api/v1/contents\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Post body editor:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().language_select),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"\".concat((_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_btn), \" \").concat((_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().languge_img),\n                                                    src: \"/Images/python.png\",\n                                                    alt: \"python\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 88\n                                                }, this),\n                                                \"Python\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_btn),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().languge_img),\n                                                    src: \"/Images/node-js.png\",\n                                                    alt: \"node\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 66\n                                                }, this),\n                                                \"Node\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_btn),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().languge_img),\n                                                    src: \"/Images/php.png\",\n                                                    alt: \"php\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 66\n                                                }, this),\n                                                \"Php\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_btn),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().languge_img),\n                                                    src: \"/Images/go.png\",\n                                                    alt: \"go\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 66\n                                                }, this),\n                                                \"Go\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().code),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", _objectSpread({\n                                            className: \"\".concat((_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().code_input), \" form_control\"),\n                                            type: \"text\",\n                                            name: \"code\"\n                                        }, register(\"code\", {\n                                            required: true\n                                        })), void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 29\n                                        }, this),\n                                        errors.code && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: 'validations',\n                                            children: \"This field is required\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 45\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                                    children: \"Run Request\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SaiPraneeth\\\\Documents\\\\GitHub\\\\app\\\\pages\\\\videodelivery_addnewassets.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this));\n};\n_s(Videodelivery_addnewassets, \"77WzwRY2adCYNFA0cLnNubMUW6o=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Videodelivery_addnewassets;\nvar _c;\n$RefreshReg$(_c, \"Videodelivery_addnewassets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb2RlbGl2ZXJ5X2FkZG5ld2Fzc2V0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1A7QUFDRjtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixRQUFRLENBQUNJLDBCQUEwQixHQUFHLENBQUM7O0lBQ2xELEdBQUssQ0FBNERILEdBQVMsR0FBVEEsd0RBQU8sSUFBaEVJLFFBQVEsR0FBaURKLEdBQVMsQ0FBbEVJLFFBQVEsRUFBRUMsWUFBWSxHQUFtQ0wsR0FBUyxDQUF4REssWUFBWSxFQUFFQyxLQUFLLEdBQTRCTixHQUFTLENBQTFDTSxLQUFLLEVBQWVDLE1BQU0sR0FBT1AsR0FBUyxDQUFuQ1EsU0FBUyxDQUFJRCxNQUFNO0lBRzFELEdBQUssQ0FBQ0UsUUFBUSxHQUFHQyxRQUFRLENBQVJBLGNBQWMsRUFBSSxDQUFDO1FBQ2hDLEVBQWE7UUFDYlQsc0VBQWMsQ0FBQ1csSUFBSSxDQUFDQyxLQUFLLENBQUNILGNBQWMsQ0FBQ0ksSUFBSSxHQUN4Q0MsSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUcsRUFBSSxDQUFDO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1FBQ25CLENBQUMsRUFDQUcsS0FBSyxDQUFDQyxRQUFRLENBQVJBLEtBQUssRUFBSSxDQUFDO1lBQ2JILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLO1FBQ3JCLENBQUM7SUFDVCxDQUFDO0lBQ0QsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUV2QixnRkFBb0I7O3dGQUMvQnNCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRXZCLDRFQUFnQjtzR0FDM0JHLGtEQUFJO29CQUFDdUIsSUFBSSxFQUFDLENBQVM7MEdBQUVDLENBQUM7d0JBQUNKLFNBQVMsRUFBRXZCLDhFQUFrQjt3QkFBRTZCLElBQUksRUFBQyxDQUFROzt3R0FBRUMsQ0FBRztnQ0FBQ0MsR0FBRyxFQUFDLENBQW1CO2dDQUFDQyxHQUFHLEVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhGLENBQUM7R0FuRXVCSSwwQkFBMEI7O1FBQ21CSCxvREFBTzs7O0tBRHBERywwQkFBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW9kZWxpdmVyeV9hZGRuZXdhc3NldHMuanM/M2I1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy92aWRlb3MubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vY29tcG9uZW50cy9hcGkvYXBpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb2RlbGl2ZXJ5X2FkZG5ld2Fzc2V0cygpIHtcclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB2aWRlb191cmxfZGF0YSA9PiB7XHJcbiAgICAgICAgLy9qc29uLnBhcnNlIFxyXG4gICAgICAgIEFwaS5wb3N0X3ZpZGVvKEpTT04ucGFyc2UodmlkZW9fdXJsX2RhdGEuY29kZSkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb2RlbGl2ZXJ5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RlbF9uYXZ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9WaWRlb3NcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5tb2RlbF9jbG9zZX0gcm9sZT1cImJ1dHRvblwiPjxpbWcgc3JjPVwiL0ltYWdlcy9jbG9zZS5wbmdcIiBhbHQ9XCJjbG9zZVwiIC8+IDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlZpZGVvZGVsaXZlcnlfYWRkbmV3YXNzZXRzfT5cclxuICAgICAgICAgICAgICAgIDxoMj5DcmVhdGUgbmV3IGFzc2V0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkX2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj51cGxvYWQgeW91ciB2aWRlbyBmaWxlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZF9idG5fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9e3N0eWxlcy5idG59PlNlbGVjdCBGaWxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm15ZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3J9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcl90ZXh0fT48c3Bhbj5bb3JdPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5Qb3N0IHVzaW5nIFZpZGVvIFVSTDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2BodHRwOi8vMTMuMjM1LjMuMjkvdmlkZW8vL3NlcnZpY2VzL2FwaS92MS9jb250ZW50c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBvc3QgYm9keSBlZGl0b3I6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlX3NlbGVjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGVsX2J0bn0gJHtzdHlsZXMuYWN0aXZlfWB9PjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VnZV9pbWd9IHNyYz0nL0ltYWdlcy9weXRob24ucG5nJyBhbHQ9J3B5dGhvbicgLz5QeXRob248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW9kZWxfYnRufT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1Z2VfaW1nfSBzcmM9Jy9JbWFnZXMvbm9kZS1qcy5wbmcnIGFsdD0nbm9kZScgLz5Ob2RlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vZGVsX2J0bn0+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWdlX2ltZ30gc3JjPScvSW1hZ2VzL3BocC5wbmcnIGFsdD0ncGhwJyAvPlBocDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb2RlbF9idG59PjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VnZV9pbWd9IHNyYz0nL0ltYWdlcy9nby5wbmcnIGFsdD0nZ28nIC8+R288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb2RlX2lucHV0fSBmb3JtX2NvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29kZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJjb2RlXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb2RlICYmIDxwIGNsYXNzTmFtZT17J3ZhbGlkYXRpb25zJ30+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5SdW4gUmVxdWVzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VGb3JtIiwiQXBpIiwiTGluayIsIlZpZGVvZGVsaXZlcnlfYWRkbmV3YXNzZXRzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmlkZW9fdXJsX2RhdGEiLCJwb3N0X3ZpZGVvIiwiSlNPTiIsInBhcnNlIiwiY29kZSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvZGVsaXZlcnkiLCJtb2RlbF9uYXYiLCJocmVmIiwiYSIsIm1vZGVsX2Nsb3NlIiwicm9sZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwidXBsb2FkX2ZpbGUiLCJ1cGxvYWRfYnRuX3dyYXBwZXIiLCJmb3JtIiwiYnV0dG9uIiwidHlwZSIsImJ0biIsImlucHV0IiwibmFtZSIsIm9yIiwib3JfdGV4dCIsInNwYW4iLCJwb3N0IiwibGFiZWwiLCJyZWFkT25seSIsInZhbHVlIiwibGFuZ3VhZ2Vfc2VsZWN0IiwibW9kZWxfYnRuIiwiYWN0aXZlIiwibGFuZ3VnZV9pbWciLCJ0ZXh0YXJlYSIsImNvZGVfaW5wdXQiLCJyZXF1aXJlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videodelivery_addnewassets.js\n");

/***/ })

});