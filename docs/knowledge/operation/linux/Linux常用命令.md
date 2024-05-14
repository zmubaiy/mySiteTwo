---
id: linux-command
title: Linux常用命令
date: 2020-12-30
tags: [Linux, operation]
keywords: [Linux, operation]
---

# 常用命令
## 1. ls：列出当前目录中的文件和子目录
```bash
ls
```

## 2. pwd：显示当前工作目录的路径
```bash
pwd
```

## 3. cd：切换工作目录
```bash
cd /path/to/directory
```

## 4. mkdir：创建新目录
```bash
mkdir directory_name
```

## 5. rmdir：删除空目录
```bash
rmdir directory_name
```

## 6. rm：删除文件或目录
```bash
rm file_name
rm -r directory_name  #递归删除目录及其内容
```

## 7. cp：复制文件或目录
```bash
cp source_file destination
cp -r source_directory destination  # 递归复制目录及其内容
```

## 8. mv：移动或重命名文件或目录
```bash
mv old_name new_name
```

## 9. touch：创建空文件或更新文件的时间戳
```bash
touch file_name
```

## 10. cat：连接和显示文件内容
```bash
cat file_name
```

## 11. 查看当前IP
```bash
ifconfig 或 ip addr
```