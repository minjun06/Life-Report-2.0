import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import Button from './components/Button';
import styled from 'styled-components/native';
import Navigation from './navigations';

// const Container = styled.View`
//     flex: 1;
//     background-color: #fff;
//     align-items: center;
//     justify-content: center;
// `;

export default function App() {
  return <Navigation></Navigation>;
}

// export default function App() {
//   return (
//     <Container></Container>
//     <View style={styles.container}>
//       <Text>Hi!</Text>
//       <StatusBar style="auto" />
//       <Button title="시작하기" onPress={() => alert('click')} />
//       <Button/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
