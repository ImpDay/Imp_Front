import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


const Adding = ({navigation}) => {

  return (
    <SafeAreaView
      style={{position:'relative',width:'100%', backgroundColor: 'black', height:'100%'}}>
        <View style={{position:'relative',flexDirection: 'row', alignItems: 'center',paddingLeft:'2%',paddingRight:'2%',
            backgroundColor: 'black',alignItems:'center',justifyContent:'space-between'}}>
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
                <AntDesign name="arrowleft" style={{ color:'#dddddd', fontSize: 25, paddingTop:'1%', }} /> 
            </TouchableOpacity>
            <Text style={{color:'#dddddd', fontSize:17, fontWeight:'bold'}}>
              Template 생성
            </Text>
            <TouchableOpacity>
                <Entypo name="add-to-list" style={{color:'#dddddd', fontSize:27, paddingTop:'2%'}}/>
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'orange',width:'100%', height:'35%', marginTop:'10%'}}>
          <View style={{backgroundColor:'green', width:'100%'}}>

          </View>
          <View>

          </View>
        </View>
        <View>
          <View>

          </View>
        </View>
      </SafeAreaView>
  )
}

export default Adding