// PostItems.js
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ProgressCircle from 'react-native-progress-circle';
import '../screens/ignore';

const NewTemplate = ({data}) => {
  const navigation = useNavigation();
  let str = '';
  if (data.leftDay < -1) {
    str = `${-data.leftDay}days passed`;
  } else if (data.leftDay < 0) {
    str = `${-data.leftDay}day passed`;
  } else if (data.leftDay == 0) {
    str = 'Today';
  } else if (data.leftDay == 1) {
    str = `${data.leftDay}day left`;
  } else {
    str = `${data.leftDay}days left`;
  }

  let borderCorlor = 'white';
  if (data.leftDay <= 0) {
    borderCorlor = '#88ff88';
  }
  return (
    <View style={{position: 'relative', padding: '0.5%', width: 160}}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Tank', {data});
        }}>
        <View
          style={{
            position: 'relative',
            borderColor: borderCorlor,
            borderWidth: 3,
            height: '100%',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'relative',
              paddingTop: '15%',
              padding: '3%',
              height: '30%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              {data.templateName}
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              height: 60,
              alignItems: 'center',
              flexDirection: 'column',
              flex: 1,
            }}>
            <ProgressCircle
              percent={data.templatescore}
              radius={50}
              borderWidth={7}
              color="white"
              shadowColor="#555555"
              bgColor="black">
              <Text
                style={{fontSize: 30, fontWeight: 'bold', color: '#99bb99'}}>
                {data.templatescore}
              </Text>
            </ProgressCircle>
          </View>
          <View style={{paddingTop: '18%', paddingBottom: '15%'}}>
            <Text style={{color: '#99ffcc', fontWeight: 'bold'}}>{str}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewTemplate;
