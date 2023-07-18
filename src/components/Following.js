import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Interest from "./Interest";

const Following=({navigation})=>{
 return(
    <SafeAreaView
            style={{position:'relative',width:'100%', backgroundColor: 'black', height:'100%'}}>
            <View style={{position:'relative',flexDirection: 'row', alignItems: 'center',paddingLeft:'2%',paddingRight:'2%',
                backgroundColor: 'black',alignItems:'center', borderBottomWidth:1, borderBottomColor:'#dddddd', paddingBottom:'3%'}}>
                <TouchableOpacity
                    onPress={()=>{
                    navigation.goBack();
                }}>
                    <AntDesign name="close" style={{ color:'#dddddd', fontSize: 23, paddingTop:'1%', }} /> 
                </TouchableOpacity>
                <Text style={{color:'white', fontSize:17, marginLeft:'33%'}}>
                    TankEom
                </Text>
            </View>
            <View style={{width:'100%', height:'100%', backgroundColor:'black'}}>
                <View style={{width:'100%', height:'7%', backgroundColor:'black', justifyContent:'center'}}>
                    <Text style={{color:'white', fontSize:14, paddingLeft:'5%', fontWeight:'bold'}}>
                        모든 팔로잉
                    </Text>
                </View>
                <View style={{width:'100%', height:'87%'}}>
                    <ScrollView>
                        <Interest/>
                    </ScrollView>
                </View>
                
            </View>
            
    </SafeAreaView>
 )
}

export default Following