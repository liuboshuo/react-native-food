import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";
const initialState = Immutable.Map({
    top_banners:Immutable.List(),
    top_tags:Immutable.List(),
    main_data:Immutable.List(),
    tags_data:Immutable.List(),
    menu_tag_refreshing:false,
    show_tag_default_view:true,
    left_tag_select_index:0
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
    return state.set("tags_data",data.tags_data).set("menu_tag_refreshing",data.menu_tag_refreshing);
}
function menu_change_tag(state,data) {
    return state.set("left_tag_select_index",data.left_tag_select_index);
}
function update_menu_load_tag_refreshing(state,data) {
    return state.set("menu_tag_refreshing",data.menu_tag_refreshing);
}
function menu_change_view_tag(state,data) {
    return state.set("show_tag_default_view",data.show_tag_default_view).set("menu_tag_refreshing",0);
}
function menu_change_flat_open(state,data) {
    let tags_data = state.get("tags_data");
    let tag_data = tags_data.get(data.index);
    tag_data = tag_data.set("isOpen",!data.isOpen);
    tags_data = tags_data.set(data.index,tag_data)
    return state.set("tags_data",tags_data);
}
const tables = {
    "Home_GetBannerData": get_home_top_banners,
    "Home_GetBannerTagsData": get_home_top_tags,
    "Home_GetMainData": get_home_main,
    "Menu_AllTagsData": get_menu_tags_data,
    "Menu_StartLoadTags": update_menu_load_tag_refreshing,
    "Menu_ChangeTag": menu_change_tag,
    "Menu_ChangeLeftViewTag": menu_change_view_tag,
    "Menu_ChangeFlatOpen": menu_change_flat_open
}

export default function home_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}