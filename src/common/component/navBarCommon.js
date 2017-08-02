import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import {common_theme} from './../commonStyle'
class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
    	const { title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction } = this.props;
        return (
            <View style={[styles.barView, this.props.style]}>
            	<View style={ styles.showView }>
            		{
                        leftTitle
                        ?
                        <TouchableOpacity style={styles.leftNav} onPress={ ()=>{leftAction()} }>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.barButton}>{leftTitle}</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        (
                            leftImage
                            ?
                            <TouchableOpacity style={styles.leftNav} onPress={ ()=>{leftAction()} }>
                                <View style={{alignItems: 'center'}}>
                                    <Image source={ leftImage } style={{width:25,height:25}}/>
                                </View>
                            </TouchableOpacity>
                            : null
                        )
            		}
		            {
                        title ?
                        <Text style={styles.title}>{title || ''}</Text>
                        : null
		            }
		            {
                        this.renderRight()
		            }

		        </View>
            </View>
        )
    }
    renderRight()
    {
        const { rightTitle, rightImage, rightAction } = this.props;
        if (rightTitle == null || rightTitle == undefined){
           return (
               <TouchableOpacity style={styles.rightNav} onPress={ ()=>{rightAction()} }>
                   <View style={{alignItems: 'center',flexDirection:'row',justifyContent:'center'}}>
                       <Image style={{width:25,height:25}} source={ rightImage }/>
                   </View>
               </TouchableOpacity>
               )
        }else if(rightImage == null || rightImage == undefined){
            return (
                <TouchableOpacity style={styles.rightNav} onPress={ ()=>{rightAction()} }>
                    <View style={{alignItems: 'center',flexDirection:'row',justifyContent:'center'}}>
                        <Text style={styles.barButton}>{rightTitle}</Text>
                    </View>
                </TouchableOpacity>
            )
        }else {
            return(
                <TouchableOpacity style={styles.rightNav} onPress={ ()=>{rightAction()} }>
                    <View style={{alignItems: 'center',flexDirection:'row',justifyContent:'center'}}>
                        <Text style={styles.barButton}>{rightTitle}</Text>
                        <Image style={{width:20,height:20}}source={ rightImage }/>
                    </View>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    barView: {
        height: common_theme.navigationBarHeight,
        backgroundColor: common_theme.themeColor,
    },
    showView: {
    	flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center',
    	flexDirection: 'row',
    	marginTop: Platform.OS === 'android' ? 0 : 20,
    	height: 44,
    },
    title: {
    	color: 'white',
    	fontSize: 18.0,
    },
    leftNav: {
    	position: 'absolute',
    	top: 8,
    	bottom: 8,
    	left: 8,
    	justifyContent: 'center',
    },
    rightNav: {
    	position: 'absolute',
    	right: 8,
    	top: 8,
    	bottom: 8,
    	justifyContent: 'center',
    },
    barButton: {
        color: 'white',
        fontSize: 18
    },
})



export default NavigationBar