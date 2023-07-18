import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

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
          marginTop: '1.5%',
          marginBottom: '1.5%',
          backgroundColor: '#555555',
          width: 270,
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
        }}>
        <Text style={{color: '#dddddd', fontWeight: 'bold', fontSize: 30}}>
          {formattedDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecordItem;
