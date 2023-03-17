import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';
import { Audio, AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  videoContainer: {
    width: '100%',
    height: '100%'
  },

  video: {
    width: '100%',
    height: '100%'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: 'https://res.cloudinary.com/dq26e5ls4/video/upload/v1678840772/samples/yt1dzx8rmppcuz2kwofl.mp4',
          }}
          shouldPlay
          isLooping
          resizeMode='cover'
          isMuted
          style={styles.video}
          videoStyle={styles.video}
        />
      </View>

      {<View
        style={{
          position: 'absolute',
          top: '70%',
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EnterName')}>
          <Text >버튼텍스트</Text>
        </TouchableOpacity>
      </View>}
    </View>
  );
};

export default Home;