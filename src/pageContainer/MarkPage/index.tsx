import { Text, Container } from './style';
import { MarkCom, TaskOX } from 'components';

const Mark = () => {
  return (
    <Container>
      <Text>채점하기</Text>
      <MarkCom />
      <TaskOX />
    </Container>
  );
};
export default Mark;
