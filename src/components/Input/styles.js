import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  text-transform: uppercase;
  display: block;
  color: ${({ theme }) => theme.colors.smokeyGrey};
  font-size: 0.875rem;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.25rem;
`;

export const Input = styled.input`
  width: 10rem;
  height: 4.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.5rem;
  font-size: 2rem;
  padding: 0.75rem 1.5rem;
  margin-top: 0.5rem;
  letter-spacing: 0.01rem;
  color: ${({ theme }) => theme.colors.offBlack};
  outline: 0;

  &:focus {
    border-color: ${({ theme }) => theme.colors.purple};
  }

  &::placeholder {
    opacity: 0.5;
  }
`;
