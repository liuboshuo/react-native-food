import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";
const initialState = Immutable.Map({
    food_list_browser:Immutable.List(),
    food_list_like:Immutable.List()
})

function profile_load_like(state,data) {
    
    return state.set("food_list_like",Immutable.fromJS(data.food_list_like));
}
function profile_data_add_like(state,data) {
    let food_list_like = state.get("food_list_like")
    food_list_like = food_list_like.push(Immutable.fromJS(data.food_data))
    return state.set("food_list_like",food_list_like);
}
function profile_load_browser(state,data) {

    return state.set("food_list_browser",Immutable.fromJS(data.food_list_browser))
}
function profile_data_add_browser(state,data) {
    let food_list_browser = state.get("food_list_browser")
    food_list_browser.push(Immutable.fromJS(data.food_data))
    return state.set("food_list_browser",food_list_browser);
}
function profile_delete_like(state,data) {
    let food_list_like = state.get("food_list_like")
    food_list_like = food_list_like.delete(data.index)
    return state.set("food_list_like",food_list_like);
}
const tables = {
    "Food_Like_Load_Data":profile_load_like,
    "Food_Browser_Load_Data":profile_load_browser,
    "Food_Browser_Add_Data":profile_data_add_browser,
    "Food_Like_Add_Data":profile_data_add_like,
    "Food_Like_Delete_Data":profile_delete_like
}

export default function profile_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}