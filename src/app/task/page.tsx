'use client';
import { Timer } from 'components';
import * as C from 'components';
import { Text, Container } from './style';

const Task = () => {
  return (
    <Container>
      <C.SideBar />
      <Timer />
      <Text>남은 시간 !</Text>
      <C.Question />
    </Container>
  );
};
export default Task;
