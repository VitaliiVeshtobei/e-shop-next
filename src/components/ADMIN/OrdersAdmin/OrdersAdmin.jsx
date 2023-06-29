import React from 'react';

export const OrdersAdmin = ({ orders }) => {
  return (
    <>
      <div>OrdersAdmin</div>
      <ul>
        {orders.map((order) => {
          return <li key={order._id}>{order.name}</li>;
        })}
      </ul>
    </>
  );
};
