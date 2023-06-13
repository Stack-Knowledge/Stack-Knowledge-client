import * as S from './style';
import { MarkIcon } from 'images';
import Image from 'next/image';

const MarkBox = () => {
  return (
    <S.Container>
      <S.LoginBox>
        <Image src={MarkIcon} alt="" />
        문제 체점하기
      </S.LoginBox>
    </S.Container>
  );
};

export default MarkBox;
