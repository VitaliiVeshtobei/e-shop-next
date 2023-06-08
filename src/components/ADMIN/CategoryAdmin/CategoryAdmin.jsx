import React, { useEffect, useState } from 'react';
import { CreateBtnStyled, TableStyled, OptionBtnStyled, ListButtonsStyled } from './CategoryAdmin.styled';
import { useRouter } from 'next/router';
import { getCategories } from '@/axios/axiosApi';
import Image from 'next/image';

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchCategories();
  }, []);
  const router = useRouter();
  return (
    <>
      <CreateBtnStyled
        type="button"
        onClick={() => router.push('category/create')}
      >
        Створити категорію
      </CreateBtnStyled>
      <TableStyled>
        <thead>
          <tr>
            <td>Назва категорії</td>
            <td>Фото</td>
            <td>Налаштування</td>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.name}>
              <td>{category.name}</td>
              <td>
                <Image
                  src={category.image}
                  alt="Image"
                  width={100}
                  height={100}
                />
              </td>
              <td>
                <ListButtonsStyled>
                  <li>
                    <OptionBtnStyled type="button">Редагувати</OptionBtnStyled>
                  </li>
                  <li>
                    <OptionBtnStyled type="button">Видалити</OptionBtnStyled>
                  </li>
                </ListButtonsStyled>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </>
  );
};

export default CategoryAdmin;
