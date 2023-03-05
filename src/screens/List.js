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

const items = [
  { id: 1, name: 'RN' },
  { id: 2, name: 'Expo' },
  { id: 3, name: 'Nav' },
];

const List = ({ navigation, route }) => {
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
      <StyledText>LIST</StyledText>
      <Text>This is {route.params.name}'s profile</Text>;
      {items.map(({ id, name }) => (
        <Button
          key={id}
          title={name}
          onPress={() => navigation.navigate('Chat', { id, name })}
        />
      ))}
      <TextInput
        onSubmitEditing={addName}
        onChangeText={onChangeText}
        returnKeyType="done"
        placeholder="이름을 입력하세요"
      />
    </Container>
  );
};

export default List;
