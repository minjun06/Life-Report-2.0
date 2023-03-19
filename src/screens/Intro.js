import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';

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
// var pageNum = 0;

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

    //setData(pageList[++pageNum]);
    setData(pageList[pageNum + 1]);
  };
  return (
    <Container>
      <View style={styles.videoContainer}>
        <Video
          source={{
            //uri: 'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679111478/LifeReport/tl1hjsanqglp0gct48gn.mp4',
            uri: data,
          }}
          shouldPlay
          //isLooping
          resizeMode="contain"
          isMuted
          style={styles.video}
          videoStyle={styles.video}
        />
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
        ></View>
        <View
          style={{
            position: 'absolute',
            top: '66%',
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'flex-start',
            alignItems: 'center',
            //   height: 200,
            //   width: 100,
          }}
        >
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Questions')}
          >
            <Text> </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => onChangeText()}
          >
            <Text>                                </Text>

          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Intro;

const Container = styled.View`
  flex: 1;
  //background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 0.9,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
