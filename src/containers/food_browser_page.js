/**
 * Created by ls-mac on 2017/5/10.
 */

import React, { Component } from 'react';
import {
    ActionSheetIOS,
    StyleSheet,
    Platform,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Gallery from 'react-native-gallery'
import {common_theme} from './../common/commonStyle'

export default class Food_Browser_Page extends Component {

    // 页面自定义导航栏
    static navigationOptions = (navigation)=>{
        return(
            {
                header:null
            }
        )
    }
    pop(){
        const {goBack} = this.props.navigation;
        goBack()
    }
    constructor(props) {
        super(props);
        this.images = [];
        this.state={
            page:0
        }
        const {clickIndex} = this.props.navigation.state.params;
        this.state.page = clickIndex;
    }
    onPageSelected(page){
        this.setState({page:page})
    }
    render() {
        const {clickIndex,datas} = this.props.navigation.state.params;
        this.images = [];
        for(let i=0;i<datas.length;i++){
            this.images.push(datas[i].img);
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButtonStyle} onPress={this.pop.bind(this)}>
                    <Image source={{uri:"icon_back"}} style={styles.back}/>
                </TouchableOpacity>
                <Gallery
                    style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}
                    images={this.images}
                    initialPage={clickIndex}
                    onPageSelected={this.onPageSelected.bind(this)}
                />
                <View style={styles.bottom}>
                    <Text numberOfLines={6} style={styles.stepStyle}>{datas[this.state.page].step}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    backButtonStyle:{
        position:'absolute',
        top: Platform.OS =='ios' ? 20 : 0,
        left:0,
        zIndex:10,
        width:40,
        height:40,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center'
    },
    back:{
        width:25,
        height:25
    },
    bottom:{
        position:'absolute',
        left:0,
        bottom:0,
        zIndex:11,
        width:common_theme.screenWidth,
        minHeight:120,
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    stepStyle:{
        fontSize:common_theme.titleFontSize,
        color:"#fff",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10
    }
});