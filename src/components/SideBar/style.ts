import styled from '@emotion/styled';

export const SideContainer = styled.div`
  width: 240px;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #f7f9fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const LogoContainer = styled.div`
  width: 240px;
  height: 40px;
  margin-top: 130px;
  padding: 0 22px 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ff9a3e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #444872;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;

export const Opctions = styled.div`
  height: 339px;
  margin-top: 168px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Opction = styled.div`
  width: 84px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const OpctionText = styled.h2`
  color: #444872;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
