import {TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Template from './Template';
import NewTemplate from './NewTemplate';
import axios from 'axios';
import '../screens/ignore';
import {useNavigation} from '@react-navigation/native';

const userId = 1;

class TemplateData {
  constructor(templateId, templateName, lastRecordedTime, writePeriod) {
    this.templateId = templateId;
    this.templateName = templateName;
    this.lastRecordedTime = lastRecordedTime;
    this.writePeriod = writePeriod;
  }
  setLeftDay() {
    this.leftDay = 1;
  }
  getLeftDay() {
    return this.leftDay;
  }
}

const Posts = ({}) => {
  const navigation = useNavigation();
  console.log('postpost');
  // const templateList =
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
  // var url = 'http://172.10.5.148:443/templates/' + userId;

  var url = 'http://172.10.5.148:443/templates/' + 1;
  axios
    .get(url)
    .then(response => {
      console.log(response.data);
      // // TODO: 요청에 대한 처리 작업 수행
      const parsedArray = response.data;
      parsedArray.forEach(element => {
        const templateItem = new TemplateData(
          element.templateId,
          element.templateName,
          element.lastRecordedTime,
          element.writePeriod,
        );
      });
    })
    .catch(error => {
      console.error(error);
      // TODO: 에러 처리
    });
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
