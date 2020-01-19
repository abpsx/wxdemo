// 注册user32.dll的API
const ffi = require("ffi");
const { rectPtr } = require("./redefine");

module.exports = ffi.Library("user32", {
  GetWindowRect: ["bool", ["long", rectPtr]]
});
