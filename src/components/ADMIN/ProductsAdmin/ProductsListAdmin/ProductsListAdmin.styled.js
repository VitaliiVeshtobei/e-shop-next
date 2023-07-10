import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  width: 300px;
  height: 400px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
`;

export const CheckContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  transform: translate(-50%, -50%);
  border: 1px solid #a8a8a8;
  margin: 0 auto;
  width: 24px;
  height: 24px;
  background-color: ${({ checked }) => (checked ? '#335252' : '')};
`;

export const InputCheckStyled = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const AiOutlineCheckStyled = styled(AiOutlineCheck)`
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  fill: ${({ theme }) => theme.colors.accent};
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
