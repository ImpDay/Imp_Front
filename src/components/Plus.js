import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Record from "./Record";

const Plus = ({navigation, data}) =>{
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
            </View>
            <View style={{width:'100%', height:'100%', backgroundColor:'black', alignItems:'center'}}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>{navigation.push('Today')}}>
                        <View style={{marginTop:'3%',marginBottom:'1.5%',backgroundColor:'#777777', width:270, height:150, alignItems:'center', justifyContent:'center', borderRadius:16}}>
                            <Text style={{color:'#dddddd', fontWeight:'bold',fontSize:30}}>
                                Today!
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Record/>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

export default Plus