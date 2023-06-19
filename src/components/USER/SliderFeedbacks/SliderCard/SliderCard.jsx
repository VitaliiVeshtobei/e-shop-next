import Image from 'next/image';
import { LinkItem, Item, Div, AvatarContainer, Box } from './SliderCard.styled';

export const SliderCard = ({ name, feedback, avatar, anime }) => {
  return (
    <Item anime={anime}>
      <LinkItem>
        <Div>
          <AvatarContainer>
            <Image
              src={avatar}
              alt={name}
              width={60}
              height={60}
            />
          </AvatarContainer>
          <h3>{name}</h3>
        </Div>
        <Box>
          <p>{feedback}</p>
        </Box>
      </LinkItem>
    </Item>
  );
};
