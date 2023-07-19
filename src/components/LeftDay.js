import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class QuestionData {
  constructor(questionId, questionContent) {
    this.questionId = questionId;
    this.questionContent = questionContent;
    this.answer = '';
  }
}

// const questionList = [];

const LeftDay = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation();

  const [questionList, setquestionList] = useState([
    new QuestionData(1, '오늘 뭐했어'),
  ]);

  const fetchData = async () => {
    questionList.length = 0;
    const url = `http://172.10.5.148:443/questions/${data.templateId}`;
    try {
      const response = await axios.get(url);
      const parsedArray = response.data;
      const updatedQuestionList = parsedArray.map(element => {
        return new QuestionData(element.questionId, element.questionContent);
      });
      console.log(questionList);
      setquestionList(updatedQuestionList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'black',
        height: '100%',
      }}>
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: '5%',
          paddingRight: '5%',
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            style={{color: '#dddddd', fontSize: 25, paddingTop: '1%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createNewRecord(questionList, data.templateId);
            navigation.push('Home');
          }}>
          <View>
            <Text style={{color: '#dddddd', fontSize: 15, fontWeight: 'bold'}}>
              완료
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          paddingTop: '3%',
        }}>
        <ScrollView>
          <View style={{position: 'relative', alignItems: 'center'}}>
            {questionList.map((data, index) => {
              return (
                <View
                  style={{
                    width: 270,
                    height: 150,
                    backgroundColor: 'gray',
                    alignItems: 'center',
                    borderRadius: 10,
                    paddingTop: '2%',
                    marginBottom: '3%',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 12,
                      marginBottom: '2%',
                      color: 'black',
                    }}>
                    {data.questionContent}
                  </Text>
                  <TextInput
                    style={{
                      width: '90%',
                      height: '75%',
                      borderColor: 'black',
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: '5%',
                      textAlignVertical: 'top',
                    }}
                    placeholder="pleas write your own answer..."
                    multiline={true}
                    onChangeText={text => {
                      const updatedQuesInfo = questionList.map(item => {
                        if (item.questionId === data.questionId) {
                          return {...item, answer: text};
                        }
                        return item;
                      });
                      // questionList = updatedQuesInfo;
                      setquestionList(updatedQuesInfo);
                    }}
                    value={data.answer}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

async function createNewRecord(questionList, templateId) {
  // TODO: Record 만들기
  // TODO: 받아온 RecordId 가져와서 answer 객체들 생성하기
  console.log(`create new record and answer!!!`);
  const postData = {
    templateId: templateId,
  };
  const url = `http://172.10.5.148:443/records`;
  let newRecordId;
  try {
    // create record
    const response = await axios.post(url, postData);
    console.log(response.data.recordId);
    newRecordId = response.data.recordId;
  } catch (error) {
    console.error(error);
  }
  for (const questionData of questionList) {
    const postAnswerUrl = `http://172.10.5.148:443/answers`;
    const answerData = {
      answer: questionData.answer,
      questionId: questionData.questionId,
      recordId: newRecordId,
    };
    console.log(`This is answer : ${answerData.answer}`);
    // create answer
    await axios.post(postAnswerUrl, answerData);
  }
}

export default LeftDay;
