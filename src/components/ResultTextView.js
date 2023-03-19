import { View, Text } from 'react-native';


const ResultTextView = ({ top=0, left=0, right=0, bottom=0, text, fontSize=15 }) => {
    return (
        <View
            style={{
                
                position: 'absolute',                
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                justifyContent: 'flex-start',
                alignItems: 'flex-start'                
            }}>
            <Text style={{fontSize: fontSize, maxWidth: 200,fontFamily: 'my-custom-font',}}>{text}</Text>
        </View>
    );
};

export default ResultTextView