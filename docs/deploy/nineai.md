---
article: false
title: nine-ai部署教程
icon: generic
order: 1
---
# 项目文档

## 必要环境

确保您的系统满足以下环境要求：

- Node.js 版本大于 16
- pnpm 版本大于 6
- MySQL 版本大于等于 5.7
- Redis

## 目录结构

```
project-root
|-- chat           # 用户端代码
|-- admin          # 管理端代码
|-- service        # 服务端代码
```

## 本地开发

在项目根目录执行以下命令进行本地开发：

1. 进入 `service` 目录，创建 `.env` 文件，修改和测试数据库信息连接信息和 Redis 配置。
2. 数据库名称不能已经存在默认是chatgpt
3. redis、mysql 一定要先本地测试通，再保存.env文件
3. 上诉工作完成后执行：

```bash
pnpm i
pnpm dev
```
> 注意注意！这一步必须做,自动创建数据库,否则后面没有数据库、各种失败！

```bash
# 安装依赖
pnpm install

# 启动项目
pnpm dev

# 打包项目
pnpm build
```

### 启动项目

分别安装依赖并启动项目：


2. 进入 `chat` 目录，执行以下命令启动用户端：

```bash
pnpm i
pnpm dev
```

3. 进入 `admin` 目录，执行以下命令启动管理端：

```bash
pnpm i
pnpm dev
```

### 关于授权

授权模块位于 `src/modules/globalConfig/globalConfig.service.ts` 文件下。如果要移除授权，请清空 `nineAiCheckAuth` 函数内容，并移除 `onModuleInit` 中的 `nineAiCheckAuth`。

对应的定时任务也可以移除，位于 `src/modules/task/task.service.ts` 文件中的 `checkauth` 定时任务。

### 打包路径问题

#### 后端服务

后端服务只需执行以下命令即可：

```bash
pnpm build
```

生成七个文件，其中 `.env` 是环境变量文件，需要在后续部署时自行挂载或创建。项目提供示例文件 `.env.example`。

#### chat（前端项目）

前端项目打包使用配置文件 `.env.production`，与 `admin` 相同。修改文件中的变量即可，如果分开部署，请填写线上后端服务地址。

#### admin（管理端）

管理端与 chat 部署方式相同，修改 `.env.production` 中的配置即可。分离部署时，只需替换线上地址，其余配置暂时用不到。

### 其他文件

#### 刷新404问题

前端在刷新时可能会出现404问题，需要对 Nginx 进行配置。请参考相关文档进行配置。

#### 效果图如下

用户界面
![](/img/nine-user.jpg)
管理界面
![](/img/nineadmin.jpg)
