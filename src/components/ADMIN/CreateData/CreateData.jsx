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
} from './CreateData.styled';
import { OptionBtnStyled } from '../MainContent/ListButtons/ListButtons.styled';
import Image from 'next/image';
import { createCategorie } from '@/axios/axiosApi';

export const CreateData = () => {
  // const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' });

  const uploadImage = (e) => {
    const fileList = e.target.files;
    if (fileList.length > 0) {
      // const filesArray = Array.from(fileList);
      // setFiles(filesArray);
      setFile(fileList[0]);
      // const fileUrls = filesArray.map((file) => URL.createObjectURL(file));
      setSelectedImages((prev) => [...prev, URL.createObjectURL(fileList[0])]);
    }
  };

  const deleteImage = (image) => {
    // const selectedImagesFiltred = selectedImages.filter((item) => item !== image);
    // setSelectedImages(selectedImagesFiltred);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   formData.append('photos', files[i]);
    // }
    formData.append('name', data.text);
    formData.append('photo', file);
    await createCategorie(formData);
  };
  // console.log(file);
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
              // pattern: { value: /.+@.+/, message: 'Недійсна електронна адреса' },
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
                    width={100}
                    height={100}
                  />
                </li>
              ))}
            </ListPhotoStyled>
          ) : (
            <p>Не має фото</p>
          )}
        </PhotoContainer>

        <OptionBtnStyled type="submit">Створити</OptionBtnStyled>
      </FormStyled>
    </>
  );
};
