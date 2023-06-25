import React, { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import {
  ErrorMessage,
  FormStyled,
  InputFileStyled,
  InputTextStyled,
  LabelStyleed,
  ListPhotoStyled,
  PhotoContainer,
  TitleStyled,
  UploadLabel,
  UploadText,
} from './CreateCategory.styled';

import Image from 'next/image';
import { createCategorie } from '@/axios/axiosApi';
import { OptionBtnStyled } from '../../OptionButtons/OptionButtons.styled';
import { useRouter } from 'next/router';

export const CreateCategory = () => {
  const [file, setFile] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' });

  const uploadImage = (e) => {
    const fileList = e.target.files;
    if (fileList.length > 0) {
      setFile(fileList[0]);

      setSelectedImages([URL.createObjectURL(fileList[0])]);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.text);
    formData.append('photo', file);
    await createCategorie(formData);
    router.push('/admin/category');
  };

  return (
    <>
      <TitleStyled>Нова категорія</TitleStyled>
      <FormStyled
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <LabelStyleed>
          Назва категорії
          <InputTextStyled
            type="text"
            {...register('text', {
              required: { value: true, message: 'Потрібна назва категорії' },
            })}
          />
          {errors?.text && <ErrorMessage>{errors.text.message}</ErrorMessage>}
        </LabelStyleed>

        <PhotoContainer>
          <label>Фото</label>

          <UploadLabel>
            <BsUpload />
            <UploadText>Завантажити</UploadText>
            <InputFileStyled
              accept="image/*"
              multiple
              type="file"
              onChange={uploadImage}
            />
          </UploadLabel>
          {selectedImages.length ? (
            <ListPhotoStyled>
              {selectedImages.map((image) => (
                <li
                  key={image}
                  onClick={() => deleteImage(image)}
                >
                  <Image
                    src={image}
                    alt="photo"
                    width={200}
                    height={200}
                  />
                </li>
              ))}
            </ListPhotoStyled>
          ) : (
            <p>Не має фото</p>
          )}
        </PhotoContainer>

        <OptionBtnStyled
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Створити
        </OptionBtnStyled>
      </FormStyled>
    </>
  );
};
