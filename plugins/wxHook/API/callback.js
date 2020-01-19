module.exports = (win, iClientId, jsonData) => {
  console.log("win :", win.getTitle());
  console.log("jsonData :", jsonData.type);
  //   if (jsonData.type == 11025) {
  //   } else if (jsonData.type == 11088) {
  //   }
};

// setTimeout(function() {
//   var msgData = {
//     type: 11036,
//     data: {
//       to_wxid: "filehelper",
//       content: "该消息来自Node.Js"
//     }
//   };
//   // 发送文本消息
//   _WxLoader.SendWeChatData(iClientId, JSON.stringify(msgData));
// }, 1000);

// setInterval(() => {
//   _User32.GetWindowRect(
//     jsonData.data.main_hwnd,
//     rec_struct["ref.buffer"]
//   );
//   console.log(
//     "rec_struct :",
//     rec_struct.top,
//     rec_struct.bottom,
//     rec_struct.left,
//     rec_struct.right
//   );
//   if (rec_struct.top !== rec_struct.bottom) {
//     win.setPosition(rec_struct.right, rec_struct.top, true);
//   }
// }, 20);
