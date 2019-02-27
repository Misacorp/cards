/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cards.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Card.js":
/*!*********************!*\
  !*** ./src/Card.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card =
/*#__PURE__*/
function () {
  /**
   * Creates a new Card.
   *
   * @param {string} title        Card title
   * @param {string} description  Card description
   * @param {string} faction      Faction the card belongs to
   */
  function Card(title, description, faction) {
    _classCallCheck(this, Card);

    this.title = title;
    this.description = description;
    this.faction = faction;
  }

  _createClass(Card, [{
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }]);

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/CardStack.js":
/*!**************************!*\
  !*** ./src/CardStack.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/Card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CardStack =
/*#__PURE__*/
function () {
  /**
   * Creates a stack of cards.
   */
  function CardStack() {
    _classCallCheck(this, CardStack);

    this.stack = [];
  }
  /**
   * Add a Card to the stack.
   * @param {Card} card Card to add
   */


  _createClass(CardStack, [{
    key: "addCard",
    value: function addCard(card) {
      if (card instanceof _Card__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        this.stack.push(card);
        return this.stack.length;
      }

      throw new TypeError('Tried to add non-card object into card stack.');
    }
    /**
     * Get number remaining cards in the array.
     * @returns {number} Number of cards left.
     */

  }, {
    key: "size",
    value: function size() {
      return this.stack.length;
    }
    /**
     * Draw a specific number of cards.
     * @param {number} amount Number of cards to draw. Defaults to 1.
     * @returns {Card|array[Card]} Single card or array of cards.
     */

  }, {
    key: "draw",
    value: function draw() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      // If only one card is being drawn, return a Card object
      if (amount === 1 && this.stack.length > 0) {
        return this.stack.pop();
      } // Multiple drawn cards are returned in an array.


      var drawnCards = []; // Draw the amount of cards we wanted.

      for (var i = 0; i < amount; i += 1) {
        // Stop drawing if the stack is empty.
        if (this.stack.length < 1) {
          break;
        }

        var card = this.stack.pop();
        drawnCards.push(card);
      }

      return drawnCards;
    }
    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     */

  }, {
    key: "shuffle",
    value: function shuffle() {
      var stack = this.stack;

      for (var i = this.stack.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [stack[j], stack[i]];
        stack[i] = _ref[0];
        stack[j] = _ref[1];
      }

      return stack;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      var _this = this;

      return {
        next: function next() {
          return {
            value: _this.draw(1),
            done: _this.stack.length > 0
          };
        }
      };
    }
  }]);

  return CardStack;
}();

/* harmony default export */ __webpack_exports__["default"] = (CardStack);

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/Card.js");
/* harmony import */ var _CardStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardStack */ "./src/CardStack.js");

 // Create a card stack

var stack = new _CardStack__WEBPACK_IMPORTED_MODULE_1__["default"](); // Add some cards to it

var maxCards = 10;

for (var i = 0; i < maxCards; i += 1) {
  var newCard = new _Card__WEBPACK_IMPORTED_MODULE_0__["default"]("Number ".concat(i + 1), "This is the number ".concat(i + 1, " card"), 'First card gang');
  stack.addCard(newCard);
} // Do something with the stack


stack.shuffle();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = stack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    card = _step.value;
    console.log('Iterating through the stack');
    console.log(card); //console.log(card.getTitle());
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

for (var _i = 0; _i < stack.size(); _i += 1) {
  var _card = stack.draw();

  console.log(_card.getTitle());
} // const cards = stack.draw(3);
// console.log('You drew some cards:', cards);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map