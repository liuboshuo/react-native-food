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
import NetWorkImage from "../common/component/netWorkImage";

const numColumns = 2

const contentMargin = 15
class Home_Com extends Component{

    renderColumnItem(data){
        const {main_data}=this.props;

        let separatorStyle = {}
        if ((data.index+1) % numColumns == 0 ){
            separatorStyle = {
                marginLeft:contentMargin,
                marginRight:contentMargin
            }
        }else{
            separatorStyle = {
                marginLeft:contentMargin,
            }
        }

        return (
            <TouchableOpacity activeOpacity={1}
                              style={[separatorStyle,styles.contentButtonView]}
            >
                <NetWorkImage uri={data.item.albums[0]}
                              style={styles.albumStyle}
                />
                <View style={styles.textView}>
                    <Text style={styles.whiteTextStyle}>{data.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        const {main_data}=this.props;
        appLog(main_data);
        if (main_data.length){
            return (
                <View style={styles.container}>
                    <View style={[styles.titleView,commonStyle.separatorStyle]}>
                        <Text style={commonStyle.titleFontStyle}>{"热门分类"}</Text>
                    </View>
                    <View>
                        <FlatList style={styles.flatList}
                                  data={main_data}
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
export default Home_Com;

const styles = StyleSheet.create({
    container:{

    },
    titleView:{
        paddingLeft:10,
        height:30,
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:'#f3f3f3'
    },
    flatList:{

    },
    contentButtonView:{
        width:(common_theme.screenWidth - (numColumns+1) * contentMargin) / numColumns,
        height:100,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:contentMargin,
    },
    whiteTextStyle:{
        width:(common_theme.screenWidth - (numColumns+1) * contentMargin) / numColumns,
        color:"#ffffff",
        fontSize:common_theme.titleFontSize,
        textAlign:'center'
    },
    textView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        left:0,
        width:(common_theme.screenWidth - (numColumns+1) * contentMargin) / numColumns,
        height:20,
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    albumStyle:{
        width:(common_theme.screenWidth - (numColumns+1) * contentMargin) / numColumns,
        height:100,
    }
})