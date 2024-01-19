---
article: false
title: nine-ai-应用数据导入教程
icon: generic
order: 1
---
背景：nine ai项目应用广场数据库为空、手动一个一个加非常麻烦

本站长已经准备好应用数据、本教程主要指导客户如何导入应用广场数据库数据

1、准备工具：Dbeaver、已经部署好的nine、不限于本地 or 线上

2、打开Dbeaver 连接数据库、找到数据库、找到app 表、双击表名

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmQzYTZlNWMyOGNkOThkYWEyMDc0MGEzNmEyYzE5MzRfQzJMNWFBQ2xYZTlINm9LVHdqem1nSzZJcGJaNVpEeVlfVG9rZW46TWN5WmI0Ukhtb3czWEZ4cVRmYmNSTnF4bnpjXzE3MDU2NTk1MjI6MTcwNTY2MzEyMl9WNA)

这是我已经导完的效果

下面我介绍如何导入csv内容

1、清空app 表所有行数据 、并且保存（注意 你已经有的应用请提前导出保存）

2、右键app 表 选择导入数据-csv-下一步选择csv 文件-下一步

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=YTc1ZWU1NjQ1MWUyNGQ5MDQ2NWYzNzVhYWE3ZTJmYzFfRWV4ZmdoQ3pDalBYaUp6ZzBTQnFYUVhuTUZiMHFzZjVfVG9rZW46SUh6TWJScVlzb2hqQlF4bzlQSWNvcjVJbjNUXzE3MDU2NTk1MjI6MTcwNTY2MzEyMl9WNA)

后面无脑下一步-继续

直到

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=OGFmMGFmYzUyNGUxOGU3NmE5MWZhODRmYmU0Yzc3NGJfbUU3M1U1MDJKdnFBYVpLVTNMV2NTS2dkZVgzZ1NyT1pfVG9rZW46RWhwTmJWb3RibzJTWjd4YzhrYmNoaHNlbkZjXzE3MDU2NTk1MjI6MTcwNTY2MzEyMl9WNA)

搞定重启你的服务，回到界面 看效果

默认效果

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=MDgwZjM0YjYxZDNhOGE4N2MzYmE0ZjM3YTMzOGI5YjJfN0pvZWFMZ0JpNU5OenVCaDVLekpVRElQeXc3NTRuMkJfVG9rZW46WHBSYmI2NDJLb1VwdWZ4Q3FQMWN0c1hrbm1oXzE3MDU2NTk1MjI6MTcwNTY2MzEyMl9WNA)

处理logo源文件 放自己cos 链接如下效果图

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWI1MTQyOTdiNTBhODJmMDFhM2I5ZmU4YjJiZjY2Y2JfMGpxZDB1SlRRWWlMZ2RZYnk0bnZONDlGdXgwUVIxaE1fVG9rZW46SnA1RGJXNjR5bzZjYmN4MmJOaGNCaWtKbkhiXzE3MDU2NTk1MjI6MTcwNTY2MzEyMl9WNA)

由于本人的logo放在自己服务器，这里本人只提供logo源文件、请放在自家cos 或者托管平台上 编辑csv 导入数据即可，默认csv 只提供默认的 logo url：

```Plain
https://freegpts.eu.org/_next/image?url=https%3A%2F%2Fregistry.npmmirror.com%2F%40lobehub%2Fassets-emoji%2F1.3.0%2Ffiles%2Fassets%2Fgrinning-face.webp&w=48&q=75
```

logo+csv+sql 压缩包：链接: https://pan.baidu.com/s/1ZT-ZIeVQE8yU3_gYSU-GDg?pwd=0376 提取码: $10 复制这段内容后打开百度网盘手机App，操作更方便哦

不处理默认效果如下（默认的 这走站长带宽，建议 把压缩包中logo 放在你自己的cos里 然后批量编辑csv 文件中的coverImg字段

）

![img](https://gsol6smrwo.feishu.cn/space/api/box/stream/download/asynccode/?code=YTk2YmNiNjU5ZmRkNzE0MGNjZDgzNDE1YjRmZmQ5MTZfcWJMUmpkZUFRQUwwSnhEU0xxamxycEhLNlRWdFphOEdfVG9rZW46UmhJVmJWQXhmbzFkNVp4cHNrTmNzSE1sbklYXzE3MDU2NTk1MjI6MTcwNTY2MzEyMl9WNA)

上面介绍了csv导入，如果选择sql导入

则直接执行插入语句即可这就不废话了 直接问GPT 执行即可

[技术支持](https://freetimeai.eu.org/business.html)
