import { View, Text, TextInput} from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'

const SearchInput = () => {

  return (
    <View style={{justifyContent: 'center',
            alignment: 'center',
            width: '100%',
            paddingVertical: 10,
            position: 'relative',
            paddingLeft: 23
        }}>
        <Ionic name='search'
            style ={{fontSize: 18,
                opacity: 0.7,
                position: 'absolute',
                zIndex: 1,
                left: 37
        }}/>
        <TextInput placeholder="Search..." placeholderTextColor="#909090"
        style={{
            width: "94%",
            backgroundColor: '#EBEBEB',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            padding: 4,
            paddingLeft: 40,

        }}/>
    </View>
  )
}

export default SearchInput