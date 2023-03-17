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

// const items = [
//   { id: 1, name: 'RN' },
//   { id: 2, name: 'Expo' },
//   { id: 3, name: 'Nav' },
// ];

const page10 = {
  //title: "제목",
  //question: "무언가 반짝인다",
  buttonTop: {message: '움직인다', luck: 0, athleticity: 20, iq: 10, emotion: 0, money: 0, mbtiE: 5, mbtiI: 0, mbtiS: 0, mbtiN: 0, mbtiT: 0, mbtiF: 0, mbtiJ: 0, mbtiP: 0 },
  buttonBottom: {message: '가만히 지켜본다', luck: 0, athleticity: -10, iq: 0, emotion: 0, money: 0, mbtiE: 0, mbtiI: 10, mbtiS: 0, mbtiN: 0, mbtiT: 0, mbtiF: 0, mbtiJ: 0, mbtiP: 0 },
  imgUrl: require('../images/10.png'),
};

const page11 = {
  buttonTop: {message: '뭔가.... 주기 싫다.', luck: 0, athleticity: 0, iq: 0, emotion: -10, money: 3000, mbtiE: 0, mbtiI: 10, mbtiS: 0, mbtiN: 0, mbtiT: 5, mbtiF: 0, mbtiJ: 0, mbtiP: 0 },
  buttonBottom: {message: '나눠 먹어야 착한 어린이!', luck: 5, athleticity: 0, iq: 0, emotion: 30, money: -1000, mbtiE: 5, mbtiI: 0, mbtiS: 0, mbtiN: 0, mbtiT: 0, mbtiF: 20, mbtiJ: 0, mbtiP: 0 },
  imgUrl: require('../images/11.png'),
};

const page12 = {
  buttonTop: {message: '빌려준다', luck: 10, athleticity: 0, iq: 0, emotion: 20, money: -10000, mbtiE: 20, mbtiI: 0, mbtiS: 0, mbtiN: 0, mbtiT: 0, mbtiF: 20, mbtiJ: 0, mbtiP: 0 },
  buttonBottom: {message: '안 빌려준다', luck: -20, athleticity: 0, iq: 0, emotion: -5, money: 15000, mbtiE: 0, mbtiI: 10, mbtiS: 0, mbtiN: 0, mbtiT: 5, mbtiF: 0, mbtiJ: 0, mbtiP: 0 },
  imgUrl: require('../images/12.png'),
};

const page13 = {
  buttonTop: {message: '반짝반짝! 너무 궁금해! ㅎㅎ', luck: -10, athleticity: 10, iq: 0, emotion: 5, money: 0, mbtiE: 5, mbtiI: 0, mbtiS: 0, mbtiN: 5, mbtiT: 0, mbtiF: 5, mbtiJ: 0, mbtiP: 10 },
  buttonBottom: {message: '아주 조~금 수상한거 같기도?', luck: 0, athleticity: 0, iq: 0, emotion: 0, money: 0, mbtiE: 0, mbtiI: 10, mbtiS: 5, mbtiN: 0, mbtiT: 5, mbtiF: 0, mbtiJ: 5, mbtiP: 0 },
  imgUrl: require('../images/13.png'),
};

const page14 = {
  buttonTop: "'나 집에 가려고!' (피하자)",
  buttonBottom: "'그냥 있어!' (나랑 놀아줘)",
  imgUrl: require('../images/14.png'),
};

const page15 = {
  buttonTop: 'ㅇㅇ 피방ㄱ',
  buttonBottom: '아, 안된다니까 ㅡㅡ',
  imgUrl: require('../images/15.png'),
};

const page16 = {
  buttonTop: '두근두근 연애부터 해야지♡',
  buttonBottom: '난 인싸가 될래! 학생회 해야지!',
  imgUrl: require('../images/16.png'),
};

const page17 = {
  buttonTop: '내가 가장 잘하는 일',
  buttonBottom: '내가 가장 좋아하는 일',
  imgUrl: require('../images/17.png'),
};

const page18 = {
  buttonTop: '머리 벗겨지셨어요.',
  buttonBottom: '(모른척한다..)',
  imgUrl: require('../images/18.png'),
};

const page19 = {
  buttonTop: '언젠가는 하겠죠~ (귀찮다..)',
  buttonBottom: '구체적인 계획을 얘기한다.',
};

const page20 = {
  buttonTop: '어어 날씨 좋다. (모른척)',
  buttonBottom: '진지하게 계획을 세운다.',
};

const page21 = {
  buttonTop: '북적북적 게스트하우스!',
  buttonBottom: '편안하고 안락한 호텔!',
};

const page22 = {
  buttonTop: '힘들어도 자기계발이지',
  buttonBottom: '인간은 좀 쉬어줘야 해',
};

const page23 = {
  buttonTop: '그래, 튼튼하게만 자라렴',
  buttonBottom: '안되겠다, 학원을 보내야겠어',
};

const page24 = {
  buttonTop: '인류최초! 이왕이면 새로운 곳',
  buttonBottom: '달과 화성을 보고 오는 코스',
};

const page25 = {
  buttonTop: '원래 외계인 친구 갖고 싶었어',
  buttonBottom: '뭐야 무서워 도망치자',
};

const page26 = {
  buttonTop: '반년치 월급 받고 일찍 퇴직한다.',
  buttonBottom: '에이 몰라 일단 버텨!',
};

const page27 = {
  buttonTop: '무난하게 검은색 정장',
  buttonBottom: '화끈하게 빨간색 정장',
  //buttonExtra: "내가 아끼는 갈색 정장",
};

const page29 = {
  buttonTop: '가족/친구에게 남긴다.',
  buttonBottom: '사회에 환원한다.',
};

const dataList = [
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
  page22,
  page23,
  page24,
  page25,
  page26,
  page27,
  page29,
];

const resultList = {
    luck: 0,
    athleticity: 0,
    iq: 0,
    emotion: 0,
    money: 0,
    mbtiE: 0,
    mbtiI: 0,
    mbtiS: 0,
    mbtiN: 0,
    mbtiT: 0,
    mbtiF: 0,
    mbtiJ: 0,
    mbtiP: 0,
};


var pageNum = 0;

const Questions = ({ navigation, route }) => {
  const [text, setText] = useState({
    topMessage: dataList[pageNum].buttonTop.message,
    bottomMessage: dataList[pageNum].buttonBottom.message,
    imageUrl: dataList[pageNum].imgUrl,
  });
  const onChangeText = (isTop) => {
    if (isTop) {
      resultList.luck+=dataList[pageNum].buttonTop.luck;
      resultList.athleticity+=dataList[pageNum].buttonTop.athleticity;
      resultList.iq+=dataList[pageNum].buttonTop.iq;
      resultList.emotion+=dataList[pageNum].buttonTop.emotion;
      resultList.money+=dataList[pageNum].buttonTop.money;
      resultList.mbtiE+=dataList[pageNum].buttonTop.mbtiE;
      resultList.mbtiI+=dataList[pageNum].buttonTop.mbtiI;
      resultList.mbtiS+=dataList[pageNum].buttonTop.mbtiS;
      resultList.mbtiN+=dataList[pageNum].buttonTop.mbtiN;
      resultList.mbtiT+=dataList[pageNum].buttonTop.mbtiT;
      resultList.mbtiF+=dataList[pageNum].buttonTop.mbtiF;
      resultList.mbtiJ+=dataList[pageNum].buttonTop.mbtiJ;
      resultList.mbtiP+=dataList[pageNum].buttonTop.mbtiP;
    } else {
      resultList.luck+=dataList[pageNum].buttonBottom.luck;
      resultList.athleticity+=dataList[pageNum].buttonBottom.athleticity;
      resultList.iq+=dataList[pageNum].buttonBottom.iq;
      resultList.emotion+=dataList[pageNum].buttonBottom.emotion;
      resultList.money+=dataList[pageNum].buttonBottom.money;
      resultList.mbtiE+=dataList[pageNum].buttonBottom.mbtiE;
      resultList.mbtiI+=dataList[pageNum].buttonBottom.mbtiI;
      resultList.mbtiS+=dataList[pageNum].buttonBottom.mbtiS;
      resultList.mbtiN+=dataList[pageNum].buttonBottom.mbtiN;
      resultList.mbtiT+=dataList[pageNum].buttonBottom.mbtiT;
      resultList.mbtiF+=dataList[pageNum].buttonBottom.mbtiF;
      resultList.mbtiJ+=dataList[pageNum].buttonBottom.mbtiJ;
      resultList.mbtiP+=dataList[pageNum].buttonBottom.mbtiP;
    } 
    setText({
        topMessage: dataList[++pageNum].buttonTop.message,
        bottomMessage: dataList[pageNum].buttonBottom.message,
        imgUrl: dataList[pageNum].imgUrl,
    });
    console.log("luck:" + resultList.luck)
    console.log("atheletic:" + resultList.athleticity)
    console.log("iq:" + resultList.iq)
    console.log("emotion:" + resultList.emotion)
    console.log("money:" + resultList.money)
    console.log("=============:")

  };

  return (
    <Container>
        <View style={{ width: '100%', height: '100%' }}>
            <Image
            source={text.imageUrl}
            style={{ width: '100%', height: '100%' }}
            />
        </View>
        <View
            style={{
                position: 'absolute',
                top: '60%',
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
        >
        <Button
          style={{ 
            position: 'absolute',
            top: -1000,
         }}
          title={text.topMessage}
          onPress={() =>
            onChangeText({
            //   topMessage: dataList[++pageNum].buttonTop,
            //   bottomMessage: dataList[pageNum].buttonBottom,
            //   imgUrl: dataList[pageNum].imgUrl,
              isTop: true,
            })
          }
        />
        <Button
          title={text.bottomMessage}
          onPress={() =>
            onChangeText({
              isTop: false,
            })
          }
        />
    </View>
    </Container>
  );
};

export default Questions;