import styled from 'styled-components';

export const Wrap = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 8px;
  padding: 15px;
  @media screen and (min-width: 970px) {
    height: 250px;
    width: 350px;
    margin-left: 10px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
`;
export const List = styled.ul``;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const Text = styled.p`
  font-weight: 600;
`;
export const Details = styled.p``;
export const Btn = styled.button`
  width: 100%;
  background-color: ${(p) => p.theme.colors.smoke};
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color ${(p) => p.theme.transition};

  font-size: 14px;
  margin-top: 14px;
  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;
