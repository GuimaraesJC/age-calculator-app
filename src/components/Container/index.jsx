import Input from '../Input';
import ButtonWithDivider from '../ButtonWithDivider';
import ResultSlice from '../ResultSlice';

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
      <S.ResultsContainer>
        <ResultSlice value="20" identifier="years" />
        <ResultSlice value="30" identifier="months" />
        <ResultSlice value="40" identifier="days" />
      </S.ResultsContainer>
    </S.Container>
  );
}

export default Container;
