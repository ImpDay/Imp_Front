import React from "react";
import {View, Text} from 'react-native'
import ListItems from "./ListItems";
import "../screens/ignore";

let level=''
const level1='#aaaaaa'//0~20
const level2='#99bb99'//21~40
const level3='#669966'//41~60
const level4='#336633'//61~80
const level5='#003300'//81~100

const List = () => {
    const ListInfo=[{friendName:'JiHwAN', 
    friendImage: require('../../images/place/image3.jpeg'),
    weekscore:[96,86,75,91,45,78,82]
    },
    {friendName:'Kyeah', 
    friendImage: require('../../images/place/image3.jpeg'),
    weekscore:[76,46,55,61,15,98,32]
    },
    {friendName:'YoungWanna', 
    friendImage: require('../../images/place/images4.jpeg'),
    weekscore:[56,26,15,11,45,18,12]
    },
    {friendName:'TanK', 
    friendImage: require('../../images/place/images5.jpeg'),
    weekscore:[66,86,82,91,99,92,94]
    },
    {friendName:'Jimin', 
    friendImage: require('../../images/place/images6.jpeg'),
    weekscore:[76,76,65,31,25,58,10]
    },
    {friendName:'Messi', 
    friendImage: require('../../images/place/images7.jpeg'),
    weekscore:[66,66,55,31,45,38,22]
    },
    {friendName:'Son', 
    friendImage: require('../../images/place/image3.jpeg'),
    weekscore:[96,66,55,91,45,38,54]
    },
    {friendName:'Jiseong', 
    friendImage: require('../../images/place/image3.jpeg'),
    weekscore:[64,13,24,87,69,90,23]
    },
    {friendName:'Chanho', 
    friendImage: require('../../images/place/image3.jpeg'),
    weekscore:[88,77,11,22,87,74,33]
    },
    {friendName:'KangIn', 
    friendImage: require('../../images/place/image3.jpeg'),
    weekscore:[12,44,77,22,33,55,99]
    },
    {friendName:'Minjae', 
    friendImage: require('../../images/place/image3.jpeg'),
    weekscore:[96,66,55,91,45,38,54]
    },]
    return(
        <View style={{position:'relative',}}>
            {ListInfo.map((data, index)=> {
                return(
                    <ListItems key={index} data={data}/>
                )
            })}
        </View>
    )
}

export default List