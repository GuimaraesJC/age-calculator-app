import PropTypes from 'prop-types';

import * as S from './styles';

function Input({ label, placeholder }) {

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} />
    </S.Wrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
