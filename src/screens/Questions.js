import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import MyImage from '../components/MyImage';
import SoundManager from '../components/SoundManager';
import SoundEffect from '../components/SoundEffect';

const page10 = {
  //title: "제목",
  //question: "무언가 반짝인다",
  buttonTop: {
    message: '움직인다',
    luck: 0,
    athleticity: 20,
    iq: 10,
    emotion: 0,
    money: 0,
    mbtiE: 5,
    mbtiI: 0,
    mbtiS: 0,
    mbtiN: 0,
    mbtiT: 0,
    mbtiF: 0,
    mbtiJ: 0,
    mbtiP: 0,
  },
  buttonBottom: {
    message: '가만히 지켜본다',
    luck: 0,
    athleticity: -10,
    iq: 0,
    emotion: 0,
    money: 0,
    mbtiE: 0,
    mbtiI: 10,
    mbtiS: 0,
    mbtiN: 0,
    mbtiT: 0,
    mbtiF: 0,
    mbtiJ: 0,
    mbtiP: 0,
  },
  imgUrl: require('../images/10.jpg'),
};

const page11 = {
  buttonTop: {
    message: '뭔가.... 주기 싫다.',
    luck: 0,
    athleticity: 0,
    iq: 0,
    emotion: -10,
    money: 3000,
    mbtiE: 0,
    mbtiI: 10,
    mbtiS: 0,
    mbtiN: 0,
    mbtiT: 5,
    mbtiF: 0,
    mbtiJ: 0,
    mbtiP: 0,
  },
  buttonBottom: {
    message: '나눠 먹어야 착한 어린이!',
    luck: 5,
    athleticity: 0,
    iq: 0,
    emotion: 30,
    money: -1000,
    mbtiE: 5,
    mbtiI: 0,
    mbtiS: 0,
    mbtiN: 0,
    mbtiT: 0,
    mbtiF: 20,
    mbtiJ: 0,
    mbtiP: 0,
  },
  imgUrl: require('../images/11.jpg'),
};

const page12 = {
  buttonTop: {
    message: '빌려준다',
    luck: 10,
    athleticity: 0,
    iq: 0,
    emotion: 20,
    money: -10000,
    mbtiE: 20,
    mbtiI: 0,
    mbtiS: 0,
    mbtiN: 0,
    mbtiT: 0,
    mbtiF: 20,
    mbtiJ: 0,
    mbtiP: 0,
  },
  buttonBottom: {
    message: '안 빌려준다',
    luck: -20,
    athleticity: 0,
    iq: 0,
    emotion: -5,
    money: 15000,
    mbtiE: 0,
    mbtiI: 10,
    mbtiS: 0,
    mbtiN: 0,
    mbtiT: 5,
    mbtiF: 0,
    mbtiJ: 0,
    mbtiP: 0,
  },
  imgUrl: require('../images/12.jpg'),
};

const page13 = {
  buttonTop: {
    message: '반짝반짝! 너무 궁금해! ㅎㅎ',
    luck: -10,
    athleticity: 10,
    iq: 0,
    emotion: 5,
    money: 0,
    mbtiE: 5,
    mbtiI: 0,
    mbtiS: 0,
    mbtiN: 5,
    mbtiT: 0,
    mbtiF: 5,
    mbtiJ: 0,
    mbtiP: 10,
    isDead: true
  },
  buttonBottom: {
    message: '아주 조~금 수상한거 같기도?',
    luck: 0,
    athleticity: 0,
    iq: 0,
    emotion: 0,
    money: 0,
    mbtiE: 0,
    mbtiI: 10,
    mbtiS: 5,
    mbtiN: 0,
    mbtiT: 5,
    mbtiF: 0,
    mbtiJ: 5,
    mbtiP: 0,
  },
  imgUrl: require('../images/13.jpg'),  
};

const page14 = {
  buttonTop: {
    message: "'나 집에 가려고!' (피하자)",
    luck: 0,
    athleticity: 0,
    iq: 0,
    emotion: 0,
    money: 0,
    mbtiE: 0,
    mbtiI: 10,
    mbtiS: 5,
    mbtiN: 0,
    mbtiT: 5,
    mbtiF: 0,
    mbtiJ: 5,
    mbtiP: 0,
  },
  buttonBottom: {
    message: "'그냥 있어!' (나랑 놀아줘)",
    luck: 0,
    athleticity: 0,
    iq: 0,
    emotion: 0,
    money: 0,
    mbtiE: 0,
    mbtiI: 10,
    mbtiS: 5,
    mbtiN: 0,
    mbtiT: 5,
    mbtiF: 0,
    mbtiJ: 5,
    mbtiP: 0,
  },
  imgUrl: require('../images/14.jpg'),
};

const page15 = {
  buttonTop: {message:'ㅇㅇ 피방ㄱ',},
  buttonBottom: {message:'아, 안된다니까 ㅡㅡ',},
  imgUrl: require('../images/15.jpg'),
};

const page16 = {
  buttonTop: {message:'두근두근 연애부터 해야지♡',},
  buttonBottom: {message:'난 인싸가 될래! 학생회 해야지!',},
  imgUrl: require('../images/16.jpg'),
};

const page17 = {
  buttonTop: {message:'내가 가장 잘하는 일',},
  buttonBottom: {message:'내가 가장 좋아하는 일',},
  imgUrl: require('../images/17.jpg'),
};

const page18 = {
  buttonTop: {message:'머리 벗겨지셨어요.',},
  buttonBottom: {message:'(모른척한다..)',},
  imgUrl: require('../images/18.jpg'),
};

const page19 = {
  buttonTop: {message:'언젠가는 하겠죠~ (귀찮다..)', next: 1},
  buttonBottom: {message:'구체적인 계획을 얘기한다.', next: 2},
  imgUrl: require('../images/19.jpg'),
  isRoad: true
};

const page20 = {
  buttonTop: {message:'어어 날씨 좋다. (모른척)',},
  buttonBottom: {message:'진지하게 계획을 세운다.',},
  imgUrl: require('../images/20.jpg'),
};

const page21 = {
  buttonTop: {message:'북적북적 게스트하우스!',},
  buttonBottom: {message:'편안하고 안락한 호텔!',},
  imgUrl: require('../images/21.jpg'),
};

const page22 = {
  buttonTop: {message:'힘들어도 자기계발이지',},
  buttonBottom: {message:'인간은 좀 쉬어줘야 해',},
  imgUrl: require('../images/22.jpg'),
};

const page23 = {
  buttonTop: {message:'그래, 튼튼하게만 자라렴',},
  buttonBottom: {message:'안되겠다, 학원을 보내야겠어',},
  imgUrl: require('../images/23.jpg'),
};

const page24 = {
  buttonTop: {message:'인류최초! 이왕이면 새로운 곳',},
  buttonBottom: {message:'달과 화성을 보고 오는 코스',},
  imgUrl: require('../images/24.jpg'),
};

const page25 = {
  buttonTop: {message:'원래 외계인 친구 갖고 싶었어',},
  buttonBottom: {message:'뭐야 무서워 도망치자',},
  imgUrl: require('../images/25.jpg'),
};

const page26 = {
  buttonTop: {message:'반년치 월급 받고 퇴직한다.',},
  buttonBottom: {message:'에이 몰라 일단 버텨!',},
  imgUrl: require('../images/26.jpg'),
};

const page27 = {
  buttonTop: {message:'무난하게 검은색 정장',},
  buttonBottom: {message:'화끈하게 빨간색 정장',},
  ThirdButton: {message:"내가 아끼는 갈색 정장",},
  imgUrl: require('../images/27.jpg'),
  visibleThirdButton: false,
  //true로 고치기
};

//const 로또 페이지 만들기!!

const page29 = {
  buttonTop: {message:'가족/친구에게 남긴다.',},
  buttonBottom: {message:'사회에 환원한다.',},
  imgUrl: require('../images/29.jpg'),
  // isDead: true
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

var lottoNumber = Math.floor(Math.random() * 10);
var soundEffect = null;

const Questions = ({ navigation, route }) => {

  useEffect(() => {
    setPageNum(0);
    setResultList(
      {
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
      }
    );
  }, []);

  const [resultList, setResultList] = useState(
    {
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
    }
  );

  const [pageNum, setPageNum] = useState(0);
  const [inputText, setInputText] = useState('');
  const onChangeNumber = (payLoad) => setInputText(payLoad);
  const [text, setText] = useState({
    topMessage: dataList[pageNum].buttonTop.message,
    bottomMessage: dataList[pageNum].buttonBottom.message,
    imageUrl: dataList[pageNum].imgUrl,
    visibleThirdButton: false,
  });

  const [imgRes, setImgRes] = useState(SoundManager.isPlaying ? require('../images/soundButton.png') : require('../images/gaddy.png'))

  const onChangeText = (isTop) => {
    if (pageNum == dataList.length - 1) {
      navigation.navigate('Conclusion', { resultList })
      return;
    }

    /*
      soundEffect.play();    
    */

    //죽는경우
    if (isTop && dataList[pageNum].buttonTop.isDead || !isTop && dataList[pageNum].buttonBottom.isDead) {
      navigation.navigate('Conclusion', { resultList })
    } else {
      if (isTop) {
        updateResultList(resultList, dataList[pageNum].buttonTop);
      } else {
        updateResultList(resultList, dataList[pageNum].buttonBottom);
      }              

      var nextPageNum =  pageNum + 1
      if (dataList[pageNum].isRoad == true) {
        if (isTop) {
          nextPageNum = pageNum + dataList[pageNum].buttonTop.next;
        } else {
          nextPageNum = pageNum + dataList[pageNum].buttonBottom.next;
        }
      }

      setText({
        topMessage: dataList[nextPageNum].buttonTop.message,
        bottomMessage: dataList[nextPageNum].buttonBottom.message,
        imageUrl: dataList[nextPageNum].imgUrl,
        visibleThirdButton: dataList[nextPageNum].visibleThirdButton,
      });

      setPageNum(nextPageNum);
      console.log('Page Number:' + pageNum);
      console.log('RandomNumber: ' + lottoNumber);
      console.log('luck:' + resultList.luck);
      console.log('atheletic:' + resultList.athleticity);
      console.log('iq:' + resultList.iq);
      console.log('emotion:' + resultList.emotion);
      console.log('money:' + resultList.money);
      console.log('=============:');
    }
  };

  const compareNumber = () => {
    if (lottoNumber == parseInt(inputText)) {
      resultList.luck += 30
      resultList.money += 10000000000
    }
    console.log('Lotto:' + lottoNumber);
    console.log('InputText:' + inputText);
    console.log('CN luck:' + resultList.luck);
    console.log('CN money:' + resultList.money);
  };

  const handleImageOnPress = () => {    
    SoundManager.toggle();
    //soundEffect.toggle();        
  };  

  useEffect(() =>  {
    SoundManager.setPlayBackStatusListener(onPlaybackStatusUpdate);      
    soundEffect = new SoundEffect();
    soundEffect.loadSound(require('../images/아기울음소리.wav'));  
  }, []);

  const onPlaybackStatusUpdate = (playbackStatus) => {    
    SoundManager.isPlaying = playbackStatus.isPlaying;    
    setImgRes(SoundManager.isPlaying ? require('../images/soundButton.png') : require('../images/gaddy.png'))   
  };

  return (
    <View style={{flex:1}}>      
      <MyImage
        ratio={1080/2177}
        source={text.imageUrl}>
      </MyImage>            
      <View
        style={{
          position: 'absolute',
          top: '70%',
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >    
        
        <TouchableOpacity          
          style={{ width: '20%', height: '20%', bottom:480, left:140}}
          onPress={() => handleImageOnPress()}>
            <Image       
              style={{ width: '100%', height: '100%'}}         
              resizeMode="contain"                    
              source={imgRes}>          
            </Image>
        </TouchableOpacity>
        
        
        <Button title={text.topMessage} onPress={() => onChangeText(true)} />
        <Button
          title={text.bottomMessage}
          onPress={() => onChangeText(false)}
        />
        <Image
          style={{ width: '100%', maxWidth: 180, height: '30%', bottom: '10%'}}
          resizeMode="contain"
          // containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          source={require('../images/gaddy.png')}>
        </Image>
        <ThirdButton isVisible={text.visibleThirdButton}></ThirdButton>
        
      </View>
         
    </View>
  );
};

export default Questions;

const ThirdButton = ({ isVisible }) => {
  return (
    <TouchableOpacity
      style={{ display: isVisible ? 'flex' : 'none' }}
      onPress={() => console.log('세번째 버튼 클릭')}
    >
      {/* <Text style={{ color: '#000000' }}>세번째 버튼</Text> */}
    </TouchableOpacity>
    
  );
};

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

function updateResultList(resultList, data) {
  resultList.luck += data.luck;
  resultList.athleticity += data.athleticity;
  resultList.iq += data.iq;
  resultList.emotion += data.emotion;
  resultList.money += data.money;
  resultList.mbtiE += data.mbtiE;
  resultList.mbtiI += data.mbtiI;
  resultList.mbtiS += data.mbtiS;
  resultList.mbtiN += data.mbtiN;
  resultList.mbtiT += data.mbtiT;
  resultList.mbtiF += data.mbtiF;
  resultList.mbtiJ += data.mbtiJ;
  resultList.mbtiP += data.mbtiP;
}