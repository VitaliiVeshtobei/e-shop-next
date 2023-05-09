import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { instance } from '@/axios/axiosDefault';
import { getProductInfo } from '@/redux/products/slice';
import ProductInfo from '@/components/ProductInfo/ProductInfo';
import { setRecentlyViewed } from '@/localStorage/localStorage';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await instance(`/products/${id}`);
  const data = res.data.product;
  return {
    props: { data },
  };
}

const Product = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setRecentlyViewed(data);
    dispatch(getProductInfo(data));
  }, [data, dispatch]);

  return <ProductInfo />;
};

export default Product;
