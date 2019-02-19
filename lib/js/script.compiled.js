"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _default = Card;
exports.default = _default;
"use strict";

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firstCard = new _Card.default('First card', 'This is a cool card', 'The Mighty Javascript Gang'); // console.log(firstCard.getName());

var greet = function greet() {
  return console.log('Hello');
};

greet();
