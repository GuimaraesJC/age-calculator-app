import styled from 'styled-components';

export const Container = styled.div`
  width: 52.5rem;
  height: 40.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem 1.5rem 12.5rem 1.5rem;
  padding: 3.5rem;
`;

export const InputsContainer = styled.header`
  display: flex;
  gap: 2rem;
`;

export const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
