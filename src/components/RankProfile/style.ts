import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 234px;
  height: 151px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 143px;
`;

export const ImgContainer = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
  margin-bottom: 45px;
`;

export const Slice = styled.div`
  width: 1px;
  height: 20px;
  background: #cacaca;
`;

export const TextContainer = styled.div`
  width: 234px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;
