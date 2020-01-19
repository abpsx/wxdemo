// 重新定义为c++支持的类型
// 参数带下划线'_'的 需要new
const Struct = require("ref-struct");
const ref = require("ref");

const _rect = Struct({
  left: "long",
  top: "long",
  right: "long",
  bottom: "long"
});

const rectPtr = ref.refType(_rect);
module.exports = { _rect, rectPtr };
