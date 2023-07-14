
// PostItems.js
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const PlaceItems = ({ data }) => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}
      >
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <Text
                style={{

                  fontWeight: '700',
                  fontSize: 18,
                  color: '#113344',
                  paddingRight:300
                }}
                >
                {data.place}
              </Text>
              <TouchableOpacity onPress={()=> navigation.push('Period', data
            )}>
                <AntDesign
                    name='checkcircleo'
                    style={{
                    paddingRight: 10,
                    fontSize: 20,
                    }}
            />
          </TouchableOpacity>

            </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
        </View>
      </View>
    </View>
  );
};

export default PlaceItems;
