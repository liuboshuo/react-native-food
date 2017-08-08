import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";
const initialState = Immutable.Map({
    food_list_browser:Immutable.List(),
    food_list_like:Immutable.List()
})

function profile_load_like(state,data) {
    
    return state.set("food_list_like",data.food_list_like);
}

function profile_load_browser(state,data) {

    return state.set("food_list_browser",data.food_list_browser)
}
const tables = {
    "Food_Like_Load_Data":profile_load_like,
    "Food_Browser_Load_Data":profile_load_browser
}

export default function profile_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}