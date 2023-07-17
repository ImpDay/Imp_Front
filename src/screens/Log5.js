import { View, Text, Image, TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import "./ignore";

const Log5 = () => {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = async () => {
      navigation.push('Home');
      /*
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
      */
    };

return (

    <View style={{flexDirection: 'column', backgroundColor:'black', height:'100%'}}>
      <View style={{paddingLeft:'40%',position:'absolute', paddingTop:'132.5%', width:'100%', paddingRight:'40%', zIndex:1,}}>
        <View style={{backgroundColor:'black', borderRadius:30, paddingLeft:'6%'}}>
        <Text style={{color:'#dddddd',}}>
          간편 로그인
        </Text>
        </View>
      </View>
      <View style={{position:'relative',paddingTop:'30%', paddingLeft:'28%'}}>
        <Text style={{fontSize: 26, paddingLeft:'14%', paddingBottom:'23%', fontWeight:'400', color: "#dddddd", paddingTop:'10%'}}>
          하루, 셈
        </Text>
      </View>
      <View style={{position:'reltive',paddingTop:'14%', paddingLeft: '25%', paddingRight:'25%', paddingBottom:'5%', height:'15%', zIndex:2}}>
          <TextInput placeholder='abc@gmail.com' placeholderTextColor="#777777"
            style={{
              width: "100%",
              backgroundColor: '#dddddd',
              borderRadius: 6,
              fontSize: 14,
            }}
            onChangeText={text => setUserId(text)}
            value={userId} />
      </View>
      <View style={{position:'reltive',paddingTop:'1%', paddingLeft: '25%', paddingRight:'25%', paddingBottom:'5%', height:'7.9%', zIndex:2}}>
        <TextInput placeholder='password' placeholderTextColor="#777777"
                style={{
                  width: "100%",
                  backgroundColor: '#dddddd',
                  borderRadius: 6,
                  fontSize: 14,
                }}
                onChangeText={text => setPassword(text)}
                value={password} />
      </View>
      <View style={{paddingLeft:'25%', paddingRight:'25%', height:'5%', paddingTop:'1%', zIndex:2}}>
        <View style={{position:'relative',backgroundColor:'#777777',borderRadius:5, height:'80%'}}>
          <TouchableOpacity onPress={onSignIn}>
            <Text style={{color:'#dddddd', fontWeight:'bold',fontSize:15, paddingLeft:'39%'}}>
              로그인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position:'relative',paddingLeft:'37%', paddingRight:'35.6%', height:'7%', zIndex:2}}>
        <View style={{position:'relative', paddingTop:'10%', borderBottomColor:'#bbbbbb', borderWidth:1}}>
          <TouchableOpacity onPress={()=>navigation.push('Log3')}>
            <View>
              <Text style={{paddingLeft:'1%',fontSize:12, color: '#bbbbbb', fontWeight:'bold', paddingTop:'10%'}}>
                Or Create Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={{position:'relative',paddingTop:'7%', paddingLeft:'15%', paddingRight:'15%'}}>
        <View style={{borderBottomColor:'#dddddd', borderBottomWidth:1.5}}>
        </View>
      </View>

      <View style={{position:'relative',paddingTop:'3%', paddingLeft: '26%', paddingRight:'25%', paddingBottom:'5%'}}>
        <TouchableOpacity onPress={()=>navigation.push('Log4')}>
          <View style={{paddingTop:'10%', paddingLeft:'2%'}}>
            <Image source={require('../../images/place/kakao_login_medium_narrow.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      
</View>
  )
}

export default Log5