import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import './ignore';

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'column',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakaoLoginButton: {
    position: 'relative',
    paddingTop: '3%',
    paddingBottom: '5%',
  },
  blank: {
    height: 50,
    backgroundColor: 'orange',
  },
  divideLine: {
    position: 'relative',
    paddingTop: '7%',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  signUpBtn: {
    position: 'relative',
    paddingTop: '10%',
    borderBottomColor: '#bbbbbb',
    borderWidth: 1,
    marginBottom: '7%',
  },
  simpleLoginBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginBtn: {
    position: 'relative',
    backgroundColor: '#777777',
    width: '60%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginIdText: {
    position: 'relative',
    width: '60%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  pwdText: {
    position: 'relative',
    width: '60%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  titleText: {
    position: 'relative',
  },
});

const LoginPage = () => {
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
    <View style={styles.loginContainer}>
      <View style={styles.titleText}>
        <Text
          style={{
            fontSize: 26,
            paddingBottom: '23%',
            fontWeight: '400',
            color: '#dddddd',
            paddingTop: '10%',
          }}>
          하루, 셈
        </Text>
      </View>
      <View style={styles.loginIdText}>
        <TextInput
          placeholder="abc@gmail.com"
          placeholderTextColor="#777777"
          style={{
            width: '100%',
            height: 35,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#dddddd',
            borderRadius: 6,
            fontSize: 14,
          }}
          onChangeText={text => setUserId(text)}
          value={userId}
        />
      </View>
      <View style={styles.pwdText}>
        <TextInput
          placeholder="password"
          placeholderTextColor="#777777"
          style={{
            width: '100%',
            height: 35,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#dddddd',
            borderRadius: 6,
            fontSize: 14,
          }}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={onSignIn}>
        <Text
          style={{
            color: '#dddddd',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          로그인
        </Text>
      </TouchableOpacity>
      <View style={styles.signUpBtn}>
        <TouchableOpacity onPress={() => navigation.push('Log3')}>
          <Text
            style={{
              paddingLeft: '1%',
              fontSize: 12,
              color: '#bbbbbb',
              fontWeight: 'bold',
            }}>
            Or Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.simpleLoginBox}>
        <View
          style={{flex: 1, borderBottomWidth: 1, borderBottomColor: '#dddddd'}}
        />
        <Text style={{paddingHorizontal: 10, color: '#dddddd'}}>
          간편 로그인
        </Text>
        <View
          style={{flex: 1, borderBottomWidth: 1, borderBottomColor: '#dddddd'}}
        />
      </View>
      <View style={styles.kakaoLoginButton}>
        <TouchableOpacity onPress={() => navigation.push('Log4')}>
          <View style={{paddingTop: '10%', paddingLeft: '2%'}}>
            <Image
              source={require('../../images/place/kakao_login_medium_narrow.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
