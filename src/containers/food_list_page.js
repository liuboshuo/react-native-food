import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {connect} from 'react-redux'

class Food_List_Page extends React.Component {
    // 页面自定义导航栏
    static navigationOptions = (navigation)=>{
        console.log(navigation)
        const {params} = navigation.navigation.state;
        return(
            {
                title:params.select_tag.name
            }
        )
    }
    render (){
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>分类</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default connect(null,null) (Food_List_Page)
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
