import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecordItem from './RecordItem';

class RecordData {
  constructor(templateId, createdTime, recordId) {
    this.templateId = templateId;
    this.createdTime = createdTime;
    this.recordId = recordId;
  }
}

const recordList = [];

const Record = ({templateData}) => {
  console.log('This is template name in record : ' + templateData.templateName);
  const [recordList, setrecordList] = useState([]);

  const fetchData = async () => {
    const url = `http://172.10.5.148:443/records/${templateData.templateId}`;
    try {
      const response = await axios.get(url);
      const parsedArray = response.data;
      parsedArray.forEach(element => {
        const record = new RecordData(
          element.templateId,
          element.createdTime,
          element.recordId,
        );
        recordList.push(record);
      });
      parsedArray.sort((a, b) => {
        // a와 b의 createdTime 값을 비교하여 정렬 순서를 결정합니다.
        // createdTime은 날짜 형식이어야 합니다.

        const timeA = new Date(a.createdTime).getTime();
        const timeB = new Date(b.createdTime).getTime();

        // 늦은 순으로 정렬하려면 b를 먼저 오도록 설정합니다.
        // 오래된 순으로 정렬하려면 a를 먼저 오도록 설정합니다.
        return timeB - timeA;
      });
      setrecordList(parsedArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{position: 'relative', alignItems: 'center'}}>
      {recordList.map((data, index) => {
        return (
          <RecordItem key={index} data={data} templateData={templateData} />
        );
      })}
    </View>
  );
};

export default Record;
