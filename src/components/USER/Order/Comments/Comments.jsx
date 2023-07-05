import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IoCheckmarkOutline } from 'react-icons/io5';

import { addOrderComment } from '@/redux/products/slice';

import { Container, Title, TextArea, StepWrapper, Step } from './Comments.styled';

const Comments = () => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const onTextBlur = (evt) => {
    dispatch(addOrderComment(evt.currentTarget.value));
    if (evt.currentTarget.value) {
      setDone(true);
    }
  };

  return (
    <Container done={done}>
      <StepWrapper>
        <Step done={done}>{done ? <IoCheckmarkOutline /> : 4}</Step>
        <Title>Додати коментар</Title>
      </StepWrapper>
      <TextArea onBlur={onTextBlur}></TextArea>
    </Container>
  );
};

export default Comments;
