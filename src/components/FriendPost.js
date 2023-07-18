import React from "react";
import { View, Text } from "react-native";
import Friends from "./Friends";

const friendInfo=[{username:'jihwan', userImage:require('../../images/place/image1.jpeg')},{username:'kyeah', userImage:require('../../images/place/image2.jpeg')},{username:'YoungWanna', userImage:require('../../images/place/image3.jpeg')},{username:'tank', userImage:require('../../images/place/image9.jpeg')},{username:'jimin', userImage:require('../../images/place/images4.jpeg')},{username:'ohhyeon', userImage:require('../../images/place/images5.jpeg')},{username:'seonkyu', userImage:require('../../images/place/images6.jpeg')},{username:'jihwan', userImage:require('../../images/place/images7.jpeg')},{username:'jihwan', userImage:require('../../images/place/images9.jpeg')},{username:'jihwan', userImage:require('../../images/place/images10.jpeg')},{username:'jihwan', userImage:require('../../images/place/image1.jpeg')}]

const FriendPost =({data})=>{
    return(
        <View style={{position:'relative',marginTop:'2%'}}>
        {friendInfo.map((data, index)=> {
            return(
                <Friends key={index} data={data}/>
            )
        })}
    </View>
    )
}

export default FriendPost