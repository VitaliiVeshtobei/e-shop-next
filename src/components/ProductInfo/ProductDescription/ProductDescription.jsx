import { useSelector } from 'react-redux';
import { selectProductInfo } from '@/redux/products/selectors';
import { Container, Title, Description, DescriptionWrap } from './ProductDescription.styled.';
import { useEffect, useState } from 'react';
const ProductDescription = () => {
  const [description, setDescription] = useState('');
  const { description_multilang } = useSelector(selectProductInfo);

  useEffect(() => {
    setDescription(description_multilang);
  }, [description_multilang]);

  const paragraphs = description?.uk?.split('<p>');
  const listItems = paragraphs?.filter((p) => p.startsWith('<ul>')).map((p) => p.split('</li>'));

  return (
    <Container>
      <Title>Опис</Title>
      <DescriptionWrap>
        {paragraphs?.map((p, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}

        {listItems?.length > 0 && (
          <ul>
            {listItems[0].map((li, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
        )}
      </DescriptionWrap>
    </Container>
  );
};

export default ProductDescription;
