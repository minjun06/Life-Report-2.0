import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import { useState, useEffect } from 'react';

var pageList = [
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679529171/LifeReport/jboxpsfma13x4wjfran7.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679207721/LifeReport/rhqun5rvtytjscbnzfj5.mp4',
  'https://res.cloudinary.com/dq26e5ls4/video/upload/v1679529178/LifeReport/gvtfhybtegbzfaw8leqt.mp4',
];

const Conclusion = ({ navigation, route }) => {
  useEffect(() => {
    setPageNum(0);
  }, []);
  const [pageNum, setPageNum] = useState(0);

  const [data, setData] = useState(pageList[pageNum]);
  const onChangeText = () => {
    if (pageNum == pageList.length - 1) {
      console.log(route.params.resultList)

      var resultList = route.params.resultList
      navigation.navigate('ResultPage', {resultList});
      return;
    }
    
    setData(pageList[pageNum + 1]);
    setPageNum(pageNum + 1);
  };
  return (    
      <TouchableOpacity style={styles.container} onPress={() => onChangeText()}>
        <Video
          source={{            
            uri: data,
          }}
          shouldPlay
          //isLooping
          resizeMode="contain"
          //isMuted
          style={styles.video}
          videoStyle={styles.video}
        />               
        <Text style={{fontSize: 15, fontFamily: 'my-second-font', position: 'absolute', top: 650, color: 'white'}}>터치하세요</Text> 
        {/* <Image
          style={{ width: '30%', height: '30%', bottom: 15}}
          resizeMode="contain"
          // containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          source={require('../images/gaddy.png')}>
        </Image> */}
      </TouchableOpacity>    
  );
};

export default Conclusion;

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
