import styled from "styled-components";
import DEVICE from "@/constants/deviceSize";
const { tablet, laptop } = DEVICE;

export const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media ${tablet} {
    flex-direction: row;
  }
`;
