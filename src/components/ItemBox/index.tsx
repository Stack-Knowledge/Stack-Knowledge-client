'use client';
import * as S from './style';

const ItemBox = () => {
  return (
    <S.ItemBox>
      <S.FlexBox>
        <S.DolIcon>$</S.DolIcon>
        <S.TextBox>
          <S.ItemTitle>외출권</S.ItemTitle>
          <S.Mileage>3,000M</S.Mileage>
        </S.TextBox>
      </S.FlexBox>
      <S.ItemCounter>
        <S.Left>+</S.Left>
        <S.Center>0</S.Center>
        <S.Right>-</S.Right>
      </S.ItemCounter>
    </S.ItemBox>
  );
};

export default ItemBox;
