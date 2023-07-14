// Status.js
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';


const Status = ({ route, navigation}) => {
  const { idtravelpost } = route.params;  
  const { idtravelplan } = route.params;
  const [NextInfo, setNextInfo] = useState([]);

    useEffect(() => {
      const fetchPosts = () => {
        Axios.get(`http://172.10.5.152:80/travelpost/${idtravelpost}`)
          .then(response => {
            console.log(response.data[0]);
            setNextInfo(response.data[0]);
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
          });
      };

        fetchPosts();
      }, [idtravelpost]);


      const [detInfo, setDetInfo] = useState({
        place: '',
        start_date: '',
        end_date:'',
        daySpotMap: [],
      });
    
      useEffect(() => {
        // GET 요청을 보내어 데이터를 가져옴
        fetchPlanData = async () => {
          try {
            const response = await Axios.get(`http://172.10.5.152:80/travelplan/${idtravelplan}`);
            const data = response.data;
            console.log(data);
            // 필요한 데이터를 추출하여 user 상태를 업데이트
            const { place, start_date, end_date, daySpotMap } = data;
            setDetInfo({ place, start_date, end_date, daySpotMap,});
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        console.log(detInfo);
        fetchPlanData();
      }, []);

  return (
    <SafeAreaView
  style={{
    backgroundColor: 'white',
    height: '110%',
    justifyContent: 'center',
  }}
>
  <StatusBar backgroundColor="black" barStyle="light-content"/>

  <View
    style={{
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '90%',
      justifyContent:'space-between'
    }}
  >
    <View
      style={{
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={{uri:NextInfo.userImage}}
        style={{
          borderRadius: 12,
          backgroundColor: 'blue',
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
      />
    </View>
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
      }}
    >
      <Text style={{ color: 'black', fontSize: 15, paddingLeft: 10 }}>
        {NextInfo.username}
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionic
          name="close"
          style={{ fontSize: 20, color: 'black', opacity: 0.6 }}
        />
      </TouchableOpacity>
    </View>
    
  </View>
  <View style={{position:'relative', paddingTop:"15%"}}>
  <ScrollView>
    <View style={{ flex: 1 }}>
      <View style={{flex: 0.6}}>
        <Image
          source={{uri:NextInfo.postImage}}
          style={{ width: '100%', height: '100%'}}
        />
        <Text style={{fontSize: 23, color: 'black', paddingLeft:20, paddingTop:30, fontWeight: 'bold' }}>
          {NextInfo.title}
        </Text>
        <Text style={{fontSize:16, color: 'black', padding: 25, paddingVertical: 26, lineHeight: 26}}>
          {NextInfo.text}
        </Text>
      </View>
      <View style={{flex: 0.4, marginTop: 230}}>
        {detInfo.daySpotMap.map((data, index)=> {
            let dayId = data.day
            return(
                <View style={{position:'relative', flexDirection:'column',padding:'3%',}}>
                    <View style={{position:'relative', flexDirection:'column', borderColor: 'gray',
                borderWidth: 1,borderRadius:14}}>
                    <Text style={{fontSize:20, paddingLeft:'5%', paddingBottom:'5%', color:'#533799', fontWeight:'bold', paddingTop:'3%'}}>
                        day {dayId}
                    </Text>
                    <View>
                        {data.spot.map((data, index)=>{
                            return(
                                <View style={{flexDirection:'row', alignContents:'center', paddingBottom: '5%', paddingHorizontal:'5%'}}>
                                <View style={{alignItems:'center',borderColor:'#113344',borderWidth:2, borderRadius: 100, width:25, height:25,}}>
                                    <Text style={{color:'#533799', fontWeight:'bold'}}>{index+1}</Text>
                                </View>
                                <View>
                                <Text style={{paddingLeft:'4%', color:'#113344', fontWeight:'bold'}}>
                                    {data}
                                </Text>
                                </View>
                            </View>
                            )
                        })}
                    </View>
                    </View>
                </View>
            )})}
      </View>
    </View>
  </ScrollView>
  </View>
</SafeAreaView>

  );
};

export default Status;