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

/***/ "./src/images/lynn.svg":
/*!*****************************!*\
  !*** ./src/images/lynn.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e17ecee56ef1cf437fa3.svg";

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
/* harmony import */ var _images_lynn_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/lynn.svg */ "./src/images/lynn.svg");




const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const headerImageDiv = document.querySelector('#header-image');
// add header image
headerImageDiv.setAttribute('id', 'header-image');
const headerImage = new Image();
headerImage.src = _images_lynn_svg__WEBPACK_IMPORTED_MODULE_2__;
headerImageDiv.appendChild(headerImage);
homeButton.addEventListener("click", _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
menuButton.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
// default page is home page
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2M7QUFDSjtBQUNRO0FBQ0Q7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGdEQUFPO0FBQzlFLGlFQUFpRSw4Q0FBSztBQUN0RSw4RUFBOEUsa0RBQVM7QUFDdkYsNkVBQTZFLGlEQUFTO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCdUM7QUFDSjtBQUNROztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVU7QUFDNUI7QUFDQSxxQ0FBcUMsZ0RBQWM7QUFDbkQscUNBQXFDLGdEQUFVO0FBQy9DO0FBQ0Esb0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKXtcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIGhvbWUgcGFnZSB0byBlbXB0eVxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyBXZWxjb21lIFBhcmFncmFwaFxuICAgIGNvbnN0IHdlbGNvbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VsY29tZVBhcmFncmFwaC5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gTHlubidzIFRhYmxlXCI7XG4gICAgd2VsY29tZVBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlbGNvbWUtbWVzc2FnZScpO1xuICAgIC8vIEludHJvZHVjdGlvbiB0ZXh0XG4gICAgY29uc3QgaW50cm9kdWN0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGludHJvZHVjdGlvblBhcmFncmFwaC5pbm5lclRleHQgPSBcIkhlcmUgYXQgTHlubidzIHdlIHByaWRlIG91cnNlbHZlcyBpbiBhIGxpdmVseSBhdG1vc3BoZXJlIGFuZCBvdXIgZGVsaWNpb3VzIGZvb2QuIENvbWUgYW5kIGpvaW4gdGhlIGZ1biBhbmQgZmVzdGl2aXRpZXMuXCI7XG4gICAgaW50cm9kdWN0aW9uUGFyYWdyYXBoLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW50cm9kdWN0aW9uJyk7XG4gICAgLy8gSW5mb3JtYXRpb24gRGl2IChIb3VycywgbG9jYXRpb24sIGNvbnRhY3QpXG4gICAgY29uc3QgaW5mb3JtYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvcm1hdGlvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm9ybWF0aW9uJyk7XG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzJyk7XG4gICAgaG91cnNEaXYuaW5uZXJUZXh0ID0gJ0hvdXJzOiBNb24tU3VuOiA4QU0tOFBNJztcbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbkRpdi5pbm5lclRleHQgPSAnTG9jYXRpb246IDEyMyBTdHJlZXQsIFJveWFsIFdvb2RzLCBNaWNoaWdhbic7XG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gICAgY29udGFjdERpdi5pbm5lclRleHQgPSAnQ29udGFjdCB1czogNTU1LUxPVUQnO1xuICAgIC8vIEFkZCBob3VycywgbG9jYXRpb24gYW5kIGNvbnRhY3QgdG8gaW5mb3JtYXRpb25EaXZcbiAgICBpbmZvcm1hdGlvbkRpdi5hcHBlbmRDaGlsZChob3Vyc0Rpdik7XG4gICAgaW5mb3JtYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuICAgIGluZm9ybWF0aW9uRGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuICAgIC8vIEFkZCB3ZWxjb21lUGFyYWdyYXBoLCBpbnRyb2R1Y3Rpb25QYXJhZ3JhcGggYW5kIGluZm9ybWF0aW9uRGl2IHRvIENvbnRlbnRcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHdlbGNvbWVQYXJhZ3JhcGgpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW50cm9kdWN0aW9uUGFyYWdyYXBoKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluZm9ybWF0aW9uRGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlOyIsImltcG9ydCBMYXNhZ25hIGZyb20gJy4vaW1hZ2VzL2xhc2FnbmEucG5nJztcbmltcG9ydCBQaXp6YSBmcm9tICcuL2ltYWdlcy9waXp6YS5wbmcnO1xuaW1wb3J0IFNwYWdoZXR0aSBmcm9tICcuL2ltYWdlcy9zcGFnaGV0dGkucG5nJztcbmltcG9ydCBEdW1wbGluZ3MgZnJvbSAnLi9pbWFnZXMvZHVtcGxpbmcucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIGhvbWUgcGFnZSB0byBlbXB0eVxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyBNZW51IGRpdiBhbmQgaXRzIGl0ZW1zXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgY29uc3QgbGFzYWduYSA9IGNyZWF0ZU1lbnVJdGVtKFwibGFzYWduYVwiLCBcIkx5bm4ncyBMYXNhZ25hXCIsIFwiMTIkXCIsIExhc2FnbmEsIFwibGVmdFwiKTtcbiAgICBjb25zdCBwaXp6YSA9IGNyZWF0ZU1lbnVJdGVtKFwicGl6emFcIiwgXCJMeW5uJ3MgUGl6emFcIiwgXCIxOCRcIiwgUGl6emEsIFwicmlnaHRcIik7XG4gICAgY29uc3Qgc3BhZ2hldHRpID0gY3JlYXRlTWVudUl0ZW0oXCJzcGFnaGV0dGlcIiwgXCJMeW5uJ3MgU3BhZ2hldHRpaVwiLCBcIjE4JFwiLCBTcGFnaGV0dGksIFwibGVmdFwiKTtcbiAgICBjb25zdCBkdW1wbGluZ3MgPSBjcmVhdGVNZW51SXRlbShcImR1bXBsaW5nc1wiLCBcIkx5bm4ncyBEdW1wbGluZ3NcIiwgXCIxMiRcIiwgRHVtcGxpbmdzLCBcInJpZ2h0XCIpO1xuICAgIC8vIEFwcGVuZCBhbGwgbWVudSBpdGVtcyB0byBtZW51IGRpdlxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobGFzYWduYSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChwaXp6YSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChzcGFnaGV0dGkpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZHVtcGxpbmdzKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpZE5hbWUsIGl0ZW1OYW1lLCBwcmljZSwgaW1nU291cmNlLCBpbWdQb3NpdGlvbil7XG4gICAgLy8gSXRlbSBEaXZcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICAvLyBOYW1lXG4gICAgY29uc3QgcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcE5hbWUuaW5uZXJUZXh0ID0gaXRlbU5hbWU7XG4gICAgLy8gUHJpY2VcbiAgICBjb25zdCBwUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcFByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xuICAgIHBQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaWNlJyk7XG4gICAgLy8gSW1hZ2VcbiAgICBjb25zdCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaW1nUG9zaXRpb24pO1xuICAgIGl0ZW1JbWcuc3JjID0gaW1nU291cmNlO1xuICAgIC8vIEFwcGVuZCBhbGwgY2hpbGRyZW4gdG8gaXRlbURpdlxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQocE5hbWUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQocFByaWNlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuXG4gICAgcmV0dXJuIGl0ZW1EaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgTHlubnNUYWJsZSBmcm9tICcuL2ltYWdlcy9seW5uLnN2Zyc7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idXR0b24nKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKTtcbmNvbnN0IGhlYWRlckltYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1pbWFnZScpO1xuLy8gYWRkIGhlYWRlciBpbWFnZVxuaGVhZGVySW1hZ2VEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItaW1hZ2UnKTtcbmNvbnN0IGhlYWRlckltYWdlID0gbmV3IEltYWdlKCk7XG5oZWFkZXJJbWFnZS5zcmMgPSBMeW5uc1RhYmxlO1xuaGVhZGVySW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaGVhZGVySW1hZ2UpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlSG9tZVBhZ2UpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTWVudSk7XG4vLyBkZWZhdWx0IHBhZ2UgaXMgaG9tZSBwYWdlXG5jcmVhdGVIb21lUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==