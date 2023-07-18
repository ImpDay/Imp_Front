import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SearchPost from '../components/SearchPost'


const Search = ({navigation}) => {
  const [friend, setFriend] = useState('');
  return (
    <SafeAreaView
      style={{
        width:'100%',
        backgroundColor: 'black',

      }}>
      <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '1%',
          backgroundColor: 'black',}}>
          <TouchableOpacity
              onPress={()=>{
              navigation.goBack();
          }}>
              <AntDesign name="arrowleft" style={{ color:'#dddddd', fontSize: 25, paddingTop:'1%', }} /> 
          </TouchableOpacity>
          <Text style={{color:'white', fontSize:20,marginLeft:'30%'}}>
            Find Friend
          </Text>
      </View>
      <View>
        <View style={{justifyContent: 'center',
              alignment: 'center',
              width: '100%',
              paddingVertical: '5%',
              position: 'relative',
              paddingLeft: '6%',
              marginBottom:'7%'
          }}>
          <Ionic name='search'
              style ={{fontSize: 18,
                  opacity: 0.7,
                  position: 'absolute',
                  zIndex: 1,
                  left: 37
          }}/>
          <TextInput placeholder="Search..." placeholderTextColor="#555555"
            style={{
                width: "94%",
                backgroundColor: '#dddddd',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                padding: '1.5%',
                paddingLeft: 40,
            }}
            onChangeText={text => setFriend(text)}
            value={friend}/>
      </View>
     </View>
      <View style={{backgroundColor:'black', width:'100%', height:'100%'}}>
        <ScrollView> 
            <SearchPost/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Search