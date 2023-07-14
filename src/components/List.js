import React from "react";
import {View, Text} from 'react-native'
import ListItems from "./ListItems";

const List = () => {
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
            {ListInfo.map((data, index)=> {
                return(
                    <ListItems key={index} data={data}/>
                )
            })}
        </View>
    )
}

export default List