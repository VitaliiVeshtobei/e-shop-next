import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 40px;
  @media screen and (min-width: 970px) {
    position: absolute;
    width: 350px;
    right: 30px;
    top: 550px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${(p) => p.theme.colors.scndDarkText};
`;
export const Price = styled.p`
  font-weight: 600;
`;
export const Product = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 12px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${(p) => p.theme.colors.border};
      bottom: 0;
    }
  }
  img {
    margin-right: 5px;
  }
  div {
    overflow: hidden;
  }
`;
export const ProductName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  white-space: nowrap;
  margin-bottom: 8px;
`;
export const ProductPrice = styled.p`
  font-size: 14px;
`;
export const ProductQuantity = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
`;
