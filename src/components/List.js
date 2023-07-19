import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import ListItems from './ListItems';
import '../screens/ignore';

class FriendData {
  constructor(friendId, friendName, weekscore) {
    this.friendId = friendId;
    this.friendName = friendName;
    this.friendImage = require('../../images/place/image3.jpeg');
    this.weekScores = weekscore;
  }
}

const List = () => {
  const past7Days = getPast7Days();

  const [friendList, setfriendList] = useState([
    new FriendData(1, 'Loading...', [70, 70, 70, 70, 70, 70, 70]),
  ]);

  const fetchData = async () => {
    // questionList.length = 0;
    const url = `http://172.10.5.148:443/friends/friends`;
    console.log(`------------------fetch data-----------------`);
    try {
      const response = await axios.get(url);
      const parsedArray = response.data;
      const updatedFriendDataList = [];
      console.log(parsedArray);
      for (friendId of parsedArray) {
        const getFriendNickNameUrl = `http://172.10.5.148:443/users/nickname`;
        const friendName = await axios.get(getFriendNickNameUrl);
        // console.log(friendName);
        const newWeekScore = [];
        for (days of past7Days) {
          const getDayScoreUrl = `http://172.10.5.148:443/getScore?date=${days}&?friendId=${friendId}`;
          const score = await axios.get(getDayScoreUrl);
          newWeekScore.push(score.data);
        }
        updatedFriendDataList.push(
          new FriendData(friendId, friendName.data.nickname, newWeekScore),
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
    <View style={{position: 'relative'}}>
      {friendList.map((data, index) => {
        return <ListItems key={index} data={data} />;
      })}
    </View>
  );
};

function getPast7Days() {
  const pastDates = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - (6 - i));
    const formattedDate = pastDate.toISOString().slice(0, 10);
    pastDates.push(formattedDate);
  }

  return pastDates;
}
export default List;
