import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 100%;
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  background-color: #a8a8a8;
  background-image: ${(props) =>
    `url(${props.backgroundImage?.src ? props.backgroundImage?.src : props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  transition: all ${(p) => p.theme.transition};

  :hover {
    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const ButtonOperationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OperationButton = styled.p`
  font-size: 10px;
  text-align: center;
  cursor: pointer;
  transition: all ${(p) => p.theme.transition};

  :hover {
    color: ${(p) => p.theme.colors.accent};
  }

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
  margin-bottom: 20px;
`;

export const UploadContainer = styled.div`
  /* min-width: 300px;
  height: 300px; */
  /* flex: 1; */
`;
export const GrupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

export const AddPhotoContainer = styled.div`
  display: ${(p) => (p.status ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
`;

export const BtnAddPhoto = styled.button`
  cursor: pointer;

  svg {
    width: 80px;
    height: 80px;
  }
`;

export const BtnDelete = styled.button`
  cursor: pointer;
  transition: all ${(p) => p.theme.transition};
  :hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
