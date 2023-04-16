import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const Button = styled.button`
  width: 6rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.purple};
  border: none;
  border-radius: 50%;
  transition: all 100ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.offBlack};
  }

  &::before {
    content: '';
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    position: absolute;
    width: calc(100% - 6rem);
    top: 50%;
    left: 0;
  }
`;
