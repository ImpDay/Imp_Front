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
    this.leftDay = 0;
    this.templatescore = 78;
  }
}

const Posts = ({}) => {
  const navigation = useNavigation();
  const [templateList, setTemplateList] = useState([]);

  const fetchData = async () => {
    const url = 'http://172.10.5.148:443/templates/myTemplates';
    try {
      const response = await axios.get(url);
      const parsedArray = response.data;

      const updatedTemplateList = await Promise.all(
        parsedArray.map(async element => {
          const templateItem = new TemplateData(
            element.templateId,
            element.templateName,
            element.lastRecordedTime,
            element.writePeriod,
          );

          templateItem.leftDay = getLeftDay(
            templateItem.lastRecordedTime,
            templateItem.writePeriod,
          );
          const templateScore = await axios
            .get(
              `http://172.10.5.148:443/templates/${templateItem.templateId}/averageScore`,
            )
            .then(response => {
              console.log('This is response data : ' + response.data);
              return response.data;
            })
            .catch(error => {
              // 요청 실패 또는 오류 발생 시 처리할 로직
              return 0;
            });
          console.log('this is template score : ' + templateScore);
          templateItem.templatescore = templateScore;

          return templateItem;
        }),
      );

      setTemplateList(updatedTemplateList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {templateList.map((data, index) => {
        if (data.leftDay <= 0) {
          return <Template key={index} data={data} />;
        } else {
          return <NewTemplate key={index} data={data} />;
        }
      })}
    </View>
  );
};

function getLeftDay(date, writePeriod) {
  // 오늘 날짜의 밀리초 단위로 설정 (시간을 무시)
  const today = new Date().setHours(0, 0, 0, 0);

  // 비교할 날짜의 밀리초 단위로 설정 (시간을 무시)
  const otherDate = new Date(date).setHours(0, 0, 0, 0);

  // 날짜 간의 일 수 차이 계산
  const timeDiff = Math.abs(today - otherDate);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return writePeriod - daysDiff;
}

const updateTemplateList = () => {};
export default Posts;
