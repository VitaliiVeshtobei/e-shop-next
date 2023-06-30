import React from 'react';
import {
  BackdropDeleteModalAdmin,
  ButtonsContainerDeleteModal,
  DeleteModalContainerAdmin,
  TextDeleteModalAdmin,
  DeleteModalAdminBtnStyled,
} from './DeleteModalAdmin.styled';

export const DeleteModalAdmin = ({ text, deleteFunction, close }) => {
  return (
    <BackdropDeleteModalAdmin>
      <DeleteModalContainerAdmin>
        <TextDeleteModalAdmin>{text}</TextDeleteModalAdmin>
        <ButtonsContainerDeleteModal>
          <DeleteModalAdminBtnStyled
            type="button"
            onClick={close}
          >
            Ні
          </DeleteModalAdminBtnStyled>
          <DeleteModalAdminBtnStyled
            type="button"
            onClick={deleteFunction}
          >
            Так
          </DeleteModalAdminBtnStyled>
        </ButtonsContainerDeleteModal>
      </DeleteModalContainerAdmin>
    </BackdropDeleteModalAdmin>
  );
};
