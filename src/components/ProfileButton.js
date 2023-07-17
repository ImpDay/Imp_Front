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
                style={{width: '100%', height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 5, justifyContent:'center', alignItems:'center'}}>
                <Text style ={{fontWeight: 'bold',fontSize: 14, letterSpacing:1, opacity:0.8,color:'white'}}>
                    프로필 편집
                </Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
    
  )
}

export default ProfileButton