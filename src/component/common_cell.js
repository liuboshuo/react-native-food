import React from 'react'
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import NetWorkImage from "./../common/component/netWorkImage";
import Food_Detail_Tags from "./food_detail_tag";
import {common_theme,commonStyle} from "./../common/commonStyle"

export default class Common_Food_List_Cell extends React.Component {

    push_food_step(food_list_item){
        this.props.onClick(food_list_item)
    }
    render() {
        const {food_list_item} = this.props;
        let tags = food_list_item.tags.split(";");
        if (tags.length > 3){
            tags = tags.splice(0,3);
        }
        return(
            <TouchableOpacity onPress={this.push_food_step.bind(this,food_list_item)} style={styles.cellContent}>
                <NetWorkImage uri={food_list_item.albums[0]} style={styles.iconStyle}/>
                <View style={styles.right}>
                    <Text style={[commonStyle.titleFontStyle,styles.titleStyle]}>{food_list_item.title}</Text>
                    <Text numberOfLines={3} style={[commonStyle.subTitleFontStyle,styles.textStyle]}>{food_list_item.imtro}</Text>
                    <Food_Detail_Tags tags={tags} />
                </View>
                <Image source={{uri:"icon_right"}} style={{width:15,height:10}}/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    cellContent:{
        flexDirection:"row",
        alignItems:'center',
        marginLeft:common_theme.viewMPLeft,
        marginRight:common_theme.viewMPRight,
        paddingTop:common_theme.viewMPTop,
        paddingBottom:common_theme.viewMPBottom
    },
    iconStyle:{
        width:common_theme.screenWidth * 0.35,
        height:common_theme.screenWidth * 0.25,
        borderRadius:6
    },
    right:{
        flex:1,
        marginLeft:10,
    },
    titleStyle:{
        marginBottom:6,
    },
    textStyle:{
        marginBottom:4,
    }

})