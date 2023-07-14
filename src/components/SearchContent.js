import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const searchData = [{id:0, images:[ require('../../images/place/image3.jpeg'), require('../../images/place/images4.jpeg'),
require('../../images/place/images5.jpeg'),require('../../images/place/images6.jpeg'),require('../../images/place/images7.jpeg'),require('../../images/place/image3.jpeg'), require('../../images/place/images4.jpeg'),
require('../../images/place/images5.jpeg'),require('../../images/place/images6.jpeg'),require('../../images/place/images7.jpeg')
]}]

const SearchContent = () => {

  return (
    <View style={{backgroundColor: 'white'}}>
      {searchData.map((data, index)=>{
          return(
            <View key={index}>
              {data.id===0 ?
                <View style={{flexDirection: 'row',flexWrap: 'wrap',
                  justifyContent: 'space-between', width:'100%',}}>
                  {data.images.map((imageData, imageIndex)=>{
                      return (
                        <TouchableOpacity key = {imageIndex}
                          style={{paddingStart:2, paddingEnd:2,paddingBottom: 2, width: '50%',}}>
                          <Image
                            source={imageData}
                            style={{width: '100%', height: 150}}
                          />
                        </TouchableOpacity>
                      );
                  })}
                  </View>
                  : null}
            </View>
          )
      })}
    </View>
  )
}

export default SearchContent