/**
 * Created by ls-mac on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    Platform,
    StatusBar,
} from 'react-native';
import {common_theme} from './../commonStyle'
class AndroidStatusBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {hidden} = this.props;
        if (hidden == undefined) hidden = false;
        if (Platform.OS == 'ios'){
            return null
        }else {
            return (

                <StatusBar
                    backgroundColor={common_theme.themeColor}
                    barStyle="light-content"
                    hidden={hidden}
                />
            )
        }
    }
}


export default AndroidStatusBar