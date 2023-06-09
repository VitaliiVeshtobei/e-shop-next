import { getCategories } from '@/axios/axiosApi';

import { MainContent } from '@/components/ADMIN/MainContent/MainContent';
import React, { useEffect, useState } from 'react';

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchCategories();
  }, []);
  return <MainContent data={categories} />;
};

export default Category;
