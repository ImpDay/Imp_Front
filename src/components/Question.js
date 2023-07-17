import React from "react";
import { View, Text } from "react-native";
import QuestionItem from './QuestionItem'

const qusInfo = ['오늘 하루는?', '오늘 기분은?', '오늘 맛있었던 것?']
const Question = ()=>{
    return(
        <View style={{position:'relative',}}>
            {qusInfo.map((data, index)=> {
                return(
                    <QuestionItem key={index} data={data}/>
                )
            })}
        </View>
    )
}

export default Question