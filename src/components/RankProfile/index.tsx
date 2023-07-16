import * as S from './style';
import { Gauth } from 'images';
import Image from 'next/image';

const RankProfile = () => {
  return (
    <S.ProfileContainer>
      <S.ImgContainer>
        <Image alt="profile" src={Gauth} fill />
      </S.ImgContainer>
      <S.TextContainer>
        현재 3위
        <S.Slice />
        채종인
        <S.Slice />
        172,234M
      </S.TextContainer>
    </S.ProfileContainer>
  );
};

export default RankProfile;
