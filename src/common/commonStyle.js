
import {Platform,Dimensions} from 'react-native'

export const common_theme = {

    screenWidth:Dimensions.get('window').width,

    screenHeight:Dimensions.get('window').height,

    themeColor:'#F20033',

    full_view_background_color:'#EEEEEE',


    tabBarHeight:49,

    navigationBarHeight:Platform.OS == 'ios'?64:44,

    statusBarHeight:Platform.OS == 'ios' ? 20 : 0,


    titleFontSize:15,
    titleColor:'#666',

    subTitleFontSize:14,
    subTitleColor:'#7d7d7d',

    thirdFontSize:13,
    thirdTextColor:'#eee',

    cellLeftPadding:10,

    cellRightPadding:10,

    cellTopPadding:10,

    cellBottomPadding:10,

    separatorWidth:1,

    separatorColor:'#E9E9E9',


    sectionMarginPadding:15,

    cellHeight:44,

    cellMaxHeight:50,

    icon_back:{uri:"icon_back"}
}


export const commonStyle = {
    full_view_nav_tabBar_style:{
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
        paddingTop: common_theme.navigationBarHeight,
        paddingBottom:common_theme.tabBarHeight
    },
    full_view_nav_style: {
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
        paddingTop: common_theme.navigationBarHeight
    },
    full_view_hide_tabBar_style: {
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
        paddingBottom:common_theme.tabBarHeight
    },
    full_view_navBar_hide_style: {
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
    },
    rowCell:{
        flexDirection:"row",
    }
};
