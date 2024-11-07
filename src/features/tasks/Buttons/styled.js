import styled from "styled-components";

export const Position = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Buttontoggle = styled.button`
  padding: 10px;
  background-color: rgb(60, 133, 133);
  color: white;
  border: none;
  transition: 1s;
  margin: 7px;
  width: 250px;

  &:hover {
    background: rgb(78, 163, 163);
    cursor: pointer;
  }

  &:active {
    background: rgb(94, 174, 174);
  }

  &:disabled {
    background: rgb(89, 88, 88);
    color: rgb(191, 190, 190);
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 5px 20px 5px 20px;
    border: none;
  }
`;

export const Buttonhide = styled(Buttontoggle)`
&:disabled {
    padding: 10px;
    background-color: rgb(60, 133, 133);
    color: white;
    border: none;
    transition: 1s;
    margin: 7px;
    width: 250px;
}
`;
