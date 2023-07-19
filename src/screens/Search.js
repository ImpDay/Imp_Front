import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Axios } from 'axios'


const friendInfo=[{username:'changyong', userImage:require('../../images/place/image1.jpeg'), isFollowing:true},{username:'changwan', userImage:require('../../images/place/image1.jpeg'), isFollowing:false},{username:'yejin', userImage:require('../../images/place/image1.jpeg'), isFollowing:false},{username:'ohhyun', userImage:require('../../images/place/image1.jpeg'), isFollowing:true},{username:'jimin', userImage:require('../../images/place/image1.jpeg'), isFollowing:false},{username:'seonkyu', userImage:require('../../images/place/image1.jpeg'), isFollowing:true},{username:'keunwon', userImage:require('../../images/place/image1.jpeg'), isFollowing:false},{username:'jihwan', userImage:require('../../images/place/images7.jpeg'), isFollowing:true},{username:'jihwan', userImage:require('../../images/place/images9.jpeg'), isFollowing:false},{username:'jihwan', userImage:require('../../images/place/images10.jpeg'), isFollowing:false},{username:'jihwan', userImage:require('../../images/place/image1.jpeg'), isFollowing:true}]

const Search = ({navigation}) => {
  const [follow, setFollow] = useState(friendInfo.isFollowing);
  const [friend, setFriend] = useState('');
  const [myArray, setMyArray] = useState([]);

  const handleFollow = async () => {
    try {
      Axios.post('', {
        
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        setFollow(!follow);
      }).catch(error => console.log(error));
      } catch (error) {
        console.error(error);
      }
    };

  const handleAddItem = () => {
    setMyArray([]);
    friendInfo.map((data, index)=> {
      if ((friend !== '')&&(friend===data.username)) {
        const matchedArray = friendInfo.filter(data => data.username === friend);
        setMyArray(matchedArray);
        setFriend('');
      }
    })
  };
  useEffect(() => {
    console.log('myArray changed:', myArray);
  }, [myArray]);
  return (
    <SafeAreaView
      style={{
        width:'100%',
        backgroundColor: 'black',

      }}>
      <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '1%',
          backgroundColor: 'black',}}>
          <TouchableOpacity
              onPress={()=>{
              navigation.goBack();
          }}>
              <AntDesign name="arrowleft" style={{ color:'#dddddd', fontSize: 25, paddingTop:'1%', }} /> 
          </TouchableOpacity>
          <Text style={{color:'white', fontSize:20,marginLeft:'30%'}}>
            Find Friend
          </Text>
      </View>
      <View>
        <View style={{justifyContent: 'center',
              alignment: 'center',
              width: '100%',
              paddingVertical: '5%',
              position: 'relative',
              paddingLeft: '6%',
              marginBottom:'7%'
          }}>
          
            <Ionic name='search'
                style ={{fontSize: 18,
                    opacity: 0.7,
                    position: 'absolute',
                    zIndex: 1,
                    left: 37
            }}/>
          
          <TextInput placeholder="Search..." placeholderTextColor="#555555"
            style={{
                width: "94%",
                backgroundColor: '#dddddd',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                padding: '1.5%',
                paddingLeft: 40,
            }}
            onChangeText={text => setFriend(text)}
            value={friend}/>
            <TouchableOpacity onPress={handleAddItem}>
              <View style={{position:'absolute', zIndex:1, bottom:10, width:29, left:298}}>
                <Text style={{color:'#555555', fontWeight:'bold', fontSize:15}}>
                  검색
                </Text>
              </View>
            </TouchableOpacity>
      </View>
     </View>
      <View style={{backgroundColor:'black', width:'100%', height:'81%'}}>
        <ScrollView> 
          <View style={{position:'relative'}}>
              {myArray.map((data, index)=> {
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
                          <TouchableOpacity onPress={handleFollow}>
                              <View style={{position:'relative',width:'65%', height:'85%',marginLeft:'4%', marginTop:'2%', backgroundColor:'#333333', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                                  <Text style={{color:'#1199ff', fontWeight:'bold', fontSize:13}}>
                                      {follow ? '팔로잉':'팔로우'}
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      </View>
                </View>
                  )
              })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Search