import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProfileBody = ({
  name,
  profileImage,
  followingNum,
  followerNum,
  followings,
  followers,
}) => {
  const navigation = useNavigation();
  console.log('------------------');
  console.log(`This is name : ${name}`);
  console.log(`This is followingNum : ${followingNum}`);
  console.log(`This is followerNum : ${followerNum}`);
  console.log(`This is profileImage : ${profileImage}`);
  console.log(`This is followings : ${followings}`);
  console.log(`This is followers : ${followers}`);
  console.log('------------------');
  return (
    <View>
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: '15%',
        }}>
        <View
          style={{
            paddingLeft: '5%',
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'black',
          }}>
          <View style={{position: 'relative', alignItems: 'center'}}>
            <Text
              style={{
                paddingVertical: '7%',
                fontWeight: 'bold',
                fontSize: 25,
                color: '#dddddd',
              }}>
              {name}
            </Text>
            <Image
              source={profileImage}
              style={{width: 130, height: 130, borderRadius: 90}}
            />
          </View>
        </View>
        <View
          style={{
            paddingLeft: '1%',
            width: '40%',
            paddingTop: '25%',
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'black',
          }}>
          <View
            style={{
              posistion: 'relative',
              flexDirection: 'column',
              backgroundColor: 'black',
              alignItems: 'center',
              marginRight: '25%',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Follower', {followers: followers});
              }}>
              <Text
                style={{
                  marginLeft: '26%',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {followerNum}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                팔로워
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{position: 'relative', flexDirection: 'column'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Following', {followings: followings});
              }}>
              <Text
                style={{
                  marginLeft: '24%',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {followingNum}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                팔로잉
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;
