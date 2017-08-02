import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
export default class Label extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {text,style,textStyle} = this.prop;
        return (<View style={[style,labelStyle.textView]}>
            <Text style={[labelStyle.textStyle,textStyle]}>{text? text : "" }</Text>
        </View>)
    }
}

const labelStyle = Stylesheet.create({
    textView:{
        paddingLeft:3,
        paddingRight:3,
        paddingTop:3,
        paddingBottom:3,
        borderRadius:6,
    },
    textStyle:{

    }
})