import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator(); 

const MyTab=() =>{
    return(
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              height: 60,
            },
            tabBarIcon: ({focused, size, color})=>{
              let iconName;
              color = 'black';
              if(route.name === 'Home'){
                iconName = focused ? 'home-sharp' : 'home-outline';
              }else if(route.name === 'Search'){
                iconName = focused ? 'search' : 'ios-search-outline';
              }else if(route.name === 'Profile'){
                iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
              }
              return <Ionic name={iconName} size={size} color={color}/>
            },
          })}
      >
        <Tab.Screen name ="Home" component={Home}/>
        <Tab.Screen name ="Search" component={Search}/>
        <Tab.Screen name ="Profile" component={Profile}/>
      </Tab.Navigator>
    )
}

export default MyTab