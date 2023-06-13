import * as S from './style';
import { CreateIcon } from 'images';
import Image from 'next/image';

const CreateBox = () => {
  return (
    <S.Container>
      <S.LoginBox>
        <Image src={CreateIcon} alt="" />
        문제 만들러 가기
      </S.LoginBox>
    </S.Container>
  );
};

export default CreateBox;
