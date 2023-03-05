import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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

const items = [
  { id: 1, name: '가보자고~' },
//   { id: 2, name: 'Expo' },
//   { id: 3, name: 'Nav' },
];

const EnterName = ({ navigation }) => {
  const [text, setText] = useState('');
  const onChangeText = (payLoad) => setText(payLoad);
  const addName = () => {
    if (text === '') {
      return;
    }
    //저장
    setText('');
  };

  return (
    <Container>
      <StyledText>성적표 산출을 위한 이름을 입력해주세요</StyledText>
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
          onPress={() => navigation.navigate('Chat', { id, name })}
        />
      ))}
    </Container>
  );
};

export default EnterName;
