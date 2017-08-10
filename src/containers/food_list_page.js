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
import {food_list_unmount_clear, load_food_list_data} from "../actions/food_action";
import {common_theme,commonStyle} from "./../common/commonStyle";
import Button from "./../common/component/button";
import Common_Food_List_Cell from "../component/common_cell";
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
        this.inputSearching = false;
    }
    componentWillMount() {
        const {params} = this.props.navigation.state;
        if (!params){
            this.searching = true;
        }
    }

    componentWillUnmount() {
        const dispatch = this.props.dispatch;
        dispatch(food_list_unmount_clear());
    }
    componentDidMount() {
        this.onRefresh(true)
    }
    startSearch(){
        this.textInput.blur()
        const text = this.textInput._lastNativeText;
        if (text && text.length){
            this.inputSearching = true;
            this.onRefresh(true);
        }
    }
    onRefresh(isRefreshing){
        const {params} = this.props.navigation.state;
        const dispatch = this.props.dispatch;
        const {rn} = this.props;
        if (!this.searching && !this.inputSearching){
            const {select_tag} = params;
            dispatch(load_food_list_data(null,select_tag.id,rn,isRefreshing));
        }else {
            const text = this.textInput._lastNativeText
            if (text){
                dispatch(load_food_list_data(text,null,rn,isRefreshing));
            }
        }
    }
    renderItem(item){

        return (
            <Common_Food_List_Cell
                food_list_item={item.item}
                onClick={this.push_food_step.bind(this)}/>
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
        this.onRefresh(false)
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
                               androidLineOfColor="transparent"

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
                              onRefresh={()=>this.onRefresh(true)}
                              ItemSeparatorComponent={this.itemSeparatorComponent}
                              refreshing={isRefreshing}
                              ListFooterComponent={this.renderFooterView.bind(this)}
                              onEndReachedThreshold={0}
                              onEndReached={this.onEndReached.bind(this)}
                    />
                    :this.inputSearching?
                        <FlatList style={styles.flat}
                                  renderItem={this.renderItem.bind(this)}
                                  data={food_list_data}
                                  onRefresh={()=>this.onRefresh()}
                                  ItemSeparatorComponent={this.itemSeparatorComponent}
                                  refreshing={isRefreshing}
                                  ListFooterComponent={this.renderFooterView.bind(this)}
                                  onEndReachedThreshold={0}
                                  onEndReached={this.onEndReached.bind(this)}
                        />:null

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

    separatorStyle:{
        height:0.3,
        backgroundColor:common_theme.separatorColor,
        marginLeft:common_theme.viewMPLeft,
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
