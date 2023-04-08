import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { instance } from "@/axios/axiosDefault";
import { getProductsByCategory } from "@/redux/products/slice";

import ProductsList from "@/components/ProductsList/ProductsList";
import { FilterBar } from "@/components/FilterBar/FilterBar";


import { Container } from "./Products.styled";

import { FilterByPrice } from "@/components/FilterByPrice/FilterByPrice";


export async function getServerSideProps({ query }) {
  const category = query.category;
  const response = await instance(
    `/products/${
      category ? `list?limit=500&group_id=${category}` : "list?limit=500"
    }`
  );
  const data = response.data.products;

  return {
    props: { data, query },
  };
}

function Products({ data, query }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(data));
  }, [data, dispatch]);

  return (
<FilterByPrice />
    <Container>
      <FilterBar />
      <ProductsList />
    </Container>

  );
}

export default Products;
