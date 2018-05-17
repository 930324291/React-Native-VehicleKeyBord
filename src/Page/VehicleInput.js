/**
 *  Author: liweicai
 *  Date: 2018/5/16.
 *  Description: 车牌输入框
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {autoHeight, autoWidth, scaleSize} from "../utils/ScreenUtil";
import {commonStyle} from "../utils/commonStyle";

export default class VehicleInput extends Component {
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

    render() {

        return (
            <View style={styles.container}>
                {this.props.titles.map((title, i) => (
                    <TouchableOpacity
                        style={[{
                            borderColor:this.props.selectedIndex == i ? commonStyle.themeColor : '#d3d9dc'
                        },styles.itemBg]}
                        key={i}
                        onPress={() => this.props.
                        onSelected(i)}>
                        <Text style={{fontSize:scaleSize(36),textAlignVertical: 'center',color: commonStyle.themeColor,}}>
                            {this.props.titles[i]}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: commonStyle.around,
        backgroundColor:commonStyle.white,
        height:autoHeight(147),
        alignItems: 'center',
    },
    itemBg:{
        borderWidth:1,
        borderRadius:5,
        width:autoWidth(60),
        height:autoHeight(70),
        flexDirection: commonStyle.row,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:autoHeight(20),
        backgroundColor:commonStyle.white
    }
});
