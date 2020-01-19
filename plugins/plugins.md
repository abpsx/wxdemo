插件说明

- index.js `入口`

- setting.js `本地配置`

* / base `基础配置`

  - redefine.js `定义c++支持的类型`
  - User32.config.js `定义user32.dll的API`
  - WxLoader.config.js `定义WxLoader.dll的API`

* / API `常用API封装`

  - callback.js `hook回调`
  - multiLogin.js `多微信登录回调`
  - getVersion.js `获取当前微信版本`

* / handle `回调对应type处理 [callback.js]`
