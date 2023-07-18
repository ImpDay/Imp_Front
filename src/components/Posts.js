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

  useEffect(() => {
    const fetchData = () => {
      const url = 'http://172.10.5.148:443/templates/myTemplates';
      axios
        .get(url)
        .then(response => {
          const parsedArray = response.data;
          const updatedTemplateList = parsedArray.map(element => {
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
            return templateItem;
          });
          setTemplateList(updatedTemplateList);
        })
        .catch(error => {
          console.error(error);
          // TODO: 에러 처리
        });
    };

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
