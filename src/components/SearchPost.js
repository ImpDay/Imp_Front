import React from "react";
import {View, Text} from 'react-native';
import SearchFriend from "./SearchFriend";

const friendInfo=[{username:'jihwan', userImage:require('../../images/place/image1.jpeg')},{username:'jihwan', userImage:require('../../images/place/images7.jpeg')},{username:'jihwan', userImage:require('../../images/place/images9.jpeg')},{username:'jihwan', userImage:require('../../images/place/images10.jpeg')},{username:'jihwan', userImage:require('../../images/place/image1.jpeg')}]

const SearchPost = ()=>{
    return(
        <View style={{position:'relative'}}>
            {friendInfo.map((data, index)=> {
                return(
                    <SearchFriend key={index} data={data}/>
                )
            })}
        </View>
    )
}

export default SearchPost