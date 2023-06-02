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
    </S.Container>
  );
};

export default StorePage;
