import Input from '../Input';

import * as S from './styles';

function Container() {

  return (
    <S.Container>
      <S.InputsContainer>
        <Input label="Day" placeholder="DD" />
        <Input label="Month" placeholder="MM" />
        <Input label="Year" placeholder="YYYY" />
      </S.InputsContainer>
    </S.Container>
  );
}

export default Container;
