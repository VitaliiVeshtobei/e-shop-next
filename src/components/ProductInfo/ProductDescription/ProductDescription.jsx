import { useSelector } from 'react-redux';
import { selectProductInfo } from '@/redux/products/selectors';
import { Container, Title, Description, DescriptionWrap } from './ProductDescription.styled.';
const ProductDescription = () => {
  const { description_multilang } = useSelector(selectProductInfo);
  const paragraphs = description_multilang.uk.split('<p>');
  const listItems = paragraphs.filter((p) => p.startsWith('<ul>')).map((p) => p.split('</li>'));

  return (
    <Container>
      <Title>Опис</Title>
      <DescriptionWrap>
        {paragraphs.map((p, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}

        {listItems.length > 0 && (
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
