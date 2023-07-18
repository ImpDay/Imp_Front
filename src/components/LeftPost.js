import React from "react";
import { View, Text } from "react-native";
import LeftQuestion from "./LeftQuestion";

const quesInfo=['오늘 하루는?','오늘 맛있었던 음식?', '가장 재밌던 순간?', '가장 인상깊었던 순산?', '좋게 들은 노래는?', '점심은 무엇을?']

const LeftPost = ()=>{
    return(
        <View style={{position:'relative',alignItems:'center',}}>
            {quesInfo.map((data, index)=> {
                return(
                    <LeftQuestion key={index} data={data}/>
                  )
            })}
        </View>
    )
}

export default LeftPost