/**
 * Created by liushuo on 17/4/27.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator,
} from 'react-native';

export default class NeWorkImage extends Component {

    constructor (props) {
        super(props)
        this.state = {
            loading:true
        }
    }
    static defaultProps = {
        placeholder:{
            resizeMode:null,
            uri:null
        },
        loadViewBg:null,
        width:0,
        height:0,
    }


    loadHandle(){
        this.setState({
            loading:false
        })
    }
    render() {

        const resizeMode = this.props.placeholder!= null?this.props.placeholder.resizeMode != null ?this.props.placeholder.resizeMode:"stretch" :"stretch";
        const loadViewBg = this.props.loadViewBg != null?this.props.loadViewBg:'rgba(0,0,0,.05)';
        return (
            <View>
                <Image onLoad={this.loadHandle.bind(this)}
                             source={{uri:this.props.uri}}
                             style={this.props.style? this.props.style:{}}>
                    {this.state.loading && <View style={[styles.loadingView,{backgroundColor:loadViewBg}]}>
                        {
                            this.props.placeholder == null ?
                                <ActivityIndicator animating={this.state.loading} size={"small"} />
                                :
                            this.props.placeholder.uri != null ?
                            <Image style={[styles.loadingImage,{width:this.props.width,height:this.props.height,resizeMode:resizeMode}]} source={{uri:this.props.placeholder.uri}}/>

                                :<ActivityIndicator animating={this.state.loading} size={"small"} />
                        }
                    </View>
                    }
                </Image>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loadingView:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    loadingImage:{

    }
})
