import * as S from './style';
import { useState } from 'react';

const Timer = () => {
  const [hour, setHour] = useState('00');
  const [min, setMin] = useState('00');
  const [sec, setSec] = useState('00');

  return (
    <S.Timer>
      <S.InputBox>
        <S.Input
          value={hour}
          onChange={e => {
            setHour(e.target.value);
          }}
          type="number"
        />
        :
        <S.Input
          value={min}
          onChange={e => {
            setMin(e.target.value);
          }}
          type="number"
        />
        :
        <S.Input
          value={sec}
          onChange={e => {
            setSec(e.target.value);
          }}
          type="number"
        />
      </S.InputBox>
    </S.Timer>
  );
};

export default Timer;
