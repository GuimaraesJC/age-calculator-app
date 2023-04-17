import Input from '../Input';
import ButtonWithDivider from '../ButtonWithDivider';
import ResultSlice from '../ResultSlice';

import * as S from './styles';

function Container() {
  return (
    <S.Container>
      <S.InputsContainer>
        <Input label="Day" placeholder="DD" errorMessage="Must be a valid day" />
        <Input label="Month" placeholder="MM" errorMessage="Must be a valid month" />
        <Input label="Year" placeholder="YYYY" errorMessage="Must be in the past" />
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
