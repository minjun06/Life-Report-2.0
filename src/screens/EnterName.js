import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

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

const EnterName = ({ navigation }) => {
  const [text, setText] = useState('');
  const onChangeText = (payLoad) => setText(payLoad);
  const addName = () => {
    if (text === '') {
      return;
    }
    //저장
  };

  const items = [
    { id: 1, name: '가보자고~' },
    //   { id: 2, name: 'Expo' },
    //   { id: 3, name: 'Nav' },
  ];

  return (
    <Container>
      <View style={{ width: '100%', height: '100%' }}>
        <Image
          source={require('./../images/gifExample.gif')}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
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
      >
        <StyledText>성적표 산출을 위한 이름을 입력해주세요</StyledText>
        {/* <Text>text저장된것: {text}!</Text> */}
        <TextInput
          onSubmitEditing={addName}
          onChangeText={onChangeText}
          returnKeyType="done"
          placeholder="이름을 입력하세요"
        />

        {items.map(({ id, name }) => (
          <Button
            key={id}
            title={name}
            onPress={() => navigation.navigate('Chat', { id, name: text })}
          />
        ))}
      </View>
    </Container>
  );
};

export default EnterName;
