import {Alert} from 'react-native'
import {hideHud} from "../utils/util";
import qs from 'qs'
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


/**
 * 首先配置服务端的配置数据 app加载的时候配置服务器参数
  */

export function server_config(env) {

    if(env == null || env == undefined){
        return;
    }
    config = {
        ...config,
        appKey:env.appKey,
        server_host:env.server_host
    }
}

/**
 * http请求错误
 */
export class HttpError {
    // 构造
    constructor(status_code) {
        this.status_code = status_code;
    }
}

/**
 * 获取绝对url
 * @param url
 * @returns {*}
 */
function configURL(url) {
    return config.server_host + url
}

/**
 * 服务器出错
 */

export function defaultOnServerError(error_code,message) {
    const msg = message || server_error_message(error_code) || "服务器异常！！"
    appLog(message)
    hideHud()
    Alert.alert("错误",msg)
}

/**
 * 网络连接出错
 */

export function defaultOnNetWorkError(error) {
    appLog(error)
    hideHud()
    Alert.alert("错误","网络连接出错，请稍后在尝试");
}

/**
 * 获取服务器出错的问题
 * @param code
 * @returns {*}
 */
function server_error_message(code) {
    return SERVER_ERROR_MESSAGE[code];
}

/**
 * 判断是否网络连接正确
 * @param response
 * @returns {*}
 */
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

/**
 * /请求
 */

export function get(url,params,onSuccess,onServerError=defaultOnServerError,onNetWorkError=defaultOnNetWorkError) {
    params["key"] = config.appKey;
    const string = qs.stringify(params,{ arrayFormat: 'brackets'});
    const path = params ? url +"?"+ string : url;
    return request("GET",path,params,onSuccess,onServerError,onNetWorkError)
}

/**
 * 请求
 */
export function post(url,params,onSuccess,onServerError=defaultOnServerError,onNetWorkError=defaultOnNetWorkError) {
    return request("POST",url,params,onSuccess,onServerError,onNetWorkError)
}


/**
 * 发送请求
 * @param method
 * @param url
 * @param params
 * @param onSuccess 回调
 * @param onServerError
 * @param onNetWorkError
 * @returns {Promise.<TResult>}
 */
function request(method,url,params,onSuccess,onServerError=defaultOnServerError,onNetWorkError=defaultOnNetWorkError) {

    return fetch(configURL(url),{
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