import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { tablet } = DEVICE;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${tablet} {
    flex-direction: row;
  }
`;
