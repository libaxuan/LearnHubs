---
article: false
title: nine-ai-基础绘画数据快速导入
icon: generic
order: 1
---
背景：nine ai项目基础绘画数据库为空、手动一个一个加非常麻烦、现场生成也非常耗时间、适合新系统快速导入一批预览数据

本站长已经准备绘画数据、本教程主要指导客户如何导入基础绘画数据库数据

1、准备工具：Dbeaver、已经部署好的nine、不限于本地 or 线上

2、将我的图片压缩包上传到你自己的图床得到图片链接

3、编辑csv 中的answer字段和fileInfo字段，answer字段值直接是图片链接，fileInfo字段是一个json、需要将该json中的cosUrl值换成您的图片链接，这个链接和当前行的answer字段值 是同一个图片链接

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=YmFlMjcyY2Y3NTg1MWY3MWMzYzk1NGNjYWZlZWYwYjBfcmxyeTUwbU5QS3RKVEg1d2ViNWZ1TXFvcHppQm1kSmNfVG9rZW46UVNocmJyV3Bzb3BJNkp4ZDl2cWNkQ0NkbjNlXzE3MDU2NjIxOTc6MTcwNTY2NTc5N19WNA)

另外注意id列递增的，按需改你的csv 文件 下面是我本地的eg

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=MmU3MGNlYjE4Y2FiOGIzMTczODNmNDE5ZGU2NTVhYTNfbDRSMTkxS1l2M2NLNDBMemVPOGNERjJUWGpUeEYwYWVfVG9rZW46UUh0amJGSjR3b0FxRVZ4OGp0OGNXY3hTblhjXzE3MDU2NjIxOTc6MTcwNTY2NTc5N19WNA)

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=M2ZlY2ZhNTE4OTU2YzZlY2QxNzM2NWJmNmEwODhjODBfODYzWUVGaXVINTBJN1RWcERtYVVZQVRLaGJNMHcxUGJfVG9rZW46VWRoOWJtalZCb3dWbnp4dzZCT2NBTjBWbjhiXzE3MDU2NjIxOTc6MTcwNTY2NTc5N19WNA)

这是我已经导完的效果

下面我介绍如何导入csv内容

2、右键chatlog 表 选择导入数据-csv-下一步选择csv 文件-下一步

后面无脑下一步-继续

直到

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=MWNmYzg3ZTFmNTBmMDg4YjNjODlmNzRiZjE4ZGQzZjhfSkxockpvMzZXNnZ0VUJpZmRRRlFBREY1Z2NOeGY2TGdfVG9rZW46UlQxR2JXMzFIb3R5cmZ4WDd0d2NmN2p6bkRoXzE3MDU2NjIxOTc6MTcwNTY2NTc5N19WNA)

搞定重启你的服务，回到界面 看效果

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=Mjk2NzRiYmMxZTM3YjEwYTUyMTZkNmJlMmUzZGQ2YTdfZjBvUlpCMFRLdlJFczFDZFB0aU9lU0twUExVRWI0d25fVG9rZW46TVVRaGJOQnNrb0FuTTZ4dnhRU2NkNkg0bjNjXzE3MDU2NjIxOTc6MTcwNTY2NTc5N19WNA)

2 3步骤不做 导入没有效果，answer字段和fileInfo中的cosUrl是图片链接、图片链接！

2 3步骤不做 导入没有效果，answer字段和fileInfo中的cosUrl是图片链接、图片链接！

2 3步骤不做 导入没有效果，answer字段和fileInfo中的cosUrl是图片链接、图片链接！

提供的高质量图片文件名称和表格中的名称一一对应，分辨率已经调整合适

请各位老板按需处理图片-cos 链接

高清图 链接: https://pan.baidu.com/s/1ciZ5gRYPQivzhu7doKAcrg?pwd=g9gz 提取码: 见底部 复制这段内容后打开百度网盘手机App，操作更方便哦

csv：链接: https://pan.baidu.com/s/1k6N4-FsgyrbBMqA3ypxbdQ?pwd=hsyd 提取码: 见底部  复制这段内容后打开百度网盘手机App，操作更方便哦

[技术支持](https://freetimeai.eu.org/business.html)
