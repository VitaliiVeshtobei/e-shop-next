import { ErrorMessage } from '@/components/AuthorizationModal/AuthModals.styled';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreateCategory = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Назва категорії
        <input
          type="text"
          {...register('text', {
            required: { value: true, message: 'Потрібна назва категорії' },
            // pattern: { value: /.+@.+/, message: 'Недійсна електронна адреса' },
          })}
        />
      </label>
      {errors?.text && <ErrorMessage>{errors.text.message}</ErrorMessage>}
      <label>
        Завантаження фото
        <input type="file"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateCategory;
