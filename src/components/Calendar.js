import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {CalendarList} from 'react-native-calendars';

const marked = {};
const dayScores = [];
let level = '';
const level1 = '#aaaaaa'; //0~20
const level2 = '#99bb99'; //21~40
const level3 = '#669966'; //41~60
const level4 = '#336633'; //61~80
const level5 = '#003300'; //81~100

let i = 0;
const Calendar = () => {
  const [recordedDays, setrecordedDays] = useState();
  const fetchData = async () => {
    const url = 'http://172.10.5.148:443/recordedDates';
    try {
      const response = await axios.get(url);
      const parsedArray = response.data;
      console.log(parsedArray);
      parsedArray.map(async element => {
        console.log('This is element : ' + element);
        dayScore = await axios
          .get(`http://172.10.5.148:443/getScore?date=${element}`)
          .then(response => {
            return response.data;
          })
          .catch(error => {
            // 요청 실패 또는 오류 발생 시 처리할 로직
            return 0;
          });
        console.log('This is dayScore : ' + dayScore);
        dayScores.push(dayScore);
        let level;
        if (dayScore < 21) {
          level = level1;
        } else if (21 <= dayScore && dayScore < 41) {
          level = level2;
        } else if (41 <= dayScore && dayScore < 61) {
          level = level3;
        } else if (61 <= dayScore && dayScore < 81) {
          level = level4;
        } else {
          console.log('여기로 오네?');
          console.log(i);
          level = level5;
        }
        marked[element] = {
          selected: true,
          selectedColor: level,
          selectedTextColor: 'white',
        };
      });

      setrecordedDays(parsedArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <CalendarList
        theme={{
          calendarBackground: 'black',
          dayTextColor: 'white',
          monthTextColor: '#88bb88',
          todayTextColor: 'white',
        }}
        markedDates={marked}
        onDayPress={() => {
          // navigation.push();
        }}
      />
    </View>
  );
};

export default Calendar;
