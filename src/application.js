import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {get} from './common/server'
import {Provider} from 'react-redux'
import config_store from "./store";

export default class Application extends React.Component {
    render (){
        return (
            <Provider store={config_store()}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>{
                        get("http://apis.juhe.cn/cook/index?key=qwewqeqweqweqw&cid=1",null,(response)=> {
                            appLog(response)
                        }).then(response=>{
                            appLog(response)
                        })
                    }}>
                        <Text>测试</Text>
                    </TouchableOpacity>
                </View>

            </Provider>
        )
    }
}

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
