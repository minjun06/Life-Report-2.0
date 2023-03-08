import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
// import Video from 'react-native-video';
//import vidEx from '../images/vidEx.mp4';

const Container = styled.View`
  flex: 1;
  //background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

// var styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });

// const items = [
//     {id: 1, name: 'RN'},
//     {id: 2, name: 'Expo'},
//     {id: 3, name: 'Nav'},
// ];

const Chat = ({ navigation, route }) => {
  return (
    <Container>
      {/* <View>
        <Video
          source={{
            uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
          }}
          style={{ width: 300, height: 300 }}
          controls={true}
          ref={(ref) => {
            this.player = ref;
          }}
        />
      </View> */}
      {/* <View>
        <Video
          source={require('./../images/vidEx.mp4')} // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref;
          }} // Store reference
          //   onBuffer={this.onBuffer} // Callback when remote video is buffering
          //   onError={this.videoError} // Callback when video cannot be loaded
          //style={styles.backgroundVideo}
        />
      </View> */}

      {/* <View style={{ width: '100%', height: '100%' }}>
        <Video
          source={vidEx} // the video file
          paused={false} // make it start
          //style={styles.backgroundVideo} // any style you want
          repeat={true} // make it a loop
        />
      </View> */}

      <StyledText>Chat</StyledText>
      <StyledText>{route.params.id}</StyledText>
      <Text> 그대의 이름은... </Text>
      <StyledText>{route.params.name}</StyledText>
      <Button
        title="Video Page"
        onPress={() => navigation.reset({ routes: [{ name: 'VideoPage' }] })}
      />
    </Container>
  );
};

export default Chat;
