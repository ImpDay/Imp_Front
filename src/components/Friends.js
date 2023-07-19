import {background} from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Friends = ({data}) => {
  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: 'black',
        marginBottom: '3%',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'relative',
          backgroundColor: 'black',
          width: 55,
          height: 55,
          marginLeft: '6%',
          borderRadius: 25,
          borderColor: '#555555',
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={data.friendImage}
          style={{width: 52, height: 52, borderRadius: 23}}
        />
      </View>
      <View
        style={{
          position: 'relative',
          width: '50%',
          height: '70%',
          backgroundColor: 'black',
          justifyContent: 'center',
          marginLeft: '3%',
        }}>
        <Text style={{color: 'white', fontSize: 15}}>{data.friendName}</Text>
      </View>
      <View
        style={{
          position: 'relative',
          width: '20%',
          height: '70%',
          backgroundColor: 'black',
          justifyContent: 'center',
          marginLeft: '7%',
        }}>
        <TouchableOpacity>
          <View
            style={{
              position: 'relative',
              width: '65%',
              height: '85%',
              marginLeft: '4%',
              marginTop: '2%',
              backgroundColor: '#333333',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#dddddd', fontWeight: 'bold', fontSize: 13}}>
              삭제
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Friends;
