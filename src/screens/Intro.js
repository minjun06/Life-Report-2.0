import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { useState, useEffect } from 'react';

var pageList = [
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111478/LifeReport/tl1hjsanqglp0gct48gn.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679528193/LifeReport/odyqhwgqeiruuyyta1f6.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679528216/LifeReport/y7j5j4irspbblmm3ifgd.mp4',
  //삭제
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679528226/LifeReport/clxsruqyct2yqhcvxk3w.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679528232/LifeReport/lvfpjrmnl27si95i8nfv.mp4',
  //'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111583/LifeReport/ulaozojdptf4tnvplwb3.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679528308/LifeReport/q0jplcqeh3wqwm59m6rc.mp4',
];

const Intro = ({ navigation, route }) => {
  useEffect(() => {
    setPageNum(0);
  }, []);

  const [pageNum, setPageNum] = useState(0);

  const [data, setData] = useState(pageList[pageNum]);
  const onChangeText = () => {
    if (pageNum == pageList.length - 1) {
      navigation.navigate('Questions');
      return;
    }
    setData(pageList[pageNum + 1]);
    setPageNum(pageNum + 1);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      //activeOpacity={1}
      onPress={() => onChangeText()}
    >
      <Video
        source={{
          uri: data,
        }}
        shouldPlay
        //isLooping
        resizeMode="contain"
        //isMuted
        volume={1.0}
        style={styles.video}
        videoStyle={styles.video}
        
      ></Video>
      <Text style={{fontSize: 15, fontFamily: 'my-second-font', position: 'absolute', top: 650, color: 'white'}}>터치하세요</Text>
    </TouchableOpacity>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
