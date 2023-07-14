import { View, Text, Image, TextInput} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const image = require('../../images/place/images10.jpeg')

const Log5 = () => {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
return (

    <View style={{flexDirection: 'column', backgroundColor:'black', height:'100%'}}>
      <View style={{position:'relative',paddingTop:'30%', paddingLeft:'28%'}}>
        <Text style={{fontSize: 31, paddingLeft:'10%', paddingBottom:'25%', fontWeight:'400', color: "#dddddd", paddingTop:'10%'}}>
          Untitled
        </Text>
      </View>
      <View style={{position:'reltive',paddingTop:'14%', paddingLeft: '25%', paddingRight:'25%', paddingBottom:'5%', height:'15%'}}>
          <TextInput placeholder='abc@gmail.com' placeholderTextColor="#777777"
            style={{
              width: "100%",
              backgroundColor: '#dddddd',
              borderRadius: 6,
              fontSize: 14,
              paddingLeft:'22%'
            }}
            onChangeText={text => setUserId(text)}
            value={userId} />
      </View>
      <View style={{position:'reltive',paddingTop:'1%', paddingLeft: '25%', paddingRight:'25%', paddingBottom:'5%', height:'7.9%'}}>
        <TextInput placeholder='password' placeholderTextColor="#777777"
                style={{
                  width: "100%",
                  backgroundColor: '#dddddd',
                  borderRadius: 6,
                  fontSize: 14,
                  paddingLeft: '31%'
                }}
                onChangeText={text => setPassword(text)}
                value={password} />
      </View>
      <View style={{paddingLeft:'25%', paddingRight:'25%', height:'5%', paddingTop:'1%'}}>
        <View style={{position:'relative',backgroundColor:'#777777',borderRadius:5, height:'80%'}}>
          <TouchableOpacity>
            <Text style={{color:'#dddddd', fontWeight:'bold',fontSize:15, fontStyle:'italic', paddingLeft:'39%'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position:'relative',paddingLeft:'37.8%', paddingRight:'35.6%', height:'7%'}}>
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
      <View style={{paddingTop:'10%'}}>
          <Text style={{color: 'white'}}>
              
          </Text>
        </View>
      <View style={{position:'relative',paddingTop:'3%', paddingLeft: '26%', paddingRight:'25%', paddingBottom:'5%'}}>
        <TouchableOpacity onPress={()=>navigation.push('Log4')}>
          <View style={{
                  borderRadius:10,
                  }}>
            <Text style={{paddingLeft:'17%',fontSize:17.8, color: '#bbbbbb', fontWeight:'bold', paddingBottom:'4%', paddingTop:'3%'}}>
              카카오로 로그인
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
</View>
  )
}

export default Log5