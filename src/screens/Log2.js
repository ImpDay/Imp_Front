import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Log2 = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const onSignIn = async () => {
    if (userId == '' || password == '') {
      Alert.alert('경고', '다시 입력해주세요');
    } else {
      try {
        Axios.post('http://172.10.5.152:80/login', {
          iduser: userId,
          password: password,
        },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(response => {
            console.log(response.status);
            if (response.status === 200) {
              // 로그인 성공 처리
              navigation.push('MyTab');
            } else if (response.status === 401) {
              // 비밀번호, 사용자 없음 불일치 처리
              Alert.alert('경고', '로그인 정보를 다시 확인하세요');
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
      <View style={{
        flexDirection: 'row', alignItems: 'center', padding: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
      }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" style={{ color: 'black', fontSize: 25, paddingTop: 5, }} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 100, backgroundColor: 'white', paddingBottom: 30 }}>
        <View style={{ paddingLeft: 70 }}>
          <Text style={{ fontSize: 18, color: '#113344', fontWeight: 'bold', paddingBottom: 30 }}>
            이메일 주소
          </Text>
        </View>
        <View style={{ paddingLeft: 40 }}>
          <TextInput placeholder='abc@gmail.com' placeholderTextColor="#909090"
            style={{
              width: "89%",
              backgroundColor: '#EBEBEB',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              padding: 4,
              paddingLeft: 30,
            }}
            onChangeText={text => setUserId(text)}
            value={userId} />
        </View>
        <View style={{ paddingTop: 60 }}>
          <View style={{ paddingLeft: 80 }}>
            <Text style={{ fontSize: 18, color: '#113344', fontWeight: 'bold', paddingBottom: 30 }}>
              비밀번호
            </Text>
          </View>
          <View style={{ paddingLeft: 40 }}>
            <TextInput placeholder='비밀번호 입력' placeholderTextColor="#909090"
              style={{
                width: "89%",
                backgroundColor: '#EBEBEB',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                padding: 4,
                paddingLeft: 35,
              }}
              onChangeText={text => setPassword(text)}
              value={password} />
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 20, paddingLeft: 130, paddingRight: 150, paddingBottom: 300, backgroundColor: 'white' }}>
        <TouchableOpacity onPress={onSignIn}>
          <View style={{ padding: 5, borderColor: '#113344', borderWidth: 2, backgroundColor: '#113344' }}>
            <Text style={{ color: 'white', paddingLeft: 28, paddingBottom: 5 }}>
              로그인
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default Log2