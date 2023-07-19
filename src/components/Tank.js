import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Record from './Record';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'

const Tank = ({route}) => {
  // console.log(
  //   `This is template [${data.templateId}] [${data.templateName}] leftDay : ${data.leftDay}]`,
  // );
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
        <Text style={{color:'#dddddd',fontWeight:'bold', fontSize: 20,marginLeft:'7%'}}>
          {data.templateName}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '97%',
          backgroundColor: 'black',
          alignItems: 'center',
        
        }}>
        <ScrollView>
          <Text style={{color:'orange',marginLeft:'3%',marginTop:'20%',marginBottom:'7%', fontSize:23, fontWeight:'bold'}}>
            Record
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push('LeftDay', {data});
            }}>
            <View
              style={{
                marginBottom: '3%',
                backgroundColor: '#669966',
                width: 270,
                height: 50,
                paddingLeft:'7%',
                alignItems:'center',
                borderRadius: 20,
                flexDirection:'row'
              }}>
              <Feather name="navigation" style={{ color:'white', marginRight:'7%',fontSize: 22 }}/>
              <Text
                style={{color: 'white', fontWeight: 'bold', fontSize: 23}}>
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
