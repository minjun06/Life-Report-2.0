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
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
});

const Home = ({ navigation }) => {
  return (
    <Container>
      <View style={{ width: '100%', height: '100%' }}>
        <Video
          ref={this.videoRef}
          //source = {{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
          source={{
            uri: 'https://res.cloudinary.com/dq26e5ls4/video/upload/v1678840772/samples/yt1dzx8rmppcuz2kwofl.mp4',
          }}
          shouldPlay
          isLooping
          //volume = {0.0} 휴대폰용
          isMuted
          style={{ width: '100%', height: '100%' }}
          //useNativeControls
        />
        {/* <Button
        title="인생 시작하기"
        onPress={() => navigation.navigate('EnterName')}
      /> */}
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
        }}
      >
        <View style={styles.container}>
        <Button
          //style={styles.container}
          title="                      "
          onPress={() => navigation.navigate('EnterName')}
        />
        </View>
        
      </View>
    </Container>
  );
};

export default Home;
