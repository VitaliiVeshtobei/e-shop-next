import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { instance } from '@/axios/axiosDefault';
import { getProductsByCategory } from '@/redux/products/slice';
import { selectProductsByCategory } from '@/redux/products/selectors';

import ProductsList from '@/components/ProductsList/ProductsList';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { FilterByPrice } from '@/components/FilterByPrice/FilterByPrice';
import Pagination from '@/components/ProductsList/Pagination/Pagination';
import { Button, Container, Icon } from '@/_app/producrts.styled';

export async function getServerSideProps({ query }) {
  const category = query.category;
  const response =
    category !== 'all'
      ? await instance(`/products/${category ? `list?limit=500&group_id=${category}` : 'list?limit=500'}`)
      : await instance(`/products/list?limit=500`);
  const data = response.data.products;
  const newest = data.sort((a, b) => new Date(b.date_modified).getTime() - new Date(a.date_modified).getTime());

  return {
    props: { data: newest, query },
  };
}

function Products({ data, query }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sliderValue, setSliderValue] = useState([2500, 7500]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [statusFilter, setStatusFilter] = useState(false);

  const products = useSelector(selectProductsByCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(data));
    setCurrentPage(0);
    setItemOffset(0);
  }, [data, dispatch]);

  useEffect(() => {
    let res;
    if (sliderValue[0] === sliderValue[1]) {
      res = products.filter((item) =>
        filterStatus !== ''
          ? item.price === sliderValue[0] && item.presence === filterStatus
          : item.price === sliderValue[0]
      );
    }
    if (sliderValue[0] < sliderValue[1]) {
      res = products.filter((item) =>
        filterStatus !== ''
          ? item.price >= sliderValue[0] && item.price <= sliderValue[1] && item.presence === filterStatus
          : item.price >= sliderValue[0] && item.price <= sliderValue[1]
      );
    }
    setProductsFilter(res);
  }, [filterStatus, products, sliderValue]);

  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = productsFilter.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productsFilter.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    const newOffset = (event.selected * itemsPerPage) % productsFilter.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const openFilter = () => {
    setStatusFilter(!statusFilter);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setStatusFilter(false);
    }
  };

  const handlerKeydown = (e) => {
    if (e.code === 'Escape') {
      setStatusFilter(false);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handlerKeydown);
    return () => {
      window.removeEventListener('keydown', handlerKeydown);
    };
  });

  return (
    <div onClick={handleBackdropClick}>
      <div style={{ marginBottom: '35px', marginTop: '-30px' }}>
        <FilterByPrice>
          <Button
            type="button"
            onClick={openFilter}
          >
            <Icon />
            Фільтр
          </Button>
        </FilterByPrice>
      </div>

      <Container>
        <FilterBar
          list={currentItems.length}
          statusContainerFilter={statusFilter}
          data={data}
          setSliderValue={setSliderValue}
          setFilterStatus={setFilterStatus}
        />

        <ProductsList currentItems={currentItems} />
      </Container>
      <Pagination
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Products;
