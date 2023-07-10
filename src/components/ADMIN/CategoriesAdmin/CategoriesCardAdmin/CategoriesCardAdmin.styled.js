import Image from 'next/image';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  p {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.44;
    color: ${(p) => p.theme.colors.scndDarkText};

    @media screen and (max-width: 420px) {
      font-size: 14px;
    }
  }
`;

export const Img = styled(Image)`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  height: 200px;
`;

export const ContainerImg = styled.div`
  width: 200px;
`;

export const Item = styled.li`
  position: relative;
  overflow: hidden;

  width: 315px;
  height: 315px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
`;

export const CheckContainer = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
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
