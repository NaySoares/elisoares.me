/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./pages/posts/post.module.scss":
/*!**************************************!*\
  !*** ./pages/posts/post.module.scss ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__kzDKN\",\n\t\"post\": \"post_post__uMm6_\",\n\t\"postContent\": \"post_postContent__SaJf_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9wb3N0Lm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL3Bvc3RzL3Bvc3QubW9kdWxlLnNjc3M/NmZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3N0X2NvbnRhaW5lcl9fa3pES05cIixcblx0XCJwb3N0XCI6IFwicG9zdF9wb3N0X191TW02X1wiLFxuXHRcInBvc3RDb250ZW50XCI6IFwicG9zdF9wb3N0Q29udGVudF9fU2FKZl9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/post.module.scss\n");

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/prismic */ \"./services/prismic.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post.module.scss */ \"./pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Post = ({ post  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/eli/Developer/portfolio/pages/posts/[slug].js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"title\", {\n                    __source: {\n                        fileName: \"/Users/eli/Developer/portfolio/pages/posts/[slug].js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: [\n                        post.title,\n                        \" | E.Soares\"\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                __source: {\n                    fileName: \"/Users/eli/Developer/portfolio/pages/posts/[slug].js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"article\", {\n                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post),\n                    __source: {\n                        fileName: \"/Users/eli/Developer/portfolio/pages/posts/[slug].js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/eli/Developer/portfolio/pages/posts/[slug].js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            },\n                            __self: undefined,\n                            children: post.title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"time\", {\n                            __source: {\n                                fileName: \"/Users/eli/Developer/portfolio/pages/posts/[slug].js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            },\n                            __self: undefined,\n                            children: post.updatedAt\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postContent),\n                            dangerouslySetInnerHTML: {\n                                __html: post.content\n                            },\n                            __source: {\n                                fileName: \"/Users/eli/Developer/portfolio/pages/posts/[slug].js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            },\n                            __self: undefined\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nconst getServerSideProps = async ({ req , params  })=>{\n    const { slug  } = params;\n    const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_2__.getPrismicClient)(req);\n    const response = await prismic.getByUID(\"post\", String(slug), {\n    });\n    console.log(JSON.stringify(response, null, 2));\n    const post = {\n        slug,\n        title: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asText(response.data.title),\n        content: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asHtml(response.data.content),\n        updatedAt: new Date(response.last_publication_date).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"long\",\n            year: \"numeric\"\n        })\n    };\n    return {\n        props: {\n            post\n        },\n        redirect: 60 * 120\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzZCO0FBQ25CO0FBRUM7QUFFdkMsS0FBSyxDQUFDSSxJQUFJLElBQUksQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDMUIsTUFBTTs7aUZBRURMLGtEQUFJOzs7Ozs7O2dHQUNGTSxDQUFLOzs7Ozs7Ozt3QkFBRUQsSUFBSSxDQUFDQyxLQUFLO3dCQUFDLENBQVc7Ozs7aUZBRy9CQyxDQUFJO2dCQUFDQyxTQUFTLEVBQUVMLG9FQUFnQjs7Ozs7OztnR0FDOUJPLENBQU87b0JBQUNGLFNBQVMsRUFBRUwsK0RBQVc7Ozs7Ozs7OzZGQUM1QlEsQ0FBRTs7Ozs7OztzQ0FBRU4sSUFBSSxDQUFDQyxLQUFLOzs2RkFDZE0sQ0FBSTs7Ozs7OztzQ0FBRVAsSUFBSSxDQUFDUSxTQUFTOzs2RkFFcEJDLENBQUc7NEJBQ0ZOLFNBQVMsRUFBRUwsc0VBQWtCOzRCQUM3QmEsdUJBQXVCLEVBQUUsQ0FBQztnQ0FBQ0MsTUFBTSxFQUFFWixJQUFJLENBQUNhLE9BQU87NEJBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQU03RCxDQUFDO0FBRUQsaUVBQWVkLElBQUksRUFBQztBQUViLEtBQUssQ0FBQ2Usa0JBQWtCLFVBQVUsQ0FBQyxDQUFDQyxHQUFHLEdBQUVDLE1BQU0sRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM1RCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHRCxNQUFNO0lBQ3ZCLEtBQUssQ0FBQ0UsT0FBTyxHQUFHdEIsbUVBQWdCLENBQUNtQixHQUFHO0lBQ3BDLEtBQUssQ0FBQ0ksUUFBUSxHQUFHLEtBQUssQ0FBQ0QsT0FBTyxDQUFDRSxRQUFRLENBQUMsQ0FBTSxPQUFFQyxNQUFNLENBQUNKLElBQUksR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUVoRUssT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFFNUMsS0FBSyxDQUFDbkIsSUFBSSxHQUFHLENBQUM7UUFDWmlCLElBQUk7UUFDSmhCLEtBQUssRUFBRUosd0RBQWUsQ0FBQ3NCLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDMUIsS0FBSztRQUMxQ1ksT0FBTyxFQUFFaEIsd0RBQWUsQ0FBQ3NCLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDZCxPQUFPO1FBQzlDTCxTQUFTLEVBQUUsR0FBRyxDQUFDcUIsSUFBSSxDQUFDVixRQUFRLENBQUNXLHFCQUFxQixFQUFFQyxrQkFBa0IsQ0FDcEUsQ0FBTyxRQUNQLENBQUM7WUFDQ0MsR0FBRyxFQUFFLENBQVM7WUFDZEMsS0FBSyxFQUFFLENBQU07WUFDYkMsSUFBSSxFQUFFLENBQVM7UUFDakIsQ0FBQztJQUVMLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNObkMsSUFBSTtRQUNOLENBQUM7UUFDRG9DLFFBQVEsRUFBRSxFQUFFLEdBQUcsR0FBRztJQUNwQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1kb21cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wb3N0Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBFLlNvYXJlczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KHJlcSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5nZXRCeVVJRChcInBvc3RcIiwgU3RyaW5nKHNsdWcpLCB7fSk7XG5cbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDIpKTtcblxuICBjb25zdCBwb3N0ID0ge1xuICAgIHNsdWcsXG4gICAgdGl0bGU6IFJpY2hUZXh0LmFzVGV4dChyZXNwb25zZS5kYXRhLnRpdGxlKSxcbiAgICBjb250ZW50OiBSaWNoVGV4dC5hc0h0bWwocmVzcG9uc2UuZGF0YS5jb250ZW50KSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKHJlc3BvbnNlLmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgXCJwdC1CUlwiLFxuICAgICAge1xuICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgfVxuICAgICksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICAgIHJlZGlyZWN0OiA2MCAqIDEyMCwgLy8gMiBob3Jhc1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiZ2V0UHJpc21pY0NsaWVudCIsIlJpY2hUZXh0Iiwic3R5bGVzIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJhcnRpY2xlIiwiaDEiLCJ0aW1lIiwidXBkYXRlZEF0IiwiZGl2IiwicG9zdENvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwYXJhbXMiLCJzbHVnIiwicHJpc21pYyIsInJlc3BvbnNlIiwiZ2V0QnlVSUQiLCJTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImFzVGV4dCIsImRhdGEiLCJhc0h0bWwiLCJEYXRlIiwibGFzdF9wdWJsaWNhdGlvbl9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwicHJvcHMiLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "./services/prismic.js":
/*!*****************************!*\
  !*** ./services/prismic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n    const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n        req,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN\n    });\n    return prismic;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9wcmlzbWljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUVoQyxTQUFTQyxnQkFBZ0IsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7SUFDckMsS0FBSyxDQUFDQyxPQUFPLEdBQUdILCtEQUFjLENBQzVCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCLEVBQzVCLENBQUM7UUFDQ0wsR0FBRztRQUNITSxXQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7SUFDL0MsQ0FBQztJQUdILE1BQU0sQ0FBQ04sT0FBTztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2VydmljZXMvcHJpc21pYy5qcz81ODg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXNtaWNDbGllbnQocmVxKSB7XG4gIGNvbnN0IHByaXNtaWMgPSBQcmlzbWljLmNsaWVudChcbiAgICBwcm9jZXNzLmVudi5QUklTTUlDX0VORFBPSU5ULFxuICAgIHtcbiAgICAgIHJlcSxcbiAgICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5QUklTTUlDX0FDQ0VTU19UT0tFTlxuICAgIH1cbiAgKVxuXG4gIHJldHVybiBwcmlzbWljO1xufSJdLCJuYW1lcyI6WyJQcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInJlcSIsInByaXNtaWMiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiUFJJU01JQ19FTkRQT0lOVCIsImFjY2Vzc1Rva2VuIiwiUFJJU01JQ19BQ0NFU1NfVE9LRU4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/prismic.js\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].js"));
module.exports = __webpack_exports__;

})();