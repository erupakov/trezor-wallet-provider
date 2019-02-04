"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _hookedWallet = _interopRequireDefault(require("./hooked-wallet"));

var _TrezorWallet = _interopRequireDefault(require("./TrezorWallet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function _default(networkId, accountsOffset, accountsQuantity, eventEmitter) {
  if (networkId == null) {
    networkId = 1; //default to mainnet network id
  }

  const trezor = new _TrezorWallet.default(networkId, accountsOffset, accountsQuantity, eventEmitter);
  return new _hookedWallet.default(trezor);
}