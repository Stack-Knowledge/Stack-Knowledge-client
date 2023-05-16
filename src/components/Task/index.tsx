import * as S from './style';
import * as I from 'images';
import Image from 'next/image';

const Task = () => {
  return (
    <div>
      <S.TaskContainer>
        <Image src={I.Rock} alt="Rocked" />
        <S.TextBox>
          <S.Teacher>미소쌤</S.Teacher>
          <S.Title>[법흥왕에 대해서]</S.Title>
        </S.TextBox>
      </S.TaskContainer>
      <S.Bottom>2/3</S.Bottom>
    </div>
  );
};

export default Task;
