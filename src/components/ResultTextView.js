import { View, Text } from 'react-native';


const ResultTextView = ({ top, left, right, bottom, text }) => {
    return (
        <View
            style={{
                position: 'absolute',
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                justifyContent: 'flex-start',
                alignItems: 'center',
                //fontSize: 80,

            }}>
            <Text>{text}</Text>
        </View>
    );
};

export default ResultTextView