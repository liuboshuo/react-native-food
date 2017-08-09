import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";
const initialState = Immutable.Map({
    food_list_data:Immutable.List(),
    loading:0,
    isRefreshing:false,
    rn:0,
    food_step_refreshing:false,
    food_select_item:Immutable.Map(),
    isLike:false
})

function change_refreshing(state,data) {
    return state.set("isRefreshing",data.isRefreshing).set("rn",data.rn);
}
function change_refreshing_data(state,data) {
    return state.set("isRefreshing",data.isRefreshing).set("food_list_data",data.food_list_data).set("rn",data.rn)
}
function change_loading(state,data) {
    return state.set("loading",data.loading).set("rn",data.rn);
}

function change_loading_data(state,data) {
    let food_list_data = state.get("food_list_data");
    food_list_data = food_list_data.concat(data.food_list_data);
    return state.set("loading",data.loading).set("food_list_data",food_list_data).set("rn",data.rn);
}

function food_refresh_step(state,data){
    const food_select_item = data.food_select_item;
    if (food_select_item){
        return state.set("food_step_refreshing",data.food_step_refreshing).set("food_select_item",data.food_select_item).set("isLike",data.isLike)
    }else {
        return state.set("food_step_refreshing",data.food_step_refreshing)
    }
}
function food_like(state,data) {
    return state.set("isLike",true)
}
function food_unlike(state,data) {
    return state.set("isLike",false)
}
function clear(state,data) {

    return state.set("food_list_data",Immutable.List()).set("rn",0).set("loading",0).set("isRefreshing",false)
}
const tables = {
    "Food_List_Refreshing":change_refreshing,
    "Food_List_Loading":change_loading,
    "Food_List_Loading_Data":change_loading_data,
    "Food_List_Refreshing_Data":change_refreshing_data,
    "Food_Refresh_Step":food_refresh_step,
    "Food_Like_Add_Data":food_like,
    "Food_Like_Delete_Data":food_unlike,
    "Food_List_Unmount_Clear":clear
}

export default function food_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}