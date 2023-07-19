import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import './ignore';

class userData {
  constructor(nickname, followerNum, followingNum, followers, followings) {
    this.nickname = nickname;
    this.followerNum = followerNum;
    this.followingNum = followingNum;
    this.followers = followers;
    this.followings = followings;
  }
}
let userProfile = new userData('Default', '100', '100');

const Profile = ({navigation}) => {
  const [userProfiles, setuserProfiles] = useState();
  let nickname;
  let followingNum;
  let followerNum;
  const fetchData = async () => {
    const url = 'http://172.10.5.148:443/users/nickname';
    const followingUrl = 'http://172.10.5.148:443/friends/friends';
    const followerUrl = 'http://172.10.5.148:443/friends/followers';
    try {
      const response = await axios.get(url);
      nickname = response.data.nickname;
      const followings = await axios.get(followingUrl);
      const followers = await axios.get(followerUrl);

      followingNum = followings.data.length;
      followerNum = followers.data.length;
      userProfile = new userData(
        nickname,
        followerNum,
        followingNum,
        followers.data,
        followings.data,
      );
      console.log(`${nickname} | ${followingNum} | ${followerNum}`);
      setuserProfiles(userProfile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          padding: '1%',
          backgroundColor: 'black',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            style={{color: 'white', fontSize: 25, paddingTop: '1%'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%'}}>
        <ProfileBody
          name={userProfiles?.nickname || 'Loading...'}
          profileImage={require('../../images/place/image2.jpeg')}
          followingNum={userProfiles?.followingNum || 0}
          followerNum={userProfiles?.followerNum || 0}
          followings={userProfiles?.followings || []}
          followers={userProfiles?.followers || []}
        />
      </View>
      <ProfileButton
        name={userProfiles?.nickname || 'Loading...'}
        profileImage={require('../../images/place/image2.jpeg')}
      />
    </SafeAreaView>
  );
};

export default Profile;
