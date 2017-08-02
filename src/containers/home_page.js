import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {get} from './common/server'
import {connect} from 'react-redux'
import {hideHud, showHud} from "./utils/util";


class Home_Page extends React.Component {
    render (){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    showHud()
                    get("http://apis.juhe.cn/cook/index?key=fgsdufsdfkysdudfh&cid=1",null,(response)=> {
                        hideHud()
                        appLog(response)
                    })
                }}>
                    <Text>测试</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default connect(null,null) (Home_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
