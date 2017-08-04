import React from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    SectionList,
    Text,
    RefreshControl
} from 'react-native'
import {connect} from 'react-redux'
import {getAllTagData,changeTag} from './../actions/home_action'
import {common_theme,commonStyle} from "./../common/commonStyle";
import Button from './../common/component/button'
import Menu_All_Tag from './../component/menu_section_tag'
import NavigationBar from "../common/component/navBarCommon";
import * as ActionTypes from './../actions/actionType'
class Menu_Page extends React.Component {

    static navigationOptions = {
        header:null
    }
    changeViewType(){
        const {show_tag_default_view,dispatch} = this.props;
        dispatch({
            type:ActionTypes.Menu_ChangeLeftViewTag,
            data:{show_tag_default_view:!show_tag_default_view}
        })
    }

    componentDidMount() {
        this.onRefresh()
    }

    onRefresh(){
        const {dispatch,menu_tag_refreshing} = this.props;
        if (!menu_tag_refreshing){
            dispatch(getAllTagData())
        }
    }
    changeTag(select_index){
        const {dispatch,left_tag_select_index} = this.props;
        if (left_tag_select_index != select_index){
            dispatch(changeTag(select_index))
        }
    }
    renderHorizontal(){
        const {tags_data,left_tag_select_index} = this.props;
        if (tags_data.length <= 0 ) return null;
        const leftView = tags_data.map((item,index)=>{
            let backgroundStyle = {}
            if (index == left_tag_select_index){
                backgroundStyle = {
                    borderLeftWidth:3,
                    borderLeftColor:common_theme.themeColor,
                    backgroundColor:"#fff"
                }
            }
            return (
                <Button text={item.name}
                        textStyle={[styles.leftText]}
                        onPress={this.changeTag.bind(this,index)}
                    style={[styles.leftButton,commonStyle.rowCenter,backgroundStyle]}
                />
            )
        })
        return (
            <View style={[styles.container,{flexDirection:'row'}]}>
                <View style={styles.leftView}>
                    <ScrollView ref="scrollView" style={styles.scrollView}>
                        {leftView}
                    </ScrollView>
                </View>
                <View style={styles.rightView}>
                    <ScrollView>
                        <Menu_All_Tag tag={tags_data[left_tag_select_index]}
                                      columns={common_theme.screenWidth > 320 ? 3 : 2}
                                      width={(common_theme.screenWidth / 10)*7.5}
                                      showTitleView={false}
                                      cellOnClick={this.pushList.bind(this)}/>
                    </ScrollView>
                </View>
            </View>
        )
    }

    renderVertical(){
        const {tags_data} = this.props;
        return tags_data.map((item,index)=>{
            return(
                <Menu_All_Tag tag={item} key={index} index={index} cellOnClick={this.pushList.bind(this)}/>
            )
        })
    }
    pushList(selectTag){
        const {navigate} = this.props.navigation;
        navigate("food_list",{select_tag:selectTag})
    }
    render (){
        const {menu_tag_refreshing,show_tag_default_view} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar title={"分类"}
                               leftTitle={"切换"}
                               leftAction={()=>this.changeViewType()}
                />
                <ScrollView style={styles.container}
                            refreshControl={<RefreshControl
                                onRefresh={this.onRefresh.bind(this)}
                                refreshing={menu_tag_refreshing}
                                title="加载中..."
                                titleColor={"#333"}
                            />}
                >
                    {show_tag_default_view ?
                        this.renderHorizontal() :
                        this.renderVertical()
                    }
                </ScrollView>
            </View>
        )
    }
}
function mapStateToProps(state) {
    const {home_reducer} = state;
    return home_reducer.toJS();
}
export default connect(mapStateToProps) (Menu_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    leftView:{
        width:(common_theme.screenWidth / 10) * 2.5,
        height:common_theme.screenHeight-common_theme.navigationBarHeight - 49,
    },
    rightView:{
        height:common_theme.screenHeight-common_theme.navigationBarHeight - 49,
        width:(common_theme.screenWidth / 10) * 7.5,
    },
    leftText:{
        fontSize:15,
        color:"#333",
        paddingLeft:6,
        paddingRight:6,
    },
    leftButton:{
        height:40,
        backgroundColor:'transparent',
    },
    scrollView:{
        backgroundColor:"rgba(230,230,230,0.9)"
    }
});
