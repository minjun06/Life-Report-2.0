import React from 'react';
import { View, Image } from 'react-native';
//import { widthPercentageToDP } from 'react-native-responsive-screen';

const MyImage = ({ ratio, source }) => {
    return (
            <Image
                style={{ width: '100%', height: undefined, maxWidth: 410, aspectRatio: ratio }}
                resizeMode="contain"
                source={source}
                containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            >
            </Image>
    );
};

export default MyImage;