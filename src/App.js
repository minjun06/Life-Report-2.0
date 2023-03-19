import { useState, useEffect, useCallback } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Navigation from './navigations';
import { Audio, AVPlaybackStatus, Video } from 'expo-av';
import { useFonts } from 'expo-font';
import { Helmet, HelmetProvider } from 'react-helmet-async'

const sound = new Audio.Sound();

global.userName = "";

global.myPlaySound = async () => {
  try {
    // 저장한 path로 음원 파일 불러오기
    await sound.loadAsync(require('./images/bgm.wav'));
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

global.myStopSound = async () => {
  try {
    await sound.stopAsync();
  } catch (error) {
    console.log(error);
  }
}

export default function App() {
    global.myPlaySound();

  const [fontsLoaded] = useFonts({
    'my-custom-font': require('../assets/fonts/ChosunCentennial.ttf'),
    'my-second-font' : require('../assets/fonts/SUIT-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <script defer src="https://cdn.swygbro.com/public/widget/swyg-widget.js"></script>
        <title>인생 성적표</title>
        <meta
          name="설명 / description"
          content="'삐빅- 인생 성적표가 산출 되었습니다.' 태어날 때부터 죽을 때까지 내 선택에 따라 달라지는 인생 성적표를 받아보자!"
        />
        <meta
          name="카테고리 / keywords"
          content="개발, 개발자, 디자인, 디자이너, 메타콘텐츠, 심리테스트, MBTI, 시뮬레이션, 게임, 비주얼노벨, 킬링타임, 병맛, 인생, 성적, 유형테스트, 가상체험, 밈, 짤"
        />
      </Helmet>
      <StatusBar></StatusBar>
      <Navigation onLayout={onLayoutRootView}></Navigation>
    </HelmetProvider>
  )
};

// export default function App() {
//   return (
//     <Container></Container>
//     <View style={styles.container}>
//       <Text>Hi!</Text>
//       <StatusBar style="auto" />
//       <Button title="시작하기" onPress={() => alert('click')} />
//       <Button/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });