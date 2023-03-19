import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import {  } from 'react-native-gesture-handler';
import Button from '../components/Button';
import MyImage from '../components/MyImage';
import ResultTextView from '../components/ResultTextView';

const jobList = [
  //순서: 운, 운동 능력, IQ, 정서, 재산, MBTI (E I S N T F J P)
  ['포춘쿠키작가', '뱀독추출사', '병아리감별사', '아이돌', '쓰리 스타 장교'],
  ['아이맥스스크린청소부', '메시', '테니스 강사', '경호원', '항해사', '환경미화원', '해양경찰'],
  ['연구원', '검사', '의사', '교수', '보건 교사', '역사 선생님', '고고학자', '수학자', '인생성적표 개발자', '외교관', '영양사'],
  ['부끄러움컨설턴트', '애완동물탐정가', '사과전문가(먹는사과아님)', '심리상담사', '교황'],
  ['대통령', '유튜버', '재벌', '장의사', '장기취급전문가', '횟집 사장'],
  ['유튜버', '아이돌', '외교관'],
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
    bottom: 150,
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
  const job = maxJobList[Math.floor(Math.random() * maxJobList.length)];
  const dead = deadList[Math.floor(Math.random() * deadList.length)];

  return (
    <ScrollView>
      <MyImage
        ratio={1080 / 3389}
        source={require('../images/result_img.png')}>
      </MyImage>
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
        <ResultTextView top={98} left={100} text={global.userName}></ResultTextView>
        <ResultTextView top={98} left={245} text={'67세'}></ResultTextView>
        <ResultTextView top={127} left={100} text={'ISTP'}></ResultTextView>
        <ResultTextView top={159} left={100} text={job}></ResultTextView>

        {/* 이수과정 */}
        <ResultTextView top={218} left={99} fontSize={40} text={'A'}></ResultTextView>
        <ResultTextView top={218} left={154} fontSize={40} text={'C'}></ResultTextView>
        <ResultTextView top={218} left={218} fontSize={40} text={'B'}></ResultTextView>
        <ResultTextView top={218} left={275} fontSize={40} text={'B'}></ResultTextView>

        <ResultTextView top={310} left={100} text={dead}></ResultTextView>
        <ResultTextView top={400} left={100} text={personality}></ResultTextView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //pageNum = 0;
            navigation.reset({ routes: [{ name: 'Home' }] });
          }}
        >
          <Text style={{ color: 'white', fontSize: 22, fontFamily: 'my-custom-font' }}>인생 다시 시작하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ResultPage;