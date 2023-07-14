import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import Axios from 'axios'
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';


const EditProfile = ({route, navigation}) => {
  const { name: initialName, profileImage: initialProfileImage } = route.params
  const [name, setName] = useState(initialName)
  const [profileImage, setProfileImage] = useState(initialProfileImage)

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('username', name);
      formData.append('image', {
        uri: profileImage,
        name: 'profileImage.jpg',
        type: 'image/jpg',
      });

      // PUT 요청 보내기
      await Axios.put('http://172.10.5.152:80/user', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // 요청이 성공하면 이전 화면으로 돌아가기
      navigation.push("MyTab")
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const showPicker = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    }, (response) => {
      if (response.didCancel) {
        // 선택 취소
      } else if (response.errorCode) {
        // 에러 발생
        console.log('Error ocurred:', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        const fileName = uri.split('/').pop();
        const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
        RNFS.copyFile(uri, path)
          .then(() => {
            // 이미지 저장이 완료되면 상태 업데이트
            setProfileImage(`file://${path}`);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  return (
    <SafeAreaView
      style={{width:'100%', backgroundColor: 'white'}}
    >
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack();
          }}>
          <Text>취소</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>프로필 수정</Text>
        <TouchableOpacity onPress={ handleSave }>
          <Text style={{color: '#3493D9'}}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 40, alignItems: 'center'}}>
          <Image source={{uri: profileImage}} style={{width: 120, height: 120, borderRadius: 100}}/>
          <TouchableOpacity onPress={ showPicker }>
            <Text style={{color: '#3493D9', marginTop:10}}>
              프로필 사진 바꾸기
            </Text>
          </TouchableOpacity>
          
      </View>
      <View style={{padding:10}}>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity:0.5, paddingLeft:'1.3%'}}>이름</Text>
          <TextInput
            placeholder='이름'
            defaultValue={name}
            onChangeText={newName => setName(newName)}
            style={{fontSize: 16, borderBottomWidth:1, borderColor: '#CDCDCD'}}
          />
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default EditProfile