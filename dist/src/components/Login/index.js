"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(function (field) {
    return fieldsError[field];
  });
}

var HorizontalLoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HorizontalLoginForm, _React$Component);

  function HorizontalLoginForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HorizontalLoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HorizontalLoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    });

    return _this;
  }

  _createClass(HorizontalLoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // To disable submit button at the beginning.
      this.props.form.validateFields();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldsError = _this$props$form.getFieldsError,
          getFieldError = _this$props$form.getFieldError,
          isFieldTouched = _this$props$form.isFieldTouched; // Only show error after a field is touched.

      var usernameError = isFieldTouched("username") && getFieldError("username");
      var passwordError = isFieldTouched("password") && getFieldError("password");
      return _react.default.createElement("div", {
        className: "Login"
      }, _react.default.createElement(_antd.Form, {
        layout: "inline",
        onSubmit: this.handleSubmit
      }, _react.default.createElement("h3", null, "Login"), _react.default.createElement(_antd.Form.Item, {
        validateStatus: usernameError ? "error" : "",
        help: usernameError || ""
      }, getFieldDecorator("username", {
        rules: [{
          required: true,
          message: "Please input your username!"
        }]
      })(_react.default.createElement(_antd.Input, {
        prefix: _react.default.createElement(_antd.Icon, {
          type: "user",
          style: {
            color: "rgba(0,0,0,.25)"
          }
        }),
        placeholder: "Username"
      }))), _react.default.createElement(_antd.Form.Item, {
        validateStatus: passwordError ? "error" : "",
        help: passwordError || ""
      }, getFieldDecorator("password", {
        rules: [{
          required: true,
          message: "Please input your Password!"
        }]
      })(_react.default.createElement(_antd.Input, {
        prefix: _react.default.createElement(_antd.Icon, {
          type: "lock",
          style: {
            color: "rgba(0,0,0,.25)"
          }
        }),
        type: "password",
        placeholder: "Password"
      }))), _react.default.createElement(_antd.Form.Item, null, _react.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        disabled: hasErrors(getFieldsError())
      }, "Log in"))));
    }
  }]);

  return HorizontalLoginForm;
}(_react.default.Component);

var WrappedHorizontalLoginForm = _antd.Form.create({
  name: "horizontal_login"
})(HorizontalLoginForm);

var _default = WrappedHorizontalLoginForm;
exports.default = _default;

//# sourceMappingURL=index.js.map