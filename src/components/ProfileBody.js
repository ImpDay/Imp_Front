import { View, Text, Image } from 'react-native'
import React from 'react'



const ProfileBody = ({
    name,
    profileImage,
}) => {

  return (
        <View>
            <View style={{flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingVertical: 50,
            }}>
            <View style={{ alignItems: 'center'}}>
                <Image
                    source={{uri:profileImage}}
                    style={{width: 150, height: 150, borderRadius:60,
                    }}
                />

                <Text style={{
                    paddingVertical: 20, 
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#224455',
                    paddingBottom:10
                }}>
                    {name}
                </Text>
            </View>
            </View>
        </View>
  )
}

export default ProfileBody