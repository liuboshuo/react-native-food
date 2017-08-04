
import {Platform,Dimensions} from 'react-native'

export const common_theme = {

    screenWidth:Dimensions.get('window').width,

    screenHeight:Dimensions.get('window').height,

    themeColor:'#E44C3D',

    full_view_background_color:'#EEEEEE',


    tabBarHeight:49,

    navigationBarHeight:Platform.OS == 'ios'?64:44,

    statusBarHeight:Platform.OS == 'ios' ? 20 : 0,


    titleFontSize:15,
    titleColor:'#4A4944',

    subTitleFontSize:14,
    subTitleColor:'#7d7d7d',

    thirdFontSize:13,
    thirdTextColor:'#eee',


    separatorWidth:1,
    separatorColor:'#E9E9E9',


    viewMPLeft:10,
    viewMPRight:10,

    viewMPTop:6,
    viewMPBottom:6,

    sectionMarginPadding:15,

    cellHeight:44,

    cellMaxHeight:50,

    icon_back:{uri:"icon_back"}
}


export const commonStyle = {
    full_view_nav_tabBar_style: {
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
        paddingTop: common_theme.navigationBarHeight,
        paddingBottom: common_theme.tabBarHeight
    },
    full_view_nav_style: {
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
        paddingTop: common_theme.navigationBarHeight
    },
    full_view_hide_tabBar_style: {
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
        paddingBottom: common_theme.tabBarHeight
    },
    full_view_navBar_hide_style: {
        flex: 1,
        backgroundColor: common_theme.full_view_background_color,
    },
    rowCell: {
        flexDirection: "row",
    },

    titleFontStyle: {
        fontSize: common_theme.titleFontSize,
        color:  common_theme.titleColor,
    },
    subTitleFontStyle: {
        fontSize: common_theme.subTitleFontSize,
        color:  common_theme.subTitleColor,
    },
    thirdFontStyle: {
        fontSize: common_theme.thirdFontSize,
        color:  common_theme.thirdTextColor,
    },

    separatorStyle:{
        borderBottomColor:common_theme.separatorColor,
        borderBottomWidth:common_theme.separatorWidth,
    },

    rowCenter:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    },
    rowSpaceAround:{
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center'
    },
    rowSpaceBetween:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    column:{
        flexDirection:'column',
        alignItems:'center'
    },
    columnSpaceBetween:{
        flexDirection:'column',
        justifyContent:"space-between",
        alignItems:'center'
    },
    columnSpaceAround:{
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
    }
};
