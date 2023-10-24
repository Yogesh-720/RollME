import styled from "styled-components";

export const Button = styled.button`
width: 220px;
padding: 10px 18px;
border-radius: 5px;
background: #000;
font-size: 16;
font-weight: 600;
color: white;
border: 1px solid transparent;
transition: 0.2s ease-in-out;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s ease-in-out;
}
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
