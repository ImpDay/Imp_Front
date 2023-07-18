import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Log3 from './Log3';
import Log4 from './Log4';
import LoginPage from './LoginPage';
import Home from './Home';
import Profile from './Profile';

import Adding from './Adding';
import EditProfile from './EditProfile';
import ListItems from '../components/ListItems';
import AddingQuestion from '../components/AddingQuestion';
import Plus from '../components/Plus';
import Posts from '../components/Posts';
import Today from '../components/Today';
import Detail from '../components/Detail';
import Follower from '../components/Follower';
import Following from '../components/Following';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Log3" component={Log3} />
        <Stack.Screen name="Log4" component={Log4} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Adding" component={Adding} />
        <Stack.Screen name="AddingQuestion" component={AddingQuestion} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ListItems" component={ListItems} />
        <Stack.Screen name="Plus" component={Plus} />
        <Stack.Screen name="Today" component={Today} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Follower" component={Follower} />
        <Stack.Screen name="Following" component={Following} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
