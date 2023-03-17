// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
//import Button from './components/Button';
import styled from 'styled-components/native';
import Navigation from './navigations';
import { Audio, AVPlaybackStatus, Video } from 'expo-av';
import { SafeAreaProvider, useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';


const styles = StyleSheet.create({

  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center'
  },

});
const sound = new Audio.Sound();

const playSound = async () => {
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

export default function App() {
  //playSound();
  return (
    <View style = {{flex: 1}}>
      <StatusBar></StatusBar>
      <Navigation>
      </Navigation>
    </View>
      
  );
}

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
