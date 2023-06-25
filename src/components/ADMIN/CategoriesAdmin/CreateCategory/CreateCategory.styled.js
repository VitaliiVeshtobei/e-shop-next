import styled from 'styled-components';

export const TitleStyled = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const LabelStyleed = styled.label``;
export const InputTextStyled = styled.input`
  margin-left: 8px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #a8a8a8;
`;

export const UploadText = styled.p`
  font-size: 12px;
`;

export const InputFileStyled = styled.input`
  display: none;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
`;

export const ListPhotoStyled = styled.ul`
  display: flex;
  gap: 24px;
`;
