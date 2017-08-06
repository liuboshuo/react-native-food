import React ,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList
} from 'react-native'
import {common_theme,commonStyle} from "./../common/commonStyle";
import NetWorkImage from "../common/component/netWorkImage";

const numColumns = 2

class Food_Step_View extends Component{

    renderColumnItem(data){
        return (
            <View style={styles.tagButtonView}>
                <Text style={styles.blackTextStyle}>
                    {data.item.step}
                </Text>
                <View style={styles.imgView}>
                    <NetWorkImage uri={data.item.img} style={styles.img}/>
                </View>
            </View>
        )
    }
    itemSeparatorComponent(){
        return(<View style={styles.separatorStyle}/>)
    }
    render(){
        let {ingredients,title}=this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.titleView,commonStyle.row,commonStyle.separatorStyle]}>
                    <Text style={commonStyle.titleFontStyle}>{title}</Text>
                </View>
                <View>
                    <FlatList style={styles.flatList}
                              data={ingredients}
                              renderItem={this.renderColumnItem.bind(this)}
                              ItemSeparatorComponent={this.itemSeparatorComponent}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    titleView:{
        paddingLeft:common_theme.viewMPLeft,
        height:25,
        backgroundColor:'#f3f3f3'
    },
    flatList:{

    },
    tagButtonView:{
        paddingLeft:10,
        paddingRight:10,
    },
    blackTextStyle:{
        marginTop:6,
        fontSize:common_theme.titleFontSize,
        color:common_theme.titleColor,
        marginBottom:6,
    },
    imgView:{
      alignItems:'center',
      justifyContent:'center',
    },
    img:{
        width:common_theme.screenWidth * 0.9,
        height:200,
        marginBottom:10,
    },
    separatorStyle:{
        marginLeft:10,
        backgroundColor:common_theme.separatorColor,
        height:0.6
    }
})
export default Food_Step_View;