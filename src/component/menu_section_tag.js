import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {common_theme,commonStyle} from "./../common/commonStyle"
import Button from "../common/component/button";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeOpen} from './../actions/home_action'
let viewPadding = 10
class Menu_All_Tag extends React.Component{

    static defaultProps = {
        columns:common_theme.screenWidth > 320 ? 4 : 3,
        width:common_theme.screenWidth,
    }
    renderColumnItem(data){
        const {columns,width,cellOnClick} = this.props;
        const style = {width:(width-2*viewPadding) / columns}
        return (
            <TouchableOpacity activeOpacity={0.1}
                              onPress={()=>cellOnClick(data.item)}
                              style={[styles.tagButtonView,commonStyle.rowCenter,style]}
            >
                <View style={[styles.innerTagView,commonStyle.rowCenter]}>
                    <Text style={[styles.blackTextStyle,style]}>{data.item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        const {key,tag,columns,index,changeStatus} = this.props;
        appLog(changeStatus)
        let showTitleView= this.props.showTitleView;
        if(showTitleView == undefined) showTitleView = true;
        return(
            <View style={styles.container} key={key?key:"key"}>
                {showTitleView ? <View style={[styles.titleView, commonStyle.rowSpaceBetween]}>
                    <Text style={commonStyle.titleFontStyle}>{tag.name}</Text>
                    <Button text={"关闭"}
                            style={[{width:100,height:40,backgroundColor:"transparent"},commonStyle.rowCenter]}
                            onPress={()=>changeStatus(tag.isOpen,index)}/>
                </View> : null
                }
                <FlatList style={styles.flatList}
                          data={tag.data}
                          renderItem={this.renderColumnItem.bind(this)}
                          numColumns={columns}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleView:{
        paddingLeft:common_theme.viewMPLeft,
        height:40,
        backgroundColor:'#f3f3f3'
    },
    flatList:{
        paddingLeft:viewPadding,
        paddingRight:viewPadding,
    },
    tagButtonView:{
        height:40,
    },
    innerTagView:{
        height:25,
        marginLeft:6,
        marginRight:6,
        marginTop:6,
        marginBottom:6,
        borderColor:"#999",
        borderWidth:0.6,
        borderRadius:10,
    },
    blackTextStyle:{
        maxHeight:25,
        fontSize:common_theme.subTitleFontSize,
        color:"#999",
        textAlign:'center',
        paddingLeft:6,
        paddingRight:6,
        backgroundColor:'transparent',
        overflow:'hidden'
    }
})
function mapDispatchToProps(dispatch) {
    return {
        changeStatus:function (open,index) {
            console.log(open,index)
            dispatch(changeOpen(open,index))
        }
    }
}
export default connect(null,mapDispatchToProps) (Menu_All_Tag);