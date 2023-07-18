import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import DetailMore from './DetailMore';

// const quesInfo = [
//   {
//     question: '오늘 하루는?',
//     answer:
//       '야구는 기본적으로 체격이 클수록 좋다. 타자의 경우는 좋은 피지컬을 앞세운 강한 근력, 즉 힘으로 장타를 치는 것이 통계적으로 득점 확률을 높이는 가장 좋은 방법이다. 잘 맞아도 플라이아웃이 되기 일쑤라면 이 부분을 타고나지 못했다고 느끼면서 타격 스타일을 중장거리형 타자나 컨택 위주의 타자로 잡을 수밖에 없게 되는 것. 빠른 발이 있다면 주루플레이나 도루로 한베이스를 더 얻어 장타를 친 것 같은 효과를 노릴 수도 있지만 매번 시도할 수도 없고 실패확률이 있는 부가적인 노력일 뿐이다. 투수의 경우도 키가 근력과 관절이 감당할 수만 있다면[16] 190cm 이상으로 크고 팔다리가 길수록, 전반적인 체격이 클수록 유리하다. 키가 클수록 릴리스포인트가 높아져 공을 위에서 던지는 느낌을 주고[17] 팔이 길수록 원심력이 커져 팔을 느리게 회전해도 빠른 공을 던질 수 있고 다리가 긴만큼 더 앞으로 내딛을 수 있고 팔도 더 앞에서 공을 놓기 때문에 비행거리에 따른 속도 감소가 적어 타자 체감 구속이 빨라지는 효과까지 있다. 또 큰 체격은 위와 같은 장점을 더 작은 신체부담으로 누릴 수 있고 투구로 인한 대미지도 더 적을 수 있다. 정리하자면, 현대 야구에서는 힘이 농구의 키처럼 선수 스펙에서 가장 중요하게 요구되는 사항이 되었다. 농구에서는 포지션을 가리지 않고 선수가 공을 바스켓에 집어넣을 수 있는 슈팅 감각이 기본이 되고 키가 클수록 선수 입지가 유리해지는 것처럼, 야구에서는 컨택 능력은 기본으로 갖추되, 장타를 칠 힘이 있으면 그것이 야구에서 매우 유리하게 작용한다. 그 힘은 체격이 뛰어날 수록 클 확률이 높다. 축구나 농구는 거의 모든 선수가 필드/코트를 쉬지 않고 끊임없이 뛰어다녀야 하기 때문에 어느 포지션이든 엄청난 심폐지구력이 필요하나 야구는 멈춰있다가 순간적으로 근력을 폭발시키는 것을 일정 텀을 두고 반복하는[18] 스포츠기 때문에 심폐지구력은 큰 의미가 없다. 근력의 스포츠인 야구에서의 지구력이라면 심폐기능보다는 근지구력을 말해야 하며 이것도 포지션별로 다르게 요구되는 부분이다. 지명타자 포함 10개의 포지션 중 9개를 차지하는 타자는 하나의 경기만 놓고 보면 극한의 지구력과는 관련이 없다고 해도 과언이 아니다. 때문에 한 팀당 일주일에 한두 번씩 열리거나 하는 프로축구와는 달리 프로야구는 거의 매일(일주일에 6일 이상) 경기를 하게 되었고 리그화 되면서 야외 경기를 즐기기 좋은 4월부터 추워지기 전까지 약 6개월을 가득 채워 시즌을 구상하기에 이르러 경기 수가 매우 많아지게 되었다. 결과적으로 타자는 경기 방식이 아닌 프로야구리그 특성상 긴 시즌 동안 기량과 피지컬을 유지할 수 있는 장기적인 근지구력이 요구된다. 물론 수비시 무거운 보호장비를 착용한채로 대부분의 시간을 쭈그려 앉아 포구와 벤치 사인에 집중해야하는 포수나 인플레이타구 발생시 가장 공을 많이 만지게 되는 유격수 등은 출전경기가 늘어날 수록 누적되는 피로가 상대적으로 더 크기 때문에 지구력이 더 필요한 포지션이라고 할 수 있다.[19] 반면 투수는 전신을 쥐어짜는 메커니즘으로 구위를 만들어내는 투구를 반복하는데 특히 선발투수는 일단 출장하면 이걸 100개 내외까지도 퀄리티를 유지하며 던질 엄청난 근지구력이 필요하며[20] 구원투수는 경기당 투구수 자체는 적지만 오히려 완급조절 없이 전력투구를 해야하고 주자가 있거나 클러치 상황 등 압박감으로 인해 육체적 피로감이 가중되는 상태의 투구, 충분한 회복이 이루어지지 않는 연투와 불규칙한 등판일정 등을 버텨내야 한다.[21] 때문에 투수는 반드시 출장보다 많은 휴식일이 필요하게 되므로 타자에 비해 출장 수가 월등히 적을 수밖에 없어 한경기에 출전하는 10개의 포지션 중 1자리 뿐임에도 전체 로스터의 절반 가까이를 차지한다. 짧은 기간만 진행되는 중소 규모 리그가 아닌 이상 종목 특성과 프로스포츠화로 인한 관중 수익과 중계 수익을 충분히 확보해야 하는 목적이 결합되어 자리를 확고히 잡은 어지간한 리그에서는 팀당 한 시즌 100경기 이상[22]의 아주 긴 여정을 걷게 된다.[23]',
//   },
//   {question: '오늘 맛있었던 음식?', answer: '김치찌개'},
//   {question: '가장 재밌던 순간?', answer: '풋살'},
//   {question: '가장 인상깊었던 순간?', answer: '비 맞은 까치'},
//   {question: '좋게 들은 노래는?', answer: 'i love you'},
//   {question: '점심은 무엇을?', answer: '고추장불고기'},
// ];
const quesInfo = [];
class QAData {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

const DetailPost = ({data, templateData}) => {
  console.log('----------This is detailpost----------');
  console.log(data);
  console.log(templateData);
  console.log('----------------------------------------');
  const fetchData = async () => {
    quesInfo.length = 0;
    const url = `http://172.10.5.148:443/questions/${templateData.templateId}`;
    try {
      const response = await axios.get(url);
      const parsedArray = response.data;
      for (const element of parsedArray) {
        const answerUrl = `http://172.10.5.148:443/answers/${element.questionId}/${data.recordId}/answer`;
        const answerObject = await axios.get(answerUrl);
        if (answerObject.data === '') {
          const qaData = new QAData(element.questionContent, '');
          quesInfo.push(qaData);
        } else {
          const qaData = new QAData(
            element.questionContent,
            answerObject.data.answer,
          );
          quesInfo.push(qaData);
        }
      }
      console.log('This is the length of quesInfo: ' + quesInfo.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{position: 'relative', alignItems: 'center'}}>
      {quesInfo.map((data, index) => {
        return <DetailMore key={index} data={data} />;
      })}
    </View>
  );
};

export default DetailPost;
