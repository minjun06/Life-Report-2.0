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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import MediaPlayer from 'react-native-media-player';
import Sound from 'react-native-sound';
//import vidEx from '../images/vidEx.mp4';

// MediaPlayer.getSupportFileTypeList();
// // Show the virtual screen
// await MediaPlayer.showVirtualScreen();
// MediaPlayer.setVirtualScreenLayout(0, 0, 400, 300, false);

//var Sound = require('react-native-sound');

// Sound.setCategory('Playback');

// var ding = new Sound('ding.mp3', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   // when loaded successfully
//   console.log(
//     'duration in seconds: ' +
//       whoosh.getDuration() +
//       'number of channels: ' +
//       whoosh.getNumberOfChannels()
//   );
// });

const VideoPage = () => {
  //   useEffect(() => {
  //     ding.setVolume(1);
  //     return () => {
  //       ding.release();
  //     };
  //   }, []);
  //   const playPause = () => {
  //     ding.play((success) => {
  //       if (success) {
  //         console.log('successfully finished playing');
  //       } else {
  //         console.log('playback failed due to audio decoding errors');
  //       }
  //     });
  //   };
  return (
    // <View style={styles.container}>
    //   <TouchableOpacity style={styles.playBtn} onPress={playPause}>
    //     <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
    //   </TouchableOpacity>
    // </View>
    <Text> 그대의 이름은... </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
});

export default VideoPage;

// const VideoPage = () => {
//     useEffect(() => {
//         ding.setVolume(1);
//   return {
//     /* <View style={style.renderContainer} onLayout={(event) => {
// 	this.setState({
// 		layout: event.nativeEvent.layout;
// 	});
// }}></View> */
//   };
//   // <Video
//   //   source={{
//   //     uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
//   //   }}
//   //   style={{ width: 300, height: 300 }}
//   //     controls={true}
//   //     ref={(ref) => {
//   //       this.player = ref;
//   //     }}
//   // />
// };

// export default VideoPage;
