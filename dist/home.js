webpackJsonp([1],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.handleCountDownClick = function () {
            return _this.__handleCountDownClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Home, [{
        key: '__handleCountDownClick__REACT_HOT_LOADER__',
        value: function __handleCountDownClick__REACT_HOT_LOADER__() {
            return this.__handleCountDownClick__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__handleCountDownClick__REACT_HOT_LOADER__',
        value: function __handleCountDownClick__REACT_HOT_LOADER__() {
            this.setState({
                count: this.state.count++
            });
            console.log(124);
            console.log(this.state.count);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u6211\u662F\u9996\u9875\uFF0C\u5F53\u524D\u5012\u8BA1\u65F6\uFF1A',
                this.state.count,
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.handleCountDownClick },
                    '\u589E\u52A0'
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

var _default = Home;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/qinyue/Desktop/guo/react-family/src/pages/Home/Home.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/qinyue/Desktop/guo/react-family/src/pages/Home/Home.js');
}();

;

/***/ })

});