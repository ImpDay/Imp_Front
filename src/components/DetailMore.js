import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';

const DetailMore = ({data}) => {
  console.log(`This is detail more data : ${data}`);
  return (
    <View
      style={{
        width: 350,
        height: 200,
        backgroundColor: 'gray',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: '2%',
        marginBottom: '5%',
        paddingBottom: '2%',
      }}>
      <View
        style={{
          width: '70%',
          height: '20%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: '2%',
            color: 'black',
          }}>
          {data.question}
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          height: '75%',
          borderColor: 'black',
          borderRadius: 10,
          borderWidth: 1,
        }}>
        <View style={{padding: '2%'}}>
          <ScrollView nestedScrollEnabled={true}>
            <Text style={{color: 'black'}}>{data.answer}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailMore;
