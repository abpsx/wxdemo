<template>
  <div class="home">
    <button @click="handle(1)">同步通信</button>
    <button @click="handle(2)">同步通信 异步回调</button>
    <hr />
    <button @click="handle(3)">异步通信</button>
    <hr />
    <button></button>
    <button></button>
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
      let funcIndex = ["", "syncSend", "syncReturnSend", "asyncSend"];
      let descIndex = ["", "同步通信", "同步通信", "异步通信"];
      this.log(`%c ╎ %c [调用方法] ${funcIndex[type]} - ${descIndex[type]} - 来自页面 : ${this.$route.name}`, "color:red", "color:#33aa11");
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
      }
    },
    syncSend() {
      let returnValue = this.$electron.ipcRenderer.sendSync("synchronous-message", { content: "我是同步发送的内容", type: 1 });
      this.logEnd(`%c ╎ %c [同步回调] %c${returnValue}`, "color:red", "color:#33cc99", "");
    },
    syncReturnSend() {
      this.$electron.ipcRenderer.sendSync("synchronous-message", { content: "我是同步发送的内容", type: 2 });
    },
    asyncSend() {
      this.$electron.ipcRenderer.send("asynchronous-message", "我是异步发送的内容");
    }
  }
};
</script>
<style>
button {
  margin-left: 10px;
}
</style>
