import React from 'react';
import { View, Image } from 'react-native';

const MyResultImage = ({ ratio, source }) => {
    return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={{ width: '100%', maxWidth: 500, height: undefined, aspectRatio: ratio}}
                    resizeMode="contain"
                    source={source}>
                </Image>
            </View>
    );
};

export default MyResultImage;