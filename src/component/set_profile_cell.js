/**
 * Created by ls-mac on 2017/3/4.
 */

import React , {Component} from 'react';
import {
    TouchableOpacity,
    Alert,
    Image,
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import {common_theme} from "./../common/commonStyle";

let {width} = Dimensions.get('window')

export default class Set_Profile_Cell extends Component {

    static defaultProps = {

        leftImageName:'',

        leftTitleName:"",

        rightTitleName:'',

        rightImageName:""

    }

    constructor(props){
        super(props);
    }


    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.onPush()}>
                <View style={styles.cellViewStyle}>
                    <View style={styles.leftOutViewStyle}>
                        <Image style={styles.leftIconStyle} source={{uri:this.props.leftImageName}}/>
                        <Text style={styles.leftTextStyle}>{this.props.leftTitleName}</Text>
                    </View>
                    {this.renderRightContent()}
                </View>

            </TouchableOpacity>

        )
    }
    renderRightContent(){
        if (this.props.rightImageName.length != 0){
            return(
                <View style={styles.rightOutViewStyle}>
                    <Image source={{uri:this.props.rightImageName}} style={styles.rightLeftIconStyle}></Image>
                    <Image source={{uri:'icon_right'}} style={styles.rightIconStyle}></Image>
                </View>
            )
        }else {
            return(
                <View style={styles.rightOutViewStyle}>
                    <Text style={{color:'#cccccc',marginRight:3}}>{this.props.rightTitleName}</Text>
                    <Image source={{uri:'icon_right'}} style={styles.rightIconStyle}></Image>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    cellViewStyle:{
        backgroundColor:'white',
        width:width,
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:common_theme.separatorColor,
        borderBottomWidth:0.5,
        alignItems:'center'
    },
    leftOutViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    leftIconStyle:{
        width:20,
        height:20,
        marginLeft:8,
        resizeMode:'contain'
    },
    leftTextStyle:{
        color:common_theme.titleColor ,
        marginLeft:10,
        fontSize:common_theme.titleFontSize
    },
    rightOutViewStyle:{
        marginRight:10,
        flexDirection:'row',
        alignItems:'center'
    },
    rightLeftIconStyle:{
        width:24,
        height:13,
        marginRight:10
    },
    rightIconStyle:{
        height:13,
        width:8,
    },
});
