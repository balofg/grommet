'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _RadioButton = require('../RadioButton/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleRadioButton = function (_Component) {
  _inherits(SimpleRadioButton, _Component);

  function SimpleRadioButton() {
    _classCallCheck(this, SimpleRadioButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleRadioButton.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_RadioButton2.default, { label: 'Choice 1', name: 'radio' }),
      _react2.default.createElement(_RadioButton2.default, { label: 'Choice 2', name: 'radio' })
    );
  };

  return SimpleRadioButton;
}(_react.Component);

var FocusedRadioButton = function (_Component2) {
  _inherits(FocusedRadioButton, _Component2);

  function FocusedRadioButton() {
    var _temp, _this2, _ret;

    _classCallCheck(this, FocusedRadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.ref = _react2.default.createRef(), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  FocusedRadioButton.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedRadioButton.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_RadioButton2.default, { ref: this.ref, label: 'Choice 1', name: 'radio' }),
      _react2.default.createElement(_RadioButton2.default, { label: 'Choice 2', name: 'radio' })
    );
  };

  return FocusedRadioButton;
}(_react.Component);

(0, _react3.storiesOf)('RadioButton', module).add('Simple RadioButton', function () {
  return _react2.default.createElement(SimpleRadioButton, null);
}).add('Focused RadioButton', function () {
  return _react2.default.createElement(FocusedRadioButton, null);
});