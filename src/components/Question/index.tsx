import * as S from './style';
import { useState } from 'react';

const Question = () => {
  const [answer, setAnswer] = useState('');

  return (
    <S.QuestionContainer>
      <S.Text>[문제] 1. 법흥왕이 세운 업적을 3가지 이상 서술 하세요.</S.Text>
      <S.Answer
        value={answer}
        onChange={e => {
          setAnswer(e.target.value);
        }}
      />
      <S.SubmitBTN>제출하기</S.SubmitBTN>
    </S.QuestionContainer>
  );
};

export default Question;
