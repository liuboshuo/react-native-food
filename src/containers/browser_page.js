import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import {connect} from 'react-redux'

class Browser_Page extends React.Component {
    static navigationOptions = ({navigation})=>{
        const {params} = navigation.state;
        return(
            {
                headerTitle:params.title
            }
        )
    }
    render (){
        return (
            <View style={styles.container}>

            </View>
        )
    }
}
export default connect(null,null) (Browser_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
