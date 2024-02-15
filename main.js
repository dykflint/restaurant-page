/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHomePage(){
    // Set the content of the home page to empty
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = "";
    // Welcome Paragraph
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.innerText = "Welcome to Lynn's Table";
    welcomeParagraph.setAttribute('id', 'welcome-message');
    // Introduction text
    const introductionParagraph = document.createElement('p');
    introductionParagraph.innerText = "Here at Lynn's we pride ourselves in a lively atmosphere and our delicious food. Come and join the fun and festivities.";
    introductionParagraph.setAttribute('id', 'introduction');
    // Information Div (Hours, location, contact)
    const informationDiv = document.createElement('div');
    informationDiv.setAttribute('id', 'information');
    const hoursDiv = document.createElement('div');
    hoursDiv.setAttribute('id', 'hours');
    hoursDiv.innerText = 'Hours: Mon-Sun: 8AM-8PM';
    const locationDiv = document.createElement('div');
    locationDiv.setAttribute('id', 'location');
    locationDiv.innerText = 'Location: 123 Street, Royal Woods, Michigan';
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact');
    contactDiv.innerText = 'Contact us: 555-LOUD';
    // Add hours, location and contact to informationDiv
    informationDiv.appendChild(hoursDiv);
    informationDiv.appendChild(locationDiv);
    informationDiv.appendChild(contactDiv);
    // Add welcomeParagraph, introductionParagraph and informationDiv to Content
    contentDiv.appendChild(welcomeParagraph);
    contentDiv.appendChild(introductionParagraph);
    contentDiv.appendChild(informationDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_lasagna_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/lasagna.png */ "./src/images/lasagna.png");
/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza.png */ "./src/images/pizza.png");
/* harmony import */ var _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/spaghetti.png */ "./src/images/spaghetti.png");
/* harmony import */ var _images_dumpling_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dumpling.png */ "./src/images/dumpling.png");





function createMenu() {
    // Set the content of the home page to empty
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = "";
    // Menu div and its items
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');
    const lasagna = createMenuItem("lasagna", "Lynn's Lasagna", "12$", _images_lasagna_png__WEBPACK_IMPORTED_MODULE_0__, "left");
    const pizza = createMenuItem("pizza", "Lynn's Pizza", "18$", _images_pizza_png__WEBPACK_IMPORTED_MODULE_1__, "right");
    const spaghetti = createMenuItem("spaghetti", "Lynn's Spaghettii", "18$", _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_2__, "left");
    const dumplings = createMenuItem("dumplings", "Lynn's Dumplings", "12$", _images_dumpling_png__WEBPACK_IMPORTED_MODULE_3__, "right");
    // Append all menu items to menu div
    menuDiv.appendChild(lasagna);
    menuDiv.appendChild(pizza);
    menuDiv.appendChild(spaghetti);
    menuDiv.appendChild(dumplings);
    contentDiv.appendChild(menuDiv);
}

function createMenuItem(idName, itemName, price, imgSource, imgPosition){
    // Item Div
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('id', idName);
    // Name
    const pName = document.createElement('p');
    pName.innerText = itemName;
    // Price
    const pPrice = document.createElement('p');
    pPrice.innerText = price;
    pPrice.setAttribute('id', 'price');
    // Image
    const itemImg = document.createElement('img');
    itemImg.setAttribute('id', imgPosition);
    itemImg.src = imgSource;
    // Append all children to itemDiv
    itemDiv.appendChild(pName);
    itemDiv.appendChild(pPrice);
    itemDiv.appendChild(itemImg);

    return itemDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/images/dumpling.png":
/*!*********************************!*\
  !*** ./src/images/dumpling.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64a063281fc5c475f4fe.png";

/***/ }),

/***/ "./src/images/lasagna.png":
/*!********************************!*\
  !*** ./src/images/lasagna.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86164521dbf82dbd417c.png";

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19859826a42569a17ed4.png";

/***/ }),

/***/ "./src/images/spaghetti.png":
/*!**********************************!*\
  !*** ./src/images/spaghetti.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d44e341858984f2be007.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');

homeButton.addEventListener("click", _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
menuButton.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
// default page is home page
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2M7QUFDSjtBQUNRO0FBQ0Q7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGdEQUFPO0FBQzlFLGlFQUFpRSw4Q0FBSztBQUN0RSw4RUFBOEUsa0RBQVM7QUFDdkYsNkVBQTZFLGlEQUFTO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9DekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQnVDO0FBQ0o7O0FBRW5DO0FBQ0E7O0FBRUEscUNBQXFDLGdEQUFjO0FBQ25ELHFDQUFxQyxnREFBVTtBQUMvQztBQUNBLG9EQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCl7XG4gICAgLy8gU2V0IHRoZSBjb250ZW50IG9mIHRoZSBob21lIHBhZ2UgdG8gZW1wdHlcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy8gV2VsY29tZSBQYXJhZ3JhcGhcbiAgICBjb25zdCB3ZWxjb21lUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlbGNvbWVQYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIEx5bm4ncyBUYWJsZVwiO1xuICAgIHdlbGNvbWVQYXJhZ3JhcGguc2V0QXR0cmlidXRlKCdpZCcsICd3ZWxjb21lLW1lc3NhZ2UnKTtcbiAgICAvLyBJbnRyb2R1Y3Rpb24gdGV4dFxuICAgIGNvbnN0IGludHJvZHVjdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbnRyb2R1Y3Rpb25QYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJIZXJlIGF0IEx5bm4ncyB3ZSBwcmlkZSBvdXJzZWx2ZXMgaW4gYSBsaXZlbHkgYXRtb3NwaGVyZSBhbmQgb3VyIGRlbGljaW91cyBmb29kLiBDb21lIGFuZCBqb2luIHRoZSBmdW4gYW5kIGZlc3Rpdml0aWVzLlwiO1xuICAgIGludHJvZHVjdGlvblBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ludHJvZHVjdGlvbicpO1xuICAgIC8vIEluZm9ybWF0aW9uIERpdiAoSG91cnMsIGxvY2F0aW9uLCBjb250YWN0KVxuICAgIGNvbnN0IGluZm9ybWF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb3JtYXRpb25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvcm1hdGlvbicpO1xuICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdob3VycycpO1xuICAgIGhvdXJzRGl2LmlubmVyVGV4dCA9ICdIb3VyczogTW9uLVN1bjogOEFNLThQTSc7XG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb25EaXYuaW5uZXJUZXh0ID0gJ0xvY2F0aW9uOiAxMjMgU3RyZWV0LCBSb3lhbCBXb29kcywgTWljaGlnYW4nO1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICAgIGNvbnRhY3REaXYuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgdXM6IDU1NS1MT1VEJztcbiAgICAvLyBBZGQgaG91cnMsIGxvY2F0aW9uIGFuZCBjb250YWN0IHRvIGluZm9ybWF0aW9uRGl2XG4gICAgaW5mb3JtYXRpb25EaXYuYXBwZW5kQ2hpbGQoaG91cnNEaXYpO1xuICAgIGluZm9ybWF0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcbiAgICBpbmZvcm1hdGlvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcbiAgICAvLyBBZGQgd2VsY29tZVBhcmFncmFwaCwgaW50cm9kdWN0aW9uUGFyYWdyYXBoIGFuZCBpbmZvcm1hdGlvbkRpdiB0byBDb250ZW50XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh3ZWxjb21lUGFyYWdyYXBoKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGludHJvZHVjdGlvblBhcmFncmFwaCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbmZvcm1hdGlvbkRpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lUGFnZTsiLCJpbXBvcnQgTGFzYWduYSBmcm9tICcuL2ltYWdlcy9sYXNhZ25hLnBuZyc7XG5pbXBvcnQgUGl6emEgZnJvbSAnLi9pbWFnZXMvcGl6emEucG5nJztcbmltcG9ydCBTcGFnaGV0dGkgZnJvbSAnLi9pbWFnZXMvc3BhZ2hldHRpLnBuZyc7XG5pbXBvcnQgRHVtcGxpbmdzIGZyb20gJy4vaW1hZ2VzL2R1bXBsaW5nLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgLy8gU2V0IHRoZSBjb250ZW50IG9mIHRoZSBob21lIHBhZ2UgdG8gZW1wdHlcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy8gTWVudSBkaXYgYW5kIGl0cyBpdGVtc1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGNvbnN0IGxhc2FnbmEgPSBjcmVhdGVNZW51SXRlbShcImxhc2FnbmFcIiwgXCJMeW5uJ3MgTGFzYWduYVwiLCBcIjEyJFwiLCBMYXNhZ25hLCBcImxlZnRcIik7XG4gICAgY29uc3QgcGl6emEgPSBjcmVhdGVNZW51SXRlbShcInBpenphXCIsIFwiTHlubidzIFBpenphXCIsIFwiMTgkXCIsIFBpenphLCBcInJpZ2h0XCIpO1xuICAgIGNvbnN0IHNwYWdoZXR0aSA9IGNyZWF0ZU1lbnVJdGVtKFwic3BhZ2hldHRpXCIsIFwiTHlubidzIFNwYWdoZXR0aWlcIiwgXCIxOCRcIiwgU3BhZ2hldHRpLCBcImxlZnRcIik7XG4gICAgY29uc3QgZHVtcGxpbmdzID0gY3JlYXRlTWVudUl0ZW0oXCJkdW1wbGluZ3NcIiwgXCJMeW5uJ3MgRHVtcGxpbmdzXCIsIFwiMTIkXCIsIER1bXBsaW5ncywgXCJyaWdodFwiKTtcbiAgICAvLyBBcHBlbmQgYWxsIG1lbnUgaXRlbXMgdG8gbWVudSBkaXZcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGxhc2FnbmEpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQocGl6emEpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoc3BhZ2hldHRpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGR1bXBsaW5ncyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaWROYW1lLCBpdGVtTmFtZSwgcHJpY2UsIGltZ1NvdXJjZSwgaW1nUG9zaXRpb24pe1xuICAgIC8vIEl0ZW0gRGl2XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gICAgLy8gTmFtZVxuICAgIGNvbnN0IHBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBOYW1lLmlubmVyVGV4dCA9IGl0ZW1OYW1lO1xuICAgIC8vIFByaWNlXG4gICAgY29uc3QgcFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBQcmljZS5pbm5lclRleHQgPSBwcmljZTtcbiAgICBwUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdwcmljZScpO1xuICAgIC8vIEltYWdlXG4gICAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGl0ZW1JbWcuc2V0QXR0cmlidXRlKCdpZCcsIGltZ1Bvc2l0aW9uKTtcbiAgICBpdGVtSW1nLnNyYyA9IGltZ1NvdXJjZTtcbiAgICAvLyBBcHBlbmQgYWxsIGNoaWxkcmVuIHRvIGl0ZW1EaXZcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHBOYW1lKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHBQcmljZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcblxuICAgIHJldHVybiBpdGVtRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnV0dG9uJyk7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnV0dG9uJyk7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUhvbWVQYWdlKTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU1lbnUpO1xuLy8gZGVmYXVsdCBwYWdlIGlzIGhvbWUgcGFnZVxuY3JlYXRlSG9tZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=