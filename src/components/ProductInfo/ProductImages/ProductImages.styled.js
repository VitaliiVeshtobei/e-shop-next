import styled from 'styled-components';

export const MainImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
`;
export const DiscountPercent = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 40px;
  width: 65px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 25px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
`;
