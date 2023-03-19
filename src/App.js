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
    await sound.loadAsync(require('./images/eventHorizon.mp3'));
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
  //  global.myPlaySound();

  const [fontsLoaded] = useFonts({
    'my-custom-font': require('../assets/fonts/ChosunCentennial.ttf'),
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
          name="description"
          content="해당 페이지 설명 (ex. SWYG에서 다양한 메타 콘텐츠와 개발자를 만나보세요.)"
        />
        <meta
          name="keywords"
          content="swyg,기획자,개발자,메타콘텐츠,..."
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