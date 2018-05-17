/**
 *  Author: liweicai
 *  Date: 2018/5/16.
 *  Description: 车牌颜色选择控件
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {autoHeight, autoWidth, scaleSize} from "../utils/ScreenUtil";
import {commonStyle} from "../utils/commonStyle";

let colorText = ['蓝','绿','黄','黑','黄绿']
export default class VehicleColor extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    color(index){
        let color = '#329aff'

        switch (index){
            case 0: color = '#329aff';
            break;
            case 1: color = '#32cd99';
                break;
            case 2: color = '#ffc345';
                break;
            case 3: color = '#000000';
                break;
        }
        return color
    }

    _renderColor(index){
        if(index == colorText.length-1){
            return(
                <View style={{flexDirection: 'row',width:autoWidth(120), height:autoHeight(70), justifyContent: 'center',alignItems: 'center'}}>
                    <View style={{backgroundColor:'#ffc345',width:autoWidth(42),height:autoHeight(70),borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
                    <View style={{backgroundColor:'#32cd99',width:autoWidth(78),height:autoHeight(70),borderTopRightRadius:5,borderBottomRightRadius:5}}/>
                    <Text style={{fontSize:scaleSize(36),position:commonStyle.absolute}}>
                        {colorText[index]}
                    </Text>
                </View>
            );
        }else {
            return(
                <Text style={[{fontSize:scaleSize(36),backgroundColor: this.color(index),},styles.itemBg]}>
                    {colorText[index]}
                </Text>
            );
        }
    }
    // 渲染
    render() {
        let selectedImg = require('../assets/images/icon_xuanzhong.png')
        let unSelectedImg = require('../assets/images/icon_weixuanzhong.png')
        return (
            <View style={styles.container}>
                {colorText.map((title, i) => (
                    <TouchableOpacity
                        key={i}
                        onPress={() => this.props.onSelected(i)}>
                        <View  style={{alignItems: 'center',justifyContent: 'center',}}>
                            {this._renderColor(i)}
                            <Image source={this.props.selectedIndex == i?selectedImg:unSelectedImg} resizeMode='cover' style={{width:autoHeight(30),height:autoHeight(30),marginTop:autoHeight(30)}}/>

                        </View>

                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        paddingLeft:autoWidth(30),
        paddingRight:autoWidth(30),
        paddingTop:autoHeight(20),
        paddingBottom:autoHeight(20),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: commonStyle.between,
        backgroundColor:commonStyle.white
    },
    itemBg:{
        borderWidth:0,
        // borderColor:commonStyle.themeColor,
        borderRadius:5,
        width:autoWidth(120),
        height:autoHeight(70),
        flexDirection: commonStyle.row,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color:commonStyle.white,
        textAlignVertical: 'center',
        textAlign:'center',
    }
});
