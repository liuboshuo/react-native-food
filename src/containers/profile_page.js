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

                    <View style={{backgroundColor:"#fff",marginTop:20}}>
                        <Set_Profile_Cell
                            leftImageName="icon_profile_account"
                            leftTitleName="我的账户"
                            onPush={()=>{

                            }}
                        />
                        <Set_Profile_Cell
                            leftImageName="icon_gr"
                            leftTitleName="实名信息"
                            onPush={()=>{

                            }}
                        />
                        <Set_Profile_Cell
                            leftImageName="icon_rmb"
                            leftTitleName="我的余额"
                            onPush={()=>{

                            }}
                        />
                        <Set_Profile_Cell
                            leftImageName="icon_profile_upload"
                            leftTitleName="我的上传"
                            onPush={()=>{

                            }}
                            separator={false}
                        />
                    </View>

                    <View style={{backgroundColor:"#fff",marginTop:20}}>
                        <Set_Profile_Cell
                            leftImageName="icon_profile_collection"
                            leftTitleName="我的收藏"
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
                            separator={false}
                        />
                    </View>



                    <View style={{backgroundColor:"#fff",marginTop:20}}>
                        <Set_Profile_Cell
                            leftImageName="icon_about"
                            leftTitleName="关于"
                            onPush={()=>{

                            }}
                        />
                        <Set_Profile_Cell
                            leftImageName="icon_profile_seting"
                            leftTitleName="设置"
                            onPush={()=>{

                            }}
                        />
                        <Set_Profile_Cell
                            leftImageName="icon_profile_common"
                            leftTitleName="应用评价"
                            onPush={()=>{

                            }}
                            separator={false}
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
    },

});
