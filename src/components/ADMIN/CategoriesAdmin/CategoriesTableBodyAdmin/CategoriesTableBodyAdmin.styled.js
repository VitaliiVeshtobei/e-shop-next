import Image from 'next/image';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const TrStyled = styled.tr`
  td {
    text-align: center;
  }
  td:first-child {
    position: relative;
  }
`;

export const CheckContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
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

export const Img = styled(Image)`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
`;

export const ContainerImg = styled.div`
  width: 100px;
  margin: 0 auto;
`;
