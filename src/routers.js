/**
 * Created by liushuo on 17/7/6.
 */
import Home_Page from './containers/home_page'
import Menu_Page from './containers/menu_page'
import Profile_Page from './containers/profile_page'
import Food_List_Page from './containers/food_list_page'
import Like_Page from './containers/like_page'
import Browser_page from './containers/browser_page'

import {StackNavigator,TabNavigator} from 'react-navigation'
import React from 'react'
import {StyleSheet,Image} from 'react-native';
import {common_theme} from "./common/commonStyle";
import Food_Steps_Page from "./containers/food_steps_page";
import Food_Browser_Page from "./containers/food_browser_page";


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

/**
 * 定义tab 配置 导航栏标题，选项卡 标题 选中图标  未选中图标,选种颜色，未选中颜色,
 */
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

/**
 * 定制选项卡
 */
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


/**
 * 导航栏的样式
 */
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

/**
 * APP 导航
 */
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
        },
        food_browser:{
            screen:Food_Browser_Page,
            navigationOptions:{...navigationOptions}
        },
        profile_like:{
            screen:Like_Page,
            navigationOptions:{...navigationOptions}
        },
        profile_browser:{
            screen:Browser_page,
            navigationOptions:{...navigationOptions}
        }
    },
    // other config
    {
        //cardStyle:"" 自定义动画，跳转
    }
)

export default Routers;