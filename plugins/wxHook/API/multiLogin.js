const path = require("path");

module.exports = WxLoader => {
  WeChatHelperFile = path.resolve() + "\\Library\\WeChatHelper.dll";
  let result = WxLoader.InjectWeChat(WeChatHelperFile);
  console.log("微信进程号: " + result);
};
