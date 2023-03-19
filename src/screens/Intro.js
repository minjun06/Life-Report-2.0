import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { useState, useEffect } from 'react';

var pageList = [
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111478/LifeReport/tl1hjsanqglp0gct48gn.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111488/LifeReport/xolnfs02fkd50pwv8jvw.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111499/LifeReport/rjlczfhiwer4wqciq1e5.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111506/LifeReport/s2dwtz9evavkfliv3kix.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111546/LifeReport/gzuywypbuni58se7r8gv.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111573/LifeReport/xmbdgtwlyzz3ehpsg45k.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111583/LifeReport/ulaozojdptf4tnvplwb3.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111597/LifeReport/gnictrw7mtodgnodbzcm.mp4',
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
      activeOpacity={1}
      onPress={() => onChangeText()}
    >
      <Video
        source={{
          uri: data,
        }}
        shouldPlay
        //isLooping
        resizeMode="contain"
        isMuted
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
