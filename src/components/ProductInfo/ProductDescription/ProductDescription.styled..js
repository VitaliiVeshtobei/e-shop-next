import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.18;
  color: ${(p) => p.theme.colors.scndDarkText};
  margin-bottom: 8px;
`;
export const DescriptionWrap = styled.div`
  padding: 26px 36px;
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  color: ${(p) => p.theme.colors.darkText};
`;
