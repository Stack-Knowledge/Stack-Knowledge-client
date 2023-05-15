'use client';
import { Timer } from 'components';
import { Text, Container } from './style';

const Task = () => {
  return (
    <Container>
      <Timer />
      <Text>남은 시간 !</Text>
    </Container>
  );
};
export default Task;
