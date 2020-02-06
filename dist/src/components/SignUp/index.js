"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _awsAmplify = require("aws-amplify");

var _jemikanegaraCraGraphql = _interopRequireDefault(require("@bit/jemikanegara.cra-graphql.amplify-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _jemikanegaraCraGraphql.default)();

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(function (field) {
    return fieldsError[field];
  });
}

var SignUp = function SignUp(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isRegistered = _useState2[0],
      setIsRegistered = _useState2[1]; // Component Loaded


  (0, _react.useEffect)(function () {
    // To disable submit button at the beginning.
    var validateForm = function validateForm() {
      props.form.validateFields();
    };

    validateForm(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // On Submit Handler

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields(function (err, values) {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });

    var _props$form$getFields = props.form.getFieldsValue(),
        email = _props$form$getFields.email,
        password = _props$form$getFields.password;

    _awsAmplify.Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email
      }
    }).then(function (data) {
      var user = data.user;
      if (user) setIsRegistered(true);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var _props$form = props.form,
      getFieldDecorator = _props$form.getFieldDecorator,
      getFieldsError = _props$form.getFieldsError,
      getFieldError = _props$form.getFieldError,
      isFieldTouched = _props$form.isFieldTouched; // Only show error after a field is touched.

  var emailError = isFieldTouched("email") && getFieldError("email");
  var passwordError = isFieldTouched("password") && getFieldError("password");
  return _react.default.createElement("div", null, isRegistered && _react.default.createElement(_antd.Result, {
    status: "success",
    title: "Email successfully registered",
    subTitle: "Please check email on your email"
  }), !isRegistered && _react.default.createElement(_antd.Form, {
    layout: "inline",
    onSubmit: handleSubmit
  }, _react.default.createElement("h3", null, "Sign Up"), _react.default.createElement(_antd.Form.Item, {
    validateStatus: emailError ? "error" : "",
    help: emailError || ""
  }, getFieldDecorator("email", {
    rules: [{
      required: true,
      message: "Please input your email!"
    }]
  })(_react.default.createElement(_antd.Input, {
    prefix: _react.default.createElement(_antd.Icon, {
      type: "user",
      style: {
        color: "rgba(0,0,0,.25)"
      }
    }),
    placeholder: "Email"
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
  }, "Sign Up"))));
};

var WrappedHorizontalSignUpForm = _antd.Form.create({
  name: "horizontal_signup"
})(SignUp);

var _default = WrappedHorizontalSignUpForm;
exports.default = _default;

//# sourceMappingURL=index.js.map