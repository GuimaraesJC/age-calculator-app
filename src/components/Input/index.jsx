import { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Input({ label, placeholder, errorMessage }) {
  const [hasError, setHasError] = useState(true);

  return (
    <S.Wrapper>
      <S.Label className={hasError && 'error'}>{label}</S.Label>
      <S.Input className={hasError && 'error'} placeholder={placeholder} />
      {hasError && (
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      )}
    </S.Wrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default Input;
