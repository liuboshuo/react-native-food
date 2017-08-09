import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";
const initialState = Immutable.Map({
    food_list_data:Immutable.List(),
    loading:0,
    isRefreshing:false,
    rn:0,
    totalNum:0,
    food_step_refreshing:false,
    food_select_item:Immutable.Map()
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
        return state.set("food_step_refreshing",data.food_step_refreshing).set("food_select_item",data.food_select_item)
    }else {
        return state.set("food_step_refreshing",data.food_step_refreshing)
    }
}
const tables = {
    "Food_List_Refreshing":change_refreshing,
    "Food_List_Loading":change_loading,
    "Food_List_Loading_Data":change_loading_data,
    "Food_List_Refreshing_Data":change_refreshing_data,
    "Food_Refresh_Step":food_refresh_step
}

export default function food_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}