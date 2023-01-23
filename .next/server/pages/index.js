"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/ColorModeSwitcher.tsx":
/*!******************************************!*\
  !*** ./components/ColorModeSwitcher.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorModeSwitcher\": () => (/* binding */ ColorModeSwitcher)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst ColorModeSwitcher = (props)=>{\n    const { colorMode , toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    const text = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"dark\", \"light\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n        \"aria-label\": \"Toggle light dark mode\",\n        onClick: toggleColorMode,\n        icon: colorMode === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.MoonIcon, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.SunIcon, {}, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"/Users/saraisantiago/Desktop/4geeks/old-codes/sara-tustra.github.io/components/ColorModeSwitcher.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbG9yTW9kZVN3aXRjaGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFNMEI7QUFFMkI7QUFFOUMsTUFBTUssb0JBQW9CLENBQy9CQyxRQUNHO0lBQ0gsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLGdCQUFlLEVBQUUsR0FBR1AsOERBQVlBO0lBQ25ELE1BQU1RLE9BQU9QLG1FQUFpQkEsQ0FBQyxRQUFRO0lBRXZDLHFCQUNFLDhEQUFDRix3REFBVUE7UUFDVFUsY0FBVztRQUNYQyxTQUFTSDtRQUNUSSxNQUFNTCxjQUFjLHdCQUFVLDhEQUFDSixzREFBUUEscURBQU0sOERBQUNDLHFEQUFPQSxvQ0FBRzs7Ozs7O0FBRzlELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9yTW9kZVN3aXRjaGVyLnRzeD9mZmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEljb25CdXR0b24sXG4gIHVzZUNvbG9yTW9kZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIEljb25CdXR0b25Qcm9wcyxcbiAgU3dpdGNoLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRmFDYXQsIEZhRG9nIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBNb29uSWNvbiwgU3VuSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5cbmV4cG9ydCBjb25zdCBDb2xvck1vZGVTd2l0Y2hlciA9IChcbiAgcHJvcHM6IE9taXQ8SWNvbkJ1dHRvblByb3BzLCBcImFyaWEtbGFiZWxcIj5cbikgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3QgdGV4dCA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiZGFya1wiLCBcImxpZ2h0XCIpO1xuXG4gIHJldHVybiAoXG4gICAgPEljb25CdXR0b25cbiAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbGlnaHQgZGFyayBtb2RlXCJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgIGljb249e2NvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gPE1vb25JY29uIC8+IDogPFN1bkljb24gLz59XG4gICAgLz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiTW9vbkljb24iLCJTdW5JY29uIiwiQ29sb3JNb2RlU3dpdGNoZXIiLCJwcm9wcyIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsInRleHQiLCJhcmlhLWxhYmVsIiwib25DbGljayIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ColorModeSwitcher.tsx\n");

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorModeSwitcher */ \"./components/ColorModeSwitcher.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_2__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst Header = ()=>{\n    const backgroundCol = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"brand.100\", \"gray.700\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        height: \"727px\",\n        width: \"100%\",\n        display: \"block\",\n        pt: 36,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n            background: backgroundCol,\n            height: \"100%\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_2__.ColorModeSwitcher, {\n                justifySelf: \"flex-end\"\n            }, void 0, false, {\n                fileName: \"/Users/saraisantiago/Desktop/4geeks/old-codes/sara-tustra.github.io/components/Header.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/saraisantiago/Desktop/4geeks/old-codes/sara-tustra.github.io/components/Header.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/saraisantiago/Desktop/4geeks/old-codes/sara-tustra.github.io/components/Header.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ1I7QUFFeEQsTUFBTUksU0FBUyxJQUFNO0lBQ25CLE1BQU1DLGdCQUFnQkgsbUVBQWlCQSxDQUFDLGFBQWE7SUFDckQscUJBQ0UsOERBQUNGLGlEQUFHQTtRQUFDTSxRQUFPO1FBQVFDLE9BQU07UUFBT0MsU0FBUTtRQUFRQyxJQUFJO2tCQUNuRCw0RUFBQ1Isa0RBQUlBO1lBQUNTLFlBQVlMO1lBQWVDLFFBQU87c0JBQ3RDLDRFQUFDSCxpRUFBaUJBO2dCQUFDUSxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0FBRUEsaUVBQWVQLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IENvbG9yTW9kZVN3aXRjaGVyIH0gZnJvbSBcIi4vQ29sb3JNb2RlU3dpdGNoZXJcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sID0gdXNlQ29sb3JNb2RlVmFsdWUoXCJicmFuZC4xMDBcIiwgXCJncmF5LjcwMFwiKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGhlaWdodD1cIjcyN3B4XCIgd2lkdGg9XCIxMDAlXCIgZGlzcGxheT1cImJsb2NrXCIgcHQ9ezM2fT5cbiAgICAgIDxGbGV4IGJhY2tncm91bmQ9e2JhY2tncm91bmRDb2x9IGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgPENvbG9yTW9kZVN3aXRjaGVyIGp1c3RpZnlTZWxmPVwiZmxleC1lbmRcIiAvPlxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkNvbG9yTW9kZVN3aXRjaGVyIiwiSGVhZGVyIiwiYmFja2dyb3VuZENvbCIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsInB0IiwiYmFja2dyb3VuZCIsImp1c3RpZnlTZWxmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_2__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst IndexPage = ()=>{\n    const { toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    const backgroundCol = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"brand.100\", \"gray.700\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        height: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        background: backgroundCol,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/saraisantiago/Desktop/4geeks/old-codes/sara-tustra.github.io/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/saraisantiago/Desktop/4geeks/old-codes/sara-tustra.github.io/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTzBCO0FBQ2dCO0FBRTFDLE1BQU1JLFlBQVksSUFBTTtJQUN0QixNQUFNLEVBQUVDLGdCQUFlLEVBQUUsR0FBR0osOERBQVlBO0lBQ3hDLE1BQU1LLGdCQUFnQkosbUVBQWlCQSxDQUFDLGFBQWE7SUFFckQscUJBQ0UsOERBQUNGLGtEQUFJQTtRQUNITyxRQUFPO1FBQ1BDLFlBQVc7UUFDWEMsZ0JBQWU7UUFDZkMsWUFBWUo7a0JBRVosNEVBQUNILDBEQUFNQTs7Ozs7Ozs7OztBQUdiO0FBRUEsaUVBQWVDLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIEZsZXgsXG4gIEhlYWRpbmcsXG4gIElucHV0LFxuICB1c2VDb2xvck1vZGUsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIGNvbnN0IGJhY2tncm91bmRDb2wgPSB1c2VDb2xvck1vZGVWYWx1ZShcImJyYW5kLjEwMFwiLCBcImdyYXkuNzAwXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgYmFja2dyb3VuZD17YmFja2dyb3VuZENvbH1cbiAgICA+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sIm5hbWVzIjpbIkZsZXgiLCJ1c2VDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkhlYWRlciIsIkluZGV4UGFnZSIsInRvZ2dsZUNvbG9yTW9kZSIsImJhY2tncm91bmRDb2wiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();