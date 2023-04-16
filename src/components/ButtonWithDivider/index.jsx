import * as S from './styles';

import arrow from '../../assets/icon-arrow.svg';

function ButtonWithDivider() {
  return (
    <S.Wrapper>
      <S.Button>
        <img src={arrow} width={44} height={44} />
      </S.Button>
    </S.Wrapper>
  );
}

export default ButtonWithDivider;
