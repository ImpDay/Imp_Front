import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Axios from 'axios'
import AntDesign from 'react-native-vector-icons/AntDesign'
import "./ignore";

const Log3 = ({navigation}) => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onSignUp = async () => {
    console.log(userId, password, username);
    if (userId == '' || password == '' || username =='') {
      Alert.alert('경고', '다시 입력해주세요');
    } else {
      try {
        Axios.post('http://172.10.5.152:80/signup', {
          iduser: userId,
          password: password,
          username: username,
        },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(response => {
            if (response.status === 200) {
              navigation.push('Log2');
            } else if (response.status === 500) {
              // 서버 오류 처리
              Alert.alert('서버 오류', '서버에 문제가 발생했습니다');
            }
          })
          .catch(error => console.log(error));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
      <SafeAreaView>
            <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '2%',
                paddingBottom: '3%',
                backgroundColor: 'black',
                }}>
                <TouchableOpacity
                    onPress={()=>{
                    navigation.goBack();
                }}>
                    <AntDesign name="arrowleft" style={{ color:'white', fontSize: 25, paddingTop:'2%'}} /> 
                </TouchableOpacity>
            </View>
            <View style={{position:'relative',paddingTop: '15%', backgroundColor: 'black', paddingBottom:'8%'}}>
              <View style={{position:'relative',paddingLeft:'25%'}}>
                <Text style={{fontSize:18, color: '#dddddd', fontWeight:'bold',paddingBottom:'7%'}}>
                  ID
                </Text>
              </View>
              <View style={{position:'relative',paddingLeft:'21%', width:'80%',}}>
                <TextInput placeholder='abc@gmail.com' placeholderTextColor="#909090"
                  style={{
                  width: "89%",
                  backgroundColor: '#EBEBEB',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  padding: '1%',
                  paddingLeft:15,
            }}
            onChangeText={text => setUserId(text)}/>
              </View>
            <View style={{position:'relative',paddingTop: '7%'}}>
              <View style={{position:'relative',paddingLeft:'25%'}}>
                <Text style={{fontSize:18, color: '#dddddd', fontWeight:'bold',paddingBottom:30}}>
                  password
                </Text>
              </View>
              <View style={{position:'relative',paddingLeft:'21%', width:'80%'}}>
                <TextInput placeholder='password' placeholderTextColor="#909090"
                  style={{
                  width: "89%",
                  backgroundColor: '#EBEBEB',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  padding: '1%',
                  paddingLeft: 15,
            }}
            onChangeText={text => setPassword(text)}/>
              </View>
          </View>
        </View>
        <View style={{postion:'relative',paddingTop:'4%',backgroundColor:'black'}}>
          <View style={{position:'relative',paddingLeft:'25%'}}>
                <Text style={{fontSize:18, color: '#dddddd', fontWeight:'bold',paddingBottom:30}}>
                  nickname
                </Text>
          </View>
          <View style={{position:'relative',paddingLeft:'21%', width:'80%'}}>
                <TextInput placeholder='nickname' placeholderTextColor="#909090"
                  style={{
                  width: "89%",
                  backgroundColor: '#EBEBEB',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  padding: '1%',
                  paddingLeft: 15,
            }}
            onChangeText={text => setUsername(text)}/>
              </View>
        </View>
        <View style={{postiion:'relative',paddingTop:70,paddingLeft:130,paddingRight:150,paddingBottom:300, backgroundColor: 'black'}}>
            <TouchableOpacity onPress={ onSignUp }>
              <View style={{position:'relative', padding:5,borderColor: '#555555', borderWidth:2, backgroundColor:'#555555'}}>
                <Text style={{color:'white', paddingLeft:24, paddingBottom:5}}>
                  회원가입
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
  )
}

export default Log3