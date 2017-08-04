import *as ActionTypes from './../actions/actionType'
import homeDatas from './../../api/home.json'
import allTagDatas from './../../api/category.json'
import Immutable from 'immutable'

//
export function getBannerDatas() {

    return (dispatch,getState)=>{
        //随机三个
        let banners = Immutable.List();
        const datas = homeDatas.result.data
        for (let i=0;i<3;i++){
            const index = Math.floor(Math.random() * 10)
            const data = Immutable.fromJS(datas[index])
            banners = banners.push(data)
        }
        dispatch({
            type:ActionTypes.Home_GetBannerData,
            data:{
                top_banners:banners
            }
        })
    }

}

export function getMainDatas() {

    return (dispatch,getState)=>{
        //随机三个
        dispatch({
            type:ActionTypes.Home_GetMainData,
            data:{
                main_data:Immutable.fromJS(homeDatas.result.data)
            }
        })
    }

}

export function getAllTagData(){
    return (dispatch,getState)=>{

        dispatch({
            type:ActionTypes.Menu_Update_LoadTags,
            data:{
                menu_tag_refreshing:true
            }
        })
        setTimeout(()=>{
            //随机三个
            const allDataTags = allTagDatas.result

            const tags = [];
            for (let i=0;i<allDataTags.length;i++){
                const data = allDataTags[i];
                data["key"] = data.name;
                data["isOpen"] = true;
                tags.push(data);
                for (let j=0;j<data.list.length;j++){
                    const food = data.list[j];
                    food["key"] = food.id;
                }
                data["data"] = data.list;
            }

            dispatch({
                type:ActionTypes.Menu_AllTagsData,
                data:{
                    tags_data:Immutable.fromJS(tags),
                    menu_tag_refreshing:false
                }
            })
        },2000)

    }
}
export function changeTag(left_tag_select_index){
    return (dispatch,getState)=>{
        dispatch({
            type:ActionTypes.Menu_ChangeTag,
            data:{
                left_tag_select_index:left_tag_select_index
            }
        })
    }
}

export function changeOpen(isOpen,index) {
    return (dispatch,getState)=>{
        dispatch({
            type:ActionTypes.Menu_ChangeFlatOpen,
            data:{
                isOpen:isOpen,
                index:index
            }
        })
    }

}
export function getTagDatas() {

    return (dispatch,getState)=>{
        //随机三个
        let top_tags = Immutable.List();
        const allDataTags = allTagDatas.result
        for (let i=0;i<15;i++){
            const index = Math.floor(Math.random() * 28)
            const data = Immutable.fromJS(allDataTags[index])
            data["key"] = Math.random()
            top_tags = top_tags.push(data)
        }
        dispatch({
            type:ActionTypes.Home_GetBannerTagsData,
            data:{
                top_tags:top_tags
            }
        })
    }

}