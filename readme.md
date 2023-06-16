# git是什么

集中式版本控制系统(vcs) => svn
分布式版本控制系统(dvcs) => git

# git的作用

在项目开发的进程中,对值得记录的事件节点进行'备份'

方便后期恢复(后悔药)

方便团队协作开发

# git管理文件的三种状态

Git 有三种状态，你的文件可能处于其中之一

已修改(modified):表示修改(新增,更新,删除)了文件但还没保存到数据库中

已暂存(staged):表示对一个已修改文件的当前版本做了标记

已提交(committed):表示数据已经安全地保存在本地数据库中。

这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。

# 初次运行git前的配置


配置用户名和邮箱

git config --global user.name "raonian"
git config --global user.email "3140737020@qq.com"

查看配置信息

git config --list
git config user.name
git config user.email

获取git仓库(repo)

自动初始化git仓库(git init)

克隆远程(服务器)仓库(git clone【repo_url】)

U (untracked)未跟踪(新增)

A(added)

M(modified)跟踪之后被修改

# 创建快照(备份)

git add .将所有文件放到暂存区(经常做的)

git commit -m "提交信息" 将暂存区文件提交到仓库(某个功能完成的时候/在必要的时候提交)

【工作区】-- git add .-->【暂存区】--git commit -m "xxx"-->【repo】

【工作区】--git commit -a -m "xxx"-->【repo】（vim编辑器操作）

【工作区】<--git commit -a -m "xxx"--【暂存区】<--【repo】（vim编辑器操作）

git reset --hard commit_id

git reset --soft commit_id

git reset --mixed commit_id（默认）j将指定版本回退到工作区