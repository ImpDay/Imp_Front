import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import Friends from './Friends';

class FriendData {
  constructor(friendId, friendName) {
    this.friendId = friendId;
    this.friendName = friendName;
    this.friendImage = require('../../images/place/image3.jpeg');
  }
}

const Interest = ({followings}) => {
  const [friendList, setfriendList] = useState([
    new FriendData(1, 'Loading...'),
  ]);

  const fetchData = async () => {
    const url = `http://172.10.5.148:443/friends/friends`;
    console.log(`------------------fetch data-----------------`);
    try {
      const updatedFriendDataList = [];
      for (friendId of followings) {
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

export default Interest;
