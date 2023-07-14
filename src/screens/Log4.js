import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import  * as KakaoLogin from '@react-native-seoul/kakao-login';
import { useNavigation } from '@react-navigation/native';

const log4 = () => {
    const navigation =useNavigation();
    KakaoLogin.login().then((result) => {
        console.log("Login Success", JSON.stringify(result));
        navigation.push('MyTab');
    }).catch((error) => {
        if (error.code === 'E_CANCELLED_OPERATION') {
            console.log("Login Cancel", error.message);
        } else {
            console.log(`Login Fail(code:${error.code})`, error.message);
        }
    });
};
  

export default log4;