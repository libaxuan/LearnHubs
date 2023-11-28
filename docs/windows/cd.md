---
article: false
title: linux命令大全
icon: tab
order: 5
---
以下是一些常用 Linux 命令的具体用法示例：

| 命令                 | 描述                                     | 用法示例                                                         |
| -------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| `ls`                 | 列出目录内容                             | `ls`、`ls -l`、`ls -a`                                           |
| `cd`                 | 切换目录                                 | `cd /path/to/directory`、`cd ..`                                  |
| `pwd`                | 显示当前工作目录                         | `pwd`                                                            |
| `mkdir`              | 创建新目录                               | `mkdir new_directory`                                            |
| `rm`                 | 删除文件或目录                           | `rm file.txt`、`rm -r directory`                                  |
| `cp`                 | 复制文件和目录                           | `cp file.txt newfile.txt`、`cp -r directory newdirectory`         |
| `mv`                 | 移动文件和目录                           | `mv file.txt new_directory`、`mv directory new_directory_name`     |
| `cat`                | 查看文件内容                             | `cat file.txt`                                                   |
| `less`               | 分页查看文件内容                         | `less file.txt`                                                  |
| `head`               | 显示文件开头几行                         | `head -n 10 file.txt`                                            |
| `tail`               | 显示文件末尾几行                         | `tail -n 5 file.txt`                                             |
| `grep`               | 在文件中搜索指定模式                     | `grep "pattern" file.txt`                                        |
| `find`               | 在文件系统中搜索文件和目录               | `find /path/to/search -name "*.txt"`                             |
| `chmod`              | 修改文件或目录的权限                     | `chmod 755 file.txt`                                             |
| `chown`              | 修改文件或目录的所有者                   | `chown user:group file.txt`                                      |
| `chgrp`              | 修改文件或目录的所属组                   | `chgrp group file.txt`                                           |
| `tar`                | 打包和解压文件                           | `tar -cvf archive.tar file1 file2`、`tar -xvf archive.tar`        |
| `gzip`               | 压缩文件                                 | `gzip file.txt`                                                  |
| `gunzip`             | 解压缩文件                               | `gunzip file.txt.gz`                                             |
| `wget`               | 下载文件                                 | `wget http://example.com/file.txt`                                |
| `curl`               | 发送 HTTP 请求并显示响应                 | `curl http://example.com`                                         |
| `ssh`                | 安全登录远程主机                         | `ssh username@hostname`                                          |
| `scp`                | 在本地主机和远程主机之间复制文件         | `scp file.txt username@hostname:/path/to/destination`             |
| `ping`               | 测试与主机的连通性                       | `ping example.com`                                               |
| `ifconfig`           | 显示和配置网络接口                       | `ifconfig`                                                       |
| `netstat`            | 显示网络连接和统计信息                   | `netstat -tuln`                                                  |
| `route`              | 显示和配置网络路由                       | `route -n`                                                       |
| `iptables`           | 配置防火墙规则                           | `iptables -A INPUT -p tcp --dport 80 -j ACCEPT`                   |
| `ps`                 | 显示进程状态                             | `ps aux`                                                         |
| `top`                | 实时显示系统资源使用情况                 | `top`                                                            |
| `kill`               | 终止进程                                 | `kill PID`                                                       |
| `cron`               | 定时执行任务                             | `crontab -e`                                                     |
| `useradd`            | 创建新用户                               | `useradd username`                                               |
| `usermod`            | 修改用户属性                             | `usermod -aG group username`                                     |
| `userdel`            | 删除用户                                 | `userdel username`                                               |
| `passwd`             | 修改用户密码                             | `passwd username`                                                |
| `su`                 | 切换用户身份                             | `su username`                                                    |
| `sudo`               | 以超级用户权限执行命令                   | `sudo command`                                                   |
| `apt-get`            | Debian/Ubuntu 系统的软件包管理工具        | `apt-get install package`                                        |
| `yum`                | CentOS/RHEL 系统的软件包管理工具          | `yum install package`                                            |
| `systemctl`          | 管理系统服务                             | `systemctl start service`、`systemctl stop service`               |
| `journalctl`         | 查看系统日志                             | `journalctl -u service`                                          |
| `df`                 | 显示磁盘空间使用情况                     | `df -h`                                                          |
| `du`                 | 估算文件和目录的磁盘使用情况             | `du -sh directory`                                               |
| `free`               | 显示系统内存使用情况                     | `free -h`                                                        |
| `uname`              | 显示系统信息                             | `uname -a`                                                       |
| `date`               | 显示或设置系统时间                       | `date`                                                           |
| `shutdown`           | 关闭系统                                 | `shutdown now`                                                   |
| `reboot`             | 重启系统                                 | `reboot`                                                         |
| `man`                | 查看命令的帮助文档                       | `man command`                                                    |
| `info`               | 查看命令的信息文档                       | `info command`                                                   |
| `history`            | 查看命令历史记录                         | `history`                                                        |
| `alias`              | 创建命令别名                             | `alias ll='ls -l'`                                               |
| `echo`               | 打印文本或变量到标准输出                 | `echo "Hello, World!"`                                           |
| `export`             | 设置环境变量                             | `export VARIABLE=value`                                          |
| `source`             | 执行脚本或命令文件                       | `source script.sh`                                               |
| `chmod`              | 修改文件或目录的权限                     | `chmod 755 file.txt`                                             |
| `chown`              | 修改文件或目录的所有者                   | `chown user:group file.txt`                                      |
| `chgrp`              | 修改文件或目录的所属组                   | `chgrp group file.txt`                                           |
| `ln`                 | 创建链接文件                             | `ln -s target link`                                              |
| `dd`                 | 复制和转换文件                           | `dd if=inputfile of=outputfile`                                  |
| `sed`                | 流编辑器，用于处理和转换文本             | `sed 's/pattern/replacement/g' file.txt`                         |
| `awk`                | 文本处理和分析工具                       | `awk '{print $1}' file.txt`                                      |
| `cut`                | 从文件中提取指定字段                     | `cut -d"," -f2 file.csv`                                         |
| `sort`               | 对文件进行排序                           | `sort file.txt`                                                  |
| `uniq`               | 去除文件中的重复行                       | `uniq file.txt`                                                  |
| `wc`                 | 统计文件中的行数、字数和字节数           | `wc -l file.txt`                                                 |
| `diff`               | 比较文件的差异                           | `diff file1.txt file2.txt`                                       |
| `patch`              | 应用补丁文件                             | `patch -p1 < patchfile.patch`                                    |
| `scp`                | 在本地主机和远程主机之间复制文件         | `scp file.txt username@hostname:/path/to/destination`             |
| `ssh`                | 安全登录远程主机                         | `ssh username@hostname`                                          |
| `rsync`              | 远程文件同步工具                         | `rsync -avz source/ destination/`                                |

这些示例展示了各个命令的常见用法，您可以根据需要进行调整和组合。请注意，某些命令可能需要特定的参数和选项才能实现特定的功能，请查阅相应命令的文档以获取更详细的信息。

以下是一些常见 Linux 发行版的官方文档链接：

- Ubuntu：[https://help.ubuntu.com/](https://help.ubuntu.com/)
- Debian：[https://www.debian.org/doc/](https://www.debian.org/doc/)
- CentOS：[https://docs.centos.org/](https://docs.centos.org/)
- Fedora：[https://docs.fedoraproject.org/](https://docs.fedoraproject.org/)
- Arch Linux：[https://wiki.archlinux.org/](https://wiki.archlinux.org/)
- openSUSE：[https://doc.opensuse.org/](https://doc.opensuse.org/)
