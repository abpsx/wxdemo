<template>
  <div class="home">
    <button @click="handle(1)">同步通信</button>
    <button @click="handle(2)">同步通信 异步回调</button>
    <hr />
    <button @click="handle(3)">异步通信</button>
    <hr />
    <button @click="handle(4)">查看全局数据</button>
    <button @click="handle(5)">设置全局数据</button>
    <hr>
    <button @click="getNotification">查询当前浏览器是否支持[通知]功能</button>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    // const { BrowserWindow } = this.$electron.remote;
    // let win = new BrowserWindow({ width: 800, height: 600 });
    // win.loadURL("https://github.com");
  },
  methods: {
    handle(type) {
      console.log();
      let funcIndex = [
        "",
        "syncSend",
        "syncReturnSend",
        "asyncSend",
        "getWebMsg"
      ];
      let descIndex = ["", "同步通信", "同步通信", "异步通信", "获取全局参数"];
      this.log(
        `[调用方法] ${funcIndex[type]} - ${descIndex[type]} - 来自页面 : ${this.$route.name}`
      );
      this.logs(`[demoID] ${type}`);
      switch (type) {
        case 1:
          this.syncSend();
          break;
        case 2:
          this.syncReturnSend();
          break;
        case 3:
          this.asyncSend();
          break;
        case 4:
          this.getWebMsg();
          break;
        case 5:
          this.setWebMsg();
          break;
      }
    },
    syncSend() {
      let returnValue = this.$electron.ipcRenderer.sendSync(
        "synchronous-message",
        { content: "我是同步发送的内容", type: 1 }
      );
      this.logEnd(`[同步回调] %c${returnValue}`);
    },
    syncReturnSend() {
      this.$electron.ipcRenderer.sendSync("synchronous-message", {
        content: "我是同步发送的内容",
        type: 2
      });
    },
    asyncSend() {
      this.$electron.ipcRenderer.send(
        "asynchronous-message",
        "我是异步发送的内容"
      );
    },
    getWebMsg() {
      let temp = this.$electron.remote.getGlobal("sharedObject").someProperty;
      this.logEnd(`[获取参数] %c${temp}`);
    },
    setWebMsg() {
      let randomVal = Math.ceil(Math.random() * 100);
      this.$electron.remote.getGlobal("sharedObject").someProperty = Math.ceil(
        randomVal
      );
      this.logEnd(`[设置参数] %c设置全局数据为新随机数:${randomVal}`);
    },
    getNotification() {
      if (Notification.permission === "granted") {
        console.log("用户允许通知");
      } else if (Notification.permission === "denied") {
        console.log("用户拒绝通知");
      } else {
        console.log("用户还没选择，去向用户申请权限吧");
      }
    }
  }
};
</script>
<style>
button {
  margin-left: 10px;
}
</style>
