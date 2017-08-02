/**
 * Created by ls-mac on 2017/5/21.
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    InteractionManager,
    StyleSheet
} from 'react-native';

const FLEX_DIRECTION ={ 'top': 'column',
    'right': 'row',
    'bottom': 'column',
    'left': 'row' };

const EVENT_HANDLER_PROP_NAMES = ['onPress', 'onPressIn', 'onPressOut'];

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string,
        iconPosition: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
        style: PropTypes.any
    };

    render() {
        const { style, textStyle, iconStyle, text, icon, iconPosition: iconPosition='left' } = this.props;

        let eventHandlers = {};
        for (ehProp of EVENT_HANDLER_PROP_NAMES) {
            if ( this.props[ehProp]) {
                const handler = this.props[ehProp];
                eventHandlers[ehProp] = handler;
            }
        }

        let btnStyle = [styles.container];
        if ( typeof style == 'Array' ) {
            btnStyle = btnStyle.concat(style);
        } else {
            btnStyle.push(style);
        }
        btnStyle.push( { 'flexDirection': FLEX_DIRECTION[iconPosition]});

        const containerProps = Object.assign({}, this.props, eventHandlers, { style: btnStyle });

        return (
            <TouchableOpacity {...containerProps} >
                {( 'top' == iconPosition || 'left' == iconPosition) && icon &&
                <Image style={[styles.iconStyle, iconStyle]}
                       source={icon} /> }
                {text && text != '' &&
                <Text style={[styles.textStyle, textStyle]}>{this.props.text}</Text>
                }
                {('bottom' == iconPosition || 'right' == iconPosition) && icon &&
                <Image style={[styles.iconStyle, iconStyle]}
                       source={icon} /> }
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCC',
    },

    iconStyle: {
        flex: 0,
        width: 25,
        height: 25
    },

    textStyle: {
        fontSize: 18,
    }

});
