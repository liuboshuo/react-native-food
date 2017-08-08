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


class Profile_Page extends React.Component {
    // 页面自定义导航栏
    static navigationOptions = (navigation)=>{
        return(
            {
                header:null
            }
        )
    }
    render (){
        return (
            <View style={styles.container}>
                <ScrollView
                    contentInset={{top:-400}}
                    contentOffset={{y:400}}>
                    <Profile_Top_View />
                </ScrollView>
            </View>
        )
    }
}
export default connect(null,null) (Profile_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
