import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Template from './Template';
import NewTemplate from './NewTemplate';
import '../screens/ignore';

const Posts = ({navigation}) => {
  const todayInfo = [
    {
      title: '오늘 당신의 하루는?',
      leftDay: 0,
      templatescore: 79,
    },
    {
      title: '가장 맛있었던 음식?',
      leftDay: 0,
      templatescore: 60,
    },
    {
      title: '부모님의 하루는?',
      leftDay: 0,
      templatescore: 48,
    },
    {
      title: '운동 기록',
      leftDay: 1,
      templatescore: 93,
    },
    {
      title: '영단어 30개',
      leftDay: 4,
      templatescore: 36,
    },
    {
      title: '기념일',
      leftDay: 185,
      templatescore: 50,
    },
    {
      title: '아부지 생신',
      leftDay: 210,
      templatescore: 60,
    },
    {
      title: '오마니 생신',
      leftDay: 189,
      templatescore: 72,
    },
    {
      title: '형 생일',
      leftDay: 306,
      templatescore: 49,
    },
  ];
  /*const [postInfo, setPostInfo] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await Axios.get('http://172.10.5.152:80/travelpost');
            setPostInfo(response.data);
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
      
        fetchPosts();
      }, []);
      */

  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {todayInfo.map((data, index) => {
        if (data.leftDay <= 0) {
          return <Template key={index} data={data} />;
        } else {
          return <NewTemplate key={index} data={data} />;
        }
      })}
    </View>
  );
};
export default Posts;
