import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

const AddingQuestion = ({navigation}) => {
    const [question, setQuestion] = useState('');
    return(
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
                <Text style={{paddingLeft:'30%',color:'#dddddd', fontSize:17, fontWeight:'bold'}}>
                    Question 추가
                </Text>
            </View>
            <View style={{width:'100%', height:'10%', backgroundColor:'black', marginTop:'50%', alignItems:'center', flexDirection:'column', justifyContent:'center'}}>
                <View style={{width:'80%', borderBottomColor:'#dddddd', borderWidth:2,}}>
                    <TextInput placeholder='please enter your question...' placeholderTextColor="#dddddd"
                        style={{
                            marginLeft:'17%',
                            width: "100%",
                            backgroundColor: 'black',
                            fontSize: 15,
                            fontWeight:'bold'
                        }}
                        onChangeText={text => setQuestion(text)}
                        value={question} />
                </View>
                
            </View>
            <View style={{width:'25%', height:'10%', backgroundColor:'black', marginTop:'10%',justifyContent:'center', marginLeft:'38%' }}>
                <TouchableOpacity>
                    <View style={{width:'100%', backgroundColor:'black', height:'67%', borderColor:'#dddddd', borderWidth:1, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                        <Text style={{color:'white', }}>
                            Save
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddingQuestion