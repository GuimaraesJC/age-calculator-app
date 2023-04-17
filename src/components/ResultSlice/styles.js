import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 6.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.offBlack};
  line-height: 7.125rem;
  letter-spacing: -0.02rem;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;
