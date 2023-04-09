import { useState } from "react";

import { useSelector } from "react-redux";

import ProductCard from "./ProductCard/ProductCard";
import { selectProductsByCategory } from "@/redux/products/selectors";

import { List, Item, Pagination, Container } from "./ProductsList.styled";

const ProductsList = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const products = useSelector(selectProductsByCategory);
  const itemsPerPage = 20;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  console.log(pageCount);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <List>
        {currentItems?.map((item) => (
          <Item key={item.id}>
            <ProductCard
              id={item.id}
              image={item.main_image}
              article={item.sku}
              name={item.name_multilang.uk}
              price={item.price}
              status={item.in_stock}
              discount={item.discount}
            />
          </Item>
        ))}
      </List>
      {pageCount > 1 && (
        <Pagination
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="Pagination"
        />
      )}
    </Container>
  );
};

export default ProductsList;
