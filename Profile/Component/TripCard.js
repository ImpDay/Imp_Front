import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
 
class CardCompnent extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>CardCompnent</Text>
            </View>
        );
    }
}
export default CardCompnent;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
