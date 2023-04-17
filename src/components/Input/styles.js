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

  &.error {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Input = styled.input`
  width: 10rem;
  height: 4.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.5rem;
  font-size: 2rem;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0;
  letter-spacing: 0.01rem;
  color: ${({ theme }) => theme.colors.offBlack};
  outline: 0;

  &.error {
    border-color: ${({ theme }) => theme.colors.red};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.purple};
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.875rem;
`;
