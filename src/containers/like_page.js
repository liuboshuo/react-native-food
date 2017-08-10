import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView
} from 'react-native'
import {connect} from 'react-redux'
import profile_reducer from "../reducers/profile_reducer";
import Common_Food_List_Cell from "./../component/common_cell";
import {delete_like, save_like_food} from "../actions/profile_action";
import Swipeout from 'react-native-swipeout'
import {commonStyle,common_theme} from "../common/commonStyle";
class Like_Page extends React.Component {
    // 页面自定义导航栏
    static navigationOptions = ({navigation})=>{
        const {params} = navigation.state;
        return(
            {
                headerTitle:params.title
            }
        )
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
        }
    }
    push_food_step(food_list_item){
        const {navigate} = this.props.navigation;
        navigate("food_step",{select_item:food_list_item})
    }
    delete(index){
        const {dispatch} = this.props;
        dispatch(delete_like(index))
    }
    cell(item,sectionId,rowId){
        console.log("----",rowId)
        const {food_list_like} = this.props;
        const index = parseInt(rowId)
        let separatorStyle = {}
        if (food_list_like.length != (index+1)){
            separatorStyle = {
                height:0.6,
                marginLeft:common_theme.viewMPLeft,
                backgroundColor:common_theme.separatorColor
            }
        }
        return (
            <Swipeout style={{backgroundColor:"#fff"}}
                      autoClose={true}
                      right={[{
                          text: '删除',
                          backgroundColor: 'red',
                          type: 'primary',
                          onPress: () => {
                              this.delete(parseInt(rowId))
                          }
                      }]}
            >
                <Common_Food_List_Cell
                    food_list_item={item}
                    onClick={this.push_food_step.bind(this)}/>
                {/* separatorStyle */}
                <View style={separatorStyle}/>
            </Swipeout>
        )
    }
    render (){
        const {food_list_like} = this.props;
        appLog(food_list_like)
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource.cloneWithRows(food_list_like)}
                          renderRow={this.cell.bind(this)}
                />
            </View>
        )
    }
}
function mapStateToProps(state) {
    const {profile_reducer} = state;
    return {
        ...profile_reducer.toJS()
    }
}
export default connect(mapStateToProps) (Like_Page)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    titleStyle:{
        marginBottom:6,
    },
    textStyle:{
        marginBottom:4,
    },
});
