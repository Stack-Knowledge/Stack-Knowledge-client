import styled from '@emotion/styled';

export const QuestionContainer = styled.div`
  width: 950px;
  height: 344px;
  margin-top: 201px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export const Answer = styled.textarea`
  width: 950px;
  height: 300px;
  background: #f7f9fb;
  box-shadow: 3px 3px 4px rgba(120, 120, 120, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;
  padding-left: 13px;
  resize: none;
  margin-top: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 60px;
  color: #000000;
`;

export const SubmitBTN = styled.div`
  width: 123px;
  height: 40px;
  background: #ff9a3e;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  color: #ffffff;

  position: relative;
  left: 789px;
  bottom: 60px;
`;
