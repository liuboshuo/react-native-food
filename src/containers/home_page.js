import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Animated
} from 'react-native'
import {connect} from 'react-redux'
import {getBannerDatas,getTagDatas,getMainDatas} from "./../actions/home_action";
import Home_Top_Banner from "./../component/home_top_banner";
import {common_theme} from "./../common/commonStyle";
import Button from "./../common/component/button";
import Home_Top_Tag from './../component/home_top_tag'
import Home_Com from "./../component/home_com";
import {commonStyle} from "./../common/commonStyle";
const scrollEventThrottle = 1;
class Home_Page extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            //动画
            topViewOpacity:new Animated.Value(0)
        }
    }
    // 页面自定义导航栏
    static navigationOptions = (navigation)=>{
        return(
            {
                header:null
            }
        )
    }
    onScroll(event){
        const y = event.nativeEvent.contentOffset.y;
        const maxY = 150;
        if (y <= maxY){
            Animated.timing(this.state.topViewOpacity,{
                toValue:y/maxY,
                duration:scrollEventThrottle
            }).start()
        }else {
            Animated.timing(this.state.topViewOpacity,{
                toValue:1,
                duration:scrollEventThrottle
            }).start()
        }
    }
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getBannerDatas())
        dispatch(getTagDatas())
        dispatch(getMainDatas())
    }
    push_food_list(select_tag){
        const {navigate} = this.props.navigation;
        navigate("food_list",{select_tag:select_tag})
    }
    push_food_step(select_item){
        const {navigate} = this.props.navigation;
        navigate("food_step",{select_item:select_item})
    }
    startSearch(){
        const {navigate} = this.props.navigation;
        navigate("food_list")
    }
    render (){
        const {top_banners,top_tags,main_data} = this.props;
        return (
            <View style={styles.container}>
                <Animated.View style={[commonStyle.rowCenter,styles.navigationBar,{
                    opacity:this.state.topViewOpacity.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,1]
                    })

                }]}>
                    <Text style={styles.headerTitleStyle}>{"推荐"}</Text>
                </Animated.View>
                <Button style={styles.navigationBarRight}
                        icon={{uri:"icon_top_search"}}
                        iconStyle={styles.searchIcon}
                        onPress={this.startSearch.bind(this)}
                />

                {/* 内容 */}
                <ScrollView style={styles.container}
                            onScroll={this.onScroll.bind(this)}
                            scrollEventThrottle={scrollEventThrottle}>
                    {/**/}
                    <Home_Top_Banner top_banners={top_banners} topBannerOnClick={this.push_food_step.bind(this)}/>
                    <Home_Top_Tag top_tags={top_tags} topTagOnClick={this.push_food_list.bind(this)}/>

                    <Home_Com main_data={main_data} bottomFoodOnClick={this.push_food_step.bind(this)}/>

                </ScrollView>
            </View>
        )
    }
}
function mapStateToProps(state) {
    const {home_reducer} = state;
    return home_reducer.toJS();
}
export default connect(mapStateToProps) (Home_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#ffffff"
    },
    navigationBar:{
        position:'absolute',
        left:0,
        top:0,
        height:common_theme.navigationBarHeight,
        width:common_theme.screenWidth,
        backgroundColor:common_theme.themeColor,
        zIndex:666 // 最上面的视图
    },
    headerTitleStyle:{
        marginTop:common_theme.statusBarHeight,
        fontSize:17,
        color:"#fff",
        fontWeight:'bold'
    },
    navigationBarRight:{
        position:'absolute',
        right:10,
        top: common_theme.statusBarHeight,
        flexDirection:'row',
        width:30,
        height:common_theme.navigationBarHeight - common_theme.statusBarHeight,
        zIndex:669,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:"center",
    },
    searchIcon:{
        width:20,
        height:20,
    }
});
