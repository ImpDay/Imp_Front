import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProfileButton = ({name, profileImage}) => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={{paddingVertical: 5, paddingHorizontal:10,}}>
            <TouchableOpacity onPress={()=>{navigation.push('EditProfile',{
                name, profileImage,
            })
        }}
        style={{width: '100%',}}>
            <View
                style={{width: '100%', height: 40, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5, justifyContent:'center', alignItems:'center'}}>
                <Text style ={{fontWeight: 'bold',fontSize: 14, letterSpacing:1, opacity:0.8,}}>
                    프로필 수정
                </Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={{paddingVertical: 1, paddingHorizontal:10, paddingBottom:6}}>
            <TouchableOpacity onPress={()=>{navigation.push('Places')
        }}
        style={{width: '100%',}}>
            <View
                style={{width: '100%', height: 40, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <AntDesign name="pluscircleo" style={{ fontSize: 15, paddingTop:5, paddingHorizontal:5 }} />   
                <Text style ={{fontWeight: 'bold',fontSize: 14, letterSpacing:1, opacity:0.8,}}>
                    새로운 여행!
                </Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
    
  )
}

export default ProfileButton