'use client';

import styled from '@emotion/styled';

import { CreateBox, MarkBox } from 'components';

export default function Admin() {
  return (
    <CollumBox>
      <Title>Tescher’s Page</Title>
      <CreateBox />
      <MarkBox />
    </CollumBox>
  );
}

const CollumBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 200px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 60px;
  display: flex;
  align-items: center;
  color: #000000;
`;
