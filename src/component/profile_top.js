/**
 * Created by ls-mac on 2017/3/6.
 */
import React , {Component} from 'react';
import {
    Text ,
    View,
    Platform,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {common_theme} from "./../common/commonStyle";

let {width} = Dimensions.get('window');

export default  class Profile_Top_View extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.accountViewStyle}>
                    <Image  source={{uri:"icon_profile_user"}} style={styles.leftIconStyle}/>
                    <View style={styles.rightOutViewStyle}>
                        <Text style={styles.rightInnerTextStyle}>
                            {"测试账号"}
                        </Text>
                    </View>
                    <Image source={{uri:"icon_right"}} style={styles.rightInnerRightIconStyle}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        height: Platform.OS == 'ios'? 550 : 150,
        backgroundColor:common_theme.themeColor,

    },
    accountViewStyle:{
        marginTop:Platform.OS == 'ios' ? 450 : 50,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8
    },

    rightOutViewStyle:{
        flexDirection:'row',
        width:width * 0.7,
        alignItems:'center'
    },
    rightInnerTextStyle:{
        fontSize:common_theme.titleFontSize,
    },
    rightInnerLeftIconStyle:{
        width:20,
        height:20,
    },
    rightInnerRightIconStyle:{
        width:8,
        height:13,

    }
})