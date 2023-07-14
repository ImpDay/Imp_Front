import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import { color } from "native-base/lib/typescript/theme/styled-system";

const Period =({data, navigation})=>{
    const styles = StyleSheet.create({
        calendar: {
            borderBottomWidth: 3,
            borderBottomColor: '#e0e0e0',
          }
    });
    let startDates = format(new Date(), 'yyyy-MM-dd')
    let endDates = format(new Date(), 'yyyy-MM-dd')
    const posts = [
        {
          date: startDates,
        },
        {
          date: endDates,
        }
      ];
      const markedDates = posts.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {});
      const [selectedDate, setSelectedDate] = useState(
        format(new Date(), "yyyy-MM-dd"),
      );
      const markedSelectedDates = {
        ...markedDates,
        [selectedDate]: {
            marked: true,
          selected: true,
          marked: markedDates[selectedDate]?.marked,
        }
      }
    return(
        <SafeAreaView>
        
        <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '1%',
            paddingBottom: '3%',
            backgroundColor: 'white',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.8}}>
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
                <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:'2%', }} /> 
            </TouchableOpacity>
            <Text style={{paddingLeft:'38%', color:'#224455',fontSize:18,}}>
                일정
            </Text>
        </View>
        <Text style={{flexDirection:'row', padding:'15%', backgroundColor:'white', color:'#335566', fontWeight:'300', paddingLeft:'20%', paddingBottom:'10%'}}>
            여행의 시작 날짜와 끝 날짜를 정하세요!
        </Text>
        <Calendar style={styles.calendar}
          markedDates={markedSelectedDates}
          theme={{
          selectedDayBackgroundColor: '#335566',
          arrowColor: '#009688',
          dotColor: 'orange',
          todayTextColor:'#335566',
          selectedDayTextColor: 'orange',
        }} 
         onDayPress={(day) => {
        setSelectedDate(day.dateString)
        checkDate= format(new Date(day.dateString), 'yyyy-MM-dd')
        if(checkDate>startDates){
            posts[1].date = checkDate;
        }else{
            posts[0].date = checkDate;
        }
      }}/>
        <View style={{backgroundColor:'white', height:'40%'}}>

        </View>
        </SafeAreaView>
    );
};
export default Period