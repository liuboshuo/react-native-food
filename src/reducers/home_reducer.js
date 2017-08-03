import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";
import *as ActionTypes from './../actions/actionType'
const initialState = Immutable.Map({
    top_banners:Immutable.List(),
    top_tags:Immutable.List(),
    main_data:Immutable.List(),
    tags_data:Immutable.List()
})

function get_home_top_banners(state,data) {
    return state.set("top_banners",data.top_banners);
}
function get_home_top_tags(state,data) {
    return state.set("top_tags",data.top_tags);
}
function get_home_main(state,data) {
    return state.set("main_data",data.main_data);
}

function get_menu_tags_data(state,data) {
    return state.set("tags_data",data.tags_data);
}
const tables = {
    "Home_GetBannerData":get_home_top_banners,
    "Home_GetBannerTagsData":get_home_top_tags,
    "Home_GetMainData":get_home_main,
    "Menu_AllTagsData":get_menu_tags_data
}

export default function home_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}