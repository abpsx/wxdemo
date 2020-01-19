const ffi = require("ffi");

const WxLoader = require("./base/WxLoader.config");
const setting = require("./setting");

const getVersion = require("./API/getVersion");
const multiLogin = require("./API/multiLogin");
const callback = require("./API/callback");

module.exports = win => {
  const _WxLoader = WxLoader;

  _WxLoader.UseUtf8();

  const version = getVersion(_WxLoader, setting);
  let sWeChatHelperVersion = setting.version;
  if (version !== sWeChatHelperVersion) {
    process.exit();
  }

  const InitWeChat = win => {
    const ConnectCallback = ffi.Callback("void", ["int"], iClientId => {
      console.log("ConnectCallback: " + iClientId);
    });
    const CloseCallback = ffi.Callback("void", ["int"], iClientId => {
      console.log("CloseCallback: " + iClientId);
    });
    const RecvCallback = ffi.Callback("void", ["int", "string", "int"], (iClientId, data, dataSize) => {
      win.iClientId = iClientId;
      callback(win, iClientId, JSON.parse(data));
    });
    return () => {
      console.log("InitWeChatSocket");
      _WxLoader.InitWeChatSocket(ConnectCallback, RecvCallback, CloseCallback);
    };
  };
  InitWeChat(win)();

  multiLogin(_WxLoader);

  (async () => {
    setInterval(() => {}, 60);
    while (true) {
      await new Promise(resolve => {
        setImmediate(() => {
          resolve();
        });
      });
    }
  })();
};
