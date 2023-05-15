'use client';
import * as S from './style';
import { css } from '@emotion/react';
import Image from 'next/image';
import { Vector2 } from 'images';
import { useState } from 'react';

const BottomNav = () => {
  const [selected, setSelected] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);
  return (
    <S.NavContainer>
      <Image src={Vector2} alt="" />
      <S.Selected selected={selected[0]}>
        <S.Num>1</S.Num>
      </S.Selected>
      <S.Selected selected={selected[1]}>
        <S.Num>2</S.Num>
      </S.Selected>
      <S.Selected selected={selected[2]}>
        <S.Num>3</S.Num>
      </S.Selected>
      <S.Selected selected={selected[3]}>
        <S.Num>4</S.Num>
      </S.Selected>
      <S.Selected selected={selected[4]}>
        <S.Num>5</S.Num>
      </S.Selected>
      <Image
        src={Vector2}
        alt=""
        css={css`
          transform: matrix(-1, 0, 0, 1, 0, 0);
        `}
      />
    </S.NavContainer>
  );
};

export default BottomNav;
