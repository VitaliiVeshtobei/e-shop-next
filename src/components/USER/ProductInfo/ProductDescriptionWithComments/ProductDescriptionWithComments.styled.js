import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { laptop, tablet } = DEVICE;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
export const TitleButton = styled.button`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.18;

  color: ${(p) => (!p.activeBtn ? p.theme.colors.scndDarkText : p.theme.colors.accent)};
  margin-bottom: 8px;
  cursor: pointer;

  @media ${tablet} {
    font-size: 26px;
  }
`;
export const Wrapper = styled.div`
  padding: 10px 16px;
  min-height: 400px;
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  color: ${(p) => p.theme.colors.darkText};

  p {
    font-size: 14px;
    @media ${tablet} {
      font-size: 16px;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  iframe {
    margin-top: 15px;
    width: 250px;
    height: 150px;

    @media screen and (min-width: 410px) {
      width: 350px;
      height: 200px;
    }
    @media ${tablet} {
      width: 650px;
      height: 350px;
    }
  }

  @media ${tablet} {
    padding: 26px 36px;
  }
`;
