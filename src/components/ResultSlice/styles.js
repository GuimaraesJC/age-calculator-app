import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 6.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.offBlack};
  line-height: 110%;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;
