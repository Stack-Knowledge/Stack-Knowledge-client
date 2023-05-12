import styled from '@emotion/styled';

export const BoxContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 170px;
  left: calc(50% - 280px / 2 + 18px);
  top: 411px;
  padding: 30px 14px 0 14px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 4px 4px 4px 1px rgba(129, 129, 129, 0.25);
  border-radius: 20px;
`;

export const TextContainer = styled.div`
  width: 252px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 63px;
`;

export const Text = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export const BottomTextBox = styled.div`
  width: 98px;
  height: 17px;
  margin-left: 154px;
  display: flex;
  justify-content: space-between;
`;

export const BottomText = styled.h3`
  width: 41px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #ff9a3e;
  text-align: right;
  cursor: pointer;
`;
