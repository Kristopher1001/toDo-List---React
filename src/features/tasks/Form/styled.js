import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  width: 100%;
`;

export const Newtaskbutton = styled.button`
  padding: 10px;
  background-color: rgb(60, 133, 133);
  color: white;
  border: none;
  transition: 1s;

  &:hover {
    background: rgb(78, 163, 163);
    transform: scale(1.2);
    cursor: pointer;
  }

  &:active {
    background: rgb(94, 174, 174);
  }
`;
