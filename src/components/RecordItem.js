import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const RecordItem = ({data})=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=>{navigation.push('Detail')}}>
            <View style={{marginTop:'1.5%', marginBottom:'1.5%',backgroundColor:'#555555', width:270, height:150, alignItems:'center', justifyContent:'center', borderRadius:16}}>
                <Text style={{color:'#dddddd', fontWeight:'bold',fontSize:30}}>
                    {data}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecordItem