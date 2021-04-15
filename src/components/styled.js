import styled from 'styled-components'

export const Button = styled.button`
  width: 50%;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  color: white;

  &:active {
    background-color: coral;
  }

  &:hover {
    height: 60px;
  }
`
