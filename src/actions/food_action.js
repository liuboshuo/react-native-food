import *as ActionTypes from './../actions/actionType'
import food_list from './../../api/search.json'
import Immutable from 'immutable'
import {get} from './../common/server'

/**
 *
 * @param isRefreshing  刷新
 * @param rn   加载的开始
 * @param pn   分页数
 * @returns {function(*, *)}
 */

export function load_food_list_data(searchText=null,cid=null,isRefreshing=true,pn=0,rn=pageSize) {
    return (dispacth,getState)=>{
        if (isRefreshing){
            dispacth(food_list_data_change_refreshing(true))
        }else {
            dispacth(food_list_change_loading(1))
        }
        if (cid==null){
            const dict = {
                menu:searchText,
                rn:rn,
                pn:pn
            }
            get("/cook/query.php",dict,(response)=>{
                appLog(response);
            })
            setTimeout(()=>{
                dispacth(food_list_change_refresh_data(Immutable.fromJS(food_list.result.data),false))
            },2000);
        }else {
            const dict = {
                cid:id,
                rn:rn,
                pn:pn
            }

                // /cook/queryid
            get("cook/index",dict,(response)=>{
                appLog(response);
            })
            setTimeout(()=>{
                dispacth(food_list_change_refresh_data(Immutable.fromJS(food_list.result.data),false))
            },2000);
        }
    }
}


/**
 *
 * @param isRefreshing
 * @returns {{type: string, data: {isRefreshing: *}}}
 */
function food_list_data_change_refreshing(isRefreshing) {
    return {
        type:ActionTypes.Food_List_Refreshing,
        data:{
            isRefreshing:isRefreshing
        }
    }
}

/**
 *
 * @param data
 * @param loading
 * @returns {{type: null, data: {food_list_data: *, loading: *}}}
 */

function food_list_change_loading_data(data,loading) {
    return {
        type:ActionTypes.Food_List_Loading_Data,
        data:{
            food_list_data:data,
            loading:loading,
        }
    }
}


/**
 *
 * @param data
 * @param isRefreshing
 * @returns {{type, data: {food_list_data: *, isRefreshing: *}}}
 */
function food_list_change_refresh_data(data,isRefreshing) {
    return {
        type:ActionTypes.Food_List_Refreshing_Data,
        data:{
            food_list_data:data,
            isRefreshing:isRefreshing
        }
    }
}


/**
 *
 * @param loading 0: 加载 1, 正在 2,加载完毕 3,暂无数据 4,刷新数据时候 的  错误（显示不同的界面）
 * @returns {{type, data: {loading: *}}}
 */
function food_list_change_loading(loading) {
    return {
        type:ActionTypes.Food_List_Loading,
        data:{
            loading:loading
        }
    }
}


/**
 * storage 浏览记录存储的key
 * @type {string}
 */
const browser_food_key = "storage-browserFoodKey"

/**
 * storage收藏记录存储的key
 * @type {string}
 */
const like_food_key = "storage-likeFoodKey"


/**
 * 保存浏览记录
 * @param food_data
 */

export function save_browser_food(food_data) {
    return (dispatch,getState)=>{
        storage.save({
            key: browser_food_key,
            data:[food_data]
        })
    }
}

/**
 * 读取浏览记录
 */
export function read_browser_food() {
    return (dispatch,getState)=>{
        storage.load({
            key:browser_food_key
        }).then(response=>{
            appLog(response)
            dispatch({
                type:ActionTypes.Food_Browser_Load_Data,
                data:{
                    food_list_browser:response
                }
            })
        }).catch((error)=>{
            appLog(error)
        })
    }
}

/**
 * 保存收藏
 * @param food_data
 */
export function save_like_food(food_data) {
    return (dispatch,getState)=> {
        storage.save({
            key: like_food_key,
            data: [food_data]
        })
    }
}

/**
 * 读取收藏的菜
 */
export function read_like_food() {
    return (dispatch,getState)=>{
        storage.load({
            key:like_food_key
        }).then(response=>{
            appLog(response)
            dispatch({
                type:ActionTypes.Food_Like_Load_Data,
                data:{
                    food_list_like:response
                }
            })
        }).catch((error)=>{
            appLog(error)
        })
    }
}