import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const RecordItem = ({data, templateData}) => {
  const navigation = useNavigation();
  const date = new Date(data.createdTime);
  const formattedDate = date.toISOString().slice(0, 10);
  console.log(formattedDate);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Detail', {data, templateData});
      }}>
      <View
        style={{
          marginTop: '3%',
          marginBottom: '3%',
          backgroundColor: '#dddddd',
          paddingLeft:'7%',
          width: 270,
          height: 50,
          alignItems: 'center',
          borderRadius: 20,
          flexDirection:'row'
        }}>
        <Feather name="navigation" style={{ color:'black', marginRight:'7%',fontSize: 22 }}/>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 23}}>
          {formattedDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecordItem;
