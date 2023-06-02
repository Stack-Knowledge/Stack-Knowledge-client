import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  margin-top: 130px;
`;

export const Milidge = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  color: #000000;
  margin-top: 29px;
`;

export const Items = styled.div`
  width: 728px;
  height: 270px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 135px;
  gap: 30px 100px;
`;
