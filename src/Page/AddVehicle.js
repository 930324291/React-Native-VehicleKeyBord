/**
 *  Author: liweicai
 *  Date: 2018/5/16.
 *  Description:
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import VehicleKeyBord from "./VehicleKeyBord";
import VehicleInput from "./VehicleInput";
import VehicleColor from "./VehicleColor";
import {autoHeight, autoWidth, scaleSize} from "../utils/ScreenUtil";
import {commonStyle} from "../utils/commonStyle";
import deviceInfo from "../utils/deviceInfo";

let titles = ['京', '津', '冀', '鲁', '晋', '蒙', '辽', '吉', '黑'
    , '沪', '苏', '浙', '皖', '闽', '赣', '豫', '鄂', '湘'
    , '粤', '桂', '渝', '川', '贵', '云', '藏', '陕', '甘'
    , '琼', '新', '宁', '青','','','', '']
let vehicleNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9' , '0'
   , 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P','港','澳'
    , 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','学'
    , 'Z', 'X', 'C', 'V','B','N','M', '']
let inputNum = ['','','','','','','']

export default class AddVehicle extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bordIndex: 0, // 键盘位置
            inputIndex: 0, // 输入框位置
            colorIndex:0, // 车牌颜色选择位置
            inputs : inputNum,
            vehicleProvince : titles,
            showKeyBord:true, // 是否显示键盘
        };
    }
    navigationBarProps =()=>  {
        return {
            title: '添加车辆',
        }
    }

    _renderKeyBord(){
        if(!this.state.showKeyBord){
            return ;
        }
        return(
            <View >
                <TouchableOpacity
                    onPress={() =>
                        this.setState({showKeyBord: false})
                    }>
                    <Text style={styles.keyFinish}>完成</Text>
                </TouchableOpacity>


                <VehicleKeyBord
                    titles={this.state.vehicleProvince}
                    selectedIndex={this.state.bordIndex}
                    onSelected={(index) => {
                        this.setState({bordIndex: index})
                        // 车牌输入框
                        if(this.state.inputIndex < this.state.inputs.length){
                            let k = this.state.inputIndex
                            // 写入当前输入框文字
                            this.state.inputs[k] = this.state.vehicleProvince[index]
                            this.setState({inputs: this.state.inputs})

                            // 写入后 输入框位置后移一位
                            if(index == this.state.vehicleProvince.length-1){
                                k = k-1
                                this.setState({inputIndex: k})
                            }else {
                                k = k+1;
                                if(this.state.inputIndex != this.state.inputs.length-1){
                                    this.setState({inputIndex: k})
                                }
                            }

                            // 输入框第二个位置开始切换键盘
                            if(k > 0){
                                this.setState({vehicleProvince: vehicleNum})
                            }else {
                                this.setState({vehicleProvince: titles})
                            }
                        }
                    }}
                />
            </View>
        );
    }

    _renderVehicleColor(){
        return(
            <VehicleColor
                selectedIndex={this.state.colorIndex}
                onSelected={(index) => {
                    this.setState({colorIndex: index})
                    if(index == 1 || index == 4){
                        inputNum = ['','','','','','','','']
                    }else {
                        inputNum = ['','','','','','','']
                    }
                    this.setState({inputs: inputNum})
                }}
            />


        );
    }
    _renderInput(){
        return(
            <VehicleInput
                titles={this.state.inputs}
                selectedIndex={this.state.inputIndex}
                onSelected={(index) => {
                    this.setState({inputIndex: index})
                    this.setState({showKeyBord: true})
                    if(index > 0){
                        this.setState({vehicleProvince: vehicleNum})
                    }else {
                        this.setState({vehicleProvince: titles})
                    }
                }}
            />
        );
    }

    _renderHead(){
        return(
            <View>
                <Text style={{fontSize:scaleSize(28),color:'#515a5d',marginLeft:autoWidth(30),height:autoHeight(80),textAlignVertical: 'center',}}>请选择车牌颜色</Text>
                {this._renderVehicleColor()}
                <Text style={{fontSize:scaleSize(28),color:'#515a5d',marginLeft:autoWidth(30),height:autoHeight(80),textAlignVertical: 'center',}}>请输入车牌号</Text>
                {this._renderInput()}
            </View>
        );
    }
    // 渲染
    render() {
        return (
            <View style={{flex:1,justifyContent: commonStyle.between,}}>
                {this._renderHead()}
                {this._renderKeyBord()}
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    keyFinish:{
        fontSize:scaleSize(30),
        textAlignVertical:commonStyle.center,
        textAlign:'right',
        height:autoHeight(70),
        width:deviceInfo.deviceWidth,
        paddingLeft:autoWidth(30),
        paddingRight:autoWidth(18),
        backgroundColor:commonStyle.white
    }
});
