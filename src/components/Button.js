import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #778bdd;
  padding: 10px;
  margin: 10px;
`;

const Title = styled.Text`
  font-size: 21px;
  color: #ffffff;
  font-family: 'my-second-font';
  
`;

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 10, margin: 15, borderColor: 'white', borderWidth:2, width:285, alignItems: 'center', justifyContent: 'center',}}
      onPress={onPress}
      //hitSlop{{bottom:100, top:100, left:100, right:100}}
      pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
    >
      <Title>{title}</Title>
    </TouchableOpacity>
  );
};

export default Button;
