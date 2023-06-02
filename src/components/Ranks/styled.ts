import styled from '@emotion/styled';

export const RankContainer = styled.div`
  width: 456px;
  height: 503px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  position: relative;
  overflow: scroll;
`;

export const Text = styled.p`
  width: 456px;
  padding-left: 29px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 7px;
`;

export const Item = styled.div`
  width: 397px;
  height: 60px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 16px 0;
  &:hover {
    background: #ffc58f;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 39px;

  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;

export const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin: 0 12px 0 20px;
  img {
    object-fit: cover;
  }
`;

export const Milidge = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #878787;
`;

export const Line = styled.div`
  width: 456px;
  height: 1px;
  background: #d9d9d9;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
