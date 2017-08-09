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
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView
                    contentInset={{top:-400}}
                    contentOffset={{y:400}}>
                    <Profile_Top_View />

                    <View style={{marginTop:20}}>
                        <Set_Profile_Cell
                            leftImageName="icon_profile_collection"
                            leftTitleName="收藏"
                            onPush={()=>{
                                navigate("profile_like",{"title":"收藏"})
                            }}

                        />
                        <Set_Profile_Cell
                            leftImageName="icon_profile_history"
                            leftTitleName="浏览记录"
                            onPush={()=>{
                                navigate("profile_browser",{"title":"浏览记录"})
                            }}
                        />
                    </View>
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
