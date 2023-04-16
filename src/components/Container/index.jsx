import Input from '../Input';
import ButtonWithDivider from '../ButtonWithDivider';

import * as S from './styles';

function Container() {

  return (
    <S.Container>
      <S.InputsContainer>
        <Input label="Day" placeholder="DD" />
        <Input label="Month" placeholder="MM" />
        <Input label="Year" placeholder="YYYY" />
      </S.InputsContainer>
      <ButtonWithDivider />
    </S.Container>
  );
}

export default Container;
