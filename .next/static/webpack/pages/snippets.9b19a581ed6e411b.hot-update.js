"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/snippets",{

/***/ "./pages/snippets/index.js":
/*!*********************************!*\
  !*** ./pages/snippets/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_works_snowGirl_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/works/snowGirl.jpg */ \"./public/works/snowGirl.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar Snippets = function(param) {\n    var snippets = param.snippets;\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Posts\",\n        __source: {\n            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n            lineNumber: 15,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            __source: {\n                fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                    as: \"h4\",\n                    fontSize: 20,\n                    mb: 4,\n                    __source: {\n                        fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"Posts\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    delay: 0.1,\n                    __source: {\n                        fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {\n                        columns: [\n                            1,\n                            2,\n                            2\n                        ],\n                        gap: 6,\n                        __source: {\n                            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: snippets.map(function(snippet) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/snippets/\".concat(snippet.slug),\n                                __source: {\n                                    fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItem, {\n                                        title: snippet.title,\n                                        thumbnail: snippet.cover,\n                                        __source: {\n                                            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/index.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this\n                                    }, snippet.slug)\n                                })\n                            });\n                        })\n                    })\n                })\n            ]\n        })\n    });\n};\n_c = Snippets;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snippets);\nvar _c;\n$RefreshReg$(_c, \"Snippets\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zbmlwcGV0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDbkI7QUFDVztBQUNKO0FBQ0E7QUFDekI7QUFNMEI7O0FBRXRELEdBQUssQ0FBQ1MsUUFBUSxHQUFHLFFBQVE7UUFBTEMsUUFBUSxTQUFSQSxRQUFRO2tCQUMxQixNQUFNLHdEQUFMSixtRUFBTTtRQUFDSyxLQUFLLEVBQUMsQ0FBTzs7Ozs7Ozt3RkFDbEJYLHVEQUFTOzs7Ozs7OztxRkFDUEMscURBQU87b0JBQUNXLEVBQUUsRUFBQyxDQUFJO29CQUFDQyxRQUFRLEVBQUUsRUFBRTtvQkFBRUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7OEJBQUUsQ0FFdEM7O3FGQUNDWCwyREFBTztvQkFBQ1ksS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7bUdBQ2hCYix3REFBVTt3QkFBQ2MsT0FBTyxFQUFFLENBQUM7NEJBQUEsQ0FBQzs0QkFBRSxDQUFDOzRCQUFFLENBQUM7d0JBQUEsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7a0NBQ25DUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU87MENBQ3BCLE1BQU1DLENBQUFBLHNEQUFBQSxDQUFMYixrREFBSTtnQ0FBQ2EsSUFBSSxFQUFHLENBQVUsWUFBZSxPQUFiRCxPQUFPLENBQUNFLElBQUk7Ozs7Ozs7K0dBQ2xDQyxDQUFDOzs7Ozs7O21IQUNDakIsMkRBQVE7d0NBRVBNLEtBQUssRUFBRVEsT0FBTyxDQUFDUixLQUFLO3dDQUNwQlksU0FBUyxFQUFFSixPQUFPLENBQUNLLEtBQUs7Ozs7Ozs7dUNBRm5CTCxPQUFPLENBQUNFLElBQUk7Ozs7Ozs7Ozs7S0FaN0JaLFFBQVE7O0FBeUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanM/ZWViNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIFNpbXBsZUdyaWQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvblwiO1xuaW1wb3J0IHsgV29ya0dyaWRJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ3JpZC1pdGVtXCI7XG5pbXBvcnQgeyBHcmlkSXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dyaWQtaXRlbVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2FydGljbGVcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiO1xuaW1wb3J0IFByaXNtaWMgZnJvbSBcIkBwcmlzbWljaW8vY2xpZW50XCI7XG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLWRvbVwiO1xuXG5pbXBvcnQgc25vd0dpcmwgZnJvbSBcIi4uLy4uL3B1YmxpYy93b3Jrcy9zbm93R2lybC5qcGdcIjtcblxuY29uc3QgU25pcHBldHMgPSAoeyBzbmlwcGV0cyB9KSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJQb3N0c1wiPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGluZyBhcz1cImg0XCIgZm9udFNpemU9ezIwfSBtYj17NH0+XG4gICAgICAgIFBvc3RzXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8U2VjdGlvbiBkZWxheT17MC4xfT5cbiAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDIsIDJdfSBnYXA9ezZ9PlxuICAgICAgICAgIHtzbmlwcGV0cy5tYXAoKHNuaXBwZXQpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc25pcHBldHMvJHtzbmlwcGV0LnNsdWd9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtzbmlwcGV0LnNsdWd9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17c25pcHBldC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbD17c25pcHBldC5jb3Zlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTbmlwcGV0cztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMucXVlcnkoXG4gICAgW1ByaXNtaWMucHJlZGljYXRlcy5hdChcImRvY3VtZW50LnR5cGVcIiwgXCJzbmlwcGV0XCIpXSxcbiAgICB7XG4gICAgICBmZXRjaDogW1wic25pcHBldC50aXRsZVwiXSxcbiAgICAgIHBhZ2VTaXplOiAxMDAsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHNuaXBwZXRzID0gcmVzcG9uc2UucmVzdWx0cy5tYXAoKHNuaXBwZXQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2x1Zzogc25pcHBldC51aWQsXG4gICAgICBjb3Zlcjogc25pcHBldC5kYXRhLmNvdmVyLnVybCxcbiAgICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQoc25pcHBldC5kYXRhLnRpdGxlKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoc25pcHBldC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgXCJwdC1CUlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc25pcHBldHMsXG4gICAgfSxcbiAgICByZWRpcmVjdDogNjAgKiAxMjAsIC8vIDIgaG9yYXNcbiAgfTtcbn07Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiU2VjdGlvbiIsIldvcmtHcmlkSXRlbSIsIkdyaWRJdGVtIiwiTGF5b3V0IiwiTGluayIsInNub3dHaXJsIiwiU25pcHBldHMiLCJzbmlwcGV0cyIsInRpdGxlIiwiYXMiLCJmb250U2l6ZSIsIm1iIiwiZGVsYXkiLCJjb2x1bW5zIiwiZ2FwIiwibWFwIiwic25pcHBldCIsImhyZWYiLCJzbHVnIiwiYSIsInRodW1ibmFpbCIsImNvdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/snippets/index.js\n");

/***/ })

});