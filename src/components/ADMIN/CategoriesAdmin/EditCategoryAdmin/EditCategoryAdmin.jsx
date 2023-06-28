import React, { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import Image from 'next/image';
import { OptionBtnStyled } from '../../OptionButtons/OptionButtons.styled';
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
} from './EditCategoryAdmin.styled';
import { useForm } from 'react-hook-form';
import { updateCategory } from '@/axios/axiosApi';
import { useRouter } from 'next/router';

export const EditCategoryAdmin = ({ category }) => {
  const [file, setFile] = useState(null);
  const [selectedImages, setSelectedImages] = useState([category.image]);

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' });

  const uploadImage = (e) => {
    console.log(e);
    const fileList = e.target.files;
    if (fileList.length > 0) {
      setFile(fileList[0]);

      setSelectedImages([URL.createObjectURL(fileList[0])]);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    if (!data.text) {
      formData.append('name', category.name);
    } else {
      formData.append('name', data.text);
    }

    formData.append('photo', file);

    await updateCategory(category._id, formData);
    router.push('/admin/category');
  };

  return (
    <>
      <TitleStyled>Редагувати категорію</TitleStyled>
      <FormStyled
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <LabelStyleed>
          Назва категорії
          <InputTextStyled
            defaultValue={category.name}
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
              {...register('file', {
                onChange: uploadImage,
                // required: { value: true, message: 'Потрібно завантажити файл' },
              })}
            />
            {/* {errors?.file && <ErrorMessage>{errors.file.message}</ErrorMessage>} */}
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
          Оновити
        </OptionBtnStyled>
      </FormStyled>
    </>
  );
};
