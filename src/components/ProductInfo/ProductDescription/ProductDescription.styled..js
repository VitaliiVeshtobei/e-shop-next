import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { laptop, tablet } = DEVICE;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.18;
  color: ${(p) => p.theme.colors.scndDarkText};
  margin-bottom: 8px;

  @media ${tablet} {
    font-size: 26px;
  }
`;
export const DescriptionWrap = styled.div`
  padding: 10px 16px;
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

  @media ${tablet} {
    padding: 26px 36px;
  }
`;
