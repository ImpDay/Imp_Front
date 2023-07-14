import {SafeAreaView, ScrollView, View, TouchableOpacity, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import PlaceItems from './PlaceItems'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Places = ({navigation})=>{
    const [placeInfo, setPlaceInfo] = useState([]);

    useEffect(() => {
      // GET 요청을 보내어 데이터를 가져옴
      fetchPlaceInfo();
    }, []);
  
    const fetchPlaceInfo = async () => {
      try {
        const response = await Axios.get('http://172.10.5.152:80/mytravel/travelplace');
        const data = response.data;
        setPlaceInfo(data);
      } catch (error) {
        console.error('Error fetching place info:', error);
      }
    };

    return (
        <SafeAreaView>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,}}>
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
            <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
        </TouchableOpacity>
        <Text style={{paddingLeft:141, color:'#224455',fontSize:18,}}>
            장소
        </Text>
        </View>
        <ScrollView>
            {placeInfo.map((data, index)=> {
                return(
                    <PlaceItems key={index} data={data} />
                )
            })}
        </ScrollView>
        </SafeAreaView>
        
    );
} 
export default Places;