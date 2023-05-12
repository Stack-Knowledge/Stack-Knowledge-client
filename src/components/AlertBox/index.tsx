import * as S from './style';

const AlertBox = () => {
  return (
    <S.BoxContainer>
      <S.TextContainer>
        <S.Text>미소쌤이 새로운 문제를 출제했어요!</S.Text>
        <S.Text>문제 풀어보기</S.Text>
      </S.TextContainer>
      <S.BottomTextBox>
        <S.BottomText>취소</S.BottomText>
        <S.BottomText>확인</S.BottomText>
      </S.BottomTextBox>
    </S.BoxContainer>
  );
};

export default AlertBox;
