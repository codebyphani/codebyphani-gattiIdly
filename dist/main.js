/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAboutPage)
/* harmony export */ });
function createAboutPage() {
    //export div element
    const aboutContent = ` <div class="about-section">
      <h2 class="text-primary">About Gatti Chutney</h2>
      <p class="lead"><strong>Authenticity. Quality. Simplicity.</strong></p>
      <p>Gatti Chutney was born out of a love for authentic South Indian breakfast and a passion for creating chutneys that elevate every dish. Our mission is to provide a simple yet extraordinary dining experience, focusing on high-quality ingredients and traditional recipes.</p>
      <h3>Our Philosophy</h3>
      <ul class="list-group">
        <li class="list-group-item"><strong>In-House Preparation:</strong> Every item on our menu is prepared fresh in-house, ensuring top-notch quality and flavor.</li>
        <li class="list-group-item"><strong>Signature Chutneys:</strong> Our chutneys are the heart of our menu, crafted with care and unique ingredients you won't find elsewhere.</li>
        <li class="list-group-item"><strong>Simplicity and Quality:</strong> We believe in keeping things simple, with a limited menu that allows us to perfect each dish.</li>
      </ul>
      <p>Come and enjoy a breakfast experience that celebrates the essence of South Indian cuisine, right here at Gatti Chutney.</p>
    </div>`
    // Populate about document structure in content
   // divContent.innerHTML = aboutContent;
    return aboutContent
};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage)
/* harmony export */ });
function createHomePage() {
    return `
        <div class="home-section">
      <h2 class="text-primary">Welcome to Gatti Chutney</h2>
      <p class="lead">Experience the Essence of South Indian Breakfast</p>
      <p>Welcome to Gatti Chutney, where we bring you the authentic flavors of South Indian breakfast, accompanied by our signature high-quality chutneys. Every dish is crafted in-house to ensure freshness and unparalleled taste. Join us for a delightful breakfast experience like no other.</p>
    </div>`
};


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
    return `<div class="menu-section">
      <h2 class="text-primary">Our Specialties</h2>
      <ul class="list-group">
        <li class="list-group-item"><strong>Nethi Idli:</strong> Soft and fluffy idlis enriched with ghee, served with our signature chutney.</li>
        <li class="list-group-item"><strong>Onion Dosa:</strong> Crispy dosas with a savory onion filling, paired with our unique chutney.</li>
        <li class="list-group-item"><strong>Poori:</strong> Light and puffed pooris, accompanied by a special chutney blend.</li>
        <li class="list-group-item"><strong>Chutney Sampler:</strong> A selection of our finest chutneys to enjoy with any dish.</li>
      </ul>
    </div>`
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
// console.log("Let's build something decent!");




document.addEventListener('DOMContentLoaded', () => {
    let divContent = document.getElementById("content");

    function updateContent(content) {
        divContent.innerHTML = content;
    }
    updateContent((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

    //event listeners for the buttons, to update the div content based on the button clicked.

    document.getElementById("homeButton").addEventListener("click", () => updateContent((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()));
    document.getElementById("menuButton").addEventListener("click", () => updateContent((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()));
    document.getElementById("aboutButton").addEventListener("click", () => updateContent((0,_about_js__WEBPACK_IMPORTED_MODULE_0__["default"])()));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDeUM7QUFDRjtBQUNBOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBYzs7QUFFaEM7O0FBRUEsd0ZBQXdGLG9EQUFjO0FBQ3RHLHdGQUF3RixvREFBYztBQUN0Ryx5RkFBeUYscURBQWU7QUFDeEcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0UGFnZSgpIHtcbiAgICAvL2V4cG9ydCBkaXYgZWxlbWVudFxuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGAgPGRpdiBjbGFzcz1cImFib3V0LXNlY3Rpb25cIj5cbiAgICAgIDxoMiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPkFib3V0IEdhdHRpIENodXRuZXk8L2gyPlxuICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+PHN0cm9uZz5BdXRoZW50aWNpdHkuIFF1YWxpdHkuIFNpbXBsaWNpdHkuPC9zdHJvbmc+PC9wPlxuICAgICAgPHA+R2F0dGkgQ2h1dG5leSB3YXMgYm9ybiBvdXQgb2YgYSBsb3ZlIGZvciBhdXRoZW50aWMgU291dGggSW5kaWFuIGJyZWFrZmFzdCBhbmQgYSBwYXNzaW9uIGZvciBjcmVhdGluZyBjaHV0bmV5cyB0aGF0IGVsZXZhdGUgZXZlcnkgZGlzaC4gT3VyIG1pc3Npb24gaXMgdG8gcHJvdmlkZSBhIHNpbXBsZSB5ZXQgZXh0cmFvcmRpbmFyeSBkaW5pbmcgZXhwZXJpZW5jZSwgZm9jdXNpbmcgb24gaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzIGFuZCB0cmFkaXRpb25hbCByZWNpcGVzLjwvcD5cbiAgICAgIDxoMz5PdXIgUGhpbG9zb3BoeTwvaDM+XG4gICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPjxzdHJvbmc+SW4tSG91c2UgUHJlcGFyYXRpb246PC9zdHJvbmc+IEV2ZXJ5IGl0ZW0gb24gb3VyIG1lbnUgaXMgcHJlcGFyZWQgZnJlc2ggaW4taG91c2UsIGVuc3VyaW5nIHRvcC1ub3RjaCBxdWFsaXR5IGFuZCBmbGF2b3IuPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PHN0cm9uZz5TaWduYXR1cmUgQ2h1dG5leXM6PC9zdHJvbmc+IE91ciBjaHV0bmV5cyBhcmUgdGhlIGhlYXJ0IG9mIG91ciBtZW51LCBjcmFmdGVkIHdpdGggY2FyZSBhbmQgdW5pcXVlIGluZ3JlZGllbnRzIHlvdSB3b24ndCBmaW5kIGVsc2V3aGVyZS48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj48c3Ryb25nPlNpbXBsaWNpdHkgYW5kIFF1YWxpdHk6PC9zdHJvbmc+IFdlIGJlbGlldmUgaW4ga2VlcGluZyB0aGluZ3Mgc2ltcGxlLCB3aXRoIGEgbGltaXRlZCBtZW51IHRoYXQgYWxsb3dzIHVzIHRvIHBlcmZlY3QgZWFjaCBkaXNoLjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+Q29tZSBhbmQgZW5qb3kgYSBicmVha2Zhc3QgZXhwZXJpZW5jZSB0aGF0IGNlbGVicmF0ZXMgdGhlIGVzc2VuY2Ugb2YgU291dGggSW5kaWFuIGN1aXNpbmUsIHJpZ2h0IGhlcmUgYXQgR2F0dGkgQ2h1dG5leS48L3A+XG4gICAgPC9kaXY+YFxuICAgIC8vIFBvcHVsYXRlIGFib3V0IGRvY3VtZW50IHN0cnVjdHVyZSBpbiBjb250ZW50XG4gICAvLyBkaXZDb250ZW50LmlubmVySFRNTCA9IGFib3V0Q29udGVudDtcbiAgICByZXR1cm4gYWJvdXRDb250ZW50XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lLXNlY3Rpb25cIj5cbiAgICAgIDxoMiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPldlbGNvbWUgdG8gR2F0dGkgQ2h1dG5leTwvaDI+XG4gICAgICA8cCBjbGFzcz1cImxlYWRcIj5FeHBlcmllbmNlIHRoZSBFc3NlbmNlIG9mIFNvdXRoIEluZGlhbiBCcmVha2Zhc3Q8L3A+XG4gICAgICA8cD5XZWxjb21lIHRvIEdhdHRpIENodXRuZXksIHdoZXJlIHdlIGJyaW5nIHlvdSB0aGUgYXV0aGVudGljIGZsYXZvcnMgb2YgU291dGggSW5kaWFuIGJyZWFrZmFzdCwgYWNjb21wYW5pZWQgYnkgb3VyIHNpZ25hdHVyZSBoaWdoLXF1YWxpdHkgY2h1dG5leXMuIEV2ZXJ5IGRpc2ggaXMgY3JhZnRlZCBpbi1ob3VzZSB0byBlbnN1cmUgZnJlc2huZXNzIGFuZCB1bnBhcmFsbGVsZWQgdGFzdGUuIEpvaW4gdXMgZm9yIGEgZGVsaWdodGZ1bCBicmVha2Zhc3QgZXhwZXJpZW5jZSBsaWtlIG5vIG90aGVyLjwvcD5cbiAgICA8L2Rpdj5gXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWVudS1zZWN0aW9uXCI+XG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5PdXIgU3BlY2lhbHRpZXM8L2gyPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj48c3Ryb25nPk5ldGhpIElkbGk6PC9zdHJvbmc+IFNvZnQgYW5kIGZsdWZmeSBpZGxpcyBlbnJpY2hlZCB3aXRoIGdoZWUsIHNlcnZlZCB3aXRoIG91ciBzaWduYXR1cmUgY2h1dG5leS48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj48c3Ryb25nPk9uaW9uIERvc2E6PC9zdHJvbmc+IENyaXNweSBkb3NhcyB3aXRoIGEgc2F2b3J5IG9uaW9uIGZpbGxpbmcsIHBhaXJlZCB3aXRoIG91ciB1bmlxdWUgY2h1dG5leS48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj48c3Ryb25nPlBvb3JpOjwvc3Ryb25nPiBMaWdodCBhbmQgcHVmZmVkIHBvb3JpcywgYWNjb21wYW5pZWQgYnkgYSBzcGVjaWFsIGNodXRuZXkgYmxlbmQuPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PHN0cm9uZz5DaHV0bmV5IFNhbXBsZXI6PC9zdHJvbmc+IEEgc2VsZWN0aW9uIG9mIG91ciBmaW5lc3QgY2h1dG5leXMgdG8gZW5qb3kgd2l0aCBhbnkgZGlzaC48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5gXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gY29uc29sZS5sb2coXCJMZXQncyBidWlsZCBzb21ldGhpbmcgZGVjZW50IVwiKTtcbmltcG9ydCBjcmVhdGVBYm91dFBhZ2UgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9XG4gICAgdXBkYXRlQ29udGVudChjcmVhdGVIb21lUGFnZSgpKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgYnV0dG9ucywgdG8gdXBkYXRlIHRoZSBkaXYgY29udGVudCBiYXNlZCBvbiB0aGUgYnV0dG9uIGNsaWNrZWQuXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHVwZGF0ZUNvbnRlbnQoY3JlYXRlSG9tZVBhZ2UoKSkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdXBkYXRlQ29udGVudChjcmVhdGVNZW51UGFnZSgpKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdXBkYXRlQ29udGVudChjcmVhdGVBYm91dFBhZ2UoKSkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=