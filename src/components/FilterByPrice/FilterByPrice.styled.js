import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
`;
export const ListBtn = styled("ul")`
  display: flex;
  background-color: #d4dde1;
  border: 1px solid #b6b6b6;
  border-radius: 8px;
`;
export const BtnStyled = styled("button")`
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  background-color: #d4dde1;
  color: rgba(98, 148, 148, 0.85);
  cursor: pointer;
  &:hover,
  &:active {
    background-color: rgba(98, 148, 148, 0.85);
    color: #ffffff;
  }
`;
