import * as S from './style';
import * as C from 'components';
import * as I from 'images';
import Image from 'next/image';
import { css } from '@emotion/react';

const MainContainer = () => {
  return (
    <S.MainContainer>
      <C.AlertBox />
      <C.SideBar />
      <S.VectorContainer>
        <Image alt="" src={I.Vector} />
      </S.VectorContainer>
      <S.Contents>
        <S.Text>
          문제풀고 <br />
          상품 받으러 가자!
        </S.Text>
        <S.Content>
          <C.Task />
          <C.Task />
          <C.Task />
          <C.Task />
          <C.Task />
        </S.Content>
        <S.Content>
          <C.Task />
          <C.Task />
          <C.Task />
          <C.Task />
          <C.Task />
        </S.Content>
        <C.BottomNav />
      </S.Contents>
      <S.VectorContainer>
        <Image
          alt=""
          src={I.Vector}
          css={css`
            transform: matrix(-1, 0, 0, 1, 0, 0);
          `}
        />
      </S.VectorContainer>
    </S.MainContainer>
  );
};

export default MainContainer;
