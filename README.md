# mini-crawl
### mysql
- http://www.zhufengpeixun.com/plan/html/30.cms-1-mysql.html

### MYSQL配置
- port 端口号
- basedir 安装目录
- datadir 数据存放访目录
- charcter-set-server 字符集
- default-storage-engine 存储引擎
- sql-mode 语法模式
- max-connections 最大连接数



### crawl
- http://www.zhufengpeixun.com/plan/html/39.crawl-1.html

### 1. 掘金爬虫
    通过一个实例来介绍如何编写网络爬虫抓去掘金数据，并存储到MySQL数据库中，以及定时任务爬虫来更新内容

### 2. 核心步骤 
- 发起HTTP请求获取网页内容
- 使用类似jQuery的语法来操作网页提取需要的数据
- 把数据保存到数据库中以供查询
- 建立一个服务器来显示这些数据
- 可以定时爬取数据
- 让程序稳定运行
- 对编码进行转换
 
### cheerio
- cheerio是一个节点的库，可以理解为一个Node.js的版本的jquery的，使用方式和jquery的基本相同。