module.exports = WxLoader => {
  // 获取微信版本
  var wxVersionBuffer = Buffer.alloc(20, "\0", "binary");
  WxLoader.GetUserWeChatVersion(wxVersionBuffer);
  return wxVersionBuffer.toString("binary").replace(/\0+$/, "");
};
