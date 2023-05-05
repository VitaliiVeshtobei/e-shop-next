import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const Container = styled.div`
  @media ${tablet} {
    display: flex;
    justify-content: space-evenly;
  }
`;
export const Name = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: ${(p) => p.theme.colors.darkText};
  @media ${tablet} {
    margin-bottom: 70px;
  }
`;
export const Info = styled.div`
  margin-bottom: 20px;
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.scndDarkText};
  @media ${tablet} {
    font-size: 22px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.darkText};
  @media ${tablet} {
    font-size: 22px;
  }
`;
export const Phone = styled.a`
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.accent};
  transition: color ${(p) => p.theme.transition};
  @media ${tablet} {
    font-size: 22px;
  }

  &:hover {
    color: ${(p) => p.theme.colors.waiting};
  }
`;
export const Map = styled.div`
  height: 250px;
  margin-top: 20px;
  @media ${tablet} {
    margin-top: 0;
    margin-left: 20px;
    height: 100%;
    min-width: 400px;
  }
  @media ${laptop} {
    min-width: 700px;
    min-height: 500px;
  }
`;
