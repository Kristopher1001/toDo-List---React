import styled, { css } from "styled-components";

export const Buttontoggledone = styled.button`
  background-color: rgb(35, 171, 35);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  padding: 0;

  &:hover {
    background: hsl(127, 79%, 54%);
    cursor: pointer;
  }

  &:active {
    background: rgb(43, 235, 107);
  }
`;

export const Buttonremove = styled.button`
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  padding: 0;
  background: hsl(348, 83%, 47%);

  &:hover {
    background: hsl(348, 88%, 65%);
    cursor: pointer;
  }

  &:active {
    background: hsl(348, 90%, 66%);
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Listitem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid grey;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
