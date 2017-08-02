/**
 * Created by ls-mac on 2017/5/10.
 */
import React from 'react'
import {NativeModules,Alert,Platform} from 'react-native'

export function isEmptyObject(e) {
    let t;
    for (t in e)
        return !1;
    return !0
}
export function showError(msg) {
    Alert.alert("错误",msg,[{"text":"确定"}]);
}
export function showMessage(msg,onOk=null) {
    Alert.alert("提示",msg,[{"text":"确定",onPress:onOk}]);
}
export function confirmMessage(msg,onOk,onCancle) {
    Alert.alert("温馨提示",msg,[
        {"text":"取消",onPress:onCancle},
        {"text":"确定",onPress:onOk}
        ]);
}
export function showHud(msg="") {
    NativeModules.NativeAppModules.showHud(msg);
}
export function showHint(msg) {
    NativeModules.NativeAppModules.showHint(msg);
}
export function hideHud() {
    NativeModules.NativeAppModules.hideHud();
}
export function notEmpty(str) {
    if (str && str.length > 0 && str != 'null' && str !="undefined" ) {
        return true;
    } else {
        return false;
    }
}

export function trim(data){
    for(var i in data){
        if(undefined != data[i] && null != data[i]){
            if(typeof data[i] == 'string'){
                data[i] = data[i].replace(/(^\s*)|(\s*$)/g, "");
            }
        }
    }
    return data;
}

export function validateMobile(phone) {

    if (!notEmpty(phone)) return false;

    if (phone.length != 11) return false;

    if ( parseInt(phone.substr(0,1)) != 1 ) return false;

    return true;

}
//验证密码
export function validatePassword(password) {

    if (!notEmpty(password)) return false;

    if (password.length < 6 ) return false;

    return true;

}

//验证数字
export function validateNumber(number) {
    return isNaN(parseFloat(number));

}
export function validateCard(card) {
    let num = card.toUpperCase();
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)))
    {
        return false;
    }
    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    //下面分别分析出生日期和校验位
    var len, re;
    len = num.length;
    if (len == 15)
    {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re);

        //检查生日日期是否正确
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay)
        {
            return false;
        }
        else
        {
            //将15位身份证转成18位
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for(i = 0; i < 17; i ++)
            {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return true;
        }
    }
    if (len == 18)
    {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re);

        //检查生日日期是否正确
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay)
        {
            return false;
        }
        else
        {
            //检验18位身份证的校验码是否正确。
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            for(i = 0; i < 17; i ++)
            {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1))
            {
                return false;
            }
            return true;
        }
    }
    return false;
}
