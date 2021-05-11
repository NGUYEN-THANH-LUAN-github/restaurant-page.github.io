/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomeContent\": () => (/* binding */ loadHomeContent)\n/* harmony export */ });\nconst loadHomeContent = (content) => {\r\n    document.querySelector('[data-home]').style.cssText = \"text-decoration: 1px underline; text-underline-offset: 4px;\"\r\n    content.innerHTML = \"\";\r\n    content.innerHTML = '<h1 class=\"display-1\">A Night In Paris</h1>'\r\n    content.style.cssText = 'height: 90vh;'\r\n    document.querySelector('footer').style.cssText = 'position: fixed; bottom: 0;'\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page.github.io/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\nconst content = document.querySelector('#content')\r\nconst headerOptions = document.querySelectorAll('.header-option')\r\n\r\nheaderOptions.forEach(el => el.addEventListener('click', () => {\r\n    headerOptions.forEach(el => {\r\n        el.style.removeProperty('text-decoration');\r\n    })\r\n}))\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomeContent)(content)\r\n});\r\n\r\ndocument.querySelector('[data-home]').addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomeContent)(content)\r\n});\r\ndocument.querySelector('[data-menu]').addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)(content);\r\n});\n\n//# sourceURL=webpack://restaurant-page.github.io/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = (content) => {\r\n    document.querySelector('[data-menu]').style.cssText = \"text-decoration: 1px underline; text-underline-offset: 4px;\"\r\n\r\n    content.innerHTML = \"\";\r\n    content.innerHTML += `\r\n    <div class=\"menu gx-5\"> \r\n        <div class = \"row\" id = \"menu-content\"></div> \r\n    </div > `\r\n\r\n    const menu = content.querySelector('#menu-content')\r\n    for (let i = 1; i <= 8; i++) {\r\n        menu.innerHTML += `\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card mb-3 bg-dark\">\r\n                <div class=\"container mt-3\" style=\"height: 12rem\">\r\n                    <img src=\"./images/menu/${i}.jpg\" class=\"card-img-top\">\r\n                </div>\r\n                <div class=\"card-body text-center\">\r\n                    <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary shadow-none\">View More</a>\r\n                </div>\r\n            </div>\r\n        </div>`\r\n    }\r\n\r\n    content.style.removeProperty('height')\r\n    const footer = document.querySelector('footer')\r\n    footer.style.cssText = 'position: relative;'\r\n    footer.removeProperty('bottom')\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page.github.io/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;