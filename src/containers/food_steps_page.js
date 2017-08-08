import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
    Animated
} from 'react-native'
import {common_theme,commonStyle} from "../common/commonStyle"
import NetWorkImage from "../common/component/netWorkImage";
import Food_Ingredient_View from './../component/food_ingredient'
import Food_Step_View from './../component/food_step'
import Button from "../common/component/button";
import Food_Detail_Tags from "./../component/food_detail_tag";
import {save_browser_food,read_browser_food} from './../actions/food_action'
import {connect} from 'react-redux'

const scrollEventThrottle = 1;


class Food_Steps_Page extends React.Component{

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

    componentDidMount() {
        const {dispatch} = this.props;
        const {params} = this.props.navigation.state;
        const {select_item} = params;

        dispatch(read_browser_food())
        dispatch(save_browser_food(select_item))
    }
    pop(){
        const {goBack} = this.props.navigation;
        goBack()
    }
    foodStepImageDetail(images,index){
        const {navigate} = this.props.navigation;
        navigate("food_browser",{datas:images,clickIndex:index})
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

    render(){
        const {params} = this.props.navigation.state;
        const {select_item} = params;
        let tags = select_item.tags.split(";");
        return(
            <View style={styles.container}>

                <Animated.View style={[commonStyle.rowCenter,styles.navigationBar,{
                    opacity:this.state.topViewOpacity.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,1]
                    })

                }]}>
                    <Text style={styles.headerTitleStyle}>{select_item.title}</Text>
                </Animated.View>


                <Button icon={{uri:"icon_back"}}
                        onPress={this.pop.bind(this)}
                        iconStyle={styles.backIcon} style={[styles.backButton,commonStyle.rowCenter]}/>


                <ScrollView style={styles.container}
                            onScroll={this.onScroll.bind(this)}
                            scrollEventThrottle={scrollEventThrottle}>

                    <View style={styles.topView}>
                        <NetWorkImage uri={select_item.albums[0]} style={styles.topIcon}/>
                    </View>

                    <View style={[commonStyle.column,{paddingLeft:6,paddingRight:6}]}>
                        <Text style={styles.titleTextView}>{select_item.title}</Text>
                        <Text style={styles.imtroText}>{select_item.imtro}</Text>
                        <Food_Detail_Tags tags={select_item.tags.split(";")} />
                    </View>


                    <Food_Ingredient_View title="主料" ingredients={select_item.ingredients.split(";")}/>
                    <Food_Ingredient_View title="辅料" ingredients={select_item.burden.split(";")}/>

                    <View style={styles.stepsView}>
                        <Food_Step_View
                            onClickStepImage={this.foodStepImageDetail.bind(this)}title={"步骤"} ingredients={select_item.steps}/>
                    </View>


                </ScrollView>


            </View>
        )
    }
}


function mapStateToProps(state) {
    const {food_reducer} = state;
    return food_reducer.toJS()
}
export default connect(mapStateToProps) (Food_Steps_Page)

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
    topView:{
        width:common_theme.screenWidth,
        height:200,
    },
    topIcon:{
        width:common_theme.screenWidth,
        height:200,
    },
    titleTextView:{
        fontSize:17,
        color:common_theme.titleColor,
        marginTop:6,
    },
    imtroText:{
        fontSize:common_theme.subTitleFontSize,
        color:common_theme.subTitleColor,
        marginTop:6,
    },
    stepsView:{

    },
    backIcon:{
        width:25,
        height:25
    },
    backButton:{
        position:'absolute',
        left:0,
        top:common_theme.statusBarHeight,
        width:40,
        height:40,
        backgroundColor:'transparent',
        zIndex:6666
    }

});
