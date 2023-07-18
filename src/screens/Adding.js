import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import './ignore'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Adding = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState();
  const [question, setQuestion] = useState('');
  const [myArray, setMyArray] = useState([]);
  const handleAddItem = () => {
    if (question !== '') {
      setMyArray([...myArray, question]);
      setQuestion('');
    }
  };
  useEffect(() => {
    console.log('myArray changed:', myArray);
  }, [myArray]);
  
  return (
    <SafeAreaView
      style={{position:'relative',width:'100%', backgroundColor: 'black', height:'100%'}}>
        <View style={{position:'relative',flexDirection: 'row', alignItems: 'center',paddingLeft:'2%',paddingRight:'2%',
            backgroundColor: 'black',alignItems:'center',}}>
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
                <AntDesign name="arrowleft" style={{ color:'#dddddd', fontSize: 25, paddingTop:'1%', }} /> 
            </TouchableOpacity>
            <Text style={{color:'#dddddd', fontSize:17, fontWeight:'bold', paddingLeft:'30%'}}>
              Template 생성
            </Text>
    
        </View>
        <View style={{backgroundColor:'black',width:'100%', height:'30%', marginTop:'10%'}}>
          <View style={{backgroundColor:'black', width:'100%', height:'15%', marginTop:'15%', flexDirection:'row'}}>
            <View style={{backgroundColor:'black', width:'25%', height:'100%', marginLeft:'10%', borderBottomColor:'#dddddd', borderWidth:1.5, borderTopColor:'#dddddd', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15, color:'#dddddd',fontWeight:'bold'}}>
                    Title
                </Text>
            </View>
            <View style={{backgroundColor:'black', width:'45%', height:'100%', marginLeft:'10%',}}>
              <TextInput placeholder='Please enter title...' placeholderTextColor="#777777"
                  style={{
                    width: "100%",
                    backgroundColor: '#dddddd',
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight:'bold'
                  }}
                  onChangeText={text => setTitle(text)}
                  value={title} />
            </View>
          </View>
          <View style={{backgroundColor:'black', width:'100%', height:'15%', marginTop:'12%', flexDirection:'row'}}>
            <View style={{backgroundColor:'black', width:'25%', height:'100%', marginLeft:'10%',borderBottomColor:'#dddddd', borderWidth:1.5, borderTopColor:'#dddddd', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15, color:'#dddddd',fontWeight:'bold'}}>
                    Period
                </Text>
            </View>
            <View style={{backgroundColor:'black', width:'45%', height:'100%', marginLeft:'10%'}}>
              <TextInput placeholder='Please enter period...' placeholderTextColor="#777777"
                  style={{
                    width: "100%",
                    backgroundColor: '#dddddd',
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight:'bold'
                  }}
                  onChangeText={text => setPeriod(text)}
                  value={period} />
            </View>
          </View>
        </View>
        <View style={{backgroundColor:'black', width:'100%', height:'50%'}}>
          <View style={{marginLeft:'10%',backgroundColor:'black', width:'100%', height:'15%', alignItems:'center', flexDirection:'row'}}>
              <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>
                  Question List
              </Text>
          </View>
          <View style={{backgroundColor:'black', width:'100%', height:'70%',}}>
                  <ScrollView>
                  <View style={{position:'relative',}}>
                      {myArray.map((data, index)=> {
                      return(
                        <View style={{width:300, height:30, marginLeft:'10%', marginBottom:'3%', backgroundColor:'#999999', borderRadius:5, alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingLeft:'20%', paddingRight:'10%'}}>
                            <Text style={{color:'black', fontWeight:'bold', fontSize:15}}>
                                {data}
                            </Text>
                            <TouchableOpacity onPress={() => {
                                const updatedArray = [...myArray];
                                updatedArray.splice(index, 1);
                                setMyArray(updatedArray);
                              }}>
                                <FontAwesome name="trash-o" style={{fontSize:22,color:'black'}}/>
                            </TouchableOpacity>
                        </View>
                      )
                    })}
                  </View>
                  </ScrollView>
                  <View style={{marginLeft:'10%',backgroundColor:'black', width:'76%', height:'13%', flexDirection:'row'}}>
                    <View style={{backgroundColor:'black', width:'88%'}}>
                      <TextInput placeholder='Please write your questions...' placeholderTextColor="#777777"
                        style={{
                          width: "100%",
                          height:33,
                          backgroundColor: '#dddddd',
                          borderBottomLeftRadius: 6,
                          borderTopLeftRadius:6,
                          fontSize: 12,
                          fontWeight:'bold',
                        }}
                        onChangeText={text => setQuestion(text)}
                        value={question} />
                    </View>
                    <View style={{backgroundColor:'gray',width:'12%',height:33, borderBottomRightRadius:6,borderTopRightRadius:6, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity onPress={handleAddItem}>
                          <AntDesign name="plus" style={{color:'#1133ff', fontWeight:'bold',fontSize:17}}/>
                        </TouchableOpacity>
                        
                    </View>
                  </View>
          </View>
        </View>
        <View style={{backgroundColor:'black', width:'100%', height:'10%'}}>
          <View style={{backgroundColor:'black', width:'100%', height:'50%', marginTop:'3%'}}>
              <TouchableOpacity onPress={()=>{navigation.push("Home")}}>
                <View style={{backgroundColor:'black', width:'32%', height:'100%', marginLeft:'34%', borderColor:'#dddddd', borderWidth:1, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'#dddddd', fontWeight:'bold', fontSize:15}}>
                      Save
                    </Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  )
}

export default Adding