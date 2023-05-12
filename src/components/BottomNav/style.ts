import styled from '@emotion/styled';

export const NavContainer = styled.div`
  width: 257px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 192px 0 62px;
`;

export const Selected = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  background-color: ${({ selected }: { selected: boolean }) =>
    selected ? 'rgba(255, 154, 62, 0.65)' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Num = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;
