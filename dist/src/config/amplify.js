"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awsAmplify = _interopRequireDefault(require("aws-amplify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var amplifyConfig = function amplifyConfig() {
  _awsAmplify.default.configure({
    Auth: {
      mandatorySignIn: true,
      // REQUIRED - Amazon Cognito Region
      region: process.env.REACT_APP_AWS_REGION,
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_AWS_APP_CLIENT_ID
    }
  });
};

var _default = amplifyConfig;
exports.default = _default;

//# sourceMappingURL=amplify.js.map