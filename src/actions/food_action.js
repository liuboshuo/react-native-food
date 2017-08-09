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

export function load_food_list_data(searchText=null,cid=null,pageNo=0,isRefreshing) {

    return (dispacth,getState)=>{
        if (isRefreshing){
            dispacth(food_list_data_change_refreshing(true,0))
        }else {
            dispacth(food_list_change_loading(1,pageNo))
        }
        if (cid==null){
            const dict = {
                menu:searchText,
                rn:pageSize,
                pn:isRefreshing ? 0 : pageNo
            }
            console.log(dict)
            get("/cook/query.php",dict,(response)=>{
               loading_refreshing_food_list(dispacth,response,isRefreshing)
            })
        }else {
            const dict = {
                cid:cid,
                rn:pageSize,
                pn:isRefreshing ? 0 : pageNo
            }
            get("/cook/index",dict,(response)=>{
                loading_refreshing_food_list(dispacth,response,isRefreshing)
            })
        }
    }
}

function loading_refreshing_food_list(dispacth,response,isRefreshing) {

    const {result} = response;
    if (result){
        const totalNum = parseInt(result.totalNum);
        const pn = parseInt(result.pn);
        const rn = parseInt(result.rn);
        console.log(totalNum,pn,rn)
        if (!isRefreshing){
            dispacth(food_list_change_loading_data(Immutable.fromJS(result.data),0,(rn+pn)))
            if ((pn + rn) >= totalNum ){
                dispacth(food_list_change_loading(2,(rn+pn)))
            }
        }else {
            if(result.data && result.data.length){
                if ((pn + rn) >= totalNum ){
                    //加载完毕
                    dispacth(food_list_change_refresh_data(Immutable.fromJS(result.data),false,0))
                    dispacth(food_list_change_loading(2,0))
                }else {
                    dispacth(food_list_change_refresh_data(Immutable.fromJS(result.data),false,(rn+pn)))
                }
            }else {
                dispacth(food_list_data_change_refreshing(false,0))
                dispacth(food_list_change_loading(3,0))
            }
        }
    }

}
export function load_food_step(id) {
    return ((dispatch,getState)=>{
        const params = {id:id}
        dispatch({
            type:ActionTypes.Food_Refresh_Step,
            data:{
                food_step_refreshing:true
            }
        })
        get("/cook/queryid",params,(response)=>{
            if (response.result){
                let {profile_reducer} = getState()
                profile_reducer = profile_reducer.toJS();
                const {food_list_like} = profile_reducer;
                let isExits = false;
                food_list_like.map(item=>{
                    if (item.id == response.result.data[0].id){
                        isExits = true;
                        return
                    }
                })
                dispatch({
                    type:ActionTypes.Food_Refresh_Step,
                    data:{
                        food_step_refreshing:false,
                        food_select_item:response.result.data[0],
                        isLike:isExits
                    }
                })

            }else {
                dispatch({
                    type:ActionTypes.Food_Refresh_Step,
                    data:{
                        food_step_refreshing:false
                    }
                })
            }

        })
    })
}
export function food_list_unmount_clear() {
    return dispatch=>{
        dispatch({
            type:ActionTypes.Food_List_Unmount_Clear
        })
    }

}
/**
 *
 * @param isRefreshing
 * @returns {{type: string, data: {isRefreshing: *}}}
 */
function food_list_data_change_refreshing(isRefreshing,rn) {
    return {
        type:ActionTypes.Food_List_Refreshing,
        data:{
            isRefreshing:isRefreshing,
            rn:rn
        }
    }
}

/**
 *
 * @param data
 * @param loading
 * @returns {{type: null, data: {food_list_data: *, loading: *}}}
 */

function food_list_change_loading_data(data,loading,rn) {
    return {
        type:ActionTypes.Food_List_Loading_Data,
        data:{
            food_list_data:data,
            loading:loading,
            rn:rn
        }
    }
}


/**
 *
 * @param data
 * @param isRefreshing
 * @returns {{type, data: {food_list_data: *, isRefreshing: *}}}
 */
function food_list_change_refresh_data(data,isRefreshing,rn) {
    return {
        type:ActionTypes.Food_List_Refreshing_Data,
        data:{
            food_list_data:data,
            isRefreshing:isRefreshing,
            rn:rn
        }
    }
}


/**
 *
 * @param loading 0: 加载 1, 正在 2,加载完毕 3,暂无数据 4,刷新数据时候 的  错误（显示不同的界面）
 * @returns {{type, data: {loading: *}}}
 */
function food_list_change_loading(loading,rn) {
    return {
        type:ActionTypes.Food_List_Loading,
        data:{
            loading:loading,
            rn:rn
        }
    }
}