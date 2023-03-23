import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
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
    padding: 10,
    height: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.0)'
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: 'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111253/LifeReport/bsyitxecu2hveuucakt7.mp4',
          }}
          shouldPlay
          isLooping
          resizeMode='contain'
          isMuted
          style={styles.video}
          videoStyle={styles.video}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          top: '66%',
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          {/* <Image
          style={{ width: '20%', height: '20%', bottom:460, left:140}}
          resizeMode="contain"
          // containerStyle={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
          source={require('../images/soundButton.png')}>
        </Image> */}
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('EnterName')}>
          onPress={() => navigation.navigate('EnterName')}>
          <Text >                                                            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;