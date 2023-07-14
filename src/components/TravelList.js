import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import ListItems from "./ListItems";
import AntDesign from "react-native-vector-icons/AntDesign"

const TravelList=({navigation})=>{
        const ListInfo=[{place: '한국',
        start_date: '2023-07-01',
        end_date: '2023-07-04'
        },
        {place: '미국',
        start_date: '2023-05-01',
        end_date: '2023-05-06'
        },
        {place: '중국',
        start_date: '2023-04-15',
        end_date: '2023-04-21'
        },
        {place: '일본',
        start_date: '2022-01-10',
        end_date: '2023-01-18'
        },
        {place: '스위스',
        start_date: '2023-05-01',
        end_date: '2023-05-06'
        },
        {place: '제주도',
        start_date: '2023-05-01',
        end_date: '2023-05-06'
        }]
    return(
        <View>
        <View>
            <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '5%',
              backgroundColor: 'white',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.2,}}>
            <TouchableOpacity onPress={()=>{ navigation.goBack(); }}>
                <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
            </TouchableOpacity>
            </View>
        </View>
        <View style={{position:'relative',backgroundColor:'white', flexDirection:'column', paddingVertical:'10%'}}>
            {ListInfo.map((data, index)=> {
                return(
                    <ListItems key={index} data={data}/>
                )
            })}
        </View>
        <View style={{backgroundColor:'white',height:'100%'}}>

        </View>
        </View>
    )
}
export default TravelList