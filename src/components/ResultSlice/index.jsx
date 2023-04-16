import PropTypes from 'prop-types';

import * as S from './styles';

function ResultSlice({ value = '--', identifier }) {
  return (
    <S.Paragraph><S.Span>{value}</S.Span> {identifier}</S.Paragraph>
  );
}

ResultSlice.propTypes = {
  value: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired
};

export default ResultSlice;
