import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
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
    if (userId == '' || password == '') {
      console.log('좀 쓰고 누르셈');
    } else {
      const data = {
        loginId: userId,
        password: password,
      };
      var url = 'http://172.10.5.148:443/login';
      console.log('This is url : ' + url);
      axios
        .post(url, data)
        .then(response => {
          console.log(response.data);
          const userId = response.data;
          navigation.push('Home', {userId});
        })
        .catch(error => {
          console.log('너 잘못 썻어');
        });
    }
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
