
//为app添加一个log函数  dev环境打印log, 生产环境不打印log
global.appLog = function (message){
    if (__DEV__){
        console.log(message)
    }
}

//设置全局分页数
global.pageSize = 30;


