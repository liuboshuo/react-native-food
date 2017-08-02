import {Alert} from 'react-native'
import {hideHud} from "../utils/util";

// 初始化的数据参数
let config = {}

// 错误常量
const SERVER_ERROR_MESSAGE = {
    // 服务级别
    MenuNameEmpty:204601, //  菜谱名称不能为空
    NOTFOUNT:204602, //  查询不到相关信息
    MenuNameTooLength:204603, //  菜谱名过长
    TagIdError:204604,  // 错误的标签ID
    NOTFOUNT1:204605,  //查询不到数据
    MenuIdError:204606 //错误的菜谱ID
}


// 首先配置服务端的配置数据
export function server_config(env) {

    if(env == null || env == undefined){
        return;
    }
    return {
        ...config
    }
}

export class HttpError {
    // 构造
    constructor(status_code) {
        this.status_code = status_code;
    }
}

//服务出错
export function defaultOnServerError(error_code,message) {
    const msg = message || server_error_message(error_code) || "服务器异常！！"
    appLog(message)
    hideHud()
    Alert.alert("错误",msg)
}
//网络连接出错
export function defaultOnNetWorkError(error) {
    appLog(error)
    hideHud()
    Alert.alert("错误","网络连接出错，请稍后在尝试");
}

function server_error_message(code) {
    return SERVER_ERROR_MESSAGE[code];
}

function checkStatus(response) {
    appLog(`request status ${response.status}`);
    if (response.status >= 200 && response.status< 300){
        return response;
    }else {
        let httpError = new HttpError(response.status());
        httpError.response = response;
        throw httpError;
    }
}
//请求
export function get(url,params,onSuccess,onServerError=defaultOnServerError,onNetWorkError=defaultOnNetWorkError) {
    return request("GET",url,params,onSuccess,onServerError,onNetWorkError)
}

//请求
export function post(url,params,onSuccess,onServerError=defaultOnServerError,onNetWorkError=defaultOnNetWorkError) {
    return request("POST",url,params,onSuccess,onServerError,onNetWorkError)
}

export function request(method,url,params,onSuccess,onServerError=defaultOnServerError,onNetWorkError=defaultOnNetWorkError) {

    return fetch(url,{
        method:method,
        headers:{},
        data:method == 'GET' ? null : JSON.stringify(params)
    }).then(checkStatus)
    .then((response)=>{
        return response.json();
    }).then(response=>{
        if (response.error_code == 0){
            //判断服务器的逻辑
            onSuccess(response);
            //返回 继续操作返回结果操作
            return response;
        }else {
            onServerError(response.error_code,response.reason)
        }
    }).catch(error=>{
        onNetWorkError(error);
    })

}