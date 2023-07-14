import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ListItems = ({data}) => {
    const navigation =useNavigation();
    console.log(data);
    return(
        <View style={{flexDirection:'row', alignItems:'center', paddingBottom: 15, paddingHorizontal:15}}>
            <View style={{alignItems:'center',borderColor:'#113344',borderWidth:2, borderRadius: 100, width:30, height:30,}}>
                    <MaterialCommunityIcons name="wallet-travel" style={{fontSize:23, color:'black'}}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.push('Detail', data )}>
                <View style={{flexBasis:'column',}}>
                    <Text style={{paddingLeft:15, color:'#113344', fontWeight:'bold'}}>
                        {data.place} 여행
                    </Text>
                    <Text style={{paddingLeft:15, color:'#113344'}}>
                        {data.start_date} ~ {data.end_date}
                    </Text>
                </View>
            </TouchableOpacity> 
        </View>
    )
}

export default ListItems