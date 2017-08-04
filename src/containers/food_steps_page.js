import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default class Food_Steps_Page extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
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
