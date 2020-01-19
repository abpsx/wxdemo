// 注册wxLoader.dll的API
const ffi = require("ffi");
const path = require("path");
WxLoaderFile = path.resolve() + "\\Library\\WxLoader.dll";

module.exports = ffi.Library(WxLoaderFile, {
  UseUtf8: ["bool", []],
  InitWeChatSocket: ["bool", ["pointer", "pointer", "pointer"]],
  InjectWeChat: ["uint", ["string"]],
  SendWeChatData: ["bool", ["uint", "string"]],
  GetUserWeChatVersion: ["bool", ["pointer"]]
});
