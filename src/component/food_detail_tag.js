import React ,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {common_theme,commonStyle} from './../common/commonStyle'
export default class Food_Detail_Tags extends Component {

    render(){
        const {tags} = this.props;
        return(
            <View style={styles.rightBottom}>
                {
                    tags.map((tag,index)=>{
                        appLog(index)
                        return (
                            <View key={index} style={[commonStyle.row,styles.tagView]}>
                                <Text style={styles.textTagStyle}>
                                    {tag}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rightBottom:{
        marginTop:5,
        flexDirection:"row",
        alignItems:'center',
        flexWrap:'wrap',
        marginBottom:5,
    },
    tagView:{
        borderRadius:5,
        paddingTop:3,
        paddingBottom:3,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:common_theme.themeColor,
        marginBottom:3,
        marginRight:6,
    },
    textTagStyle:{
        color:"#fff",
        fontSize:common_theme.thirdFontSize,
        backgroundColor:"rgba(0,0,0,0)",
        padding:0,
        margin:0,
    }
})
