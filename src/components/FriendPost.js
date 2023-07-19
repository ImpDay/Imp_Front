import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import Friends from './Friends';

const friendInfo = [
  {username: 'jihwan', userImage: require('../../images/place/image1.jpeg')},
  {username: 'kyeah', userImage: require('../../images/place/image2.jpeg')},
  {
    username: 'YoungWanna',
    userImage: require('../../images/place/image3.jpeg'),
  },
  {username: 'tank', userImage: require('../../images/place/image9.jpeg')},
  {username: 'jimin', userImage: require('../../images/place/images4.jpeg')},
  {username: 'ohhyeon', userImage: require('../../images/place/images5.jpeg')},
  {username: 'seonkyu', userImage: require('../../images/place/images6.jpeg')},
  {username: 'jihwan', userImage: require('../../images/place/images7.jpeg')},
  {username: 'jihwan', userImage: require('../../images/place/images9.jpeg')},
  {username: 'jihwan', userImage: require('../../images/place/images10.jpeg')},
  {username: 'jihwan', userImage: require('../../images/place/image1.jpeg')},
];

class FriendData {
  constructor(friendId, friendName) {
    this.friendId = friendId;
    this.friendName = friendName;
    this.friendImage = require('../../images/place/image3.jpeg');
  }
}

const FriendPost = ({followers}) => {
  const [friendList, setfriendList] = useState([
    new FriendData(1, 'Loading...'),
  ]);

  const fetchData = async () => {
    const url = `http://172.10.5.148:443/friends/friends`;
    console.log(`------------------fetch data-----------------`);
    try {
      const updatedFriendDataList = [];
      for (friendId of followers) {
        const getFriendNickNameUrl = `http://172.10.5.148:443/users/nickname`;
        const friendName = await axios.get(getFriendNickNameUrl);

        updatedFriendDataList.push(
          new FriendData(friendId, friendName.data.nickname),
        );
      }
      setfriendList(updatedFriendDataList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{position: 'relative', marginTop: '2%'}}>
      {friendList.map((data, index) => {
        return <Friends key={index} data={data} />;
      })}
    </View>
  );
};

export default FriendPost;
