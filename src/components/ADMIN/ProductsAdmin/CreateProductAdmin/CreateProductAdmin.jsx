import { useState } from 'react';
import { InputFileStyled, UploadContainer, UploadLabel, UploadText, WrapperPhoto } from './CreateProductAdmin.styled';
import { InputText } from './InputText/InputText';
import { Form } from './InputText/InputText.styled';
import { BsUpload } from 'react-icons/bs';
import placeholder from '../../../../../public/images/placeholder.jpg';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';

export const CreateProductAdmin = () => {
  const [selectedImages, setSelectedImages] = useState([null, null, null, null, null]);

  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' });

  const uploadImage = (e) => {
    const fileList = e.target.files;

    const newSelectedImages = [...selectedImages];
    if (fileList.length > 0) {
      const index = Number(e.target.id.split('-')[1]) - 1;
      if (newSelectedImages[index]) {
        URL.revokeObjectURL(newSelectedImages[index]);
      }
      newSelectedImages.splice(index, 1, URL.createObjectURL(fileList[0]));
      setSelectedImages(newSelectedImages);
    }
  };

  return (
    <div>
      <h1>Створення карточки продукта</h1>
      <Form>
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Фото</h3>
          <WrapperPhoto>
            <UploadContainer>
              <UploadLabel backgroundImage={selectedImages[0] ? selectedImages[0] : placeholder}>
                <BsUpload />
                <UploadText>{selectedImages[0] ? 'Змінити головне фото' : 'Завантажити головне фото'} </UploadText>
                <InputFileStyled
                  id="image-1"
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </UploadLabel>
            </UploadContainer>
            <UploadContainer>
              <UploadLabel backgroundImage={selectedImages[1] ? selectedImages[1] : placeholder}>
                <BsUpload />
                <UploadText>{selectedImages[1] ? 'Змінити' : 'Завантажити'}</UploadText>
                <InputFileStyled
                  id="image-2"
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </UploadLabel>
            </UploadContainer>
            <UploadContainer>
              <UploadLabel backgroundImage={selectedImages[2] ? selectedImages[2] : placeholder}>
                <BsUpload />
                <UploadText>{selectedImages[2] ? 'Змінити' : 'Завантажити'}</UploadText>
                <InputFileStyled
                  id="image-3"
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </UploadLabel>
            </UploadContainer>
            <UploadContainer>
              <UploadLabel backgroundImage={selectedImages[3] ? selectedImages[3] : placeholder}>
                <BsUpload />
                <UploadText>{selectedImages[3] ? 'Змінити' : 'Завантажити'}</UploadText>
                <InputFileStyled
                  id="image-4"
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </UploadLabel>
            </UploadContainer>
            <UploadContainer>
              <UploadLabel backgroundImage={selectedImages[4] ? selectedImages[4] : placeholder}>
                <BsUpload />
                <UploadText>{selectedImages[4] ? 'Змінити' : 'Завантажити'}</UploadText>
                <InputFileStyled
                  id="image-5"
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </UploadLabel>
            </UploadContainer>
          </WrapperPhoto>
        </div>

        <InputText
          type="text"
          label="Назва"
          register={{
            ...register('name', {
              required: { value: true, message: 'Потрібна назва товара' },
            }),
          }}
          error={errors.name ? true : false}
        >
          {errors?.name && <ErrorMessage text={errors.name.message} />}
        </InputText>
        <InputText
          type="number"
          label="Кількість"
          register={{
            ...register('number', {
              required: { value: true, message: 'Потрібна кількість товарів' },
            }),
          }}
          error={errors.number ? true : false}
        >
          {errors?.number && <ErrorMessage text={errors.number.message} />}
        </InputText>
        <InputText
          type="text"
          label="Категорія"
          register={{
            ...register('category', {
              required: { value: true, message: 'Потрібно вибрати категорію' },
            }),
          }}
          error={errors.category ? true : false}
        >
          {errors?.category && <ErrorMessage text={errors.category.message} />}
        </InputText>
        <InputText
          type="number"
          label="Ціна"
          register={{
            ...register('price', {
              required: { value: true, message: 'Потрібно вказати ціну товара' },
            }),
          }}
          error={errors.price ? true : false}
        >
          {errors?.price && <ErrorMessage text={errors.price.message} />}
        </InputText>
        <InputText
          type="text"
          label="Артикул"
          register={{
            ...register('sku', {
              required: { value: true, message: 'Потрібно вказати артикул товару' },
            }),
          }}
          error={errors.sku ? true : false}
        >
          {errors?.sku && <ErrorMessage text={errors.sku.message} />}
        </InputText>
        <InputText
          type="number"
          label="Знижка"
          register={{
            ...register('discount', {
              required: { value: true, message: 'Потрібно вказати знижку товара' },
            }),
          }}
          error={errors.discount ? true : false}
        >
          {errors?.discount && <ErrorMessage text={errors.discount.message} />}
        </InputText>
        <InputText
          type="datetime-local"
          label="Знижка діє до"
          register={{
            ...register('datetime', {
              required: { value: true, message: 'Потрібно вказати дату дії знижки' },
            }),
          }}
          error={errors.datetime ? true : false}
        >
          {errors?.datetime && <ErrorMessage text={errors.datetime.message} />}
        </InputText>
      </Form>
    </div>
  );
};
