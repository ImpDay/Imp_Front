import React from "react";
import {View, Text, Touchable, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const QuestionItem = ({data})=>{
    return (
        <View style={{width:300, height:30, marginLeft:'10%', marginBottom:'3%', backgroundColor:'#999999', borderRadius:5, alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingLeft:'20%', paddingRight:'10%'}}>
            <Text style={{color:'black', fontWeight:'bold', fontSize:15}}>
                {data}
            </Text>
            <TouchableOpacity>
                <FontAwesome name="trash-o" style={{fontSize:22,color:'black'}}/>
            </TouchableOpacity>
        </View>
        
    )
}

export default QuestionItem