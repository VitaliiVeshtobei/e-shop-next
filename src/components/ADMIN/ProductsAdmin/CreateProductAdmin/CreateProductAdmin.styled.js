import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: calc(100% - 20px);
  border-radius: 5px;
  cursor: pointer;
  background-color: #a8a8a8;
  background-image: ${(props) =>
    `url(${props.backgroundImage?.src ? props.backgroundImage?.src : props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  ${(props) => console.log(props.backgroundImage?.src)}
`;

export const UploadText = styled.p`
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
  justify-content: center;
  gap: 20px;
  aspect-ratio: 5 / 1;
  overflow: hidden;
`;

export const UploadContainer = styled.div`
  flex: 1;
`;
