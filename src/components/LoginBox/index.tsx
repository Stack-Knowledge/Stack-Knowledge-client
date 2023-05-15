import * as S from './style';
import * as I from 'images';
import Image from 'next/image';

const LoginBox = () => {
  return (
    <S.Container>
      <S.LogoBox>
        <I.LogoIcon color="black" />
      </S.LogoBox>
      <S.Title>Stack Kowwlege</S.Title>
      <S.LoginBox>
        <Image src={I.Gauth} alt="" />
        <S.Text>GAuth 로 로그인하기</S.Text>
      </S.LoginBox>
    </S.Container>
  );
};

export default LoginBox;
