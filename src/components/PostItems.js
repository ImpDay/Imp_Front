
// PostItems.js
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const PostItems = ({ data }) => {
  const [like, setLike] = useState(data.isliked);
  const navigation = useNavigation();
  console.log(data);

  const handleLike = async () => {
    try {
      Axios.post('http://172.10.5.152:80/travelpost/iflike', {
        idtravelpost: data.idtravelpost,
        liked: like,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        setLike(!like);
      }).catch(error => console.log(error));
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}
      >
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{uri:data.userImage}}
            style={{ width: 40, height: 40, borderRadius: 14 }}
          />
          <View style={{ paddingLeft:8, paddingVertical:2  }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#224455' }}>
              {data.username}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2,
                  paddingRight:10
                }}
                >
                {data.place}
              </Text>
              <Text style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2,
                  paddingBottom:5
                }}
              >{data.days}박 {data.days+1}일</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
            onPress={() => navigation.push('Status', data)}
          >
            <AntDesign name="cloudo" style={{ fontSize: 30 }} />
          </TouchableOpacity>
      </View>
      <View
        style={{ justifyContent: 'center', alignItems: 'center', paddingLeft:5,paddingRight:4.5 }}
      >
        <Image
          source={{uri: data.postImage}}
          style={{ width: '100%', height: 270, borderRadius:20 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => handleLike()}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={{
                paddingRight: 10,
                fontSize: 20,
                color: like ? 'red' : 'black',
              }}
            />
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text>
          좋아요 {like ? data.likes + 1 : data.likes} 개
        </Text>
      </View>
    </View>
  );
};

export default PostItems;
