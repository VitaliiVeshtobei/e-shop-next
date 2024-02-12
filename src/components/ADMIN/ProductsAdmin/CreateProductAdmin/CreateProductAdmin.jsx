import { useState } from 'react';
import {
  AddPhotoContainer,
  BtnDelete,
  BtnAddPhoto,
  ButtonOperationContainer,
  Form,
  GrupContainer,
  InputFileStyled,
  OperationButton,
  UploadContainer,
  UploadLabel,
  WrapperPhoto,
} from './CreateProductAdmin.styled';
import { InputText } from '../../common/InputText/InputText';
import { BsUpload } from 'react-icons/bs';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import placeholder from '../../../../../public/images/placeholder.jpg';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';
import { InputTextarea } from '../../common/Textarea/InputTextarea';
import { OptionBtnStyled } from '../../OptionButtons/OptionButtons.styled';
import { SelectComponent } from '../../common/SelectComponent/SelectComponent';
import { createProduct } from '@/axios/axiosApi';
import { useRouter } from 'next/router';

export const CreateProductAdmin = ({ categories }) => {
  const [files, setFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const uploadImage = (e, index) => {
    const fileList = e.target.files;

    if (!fileList.length) return;

    const newSelectedImages = Array.from(fileList).map((item) => URL.createObjectURL(item));
    const updateImages = [...selectedImages];
    const updatedFiles = [...files];

    if (updateImages.length > 0) {
      const total = updateImages.length + newSelectedImages.length;

      if (total > 10 || newSelectedImages.length > 10) {
        updateImages.splice(index, 1, ...newSelectedImages);
        updateImages.splice(10);
        updatedFiles.splice(index, 1, ...fileList);
        updatedFiles.splice(10);
      } else {
        updateImages.splice(index, 1, ...newSelectedImages);
        updatedFiles.splice(index, 1, ...fileList);
      }
      setSelectedImages(updateImages);
      setFiles(updatedFiles);
      return;
    }
    setFiles([...fileList]);
    setSelectedImages([...newSelectedImages]);
  };

  const addContainerImage = () => {
    setSelectedImages([...selectedImages, null]);
    setFiles([...files, null]);
  };

  const deleteContainerImage = (index) => {
    if (selectedImages[index + 1] === null && index === 0) {
      selectedImages.splice(index, 2);
      files.splice(index, 2);
    } else {
      selectedImages.splice(index, 1);
      files.splice(index, 1);
    }

    setSelectedImages([...selectedImages]);
    setFiles([...files]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    const idCategory = categories.find((c) => c.name === data.category);
    formData.append('name', data.name);
    formData.append('price', Number(data.price));
    formData.append('discount', Number(data.discount));
    formData.append('currency', 'грн');
    formData.append('sku', data.sku);
    files.forEach((file) => {
      formData.append('photos', file);
    });
    formData.append('description', data.description);
    formData.append('in_stock', data.number ? 'В наявності' : 'Не має в наявності');
    formData.append('quantity_in_stock', data.number);
    formData.append('category', idCategory._id);
    await createProduct(formData);
    router.push('/admin/products');
  };

  const handleInputChange = (event) => {
    if (event.target.localName === 'option') {
      setValue(event.target.name, event.target.id, { shouldValidate: true });
    } else {
      setValue(event.target.name, event.target.value, { shouldValidate: true });
    }
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <h1>Створення карточки продукта</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div>
          <WrapperPhoto>
            <UploadContainer style={{ minWidth: '360px', height: '360px' }}>
              <UploadLabel backgroundImage={selectedImages[0] ? selectedImages[0] : placeholder}>
                <BsUpload />
                <InputFileStyled
                  id="image-0"
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => uploadImage(e, 0)}
                />
              </UploadLabel>
              <ButtonOperationContainer>
                {selectedImages[0] !== null && selectedImages[0] !== undefined && (
                  <BtnDelete
                    type="button"
                    onClick={() => deleteContainerImage(0)}
                  >
                    Видалити
                  </BtnDelete>
                )}
                <label htmlFor="image-0">
                  <OperationButton>
                    {selectedImages[0] ? 'Змінити головне фото' : 'Завантажити головне фото'}
                  </OperationButton>
                </label>
              </ButtonOperationContainer>
            </UploadContainer>
            {selectedImages && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, width: '1230px' }}>
                {selectedImages &&
                  selectedImages.map((item, index) => {
                    if (index !== 0) {
                      return (
                        <UploadContainer
                          style={{ width: '170px', height: '170px' }}
                          key={item}
                        >
                          <UploadLabel backgroundImage={item ? item : placeholder}>
                            <BsUpload />
                            <InputFileStyled
                              id={`image-${index}`}
                              accept="image/*"
                              multiple
                              type="file"
                              onChange={(e) => uploadImage(e, index)}
                            />
                          </UploadLabel>
                          <ButtonOperationContainer>
                            <BtnDelete
                              type="button"
                              onClick={() => deleteContainerImage(index)}
                            >
                              Видалити
                            </BtnDelete>
                            <label htmlFor={`image-${index}`}>
                              <OperationButton type="button">{item ? 'Змінити' : 'Завантажити'}</OperationButton>
                            </label>
                          </ButtonOperationContainer>
                        </UploadContainer>
                      );
                    } else if (item === null) {
                      return (
                        <UploadContainer key={index}>
                          <UploadLabel backgroundImage={item ? item : placeholder}>
                            <BsUpload />

                            <InputFileStyled
                              id={`image-${index}`}
                              accept="image/*"
                              multiple
                              type="file"
                              onChange={(e) => uploadImage(e, index)}
                            />
                          </UploadLabel>
                          <ButtonOperationContainer>
                            <BtnDelete
                              type="button"
                              onClick={() => deleteContainerImage(index)}
                            >
                              Видалити
                            </BtnDelete>
                            <label htmlFor={`image-${index}`}>
                              <OperationButton type="button">{item ? 'Змінити' : 'Завантажити'}</OperationButton>
                            </label>
                          </ButtonOperationContainer>
                        </UploadContainer>
                      );
                    }
                  })}

                <AddPhotoContainer
                  status={
                    selectedImages &&
                    selectedImages[selectedImages.length - 1] !== null &&
                    selectedImages[selectedImages.length - 1] !== undefined &&
                    selectedImages.length < 10
                  }
                >
                  <BtnAddPhoto
                    type="button"
                    onClick={addContainerImage}
                  >
                    <MdOutlineAddPhotoAlternate />
                  </BtnAddPhoto>
                </AddPhotoContainer>
              </div>
            )}
          </WrapperPhoto>
        </div>

        <InputText
          type="text"
          label="Назва"
          onChange={handleInputChange}
          register={{
            ...register('name', {
              required: { value: true, message: 'Потрібна назва товара' },
            }),
          }}
          error={errors.name ? true : false}
        >
          {errors?.name && <ErrorMessage text={errors.name.message} />}
        </InputText>
        <SelectComponent
          type="text"
          label="Категорія"
          list={categories}
          onChange={handleInputChange}
          register={{
            ...register('category', {
              required: { value: true, message: 'Потрібно вибрати категорію' },
            }),
          }}
          error={errors.category ? true : false}
        >
          {errors?.category && <ErrorMessage text={errors.category.message} />}
        </SelectComponent>
        <GrupContainer>
          <InputText
            type="number"
            label="Кількість"
            onChange={handleInputChange}
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
            type="number"
            label="Ціна"
            onChange={handleInputChange}
            register={{
              ...register('price', {
                required: { value: true, message: 'Потрібно вказати ціну товара' },
              }),
            }}
            error={errors.price ? true : false}
          >
            {errors?.price && <ErrorMessage text={errors.price.message} />}
          </InputText>
        </GrupContainer>
        <InputText
          type="text"
          label="Артикул"
          onChange={handleInputChange}
          register={{
            ...register('sku', {
              required: { value: true, message: 'Потрібно вказати артикул товару' },
            }),
          }}
          error={errors.sku ? true : false}
        >
          {errors?.sku && <ErrorMessage text={errors.sku.message} />}
        </InputText>
        <GrupContainer>
          <InputText
            type="number"
            label="Знижка"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            register={{
              ...register('datetime', {
                required: { value: true, message: 'Потрібно вказати дату дії знижки' },
              }),
            }}
            error={errors.datetime ? true : false}
          >
            {errors?.datetime && <ErrorMessage text={errors.datetime.message} />}
          </InputText>
        </GrupContainer>
        <InputTextarea
          label="Опис товару"
          onChange={handleInputChange}
          register={{
            ...register('description', {
              required: { value: true, message: 'Потрібно вказати опис товару' },
            }),
          }}
          error={errors.description ? true : false}
        >
          {errors?.description && <ErrorMessage text={errors.description.message} />}
        </InputTextarea>

        <OptionBtnStyled
          type="submit"
          disabled={!isValid || selectedImages.length === 0}
        >
          Створити
        </OptionBtnStyled>
      </Form>
    </div>
  );
};
