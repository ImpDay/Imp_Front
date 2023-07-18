import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecordItem from './RecordItem';

class RecordData {
  constructor(templateId, createdTime) {
    this.templateId = templateId;
    this.createdTime = createdTime;
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
        const date = new Date(element.createdTime);
        const formattedDate = date.toISOString().slice(0, 10);
        console.log(formattedDate);
        const record = new RecordData(element.templateId, formattedDate);
        recordList.push(record);
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
        return <RecordItem key={index} data={data} />;
      })}
    </View>
  );
};

export default Record;
