import React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Image, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
// import {  } from 'react-native-gesture-handler';
import Button from '../components/Button';
import MyResultImage from '../components/MyResultImage';
import ResultTextView from '../components/ResultTextView';
import { useClipboard } from 'use-clipboard-copy';
//import * as Clipboard from 'expo-clipboard';

const jobList = [
  //순서: 운, 운동 능력, IQ, 정서, 재산, MBTI (E I S N T F J P)
  ['포춘쿠키작가', '뱀독추출사', '병아리감별사', '아이돌', '쓰리 스타 장교'],
  ['아이맥스스크린청소부', '메시', '테니스 강사', '경호원', '항해사', '환경미화원', '해양경찰'],
  ['연구원', '검사', '의사', '교수', '보건 교사', '역사 선생님', '고고학자', '수학자', '인생성적표 개발자', '외교관', '영양사'],
  ['부끄러움컨설턴트', '애완동물탐정가', '사과전문가(먹는사과아님)', '심리상담사', '교황'],
  ['대통령', '유튜버', '재벌', '장의사', '장기취급전문가', '횟집 사장'],
  ['고고학자', '사과전문가(먹는사과아님)', '병아리감별사'],
  ['I', 'I', 'I'],
  ['S', 'S', 'S'],
  ['N', 'N', 'N'],
  ['T', 'T', 'T'],
  ['F', 'F', 'F'],
  ['J', 'J', 'J'],
  ['P', 'P', 'P'],
  //['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
];
const deadList = ['잠자다가 무호흡증으로 사망', '선글라스를 벗다 앞이 안보여 계단에서 떨어져사망', '돌연사', '날카로운것에 찔려사망', '코털뽑다사망', '온탕과 냉탕을 왔다갔다하다가 사망', '꽃게먹고 호흡곤란으로 사망', '변기뚜껑안닫고 물내려서 사망', '꿀이 너무달아서 사망', '냉면을 가위로 안자르고먹어 사망', '울어서사망', '공연보다사망', '핫도그가 너무커 사망', '껌씹다가사망', '통감자먹다 목에 걸려서 사망', '똥싸다힘을너무많이줘서사망', '간지럼당해서 웃다가사망', '뱀으로 줄넘기하다가 사망', '고드름에 맞아서 사망', '김치가너무짜사망', '아이스크림먹고좋아하는연예인을보며흥분해사망', '패딩모자쓰고 차를 못봐서 사망'];
const personality = '아침잠이 많아 학창시절 매번 5분내외의 지각을 헤 선생님께 자주 혼났다. \n 다른 사람의 잠재력이나 재능을 잘 캐치해 힘을 준다. 예의가 바르며 자신이 해야하는 바에 최선을 다한다. \n  자신의 의견을 내세우기보다 타인의 의견을 존중하고 본인의 욕심보단 공동의 이익을 위해 힘쓴다. \n 초등학생때 종이를 뜯어먹다 교장실에 불려가 혼난 적이 있다. '

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    //justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'flex-end',
    bottom: 315,
    //bottom: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    margin: 15, borderColor: 'white', borderWidth:1, width:200, height: 40, borderRadius:15
    //fontFamily: 'my-custom-font'
  },
  
});

var list = [];

const ResultPage = ({ navigation, route }) => {
  list = [
    { key: 0, value: route.params.resultList.luck },
    { key: 1, value: route.params.resultList.athleticity },
    { key: 2, value: route.params.resultList.iq },
    { key: 3, value: route.params.resultList.emotion },
    { key: 4, value: route.params.resultList.money },
    { key: 5, value: route.params.resultList.mbtiE },
    { key: 6, value: route.params.resultList.mbtiI },
    { key: 7, value: route.params.resultList.mbtiS },
    { key: 8, value: route.params.resultList.mbtiN },
    { key: 9, value: route.params.resultList.mbtiT },
    { key: 10, value: route.params.resultList.mbtiF },
    { key: 11, value: route.params.resultList.mbtiJ },
    { key: 12, value: route.params.resultList.mbtiP },
  ];

  const sortList = list.sort((a, b) => b.value - a.value);

  const maxJobList = jobList[sortList[0].key];  
  

  // const curWidth = Math.min(500, Dimensions.get('window').width);
  const stanDardWidth = 360
  const maxWidth = 500

  const [job] = useState(maxJobList[Math.floor(Math.random() * maxJobList.length)]);
  const [dead] = useState(deadList[Math.floor(Math.random() * deadList.length)]);

  const [ratio, setRatio] = useState((Math.min(maxWidth, Dimensions.get('window').width)) / stanDardWidth);
  const [padding, setPadding] = useState(Math.max(0, (Dimensions.get('window').width - maxWidth) / 2));
  
  
  useEffect(() => {
    const updateWidth = () => {
      
      const mPadding = Math.max(0, (Dimensions.get('window').width - maxWidth) / 2)
      const mRatio = (Math.min(maxWidth, Dimensions.get('window').width)) / stanDardWidth
      setPadding(mPadding)      
      setRatio(mRatio);      
    };
        
    
    Dimensions.addEventListener('change', updateWidth);

    return () => {
      Dimensions.removeEventListener('change', updateWidth);
    };
  }, []);

  const num = 10;

  const clipboard = useClipboard();

  const handleCopyLink = () => {          
    clipboard.copy(window.location.href);
    alert("링크 복사 되었습니다.");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <MyResultImage
        //ratio={1080 / 3389}
        ratio={1080 / 3881}
        //num='100'
        source={require('../images/resultLong.jpg')}>
      </MyResultImage>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <ResultTextView top={98 * ratio+num} left={padding + 100 * ratio} text={global.userName}></ResultTextView>
        <ResultTextView top={98 * ratio+num} left={padding + 245 * ratio} text={'67세'}></ResultTextView>
        <ResultTextView top={127 * ratio+num} left={padding + 100 * ratio} text={'ISTP'}></ResultTextView>
        <ResultTextView top={159 * ratio+num} left={padding + 100 * ratio} text={job}></ResultTextView>

        {/* 이수과정 */}
        <ResultTextView top={218 * ratio+num} left={padding + 99 * ratio} fontSize={40 * ratio} text={'A'}></ResultTextView>
        <ResultTextView top={218 * ratio+num} left={padding + 154 * ratio} fontSize={40 * ratio} text={'C'}></ResultTextView>
        <ResultTextView top={218 * ratio+num} left={padding + 218 * ratio} fontSize={40 * ratio} text={'B'}></ResultTextView>
        <ResultTextView top={218 * ratio+num} left={padding + 275 * ratio} fontSize={40 * ratio} text={'B'}></ResultTextView>

        <ResultTextView top={310 * ratio+num} left={padding + 100 * ratio} text={dead}></ResultTextView>
        <ResultTextView top={400 * ratio+num} left={padding + 100 * ratio} text={personality}></ResultTextView>
        
          <Image
          style={{ width: '40%', height: '40%', top: 850}}
          resizeMode="contain"
          //containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          source={require('../images/share.png')}>
          </Image>
          <Image
          style={{ width: '60%', height: '60%', top: 260}}
          resizeMode="contain"
         //containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          source={require('../images/kakao.png')}>
          </Image>
          <Image
          style={{ width: '100%', height: '100%', bottom: 500}}
          resizeMode="contain"
          //containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          source={require('../images/gaddy.png')}>
          </Image>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //pageNum = 0;
            handleCopyLink();
            //navigation.reset({ routes: [{ name: 'Home' }] });
          }}
        >
          <Text style={{ color: 'white', fontSize: 22, fontFamily: 'my-custom-font' }}>인생 다시 시작하기</Text>
        </TouchableOpacity>
        
        
      </View>
    </ScrollView>
  );
};

export default ResultPage;