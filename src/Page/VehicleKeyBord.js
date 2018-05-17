/**
 *  Author: liweicai
 *  Date: 2018/5/16.
 *  Description:
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {commonStyle} from "../utils/commonStyle";
import {autoHeight, autoWidth, scaleSize} from "../utils/ScreenUtil";
import {extraUtil} from "../utils/extraUtils";

export default class VehicleKeyBord extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    _renderCell(index) {
        let cell;
        if (index + 1 == this.props.titles.length) {
            let img = require('../assets/images/button_delete.png')
            cell = (
                <Image source={img} resizeMode='stretch' style={{width:autoWidth(140),height:autoHeight(70),borderRadius:5}}/>
            );

        }else if(extraUtil.isNullStr(this.props.titles[index])){
            cell=(
                <View
                    style={{ width:autoWidth(60),height:autoHeight(70),marginLeft:autoHeight(20),}}
                />
            );
        }else {
            let mLeft = autoWidth(15);
            if(this.props.titles.length > 37){
                mLeft = autoWidth(5)
            }
            cell = (
                <View
                    style={[{marginLeft:mLeft},styles.itemBg]}>
                    <Text style={{fontSize: scaleSize(36), textAlignVertical: 'center', color: commonStyle.textBlockColor,}}>
                        {this.props.titles[index]}
                    </Text>
                </View>
            );
        }
        return cell;
    }

    // 渲染
    render() {
        return (
            <View style={styles.container}>
                {this.props.titles.map((title, i) => (
                    <TouchableOpacity
                        key={i}
                        onPress={() => this.props.onSelected(i)}>
                        {this._renderCell(i)}
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        paddingLeft:autoWidth(10),
        paddingRight:autoWidth(20),
        paddingTop:autoHeight(30),
        paddingBottom:autoHeight(12),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: commonStyle.between,
        backgroundColor:'#cfcfcf'
    },
    itemBg:{
        borderWidth:0,
        // borderColor:commonStyle.themeColor,
        borderRadius:5,
        width:autoWidth(60),
        height:autoHeight(70),
        flexDirection: commonStyle.row,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:autoWidth(10),
        marginBottom:autoHeight(18),
        backgroundColor:commonStyle.white
    }
});
