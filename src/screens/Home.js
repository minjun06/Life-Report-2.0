import React from 'react';
import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    //background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin: 20px;
`;

    

const Home = ({navigation}) => {
    const [text, setText] = useState("");
  const onChangeText = (payLoad) => setText(payLoad);
  const addName = () => {
    if (text === "") {
      return;
    }
    //저장
    setText("");
  }
    return (
        <Container>
            {/* <StyledText>Home</StyledText> */}
            <StyledText>인생 성적표</StyledText>
            <Button title = "인생 시작하기" onPress={() => navigation.navigate('List')} />
            <StyledText>몰입을 위해</StyledText>
            <StyledText>이어폰을 꽂아주세요!</StyledText>
            <TextInput 
onSubmitEditing={addName}
onChangeText={onChangeText}
returnKeyType="done"
placeholder='이름을 입력하세요'
/>
        </Container>
    );
};

export default Home;
