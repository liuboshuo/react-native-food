import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {connect} from 'react-redux'
import {load_food_list_data} from "../actions/food_action";
import {common_theme,commonStyle} from "./../common/commonStyle";
import NetWorkImage from "./../common/component/netWorkImage";
import NavigationBar from "./../common/component/navBarCommon";
import Food_Detail_Tags from "./../component/food_detail_tag";
import Button from "../common/component/button";
class Food_List_Page extends React.Component {
    // 页面自定义导航栏
    static navigationOptions = (navigation)=>{
        return(
            {
                header:null
            }
        )
    }
    constructor(props){
        super(props);
        this.state = {
            text:null
        }
        this.searching = false;
    }
    componentWillMount() {
        const {params} = this.props.navigation.state;
        if (!params){
            this.searching = true;
        }
    }
    componentDidMount() {
        this.onRefresh()
    }
    startSearch(){
        this.textInput.blur()
        const text = this.textInput._lastNativeText;
        if (text && text.length){
            this.searching = true;
            this.onRefresh();
        }
    }
    onRefresh(){
        const {params} = this.props.navigation.state;
        const dispatch = this.props.dispatch;
        const {rn} = this.props;
        if (!this.searching){
            const {select_tag} = params;
            dispatch(load_food_list_data(null,select_tag.id,rn));
        }else {
            const text = this.textInput._lastNativeText
            if (text){
                dispatch(load_food_list_data(text,null,rn));
            }
        }
    }
    renderItem(item){
        let tags = item.item.tags.split(";");
        if (tags.length > 3){
            tags = tags.splice(0,3);
        }
        return(
            <TouchableOpacity onPress={this.push_food_step.bind(this,item.item)} style={styles.cellContent}>
                <NetWorkImage uri={item.item.albums[0]} style={styles.iconStyle}/>
                <View style={styles.right}>
                    <Text style={[commonStyle.titleFontStyle,styles.titleStyle]}>{item.item.title}</Text>
                    <Text numberOfLines={3} style={[commonStyle.subTitleFontStyle,styles.textStyle]}>{item.item.imtro}</Text>
                    <Food_Detail_Tags tags={tags} />
                </View>
                <Image source={{uri:"icon_right"}} style={{width:15,height:10}}/>
            </TouchableOpacity>
        )
    }
    push_food_step(select_item){
        const {navigate} = this.props.navigation;
        navigate("food_step",{select_item:select_item})
    }
    itemSeparatorComponent(){
        return(
            <View style={styles.separatorStyle}>

            </View>
        )
    }
    onEndReached(){
        const {isRefreshing,loading} = this.props;
        if (isRefreshing || loading != 0 ){
            return;
        }
        this.onRefresh()
    }
    renderFooterView(){
        const {isRefreshing,loading} = this.props;
        let text=""
        if (loading == 1){
            text = "正在加载中..."
        }else if (loading == 0){
            text = "上拉加载更多"
        }else if (loading == 2){
            text = "加载完毕"
        }else if (loading == 3){
            text = "暂无数据"
        }
        if (isRefreshing){
            return null
        }else {
            return <View style={styles.footer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        }

    }
    pop(){
        const {goBack} = this.props.navigation;
        goBack()
    }
    render (){
        const {food_list_data,isRefreshing} = this.props;
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.navigationBar}>
                    <Button style={styles.back_view}
                            onPress={this.pop.bind(this)}
                            icon={{uri:"icon_back"}}
                            iconStyle={styles.back_icon}
                    />

                    <TextInput ref={ref=>{this.textInput=ref}} placeholder={"输入关键字"}
                               style={styles.titleView}
                               defaultValue={this.searching ? this.state.text : params.select_tag.name}
                               androidColorOfUnderLines="transparent"

                    />

                    <Button style={styles.right_navigation_view}
                            text={"搜索"}
                            textStyle={styles.right_navigation_icon}
                            onPress={this.startSearch.bind(this)}
                    />
                </View>

                {!this.searching ?
                    <FlatList style={styles.flat}
                              renderItem={this.renderItem.bind(this)}
                              data={food_list_data}
                              onRefresh={()=>this.onRefresh()}
                              ItemSeparatorComponent={this.itemSeparatorComponent}
                              refreshing={isRefreshing}
                              ListFooterComponent={this.renderFooterView.bind(this)}
                              onEndReachedThreshold={0}
                              onEndReached={this.onEndReached.bind(this)}
                    />
                    :null
                }


            </View>
        )
    }
}
function mapStateToProps(state) {
    const {food_reducer} = state;
    return food_reducer.toJS()
}
export default connect(mapStateToProps) (Food_List_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flat:{
        flex:1,
        backgroundColor:'#fff'
    },
    cellContent:{
        flexDirection:"row",
        alignItems:'center',
        marginLeft:common_theme.viewMPLeft,
        marginRight:common_theme.viewMPRight,
        paddingTop:common_theme.viewMPTop,
        paddingBottom:common_theme.viewMPBottom
    },
    separatorStyle:{
        height:0.3,
        backgroundColor:common_theme.separatorColor,
        marginLeft:common_theme.viewMPLeft,
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
    },
    rightBottom:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    textTagStyle:{
        paddingLeft:5,
        paddingRight:5,
        color:"#fff",
        fontSize:common_theme.thirdFontSize,
    },
    tagView:{
        width:50,
        height:20,
        marginRight:6,
        borderRadius:5,
        backgroundColor:common_theme.themeColor,
        overflow:'hidden'
    },
    back_view:{
        width:40,
        height:40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent"
    },
    back_icon:{
        width:25,
        height:25
    },
    navigationBar:{
        height:common_theme.navigationBarHeight,
        flexDirection:"row",
        paddingTop:common_theme.statusBarHeight,
        backgroundColor:common_theme.themeColor
    },
    right_navigation_view:{
        width:50,
        height:40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent"
    },
    right_navigation_icon:{
        fontSize:17,
        color:"#ffffff"
    },
    titleView:{
        flex:1,
        backgroundColor:"#fff",
        padding:0,
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
        fontSize:common_theme.titleFontSize,
        color:common_theme.titleColor,
        paddingLeft:10,
    },
    footer:{
        height:45,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:16,
        color:common_theme.titleColor
    }
});
