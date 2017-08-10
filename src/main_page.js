import React, {Component} from 'react'
import {
    NativeModules
} from 'react-native'
import Routers from './routers'
import {connect} from 'react-redux'
import {server_config} from "./common/server";
import {read_browser_food, read_like_food} from "./actions/profile_action";

class Main_Page extends Component{

    componentDidMount() {
        const {dispatch} = this.props;
        NativeModules.NativeAppModules.getAppInfos().then(data=>{
            server_config(data)
        })
        /**
         * 加载浏览数据
         */
        dispatch(read_browser_food())
        /**
         * 获取收藏数据
         */
        dispatch(read_like_food())
    }
    render(){
        return(<Routers/>)
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps) (Main_Page);