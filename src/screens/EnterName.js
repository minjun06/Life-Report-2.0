import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { useState } from 'react';
import { Video } from 'expo-av';
import { StyleSheet, Platform, View, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';

const Container = styled.View`
  flex: 1;
  //background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-family: my-custom-font;
  font-size: 17px;
  margin: 10px;
  max-width: 410px;
  bottom: 10px;
  color: white;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  videoContainer: {
    width: '100%',
    height: '100%'
    //top:50
  },
  video: {
    width: '100%',
    height: '100%',

  },
});

const EnterName = ({ navigation }) => {
  //global.myStopSound();

  const [videoWidth, setVideoWidth] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setVideoWidth(width);
  }

  const [text, setText] = useState('');
  const onChangeText = (payLoad) => {
    setText(payLoad);
  }
  const addName = () => {
    if (text === '') {
      return;
    }
    //저장
  };

  const items = [
    { id: 1, name: '입력' },
    //   { id: 2, name: 'Expo' },
    //   { id: 3, name: 'Nav' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer} onLayout={onLayout}>
        <Video
          source={{
            uri: 'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111478/LifeReport/tl1hjsanqglp0gct48gn.mp4',
          }}
          shouldPlay
          isLooping
          resizeMode={Platform.OS === 'web' ? 'contain' : 'cover'}
          isMuted
          style={styles.video}
          videoStyle={styles.video}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 1
        }}
      >
        <StyledText>성적표 산출을 위한 이름을 입력해주세요</StyledText>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <TextInput
            // style={{ borderColor: 'white', flex: 3, borderWidth: 2, padding: 10, fontSize: 20, color: 'white', fontFamily: 'my-second-font', borderRightWidth: 0 }}
            style={{ height: 46, borderColor: 'white', borderWidth: 2, padding: 10, fontSize: 20, color: 'white', fontFamily: 'my-second-font', borderRightWidth: 0 }}
            onSubmitEditing={addName}
            onChangeText={onChangeText}
            returnKeyType="done"
            placeholder="                           "
            cursorColor={'white'}
            maxLength={5}
          />

          <TouchableOpacity
            //style={{ flex: 1 }}
            key={1}            
            onPress={() => {
              global.userName = text
              navigation.navigate('Intro', { name: text })
            }}>
            {/* <Text style={{ color: 'white', fontSize: 20, backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 10, borderColor: 'white', borderWidth: 2, justifyContent: 'center', alignContent: 'center', fontFamily: 'my-second-font', borderLeftWidth: 0 }}>입력</Text> */}
            {/* <Text style={{height: 80, width:80, color: 'white', fontSize: 20, backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 10, borderColor: 'white', borderWidth:2, justifyContent:'flex-start', alignItems:'flex-start', fontFamily:'my-second-font', borderLeftWidth:0 }}>입력</Text> */}
            <Text style={{height: 46, width:58, color: 'white', fontSize: 20, backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 10, borderColor: 'white', borderWidth:2, justifyContent:'flex-start', alignItems:'flex-start', fontFamily:'my-second-font', borderLeftWidth:0 }}>입력</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default EnterName;