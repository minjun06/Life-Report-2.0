import React from 'react';
import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';
import styled from 'styled-components/native';
import { Audio, AVPlaybackStatus, Video } from 'expo-av';
//import { Video } from 'react-native-video';



const Container = styled.View`
  flex: 1;
  //background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 20px;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      {/* <StyledText>Home</StyledText> */}
       <Button
        title="인생 시작하기"
        onPress={() => navigation.navigate('EnterName')}
      />


    {/* <Button title="음악" onPress={playSound} /> */}
    {/* <Video
      //ref={this.videoRef}
      //source = {{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
      source = {{uri: "https://res.cloudinary.com/dq26e5ls4/video/upload/v1678840772/samples/yt1dzx8rmppcuz2kwofl.mp4"}}
      shouldPlay
      isLooping
      //volume = {0.0} 휴대폰용
      isMuted
      style = {{width: "100%", height: "100%"}}
      //useNativeControls
      /> */}
      <Button
        title="인생 시작하기"
        onPress={() => navigation.navigate('EnterName')}

      />
    </Container>
    
  );
};

export default Home;
