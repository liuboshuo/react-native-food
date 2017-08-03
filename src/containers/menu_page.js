import React from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    FlatList,
    Text
} from 'react-native'
import {connect} from 'react-redux'
import {getAllTagData} from './../actions/home_action'
import {common_theme,commonStyle} from "./../common/commonStyle";
class Menu_Page extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getAllTagData())
    }

    renderColumnItem(data){
        return (
            <View style={[commonStyle.separatorStyle,styles.titleView]}>
                <Text style={styles.blackTextStyle}>{data.item.name}</Text>
            </View>
        )
    }
    render (){
        const {tags_data} = this.props;
        appLog(tags_data)
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View>
                        <FlatList style={styles.flatList}
                                  data={tags_data}
                                  renderItem={this.renderColumnItem.bind(this)}
                        />
                    </View>
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
        backgroundColor:'#f3f3f3'
    },
    titleView:{
        marginLeft:10,
        height:45,
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:'#f3f3f3'
    },
    blackTextStyle:{
        fontSize:common_theme.subTitleFontSize
    }
});
