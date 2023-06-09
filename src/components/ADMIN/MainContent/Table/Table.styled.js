import Image from 'next/image';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const TableStyled = styled.table`
  margin-top: 12px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const TdStyled = styled.td`
  padding: 5px;
  border: 0.5px solid #a8a8a8;
`;

export const ImageStyled = styled(Image)`
  /* margin: 0 auto; */
`;
export const CheckContainer = styled.div`
  position: relative;
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
