import React, { useState } from "react";
import {View, Text, TextInput} from "react-native";

const LeftQuestion = ({data})=>{
    const [leftday, setLeftday] = useState('');
    return(
        <View style={{width:270, height:150, backgroundColor:'gray', alignItems:'center', borderRadius:10, paddingTop:'2%', marginBottom:'3%'}}>
            <Text style={{fontWeight:'bold', fontSize:12, marginBottom:'2%', color:'black'}}>
                {data}
            </Text>
            <TextInput
                style={{
                    width: '90%',
                    height: '75%',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: '5%',
                    textAlignVertical: 'top',
                  }}
                placeholder="pleas write your own answer..."
                multiline={true}
                onChangeText={text => setLeftday(text)}
                value={leftday} 
            />
        </View>
    )
}

export default LeftQuestion