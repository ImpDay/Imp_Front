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
          console.log(
            `Template [${templateItem.templateName}] period : ${templateItem.writePeriod}`,
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
              if (response.data == null) {
                return 0;
              }
              return response.data;
            })
            .catch(error => {
              return 0;
            });
          templateItem.templatescore = templateScore;
          return templateItem;
        }),
      );

      updatedTemplateList.sort((a, b) => {
        const timeA = new Date(a.leftDay).getTime();
        const timeB = new Date(b.leftDay).getTime();
        return timeA - timeB;
      });

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
        return <NewTemplate key={index} data={data} />;
      })}
    </View>
  );
};

function getLeftDay(date, writePeriod) {
  const today = new Date().setHours(0, 0, 0, 0);
  const otherDate = new Date(date).setHours(0, 0, 0, 0);
  const timeDiff = Math.abs(today - otherDate);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return writePeriod - daysDiff;
}

export default Posts;
