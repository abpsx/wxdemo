# 安装 32 位 node

```
https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi
```

## dll

1. download dll
2. `$ mkdir Library`
3. dll 解压到`Library`目录

## 环境部署

1. 管理员身份运行 cmd => `$ npm install --global --production windows-build-tools`
2. `$ npm config set msvs_version 2017`
3. `$ npm i -g node-gyp`
4. `$ npm i`
5. `$ npm run rebuild`

### dev 开发测试

1. `$ npm run serve`
2. `$ npm run start`

### pro 生产测试

1. `$ npm run pro`
