import *as ActionTypes from './../actions/actionType'
import food_list from './../../api/search.json'
import Immutable from 'immutable'

/**
 *
 * @param isRefreshing  刷新
 * @param rn   加载的开始
 * @param pn   分页数
 * @returns {function(*, *)}
 */

export function load_food_list_data(searchText=null,isRefreshing=true,pn=0,rn=pageSize) {
    return (dispacth,getState)=>{
        if (isRefreshing){
            dispacth(food_list_data_change_refreshing(true))
        }else {
            dispacth(food_list_change_loading(1))
        }
        setTimeout(()=>{
            // dispacth(food_list_data_change_loading(Immutable.fromJS(food_list.result.data),0));
            dispacth(food_list_change_refresh_data(Immutable.fromJS(food_list.result.data),false))
        },2000);
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