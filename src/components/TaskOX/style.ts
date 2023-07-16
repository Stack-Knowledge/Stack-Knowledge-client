import styled from '@emotion/styled';

export const BoxContainer = styled.div`
  position: absolute;
  width: 263px;
  height: 154px;
  left: calc(50% - 280px / 2 + 18px);
  top: 411px;
  padding: 30px 14px 0 14px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 4px 4px 4px 1px rgba(129, 129, 129, 0.25);
  border-radius: 20px;
`;

export const OXBox = styled.div`
  margin: 0 auto;
  width: 86.17px;
  height: 31.43px;

  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  width: 252px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Text = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export const BottomTextBox = styled.div`
  width: 66px;
  height: 17px;
  margin-left: 161px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const BottomText = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ff9a3e;
  cursor: pointer;
`;
