import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {View, Text, TouchableOpacity, ScrollView} from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Days from "./Days";

const Detail=({route, navigation})=>{
    console.log(route.params);
    const idtravelplan = route.params.idtravelplan;
    console.log(idtravelplan);

    const [detailInfo, setDetailInfo] = useState({
        place: '',
        start_date: '',
        end_date:'',
        daySpotMap: [],
      });
    
      useEffect(() => {
        // GET 요청을 보내어 데이터를 가져옴
        fetchUserData = async () => {
          try {
            const response = await Axios.get(`http://172.10.5.152:80/travelplan/${idtravelplan}`);
            const data = response.data;
            console.log(data);
            // 필요한 데이터를 추출하여 user 상태를 업데이트
            const { place, start_date, end_date, daySpotMap } = data;
            setDetailInfo({ place, start_date, end_date, daySpotMap,});
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);
    return(
        <View>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,
            paddingBottom: 10,
            backgroundColor: 'white',
            }}>
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
                <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
            </TouchableOpacity>
            <View style={{flexDirection: 'column', paddingLeft:10}}>
                <Text style={{fontSize:15, color:'#335566', fontWeight:'bold'}}>
                    {detailInfo.place} 여행
                </Text>
                <Text>
                    {detailInfo.start_date} ~ {detailInfo.end_date}
                </Text>
            </View>
            
        </View>
        <View>
            <ScrollView>
                <Days data={detailInfo} id={idtravelplan}/>
            </ScrollView>
        </View>
        </View>
    )
}

export default Detail