import styled from 'styled-components';
import { theme } from '../../../../../public/theme/theme';

export const Wrapper = styled.header`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  /* padding: 20px; */
`;
export const Div = styled.div`
  display: flex;
  gap: 20px;

  p {
    font-size: 20px;
    color: ${(p) => p.theme.colors.accent};
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      color: ${(p) => p.theme.colors.smoke};
    }
  }
`;
