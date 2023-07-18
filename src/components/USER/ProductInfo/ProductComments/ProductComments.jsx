import { getCommentsByProductId } from '@/axios/axiosApi';

import React, { useEffect, useState } from 'react';

export const ProductComments = ({ product }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const data = await getCommentsByProductId('645df4df6039146a10e65fa5');
      setComments(data);
    };
    getComments();
  }, [product.id]);
  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment._id}>
              <p>Stars:{comment.stars}</p>
              <p>Text:{comment.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
