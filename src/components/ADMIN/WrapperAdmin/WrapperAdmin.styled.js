import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.scndDarkText};
`;

export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  min-height: 100%;
  min-width: 100%;
`;

export const Section = styled.section`
  position: relative;
  display: grid;
  box-sizing: border-box;
  gap: 10px;
  height: calc(100vh - 86px);
  overflow: hidden;

  @media ${DEVICE.tablet} {
    grid-template-columns: 250px 1fr;
  }
`;

export const Div = styled.div`
  overflow: auto;
  background-color: ${(p) => p.theme.colors.navbar};
  padding: 10px;
`;
