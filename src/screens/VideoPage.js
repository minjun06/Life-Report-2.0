import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Video from 'react-native-video';
// import MediaPlayer from 'react-native-media-player';
// import Sound from 'react-native-sound';
//import BgAudio from 'react-native-background-audio';
//import SoundPlayer from 'react-native-sound-player'
import { Audio, AVPlaybackStatus, Video } from 'expo-av';

// export default class VideoPage extends React.Component {
//   render() {
//     return <BgAudio options={audio_options}></BgAudio>;
//   }
// }

// const audio_options = {
//   source: {
//     remote: {
//       uri: 'http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3',
//     },
//   },
// };

// const VideoPage = () => {

//   return (
//     <Text> 그대의 이름은... </Text>

//   );
// };

// export default VideoPage;

const sound = new Audio.Sound();
const videoRef = React.createRef();

const playSound = async () => {
  try {
    // 저장한 path로 음원 파일 불러오기
    await sound.loadAsync(require('../images/eventHorizon.mp3'));
    // await sound.loadAsync({
    //   uri: 'https://file-examples.com/storage/fe137d1f80640cf1e98d9f6/2017/11/file_example_MP3_700KB.mp3',
    // });
    // 음원 재생하기
    await sound.playAsync();
    await sound.setIsLoopingAsync(true);
  } catch (error) {
    // An error occurred!
    console.log(error);
  }
};

// const stopSound = async () => {
//     try {
//         await sound.stopAsync();
//       } catch (error) {
//         console.log(error);
//       }
// };

// const unloadSound = async () => {
//   try {
//     await sound.unloadAsync();
//   } catch (error) {
//     console.log(error);
//   }
// };

// sound.setOnPlaybackStatusUpdate((status) => {
//     if (status.didJustFinish) {
//         stopSound();
//         unloadSound();
//     }
// })


const VideoPage = ({}) => {
  return (
    <View>
      <Button title="음악" onPress={playSound} />
      <Video
        ref={this.videoRef}
        //source = {{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        source = {{uri: "https://res.cloudinary.com/dq26e5ls4/video/upload/v1678840772/samples/yt1dzx8rmppcuz2kwofl.mp4"}}
        shouldPlay
        isLooping
        style = {{width: "100%", height: "100%"}}
        //useNativeControls
        />
    </View>
  );
};

export default VideoPage;
