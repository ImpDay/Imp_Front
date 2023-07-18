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

const questionList = [];

const LeftDay = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation();

  const [quesInfo, setQuesInfo] = useState([
    {id: 1, question: '오늘 하루는?', answer: ''},
    {id: 2, question: '오늘 맛있었던 음식?', answer: ''},
    {id: 3, question: '가장 재밌던 순간?', answer: ''},
    {id: 4, question: '가장 인상깊었던 순간?', answer: ''},
    {question: '좋게 들은 노래는?', answer: ''},
    {question: '점심은 무엇을?', answer: ''},
  ]);
  const [recordedDays, setrecordedDays] = useState();

  const fetchData = async () => {
    questionList.length = 0;
    quesInfo.length = 0;
    const url = `http://172.10.5.148:443/questions/${data.templateId}`;
    try {
      const response = await axios.get(url);
      const parsedArray = response.data;
      for (const element of parsedArray) {
        console.log(`This is element : ${element}`);
        const questionData = new QuestionData(
          element.questionId,
          element.questionContent,
        );
        questionList.push(questionData);
      }
      console.log('This is the length of quesInfo: ' + quesInfo.length);
      setrecordedDays(questionList);
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
                      const updatedQuesInfo = quesInfo.map(item => {
                        if (item.id === data.id) {
                          return {...item, answer: text};
                        }
                        return item;
                      });
                      setQuesInfo(updatedQuesInfo);
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

export default LeftDay;
