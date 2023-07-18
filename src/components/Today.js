import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import TodayPost from "./TodayPost";

const Today = ({navigation}) => {
    return(
        <SafeAreaView
            style={{position:'relative',width:'100%', backgroundColor: 'black', height:'100%'}}>
            <View style={{position:'relative',flexDirection: 'row', alignItems: 'center',paddingLeft:'2%',paddingRight:'2%',
                backgroundColor: 'black',alignItems:'center',}}>
                <TouchableOpacity
                    onPress={()=>{
                    navigation.goBack();
                }}>
                    <AntDesign name="arrowleft" style={{ color:'#dddddd', fontSize: 25, paddingTop:'1%', }} /> 
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', backgroundColor:'black', paddingTop:'3%'}}>
                <ScrollView>
                    <TodayPost/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Today