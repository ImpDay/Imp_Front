import React from "react";
import { View, Text } from "react-native";

const AddingQuestion = () => {
    return(
        <SafeAreaView
            style={{position:'relative',width:'100%', backgroundColor: 'black', height:'100%'}}>
            <View style={{position:'relative',flexDirection: 'row', alignItems: 'center',paddingLeft:'2%',paddingRight:'2%',
                backgroundColor: 'black',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity
                    onPress={()=>{
                    navigation.goBack();
                }}>
                    <AntDesign name="arrowleft" style={{ color:'#dddddd', fontSize: 25, paddingTop:'1%', }} /> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddingQuestion