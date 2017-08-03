import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {connect} from 'react-redux'


class Profile_Page extends React.Component {
    render (){
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>其它页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default connect(null,null) (Profile_Page)
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
