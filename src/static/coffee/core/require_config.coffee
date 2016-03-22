# 依赖 require
# require配置文件
# author: rochappy

requirejs.config
    baseUrl: "/static/js/"
    paths:
        fastclick: 'lib/fastclick/lib/fastclick'
        iscroll: 'lib/iscroll/build/iscroll'
        nicelib: 'lib/nicelibrary/dist/js'
        # 用来替换has_map字符串占位，勿动
        __has_map: ''