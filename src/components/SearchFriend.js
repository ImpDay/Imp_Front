import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native"

const SearchFriend = ({data}) => {
    return(
        <View style={{position:'relative',flexDirection:'row', width:'100%', height:60, backgroundColor:'black', marginBottom:'3%', alignItems:'center'}}>
            <View style={{position:'relative',backgroundColor:'black', width:47, height:47, marginLeft:'6%', borderRadius:23, borderColor:'#1199ff', borderWidth:2, justifyContent:'center', alignItems:'center'}}>
                <Image
                    source={data.userImage}
                    style={{ width: 38, height: 38, borderRadius: 20 }}
                />
            </View>
            <View style={{position:'relative',width:'50%', height:'70%', backgroundColor:'black',justifyContent:'center', marginLeft:'3%'}}>
                <Text style={{color:'white', fontSize:15}}>
                    {data.username}
                </Text>
            </View>
            <View style={{position:'relative',width:'20%', height:'70%', backgroundColor:'black', justifyContent:'center', marginLeft:'7%',}}>
                <TouchableOpacity>
                    <View style={{position:'relative',width:'65%', height:'85%',marginLeft:'4%', marginTop:'2%', backgroundColor:'#333333', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#1199ff', fontWeight:'bold', fontSize:13}}>
                            follow
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchFriend