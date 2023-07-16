import * as S from './style';
import * as I from 'images';
import Image from 'next/image';

const LoginBox = () => {
  return (
    <S.Container>
      <S.LogoBox>
        <I.LogoIcon size={false} color="black" />
      </S.LogoBox>
      <S.Title>Stack Kowwlege</S.Title>
      <S.LoginBox>
        <Image src={I.Gauth} alt="" />
        GAuth 로 로그인하기
      </S.LoginBox>
    </S.Container>
  );
};

export default LoginBox;
