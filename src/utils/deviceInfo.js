/**
 *  Author: liweicai
 *  Date: 2018/5/4.
 *  Description: 设备信息
 */


import {Dimensions, Platform,PixelRatio} from 'react-native'
// import DeviceInfo from 'react-native-device-info'
export default deviceInfo = {
    // 设备宽度
    deviceWidth: Dimensions.get('window').width,
    // 设备高度
    deviceHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height - 24,
    // 1像素
    onePixel: 1 / PixelRatio.get(),
    // 状态栏高度
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0),
    // 设备系统
    deviceOS: Platform.OS,
    // 当前config: debug \ release
    mode: __DEV__ ? 'xdebug' : 'release'
}