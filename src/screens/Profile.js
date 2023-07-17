import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileBody from '../components/ProfileBody'
import ProfileButton from '../components/ProfileButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import "./ignore";

const Profile = ({navigation}) => {
  const userInfo=[{username:'TankEom', userImage: require('../../images/place/image2.jpeg')}]
  /*
  const [userInfo, setUserInfo] = useState({
    userImage: '',
    username: '',
  });
  useEffect(() => {
    console.log("실행");
    // GET 요청을 보내어 데이터를 가져옴
    fetchUserData = async () => {
      console.log("요청");
      try {
        const response = await Axios.get('');
        const data = response.data;
        console.log(data);
        // 필요한 데이터를 추출하여 user 상태를 업데이트
        const { userImage, username, travelMap } = data;
        setUserInfo({
          userImage,
          username,
          travelMap,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  */
  return (
    <SafeAreaView
      style={{position:'relative',width:'100%', backgroundColor: 'black', height:'100%'}}>
        <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '1%',
            backgroundColor: 'black',}}>
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
                <AntDesign name="arrowleft" style={{ color:'white', fontSize: 25, paddingTop:'1%', }} /> 
            </TouchableOpacity>
        </View>
      <View style={{width: '100%'}}>
        <ProfileBody
            name={userInfo[0].username}
            profileImage={userInfo[0].userImage}
        />
      </View>
      <ProfileButton name={userInfo[0].username} profileImage={userInfo[0].userImage}/>
        
    </SafeAreaView>
  )
}

export default Profile