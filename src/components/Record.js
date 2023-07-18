import React from "react";
import { View, Text } from "react-native";
import RecordItem from "./RecordItem";

const recInfo=['2023-07-17','2023-07-16','2023-07-15','2023-07-14','2023-07-13','2023-07-12','2023-07-11']

const Record =()=>{
    return(
        <View style={{position:'relative',alignItems:'center',}}>
            {recInfo.map((data, index)=> {
                return(
                    <RecordItem key={index} data={data}/>
                  )
            })}
        </View>
    )
}

export default Record