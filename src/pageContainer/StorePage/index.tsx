import { ItemBox, SideBar } from 'components';
import * as S from './style';

const StorePage = () => {
  return (
    <S.Container>
      <SideBar />
      <S.Title>나의 마일리지</S.Title>
      <S.Milidge>124,000,000 M</S.Milidge>
      <S.Items>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
      </S.Items>
      <S.SubmitBox>
        <S.MilidgeText>남은 마일리지: 10,000 M</S.MilidgeText>
        <S.SubmitBtN>
          <S.BTNText>외출권</S.BTNText>
          <S.Submit>교환하기</S.Submit>
          <S.BTNText>3,000 M</S.BTNText>
        </S.SubmitBtN>
      </S.SubmitBox>
    </S.Container>
  );
};

export default StorePage;
