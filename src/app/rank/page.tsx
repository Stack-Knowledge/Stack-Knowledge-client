'use client';
import { BottomNav, RankProfile } from 'components';
import styled from '@emotion/styled';

const Rank = () => {
  return (
    <Container>
      <RankProfile />
      <BottomNav />
    </Container>
  );
};
export default Rank;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
`;
