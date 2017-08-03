import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";
import *as ActionTypes from './../actions/actionType'
const initialState = Immutable.Map({
    top_banners:Immutable.List(),
    top_tags:Immutable.List(),
})

function get_home_top_banners(state,data) {
    return state.set("top_banners",data.top_banners);
}
function get_home_top_tags(state,data) {
    return state.set("top_tags",data.top_tags);
}
const tables = {
    "Home_GetBannerData":get_home_top_banners,
    "Home_GetBannerTagsData":get_home_top_tags
}

export default function home_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}