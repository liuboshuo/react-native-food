/**
 * Created by liushuo on 17/7/6.
 */
import Home_Page from './containers/home_page'
import Menu_Page from './containers/menu_page'
import Profile_Page from './containers/profile_page'
import Food_List_Page from './containers/food_list_page'


import {StackNavigator,TabNavigator} from 'react-navigation'
import React from 'react'
import {StyleSheet,Image} from 'react-native';
import {common_theme} from "./common/commonStyle";
import Food_Steps_Page from "./containers/food_steps_page";


const styles = StyleSheet.create({
    iconBigStyle:{
        width:28,
        height:28,
    },
    iconStyle:{
        width:25,
        height:25
    },
})

// 定义tab 配置 导航栏标题，选项卡 标题 选中图标  未选中图标,选种颜色，未选中颜色,
function config_tab(component,title,tabBarLabel,tabSelected,tabUnSelected) {
    return {
        screen:component,
        navigationOptions:{
            headerTitle:title,
            tabBarLabel:tabBarLabel,
            tabBarIcon:({tintColor,focused})=>{
                //设置自定义的tabBar viewStyle
                if (focused) {
                    return (
                        <Image source={{uri:tabSelected}}
                               style={[{tintColor: tintColor},styles.iconStyle]}/>
                    )
                }else {
                    return (
                        <Image source={{uri:tabUnSelected}}
                               style={[{tintColor: tintColor},styles.iconStyle]}/>
                    )
                }
            }
        }

    }
}
const TabBar = TabNavigator(
    {
        home_page:config_tab(Home_Page,"推荐","推荐","tab_home_selected","tab_home_deselected"),
        menu_page: config_tab(Menu_Page,"分类","分类","tab_menu_selected","tab_menu_deselected"),
        profile_page: config_tab(Profile_Page,"我","我","tab_profile_selected","tab_profile_deselected")
    },

    // tab config
    {
        tabBarOptions: {
            style: {
                height:common_theme.tabBarHeight,
                backgroundColor:'#fff'
            },
            indicatorStyle:{
                height:0,
            },
            showIcon:true,
            activeTintColor:common_theme.themeColor,
            inactiveTintColor:'#4A4944',
            showLabel:true,
            labelStyle:{
                fontSize:11,
                marginTop:1,
                marginBottom:0
            },
            activeTintColor:common_theme.themeColor,
            inactiveTintColor:"#4A4944",
            activeBackgroundColor:'#fff',
            inactiveBackgroundColor:'#fff',
            lazy:false
        },
        lazy:false,
        tabBarPosition: 'bottom',
        animationEnabled: false, // 切换页面时不显示动画
        swipeEnabled: false, // 禁止左右滑动
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转



})


// 导航栏的样式
export const navigationOptions = {
    // header:null,//设置null 导航条隐藏header
    headerBackTitle: null,
    headerTintColor:"#fff",
    headerStyle:{
        backgroundColor:common_theme.themeColor,
        height:common_theme.navigationBarHeight, // 导航栏高度
    },
    headerTitleStyle:{

    },
    headerBackTitleStyle:{

    }
}

//APP 导航
const Routers = StackNavigator(
    {
        // 底部tab
        tabs:{
            screen:TabBar,
            navigationOptions: {...navigationOptions}
        },
        // 列表
        food_list:{
            screen:Food_List_Page,
            navigationOptions:{...navigationOptions}
        },
        // 菜谱详情
        food_step:{
            screen:Food_Steps_Page,
            navigationOptions:{...navigationOptions}
        }
    },
    // other config
    {
        //cardStyle:"" 自定义动画，跳转
    }
)

export default Routers;


// navigationOptions：配置StackNavigator的一些属性。
//
// title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用
// header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
// headerTitle：设置导航栏标题，推荐
// headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
// headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"
// headerRight：设置导航条右侧。可以是按钮或者其他视图控件
// headerLeft：设置导航条左侧。可以是按钮或者其他视图控件
// headerStyle：设置导航条的样式。背景色，宽高等
// headerTitleStyle：设置导航栏文字样式
// headerBackTitleStyle：设置导航栏‘返回’文字样式
// headerTintColor：设置导航栏颜色
// headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
// gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭