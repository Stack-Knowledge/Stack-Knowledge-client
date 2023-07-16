import * as S from './styled';
import Image from 'next/image';
import { Gauth } from 'images';

const Users = [
  {
    name: '미소쌤',
    milidge: '172,000M',
  },
  {
    name: '이동욱',
    milidge: '172,000M',
  },
  {
    name: '채종인',
    milidge: '172,000M',
  },
  {
    name: '박주홍',
    milidge: '172,000M',
  },
  {
    name: '이승제',
    milidge: '172,000M',
  },
];

const Rank = () => {
  return (
    <S.RankContainer>
      <S.Text>현재 순위</S.Text>
      <div>
        {Users.map((user, i) => {
          return (
            <ItemBox i={i} key={i} name={user.name} milidge={user.milidge} />
          );
        })}
      </div>
    </S.RankContainer>
  );
};

const ItemBox = ({
  name,
  milidge,
  i,
}: {
  name: string;
  milidge: string;
  i: number;
}) => {
  return (
    <S.Middle>
      <S.Item>
        <S.Flex>
          {i + 1}
          <S.Profile>
            <Image src={Gauth} alt="profile" fill />
          </S.Profile>
          {name}
        </S.Flex>
        <S.Milidge>{milidge}</S.Milidge>
      </S.Item>
      <S.Line />
    </S.Middle>
  );
};

export default Rank;
