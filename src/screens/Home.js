import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Posts from '../components/Posts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Calendar from '../components/Calendar';
import {CalendarList} from 'react-native-calendars';
import AntDesign from 'react-native-vector-icons/AntDesign';
import './ignore';
import List from '../components/List';
import {useNavigation} from '@react-navigation/native';

const Home = ({navigation, userId}) => {
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
    templateContainer: {
      backgroundColor: 'black',
      position: 'relative',
      width: '100%',
      height: '37%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '6%',
    },
    calenderContainer: {
      position: 'relative',
      width: '100%',
      height: '50%',
      backgroundColor: 'black',
      alignItems: 'center',
      marginTop: 10,
    },
    actionBar: {
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
    addTemplateButton: {
      backgroundColor: 'black',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
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
        <View style={styles.templateContainer}>
          <ScrollView horizontal={true}>
            <View style={styles.addTemplateButton}>
              <TouchableOpacity onPress={() => navigation.push('Adding')}>
                <AntDesign
                  name="pluscircleo"
                  style={{color: '#dddddd', fontSize: 30}}
                />
              </TouchableOpacity>
            </View>
            <Posts />
          </ScrollView>
        </View>
        <View style={styles.calenderContainer}>
          <View
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
            }}>
            <SafeAreaView style={styles.container}>
              <Calendar />
            </SafeAreaView>
          </View>
        </View>
      </View>
    );
  };

  const renderFriendTabContent = () => {
    return (
      <View style={styles.contentsContainer}>
        <ScrollView style={{marginBottom: '26%'}}>
          <List />
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.actionBar}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Search');
            }}>
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
