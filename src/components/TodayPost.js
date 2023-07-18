import React from "react";
import { View, Text } from "react-native";
import TodayQuestion from "./TodayQuestion";

const quesInfo=['오늘 하루는?','오늘 맛있었던 음식?', '가장 재밌던 순간?', '가장 인상깊었던 순산?', '좋게 들은 노래는?', '점심은 무엇을?']

const TodayPost = ()=>{
    return(
        <View style={{position:'relative',alignItems:'center',}}>
            {quesInfo.map((data, index)=> {
                return(
                    <TodayQuestion key={index} data={data}/>
                  )
            })}
        </View>
    )
}

export default TodayPost