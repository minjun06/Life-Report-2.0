import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../components/Button';

const jobList = [
//순서: 운, 운동 능력, IQ, 정서, 재산, MBTI (E I S N T F J P)
  ['포춘쿠키작가', '뱀독추출사', '병아리감별사', '아이돌', '쓰리 스타 장교'],
  ['아이맥스스크린청소부', '메시', '테니스 강사', '경호원', '항해사', '환경미화원', '해양경찰'],
  ['연구원', '검사', '의사', '교수', '보건 교사', '역사 선생님', '고고학자', '수학자', '인생성적표 개발자', '외교관', '영양사'],
  ['부끄러움컨설턴트', '애완동물탐정가', '사과전문가(먹는사과아님)', '심리상담사', '교황'],
  ['대통령', '유튜버', '재벌', '장의사', '장기취급전문가', '횟집 사장'],
  ['E', 'E', 'E'],
  ['I', 'I', 'I'],
  ['S', 'S', 'S'],
  ['N', 'N', 'N'],
  ['T', 'T', 'T'],
  ['F', 'F', 'F'],
  ['J', 'J', 'J'],
  ['P', 'P', 'P'],
  //['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
];
const deadList = ['잠자다가 무호흡증으로 사망', '선글라스를 벗다 앞이 안보여 계단에서 떨어져사망', '돌연사', '날카로운것에 찔려사망', '코털뽑다사망', '온탕과 냉탕을 왔다갔다하다가 사망', '꽃게먹고 호흡곤란으로 사망', '변기뚜껑안닫고 물내려서 사망', '꿀이 너무달아서 사망', '냉면을 가위로 안자르고먹어 사망', '울어서사망', '공연보다사망', '핫도그가 너무커 사망', '껌씹다가사망', '통감자먹다 목에 걸려서 사망','똥싸다힘을너무많이줘서사망','간지럼당해서 웃다가사망','뱀으로 줄넘기하다가 사망','고드름에 맞아서 사망','김치가너무짜사망','아이스크림먹고좋아하는연예인을보며흥분해사망','패딩모자쓰고 차를 못봐서 사망'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0)',
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

  list = list.sort((a, b) => b.value - a.value);

  const maxJobList = jobList[list[0].key];
  const job = maxJobList[Math.floor(Math.random() * maxJobList.length)];
  const dead = deadList[Math.floor(Math.random() * deadList.length)];

  return (
    <View style={styles.container}>
      <Button title={job}></Button>
      <Button title={dead}></Button>
      <Button title="세번째 버튼"></Button>
      <Button
          style={styles.button}
          title="다시 하기"
          onPress={() => {
            navigation.reset({ routes: [{ name: 'Home' }] });
            //pageNum = 0;
          }}
        >
        </Button>
    </View>
  );
};

export default ResultPage;
