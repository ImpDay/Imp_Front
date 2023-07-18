import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import './ignore'
import Question from '../components/Question'


const Adding = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState();
  return (
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
            <Text style={{color:'#dddddd', fontSize:17, fontWeight:'bold', paddingLeft:'30%'}}>
              Template 생성
            </Text>
    
        </View>
        <View style={{backgroundColor:'black',width:'100%', height:'30%', marginTop:'10%'}}>
          <View style={{backgroundColor:'black', width:'100%', height:'15%', marginTop:'15%', flexDirection:'row'}}>
            <View style={{backgroundColor:'black', width:'25%', height:'100%', marginLeft:'10%', borderBottomColor:'#dddddd', borderWidth:1.5, borderTopColor:'#dddddd', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15, color:'#dddddd',fontWeight:'bold'}}>
                    Title
                </Text>
            </View>
            <View style={{backgroundColor:'black', width:'45%', height:'100%', marginLeft:'10%',}}>
              <TextInput placeholder='Please enter title...' placeholderTextColor="#777777"
                  style={{
                    width: "100%",
                    backgroundColor: '#dddddd',
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight:'bold'
                  }}
                  onChangeText={text => setTitle(text)}
                  value={title} />
            </View>
          </View>
          <View style={{backgroundColor:'black', width:'100%', height:'15%', marginTop:'12%', flexDirection:'row'}}>
            <View style={{backgroundColor:'black', width:'25%', height:'100%', marginLeft:'10%',borderBottomColor:'#dddddd', borderWidth:1.5, borderTopColor:'#dddddd', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15, color:'#dddddd',fontWeight:'bold'}}>
                    Period
                </Text>
            </View>
            <View style={{backgroundColor:'black', width:'45%', height:'100%', marginLeft:'10%'}}>
              <TextInput placeholder='Please enter period...' placeholderTextColor="#777777"
                  style={{
                    width: "100%",
                    backgroundColor: '#dddddd',
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight:'bold'
                  }}
                  onChangeText={text => setPeriod(text)}
                  value={period} />
            </View>
          </View>
        </View>
        <View style={{backgroundColor:'black', width:'100%', height:'50%'}}>
          <View style={{marginLeft:'10%',backgroundColor:'black', width:'100%', height:'15%', alignItems:'center', flexDirection:'row'}}>
              <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>
                  Question List
              </Text>
          </View>
          <View style={{backgroundColor:'black', width:'100%', height:'70%',}}>
                  <ScrollView>
                    <Question/>
                  </ScrollView>
                  <View style={{marginLeft:'10%',backgroundColor:'orange', width:'76%', height:'20%'}}>
                    <View style={{}}>

                    </View>
                  </View>
          </View>
        </View>
        <View style={{backgroundColor:'black', width:'100%', height:'10%'}}>
          <View style={{backgroundColor:'black', width:'100%', height:'50%', marginTop:'3%'}}>
              <TouchableOpacity>
                <View style={{backgroundColor:'black', width:'32%', height:'100%', marginLeft:'34%', borderColor:'#dddddd', borderWidth:1, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'#dddddd', fontWeight:'bold', fontSize:15}}>
                      Save
                    </Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  )
}

export default Adding