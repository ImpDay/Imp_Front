import { useNavigation } from "@react-navigation/native";
import "../screens/ignore";
import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const today = new Date();
const currentDayOfWeek = today.getDay();

const weekDays = [];
for (let i = 1; i < 8; i++) {
  const dayIndex = (currentDayOfWeek + i) % 7;
  weekDays.push(daysOfWeek[dayIndex]);
}

const ListItems = ({data}) => {
    let level='';
    const level1='#aaaaaa'//0~20
    const level2='#99bb99'//21~40
    const level3='#669966'//41~60
    const level4='#336633'//61~80
    const level5='#003300'//81~100
    let array = data.weekscore;
    return(
        <View style={{marginLeft:'3%',marginRight:'3%',justifyContent:'center',position:'relative',flexDirection:'row', alignItems:'center', marginBottom:'5%', height:60, backgroundColor:'#444444', borderRadius:20}}>
            <View style={{position:'relative', flexDirection:'column', alignItems:'center'}}>
                <View style={{position:'relative', alignItems:'center', borderColor:'#cccccc', borderWidth:1.5, borderRadius:18, width:46,height:46, justifyContent:'center'}}>
                    <Image source={data.friendImage} style={{ width: 40, height: 40, borderRadius: 15 }}/>
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={{paddingLeft:'5%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{color:'white',}}>
                        {data.friendName}
                    </Text>
                    <Text style={{color:'#ccdd11', fontWeight:'bold',paddingRight:'1.5%' }}>
                        Today
                    </Text>
                </View>
                <View style={{flexDirection:'row', paddingLeft:'5%'}}>
                    {weekDays.map((data, index)=> {
                        if(array[index]<21){
                            level=level1;
                          }else if(21<=array[index]&&array[index]<41){
                            level = level2;
                          }else if(41<=array[index]&&array[index]<61){
                            level = level3;
                          }else if(61<=array[index]&&array[index]<81){
                            level = level4;
                          }
                          else{
                            level = level5;
                          }
                        if(index==6){
                            return(
                                <View style={{marginTop:'1%',backgroundColor:level ,borderRadius:5, width:40, alignItems:'center'}}>
                                    <Text style={{color:'white'}}>
                                        {data}
                                    </Text>
                                </View>
                                )
                        }else{
                            return(
                                <View style={{marginTop:'1%',backgroundColor:level, borderRadius:5, width:40, alignItems:'center'}}>
                                    <Text style={{color:'white'}}>
                                        {data}
                                    </Text>
                                </View>
                                )
                        }
                        
                          
                })}
                </View>
            </View>
        </View>
    )
}

export default ListItems