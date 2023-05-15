import * as S from './style';
import * as I from 'images';
import Image from 'next/image';
import { css } from '@emotion/react';

const SideBar = () => {
  return (
    <S.SideContainer>
      <S.LogoContainer>
        <S.Logo>
          <I.LogoIcon size={true} color="white" />
        </S.Logo>
        <S.Title>Stack Kowwlege</S.Title>
      </S.LogoContainer>
      <S.Opctions>
        <S.Opction
          css={css`
            width: 67px;
          `}
        >
          <Image alt="" src={I.HomeIcon} />
          <S.OpctionText>홈</S.OpctionText>
        </S.Opction>
        <S.Opction>
          <Image alt="" src={I.CoinIcon} />
          <S.OpctionText>상점</S.OpctionText>
        </S.Opction>
        <S.Opction>
          <Image alt="" src={I.RankIcon} />
          <S.OpctionText>랭킹</S.OpctionText>
        </S.Opction>
      </S.Opctions>
    </S.SideContainer>
  );
};

export default SideBar;
