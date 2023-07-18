import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Record from './Record';
import {useNavigation} from '@react-navigation/native';

const Tank = ({route}) => {
  const {data} = route.params;
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
  return (
    <SafeAreaView
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'black',
        height: '100%',
      }}>
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: '2%',
          paddingRight: '2%',
          backgroundColor: 'black',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            style={{color: '#dddddd', fontSize: 25, paddingTop: '1%'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '97%',
          backgroundColor: 'black',
          alignItems: 'center',
        }}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              navigation.push('LeftDay', {data});
            }}>
            <View
              style={{
                marginTop: '3%',
                marginBottom: '1.5%',
                backgroundColor: '#777777',
                width: 270,
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 16,
              }}>
              <Text
                style={{color: '#dddddd', fontWeight: 'bold', fontSize: 30}}>
                {str}
              </Text>
            </View>
          </TouchableOpacity>
          <Record templateData={data} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Tank;
