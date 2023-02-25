import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from 'styled-components/native'

const Container = styled.View`
    background-color: #778bdd;
    padding: 10px;
    margin: 10px;
`;

const Title = styled.Text`
    font-size: 24px;
    color: #ffffff;
`;

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
        //hitSlop{{bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{bottom:10, top:10, left:10, right:10}}
        >
            <Container>
                <Title>{title}</Title>
            </Container>
        </TouchableOpacity>
    );
};

export default Button;