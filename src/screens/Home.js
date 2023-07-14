import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Posts from '../components/Posts'


const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View style={{justifyContent:'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
          }}>
        <View>
          <Text style={{fontSize: 25, color: '#224455',fontWeight:'500', }}>
            Triplan
          </Text>
        </View>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5
        }}>
          <TouchableOpacity onPress={()=>navigation.push("Adding")}>
            <FontAwesome name="plus-square-o" style={{fontSize: 27}}/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Posts/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home