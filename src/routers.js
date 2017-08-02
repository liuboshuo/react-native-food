import React from 'react'
import {
    NativeModules,
} from 'react-native'
import {connect} from 'react-redux'


class Routers extends React.Component {
    render (){
        NativeModules.NativeAppModules.getAppInfos().then(response=>{
            appLog(response)
        })
        return (
            <Home_Page />
        )
    }
}
export default connect(null,null) (Routers)

