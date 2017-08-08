import React, {Component} from 'react'
import {
    NativeModules
} from 'react-native'
import Routers from './routers'
import {connect} from 'react-redux'
import {server_config} from "./common/server";
class Main_Page extends Component{

    componentDidMount() {
        const {dispacth} = this.props;
        NativeModules.NativeAppModules.getAppInfos().then(data=>{
            server_config(data)
        })
    }
    render(){
        return(<Routers/>)
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps) (Main_Page);