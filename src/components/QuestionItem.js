import React from "react";
import {View, Text} from 'react-native'

const QuestionItem = ({data})=>{
    return (
        <View style={{width:300, height:30, marginLeft:'10%', marginBottom:'3%', backgroundColor:'#999999', borderRadius:5, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'black', fontWeight:'bold', fontSize:15}}>
                {data}
            </Text>
        </View>
    )
}

export default QuestionItem