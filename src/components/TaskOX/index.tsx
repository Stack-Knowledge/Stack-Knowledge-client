'use client';
import * as S from './style';
import Image from 'next/image';
import { OIcon, XIcon } from 'images';

const TaskOX = () => {
  return (
    <S.BoxContainer>
      <S.TextContainer>
        <S.Text>문제를 체점해주세요!</S.Text>
      </S.TextContainer>
      <S.OXBox>
        <Image alt="" src={OIcon} />
        <Image alt="" src={XIcon} />
      </S.OXBox>
      <S.BottomTextBox>
        <S.BottomText>취소</S.BottomText>
        <S.BottomText>확인</S.BottomText>
      </S.BottomTextBox>
    </S.BoxContainer>
  );
};

export default TaskOX;
