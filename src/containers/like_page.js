import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import Profile_Top_View from "../component/profile_top";
import Set_Profile_Cell from './../component/set_profile_cell'

class Like_Page extends React.Component {
    // 页面自定义导航栏
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
export default connect(null,null) (Like_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
