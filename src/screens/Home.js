import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Posts from '../components/Posts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Calendar} from 'react-native-calendars';
import {CalendarList} from 'react-native-calendars';
import AntDesign from 'react-native-vector-icons/AntDesign';
import './ignore';
import List from '../components/List';
import {useNavigation} from '@react-navigation/native';

const totalInfo = [
  '2023-07-01',
  '2023-07-02',
  '2023-07-03',
  '2023-07-04',
  '2023-07-05',
  '2023-07-06',
  '2023-07-07',
  '2023-07-08',
  '2023-07-09',
  '2023-07-10',
  '2023-07-11',
  '2023-07-12',
  '2023-07-13',
  '2023-07-14',
  '2023-07-15',
  '2023-07-16',
];
const scoreInfo = [
  86, 56, 23, 45, 65, 90, 64, 55, 25, 79, 33, 15, 49, 76, 14, 24,
];
let level = '';
const level1 = '#aaaaaa'; //0~20
const level2 = '#99bb99'; //21~40
const level3 = '#669966'; //41~60
const level4 = '#336633'; //61~80
const level5 = '#003300'; //81~100

const marked = {};
let i = 0;
totalInfo.forEach(day => {
  if (scoreInfo[i] < 21) {
    level = level1;
  } else if (21 <= scoreInfo[i] && scoreInfo[i] < 41) {
    level = level2;
  } else if (41 <= scoreInfo[i] && scoreInfo[i] < 61) {
    level = level3;
  } else if (61 <= scoreInfo[i] && scoreInfo[i] < 81) {
    level = level4;
  } else {
    level = level5;
  }
  i++;
  marked[day] = {
    selected: true,
    selectedColor: level,
    selectedTextColor: 'white',
  };
});

const Home = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('me');
  const handleMeTabPress = () => {
    setActiveTab('me');
  };

  const handleFriendTabPress = () => {
    setActiveTab('friends');
  };

  const styles = StyleSheet.create({
    calendar: {
      container: {
        flex: 1,
        justifyContent: 'center',
      },
    },
    outerContainer: {
      flex: 1,
    },
    upperBar: {
      position: 'relative',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: '4%',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingTop: '2%',
    },
    tabNavBar: {
      position: 'relative',
      paddingTop: '5%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: '37%',
      paddingLeft: '38%',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingBottom: '5%',
    },
    contentsContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: 'black',
    },
  });

  const renderMeTabContent = () => {
    return (
      <View style={styles.contentsContainer}>
        <View
          style={{
            backgroundColor: 'black',
            position: 'relative',
            width: '100%',
            height: '35%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '6%',
          }}>
          <View
            style={{
              position: 'relative',
              flexDirection: 'row',
              backgroundColor: 'black',
              position: 'relative',
              width: '97%',
              height: '90%',
              alignItems: 'center',
              padding: '1%',
            }}>
            <ScrollView horizontal={true}>
              <View
                style={{
                  backgroundColor: 'black',
                  position: 'relative',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.push('Adding')}>
                  <AntDesign
                    name="pluscircleo"
                    style={{color: '#dddddd', fontSize: 30}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{position: 'relative', paddingLeft: '2%'}}>
                <Posts />
              </View>
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            position: 'relative',
            width: '100%',
            height: '50%',
            backgroundColor: 'black',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
            }}>
            <SafeAreaView style={styles.container}>
              <CalendarList
                theme={{
                  calendarBackground: 'black',
                  dayTextColor: 'white',
                  monthTextColor: '#88bb88',
                  todayTextColor: 'white',
                }}
                markedDates={marked}
              />
            </SafeAreaView>
          </View>
        </View>
      </View>
    );
  };

  const renderFriendTabContent = () => {
    return (
      <View
        style={{
          position: 'relative',
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
        }}>
        <ScrollView>
          <List />
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.upperBar}>
        <View>
          <TouchableOpacity>
            <FontAwesome5
              name="user-plus"
              style={{fontSize: 17, color: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: 21, color: 'white', fontWeight: 'bold'}}>
            하루, 셈
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.push('Profile')}>
          <Image
            source={require('../../images/place/image2.jpeg')}
            style={{width: 27, height: 27, borderRadius: 100}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabNavBar}>
        <TouchableOpacity onPress={handleMeTabPress}>
          <View
            style={{
              borderBottomColor: activeTab === 'me' ? '#11cc11' : '#888888',
              borderBottomWidth: 1.3,
            }}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              me
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFriendTabPress}>
          <View
            style={{
              borderBottomColor:
                activeTab === 'friends' ? '#11cc11' : '#888888',
              borderBottomWidth: 1.3,
            }}>
            <Text style={{fontSize: 16, color: '#dddddd', fontWeight: 'bold'}}>
              friends
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {activeTab === 'me' && renderMeTabContent()}
      {activeTab === 'friends' && renderFriendTabContent()}
    </SafeAreaView>
  );
};

export default Home;
