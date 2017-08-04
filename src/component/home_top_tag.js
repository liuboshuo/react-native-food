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
import {commonStyle,common_theme} from "./../common/commonStyle";

const numColumns = 4

class Home_Top_Tag extends Component{

    renderColumnItem(data){
        const {top_tags,topTagOnClick}=this.props;

        let separatorStyle = {}
        if ((data.index+1) % numColumns == 0 ){
            separatorStyle = {
                borderBottomColor:common_theme.separatorColor,
                borderBottomWidth:common_theme.separatorWidth,
            }
        }else{
            separatorStyle = {
                borderBottomColor:common_theme.separatorColor,
                borderBottomWidth:common_theme.separatorWidth,
                borderRightColor:common_theme.separatorColor,
                borderRightWidth: common_theme.separatorWidth,
            }
        }

        return (
            <TouchableOpacity activeOpacity={0.1}
                              style={[separatorStyle,styles.tagButtonView,commonStyle.rowCenter]}
                              onPress={()=>topTagOnClick(data.item)}
            >
                <Text style={styles.blackTextStyle}>{data.item.name}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        const {top_tags}=this.props;
        if (top_tags.length){
            top_tags.push({
                name:"更多"
            })
            return (
                <View style={styles.container}>
                    <View style={[styles.titleView,commonStyle.row,commonStyle.separatorStyle]}>
                        <Text style={commonStyle.titleFontStyle}>{"热门分类"}</Text>
                    </View>
                    <View>
                        <FlatList style={styles.flatList}
                                  data={top_tags}
                                  renderItem={this.renderColumnItem.bind(this)}
                                  numColumns={numColumns}
                        />
                    </View>
                </View>
            )
        }else {
            return (
                null
            )
        }

    }
}
export default Home_Top_Tag;
const styles = StyleSheet.create({
    container:{

    },
    titleView:{
        paddingLeft:common_theme.viewMPLeft,
        height:30,
        backgroundColor:'#f3f3f3'
    },
    flatList:{

    },
    tagButtonView:{
        width:common_theme.screenWidth / numColumns,
        height:40,
    },
    blackTextStyle:{
        fontSize:common_theme.subTitleFontSize,
    }
})