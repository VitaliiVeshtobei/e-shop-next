import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  /* height: calc(100% - 20px); */
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  background-color: #a8a8a8;
  background-image: ${(props) =>
    `url(${props.backgroundImage?.src ? props.backgroundImage?.src : props.backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

export const ButtonOperationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const OperationButton = styled.p`
  font-size: 10px;
  text-align: center;
  @media ${DEVICE.version} {
    font-size: 14px;
  }
`;

export const InputFileStyled = styled.input`
  display: none;
`;

export const WrapperPhoto = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  /* aspect-ratio: 5 / 1; */
  /* overflow: hidden; */
  height: 520px;
`;

export const UploadContainer = styled.div`
  /* min-width: 300px;
  height: 300px; */
  /* flex: 1; */
`;

export const BtnAddPhoto = styled.button`
  cursor: pointer;

  svg {
    width: 80px;
    height: 80px;
  }
`;
