import { useNavigation } from "@react-navigation/native";
import { Center } from "native-base";
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {View, Text, TouchableOpacity} from "react-native"

const Days = ({data, id})=>{
    const detInfo = data;
    console.log(detInfo);
    const navigation = useNavigation();
    return(
        <View style={{position:'relative', flexDirection:'column', backgroundColor:'white', paddingTop:'5%'}}>
            {detInfo.daySpotMap.map((data, index)=> {
                let dayId = data.day
                return(
                    <View style={{position:'relative', flexDirection:'column',padding:'3%',}}>
                        <View style={{position:'relative', flexDirection:'column', borderColor: 'gray',
                    borderWidth: 1,borderRadius:14}}>
                        <Text style={{fontSize:20, paddingLeft:'5%', paddingBottom:'5%', color:'#533799', fontWeight:'bold', paddingTop:'3%'}}>
                            day {dayId}
                        </Text>
                        <View>
                            {data.spot.map((data, index)=>{
                                return(
                                    <View style={{flexDirection:'row', alignContents:'center', paddingBottom: '5%', paddingHorizontal:'5%'}}>
                                    <View style={{alignItems:'center',borderColor:'#113344',borderWidth:2, borderRadius: 100, width:25, height:25,}}>
                                        <Text style={{color:'#533799', fontWeight:'bold'}}>{index+1}</Text>
                                    </View>
                                    <View>
                                    <Text style={{paddingLeft:'4%', color:'#113344', fontWeight:'bold'}}>
                                        {data}
                                    </Text>
                                    </View>
                                </View>
                                )
                            })}
                        </View>
                            <TouchableOpacity onPress={()=>navigation.push("SelectPlace", {dayId, id})}>
                                <View style={{paddingLeft:'6%', paddingBottom:'3%'}}>
                                    <View style={{flexDirection:'row',borderColor:'black', borderWidth:2, width: '22%',borderRadius:14, backgroundColor:'#113344'}}>
                                        <Text style={{color: 'white', paddingBottom:'5%', paddingLeft:'10%', fontWeight:'bold'}}>
                                            장소 추가
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                )
            })}
        </View>
        
    )
}

export default Days