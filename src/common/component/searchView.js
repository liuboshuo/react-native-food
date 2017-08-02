/**
 * Created by liushuo on 17/6/29.
 */
/**
 * Created by ls-mac on 2017/5/21.
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
const {width} = Dimensions.get("window")
export default class SearchView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            searchText:"",
            showSearch:false,
            isSearching:false,
            change:false
        };
      }
    onChangeTextSearch(searchText){

        if (this.state.isSearching){
            if (searchText != this.state.searchText){
                this.state.change = true
            }
            if (searchText.length == 0) {
                this.state.change = false
                this.props.resume()
                this.setState({
                    isSearching:false,
                    change:false,
                })
            }
        }
        this.setState({
            searchText:searchText
        })
    }
    onBlur(){
        if(this.state.searchText.trim().length == 0){
            this.setState({
                showSearch:false
            })
        }
    }
    onFocus(){
        console.log(this.state.showSearch)
        this.setState({
            showSearch:true
        })
    }

    searchClick(){
        this.textInput.blur();
        this.props.onSearch(this.state.searchText.trim())
        this.setState({
            isSearching:true,
        })
        this.state.change = false
    }

    resume(){
        this.state.searchText = "";
        this.textInput.blur();
        this.props.resume()
        this.setState({
            isSearching:false,
            change:false,
            showSearch:false
        })
    }

    render() {
        const searchViewStyle = this.props.style ? this.props.style : null
        const {title} =this.props;
        return (
            <View style={ [styles.searchView,searchViewStyle]}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    flex:1,
                }}>
                    <TextInput
                        ref={ref=>this.textInput = ref}
                        placeholder={title ? title :"搜索"}
                        onChangeText={this.onChangeTextSearch.bind(this)}
                        style={styles.titleTextInput}
                        underlineColorAndroid={'transparent'}
                        defaultValue={this.state.searchText}
                        onBlur={this.onBlur.bind(this)}
                        onFocus={this.onFocus.bind(this)}
                    >

                    </TextInput>

                    {
                        this.state.isSearching ?
                            <TouchableOpacity style={styles.closeButtonStyle} onPress={this.resume.bind(this)} activeOpacity={1}>
                                <Image style={styles.closeButtonImageStyle} source={{uri:"icon_search_close"}}/>
                            </TouchableOpacity>
                            :
                            null
                    }
                </View>

                {
                    this.state.isSearching ?
                        this.state.change?
                            <TouchableOpacity style={styles.searchButton} onPress={this.searchClick.bind(this)}>
                                <Text style={styles.searchButtonTitle}>搜索</Text>
                            </TouchableOpacity>
                            :
                        null
                    :
                    this.state.showSearch &&  this.state.searchText.trim().length > 0?
                        <TouchableOpacity style={styles.searchButton} onPress={this.searchClick.bind(this)}>
                            <Text style={styles.searchButtonTitle}>搜索</Text>
                        </TouchableOpacity>
                        :
                        this.state.showSearch && this.state.searchText.trim().length == 0?
                            <TouchableOpacity style={styles.searchButton} onPress={()=>
                            {
                                this.textInput.blur();}}>
                                <Text style={styles.cancel}>取消</Text>
                            </TouchableOpacity>
                            :null

                }

            </View>
        );
    };
}


const styles = StyleSheet.create({
    closeButtonStyle:{
        position:'absolute',
        right:0,
        width:30,
        height:30,
        paddingLeft:6,
        paddingRight:6,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    closeButtonImageStyle:{
        width:15,
        height:13
    },
    searchView:{
        flexDirection:'row',
        height:45,
        width:width,
        backgroundColor:"rgba(190,190,190,0.4)",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:7,
        paddingBottom:7,
    },
    titleTextInput:{
        flex:1,
        backgroundColor:"#fff",
        fontSize:15,
        color:"rgba(200,200,200,1)",
        paddingLeft:6,
        paddingRight:30,
        borderRadius:3,
        paddingTop:0,
        paddingBottom:0
    },
    searchButton:{
        marginLeft:11,
        height:30,
        flexDirection:"row",
        alignItems:'center',
    },
    searchButtonTitle:{
        fontSize:15,
        color:"#1f1f1f"
    },
    cancel:{
        fontSize:15,
        color:"red"
    }

});
