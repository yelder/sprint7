import styled from 'styled-components'

export const Button = styled.button`
  width: 50%;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-weight: bold;

  &:active {
    background-color: coral;
  }

  &:hover {
    height: 60px;
  }
`
