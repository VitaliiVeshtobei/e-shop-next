import { useState } from 'react';
import {
  AddPhotoContainer,
  BtnAddPhoto,
  ButtonOperationContainer,
  DiscountContainer,
  Form,
  GrupContainer,
  InputFileStyled,
  OperationButton,
  UploadContainer,
  UploadLabel,
  WrapperPhoto,
} from './CreateProductAdmin.styled';
import { InputText } from './InputText/InputText';
import { BsUpload } from 'react-icons/bs';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import placeholder from '../../../../../public/images/placeholder.jpg';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';
import { InputTextarea } from './Textarea/InputTextarea';
import { OptionBtnStyled } from '../../OptionButtons/OptionButtons.styled';

export const CreateProductAdmin = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' });

  const uploadImage = (e, index) => {
    const fileList = e.target.files;

    if (!fileList.length) return;

    const newSelectedImages = Array.from(fileList).map((item) => URL.createObjectURL(item));
    const updateImages = [...selectedImages];

    if (updateImages.length > 0) {
      const total = updateImages.length + newSelectedImages.length;

      if (total > 10 || newSelectedImages.length > 10) {
        updateImages.splice(index, 1, ...newSelectedImages);
        updateImages.splice(10);
      } else {
        updateImages.splice(index, 1, ...newSelectedImages);
      }

      return setSelectedImages(updateImages);
    }

    setSelectedImages([...newSelectedImages]);
  };

  const addContainerImage = () => {
    setSelectedImages([...selectedImages, null]);
  };

  const deleteContainerImage = (index) => {
    selectedImages.splice(index, 1);
    setSelectedImages([...selectedImages]);
  };

  const onSubmit = async (data) => {
    data.images = selectedImages;
    console.log(data);
    // const formData = new FormData();
    // formData.append('name', data.text);
    // formData.append('photo', file);
    // await createCategorie(formData);
    // router.push('/admin/category');
  };

  const handleInputChange = (event) => {
    setValue(event.target.name, event.target.value, { shouldValidate: true });
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <h1>Створення карточки продукта</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Фото</h3>
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
                  <button
                    type="button"
                    onClick={() => deleteContainerImage(0)}
                  >
                    delete
                  </button>
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
                            <button
                              type="button"
                              onClick={() => deleteContainerImage(index)}
                            >
                              delete
                            </button>
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
                            <button
                              type="button"
                              onClick={() => deleteContainerImage(index)}
                            >
                              delete
                            </button>
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
        <InputText
          type="text"
          label="Категорія"
          onChange={handleInputChange}
          register={{
            ...register('category', {
              required: { value: true, message: 'Потрібно вибрати категорію' },
            }),
          }}
          error={errors.category ? true : false}
        >
          {errors?.category && <ErrorMessage text={errors.category.message} />}
        </InputText>
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
            ...register('feedback', {
              required: { value: true, message: 'Потрібно вказати опис товару' },
            }),
          }}
          error={errors.feedback ? true : false}
        >
          {errors?.feedback && <ErrorMessage text={errors.feedback.message} />}
        </InputTextarea>

        <OptionBtnStyled
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Створити
        </OptionBtnStyled>
      </Form>
    </div>
  );
};
