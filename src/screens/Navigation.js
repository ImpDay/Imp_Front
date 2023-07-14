import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Log2 from './Log2';
import Log3 from './Log3';
import Log4 from './Log4';
import Log5 from './Log5';
import MyTab from './MyTab';
import Profile from './Profile';

import Detail from '../components/Detail';
import PostItems from '../components/PostItems';
import Places from '../components/Places';
import PlaceItems from '../components/PlaceItems';
import Period from '../components/Period';
import Status from './Status';
import Adding from './Adding';
import EditProfile from './EditProfile';
import ListItems from '../components/ListItems';
import Days from '../components/Days';
import SelectPlace from '../components/SelectPlace';
import TravelList from '../components/TravelList';
import SearchInput from '../components/SearchInput';


const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(<NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name ="Log5" component={Log5}/>
          <Stack.Screen name="Log2" component={Log2} />
          <Stack.Screen name ="Log3" component={Log3}/>
          <Stack.Screen name ="Log4" component={Log4}/>
          <Stack.Screen name ="MyTab" component={MyTab}/>
          <Stack.Screen name = "Profile" component={Profile}/>
          <Stack.Screen name = "SearchInput" component={SearchInput}/>
          <Stack.Screen name ="Adding" component={Adding}/>
          <Stack.Screen name ="PostItems" component={PostItems}/>
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name ="EditProfile" component={EditProfile}/>
          <Stack.Screen name="Places" component={Places}/>
          <Stack.Screen name="PlaceItems" component={PlaceItems}/>
          <Stack.Screen name="Period" component={Period}/>
          <Stack.Screen name="ListItems" component={ListItems}/>
          <Stack.Screen name="Detail" component={Detail}/>
          <Stack.Screen name="Days" component={Days}/>
          <Stack.Screen name="SelectPlace" component={SelectPlace}/>
          <Stack.Screen name="TravelList" component={TravelList}/>
        </Stack.Navigator>
      </NavigationContainer>
      );

}
export default Navigation